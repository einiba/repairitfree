#!/usr/bin/env node

/**
 * scrape-autocomplete.js
 *
 * Google Autocomplete scraper for repair queries.
 * - Generates seed queries from brand x device x template combos
 * - Fetches Google autocomplete suggestions
 * - Deduplicates and filters for repair-related queries
 * - Cross-references against existing guide IDs to find gaps
 * - Outputs structured gaps to scripts/autocomplete-gaps.json
 * - Outputs topics file to scripts/autocomplete-topics.json (feeds generate-matrix.js)
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------

const BRANDS = [
  "Samsung", "LG", "Whirlpool", "GE", "Maytag",
  "Kenmore", "Bosch", "Frigidaire", "Apple", "HP", "Dell", "Sony",
];

const DEVICES = [
  { name: "washer", category: "Washing Machines", categorySlug: "washing-machines" },
  { name: "dryer", category: "Dryers", categorySlug: "dryers" },
  { name: "dishwasher", category: "Dishwashers", categorySlug: "dishwashers" },
  { name: "refrigerator", category: "Refrigerators", categorySlug: "refrigerators" },
  { name: "oven", category: "Ovens & Ranges", categorySlug: "ovens-ranges" },
  { name: "microwave", category: "Microwaves", categorySlug: "microwaves" },
  { name: "iPhone", category: "Phones", categorySlug: "phones" },
  { name: "laptop", category: "Laptops", categorySlug: "laptops" },
  { name: "TV", category: "TVs", categorySlug: "tvs" },
  { name: "PS5", category: "Gaming Consoles", categorySlug: "gaming-consoles" },
];

const SEED_TEMPLATES = [
  "{brand} {device} not working",
  "{brand} {device} error code",
  "{device} won't {action}",
  "how to fix {device}",
  "{brand} {device} repair",
];

// Actions for the "won't {action}" template
const ACTIONS = [
  "start", "turn on", "drain", "spin", "heat",
  "charge", "connect", "work", "stop",
];

// Brand-to-device compatibility — filter out nonsensical combos
const ELECTRONICS_BRANDS = new Set(["Apple", "HP", "Dell", "Sony"]);
const APPLIANCE_BRANDS = new Set(["Samsung", "LG", "Whirlpool", "GE", "Maytag", "Kenmore", "Bosch", "Frigidaire"]);
const ELECTRONICS_DEVICES = new Set(["iPhone", "laptop", "TV", "PS5"]);
const APPLIANCE_DEVICES = new Set(["washer", "dryer", "dishwasher", "refrigerator", "oven", "microwave"]);

// Samsung, LG, Sony span both; Apple/HP/Dell are electronics-only; others appliance-only
function isBrandDeviceCompatible(brand, deviceName) {
  if (["Samsung", "LG", "Sony"].includes(brand)) return true;
  if (ELECTRONICS_BRANDS.has(brand) && ELECTRONICS_DEVICES.has(deviceName)) return true;
  if (APPLIANCE_BRANDS.has(brand) && APPLIANCE_DEVICES.has(deviceName)) return true;
  // Apple only makes iPhones from our device list
  if (brand === "Apple" && deviceName !== "iPhone") return false;
  // HP/Dell only make laptops from our device list
  if ((brand === "HP" || brand === "Dell") && deviceName !== "laptop" && deviceName !== "TV") return false;
  return false;
}

// ---------------------------------------------------------------------------
// LOAD EXISTING GUIDE IDs
// ---------------------------------------------------------------------------

function loadExistingGuideIds() {
  const dataDir = path.join(__dirname, "..", "src", "data");
  const ids = new Set();

  // Read all guide files and extract IDs
  const files = fs.readdirSync(dataDir).filter((f) => f.startsWith("guides") && f.endsWith(".ts"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
    // Match id: "some-id" patterns
    const idRegex = /id:\s*["']([^"']+)["']/g;
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      ids.add(match[1]);
    }
  }

  return ids;
}

// ---------------------------------------------------------------------------
// QUERY GENERATION
// ---------------------------------------------------------------------------

function generateQueries() {
  const queries = [];

  for (const brand of BRANDS) {
    for (const device of DEVICES) {
      if (!isBrandDeviceCompatible(brand, device.name)) continue;

      for (const template of SEED_TEMPLATES) {
        if (template.includes("{action}")) {
          // Expand action templates
          for (const action of ACTIONS) {
            const q = template
              .replace("{brand}", brand)
              .replace("{device}", device.name)
              .replace("{action}", action);
            queries.push({ query: q, brand, device });
          }
        } else {
          const q = template
            .replace("{brand}", brand)
            .replace("{device}", device.name);
          queries.push({ query: q, brand, device });
        }
      }
    }
  }

  // Also add device-only queries (no brand)
  for (const device of DEVICES) {
    queries.push({ query: `${device.name} not working`, brand: null, device });
    queries.push({ query: `how to fix ${device.name}`, brand: null, device });
    queries.push({ query: `${device.name} repair`, brand: null, device });
    queries.push({ query: `${device.name} troubleshooting`, brand: null, device });
    queries.push({ query: `${device.name} won't turn on`, brand: null, device });
    queries.push({ query: `${device.name} making noise`, brand: null, device });
    queries.push({ query: `${device.name} error code`, brand: null, device });
  }

  return queries;
}

// ---------------------------------------------------------------------------
// AUTOCOMPLETE FETCHER
// ---------------------------------------------------------------------------

async function fetchAutocomplete(query) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data[1] || [];
  } catch {
    return [];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// FILTERS & CLASSIFIERS
// ---------------------------------------------------------------------------

const REPAIR_KEYWORDS = [
  "not working", "won't", "wont", "error", "fix", "repair", "broken",
  "not heating", "not cooling", "not spinning", "not draining",
  "not turning on", "not starting", "won't start", "won't turn on",
  "leaking", "noise", "loud", "beeping", "flashing", "stuck",
  "troubleshoot", "reset", "replace", "clogged", "frozen",
  "overheating", "shutting off", "not charging", "not connecting",
  "not responding", "slow", "flickering", "black screen", "blue screen",
  "won't charge", "keeps restarting", "not dispensing", "not making ice",
  "smells", "burning smell", "smoke", "vibrating", "shaking",
  "code", "fault", "issue", "problem", "doesn't work",
];

function isRepairRelated(suggestion) {
  const lower = suggestion.toLowerCase();
  return REPAIR_KEYWORDS.some((kw) => lower.includes(kw));
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Detect which brand a suggestion is about
 */
function detectBrand(suggestion) {
  const lower = suggestion.toLowerCase();
  for (const b of BRANDS) {
    if (lower.includes(b.toLowerCase())) return b;
  }
  return null;
}

/**
 * Detect which device category a suggestion falls into
 */
function detectDevice(suggestion) {
  const lower = suggestion.toLowerCase();
  for (const d of DEVICES) {
    if (lower.includes(d.name.toLowerCase())) return d;
  }
  // Aliases
  if (lower.includes("fridge")) return DEVICES.find((d) => d.name === "refrigerator");
  if (lower.includes("washing machine")) return DEVICES.find((d) => d.name === "washer");
  if (lower.includes("playstation") || lower.includes("ps5")) return DEVICES.find((d) => d.name === "PS5");
  if (lower.includes("television")) return DEVICES.find((d) => d.name === "TV");
  return null;
}

/**
 * Estimate search volume based on suggestion position and specificity.
 * Google autocomplete suggestions are ranked roughly by popularity.
 */
function estimateVolume(suggestion, position) {
  // Shorter, more generic queries tend to have higher volume
  const words = suggestion.split(/\s+/).length;
  if (position <= 2 && words <= 5) return "high";
  if (position <= 4 && words <= 6) return "medium";
  return "low";
}

/**
 * Extract a human-readable problem title from a search query.
 */
function extractProblem(suggestion, brand, deviceName) {
  let problem = suggestion.toLowerCase();
  // Strip brand and device name
  if (brand) problem = problem.replace(brand.toLowerCase(), "");
  if (deviceName) problem = problem.replace(deviceName.toLowerCase(), "");
  // Strip filler words
  problem = problem.replace(/^\s*(how to |fix |repair )/i, "");
  problem = problem.trim().replace(/^[-\s]+|[-\s]+$/g, "");
  // Title case
  if (problem.length > 0) {
    problem = problem.charAt(0).toUpperCase() + problem.slice(1);
  }
  return problem || suggestion;
}

/**
 * Check if suggestion matches an existing guide (exact or fuzzy)
 */
function isAlreadyCovered(suggestion, existingIds) {
  const id = slugify(suggestion);
  if (existingIds.has(id)) return true;

  // Also check if the core problem slug is contained in any existing guide ID
  // e.g., "samsung-washer-ub-error-code" should match if we already have that ID
  for (const existingId of existingIds) {
    // If IDs share significant overlap
    if (id.length > 10 && existingId.length > 10) {
      if (existingId === id) return true;
      // Check if one contains the other (for close matches)
      if (id.includes(existingId) || existingId.includes(id)) return true;
    }
  }
  return false;
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== Google Autocomplete Scraper for Repair Queries ===\n");

  // 1. Load existing guide IDs
  const existingIds = loadExistingGuideIds();
  console.log(`Loaded ${existingIds.size} existing guide IDs from src/data/\n`);

  // 2. Generate seed queries
  const seedQueries = generateQueries();
  console.log(`Generated ${seedQueries.length} seed queries\n`);

  // 3. Fetch autocomplete suggestions
  const suggestionMap = new Map(); // suggestion -> { brand, device, positions }
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < seedQueries.length; i++) {
    const { query, brand, device } = seedQueries[i];
    const suggestions = await fetchAutocomplete(query);

    if (suggestions.length > 0) {
      successCount++;
      suggestions.forEach((s, position) => {
        const key = s.toLowerCase().trim();
        if (!suggestionMap.has(key)) {
          suggestionMap.set(key, {
            original: s,
            brand: brand || detectBrand(s),
            device: device || detectDevice(s),
            positions: [position],
          });
        } else {
          const entry = suggestionMap.get(key);
          entry.positions.push(position);
          // Keep the more specific brand/device info
          if (!entry.brand && brand) entry.brand = brand;
          if (!entry.device && device) entry.device = device;
        }
      });
    } else {
      failCount++;
    }

    // Progress logging
    if ((i + 1) % 50 === 0 || i === seedQueries.length - 1) {
      console.log(
        `Progress: ${i + 1}/${seedQueries.length} queries | ${suggestionMap.size} unique suggestions`
      );
    }

    // 200ms delay between requests
    await sleep(200);
  }

  console.log(`\nFetch results: ${successCount} successful, ${failCount} failed`);
  console.log(`Total unique suggestions: ${suggestionMap.size}`);

  // 4. Filter for repair-related
  const repairSuggestions = [];
  for (const [key, data] of suggestionMap) {
    if (isRepairRelated(key)) {
      repairSuggestions.push(data);
    }
  }
  console.log(`Repair-related: ${repairSuggestions.length}`);

  // 5. Classify and find gaps
  const gaps = [];
  let existingMatches = 0;

  for (const data of repairSuggestions) {
    if (isAlreadyCovered(data.original, existingIds)) {
      existingMatches++;
      continue;
    }

    const brand = data.brand || detectBrand(data.original);
    const device = data.device || detectDevice(data.original);
    const avgPosition = data.positions.reduce((a, b) => a + b, 0) / data.positions.length;

    gaps.push({
      query: data.original,
      estimatedVolume: estimateVolume(data.original, avgPosition),
      category: device ? device.categorySlug : "general",
      brand: brand ? brand.toLowerCase() : null,
      device: device ? device.name : null,
      avgPosition: Math.round(avgPosition * 10) / 10,
      appearances: data.positions.length,
    });
  }

  // Sort: high volume first, then medium, then low; within each tier by appearances (desc)
  const volumeOrder = { high: 0, medium: 1, low: 2 };
  gaps.sort((a, b) => {
    const vDiff = volumeOrder[a.estimatedVolume] - volumeOrder[b.estimatedVolume];
    if (vDiff !== 0) return vDiff;
    return b.appearances - a.appearances;
  });

  console.log(`\nExisting matches: ${existingMatches}`);
  console.log(`New topic gaps: ${gaps.length}`);

  // 6. Write autocomplete-gaps.json
  const gapsOutput = {
    scrapedAt: new Date().toISOString(),
    gaps: gaps,
    existingMatches,
    newTopics: gaps.length,
  };

  const gapsPath = path.join(__dirname, "autocomplete-gaps.json");
  fs.writeFileSync(gapsPath, JSON.stringify(gapsOutput, null, 2));
  console.log(`\nGaps written to ${gapsPath}`);

  // 7. Generate autocomplete-topics.json (feeds into generate-matrix.js)
  // Format matches guide-topics.json structure
  const topics = gaps
    .filter((g) => g.brand && g.device) // Only include entries with known brand + device
    .map((g) => {
      const device = DEVICES.find((d) => d.name === g.device);
      const problem = extractProblem(g.query, g.brand, g.device);
      return {
        category: device ? device.category : "General",
        categorySlug: g.category,
        brand: g.brand.charAt(0).toUpperCase() + g.brand.slice(1),
        brandSlug: g.brand.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        problem: problem,
        problemSlug: slugify(problem),
      };
    });

  // Deduplicate topics by brand+category+problemSlug
  const topicKeys = new Set();
  const uniqueTopics = topics.filter((t) => {
    const key = `${t.brandSlug}-${t.categorySlug}-${t.problemSlug}`;
    if (topicKeys.has(key)) return false;
    topicKeys.add(key);
    return true;
  });

  const topicsPath = path.join(__dirname, "autocomplete-topics.json");
  fs.writeFileSync(topicsPath, JSON.stringify(uniqueTopics, null, 2));
  console.log(`Topics written to ${topicsPath} (${uniqueTopics.length} topics)`);

  // 8. Print summary
  console.log("\n=== SUMMARY ===");
  console.log(`Seed queries sent:      ${seedQueries.length}`);
  console.log(`Unique suggestions:     ${suggestionMap.size}`);
  console.log(`Repair-related:         ${repairSuggestions.length}`);
  console.log(`Already covered:        ${existingMatches}`);
  console.log(`New gaps found:         ${gaps.length}`);
  console.log(`Topics for generation:  ${uniqueTopics.length}`);

  // Show top 20 high-volume gaps
  const highGaps = gaps.filter((g) => g.estimatedVolume === "high");
  console.log(`\n--- Top High-Volume Gaps (${Math.min(20, highGaps.length)} of ${highGaps.length}) ---`);
  highGaps.slice(0, 20).forEach((g) => {
    console.log(`  [${g.category}] ${g.query} (brand: ${g.brand || "none"})`);
  });
}

main().catch(console.error);
