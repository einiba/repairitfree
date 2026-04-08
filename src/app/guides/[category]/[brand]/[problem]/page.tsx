import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DifficultyMeter from "@/components/DifficultyMeter";
import RepairChecklist from "@/components/RepairChecklist";
import StepImagePlaceholder from "@/components/StepImagePlaceholder";
import StepProgress from "@/components/StepProgress";
import ToolIcon from "@/components/ToolIcon";
import VideoEmbed from "@/components/VideoEmbed";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import {
  getGuide,
  getGuidesSameBrandCategory,
  getGuidesSameProblem,
  getGuidesPopularCategory,
} from "@/data/guides";
import { videoMappings } from "@/data/video-mappings";
import RelatedGuides from "@/components/RelatedGuides";

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

function parseTimeToISO(timeEstimate: string): string {
  const hours = timeEstimate.match(/(\d+)\s*h/i);
  const minutes = timeEstimate.match(/(\d+)\s*m/i);
  if (hours && minutes) return `PT${hours[1]}H${minutes[1]}M`;
  if (hours) return `PT${hours[1]}H`;
  const nums = timeEstimate.match(/(\d+)/);
  return nums ? `PT${nums[1]}M` : "PT30M";
}

function parseCostValue(costEstimate: string): string {
  const match = costEstimate.match(/[\d.]+/);
  return match ? match[0] : "0";
}

function HowToSchema({ guide }: { guide: NonNullable<ReturnType<typeof getGuide>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${guide.problemTitle} - ${guide.brand} ${guide.category}`,
    description: guide.quickDiagnosis,
    totalTime: parseTimeToISO(guide.timeEstimate),
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: parseCostValue(guide.costEstimate),
    },
    tool: guide.toolsNeeded.map((t) => ({ "@type": "HowToTool", name: t })),
    supply: guide.partsNeeded.map((p) => ({
      "@type": "HowToSupply",
      name: p.name,
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
  const mainEntity: Array<{ "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }> = [];

  if (guide.alternativeCauses.length > 0) {
    mainEntity.push({
      "@type": "Question",
      name: `What if ${guide.problemTitle} fix didn't work?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: guide.alternativeCauses.join(". "),
      },
    });
  }

  if (guide.whenToCallPro) {
    mainEntity.push({
      "@type": "Question",
      name: "When should I call a professional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: guide.whenToCallPro,
      },
    });
  }

  if (mainEntity.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
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

  const videoId = guide.youtubeId || videoMappings[guide.id];

  const sameBrand = getGuidesSameBrandCategory(category, brand, guide.id).slice(0, 4);
  const sameProblem = getGuidesSameProblem(guide.problemSlug, brand, guide.id).slice(0, 4);
  const shownIds = new Set([guide.id, ...sameBrand.map((g) => g.id), ...sameProblem.map((g) => g.id)]);
  const popularCategory = getGuidesPopularCategory(category, shownIds).slice(0, 4);

  // Inline "You might also like" picks: up to 3 from combined related guides
  const inlineLinks = [...sameBrand, ...sameProblem, ...popularCategory].slice(0, 3);

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
      <div className="bg-primary-light border border-blue-200 rounded-xl p-4 sm:p-5 mb-8">
        <p className="text-sm sm:text-base mb-4">{guide.quickDiagnosis}</p>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 text-sm">
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
            💰 Parts: <strong>{guide.costEstimate}</strong>
          </span>
          <span className="flex items-center gap-1 col-span-2">
            🔧 Tools: {guide.toolsNeeded.join(", ")}
          </span>
        </div>
      </div>

      {/* Watch the video */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3">Watch the Video</h2>
        {videoId ? (
          <VideoEmbed
            videoId={videoId}
            title={`${guide.brand} ${guide.category} ${guide.problemTitle} — Repair Guide`}
          />
        ) : (
          <VideoPlaceholder />
        )}
      </section>

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

      {/* You might also like — inline text links */}
      {inlineLinks.length > 0 && (
        <div className="mb-8 p-4 bg-primary-light border border-blue-100 rounded-lg">
          <p className="text-sm font-medium mb-2">You might also like:</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {inlineLinks.map((g) => (
              <li key={g.id}>
                <Link
                  href={`/guides/${g.categorySlug}/${g.brandSlug}/${g.problemSlug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {g.brand} {g.category} {g.problemTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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

      {/* Related guides — 3 sections with up to 12 total links */}
      <RelatedGuides
        sameBrand={sameBrand}
        sameProblem={sameProblem}
        popularCategory={popularCategory}
        brandName={guide.brand}
        categoryName={guide.category}
        problemTitle={guide.problemTitle}
      />

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
