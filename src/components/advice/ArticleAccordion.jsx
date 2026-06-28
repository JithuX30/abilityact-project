"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ArticleAccordion({ id, question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border border-[#E8E4F0] rounded-xl overflow-hidden">
      <button
        id={triggerId}
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#1F1B2E] hover:bg-[#F7F3FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6B4E9E]"
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#6B4E9E] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={isOpen ? "block" : "hidden"}
      >
        <div className="px-5 pb-5 pt-1 text-[#524D63] leading-relaxed text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
