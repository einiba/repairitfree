import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for RepairItFree.com",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />

      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted text-sm mb-8">Last updated: April 6, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using RepairItFree.com (&quot;the Site&quot;), you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            2. Informational Purposes Only
          </h2>
          <p>
            All content on this Site, including but not limited to repair guides,
            diagnostic suggestions, error code explanations, AI-generated
            responses, cost estimates, difficulty ratings, and parts
            recommendations, is provided <strong>for informational and
            educational purposes only</strong>.
          </p>
          <p className="mt-3">
            The content on this Site <strong>does not constitute professional
            repair advice</strong>, and should not be treated as a substitute
            for professional consultation, inspection, or repair services from a
            licensed technician, electrician, plumber, or other qualified
            professional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            3. No Warranty; Disclaimer of Liability
          </h2>
          <p>
            THE SITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, OR
            NON-INFRINGEMENT.
          </p>
          <p className="mt-3">
            We do not warrant or guarantee that any repair guide, diagnostic
            result, or recommendation will:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Correctly diagnose your specific problem</li>
            <li>Result in a successful repair</li>
            <li>Be safe for your particular device, model, or situation</li>
            <li>Not cause additional damage to your device or property</li>
            <li>Be current, complete, or accurate for your specific model</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            4. Assumption of Risk
          </h2>
          <p>
            <strong>
              You acknowledge and agree that any repairs you attempt based on
              information from this Site are performed entirely at your own
              risk.
            </strong>
          </p>
          <p className="mt-3">
            Repairing electronics and appliances can involve serious hazards
            including but not limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Electrical shock or electrocution</strong> from
              high-voltage components
            </li>
            <li>
              <strong>Fire</strong> from improper electrical connections or lint
              buildup
            </li>
            <li>
              <strong>Gas leaks or explosions</strong> from gas-powered
              appliances
            </li>
            <li>
              <strong>Water damage or flooding</strong> from plumbing-connected
              appliances
            </li>
            <li>
              <strong>Personal injury</strong> from sharp components, heavy
              appliances, or chemical exposure
            </li>
            <li>
              <strong>Further damage</strong> to the device being repaired
            </li>
            <li>
              <strong>Voiding manufacturer warranties</strong> through
              unauthorized repair
            </li>
          </ul>
          <p className="mt-3">
            By using this Site, you expressly assume all risks associated with
            any repair you undertake. If you are unsure about any step, you
            should stop and consult a qualified professional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            5. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, REPAIRITFREE.COM,
            ITS OWNERS, OPERATORS, CONTRIBUTORS, AND AFFILIATES SHALL NOT BE
            LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE
            SITE OR ANY CONTENT PROVIDED THEREIN, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Personal injury or death</li>
            <li>Property damage</li>
            <li>Device damage or loss of data</li>
            <li>Financial losses from unsuccessful repairs</li>
            <li>Voided warranties</li>
            <li>Any other damages of any kind</li>
          </ul>
          <p className="mt-3">
            This limitation applies regardless of the legal theory under which
            damages are sought, whether in contract, tort (including
            negligence), strict liability, or otherwise, even if we have been
            advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            6. AI-Generated Content
          </h2>
          <p>
            Some content on this Site is generated or assisted by artificial
            intelligence. AI-generated content may contain errors,
            inaccuracies, or outdated information. AI responses are not reviewed
            by a licensed repair professional before being displayed.
          </p>
          <p className="mt-3">
            You should independently verify any AI-generated diagnosis,
            recommendation, or repair instruction before acting on it. Never
            rely solely on AI-generated content for safety-critical decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            7. Affiliate Links and Third-Party Products
          </h2>
          <p>
            This Site contains affiliate links to third-party retailers
            (including Amazon, eBay, and iFixit). When you purchase through
            these links, we may earn a commission at no additional cost to you.
          </p>
          <p className="mt-3">
            We do not manufacture, sell, or warranty any parts or tools linked
            from this Site. We are not responsible for the quality, safety,
            compatibility, or fitness of any product purchased through our
            affiliate links. Product compatibility with your specific device
            model is your responsibility to verify before purchasing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless RepairItFree.com,
            its owners, operators, and affiliates from and against any and all
            claims, damages, losses, liabilities, costs, and expenses (including
            reasonable attorneys&apos; fees) arising out of or related to your use
            of the Site, any repair you attempt based on information from the
            Site, or your violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            9. Not Professional Advice
          </h2>
          <p>
            The operators of this Site are not licensed repair technicians,
            electricians, plumbers, or engineers. The information provided is
            based on common repair knowledge and should not be considered
            professional advice. For complex repairs, safety-critical issues, or
            any situation where you feel uncertain, always consult a qualified
            professional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            10. Modifications
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated &quot;Last updated&quot;
            date. Your continued use of the Site after changes are posted
            constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            11. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States. Any disputes arising from these Terms
            or your use of the Site shall be resolved in the courts of
            appropriate jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">
            12. Contact
          </h2>
          <p>
            If you have questions about these Terms, contact us at{" "}
            <strong>legal@repairitfree.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
