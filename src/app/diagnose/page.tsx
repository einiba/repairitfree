import type { Metadata } from "next";
import DiagnoseClient from "@/components/DiagnoseClient";

export const metadata: Metadata = {
  title: "Guided Repair Diagnostic Tool",
  description:
    "Find the right repair guide for your device. Select your device type, brand, and problem to get free step-by-step repair instructions.",
};

export default function DiagnosePage() {
  return <DiagnoseClient />;
}
