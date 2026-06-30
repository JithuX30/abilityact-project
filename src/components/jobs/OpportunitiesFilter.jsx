"use client";

import { useState, useId } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const FILTERS = ["All", "Employment", "Volunteering", "Training"];

const OPPORTUNITIES = [
  {
    id: "e1",
    title: "Peer Support Volunteer",
    employer: "Mind",
    type: "Volunteering",
    location: "Online / London",
    closing: "Ongoing",
    disabilityConfident: true,
    href: "#",
  },
  {
    id: "e2",
    title: "Benefits Advisor",
    employer: "Citizens Advice",
    type: "Employment",
    location: "Various — West London",
    closing: "31 August 2026",
    disabilityConfident: true,
    href: "#",
  },
  {
    id: "e3",
    title: "Disability Inclusion Trainer",
    employer: "Scope",
    type: "Employment",
    location: "Remote / London",
    closing: "15 August 2026",
    disabilityConfident: false,
    href: "#",
  },
  {
    id: "e4",
    title: "Access to Work Awareness Training",
    employer: "DWP",
    type: "Training",
    location: "Online (self-paced)",
    closing: "Rolling enrolment",
    disabilityConfident: false,
    href: "#",
  },
  {
    id: "e5",
    title: "Community Fundraising Volunteer",
    employer: "RNIB",
    type: "Volunteering",
    location: "West London",
    closing: "Ongoing",
    disabilityConfident: true,
    href: "#",
  },
  {
    id: "e6",
    title: "Employment Rights Workshop",
    employer: "Disability Rights UK",
    type: "Training",
    location: "Online",
    closing: "Various dates",
    disabilityConfident: false,
    href: "#",
  },
];

export default function OpportunitiesFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const liveRegionId = useId();

  const filtered =
    activeFilter === "All"
      ? OPPORTUNITIES
      : OPPORTUNITIES.filter((o) => o.type === activeFilter);

  return (
    <>
      {/* Filter chips */}
      <div
        role="group"
        aria-label="Filter opportunities by type"
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

      {/* Live region */}
      <p
        id={liveRegionId}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {filtered.length} {filtered.length === 1 ? "opportunity" : "opportunities"} shown
        {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="text-[#524D63] text-center py-12">
          No opportunities in this category right now.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map(({ id, title, employer, type, location, closing, disabilityConfident, href }) => (
            <article
              key={id}
              className="bg-white border border-[#E8E4F0] rounded-2xl p-5 shadow-[0_2px_8px_rgba(31,27,46,0.05)] flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {/* Type badge */}
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    type === "Employment"
                      ? "bg-[#E0EDFA] text-[#2D6CA3]"
                      : type === "Volunteering"
                      ? "bg-[#DFF0E8] text-[#2E7D54]"
                      : "bg-[#EDE6F7] text-[#6B4E9E]"
                  }`}
                >
                  {type}
                </span>

                {/* Disability Confident badge — text label, not icon-only */}
                {disabilityConfident && (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#DFF0E8] text-[#2E7D54] border border-[#A8D5B9]"
                    aria-label="This employer is registered as Disability Confident"
                    title="Disability Confident employer"
                  >
                    <CheckCircle2 size={11} aria-hidden="true" />
                    Disability Confident
                  </span>
                )}
              </div>

              <h3
                className="font-semibold text-[#1F1B2E] mb-0.5 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#6B4E9E] font-medium mb-3">{employer}</p>

              <dl className="space-y-1 text-xs text-[#8B8699] mb-5 flex-1">
                <div className="flex gap-1.5">
                  <dt className="font-medium text-[#524D63]">Location:</dt>
                  <dd>{location}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="font-medium text-[#524D63]">Closing:</dt>
                  <dd>{closing}</dd>
                </div>
              </dl>

              {/* External link — opens in new tab with visible note */}
              {/* Individual opportunity pages not yet built — href="#" placeholder */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E07856] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] rounded self-start"
                aria-label={`View opportunity: ${title} at ${employer} (opens in new tab)`}
              >
                <ExternalLink size={13} aria-hidden="true" />
                View opportunity
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
