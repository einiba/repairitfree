import { PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";
import { join } from "path";

const prisma = new PrismaClient();

interface ManifestEntry {
  guideId: string;
  stepNumber: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  problem: string;
  imageKey: string;
  prompt: string;
}

// Map category slugs to human-readable device types for prompts
const CATEGORY_DEVICE_MAP: Record<string, string> = {
  "washing-machines": "washing machine",
  "dryers": "dryer",
  "dishwashers": "dishwasher",
  "refrigerators": "refrigerator",
  "ovens": "oven",
  "microwaves": "microwave",
  "air-conditioners": "air conditioner",
  "water-heaters": "water heater",
  "garbage-disposals": "garbage disposal",
  "ice-makers": "ice maker",
  "freezers": "freezer",
  "range-hoods": "range hood",
  "cooktops": "cooktop",
  "furnaces": "furnace",
  "heat-pumps": "heat pump",
  "dehumidifiers": "dehumidifier",
  "humidifiers": "humidifier",
  "trash-compactors": "trash compactor",
  "wine-coolers": "wine cooler",
};

// Keywords that signal safety-related steps
const SAFETY_KEYWORDS = [
  "unplug", "disconnect", "power off", "turn off", "shut off",
  "circuit breaker", "safety", "protective", "gloves", "goggles",
  "water supply", "gas supply", "shut down", "de-energize",
];

// Keywords that signal inspection/diagnostic steps
const INSPECTION_KEYWORDS = [
  "inspect", "examine", "check", "look for", "identify", "locate",
  "find", "observe", "test", "measure", "diagnose", "verify",
];

// Keywords that signal removal/disassembly
const REMOVAL_KEYWORDS = [
  "remove", "unscrew", "detach", "pull out", "take off", "disassemble",
  "open", "lift", "pry", "unfasten", "disconnect", "slide out",
];

// Keywords that signal installation/reassembly
const INSTALL_KEYWORDS = [
  "install", "attach", "secure", "screw", "fasten", "connect",
  "replace", "insert", "slide in", "reassemble", "mount", "tighten",
  "reattach", "put back", "close",
];

// Keywords that signal cleaning
const CLEANING_KEYWORDS = [
  "clean", "wipe", "scrub", "flush", "rinse", "vacuum", "clear",
  "debris", "residue", "buildup",
];

function slugToReadable(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getDeviceType(categorySlug: string, category: string): string {
  return CATEGORY_DEVICE_MAP[categorySlug] || category.toLowerCase();
}

function matchesKeywords(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
}

function generatePrompt(
  step: { title: string; description: string; stepNumber: number },
  guide: { brand: string; category: string; categorySlug: string; problemTitle: string }
): string {
  const device = getDeviceType(guide.categorySlug, guide.category);
  const brand = guide.brand;
  const title = step.title;
  const desc = step.description;
  const combined = `${title} ${desc}`;

  let action: string;

  if (matchesKeywords(combined, SAFETY_KEYWORDS)) {
    // Safety step: emphasize the safety action
    if (combined.toLowerCase().includes("unplug") || combined.toLowerCase().includes("power")) {
      action = `hands unplugging a ${brand} ${device} power cord from a wall outlet`;
    } else if (combined.toLowerCase().includes("circuit breaker")) {
      action = `hand switching off a circuit breaker in an electrical panel`;
    } else if (combined.toLowerCase().includes("water supply")) {
      action = `hand turning a water supply valve to the off position behind a ${device}`;
    } else if (combined.toLowerCase().includes("gas supply")) {
      action = `hand turning a gas supply valve to the off position`;
    } else if (combined.toLowerCase().includes("gloves") || combined.toLowerCase().includes("goggles")) {
      action = `hands putting on protective safety gloves near a ${brand} ${device}`;
    } else {
      action = `performing a safety precaution step on a ${brand} ${device}`;
    }
  } else if (matchesKeywords(combined, CLEANING_KEYWORDS)) {
    action = `hands cleaning a component of a ${brand} ${device}`;
  } else if (matchesKeywords(combined, INSPECTION_KEYWORDS)) {
    // Inspection step: show someone examining a part
    action = `hands inspecting a component inside a ${brand} ${device}`;
  } else if (matchesKeywords(combined, REMOVAL_KEYWORDS)) {
    action = `hands removing a part from a ${brand} ${device}`;
  } else if (matchesKeywords(combined, INSTALL_KEYWORDS)) {
    action = `hands installing a component into a ${brand} ${device}`;
  } else {
    // Generic fallback
    action = `hands performing a repair step on a ${brand} ${device}`;
  }

  const prompt = `Instructional photo: ${action}. Close-up, well-lit, clean educational style, no text overlays.`;

  // Enforce 200 char limit
  if (prompt.length > 200) {
    return prompt.slice(0, 197) + "...";
  }

  return prompt;
}

async function main() {
  console.log("Fetching steps with no image_url...");

  const steps = await prisma.step.findMany({
    where: { imageUrl: null },
    include: {
      guide: true,
    },
    orderBy: [
      { guideId: "asc" },
      { stepNumber: "asc" },
    ],
  });

  console.log(`Found ${steps.length} steps needing images across guides.`);

  if (steps.length === 0) {
    console.log("No steps found. Exiting.");
    return;
  }

  const manifest: ManifestEntry[] = [];
  const updatePromises: Promise<unknown>[] = [];

  for (const step of steps) {
    const guide = step.guide;
    const category = slugToReadable(guide.categorySlug);
    const problem = guide.problemTitle;

    const prompt = generatePrompt(
      { title: step.title, description: step.description, stepNumber: step.stepNumber },
      { brand: guide.brand, category, categorySlug: guide.categorySlug, problemTitle: problem }
    );

    const entry: ManifestEntry = {
      guideId: guide.id,
      stepNumber: step.stepNumber,
      title: step.title,
      description: step.description,
      brand: guide.brand,
      category,
      problem,
      imageKey: `guides/${guide.id}/step-${step.stepNumber}.webp`,
      prompt,
    };

    manifest.push(entry);

    // Queue DB update for image_prompt
    updatePromises.push(
      prisma.step.update({
        where: { id: step.id },
        data: { imagePrompt: prompt },
      })
    );
  }

  // Batch DB updates in chunks of 100
  console.log("Updating image_prompt in database...");
  const BATCH_SIZE = 100;
  for (let i = 0; i < updatePromises.length; i += BATCH_SIZE) {
    const batch = updatePromises.slice(i, i + BATCH_SIZE);
    await Promise.all(batch);
    const done = Math.min(i + BATCH_SIZE, updatePromises.length);
    console.log(`  Updated ${done}/${updatePromises.length} steps`);
  }

  // Write manifest file
  const outPath = join(__dirname, "image-manifest.json");
  writeFileSync(outPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${outPath}`);
  console.log(`Total entries: ${manifest.length}`);

  // Print summary stats
  const guideIds = new Set(manifest.map((e) => e.guideId));
  console.log(`Unique guides: ${guideIds.size}`);
}

main()
  .catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
