import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategories, getGuidesByBrand } from "@/lib/queries";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; brand: string }>;
}): Promise<Metadata> {
  const { category, brand } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === category);
  const brandGuides = await getGuidesByBrand(category, brand);
  if (!cat || brandGuides.length === 0) return {};
  const brandName = brandGuides[0].brand;
  return {
    title: `${brandName} ${cat.name} Repair Guides`,
    description: `Free repair guides for ${brandName} ${cat.name.toLowerCase()}. Step-by-step instructions with parts lists and cost estimates.`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ category: string; brand: string }>;
}) {
  const { category, brand } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === category);
  const brandGuides = await getGuidesByBrand(category, brand);

  if (!cat || brandGuides.length === 0) notFound();

  const brandName = brandGuides[0].brand;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: cat.name, href: `/guides/${category}` },
          { label: brandName },
        ]}
      />

      <h1 className="text-2xl font-bold mb-2">
        {brandName} {cat.name} Repair Guides
      </h1>
      <p className="text-muted mb-6 text-sm">
        Free step-by-step repair guides for {brandName}{" "}
        {cat.name.toLowerCase()}.
      </p>

      <div className="space-y-3">
        {brandGuides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
            className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-sm">
                  {guide.problemTitle}
                </h3>
                <p className="text-xs text-muted mt-1 line-clamp-2">
                  {guide.quickDiagnosis}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                  guide.difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : guide.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {guide.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted">
              <span>⏱ {guide.timeEstimate}</span>
              <span>💰 {guide.costEstimate}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
