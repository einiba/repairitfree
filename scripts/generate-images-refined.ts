import Anthropic from "@anthropic-ai/sdk";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const DB_URL = process.env.DATABASE_URL!;
const REPLICATE_TOKEN = process.env.REPLICATE_API_TOKEN!;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY!;
const SPACES_KEY = process.env.DO_SPACES_KEY!;
const SPACES_SECRET = process.env.DO_SPACES_SECRET!;
const SPACES_BUCKET = process.env.DO_SPACES_BUCKET || "repairitfree-images";
const SPACES_REGION = process.env.DO_SPACES_REGION || "nyc3";

const TARGET_GUIDES = [
  "kenmore-washer-f5-error",
  "samsung-dryer-not-heating",
  "bosch-dishwasher-e24-error",
];

const s3 = new S3Client({
  endpoint: `https://${SPACES_REGION}.digitaloceanspaces.com`,
  region: SPACES_REGION,
  credentials: { accessKeyId: SPACES_KEY, secretAccessKey: SPACES_SECRET },
  forcePathStyle: false,
});

const anthropic = new Anthropic({ apiKey: ANTHROPIC_KEY });

// Learned rules from validation failures — applied to ALL future prompts
const GLOBAL_RULES: string[] = [
  "Never show hands holding tools incorrectly or in impossible positions",
  "Show the specific appliance/device mentioned, not a generic device",
  "If the step involves a screen or display, show what should be ON the screen",
  "For unplugging steps, show the plug being pulled from the wall outlet, not just a cord",
  "For cleaning steps, show the specific part being cleaned with the mentioned tool",
];

interface StepData {
  stepId: string;
  guideId: string;
  stepNumber: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  problemTitle: string;
}

async function getSteps(): Promise<StepData[]> {
  // Use pg directly since we need raw queries
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: DB_URL, ssl: { rejectUnauthorized: false, checkServerIdentity: () => undefined } });
  await client.connect();

  const result = await client.query(
    `SELECT s.id as step_id, g.id as guide_id, s.step_number, s.title, s.description,
            g.brand, g.category, g.problem_title
     FROM steps s JOIN guides g ON s.guide_id = g.id
     WHERE g.id = ANY($1)
     ORDER BY g.id, s.step_number`,
    [TARGET_GUIDES]
  );

  await client.end();
  return result.rows.map((r: any) => ({
    stepId: r.step_id,
    guideId: r.guide_id,
    stepNumber: r.step_number,
    title: r.title,
    description: r.description,
    brand: r.brand,
    category: r.category,
    problemTitle: r.problem_title,
  }));
}

function buildPrompt(step: StepData): string {
  // Build a specific prompt from the actual step content
  const deviceDesc = `${step.brand} ${step.category.toLowerCase().replace(/s$/, "")}`;

  // Extract key visual elements from the description
  const desc = step.description;
  let visualFocus = "";

  // Detect what the step is actually about
  if (/unplug|power cord|outlet/i.test(desc)) {
    visualFocus = `a hand pulling a power plug from a wall outlet, with a ${deviceDesc} visible in the background`;
  } else if (/filter.*clean|clean.*filter|scrub.*filter/i.test(desc)) {
    visualFocus = `a circular mesh filter being rinsed under a kitchen sink faucet, with an old toothbrush nearby, food debris being washed off`;
  } else if (/filter.*remove|remove.*filter|twist.*counter/i.test(desc)) {
    visualFocus = `a hand twisting and removing a cylindrical mesh filter from the bottom of a dishwasher tub`;
  } else if (/latch.*inspect|inspect.*latch|look at.*latch/i.test(desc)) {
    visualFocus = `a close-up view of a washing machine door latch mechanism, showing the latch hook and strike plate`;
  } else if (/clean.*latch|damp cloth/i.test(desc)) {
    visualFocus = `a hand using a damp cloth to wipe around a washing machine door latch and strike plate`;
  } else if (/screw.*remove|remove.*screw|phillips.*screwdriver/i.test(desc)) {
    visualFocus = `a Phillips screwdriver removing screws from a ${deviceDesc} component, with screws placed in a small bowl nearby`;
  } else if (/wire harness|disconnect.*wire|reconnect.*wire/i.test(desc)) {
    visualFocus = `hands carefully disconnecting a small wire harness connector inside a ${deviceDesc}, with a phone taking a photo for reference`;
  } else if (/install.*new|connect.*new|place.*same position/i.test(desc)) {
    visualFocus = `hands installing a new replacement part into a ${deviceDesc}, aligning it with screw holes`;
  } else if (/test|try.*cycle|run.*cycle|plug.*back/i.test(desc)) {
    visualFocus = `a ${deviceDesc} running a test cycle, with a person's hand pressing the start button, the display showing normal operation`;
  } else if (/vent.*hose|lint.*vent|disconnect.*vent/i.test(desc)) {
    visualFocus = `hands disconnecting a flexible aluminum vent hose from the back of a dryer, with visible lint buildup inside the hose`;
  } else if (/back panel|remove.*panel|screws.*panel/i.test(desc)) {
    visualFocus = `a person using a nut driver to remove screws from the back panel of a dryer, with screws placed in a bowl`;
  } else if (/thermal fuse.*locate|locate.*thermal fuse|small.*white.*silver/i.test(desc)) {
    visualFocus = `a close-up inside a dryer showing a small white thermal fuse mounted on the blower housing, with two wires attached`;
  } else if (/multimeter|continuity|probe.*terminal/i.test(desc)) {
    visualFocus = `a digital multimeter with red and black probes touching the terminals of a small thermal fuse component, the display showing a reading`;
  } else if (/replace.*fuse|replace.*element|disconnect.*two wires/i.test(desc)) {
    visualFocus = `hands replacing a thermal fuse on a dryer blower housing, disconnecting old wires and connecting to a new fuse`;
  } else if (/reassemble|put.*back|reconnect.*hose/i.test(desc)) {
    visualFocus = `a person reattaching the back panel of a dryer with a screwdriver, the vent hose reconnected`;
  } else if (/drain hose|kinked|pinched|crushed/i.test(desc)) {
    visualFocus = `a drain hose running from the side of a dishwasher to under a kitchen sink, with a hand straightening a kinked section`;
  } else if (/garbage disposal|knockout plug/i.test(desc)) {
    visualFocus = `the underside of a kitchen sink showing a garbage disposal unit with a dishwasher drain hose connected to its inlet port`;
  } else if (/standing water|scoop.*out|towels.*pan/i.test(desc)) {
    visualFocus = `the bottom of an open dishwasher with standing water, a hand using towels to soak up water, a shallow pan nearby`;
  } else if (/debris|broken glass|food chunks/i.test(desc)) {
    visualFocus = `a flashlight shining into the drain pump opening at the bottom of a dishwasher, revealing small debris that needs to be removed`;
  } else if (/pull.*away.*wall|space behind/i.test(desc)) {
    visualFocus = `a person pulling a large dryer away from the wall, creating workspace behind it, the power cord disconnected`;
  } else {
    // Generic fallback based on step title
    visualFocus = `a person performing "${step.title}" on a ${deviceDesc}, showing the key action described`;
  }

  // Apply global learned rules
  const rulesStr = GLOBAL_RULES.map((r) => `- ${r}`).join("\n");

  return `Clean technical illustration in a flat vector style with soft shadows, white background, professional repair manual aesthetic. No text or labels in the image.

Scene: ${visualFocus}

Context: This is step ${step.stepNumber} of repairing a ${deviceDesc} — ${step.problemTitle}. The step is titled "${step.title}".

Rules:
${rulesStr}`;
}

async function generateImage(prompt: string): Promise<Buffer | null> {
  try {
    const response = await fetch(
      "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REPLICATE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            prompt,
            num_outputs: 1,
            aspect_ratio: "16:9",
            output_format: "webp",
            output_quality: 85,
          },
        }),
      }
    );

    const prediction = await response.json();
    if (!prediction.id) {
      console.error("  Failed to create prediction:", JSON.stringify(prediction).slice(0, 200));
      return null;
    }

    // Poll for completion
    for (let i = 0; i < 60; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      const statusRes = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        { headers: { Authorization: `Bearer ${REPLICATE_TOKEN}` } }
      );
      const status = await statusRes.json();

      if (status.status === "succeeded" && status.output?.[0]) {
        const imgRes = await fetch(status.output[0]);
        return Buffer.from(await imgRes.arrayBuffer());
      } else if (status.status === "failed") {
        console.error("  Generation failed:", status.error);
        return null;
      }
    }
    console.error("  Timed out waiting for image");
    return null;
  } catch (err) {
    console.error("  Error generating image:", err);
    return null;
  }
}

async function validateImage(
  imageBuffer: Buffer,
  step: StepData,
  prompt: string
): Promise<{ valid: boolean; feedback: string; globalFix?: string }> {
  try {
    const base64 = imageBuffer.toString("base64");
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: "image/webp", data: base64 },
            },
            {
              type: "text",
              text: `You are validating an AI-generated illustration for a repair guide step.

STEP INFO:
- Device: ${step.brand} ${step.category}
- Problem: ${step.problemTitle}
- Step ${step.stepNumber}: "${step.title}"
- Description: "${step.description}"

EVALUATION CRITERIA:
1. Does the image clearly depict the action described in the step?
2. Is the correct type of device/appliance shown?
3. Are tools or parts shown correctly (if applicable)?
4. Would someone following the guide find this image helpful?

Respond in this exact JSON format:
{
  "valid": true/false,
  "score": 1-10,
  "feedback": "brief explanation of what's wrong or right",
  "improved_prompt_hint": "if invalid, what should the image show instead",
  "global_fix": "ONLY if the issue is a pattern that would affect many images (not just this one), describe the rule. Otherwise null"
}`,
            },
          ],
        },
      ],
    });

    const text = (response.content[0] as any).text;
    const json = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] || "{}");
    return {
      valid: json.valid === true || (json.score && json.score >= 6),
      feedback: json.feedback || "No feedback",
      globalFix: json.global_fix || undefined,
    };
  } catch (err) {
    console.error("  Validation error:", err);
    return { valid: true, feedback: "Validation skipped due to error" };
  }
}

async function uploadToSpaces(buffer: Buffer, key: string): Promise<string> {
  await s3.send(
    new PutObjectCommand({
      Bucket: SPACES_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: "image/webp",
      ACL: "public-read",
    })
  );
  return `https://${SPACES_BUCKET}.${SPACES_REGION}.cdn.digitaloceanspaces.com/${key}`;
}

async function updateStepImage(stepId: string, imageUrl: string) {
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: DB_URL, ssl: { rejectUnauthorized: false, checkServerIdentity: () => undefined } });
  await client.connect();
  await client.query("UPDATE steps SET image_url = $1 WHERE id = $2", [imageUrl, stepId]);
  await client.end();
}

async function main() {
  console.log("=== Refined Image Generation Pipeline ===\n");
  console.log("Target guides:", TARGET_GUIDES.join(", "));
  console.log("Global rules:", GLOBAL_RULES.length, "\n");

  const steps = await getSteps();
  console.log(`Found ${steps.length} steps to process.\n`);

  let generated = 0;
  let validated = 0;
  let regenerated = 0;

  for (const step of steps) {
    const label = `[${step.guideId}] Step ${step.stepNumber}: ${step.title}`;
    console.log(`\n--- ${label} ---`);

    // Build prompt from actual step content
    const prompt = buildPrompt(step);
    console.log(`  Prompt: ${prompt.slice(0, 120)}...`);

    // Generate image
    console.log("  Generating...");
    let imageBuffer = await generateImage(prompt);
    if (!imageBuffer) {
      console.log("  SKIPPED (generation failed)");
      continue;
    }
    generated++;

    // Validate with Claude vision
    console.log("  Validating with Claude vision...");
    let validation = await validateImage(imageBuffer, step, prompt);
    console.log(`  Validation: ${validation.valid ? "PASS" : "FAIL"} — ${validation.feedback}`);

    // If global fix learned, add to rules
    if (validation.globalFix) {
      console.log(`  GLOBAL FIX LEARNED: ${validation.globalFix}`);
      if (!GLOBAL_RULES.includes(validation.globalFix)) {
        GLOBAL_RULES.push(validation.globalFix);
      }
    }

    // If failed, regenerate with improved prompt
    if (!validation.valid) {
      console.log("  Regenerating with improved prompt...");
      const improvedPrompt = prompt + `\n\nIMPORTANT FIX: ${validation.feedback}`;
      imageBuffer = await generateImage(improvedPrompt);
      if (!imageBuffer) {
        console.log("  SKIPPED (regeneration failed)");
        continue;
      }
      regenerated++;

      // Validate again
      console.log("  Re-validating...");
      validation = await validateImage(imageBuffer, step, improvedPrompt);
      console.log(
        `  Re-validation: ${validation.valid ? "PASS" : "FAIL"} — ${validation.feedback}`
      );

      if (validation.globalFix && !GLOBAL_RULES.includes(validation.globalFix)) {
        console.log(`  GLOBAL FIX LEARNED: ${validation.globalFix}`);
        GLOBAL_RULES.push(validation.globalFix);
      }

      // Accept even if second attempt fails — best effort
      if (!validation.valid) {
        console.log("  Using best effort (2nd attempt)");
      }
    }

    validated++;

    // Upload to DO Spaces
    const key = `guides/${step.guideId}/step-${step.stepNumber}.webp`;
    console.log(`  Uploading to ${key}...`);
    const imageUrl = await uploadToSpaces(imageBuffer!, key);
    console.log(`  URL: ${imageUrl}`);

    // Update database
    await updateStepImage(step.stepId.toString(), imageUrl);
    console.log("  DB updated.");

    // Rate limit: wait between images
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Total steps: ${steps.length}`);
  console.log(`Generated: ${generated}`);
  console.log(`Validated: ${validated}`);
  console.log(`Regenerated: ${regenerated}`);
  console.log(`\nFinal global rules (${GLOBAL_RULES.length}):`);
  GLOBAL_RULES.forEach((r, i) => console.log(`  ${i + 1}. ${r}`));
}

main().catch(console.error);
