/**
 * Migration script: moves guide & category data from TypeScript files into Postgres via Prisma.
 *
 * Usage:  npx tsx scripts/migrate-to-postgres.ts
 *
 * Requires DATABASE_URL (and optionally DIRECT_DATABASE_URL) in .env.local or environment.
 * DO NOT run until the database has been created.
 */

import { PrismaClient } from "@prisma/client";

// Use relative imports — tsx doesn't resolve the @/* path alias
import { guides } from "../src/data/guides";
import { categories } from "../src/data/categories";
import { errorCodes } from "../src/data/error-codes";

const prisma = new PrismaClient({
  transactionOptions: {
    maxWait: 30000,
    timeout: 60000,
  },
});

const BATCH_SIZE = 10;

async function migrateCategories() {
  console.log(`\nMigrating ${categories.length} categories...`);

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: {
        name: cat.name,
        slug: cat.slug,
        icon: cat.icon,
        description: cat.description,
      },
      create: {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        icon: cat.icon,
        description: cat.description,
      },
    });
  }

  console.log(`  ✓ ${categories.length} categories upserted`);
}

async function migrateGuides() {
  console.log(`\nMigrating ${guides.length} guides (batch size ${BATCH_SIZE})...`);

  let processed = 0;
  let skipped = 0;
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  // Deduplicate guides by id and slug combo
  const uniqueGuides = guides.filter((g) => {
    const slugKey = `${g.categorySlug}/${g.brandSlug}/${g.problemSlug}`;
    if (seenIds.has(g.id) || seenSlugs.has(slugKey)) {
      skipped++;
      return false;
    }
    seenIds.add(g.id);
    seenSlugs.add(slugKey);
    return true;
  });

  console.log(`  Deduplicated: ${guides.length} → ${uniqueGuides.length} (${skipped} duplicates skipped)`);

  for (let i = 0; i < uniqueGuides.length; i += BATCH_SIZE) {
    const batch = uniqueGuides.slice(i, i + BATCH_SIZE);

    await prisma.$transaction(async (tx) => {
      for (const guide of batch) {
        // Upsert the guide itself — use composite slug key to handle duplicates
        const dbGuide = await tx.guide.upsert({
          where: { categorySlug_brandSlug_problemSlug: { categorySlug: guide.categorySlug, brandSlug: guide.brandSlug, problemSlug: guide.problemSlug } },
          update: {
            category: guide.category,
            categorySlug: guide.categorySlug,
            brand: guide.brand,
            brandSlug: guide.brandSlug,
            problemSlug: guide.problemSlug,
            problemTitle: guide.problemTitle,
            difficulty: guide.difficulty,
            timeEstimate: guide.timeEstimate,
            costEstimate: guide.costEstimate,
            toolsNeeded: guide.toolsNeeded,
            safetyWarnings: guide.safetyWarnings,
            quickDiagnosis: guide.quickDiagnosis,
            alternativeCauses: guide.alternativeCauses,
            whenToCallPro: guide.whenToCallPro,
            metaTitle: guide.metaTitle,
            metaDescription: guide.metaDescription,
            youtubeId: guide.youtubeId ?? null,
          },
          create: {
            id: guide.id,
            category: guide.category,
            categorySlug: guide.categorySlug,
            brand: guide.brand,
            brandSlug: guide.brandSlug,
            problemSlug: guide.problemSlug,
            problemTitle: guide.problemTitle,
            difficulty: guide.difficulty,
            timeEstimate: guide.timeEstimate,
            costEstimate: guide.costEstimate,
            toolsNeeded: guide.toolsNeeded,
            safetyWarnings: guide.safetyWarnings,
            quickDiagnosis: guide.quickDiagnosis,
            alternativeCauses: guide.alternativeCauses,
            whenToCallPro: guide.whenToCallPro,
            metaTitle: guide.metaTitle,
            metaDescription: guide.metaDescription,
            youtubeId: guide.youtubeId ?? null,
          },
        });

        // Delete existing parts & steps for this guide so we can recreate them cleanly
        await tx.part.deleteMany({ where: { guideId: dbGuide.id } });
        await tx.step.deleteMany({ where: { guideId: dbGuide.id } });

        // Bulk create parts
        if (guide.partsNeeded && guide.partsNeeded.length > 0) {
          await tx.part.createMany({
            data: guide.partsNeeded.map((part, idx) => ({
              guideId: dbGuide.id,
              name: part.name,
              costRange: part.costRange,
              amazonUrl: part.amazonUrl ?? null,
              ebayUrl: part.ebayUrl ?? null,
              ifixitUrl: part.ifixitUrl ?? null,
              sortOrder: idx,
            })),
          });
        }

        // Bulk create steps
        if (guide.steps && guide.steps.length > 0) {
          await tx.step.createMany({
            data: guide.steps.map((step) => ({
              guideId: dbGuide.id,
              stepNumber: step.number,
              title: step.title,
              description: step.description,
            })),
          });
        }
      }
    });

    processed += batch.length;

    if (processed % 100 === 0 || processed === uniqueGuides.length) {
      console.log(`  ... ${processed} / ${uniqueGuides.length} guides processed`);
    }
  }

  console.log(`  ✓ ${processed} guides migrated`);
}

async function migrateErrorCodes() {
  console.log(`\nMigrating ${errorCodes.length} error codes...`);

  for (const ec of errorCodes) {
    await prisma.errorCode.upsert({
      where: { id: ec.id },
      update: {
        deviceType: ec.deviceType,
        deviceTypeSlug: ec.deviceTypeSlug,
        code: ec.code,
        codeSlug: ec.codeSlug,
        meaning: ec.meaning,
        guideId: ec.guideId ?? null,
      },
      create: {
        id: ec.id,
        deviceType: ec.deviceType,
        deviceTypeSlug: ec.deviceTypeSlug,
        code: ec.code,
        codeSlug: ec.codeSlug,
        meaning: ec.meaning,
        guideId: ec.guideId ?? null,
      },
    });
  }

  console.log(`  ✓ ${errorCodes.length} error codes upserted`);
}

async function main() {
  console.log("=== RepairItFree Postgres Migration ===");
  console.log(`Source data: ${guides.length} guides, ${categories.length} categories, ${errorCodes.length} error codes`);

  await migrateCategories();
  await migrateGuides();
  await migrateErrorCodes();

  // Print totals from the database
  const [guideCount, categoryCount, partCount, stepCount, errorCodeCount] =
    await Promise.all([
      prisma.guide.count(),
      prisma.category.count(),
      prisma.part.count(),
      prisma.step.count(),
      prisma.errorCode.count(),
    ]);

  console.log("\n=== Migration Complete ===");
  console.log(`  Categories : ${categoryCount}`);
  console.log(`  Guides     : ${guideCount}`);
  console.log(`  Parts      : ${partCount}`);
  console.log(`  Steps      : ${stepCount}`);
  console.log(`  Error Codes: ${errorCodeCount}`);
}

main()
  .catch((e) => {
    console.error("Migration failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
