import Link from "next/link";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Repair Guides | RepairItFree",
  description:
    "Browse 900+ free repair guides by category. Step-by-step instructions for electronics, appliances, and more.",
};

export default function GuidesPage() {
  // Pre-compute guide counts per category slug
  const countBySlug: Record<string, number> = {};
  for (const g of guides) {
    countBySlug[g.categorySlug] = (countBySlug[g.categorySlug] || 0) + 1;
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            All Repair Guides
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Browse {guides.length}+ free repair guides by category
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const count = countBySlug[cat.slug] || 0;
            return (
              <Link
                key={cat.id}
                href={`/guides/${cat.slug}`}
                className="block p-5 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group bg-white"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h2 className="font-semibold text-base group-hover:text-primary">
                  {cat.name}
                </h2>
                <p className="text-sm text-muted mt-1 line-clamp-2">
                  {cat.description}
                </p>
                <p className="text-xs text-primary font-medium mt-3">
                  {count} {count === 1 ? "guide" : "guides"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
