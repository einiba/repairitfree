import Anthropic from "@anthropic-ai/sdk";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { PrismaClient } from "@prisma/client";
import sharp from "sharp";
import fs from "fs";
import path from "path";

// ── Config ──────────────────────────────────────────────────────────
const CONCURRENCY = 5;
const BATCH_DELAY_MS = 1_000;
const PROGRESS_INTERVAL = 50;

const BUCKET = process.env.DO_SPACES_BUCKET ?? "repairitfree-images";
const REGION = process.env.DO_SPACES_REGION ?? "nyc3";
const CDN_BASE = `https://${BUCKET}.${REGION}.cdn.digitaloceanspaces.com`;

interface ManifestEntry {
  guideId: string;
  stepNumber: number;
  imageKey: string;
  prompt: string;
}

// ── Clients ─────────────────────────────────────────────────────────
const prisma = new PrismaClient();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const s3 = new S3Client({
  endpoint: `https://${REGION}.digitaloceanspaces.com`,
  region: REGION,
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY!,
    secretAccessKey: process.env.DO_SPACES_SECRET!,
  },
  forcePathStyle: false,
});

// ── Helpers ─────────────────────────────────────────────────────────

async function generateImage(prompt: string): Promise<Buffer> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  });

  // Extract the image from the response
  for (const block of response.content) {
    if (block.type === "image") {
      const imageData = block.source.data;
      return Buffer.from(imageData, "base64");
    }
  }

  throw new Error("No image returned from Claude API");
}

async function convertToWebP(imageBuffer: Buffer): Promise<Buffer> {
  return sharp(imageBuffer).webp({ quality: 80 }).toBuffer();
}

async function uploadToSpaces(
  key: string,
  body: Buffer
): Promise<string> {
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: "image/webp",
      ACL: "public-read",
    })
  );
  return `${CDN_BASE}/${key}`;
}

async function processEntry(entry: ManifestEntry): Promise<void> {
  const objectKey = `guides/${entry.guideId}/step-${entry.stepNumber}.webp`;

  // Generate image via Claude
  const rawImage = await generateImage(entry.prompt);

  // Convert to WebP
  const webpImage = await convertToWebP(rawImage);

  // Upload to DO Spaces
  const cdnUrl = await uploadToSpaces(objectKey, webpImage);

  // Update the database
  await prisma.step.updateMany({
    where: {
      guideId: entry.guideId,
      stepNumber: entry.stepNumber,
    },
    data: {
      imageUrl: cdnUrl,
    },
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log("Starting image generation pipeline...");

  // 1. Read manifest
  const manifestPath = path.join(__dirname, "image-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    console.error("Missing scripts/image-manifest.json — nothing to process.");
    process.exit(1);
  }
  const manifest: ManifestEntry[] = JSON.parse(
    fs.readFileSync(manifestPath, "utf-8")
  );
  console.log(`Loaded ${manifest.length} entries from manifest.`);

  // 2. Query DB for steps that already have an image_url (skip those)
  const stepsWithImages = await prisma.step.findMany({
    where: { imageUrl: { not: null } },
    select: { guideId: true, stepNumber: true },
  });
  const doneSet = new Set(
    stepsWithImages.map((s) => `${s.guideId}::${s.stepNumber}`)
  );
  console.log(`${doneSet.size} steps already have images — skipping those.`);

  const pending = manifest.filter(
    (e) => !doneSet.has(`${e.guideId}::${e.stepNumber}`)
  );
  console.log(`${pending.length} steps to process.`);

  if (pending.length === 0) {
    console.log("Nothing to do.");
    await prisma.$disconnect();
    return;
  }

  // 3. Process in batches of CONCURRENCY
  let completed = 0;
  let failed = 0;

  for (let i = 0; i < pending.length; i += CONCURRENCY) {
    const batch = pending.slice(i, i + CONCURRENCY);

    const results = await Promise.allSettled(
      batch.map((entry) => processEntry(entry))
    );

    for (const result of results) {
      if (result.status === "fulfilled") {
        completed++;
      } else {
        failed++;
        console.error(`Failed:`, result.reason?.message ?? result.reason);
      }
    }

    if (completed % PROGRESS_INTERVAL === 0 || completed + failed === pending.length) {
      console.log(
        `Progress: ${completed} done, ${failed} failed, ${pending.length - completed - failed} remaining`
      );
    }

    // Rate limit delay between batches
    if (i + CONCURRENCY < pending.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  console.log(`\nComplete. ${completed} generated, ${failed} failed.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  prisma.$disconnect();
  process.exit(1);
});
