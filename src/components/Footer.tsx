import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔧</span>
              <span className="font-bold text-primary">
                RepairIt<span className="text-success">Free</span>
              </span>
            </div>
            <p className="text-sm text-muted">
              Free repair guides for everyone. We believe you have the right to
              fix the things you own.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/diagnose" className="hover:text-primary">
                  AI Diagnostic Tool
                </Link>
              </li>
              <li>
                <Link href="/guides/washing-machines" className="hover:text-primary">
                  Appliance Guides
                </Link>
              </li>
              <li>
                <Link href="/error-codes/dishwasher" className="hover:text-primary">
                  Error Code Lookup
                </Link>
              </li>
              <li>
                <Link href="/repair-vs-replace" className="hover:text-primary">
                  Repair vs Replace Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Important</h3>
            <p className="text-xs text-muted leading-relaxed">
              This site is for informational purposes only. If you are unsure
              about any repair, especially anything involving electricity, gas,
              or water, please consult a professional. Your safety is more
              important than saving money.
            </p>
            <p className="text-xs text-muted mt-3">
              Some links are affiliate links. We may earn a small commission at
              no extra cost to you.{" "}
              <Link href="/about" className="underline hover:text-primary">
                Learn more
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-4 text-xs text-muted">
          <p className="text-center leading-relaxed mb-4 max-w-2xl mx-auto">
            RepairItFree is reader-supported. When you buy through links on our
            site, we may earn an affiliate commission at no extra cost to you. As
            an Amazon Associate we earn from qualifying purchases.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Link href="/terms" className="hover:text-primary underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-primary underline">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-primary underline">
              About
            </Link>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} RepairItFree. All guides are free, forever.
            All content is for informational purposes only. Use at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
