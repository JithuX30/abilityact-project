"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  Link as LinkIcon,
  Printer,
} from "lucide-react";

export default function ShareBar({ title }) {
  const encoded = encodeURIComponent(title);

  const shareLinks = [
    {
      icon: Facebook,
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      icon: Twitter,
      label: "Share on X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encoded}`,
    },
    {
      icon: Linkedin,
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      icon: MessageCircle,
      label: "Share via WhatsApp",
      href: `https://wa.me/?text=${encoded}`,
    },
    {
      icon: Mail,
      label: "Share via email",
      href: `mailto:?subject=${encoded}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* silently ignore if clipboard API unavailable */
    }
  };

  return (
    <div
      className="flex flex-wrap items-center gap-2"
      aria-label="Share this article"
      role="group"
    >
      <span className="text-xs font-semibold text-[#8B8699] uppercase tracking-wider mr-1">
        Share
      </span>

      {shareLinks.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E8E4F0] text-[#524D63] hover:border-[#6B4E9E] hover:text-[#6B4E9E] hover:bg-[#F7F3FC] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
        >
          <Icon size={16} aria-hidden="true" />
        </a>
      ))}

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to this article"
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E8E4F0] text-[#524D63] hover:border-[#6B4E9E] hover:text-[#6B4E9E] hover:bg-[#F7F3FC] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
      >
        <LinkIcon size={16} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => window.print()}
        aria-label="Print this page"
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E8E4F0] text-[#524D63] hover:border-[#6B4E9E] hover:text-[#6B4E9E] hover:bg-[#F7F3FC] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B4E9E]"
      >
        <Printer size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
