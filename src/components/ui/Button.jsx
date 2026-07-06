"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variantClasses = {
  primary:
    "bg-[#6B4E9E] text-white hover:bg-[#8B6BC4] border border-transparent",
  secondary:
    "bg-transparent text-[#6B4E9E] border border-[#6B4E9E] hover:bg-[#EDE6F7]",
  tertiary:
    "bg-transparent text-[#6B4E9E] border-none underline-offset-2 hover:underline p-0 h-auto inline-flex",
  cta: "bg-[#C0532F] text-white hover:bg-[#A8421F] border border-transparent",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}) {
  const isTertiary = variant === "tertiary";

  const classes = [
    isTertiary ? "" : "h-12 px-6 rounded-lg font-medium",
    "inline-flex items-center gap-2 cursor-pointer",
    "transition-all duration-200 ease-in-out",
    "motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[#6B4E9E] focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {isTertiary && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}
