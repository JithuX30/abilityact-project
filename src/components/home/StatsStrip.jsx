"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: 250, suffix: "+", label: "individuals empowered", srText: "250+" },
  { value: 98, suffix: "%", label: "reported increased confidence", srText: "98%" },
  { value: null, display: "1 in 5", label: "people in the UK are disabled", srText: "1 in 5" },
];

function AnimatedCounter({ value, suffix, display, srText, label }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered || value === null) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");

    if (prefersReduced) {
      setCount(value);
      return;
    }

    const duration = 1800;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    let raf;
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, value]);

  const visible = value !== null ? `${count}${suffix}` : display;

  return (
    <div ref={ref} className="text-center px-6">
      {/* The animated visual — hidden from screen readers */}
      <p
        aria-hidden="true"
        className="text-[3rem] lg:text-[3.5rem] font-semibold text-white leading-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {visible}
      </p>
      {/* The real final value always present in DOM for screen readers */}
      <span className="sr-only">{srText}</span>
      <p className="mt-2 text-[#EDE6F7] text-base">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section
      className="bg-[#6B4E9E] py-16"
      aria-label="Our impact in numbers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={
                /* On 2-col mobile layout the third item (odd one out) spans full width */
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              }
            >
              <AnimatedCounter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
