import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getErrorCode, getErrorCodesByDevice } from "@/lib/queries";
import { prisma } from "@/lib/db";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ deviceType: string; code: string }>;
}): Promise<Metadata> {
  const { deviceType, code } = await params;
  const errorCode = await getErrorCode(deviceType, code);
  if (!errorCode) return {};
  return {
    title: `${errorCode.deviceType} ${errorCode.code} Error Code — What It Means & How to Fix It`,
    description: `${errorCode.deviceType} error code ${errorCode.code}: ${errorCode.meaning}. Free diagnosis and repair guide.`,
  };
}

export default async function ErrorCodePage({
  params,
}: {
  params: Promise<{ deviceType: string; code: string }>;
}) {
  const { deviceType, code } = await params;
  const errorCode = await getErrorCode(deviceType, code);

  if (!errorCode) notFound();

  const linkedGuide = errorCode.guideId
    ? await prisma.guide.findUnique({
        where: { id: errorCode.guideId },
        select: {
          brand: true,
          category: true,
          categorySlug: true,
          brandSlug: true,
          problemSlug: true,
          problemTitle: true,
          quickDiagnosis: true,
          difficulty: true,
          timeEstimate: true,
          costEstimate: true,
        },
      })
    : null;

  const relatedCodes = (await getErrorCodesByDevice(deviceType)).filter(
    (c) => c.id !== errorCode.id
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Error Codes" },
          {
            label: errorCode.deviceType,
            href: `/error-codes/${deviceType}`,
          },
          { label: errorCode.code },
        ]}
      />

      <div className="flex items-start gap-4 mb-6">
        <span className="px-3 py-2 bg-red-100 text-red-700 rounded-lg font-mono font-bold text-xl">
          {errorCode.code}
        </span>
        <div>
          <h1 className="text-2xl font-bold">
            {errorCode.deviceType} Error Code {errorCode.code}
          </h1>
          <p className="text-muted text-sm mt-1">
            What it means and how to fix it
          </p>
        </div>
      </div>

      <section className="mb-8 bg-surface border border-border rounded-xl p-6">
        <h2 className="font-semibold mb-2">What This Error Means</h2>
        <p className="text-sm">{errorCode.meaning}</p>
      </section>

      {linkedGuide && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">
            Repair Guide for This Error
          </h2>
          <Link
            href={`/guides/${linkedGuide.categorySlug}/${linkedGuide.brandSlug}/${linkedGuide.problemSlug}`}
            className="block p-5 border-2 border-primary rounded-xl bg-primary-light hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-sm text-primary">
              {linkedGuide.brand} {linkedGuide.category} —{" "}
              {linkedGuide.problemTitle}
            </h3>
            <p className="text-xs text-muted mt-1">
              {linkedGuide.quickDiagnosis}
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted">
              <span>
                ⚡ {linkedGuide.difficulty}
              </span>
              <span>⏱ {linkedGuide.timeEstimate}</span>
              <span>💰 {linkedGuide.costEstimate}</span>
            </div>
            <p className="text-xs text-primary font-medium mt-2">
              View full repair guide →
            </p>
          </Link>
        </section>
      )}

      {!linkedGuide && (
        <section className="mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 text-center">
            <p className="text-sm text-yellow-800 mb-3">
              We don&apos;t have a specific guide for this error code yet.
            </p>
            <Link
              href="/diagnose"
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
            >
              Try the AI Diagnostic Tool
            </Link>
          </div>
        </section>
      )}

      {relatedCodes.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-3">
            Other {errorCode.deviceType} Error Codes
          </h2>
          <div className="space-y-2">
            {relatedCodes.map((c) => (
              <Link
                key={c.id}
                href={`/error-codes/${c.deviceTypeSlug}/${c.codeSlug}`}
                className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary text-sm"
              >
                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded font-mono font-bold text-xs">
                  {c.code}
                </span>
                <span className="text-muted">{c.meaning}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
