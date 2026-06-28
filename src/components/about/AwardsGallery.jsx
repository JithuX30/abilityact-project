"use client";

import { useState, useEffect, useRef } from "react";
import { X, ImageIcon, ZoomIn } from "lucide-react";

const GALLERY = [
  {
    id: 1,
    caption: "AbilityAction team at the Hillingdon Community Awards 2023",
    alt: "Seven AbilityAction team members smiling together at an awards ceremony, holding a framed certificate in front of a branded backdrop",
  },
  {
    id: 2,
    caption: "Benefits drop-in session at Hillingdon Civic Centre",
    alt: "An advisor sits across from a client at a table covered with documents, talking in a bright, friendly community room",
  },
  {
    id: 3,
    caption: "BSL community social evening",
    alt: "Around twenty people gathered in a community hall, some signing to each other, with colourful bunting and fairy lights in the background",
  },
  {
    id: 4,
    caption: "Partnership launch with Moorfields Eye Hospital",
    alt: "AbilityAction CEO Sarah Johnson shaking hands with a Moorfields Eye Hospital representative, both smiling in a hospital reception area",
  },
  {
    id: 5,
    caption: "Employment workshop in progress",
    alt: "Eight workshop participants seated around tables, engaged in discussion while a facilitator presents at the front of the room",
  },
  {
    id: 6,
    caption: "AbilityAction community hub opening day",
    alt: "A small celebratory crowd gathered outside a community building for a ribbon-cutting ceremony on a bright afternoon",
  },
];

export default function AwardsGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRefs = useRef([]);

  const isOpen = openIndex !== null;

  const openModal = (index) => setOpenIndex(index);
  const closeModal = () => {
    const prev = openIndex;
    setOpenIndex(null);
    setTimeout(() => triggerRefs.current[prev]?.focus(), 50);
  };

  // Initial focus into modal
  useEffect(() => {
    if (isOpen) setTimeout(() => closeButtonRef.current?.focus(), 50);
  }, [isOpen]);

  // Keyboard: Escape closes, Tab trapped
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key !== "Tab") return;
      const modal = document.getElementById("gallery-modal");
      if (!modal) return;
      const focusable = modal.querySelectorAll(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, openIndex]);

  const item = isOpen ? GALLERY[openIndex] : null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {GALLERY.map((photo, index) => (
          <div key={photo.id}>
            <button
              ref={(el) => { triggerRefs.current[index] = el; }}
              type="button"
              onClick={() => openModal(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(index);
                }
              }}
              aria-label={`View larger image: ${photo.caption}`}
              className="w-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2 rounded-xl"
            >
              {/* Placeholder image area */}
              <div
                role="img"
                aria-label={photo.alt}
                className="w-full aspect-[4/3] bg-[#F4F2F7] rounded-xl flex flex-col items-center justify-center border border-[#E8E4F0] group-hover:border-[#6B4E9E] group-hover:bg-[#F7F3FC] transition-all relative overflow-hidden"
              >
                <ImageIcon
                  size={28}
                  className="text-[#8B8699] opacity-40"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[#6B4E9E]/0 group-hover:bg-[#6B4E9E]/10 transition-colors flex items-center justify-center">
                  <ZoomIn
                    size={24}
                    className="text-[#6B4E9E] opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </button>
            <p className="mt-2 text-xs text-[#524D63] leading-snug text-center px-1">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 z-50"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            id="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={item.caption}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4F0]">
                <p
                  className="font-semibold text-[#1F1B2E] text-sm leading-snug pr-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.caption}
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close image viewer"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-[#524D63] hover:bg-[#F4F2F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              {/* Large image placeholder */}
              <div
                role="img"
                aria-label={item.alt}
                className="w-full aspect-video bg-[#F4F2F7] flex flex-col items-center justify-center"
              >
                <ImageIcon
                  size={48}
                  className="text-[#8B8699] opacity-30"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm text-[#8B8699]">Photo placeholder</p>
              </div>

              {/* Caption */}
              <div className="px-5 py-4">
                <p className="text-sm text-[#524D63]">{item.alt}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
