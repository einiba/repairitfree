import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About RepairItFree",
  description:
    "RepairItFree provides free repair guides for electronics and appliances. Learn about our mission, how we make money, and our commitment to the Right to Repair movement.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "About" }]} />

      <h1 className="text-3xl font-bold mb-6">About RepairItFree</h1>

      <div className="prose prose-sm max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted leading-relaxed">
            RepairItFree helps people fix broken electronics and appliances for
            free. We believe everyone deserves access to repair knowledge
            regardless of income.
          </p>
          <p className="text-muted leading-relaxed mt-3">
            When your washing machine breaks or your phone stops charging, you
            shouldn&apos;t have to choose between an expensive repair bill and
            buying a replacement you can&apos;t afford. Every guide we publish
            includes safety warnings, cost estimates, and honest advice about
            when it&apos;s better to call a professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">How We Make Money</h2>
          <p className="text-muted leading-relaxed">
            We believe in full transparency. We earn small commissions when you
            purchase replacement parts through our affiliate links (Amazon, eBay,
            Home Depot). This costs you nothing extra and keeps our guides free
            forever.
          </p>
          <p className="text-muted leading-relaxed mt-3">
            As an Amazon Associate we earn from qualifying purchases. All
            affiliate links on our site are clearly labeled.
          </p>
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
          <h2 className="text-xl font-bold mb-3">How Our Guides Are Made</h2>
          <p className="text-muted leading-relaxed">
            Our repair guides are created using AI technology, reviewed for
            safety and accuracy. Each guide includes honest difficulty ratings
            and clear safety warnings. We always recommend calling a professional
            when a repair is beyond DIY skill level.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Right to Repair</h2>
          <p className="text-muted leading-relaxed">
            We support the Right to Repair movement. You own your devices
            &mdash; you should be able to fix them. We believe manufacturers
            should make repair information, parts, and tools available to
            everyone. Learn more:
          </p>
          <ul className="list-disc list-inside text-muted space-y-2 mt-3">
            <li>
              <a
                href="https://www.repair.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                repair.org
              </a>{" "}
              &mdash; The Repair Association
            </li>
            <li>
              <a
                href="https://www.ifixit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                ifixit.com
              </a>{" "}
              &mdash; The free repair guide for everything
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Safety Disclaimer</h2>
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-sm text-muted leading-relaxed">
              All guides on this site are for informational and educational
              purposes only. We are not licensed repair technicians. Repairs
              involve inherent risks including electrical shock, burns, water
              damage, and injury from tools or heavy components. If you are
              unsure about any step &mdash; especially anything involving
              electricity, gas, water, or refrigerant &mdash; stop and consult a
              qualified professional. Always disconnect power before working on
              any appliance or device. Your safety is always more important than
              saving money.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-muted leading-relaxed">
            Questions? Reach us at{" "}
            <a
              href="mailto:hello@repairitfree.com"
              className="text-primary underline"
            >
              hello@repairitfree.com
            </a>
          </p>
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
