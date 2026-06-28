"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: 250, suffix: "+", label: "individuals empowered", srText: "More than 250" },
  { value: 98,  suffix: "%", label: "reported increased confidence", srText: "98%" },
  { value: 15,  suffix: "+", label: "employers partnered", srText: "More than 15" },
  { value: 500, suffix: "+", label: "people reached through outreach", srText: "More than 500" },
];

function CountUp({ value, suffix, label, srText }) {
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
    if (!triggered) return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");

    if (prefersReduced) { setCount(value); return; }

    const duration = 1800;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    let raf;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(easeOut(progress) * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, value]);

  return (
    <div ref={ref} className="text-center">
      <p
        aria-hidden="true"
        className="text-[2.75rem] lg:text-[3.5rem] font-semibold text-[#6B4E9E] leading-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {count}{suffix}
      </p>
      <span className="sr-only">{srText}</span>
      <p className="mt-2 text-[#524D63] text-base">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
      {STATS.map((stat, i) => (
        <CountUp key={i} {...stat} />
      ))}
    </div>
  );
}
