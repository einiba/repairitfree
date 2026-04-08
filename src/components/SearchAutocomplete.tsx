"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

interface SearchResult {
  id: string;
  brand: string;
  category: string;
  categorySlug: string;
  brandSlug: string;
  problemSlug: string;
  problemTitle: string;
  quickDiagnosis: string;
  difficulty: string;
  timeEstimate: string;
  costEstimate: string;
}

const difficultyStyles: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

interface Props {
  /** Variant controls styling to fit different contexts */
  variant: "hero" | "header" | "mobile";
  /** Optional: auto-focus the input */
  autoFocus?: boolean;
}

export default function SearchAutocomplete({ variant, autoFocus }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const router = useRouter();

  const runSearch = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) {
      setResults([]);
      setIsOpen(false);
      setIsLoading(false);
      return;
    }

    // Abort any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(trimmed)}`,
        { signal: controller.signal }
      );
      if (!res.ok) throw new Error("Search failed");
      const data: SearchResult[] = await res.json();
      setResults(data);
      setIsOpen(true);
      setActiveIndex(-1);
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setResults([]);
      setIsOpen(true);
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(val), 300);
  }

  function navigateToGuide(result: SearchResult, fromClick = false) {
    if (fromClick) {
      window.umami?.track("search-click", { query, guide: result.id });
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "search-click",
          query,
          metadata: { guide: result.id },
        }),
      }).catch(() => {});
    }
    setIsOpen(false);
    setQuery("");
    router.push(
      `/guides/${result.categorySlug}/${result.brandSlug}/${result.problemSlug}`
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateToGuide(results[activeIndex], true);
    } else if (query.trim()) {
      window.umami?.track("search", { query: query.trim() });
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "search", query: query.trim() }),
      }).catch(() => {});
      setIsOpen(false);
      router.push(`/diagnose?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Cleanup debounce and abort on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const isHero = variant === "hero";
  const isMobile = variant === "mobile";

  const inputClasses =
    variant === "hero"
      ? "flex-1 px-4 py-3 rounded-l-lg text-foreground text-base focus:outline-none"
      : isMobile
        ? "w-full px-3 py-2.5 border border-border rounded-l-lg text-base focus:outline-none focus:ring-2 focus:ring-primary"
        : "w-full px-4 py-2 border border-border rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  const buttonClasses =
    variant === "hero"
      ? "px-6 py-3 bg-success text-white rounded-r-lg font-semibold hover:bg-green-700 text-base min-h-[44px]"
      : isMobile
        ? "px-4 py-2.5 bg-primary text-white rounded-r-lg hover:bg-primary-dark text-base min-w-[44px] min-h-[44px]"
        : "px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark text-sm font-medium";

  const buttonText = isHero ? "Diagnose" : isMobile ? "Go" : "Search";

  return (
    <div ref={containerRef} className="relative w-full">
      <form
        onSubmit={handleSubmit}
        className={isHero ? "flex max-w-lg mx-auto" : "flex"}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          placeholder={
            isMobile
              ? "What's broken?"
              : "What's broken? (e.g., 'Samsung dryer not heating')"
          }
          className={inputClasses}
          autoFocus={autoFocus}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
        />
        <button type="submit" className={buttonClasses}>
          {buttonText}
        </button>
      </form>

      {isOpen && (
        <div
          className={`absolute z-[100] mt-1 bg-white border border-border rounded-lg shadow-lg overflow-hidden ${
            isHero
              ? "left-1/2 -translate-x-1/2 w-full max-w-lg"
              : "left-0 right-0"
          }`}
          role="listbox"
        >
          {isLoading ? (
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-muted">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((r, i) => (
                <li
                  key={r.id}
                  role="option"
                  aria-selected={i === activeIndex}
                  className={`px-4 py-3 cursor-pointer border-b border-border last:border-b-0 transition-colors ${
                    i === activeIndex
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onMouseDown={() => navigateToGuide(r, true)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">
                        {r.brand} {r.category} &mdash;{" "}
                        {r.problemTitle}
                      </p>
                      <p className="text-xs text-muted truncate mt-0.5">
                        {r.quickDiagnosis.slice(0, 90)}
                        {r.quickDiagnosis.length > 90 ? "..." : ""}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                        difficultyStyles[r.difficulty] ?? ""
                      }`}
                    >
                      {r.difficulty}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-muted mb-2">
                No guides found for &ldquo;{query}&rdquo;
              </p>
              <a
                href={`/diagnose?q=${encodeURIComponent(query.trim())}`}
                className="text-sm text-primary font-medium hover:underline"
              >
                Try our diagnostic tool &rarr;
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
