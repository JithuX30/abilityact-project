"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function FeedbackWidget() {
  const [voted, setVoted] = useState(null); // "yes" | "no" | null

  return (
    <div
      className="bg-[#F7F3FC] border border-[#E8E4F0] rounded-2xl p-6 text-center"
      aria-label="Article feedback"
    >
      {voted ? (
        <p className="text-[#524D63] font-medium">
          Thanks for your feedback{" "}
          <span aria-hidden="true">{voted === "yes" ? "👍" : "🙏"}</span>
        </p>
      ) : (
        <>
          <p
            className="font-semibold text-[#1F1B2E] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Was this article helpful?
          </p>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setVoted("yes")}
              className="inline-flex items-center gap-2 h-10 px-5 border border-[#E8E4F0] rounded-lg text-sm font-medium text-[#524D63] bg-white hover:border-[#6B4E9E] hover:text-[#6B4E9E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
              aria-label="Yes, this article was helpful"
            >
              <ThumbsUp size={16} aria-hidden="true" />
              Yes, helpful
            </button>
            <button
              type="button"
              onClick={() => setVoted("no")}
              className="inline-flex items-center gap-2 h-10 px-5 border border-[#E8E4F0] rounded-lg text-sm font-medium text-[#524D63] bg-white hover:border-[#E07856] hover:text-[#E07856] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07856]"
              aria-label="No, this article was not helpful"
            >
              <ThumbsDown size={16} aria-hidden="true" />
              Not really
            </button>
          </div>
        </>
      )}
    </div>
  );
}
