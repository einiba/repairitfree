import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getGuidesByCategory } from "@/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "Should I Repair or Replace My Appliance? Free Decision Guide | RepairItFree",
  description:
    "Use our free repair vs replace calculator to decide whether to fix or buy new. Includes the 50% rule, average appliance lifespans, repair cost ranges, and a step-by-step decision flowchart.",
};

const applianceLifespans = [
  {
    name: "Washing Machine",
    lifespan: "10-14 years",
    avgRepairCost: "$150-$400",
    avgReplaceCost: "$500-$1,200",
    categorySlug: "washing-machines",
  },
  {
    name: "Dryer",
    lifespan: "10-13 years",
    avgRepairCost: "$100-$350",
    avgReplaceCost: "$500-$1,100",
    categorySlug: "dryers",
  },
  {
    name: "Refrigerator",
    lifespan: "10-18 years",
    avgRepairCost: "$150-$500",
    avgReplaceCost: "$800-$2,500",
    categorySlug: "refrigerators",
  },
  {
    name: "Dishwasher",
    lifespan: "9-12 years",
    avgRepairCost: "$100-$300",
    avgReplaceCost: "$400-$1,000",
    categorySlug: "dishwashers",
  },
  {
    name: "Oven / Range",
    lifespan: "13-20 years",
    avgRepairCost: "$100-$400",
    avgReplaceCost: "$600-$2,000",
    categorySlug: "ovens-ranges",
  },
  {
    name: "Microwave",
    lifespan: "7-10 years",
    avgRepairCost: "$50-$200",
    avgReplaceCost: "$100-$500",
    categorySlug: "microwaves",
  },
  {
    name: "Water Heater",
    lifespan: "8-12 years",
    avgRepairCost: "$100-$500",
    avgReplaceCost: "$800-$2,000",
    categorySlug: "water-heaters",
  },
];

export default async function RepairVsReplacePage() {
  const applianceSections = await Promise.all(
    applianceLifespans.map(async (appliance) => ({
      ...appliance,
      guides: (await getGuidesByCategory(appliance.categorySlug)).slice(0, 5),
    }))
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Should You Repair or Replace Your Appliance?
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-xl mx-auto">
            Save hundreds by making the right decision. Use our free guide to
            figure out whether fixing your appliance makes financial sense — or
            if it&apos;s time for a new one.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Repair vs Replace" }]} />

        {/* The 50% Rule */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            The 50% Rule: The Simplest Way to Decide
          </h2>
          <div className="bg-primary-light border border-blue-200 rounded-lg p-6">
            <p className="text-lg font-semibold text-primary mb-3">
              If the repair costs less than 50% of what a new appliance would
              cost, repair it.
            </p>
            <p className="text-muted leading-relaxed">
              This is the most widely-used rule of thumb among repair
              professionals and consumer advocates. For example, if a new
              washing machine costs $800 and the repair estimate is $300 (37.5%
              of replacement cost), it makes sense to repair. But if the repair
              is $500 (62.5%), you should probably replace it — especially if the
              appliance is already aging.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-1">
                Repair makes sense when:
              </p>
              <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                <li>Repair cost is under 50% of replacement</li>
                <li>Appliance is under 75% of expected lifespan</li>
                <li>Problem is a common, well-documented fix</li>
                <li>Appliance is still under warranty</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-red-700 mb-1">
                Replace makes sense when:
              </p>
              <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                <li>Repair cost exceeds 50% of replacement</li>
                <li>Appliance is past 75% of expected lifespan</li>
                <li>You&apos;ve had multiple repairs recently</li>
                <li>Newer models are significantly more energy efficient</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Average Lifespan Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Average Appliance Lifespans &amp; Repair Costs
          </h2>
          <p className="text-muted mb-4">
            Use this table to compare your appliance&apos;s age and estimated
            repair cost against the averages. If your appliance is nearing the
            end of its expected lifespan and the repair is expensive, replacing
            is usually the better investment.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left py-3 px-4 font-semibold border-b border-border">
                    Appliance
                  </th>
                  <th className="text-left py-3 px-4 font-semibold border-b border-border">
                    Expected Lifespan
                  </th>
                  <th className="text-left py-3 px-4 font-semibold border-b border-border">
                    Avg. Repair Cost
                  </th>
                  <th className="text-left py-3 px-4 font-semibold border-b border-border">
                    Avg. Replacement Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {applianceLifespans.map((appliance, i) => (
                  <tr
                    key={appliance.categorySlug}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="py-3 px-4 font-medium border-b border-border">
                      <Link
                        href={`/guides/${appliance.categorySlug}`}
                        className="text-primary hover:underline"
                      >
                        {appliance.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 border-b border-border">
                      {appliance.lifespan}
                    </td>
                    <td className="py-3 px-4 border-b border-border">
                      {appliance.avgRepairCost}
                    </td>
                    <td className="py-3 px-4 border-b border-border">
                      {appliance.avgReplaceCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">
            Sources: Consumer Reports, HomeAdvisor, and appliance manufacturer
            data. Costs vary by brand, model, and region.
          </p>
        </section>

        {/* Decision Flowchart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Repair vs Replace Decision Flowchart
          </h2>
          <p className="text-muted mb-6">
            Walk through these questions in order to get a recommendation for
            your situation.
          </p>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-4 py-3 font-semibold text-sm">
                Step 1
              </div>
              <div className="p-4">
                <p className="font-semibold mb-3">
                  Is your appliance still under warranty?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-700">
                      Yes &rarr; Call the manufacturer
                    </p>
                    <p className="text-xs text-muted mt-1">
                      The repair may be covered at no cost. Check your warranty
                      documentation or the manufacturer&apos;s website.
                    </p>
                  </div>
                  <div className="flex-1 bg-surface border border-border rounded-lg p-3">
                    <p className="text-sm font-semibold">
                      No &rarr; Continue to Step 2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-4 py-3 font-semibold text-sm">
                Step 2
              </div>
              <div className="p-4">
                <p className="font-semibold mb-3">
                  Is your appliance over 75% of its expected lifespan?
                </p>
                <p className="text-xs text-muted mb-3">
                  Example: A washing machine lasts 10-14 years. If yours is 10+
                  years old, it&apos;s past 75%.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-yellow-700">
                      Yes &rarr; Lean toward replacing
                    </p>
                    <p className="text-xs text-muted mt-1">
                      Even if this repair is affordable, more breakdowns are
                      likely coming. Factor in the cost of future repairs.
                    </p>
                  </div>
                  <div className="flex-1 bg-surface border border-border rounded-lg p-3">
                    <p className="text-sm font-semibold">
                      No &rarr; Continue to Step 3
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-4 py-3 font-semibold text-sm">
                Step 3
              </div>
              <div className="p-4">
                <p className="font-semibold mb-3">
                  Is the repair cost more than 50% of a new replacement?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-700">
                      Yes &rarr; Replace it
                    </p>
                    <p className="text-xs text-muted mt-1">
                      You&apos;re spending more than half the cost of a new
                      appliance on a repair. A new one comes with a warranty and
                      better energy efficiency.
                    </p>
                  </div>
                  <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-700">
                      No &rarr; Repair it!
                    </p>
                    <p className="text-xs text-muted mt-1">
                      The repair is cost-effective. Check our free guides below
                      to see if you can do it yourself and save even more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Per-Appliance Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Common Repairs by Appliance
          </h2>
          <p className="text-muted mb-6">
            Before paying for a professional repair, check if your problem has a
            DIY fix. Many common appliance issues can be solved in under an hour
            with basic tools.
          </p>

          <div className="space-y-8">
            {applianceSections.map((section) => (
              <div
                key={section.categorySlug}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="bg-surface px-4 py-3 border-b border-border">
                  <h3 className="font-bold">
                    <Link
                      href={`/guides/${section.categorySlug}`}
                      className="hover:text-primary"
                    >
                      Common {section.name} Repairs
                    </Link>
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Average lifespan: {section.lifespan} | Typical repair cost:{" "}
                    {section.avgRepairCost}
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {section.guides.length > 0 ? (
                    section.guides.map((guide) => (
                      <Link
                        key={guide.id}
                        href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
                        className="flex items-center justify-between px-4 py-3 hover:bg-surface transition-colors"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">
                            {guide.brand} {guide.category} &mdash;{" "}
                            {guide.problemTitle}
                          </p>
                          <p className="text-xs text-muted">
                            {guide.difficulty} &middot; {guide.timeEstimate}{" "}
                            &middot; {guide.costEstimate}
                          </p>
                        </div>
                        <span className="text-primary text-sm shrink-0 ml-2">
                          &rarr;
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-muted">
                      Guides coming soon.{" "}
                      <Link
                        href="/diagnose"
                        className="text-primary underline"
                      >
                        Try our AI diagnostic tool
                      </Link>{" "}
                      in the meantime.
                    </p>
                  )}
                </div>
                {section.guides.length > 0 && (
                  <div className="px-4 py-2 bg-surface border-t border-border">
                    <Link
                      href={`/guides/${section.categorySlug}`}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      View all {section.name.toLowerCase()} guides &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-3">
            Decided to Repair? We Can Help.
          </h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            Our free AI diagnostic tool will help you figure out exactly
            what&apos;s wrong and walk you through the fix step by step.
          </p>
          <Link
            href="/diagnose"
            className="inline-block px-6 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark min-h-[44px] text-base"
          >
            Try the AI Diagnostic Tool
          </Link>
        </section>
      </div>
    </div>
  );
}
