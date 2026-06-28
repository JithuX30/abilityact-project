"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="bg-[#FBEAE3] py-16"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="newsletter-heading"
          className="text-[1.625rem] lg:text-[2.25rem] font-semibold text-[#1F1B2E]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Stay connected
        </h2>
        <p className="mt-3 text-[#524D63]">
          Get news, resources, and updates from our team — straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3"
          aria-label="Newsletter sign-up"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-[#E8E4F0] bg-white text-[#1F1B2E] placeholder-[#8B8699] text-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] focus:border-transparent"
          />
          <button
            type="submit"
            className="h-12 px-6 bg-[#E07856] text-white font-medium rounded-lg hover:bg-[#c8684a] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-[#8B8699]">
          We&apos;ll only use your email to send updates.{" "}
          <Link
            href="/privacy"
            className="underline hover:text-[#524D63] transition-colors"
          >
            Read our privacy policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
