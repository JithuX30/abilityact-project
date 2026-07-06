"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export default function SearchBar({ articles }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const filtered =
    query.trim().length > 1
      ? articles
          .filter(
            (a) =>
              a.title.toLowerCase().includes(query.toLowerCase()) ||
              a.topicName.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 7)
      : [];

  const showDropdown = isOpen && filtered.length > 0;

  const navigate = useCallback(
    (article) => {
      setIsOpen(false);
      setQuery(article.title);
      router.push(`/advice-and-support/${article.topicSlug}/${article.slug}`);
    },
    [router]
  );

  const handleKeyDown = (e) => {
    if (!showDropdown) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0) navigate(filtered[activeIndex]);
        else if (filtered.length > 0) navigate(filtered[0]);
        break;
      case "Escape":
        setIsOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset active index when filtered list changes
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Combobox — role belongs on the <input> per ARIA 1.2 */}
      <div>
        <label htmlFor="advice-search" className="sr-only">
          Search advice articles
        </label>

        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B8699] pointer-events-none"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            id="advice-search"
            type="search"
            role="combobox"
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search advice — e.g. PIP, workplace adjustments, housing"
            aria-expanded={showDropdown}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-controls="search-listbox"
            aria-activedescendant={
              activeIndex >= 0 ? `search-option-${activeIndex}` : undefined
            }
            className="w-full h-14 pl-12 pr-12 rounded-xl border-2 border-[#E8E4F0] bg-white text-[#1F1B2E] placeholder-[#8B8699] text-base focus:outline-none focus:border-[#6B4E9E] shadow-sm transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B8699] hover:text-[#1F1B2E] transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Dropdown suggestions */}
        {showDropdown && (
          <ul
            id="search-listbox"
            role="listbox"
            aria-label="Search suggestions"
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E8E4F0] rounded-xl shadow-lg z-50 overflow-hidden py-1"
          >
            {filtered.map((article, index) => (
              <li
                key={`${article.topicSlug}/${article.slug}`}
                id={`search-option-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent blur before click
                  navigate(article);
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex items-start justify-between gap-4 px-4 py-3 cursor-pointer transition-colors ${
                  index === activeIndex
                    ? "bg-[#F7F3FC]"
                    : "hover:bg-[#F7F3FC]"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Search
                    size={14}
                    className="text-[#8B8699] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#1F1B2E] truncate">
                    {article.title}
                  </span>
                </div>
                <span className="shrink-0 text-xs text-[#8B8699] mt-0.5">
                  {article.topicName}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
