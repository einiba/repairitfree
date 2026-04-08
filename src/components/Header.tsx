"use client";

import Link from "next/link";
import { useState } from "react";
import SearchAutocomplete from "@/components/SearchAutocomplete";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🔧</span>
          <span className="text-xl font-bold text-primary">
            RepairIt<span className="text-success">Free</span>
          </span>
        </Link>

        <div className="flex-1 max-w-xl hidden sm:block">
          <SearchAutocomplete variant="header" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm shrink-0">
          <Link
            href="/diagnose"
            className="text-muted hover:text-primary font-medium"
          >
            Diagnose
          </Link>
          <Link
            href="/guides"
            className="text-muted hover:text-primary font-medium"
          >
            Guides
          </Link>
          <Link
            href="/repair-vs-replace"
            className="text-muted hover:text-primary font-medium"
          >
            Repair vs Replace
          </Link>
          <Link
            href="/about"
            className="text-muted hover:text-primary font-medium"
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-surface transition-colors shrink-0 ml-auto"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile search — always visible on small screens */}
      <div className="sm:hidden px-4 pb-3">
        <SearchAutocomplete variant="mobile" />
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-white px-4 py-3">
          <ul className="space-y-1">
            <li>
              <Link
                href="/diagnose"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                Diagnose
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/repair-vs-replace"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                Repair vs Replace
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 text-base font-medium text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
