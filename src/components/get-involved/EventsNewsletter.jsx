"use client";

import { useState } from "react";

export default function EventsNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-8 flex flex-col sm:flex-row gap-3"
      aria-label="Events newsletter sign-up"
    >
      <label htmlFor="events-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="events-newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-lg border border-[#B8DFCB] bg-white text-[#1F1B2E] placeholder-[#8B8699] text-sm focus:outline-none focus:ring-2 focus:ring-[#2A7A4B] focus:border-transparent"
      />
      <button
        type="submit"
        className="h-12 px-6 bg-[#2A7A4B] text-white font-medium rounded-lg hover:bg-[#226040] transition-all motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7A4B] focus-visible:ring-offset-2 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
