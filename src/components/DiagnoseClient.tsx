"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { guides } from "@/data/guides";
import type { Guide } from "@/lib/types";

// Derive unique categories from guides data
function getCategories(): { name: string; slug: string }[] {
  const map = new Map<string, string>();
  guides.forEach((g) => map.set(g.categorySlug, g.category));
  return Array.from(map.entries())
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Derive unique brands for a category
function getBrands(categorySlug: string): { name: string; slug: string }[] {
  const map = new Map<string, string>();
  guides
    .filter((g) => g.categorySlug === categorySlug)
    .forEach((g) => map.set(g.brandSlug, g.brand));
  return Array.from(map.entries())
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Derive unique problems for a category + brand
function getProblems(
  categorySlug: string,
  brandSlug: string
): { title: string; slug: string }[] {
  const map = new Map<string, string>();
  guides
    .filter(
      (g) => g.categorySlug === categorySlug && g.brandSlug === brandSlug
    )
    .forEach((g) => map.set(g.problemSlug, g.problemTitle));
  return Array.from(map.entries())
    .map(([slug, title]) => ({ slug, title }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

// Find exact matching guides
function findGuides(
  categorySlug: string,
  brandSlug: string,
  problemSlug: string
): Guide[] {
  return guides.filter(
    (g) =>
      g.categorySlug === categorySlug &&
      g.brandSlug === brandSlug &&
      g.problemSlug === problemSlug
  );
}

// Find similar guides (same category) for fallback
function findSimilarGuides(
  categorySlug: string,
  brandSlug: string,
  problemSlug: string
): Guide[] {
  return guides
    .filter(
      (g) =>
        g.categorySlug === categorySlug &&
        !(g.brandSlug === brandSlug && g.problemSlug === problemSlug)
    )
    .slice(0, 8);
}

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

export default function DiagnoseClient() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    slug: string;
  } | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<{
    name: string;
    slug: string;
  } | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<{
    title: string;
    slug: string;
  } | null>(null);

  const categories = useMemo(() => getCategories(), []);
  const brands = useMemo(
    () => (selectedCategory ? getBrands(selectedCategory.slug) : []),
    [selectedCategory]
  );
  const problems = useMemo(
    () =>
      selectedCategory && selectedBrand
        ? getProblems(selectedCategory.slug, selectedBrand.slug)
        : [],
    [selectedCategory, selectedBrand]
  );
  const matchedGuides = useMemo(
    () =>
      selectedCategory && selectedBrand && selectedProblem
        ? findGuides(
            selectedCategory.slug,
            selectedBrand.slug,
            selectedProblem.slug
          )
        : [],
    [selectedCategory, selectedBrand, selectedProblem]
  );
  const similarGuides = useMemo(
    () =>
      selectedCategory && selectedBrand && selectedProblem
        ? findSimilarGuides(
            selectedCategory.slug,
            selectedBrand.slug,
            selectedProblem.slug
          )
        : [],
    [selectedCategory, selectedBrand, selectedProblem]
  );

  function goBack() {
    if (step === 4) {
      setSelectedProblem(null);
      setStep(3);
    } else if (step === 3) {
      setSelectedBrand(null);
      setStep(2);
    } else if (step === 2) {
      setSelectedCategory(null);
      setStep(1);
    }
  }

  function reset() {
    setStep(1);
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedProblem(null);
  }

  const stepLabels = [
    "Device Type",
    "Brand",
    "Problem",
    "Results",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Diagnostic Tool" }]} />

      <h1 className="text-2xl font-bold mb-2">Repair Diagnostic Tool</h1>
      <p className="text-muted mb-8">
        Find the right repair guide in 3 steps. Select your device, brand, and
        problem to get free step-by-step instructions.
      </p>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                step >= s
                  ? "bg-primary text-white"
                  : "bg-border text-muted"
              }`}
            >
              {step > s ? "\u2713" : s}
            </div>
            {s < 4 && (
              <div
                className={`w-8 sm:w-12 h-0.5 transition-colors ${
                  step > s ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
        <span className="ml-2 text-xs text-muted hidden sm:inline">
          {stepLabels[step - 1]}
        </span>
      </div>

      {/* Back button */}
      {step > 1 && (
        <button
          onClick={goBack}
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors min-h-[44px] py-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      )}

      {/* Step 1: Device type */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            What type of device?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat);
                  setStep(2);
                }}
                className="p-4 border border-border rounded-xl text-sm sm:text-base font-medium hover:border-primary hover:bg-primary-light transition-all text-left min-h-[44px]"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Brand */}
      {step === 2 && selectedCategory && (
        <div>
          <h2 className="text-lg font-semibold mb-1">
            What brand is your {selectedCategory.name.toLowerCase().replace(/s$/, "")}?
          </h2>
          <p className="text-sm text-muted mb-4">
            Showing brands with available repair guides.
          </p>
          {brands.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {brands.map((brand) => (
                <button
                  key={brand.slug}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setStep(3);
                  }}
                  className="p-4 border border-border rounded-xl text-sm sm:text-base font-medium hover:border-primary hover:bg-primary-light transition-all text-left min-h-[44px]"
                >
                  {brand.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted mb-3">
                We don&apos;t have brand-specific guides for{" "}
                {selectedCategory.name.toLowerCase()} yet.
              </p>
              <Link
                href={`/guides/${selectedCategory.slug}`}
                className="text-sm text-primary font-medium hover:underline"
              >
                Browse all {selectedCategory.name.toLowerCase()} guides
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Problem */}
      {step === 3 && selectedCategory && selectedBrand && (
        <div>
          <h2 className="text-lg font-semibold mb-1">
            What&apos;s the problem with your {selectedBrand.name}{" "}
            {selectedCategory.name.toLowerCase().replace(/s$/, "")}?
          </h2>
          <p className="text-sm text-muted mb-4">
            Select the issue that best matches what you&apos;re experiencing.
          </p>
          {problems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problems.map((problem) => (
                <button
                  key={problem.slug}
                  onClick={() => {
                    setSelectedProblem(problem);
                    setStep(4);
                  }}
                  className="p-4 border border-border rounded-xl text-sm sm:text-base font-medium hover:border-primary hover:bg-primary-light transition-all text-left min-h-[44px]"
                >
                  {problem.title}
                </button>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted mb-3">
                We don&apos;t have guides for {selectedBrand.name}{" "}
                {selectedCategory.name.toLowerCase()} yet.
              </p>
              <Link
                href={`/guides/${selectedCategory.slug}`}
                className="text-sm text-primary font-medium hover:underline"
              >
                Browse all {selectedCategory.name.toLowerCase()} guides
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 &&
        selectedCategory &&
        selectedBrand &&
        selectedProblem && (
          <div>
            {matchedGuides.length > 0 ? (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  {matchedGuides.length === 1
                    ? "We found a guide for you"
                    : `We found ${matchedGuides.length} guides for you`}
                </h2>
                <div className="space-y-4">
                  {matchedGuides.map((guide) => (
                    <Link
                      key={guide.id}
                      href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
                      className="block border border-border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-semibold text-base">
                          {guide.brand} {guide.category} &mdash;{" "}
                          {guide.problemTitle}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                            difficultyColor[guide.difficulty] || ""
                          }`}
                        >
                          {guide.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-muted mb-3 line-clamp-2">
                        {guide.quickDiagnosis}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted">
                        <span>Time: {guide.timeEstimate}</span>
                        <span>Cost: {guide.costEstimate}</span>
                        <span>
                          {guide.steps.length} step
                          {guide.steps.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div className="bg-surface border border-border rounded-xl p-6 mb-6">
                  <h2 className="font-semibold mb-2">
                    No exact match found
                  </h2>
                  <p className="text-sm text-muted">
                    We don&apos;t have a specific guide for{" "}
                    <strong>
                      {selectedBrand.name} {selectedCategory.name} &mdash;{" "}
                      {selectedProblem.title}
                    </strong>{" "}
                    yet. Here are similar guides from the same category:
                  </p>
                </div>
                {similarGuides.length > 0 ? (
                  <div className="space-y-4">
                    {similarGuides.map((guide) => (
                      <Link
                        key={guide.id}
                        href={`/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`}
                        className="block border border-border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-semibold text-sm">
                            {guide.brand} {guide.category} &mdash;{" "}
                            {guide.problemTitle}
                          </h3>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                              difficultyColor[guide.difficulty] || ""
                            }`}
                          >
                            {guide.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-muted line-clamp-2">
                          {guide.quickDiagnosis}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted">
                    No similar guides available yet.{" "}
                    <Link
                      href="/guides"
                      className="text-primary hover:underline"
                    >
                      Browse all guides
                    </Link>
                  </p>
                )}
              </div>
            )}

            {/* Start over */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="px-4 py-3 border border-border rounded-lg text-sm text-muted hover:bg-surface transition-colors min-h-[44px]"
              >
                Diagnose another problem
              </button>
              <Link
                href="/guides"
                className="px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors min-h-[44px] text-center"
              >
                Browse all guides
              </Link>
            </div>
          </div>
        )}

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-surface border border-border rounded-lg">
        <p className="text-xs text-muted">
          <strong>Disclaimer:</strong> These repair guides are for
          informational purposes only. All repairs are performed at your own
          risk. If you are unsure about any step — especially anything
          involving electricity, gas, water, or refrigerant — consult a
          qualified professional.{" "}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
