"use client";

import { useState, useId } from "react";
import { MapPin, Clock, CalendarPlus, List, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

const FILTERS = ["All", "Community", "Training", "Fundraising", "Awareness"];

const EVENTS = [
  {
    id: "benefits-drop-in-aug",
    day: "12",
    month: "AUG",
    year: "2026",
    title: "Benefits Advice Drop-in Session",
    time: "10am – 1pm",
    location: "Hillingdon Civic Centre, Uxbridge",
    type: "Community",
    desc: "Free one-to-one benefits advice with our qualified advisors. No appointment needed — just turn up. Interpreters available on request.",
  },
  {
    id: "employment-workshop-aug",
    day: "19",
    month: "AUG",
    year: "2026",
    title: "Disability Employment Workshop",
    time: "2pm – 4pm",
    location: "Online via Zoom",
    type: "Training",
    desc: "A practical workshop covering job searching, supported employment, and your rights as a disabled employee. BSL interpretation provided.",
  },
  {
    id: "bsl-social-sep",
    day: "5",
    month: "SEP",
    year: "2026",
    title: "BSL Social Evening",
    time: "6pm – 8:30pm",
    location: "AbilityAction Community Hub, London",
    type: "Community",
    desc: "A relaxed BSL social evening for deaf and hearing people to connect, practise sign language, and share experiences.",
  },
  {
    id: "charity-walk-sep",
    day: "20",
    month: "SEP",
    year: "2026",
    title: "Hillingdon Sponsored Walk",
    time: "9am – 12pm",
    location: "Hillingdon Country Park",
    type: "Fundraising",
    desc: "Join our sponsored walk through Hillingdon Country Park to raise funds for our community outreach programme. All abilities welcome.",
  },
];

const CALENDAR_PLACEHOLDER_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const EVENT_DAYS_AUG = [12, 19];

export default function EventsFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [view, setView] = useState("list");
  const liveRegionId = useId();

  const filtered =
    activeFilter === "All"
      ? EVENTS
      : EVENTS.filter((e) => e.type === activeFilter);

  return (
    <>
      {/* View toggle + filters row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Filter chips */}
        <div
          role="group"
          aria-label="Filter events by type"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                aria-pressed={active}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] focus-visible:ring-offset-2 ${
                  active
                    ? "bg-[#2A7A4B] text-white"
                    : "bg-white border border-[#E8E4F0] text-[#524D63] hover:border-[#2A7A4B] hover:text-[#2A7A4B]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* View toggle */}
        <div
          role="group"
          aria-label="Choose event view"
          className="flex items-center gap-1 border border-[#E8E4F0] rounded-lg p-1 self-start sm:self-auto shrink-0"
        >
          <button
            type="button"
            onClick={() => setView("list")}
            aria-pressed={view === "list"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] ${
              view === "list"
                ? "bg-[#2A7A4B] text-white"
                : "text-[#524D63] hover:text-[#2A7A4B]"
            }`}
          >
            <List size={14} aria-hidden="true" />
            List
          </button>
          <button
            type="button"
            onClick={() => setView("calendar")}
            aria-pressed={view === "calendar"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] ${
              view === "calendar"
                ? "bg-[#2A7A4B] text-white"
                : "text-[#524D63] hover:text-[#2A7A4B]"
            }`}
          >
            <Calendar size={14} aria-hidden="true" />
            Calendar
          </button>
        </div>
      </div>

      {/* Screen-reader live region */}
      <p
        id={liveRegionId}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {filtered.length} {filtered.length === 1 ? "event" : "events"} shown
        {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
      </p>

      {/* List view */}
      {view === "list" && (
        <>
          {filtered.length === 0 ? (
            <p className="text-[#524D63] text-center py-16">
              No upcoming events in this category.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {filtered.map(({ id, day, month, year, title, time, location, type, desc }) => (
                <article
                  key={id}
                  className="bg-white border border-[#E8E4F0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(31,27,46,0.06)] hover:shadow-[0_6px_20px_rgba(31,27,46,0.10)] transition-shadow flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {/* Date block */}
                    <div
                      className="inline-flex flex-col items-center justify-center w-14 h-14 bg-[#2A7A4B] rounded-xl text-white shrink-0"
                      aria-label={`${day} ${month} ${year}`}
                    >
                      <span className="text-lg font-semibold leading-none" aria-hidden="true">
                        {day}
                      </span>
                      <span className="text-[10px] font-medium tracking-wider mt-0.5" aria-hidden="true">
                        {month}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF7EF] text-[#2A7A4B] mb-1.5">
                        {type}
                      </span>
                      <h3
                        className="font-semibold text-[#1F1B2E] leading-snug"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {title}
                      </h3>
                    </div>
                  </div>

                  <p className="flex items-center gap-1.5 text-sm text-[#8B8699] mb-1">
                    <Clock size={13} className="shrink-0 text-[#2A7A4B]" aria-hidden="true" />
                    {time}
                  </p>
                  <p className="flex items-start gap-1.5 text-sm text-[#8B8699] mb-3">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-[#2A7A4B]" aria-hidden="true" />
                    {location}
                  </p>

                  <p className="text-sm text-[#524D63] leading-relaxed flex-1 mb-5">
                    {desc}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Individual event registration pages not yet built — href="#" placeholder */}
                    <Button variant="secondary" href="#">
                      Register
                    </Button>
                    <a
                      href="#"
                      aria-label={`Add ${title} to your calendar (placeholder)`}
                      className="flex items-center gap-1.5 text-sm text-[#524D63] hover:text-[#2A7A4B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] rounded"
                    >
                      <CalendarPlus size={14} aria-hidden="true" />
                      Add to calendar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}

      {/* Calendar view — simple month grid placeholder */}
      {view === "calendar" && (
        <div
          className="bg-white border border-[#E8E4F0] rounded-2xl overflow-hidden"
          aria-label="Calendar view — August 2026"
        >
          <div className="bg-[#2A7A4B] text-white px-6 py-4 flex items-center justify-between">
            <p className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
              August 2026
            </p>
            <p className="text-sm text-green-100">
              Switch to list view for full event details
            </p>
          </div>

          {/* Day-of-week headers */}
          <div className="grid grid-cols-7 border-b border-[#E8E4F0]">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="py-2 text-center text-xs font-medium text-[#8B8699]">
                {d}
              </div>
            ))}
          </div>

          {/* Day grid — August 2026 starts on Saturday (col 6, 0-indexed) */}
          <div className="grid grid-cols-7">
            {/* 5 empty cells for Mon–Fri before Sat 1 Aug */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`empty-${i}`} className="h-12 border-b border-r border-[#F4F2F7]" aria-hidden="true" />
            ))}
            {CALENDAR_PLACEHOLDER_DAYS.map((d) => {
              const hasEvent = EVENT_DAYS_AUG.includes(d);
              return (
                <div
                  key={d}
                  className={`h-12 border-b border-r border-[#F4F2F7] flex flex-col items-start justify-start p-1.5 ${
                    hasEvent ? "bg-[#EAF7EF]" : ""
                  }`}
                  aria-label={hasEvent ? `${d} August — event` : `${d} August`}
                >
                  <span className={`text-xs font-medium ${hasEvent ? "text-[#2A7A4B]" : "text-[#524D63]"}`}>
                    {d}
                  </span>
                  {hasEvent && (
                    <span className="mt-0.5 w-full text-[9px] leading-tight text-[#2A7A4B] font-medium truncate">
                      Event
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="px-6 py-3 text-xs text-[#8B8699] bg-[#F9F8FC]">
            Switch to <strong>List view</strong> above to see full event details, times, and registration links.
          </p>
        </div>
      )}
    </>
  );
}
