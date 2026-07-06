"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Maps each language route to its equivalents in other languages.
// null = this is the current page (no link rendered).
const PAGE_MAP = {
  "/ta":             { en: "/",                                               si: "/si" },
  "/ta/benefits":    { en: "/advice-and-support/benefits-and-entitlements",  si: "/si/benefits" },
  "/ta/employment":  { en: "/advice-and-support/employment-support",         si: "/si/employment" },
  "/ta/your-rights": { en: "/advice-and-support/your-rights",                si: "/si/your-rights" },
  "/ta/contact":     { en: "/contact",                                        si: "/si/contact" },
  "/si":             { en: "/",                                               ta: "/ta" },
  "/si/benefits":    { en: "/advice-and-support/benefits-and-entitlements",  ta: "/ta/benefits" },
  "/si/employment":  { en: "/advice-and-support/employment-support",         ta: "/ta/employment" },
  "/si/your-rights": { en: "/advice-and-support/your-rights",                ta: "/ta/your-rights" },
  "/si/contact":     { en: "/contact",                                        ta: "/ta/contact" },
};

const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "ta", label: "தமிழ்",   short: "தமிழ்" },
  { code: "si", label: "සිංහල",   short: "සිං" },
];

function getCurrentLang(pathname) {
  if (pathname.startsWith("/ta")) return "ta";
  if (pathname.startsWith("/si")) return "si";
  return "en";
}

function getTargetHref(pathname, targetCode) {
  const map = PAGE_MAP[pathname];
  if (map) return map[targetCode] ?? null;
  // English pages: always link to language homepages
  if (targetCode === "ta") return "/ta";
  if (targetCode === "si") return "/si";
  return null; // current (en)
}

export default function LanguageSwitcher({ className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  const currentLang = getCurrentLang(pathname);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const currentLabel = LANGS.find((l) => l.code === currentLang)?.short ?? "EN";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language / மொழியை தேர்வு செய்யவும் / භාෂාව තෝරන්න"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-[#524D63] hover:text-[#6B4E9E] border border-[#E8E4F0] rounded-lg hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
      >
        <Globe size={14} aria-hidden="true" />
        <span className="font-medium text-xs">{currentLabel}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language / மொழி / භාෂාව"
          className="absolute top-full right-0 mt-1 w-36 bg-white rounded-xl border border-[#E8E4F0] shadow-lg py-1 z-50"
        >
          {LANGS.map(({ code, label }) => {
            const href = getTargetHref(pathname, code);
            const isCurrent = code === currentLang;

            if (isCurrent || href === null) {
              return (
                <span
                  key={code}
                  role="option"
                  aria-selected="true"
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[#6B4E9E] bg-[#F7F3FC]"
                >
                  {label}
                  <Check size={13} aria-hidden="true" />
                </span>
              );
            }

            return (
              <Link
                key={code}
                href={href}
                role="option"
                aria-selected="false"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-[#1F1B2E] hover:bg-[#F7F3FC] hover:text-[#6B4E9E] transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
