"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchPrompt() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔍</span>
              <p className="text-sm font-semibold text-foreground">
                Can&apos;t find your device?
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-foreground text-xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <p className="text-sm text-muted mb-4">
            Search our 290+ free repair guides to find step-by-step fixes for
            your device.
          </p>
          <Link
            href="/#search"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Search Repair Guides
          </Link>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-dark flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <span className="text-lg">🔍</span>
          Can&apos;t find your device?
        </button>
      )}
    </div>
  );
}
