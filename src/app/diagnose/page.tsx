import type { Metadata } from "next";
import { getCategories } from "@/lib/queries";
import { prisma } from "@/lib/db";
import DiagnoseClient from "@/components/DiagnoseClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Guided Repair Diagnostic Tool",
  description:
    "Find the right repair guide for your device. Select your device type, brand, and problem to get free step-by-step repair instructions.",
};

export default async function DiagnosePage() {
  const [categories, guideRows] = await Promise.all([
    getCategories(),
    prisma.guide.findMany({
      select: {
        id: true,
        category: true,
        categorySlug: true,
        brand: true,
        brandSlug: true,
        problemSlug: true,
        problemTitle: true,
        difficulty: true,
        timeEstimate: true,
        costEstimate: true,
        quickDiagnosis: true,
        _count: { select: { steps: true } },
      },
    }),
  ]);

  const guideList = guideRows.map((g) => ({
    id: g.id,
    category: g.category,
    categorySlug: g.categorySlug,
    brand: g.brand,
    brandSlug: g.brandSlug,
    problemSlug: g.problemSlug,
    problemTitle: g.problemTitle,
    difficulty: g.difficulty,
    timeEstimate: g.timeEstimate,
    costEstimate: g.costEstimate,
    quickDiagnosis: g.quickDiagnosis,
    stepCount: g._count.steps,
  }));

  return (
    <DiagnoseClient
      categories={categories.map((c) => ({ name: c.name, slug: c.slug }))}
      guideList={guideList}
    />
  );
}
