import { Suspense } from "react";
import type { Metadata } from "next";
import DiagnoseClient from "@/components/DiagnoseClient";

export const metadata: Metadata = {
  title: "AI Repair Diagnostic Tool",
  description:
    "Describe your device problem and get an instant AI-powered diagnosis with step-by-step repair instructions, parts lists, and cost estimates. Free forever.",
};

export default function DiagnosePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">AI Repair Diagnostic</h1>
          <p className="text-gray-500">Loading diagnostic tool...</p>
        </div>
      }
    >
      <DiagnoseClient />
    </Suspense>
  );
}
