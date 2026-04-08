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

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;

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
  // Use Replicate's official model endpoint
  const response = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
      "Prefer": "wait",
    },
    body: JSON.stringify({
      input: {
        prompt: prompt,
        num_outputs: 1,
        aspect_ratio: "16:9",
        output_format: "webp",
        output_quality: 80,
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Replicate API ${response.status}: ${errText}`);
  }

  const result = await response.json();

  if (result.status === "failed") {
    throw new Error(`Replicate failed: ${result.error}`);
  }

  // If not yet complete (Prefer: wait should handle this, but just in case)
  if (result.status !== "succeeded" && result.urls?.get) {
    let polled = result;
    for (let i = 0; i < 60; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      const pollResponse = await fetch(polled.urls.get, {
        headers: { "Authorization": `Bearer ${REPLICATE_API_TOKEN}` },
      });
      polled = await pollResponse.json();
      if (polled.status === "succeeded" || polled.status === "failed") {
        if (polled.status === "failed") throw new Error(`Replicate failed: ${polled.error}`);
        const imageUrl = polled.output[0];
        const imageResponse = await fetch(imageUrl);
        return Buffer.from(await imageResponse.arrayBuffer());
      }
    }
    throw new Error("Replicate prediction timed out");
  }

  // Download the image
  const imageUrl = Array.isArray(result.output) ? result.output[0] : result.output;
  const imageResponse = await fetch(imageUrl);
  return Buffer.from(await imageResponse.arrayBuffer());
}

async function convertToWebP(imageBuffer: Buffer): Promise<Buffer> {
  // Flux outputs WebP directly when output_format is "webp",
  // but run through sharp as a safety net for format consistency
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

  // Generate image via Replicate Flux
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
