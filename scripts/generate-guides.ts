/**
 * Guide Generation Script
 *
 * This script generates repair guide content using the Claude API.
 * It reads from a seed data CSV and outputs guide data in JSON format.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=your_key npx tsx scripts/generate-guides.ts
 *
 * The seed data format (CSV):
 *   device_category,brand,model_family,problem_slug,problem_title,symptoms,common_causes
 */

interface SeedData {
  device_category: string;
  category_slug: string;
  brand: string;
  brand_slug: string;
  problem_slug: string;
  problem_title: string;
  symptoms: string;
  common_causes: string;
}

const SEED_DATA: SeedData[] = [
  {
    device_category: "Washing Machines",
    category_slug: "washing-machines",
    brand: "Whirlpool",
    brand_slug: "whirlpool",
    problem_slug: "f21-error-code",
    problem_title: "F21 Error Code",
    symptoms: "Machine stops mid-cycle, water not draining, error code F21 displayed",
    common_causes: "Clogged drain pump filter, kinked drain hose, faulty drain pump",
  },
  {
    device_category: "Dryers",
    category_slug: "dryers",
    brand: "GE",
    brand_slug: "ge",
    problem_slug: "squeaking-noise",
    problem_title: "Squeaking Noise",
    symptoms: "Loud squeaking or squealing when running, noise gets worse over time",
    common_causes: "Worn drum rollers, worn drum glides, worn idler pulley, worn belt",
  },
  {
    device_category: "Dishwashers",
    category_slug: "dishwashers",
    brand: "Samsung",
    brand_slug: "samsung",
    problem_slug: "not-cleaning-dishes",
    problem_title: "Not Cleaning Dishes",
    symptoms: "Dishes come out dirty, food particles remaining, cloudy glasses",
    common_causes: "Clogged spray arms, dirty filter, wrong detergent, water temperature too low",
  },
  {
    device_category: "Laptops",
    category_slug: "laptops",
    brand: "Dell",
    brand_slug: "dell",
    problem_slug: "wont-turn-on",
    problem_title: "Won't Turn On",
    symptoms: "Pressing power button does nothing, no lights, no fan spin",
    common_causes: "Drained battery, faulty charger, static buildup, RAM issue, dead motherboard",
  },
  {
    device_category: "Game Consoles",
    category_slug: "game-consoles",
    brand: "Nintendo",
    brand_slug: "nintendo",
    problem_slug: "switch-joy-con-drift",
    problem_title: "Joy-Con Drift",
    symptoms: "Character moves on its own, cursor drifts, inputs registered without touching stick",
    common_causes: "Dust/debris under joystick, worn joystick contacts, calibration issue",
  },
];

const GENERATION_PROMPT = `You are an expert electronics and appliance repair technician writing a guide for someone with no technical experience. Write in simple, clear language. Assume the reader cannot afford professional repair and needs to do this themselves.

Write a complete repair guide for the following problem:

Device: {device_category} — {brand}
Problem: {problem_title}
Symptoms: {symptoms}
Common Causes: {common_causes}

Return your response as a valid JSON object with this exact structure:
{
  "quickDiagnosis": "2-3 sentences explaining what's likely wrong",
  "difficulty": "Easy" or "Medium" or "Hard",
  "timeEstimate": "e.g., 20-30 minutes",
  "costEstimate": "e.g., $8-$15",
  "toolsNeeded": ["tool1", "tool2"],
  "partsNeeded": [{"name": "Part Name", "costRange": "$X-$Y"}],
  "safetyWarnings": ["warning1", "warning2"],
  "steps": [{"number": 1, "title": "Step title", "description": "Detailed step description"}],
  "alternativeCauses": ["cause1", "cause2"],
  "whenToCallPro": "Honest assessment of when DIY isn't worth it"
}

Write for a reading level of grade 6-8. Avoid jargon. When you must use a technical term, explain it in parentheses. Be encouraging.`;

async function generateGuide(seed: SeedData): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY environment variable is required");
    process.exit(1);
  }

  const prompt = GENERATION_PROMPT
    .replace("{device_category}", seed.device_category)
    .replace("{brand}", seed.brand)
    .replace("{problem_title}", seed.problem_title)
    .replace("{symptoms}", seed.symptoms)
    .replace("{common_causes}", seed.common_causes);

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      console.error(`API error for ${seed.problem_title}:`, await res.text());
      return;
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || "";
    const guideData = JSON.parse(text);

    const guide = {
      id: `${seed.brand_slug}-${seed.category_slug.replace(/s$/, "")}-${seed.problem_slug}`,
      category: seed.device_category,
      categorySlug: seed.category_slug,
      brand: seed.brand,
      brandSlug: seed.brand_slug,
      problemSlug: seed.problem_slug,
      problemTitle: seed.problem_title,
      metaTitle: `${seed.brand} ${seed.device_category.slice(0, -1)} ${seed.problem_title} — Free Fix Guide | RepairItFree`,
      metaDescription: `Learn how to fix your ${seed.brand} ${seed.device_category.slice(0, -1)} ${seed.problem_title} yourself. Step-by-step guide with parts list and cost estimate. Difficulty: ${guideData.difficulty}.`,
      ...guideData,
    };

    console.log(JSON.stringify(guide, null, 2));
    console.log(",");
  } catch (error) {
    console.error(`Failed to generate guide for ${seed.problem_title}:`, error);
  }
}

async function main() {
  console.log("// Generated guides — paste into src/data/guides.ts");
  console.log("[");

  for (const seed of SEED_DATA) {
    console.error(`Generating: ${seed.brand} ${seed.problem_title}...`);
    await generateGuide(seed);
    // Rate limit
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log("]");
}

main();
