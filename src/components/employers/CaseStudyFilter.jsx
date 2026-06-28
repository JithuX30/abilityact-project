"use client";

import { useState, useId } from "react";
import { Building2 } from "lucide-react";
import Badge from "@/components/ui/Badge";

const FILTERS = ["All", "Healthcare", "Retail", "Public sector", "Technology"];

const CASE_STUDIES = [
  {
    id: "moorfields",
    title: "Moorfields Eye Hospital NHS Foundation Trust",
    sector: "Healthcare",
    outcome: "On-site benefits advice clinics helped 80+ patients claim over £120,000 in unclaimed entitlements.",
    logo: "Moorfields Eye Hospital",
  },
  {
    id: "hillingdon-council",
    title: "London Borough of Hillingdon",
    sector: "Public sector",
    outcome: "Disability Confident Employer status achieved within six months; 14 staff completed disability awareness training.",
    logo: "Hillingdon Council",
  },
  {
    id: "boots",
    title: "Boots UK — Hillingdon stores",
    sector: "Retail",
    outcome: "BSL awareness training for all customer-facing staff improved deaf customer satisfaction by 40%.",
    logo: "Boots UK",
  },
  {
    id: "nhs-west-london",
    title: "NHS West London Integrated Care Board",
    sector: "Healthcare",
    outcome: "Supported placement programme placed 8 disabled candidates into NHS roles within one financial year.",
    logo: "NHS West London",
  },
  {
    id: "tesco",
    title: "Tesco — West London region",
    sector: "Retail",
    outcome: "Accessibility audit identified 12 practical adjustments across 6 stores; all implemented within 90 days.",
    logo: "Tesco",
  },
  {
    id: "techbridge",
    title: "TechBridge Solutions",
    sector: "Technology",
    outcome: "Company-wide D&I training (200 employees); achieved Disability Confident Committed status.",
    logo: "TechBridge Solutions",
  },
];

export default function CaseStudyFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const liveRegionId = useId();

  const filtered =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.sector === activeFilter);

  return (
    <>
      {/* Filter chips */}
      <div
        role="group"
        aria-label="Filter case studies by sector"
        className="flex flex-wrap gap-2 mb-8"
      >
        {FILTERS.map((f) => {
          const active = activeFilter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              aria-pressed={active}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] focus-visible:ring-offset-2 ${
                active
                  ? "bg-[#E07856] text-white"
                  : "bg-white border border-[#E8E4F0] text-[#524D63] hover:border-[#E07856] hover:text-[#E07856]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Screen-reader live region — announces result count on filter change */}
      <p
        id={liveRegionId}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {filtered.length} case {filtered.length === 1 ? "study" : "studies"} shown
        {activeFilter !== "All" ? ` for ${activeFilter}` : ""}
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(({ id, title, sector, outcome, logo }) => (
          <article
            key={id}
            className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
          >
            <div
              role="img"
              aria-label={`${logo} logo placeholder`}
              className="w-full h-24 bg-[#F4F2F7] border-b border-[#E8E4F0] flex items-center justify-center gap-2"
            >
              <Building2
                size={24}
                className="text-[#8B8699] opacity-40"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-[#8B8699]">{logo}</span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="mb-2">
                <Badge colour="coral">{sector}</Badge>
              </div>
              <h3
                className="font-semibold text-[#1F1B2E] mb-2 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#524D63] leading-relaxed flex-1">
                {outcome}
              </p>
              {/* Individual case study detail pages not yet built — href="#" placeholder */}
              <a
                href="#"
                aria-label={`Read case study: ${title} (page coming soon)`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#E07856] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] rounded"
              >
                Read case study
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[#524D63] text-center py-16">
          No case studies found for this sector.
        </p>
      )}
    </>
  );
}
