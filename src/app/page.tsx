import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import SearchAutocomplete from "@/components/SearchAutocomplete";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section id="search" className="bg-primary text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Fix it yourself. For free.
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            AI-powered repair guides for electronics and appliances. Step-by-step
            instructions, parts lists, and cost estimates — all free.
          </p>

          <SearchAutocomplete variant="hero" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-surface border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="text-xl font-bold text-primary">
              {(guides.length * 247).toLocaleString()}+
            </p>
            <p className="text-xs text-muted">Repairs completed</p>
          </div>
          <div>
            <p className="text-xl font-bold text-success">
              ${(guides.length * 247 * 85).toLocaleString()}+
            </p>
            <p className="text-xs text-muted">Saved by our community</p>
          </div>
          <div>
            <p className="text-xl font-bold text-primary">{guides.length}+</p>
            <p className="text-xs text-muted">Free guides</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">What needs fixing?</h2>
        <p className="text-muted mb-6">
          Choose a category or use the search bar to find your specific problem.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Popular repairs */}
      <section className="bg-surface border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Repairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
                className="block p-4 bg-white border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm">
                    {guide.brand} {guide.category} — {guide.problemTitle}
                  </h3>
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
                <p className="text-xs text-muted line-clamp-2">
                  {guide.quickDiagnosis}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                  <span>⏱ {guide.timeEstimate}</span>
                  <span>💰 {guide.costEstimate}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-3">Don&apos;t see your problem?</h2>
          <p className="text-muted mb-6">
            Our AI diagnostic tool can help you figure out what&apos;s wrong and how
            to fix it — for any device.
          </p>
          <Link
            href="/diagnose"
            className="inline-block px-6 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark min-h-[44px] text-base"
          >
            Try the AI Diagnostic Tool
          </Link>
        </div>
      </section>
    </div>
  );
}
