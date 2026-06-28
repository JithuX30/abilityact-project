"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { TOPIC_DATA } from "@/lib/advice-data";

const ADVICE_CHILDREN = Object.values(TOPIC_DATA).map((topic) => ({
  label: topic.name,
  href: `/advice-and-support/${topic.slug}`,
}));

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    href: "/about-us/our-story",
    children: [
      { label: "Our story", href: "/about-us/our-story" },
      { label: "Our team", href: "/about-us/team" },
      { label: "Our partners", href: "/about-us/partners" },
      { label: "Awards and recognition", href: "/about-us/awards" },
      { label: "Our impact", href: "/about-us/impact" },
    ],
  },
  {
    label: "Advice and support",
    href: "/advice-and-support",
    children: ADVICE_CHILDREN,
  },
  {
    label: "For employers",
    href: "/for-employers",
    children: [
      { label: "For employers", href: "/for-employers" },
      { label: "Our services", href: "/for-employers/services" },
      { label: "Case studies", href: "/for-employers/case-studies" },
      { label: "Work with us", href: "/for-employers/work-with-us" },
    ],
  },
  {
    label: "Get involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer with us", href: "/get-involved" },
      { label: "Donate", href: "/get-involved" },
      { label: "Partner with us", href: "/get-involved" },
    ],
  },
  { label: "News and stories", href: "/news" },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl border border-[#E8E4F0] shadow-lg py-1 z-50 transition-all duration-150 ${
        isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
      }`}
      role="menu"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          role="menuitem"
          className="block px-4 py-2.5 text-sm text-[#1F1B2E] hover:bg-[#F7F3FC] hover:text-[#6B4E9E] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <header
        ref={headerRef}
        className="sticky top-0 z-40 bg-white border-b border-[#E8E4F0] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 text-xl font-semibold text-[#6B4E9E]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AbilityAction
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const hasChildren = item.children?.length > 0;
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label} className="relative">
                    {hasChildren ? (
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "text-[#6B4E9E] font-medium bg-[#F7F3FC]"
                            : "text-[#524D63] hover:text-[#6B4E9E] hover:bg-[#F7F3FC]"
                        }`}
                        {...(isActive ? { "aria-current": "page" } : {})}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "text-[#6B4E9E] font-medium bg-[#F7F3FC]"
                            : "text-[#524D63] hover:text-[#6B4E9E] hover:bg-[#F7F3FC]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                    {hasChildren && <DropdownMenu items={item.children} isOpen={isOpen} />}
                  </div>
                );
              })}
            </nav>

            {/* Utility bar */}
            <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">
              <button
                aria-label="Search"
                className="p-2 text-[#524D63] hover:text-[#6B4E9E] hover:bg-[#F7F3FC] rounded-lg transition-colors"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => document.dispatchEvent(new CustomEvent("open-accessibility-panel"))}
                className="px-3 py-1.5 text-sm text-[#524D63] hover:text-[#6B4E9E] border border-[#E8E4F0] rounded-lg hover:bg-[#F7F3FC] transition-colors"
              >
                Accessibility
              </button>
              <Link
                href="/contact"
                className="text-sm text-[#524D63] hover:text-[#6B4E9E] transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/get-support"
                className="h-10 px-5 bg-[#E07856] text-white text-sm font-medium rounded-lg hover:bg-[#c8684a] transition-all hover:-translate-y-0.5 inline-flex items-center"
              >
                Get support
              </Link>
            </div>

            {/* Mobile: Get support + hamburger */}
            <div className="flex lg:hidden items-center gap-3 ml-auto">
              <Link
                href="/get-support"
                className="h-9 px-4 bg-[#E07856] text-white text-sm font-medium rounded-lg hover:bg-[#c8684a] transition-colors inline-flex items-center"
              >
                Get support
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="p-2 text-[#524D63] hover:text-[#6B4E9E] rounded-lg transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-50 overflow-y-auto">
            <nav className="px-4 py-6" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.children?.length > 0;
                const isExpanded = mobileExpanded === item.label;
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div key={item.label} className="border-b border-[#F4F2F7] last:border-0">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          aria-expanded={isExpanded}
                          className={`w-full flex items-center justify-between py-4 text-base font-medium ${
                            isActive ? "text-[#6B4E9E]" : "text-[#1F1B2E]"
                          }`}
                        >
                          {item.label}
                          <ChevronRight
                            size={18}
                            className={`text-[#8B8699] transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="pb-2 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2.5 text-sm text-[#524D63] hover:text-[#6B4E9E]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block py-4 text-base font-medium ${
                          isActive ? "text-[#6B4E9E]" : "text-[#1F1B2E]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => document.dispatchEvent(new CustomEvent("open-accessibility-panel"))}
                  className="w-full py-3 text-sm text-[#524D63] border border-[#E8E4F0] rounded-lg"
                >
                  Accessibility settings
                </button>
                <Link
                  href="/contact"
                  className="block text-center py-3 text-sm text-[#524D63] border border-[#E8E4F0] rounded-lg"
                >
                  Contact us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
