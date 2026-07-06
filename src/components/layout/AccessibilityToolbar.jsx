"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, RotateCcw, Accessibility } from "lucide-react";

const DEFAULT_PREFS = {
  textSize: "normal",
  highContrast: false,
  dyslexiaFont: false,
  highlightLinks: false,
  reduceMotion: false,
};

function loadPrefs() {
  try {
    const stored = localStorage.getItem("a11y-prefs");
    return stored ? { ...DEFAULT_PREFS, ...JSON.parse(stored) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
}

function applyPrefs(prefs) {
  const html = document.documentElement;
  html.classList.remove("text-large", "text-xlarge");
  if (prefs.textSize === "large") html.classList.add("text-large");
  if (prefs.textSize === "xlarge") html.classList.add("text-xlarge");
  html.classList.toggle("high-contrast", prefs.highContrast);
  html.classList.toggle("dyslexia-font", prefs.dyslexiaFont);
  html.classList.toggle("highlight-links", prefs.highlightLinks);
  html.classList.toggle("reduce-motion", prefs.reduceMotion);
}

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const liveRef = useRef(null);

  useEffect(() => {
    const stored = loadPrefs();
    setPrefs(stored);
    applyPrefs(stored);
  }, []);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    document.addEventListener("open-accessibility-panel", handler);
    return () => document.removeEventListener("open-accessibility-panel", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    setTimeout(() => panelRef.current?.querySelector("button")?.focus(), 50);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const updatePref = useCallback((key, value) => {
    setPrefs((prev) => {
      const next = { ...prev, [key]: value };
      localStorage.setItem("a11y-prefs", JSON.stringify(next));
      applyPrefs(next);
      if (liveRef.current) {
        liveRef.current.textContent = `${key.replace(/([A-Z])/g, " $1")} updated`;
      }
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    localStorage.removeItem("a11y-prefs");
    setPrefs(DEFAULT_PREFS);
    applyPrefs(DEFAULT_PREFS);
    if (liveRef.current) liveRef.current.textContent = "All settings reset";
  }, []);

  return (
    <>
      {/* Floating trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        className="fixed left-4 bottom-24 z-50 w-12 h-12 bg-[#6B4E9E] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8B6BC4] transition-colors"
      >
        <Accessibility size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Live region for announcements */}
      <div ref={liveRef} aria-live="polite" aria-atomic="true" className="sr-only" />

      {/* Panel — inert when closed so keyboard users cannot Tab into off-screen buttons */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Accessibility settings"
        inert={!isOpen}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4F0]">
          <h2 className="font-semibold text-[#1F1B2E]" style={{ fontFamily: "var(--font-heading)" }}>
            Accessibility
          </h2>
          <button
            onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }}
            aria-label="Close accessibility panel"
            className="p-1.5 rounded-lg text-[#524D63] hover:bg-[#F4F2F7] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Controls */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">

          {/* Text size */}
          <div>
            <p className="text-sm font-semibold text-[#1F1B2E] mb-3">Text size</p>
            <div className="flex gap-2">
              {[
                { value: "normal", label: "Normal" },
                { value: "large", label: "Large" },
                { value: "xlarge", label: "Extra large" },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => updatePref("textSize", value)}
                  aria-pressed={prefs.textSize === value}
                  className={`flex-1 py-2 px-2 text-xs rounded-lg border transition-colors ${
                    prefs.textSize === value
                      ? "bg-[#6B4E9E] text-white border-[#6B4E9E]"
                      : "bg-white text-[#524D63] border-[#E8E4F0] hover:border-[#6B4E9E]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          {[
            { key: "highContrast", label: "High contrast", desc: "Dark background, bright text" },
            { key: "dyslexiaFont", label: "Dyslexia-friendly font", desc: "Easier-to-read typeface" },
            { key: "highlightLinks", label: "Highlight links", desc: "Makes links more visible" },
            { key: "reduceMotion", label: "Reduce motion", desc: "Disables animations" },
          ].map(({ key, label, desc }) => (
            <div key={key} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#1F1B2E]">{label}</p>
                <p className="text-xs text-[#8B8699] mt-0.5">{desc}</p>
              </div>
              <button
                role="switch"
                aria-checked={prefs[key]}
                onClick={() => updatePref(key, !prefs[key])}
                className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
                  prefs[key] ? "bg-[#6B4E9E]" : "bg-[#E8E4F0]"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    prefs[key] ? "translate-x-5" : "translate-x-0"
                  }`}
                />
                <span className="sr-only">{label}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Reset */}
        <div className="px-5 py-4 border-t border-[#E8E4F0]">
          <button
            onClick={resetAll}
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-[#524D63] border border-[#E8E4F0] rounded-lg hover:bg-[#F4F2F7] transition-colors"
          >
            <RotateCcw size={14} />
            Reset all settings
          </button>
        </div>
      </div>
    </>
  );
}
