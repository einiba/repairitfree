"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/diagnose?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🔧</span>
          <span className="text-xl font-bold text-primary">
            RepairIt<span className="text-success">Free</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden sm:flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What's broken? (e.g., 'Samsung dryer not heating')"
            className="w-full px-4 py-2 border border-border rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark text-sm font-medium"
          >
            Search
          </button>
        </form>

        <nav className="flex items-center gap-4 text-sm shrink-0">
          <Link
            href="/diagnose"
            className="text-muted hover:text-primary font-medium"
          >
            Diagnose
          </Link>
          <Link
            href="/guides/washing-machines"
            className="text-muted hover:text-primary font-medium hidden md:block"
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="text-muted hover:text-primary font-medium hidden md:block"
          >
            About
          </Link>
        </nav>
      </div>

      {/* Mobile search */}
      <div className="sm:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What's broken?"
            className="w-full px-3 py-2 border border-border rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark text-sm"
          >
            Go
          </button>
        </form>
      </div>
    </header>
  );
}
