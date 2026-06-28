"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Advice and support", href: "/advice-and-support" },
  { label: "For employers", href: "/for-employers" },
  { label: "Get involved", href: "/get-involved" },
  { label: "News", href: "/news" },
  { label: "Jobs", href: "/jobs" },
];

const SUPPORT_LINKS = [
  { label: "Contact us", href: "/contact" },
  { label: "Ask Arasi", href: "/ask-arasi" },
  { label: "Accessibility statement", href: "/accessibility" },
  { label: "Emergency contacts", href: "/emergency" },
];

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookie policy", href: "/cookies" },
  { label: "Safeguarding policy", href: "/safeguarding" },
  { label: "Accessibility statement", href: "/accessibility" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      {/* Top contact strip */}
      <div className="bg-[#FBEAE3] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-[#1F1B2E] font-semibold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
            Need to talk? We&apos;re here to help.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="tel:07933212547"
              className="flex items-center gap-2 text-[#E07856] font-medium hover:underline"
            >
              <Phone size={16} />
              07933 212547
            </a>
            <a
              href="mailto:info@abilityact.com"
              className="flex items-center gap-2 text-[#E07856] font-medium hover:underline"
            >
              <Mail size={16} />
              info@abilityact.com
            </a>
            <span className="text-sm text-[#524D63] self-center">Mon–Fri 9am–5pm</span>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="bg-[#1F1B2E] text-[#8B8699] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Org description + socials */}
          <div>
            <p className="text-white font-semibold text-lg mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              AbilityAction CIC
            </p>
            <p className="text-sm leading-relaxed mb-5">
              We are a UK community interest company providing disability support, employment guidance, and independent living advice across the country.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#524D63] text-[#8B8699] hover:text-white hover:border-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick links</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</p>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <p className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Stay in touch</p>
            <p className="text-sm mb-4">Get news, resources, and updates from our team.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg bg-[#2E2944] border border-[#524D63] text-white placeholder-[#8B8699] text-sm focus:outline-none focus:border-[#6B4E9E]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#6B4E9E] text-white text-sm font-medium rounded-lg hover:bg-[#8B6BC4] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#17142A] text-[#8B8699] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>
            AbilityAction CIC · Reg. No. 12345678 · Registered office: 123 Example Street, London, EC1A 1BB
          </p>
          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
            <span>© {new Date().getFullYear()} AbilityAction CIC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
