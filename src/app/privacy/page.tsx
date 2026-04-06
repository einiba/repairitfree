import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for RepairItFree.com",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm mb-8">Last updated: April 6, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            1. Information We Collect
          </h2>
          <p>
            <strong>Information you provide:</strong> When you use our AI chat
            or diagnostic tool, you provide descriptions of device problems.
            These are sent to our AI service provider (Anthropic) for
            processing and are not permanently stored or linked to your
            identity.
          </p>
          <p className="mt-3">
            <strong>Automatically collected information:</strong> We use
            privacy-friendly analytics that may collect anonymized data such as
            page views, referring URLs, browser type, and country. We do not
            use cookies for tracking. We do not collect personally identifiable
            information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            2. How We Use Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide AI-powered repair diagnostics</li>
            <li>To improve our repair guides and site content</li>
            <li>To understand which guides are most helpful (anonymous analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            3. Third-Party Services
          </h2>
          <p>Our Site uses the following third-party services:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Anthropic (Claude AI):</strong> Processes chat and
              diagnostic queries. Subject to{" "}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Anthropic&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel:</strong> Hosts our website. Subject to{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Affiliate partners (Amazon, eBay, iFixit):</strong> When
              you click affiliate links, those sites have their own privacy
              policies and may use cookies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            4. Cookies
          </h2>
          <p>
            We use minimal cookies only for essential site functionality (such
            as rate-limiting the AI chat feature). We do not use advertising
            cookies or third-party tracking cookies. Affiliate partner sites may
            set their own cookies when you visit them through our links.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            5. Data Retention
          </h2>
          <p>
            AI chat conversations are not permanently stored on our servers.
            Anonymous analytics data is retained for up to 24 months for the
            purpose of improving our content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Our Site is not directed to children under 13. We do not knowingly
            collect information from children under 13. Minors should use this
            Site only with adult supervision, especially when attempting any
            repairs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            7. Your Rights
          </h2>
          <p>
            Since we collect minimal data and do not maintain user accounts, we
            have very little personal data about you. If you have questions
            about any data we may have, contact us at{" "}
            <strong>privacy@repairitfree.com</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>
        </section>
      </div>
    </div>
  );
}
