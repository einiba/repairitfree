"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface DiagnosisResult {
  diagnosis: string;
  difficulty: string;
  estimatedTime: string;
  estimatedCost: string;
  steps: string[];
  safetyWarnings: string[];
  whenToCallPro: string;
}

const deviceTypes = [
  "Washing Machine",
  "Dryer",
  "Dishwasher",
  "Refrigerator",
  "iPhone",
  "Android Phone",
  "Laptop",
  "Game Console",
  "Printer",
  "Microwave",
  "Other",
];

export default function DiagnoseClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [step, setStep] = useState(initialQuery ? 3 : 1);
  const [deviceType, setDeviceType] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialQuery) {
      handleDiagnose(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDiagnose(desc?: string) {
    const query = desc || description;
    if (!query.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceType,
          brand,
          description: query,
        }),
      });

      if (!res.ok) throw new Error("Failed to get diagnosis");

      const data = await res.json();
      setResult(data);
      setStep(4);
    } catch {
      setError(
        "Sorry, something went wrong. Please try again or browse our guides."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "AI Diagnostic Tool" }]} />

      <h1 className="text-2xl font-bold mb-2">AI Repair Diagnostic</h1>
      <p className="text-muted mb-8">
        Tell us what&apos;s wrong and our AI will diagnose the problem and give you
        a step-by-step repair plan.
      </p>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= s
                  ? "bg-primary text-white"
                  : "bg-border text-muted"
              }`}
            >
              {step > s ? "✓" : s}
            </div>
            {s < 3 && (
              <div
                className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Device type */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            What type of device is it?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {deviceTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setDeviceType(type);
                  setStep(2);
                }}
                className="p-3 border border-border rounded-lg text-sm hover:border-primary hover:bg-primary-light transition-all text-left"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Brand + description */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Tell us more about your {deviceType}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Brand (optional)
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g., Samsung, Kenmore, Apple..."
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                What&apos;s happening?
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the problem in your own words. For example: 'My dryer runs but the clothes come out still wet and cold' or 'Showing error code E24 and won't finish the cycle'"
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 border border-border rounded-lg text-sm text-muted hover:bg-surface"
              >
                Back
              </button>
              <button
                onClick={() => handleDiagnose()}
                disabled={!description.trim() || isLoading}
                className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark disabled:opacity-50"
              >
                {isLoading ? "Diagnosing..." : "Diagnose My Problem"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Free-form (from search) */}
      {step === 3 && !result && (
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Describe your problem
          </h2>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's broken and what's happening?"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary mb-4"
          />
          <button
            onClick={() => handleDiagnose()}
            disabled={!description.trim() || isLoading}
            className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? "Diagnosing..." : "Diagnose My Problem"}
          </button>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted">
            Analyzing your problem... This takes a few seconds.
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Result */}
      {result && step === 4 && (
        <div className="space-y-6">
          <div className="bg-primary-light border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Diagnosis</h2>
            <p className="text-sm">{result.diagnosis}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1">
                ⚡ Difficulty: <strong>{result.difficulty}</strong>
              </span>
              <span className="flex items-center gap-1">
                ⏱ Time: <strong>{result.estimatedTime}</strong>
              </span>
              <span className="flex items-center gap-1">
                💰 Cost: <strong>{result.estimatedCost}</strong>
              </span>
            </div>
          </div>

          {result.safetyWarnings.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-700 text-sm mb-2">
                ⚠️ Safety Warnings
              </h3>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                {result.safetyWarnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Step-by-Step Repair
            </h3>
            <ol className="space-y-3">
              {result.steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm">{s}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4">
            <h3 className="font-semibold text-sm mb-2">
              When to call a professional
            </h3>
            <p className="text-sm text-muted">{result.whenToCallPro}</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                setResult(null);
                setStep(1);
                setDescription("");
                setDeviceType("");
                setBrand("");
              }}
              className="px-4 py-2 border border-border rounded-lg text-sm text-muted hover:bg-surface"
            >
              Diagnose another problem
            </button>
            <Link
              href="/guides/washing-machines"
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
            >
              Browse all guides
            </Link>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-surface border border-border rounded-lg space-y-2">
        <p className="text-xs text-muted">
          <strong>Disclaimer:</strong> This AI diagnostic tool provides
          suggestions based on common repair scenarios and is for informational
          purposes only. Responses are AI-generated, may contain errors, and
          have not been reviewed by a licensed technician. All repairs are
          performed at your own risk.
        </p>
        <p className="text-xs text-muted">
          RepairItFree.com is not liable for any injury, damage, or loss
          resulting from the use of this tool. If you are unsure about any
          step — especially anything involving electricity, gas, water, or
          refrigerant — consult a qualified professional.
        </p>
        <p className="text-xs text-muted">
          By using this tool you agree to our{" "}
          <a href="/terms" className="text-primary underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}
