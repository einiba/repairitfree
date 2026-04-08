import Link from "next/link";
import type { Guide } from "@/lib/types";

function DifficultyBadge({ difficulty }: { difficulty: Guide["difficulty"] }) {
  const colors =
    difficulty === "Easy"
      ? "bg-green-100 text-green-700"
      : difficulty === "Medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors}`}>
      {difficulty}
    </span>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
      className="p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all text-sm"
    >
      <p className="font-semibold mb-1">
        {guide.brand} {guide.problemTitle}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <DifficultyBadge difficulty={guide.difficulty} />
        <span className="text-xs text-muted">{guide.timeEstimate}</span>
      </div>
    </Link>
  );
}

function GuideSection({
  title,
  guides,
}: {
  title: string;
  guides: Guide[];
}) {
  if (guides.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-base font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {guides.map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
      </div>
    </div>
  );
}

export default function RelatedGuides({
  sameBrand,
  sameProblem,
  popularCategory,
  brandName,
  categoryName,
  problemTitle,
}: {
  sameBrand: Guide[];
  sameProblem: Guide[];
  popularCategory: Guide[];
  brandName: string;
  categoryName: string;
  problemTitle: string;
}) {
  const totalLinks =
    sameBrand.length + sameProblem.length + popularCategory.length;
  if (totalLinks === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold mb-4">Related Guides</h2>
      <GuideSection
        title={`More ${brandName} ${categoryName} Guides`}
        guides={sameBrand}
      />
      <GuideSection
        title={`${problemTitle} Guides for Other Brands`}
        guides={sameProblem}
      />
      <GuideSection
        title={`Popular ${categoryName} Guides`}
        guides={popularCategory}
      />
    </section>
  );
}
