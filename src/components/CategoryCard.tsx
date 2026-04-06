import Link from "next/link";
import type { DeviceCategory } from "@/lib/types";

export default function CategoryCard({
  category,
}: {
  category: DeviceCategory;
}) {
  return (
    <Link
      href={`/guides/${category.slug}`}
      className="block p-4 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
    >
      <div className="text-3xl mb-2">{category.icon}</div>
      <h3 className="font-semibold text-sm group-hover:text-primary">
        {category.name}
      </h3>
      <p className="text-xs text-muted mt-1 line-clamp-2">
        {category.description}
      </p>
    </Link>
  );
}
