import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategories, getGuidesByCategory, getBrandsForCategory } from "@/lib/queries";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name} Repair Guides — Free Fix Guides`,
    description: `Free repair guides for ${cat.name.toLowerCase()}. Step-by-step instructions for common problems with parts lists and cost estimates.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const brands = await getBrandsForCategory(slug);
  const allGuides = await getGuidesByCategory(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: cat.name }]} />

      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{cat.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{cat.name} Repair Guides</h1>
          <p className="text-muted text-sm">{cat.description}</p>
        </div>
      </div>

      {brands.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Browse by Brand</h2>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/guides/${slug}/${brand.slug}`}
                className="px-4 py-2 border border-border rounded-lg text-sm hover:border-primary hover:bg-primary-light transition-all"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg font-semibold mb-3">All Guides</h2>
        {allGuides.length === 0 ? (
          <div className="text-center py-12 bg-surface rounded-lg">
            <p className="text-muted mb-4">
              We&apos;re still building guides for this category.
            </p>
            <Link
              href="/diagnose"
              className="text-primary underline text-sm"
            >
              Try the AI diagnostic tool instead
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {allGuides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
                className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-sm">
                      {guide.brand} — {guide.problemTitle}
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
        )}
      </section>
    </div>
  );
}
