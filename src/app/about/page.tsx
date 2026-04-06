import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About RepairItFree",
  description:
    "RepairItFree provides free repair guides for electronics and appliances. Learn about our mission and how we make money.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "About" }]} />

      <h1 className="text-3xl font-bold mb-6">About RepairItFree</h1>

      <div className="prose prose-sm max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted leading-relaxed">
            RepairItFree exists because we believe everyone deserves the right to fix
            the things they own. When your washing machine breaks or your phone
            stops charging, you shouldn&apos;t have to choose between an expensive
            repair bill and buying a replacement you can&apos;t afford.
          </p>
          <p className="text-muted leading-relaxed mt-3">
            We use AI to create clear, simple repair guides that anyone can follow
            — even if you&apos;ve never picked up a screwdriver. Every guide includes
            safety warnings, cost estimates, and honest advice about when it&apos;s
            better to call a professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">How We Make Money</h2>
          <p className="text-muted leading-relaxed">
            We believe in transparency. Here&apos;s exactly how this site is funded:
          </p>
          <ul className="list-disc list-inside text-muted space-y-2 mt-3">
            <li>
              <strong>Affiliate links:</strong> When we recommend a replacement
              part, we link to places where you can buy it (Amazon, eBay, iFixit).
              If you buy through our link, we earn a small commission at no extra
              cost to you. We only recommend parts that are actually needed for
              the repair.
            </li>
            <li>
              <strong>Ads:</strong> We may display tasteful, non-intrusive ads.
              We will never put ads in the middle of repair instructions.
            </li>
          </ul>
          <p className="text-muted leading-relaxed mt-3">
            What we will <strong>never</strong> do:
          </p>
          <ul className="list-disc list-inside text-muted space-y-2 mt-2">
            <li>Charge you for guides or advice</li>
            <li>Recommend unnecessary parts to earn commissions</li>
            <li>Tell you a repair is easy when it isn&apos;t</li>
            <li>Skip safety warnings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Right to Repair</h2>
          <p className="text-muted leading-relaxed">
            We&apos;re proud to be part of the Right to Repair movement. We believe
            manufacturers should make repair information, parts, and tools
            available to everyone. Learn more about the movement:
          </p>
          <ul className="list-disc list-inside text-muted space-y-2 mt-3">
            <li>
              <a
                href="https://www.repair.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Repair.org
              </a>{" "}
              — The Repair Association
            </li>
            <li>
              <a
                href="https://www.ifixit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                iFixit
              </a>{" "}
              — The free repair guide for everything
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Safety Disclaimer</h2>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm text-muted leading-relaxed">
              All guides on this site are for informational purposes only. We are
              not licensed repair technicians. If you are unsure about any step in
              a repair, especially anything involving electricity, gas, water, or
              refrigerant, please consult a qualified professional. Your safety is
              always more important than saving money.
            </p>
          </div>
        </section>

        <div className="pt-4">
          <Link
            href="/diagnose"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark text-sm"
          >
            Try the AI Diagnostic Tool
          </Link>
        </div>
      </div>
    </div>
  );
}
