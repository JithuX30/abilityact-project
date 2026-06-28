"use client";

import { MessageCircle } from "lucide-react";

export default function OpenArasiButton({ label = "Ask Arasi", className = "" }) {
  return (
    <button
      type="button"
      onClick={() =>
        document.dispatchEvent(new CustomEvent("open-arasi-widget"))
      }
      className={`inline-flex items-center gap-2 text-sm font-medium text-[#6B4E9E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] rounded ${className}`}
    >
      <MessageCircle size={15} aria-hidden="true" />
      {label}
    </button>
  );
}
