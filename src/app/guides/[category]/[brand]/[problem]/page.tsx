import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getGuide, getGuidesByCategory } from "@/data/guides";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; brand: string; problem: string }>;
}): Promise<Metadata> {
  const { category, brand, problem } = await params;
  const guide = getGuide(category, brand, problem);
  if (!guide) return {};
  return {
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
  };
}

function HowToSchema({ guide }: { guide: NonNullable<ReturnType<typeof getGuide>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Fix ${guide.brand} ${guide.category} ${guide.problemTitle}`,
    description: guide.quickDiagnosis,
    totalTime: `PT${guide.timeEstimate.replace(/[^0-9]/g, "")}M`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: guide.costEstimate,
    },
    tool: guide.toolsNeeded.map((t) => ({ "@type": "HowToTool", name: t })),
    supply: guide.partsNeeded.map((p) => ({
      "@type": "HowToSupply",
      name: p.name,
      estimatedCost: p.costRange,
    })),
    step: guide.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.description,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema({ guide }: { guide: NonNullable<ReturnType<typeof getGuide>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does the ${guide.problemTitle} mean on a ${guide.brand} ${guide.category}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: guide.quickDiagnosis,
        },
      },
      {
        "@type": "Question",
        name: `How much does it cost to fix a ${guide.brand} ${guide.category} ${guide.problemTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The estimated cost for parts is ${guide.costEstimate}. The repair difficulty is ${guide.difficulty} and takes about ${guide.timeEstimate}.`,
        },
      },
      {
        "@type": "Question",
        name: `Can I fix a ${guide.brand} ${guide.category} ${guide.problemTitle} myself?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            guide.difficulty === "Easy"
              ? "Yes! This is an easy repair that most people can do with basic tools."
              : guide.difficulty === "Medium"
                ? "Yes, with some patience. This is a medium-difficulty repair."
                : "This is a harder repair. Read the guide carefully and consider calling a professional if you're unsure.",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ category: string; brand: string; problem: string }>;
}) {
  const { category, brand, problem } = await params;
  const guide = getGuide(category, brand, problem);

  if (!guide) notFound();

  const relatedGuides = getGuidesByCategory(category).filter(
    (g) => g.id !== guide.id
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <HowToSchema guide={guide} />
      <FAQSchema guide={guide} />

      <Breadcrumb
        items={[
          { label: guide.category, href: `/guides/${category}` },
          { label: guide.brand, href: `/guides/${category}/${brand}` },
          { label: guide.problemTitle },
        ]}
      />

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {guide.brand} {guide.category} {guide.problemTitle}: How to Fix It
        Yourself
      </h1>

      {/* Quick diagnosis box */}
      <div className="bg-primary-light border border-blue-200 rounded-xl p-5 mb-8">
        <p className="text-sm mb-4">{guide.quickDiagnosis}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1">
            ⚡ Difficulty:{" "}
            <strong
              className={
                guide.difficulty === "Easy"
                  ? "text-success"
                  : guide.difficulty === "Medium"
                    ? "text-warning"
                    : "text-danger"
              }
            >
              {guide.difficulty}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            ⏱ <strong>{guide.timeEstimate}</strong>
          </span>
          <span className="flex items-center gap-1">
            💰 Parts cost: <strong>{guide.costEstimate}</strong>
          </span>
          <span className="flex items-center gap-1">
            🔧 Tools: {guide.toolsNeeded.join(", ")}
          </span>
        </div>
      </div>

      {/* Safety warnings */}
      {guide.safetyWarnings.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-red-700 text-sm mb-2">
            ⚠️ Safety First
          </h2>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {guide.safetyWarnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Parts needed */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3">Parts You May Need</h2>
        <div className="space-y-3">
          {guide.partsNeeded.map((part, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 border border-border rounded-lg"
            >
              <div>
                <p className="font-medium text-sm">{part.name}</p>
                <p className="text-xs text-muted">~{part.costRange}</p>
              </div>
              <div className="flex gap-2">
                {part.amazonUrl && (
                  <a
                    href={part.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-3 py-1.5 bg-yellow-400 text-yellow-900 rounded text-xs font-medium hover:bg-yellow-500"
                  >
                    Amazon
                  </a>
                )}
                {part.ebayUrl && (
                  <a
                    href={part.ebayUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200"
                  >
                    eBay
                  </a>
                )}
                {part.ifixitUrl && (
                  <a
                    href={part.ifixitUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200"
                  >
                    iFixit
                  </a>
                )}
              </div>
            </div>
          ))}
          <p className="text-xs text-muted">
            Affiliate links — we may earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      {/* Step-by-step instructions */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Step-by-Step Repair</h2>
        <ol className="space-y-4">
          {guide.steps.map((step) => (
            <li key={step.number} className="flex gap-4">
              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-sm">{step.title}</h3>
                <p className="text-sm text-muted mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* If that didn't work */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3">If That Didn&apos;t Work</h2>
        <ul className="list-disc list-inside text-sm text-muted space-y-2">
          {guide.alternativeCauses.map((cause, i) => (
            <li key={i}>{cause}</li>
          ))}
        </ul>
      </section>

      {/* When to call a pro */}
      <section className="mb-8 bg-surface border border-border rounded-lg p-5">
        <h2 className="font-bold text-sm mb-2">When to Call a Professional</h2>
        <p className="text-sm text-muted">{guide.whenToCallPro}</p>
      </section>

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Related Repairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedGuides.slice(0, 4).map((g) => (
              <Link
                key={g.id}
                href={`/guides/${g.categorySlug}/${g.brandSlug}/${g.problemSlug}`}
                className="p-3 border border-border rounded-lg hover:border-primary text-sm"
              >
                <p className="font-medium">
                  {g.brand} — {g.problemTitle}
                </p>
                <p className="text-xs text-muted mt-1">
                  {g.difficulty} · {g.timeEstimate} · {g.costEstimate}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <div className="p-4 bg-surface border border-border rounded-lg text-xs text-muted space-y-2">
        <p>
          <strong>Disclaimer:</strong> This guide is for informational and
          educational purposes only and does not constitute professional repair
          advice. All repairs are performed at your own risk. RepairItFree.com
          is not liable for any personal injury, property damage, device damage,
          voided warranties, or other losses resulting from the use of this
          information.
        </p>
        <p>
          If you are unsure about any step — especially anything involving
          electricity, gas, water, or refrigerant — stop and consult a qualified
          professional. Your safety is more important than saving money.
        </p>
        <p>
          See our full{" "}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>{" "}
          for complete legal details.
        </p>
      </div>
    </div>
  );
}
