"use client";

import { Puritan } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { defaultLocale, type Locale, type dictionaries } from "@/lib/i18n";

type NavigationSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

const navigationItems = [
  { id: "concept", sectionId: "main" },
  { id: "about", sectionId: "about" },
  { id: "works", sectionId: "works" },
  { id: "donation", sectionId: "goods" },
  { id: "members", sectionId: "members" },
  { id: "access", sectionId: "access" },
  { id: "archives", sectionId: "archives" },
] as const;

type SectionId = (typeof navigationItems)[number]["sectionId"];

const puritan = Puritan({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function NavigationSection({
  dictionary,
  locale,
}: NavigationSectionProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const localeLinkClass =
    "flex h-9 min-w-14 items-center justify-center px-3 text-base text-foreground/65 transition hover:text-foreground";
  const activeLocaleLinkClass =
    "flex h-9 min-w-14 items-center justify-center px-3 text-lg font-bold text-pink";

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.38;
      let currentSection: SectionId = navigationItems[0].sectionId;

      for (const item of navigationItems) {
        const section = document.getElementById(item.sectionId);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = item.sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    itemRefs.current[activeSection]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSection]);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-y border-foreground/10 bg-[#F1E4EB]/90 px-3 py-2 backdrop-blur sm:px-5 md:px-8 md:py-3">
        <div className="mx-auto flex w-full max-w-7xl items-center">
          {/* Desktop: horizontal section bar */}
          <nav
            className={`${puritan.className} hidden w-full items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex md:justify-center md:gap-3`}
            aria-label="Sections"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <a
                  className={[
                    "relative flex shrink-0 items-center justify-center px-3 py-2 text-center leading-none underline-offset-4 transition-[font-size,color,opacity,transform] duration-300 ease-out hover:underline md:px-5",
                    isActive
                      ? "text-pink md:text-[28px]"
                      : "text-foreground/45 hover:text-foreground/75 md:text-lg",
                  ].join(" ")}
                  href={`#${item.sectionId}`}
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[item.sectionId] = node;
                  }}
                  aria-current={isActive ? "location" : undefined}
                >
                  {dictionary.nav[item.id]}
                </a>
              );
            })}
          </nav>

          {/* Mobile: current section label + hamburger */}
          <span
            className={`${puritan.className} text-base text-pink md:hidden`}
            aria-hidden="true"
          >
            {dictionary.nav[
              navigationItems.find((item) => item.sectionId === activeSection)
                ?.id ?? "concept"
            ]}
          </span>
          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop: language toggle */}
      <nav
        className="fixed right-3 top-16 z-50 hidden overflow-hidden rounded border border-foreground/15 bg-white/90 p-1 shadow-[0_4px_14px_rgba(0,0,0,0.12)] backdrop-blur md:flex md:right-8 md:top-20"
        aria-label="Language"
      >
        <a
          className={
            locale === defaultLocale ? activeLocaleLinkClass : localeLinkClass
          }
          href={`/${defaultLocale}/`}
          aria-current={locale === defaultLocale ? "page" : undefined}
        >
          日本語
        </a>
        <a
          className={locale === "en" ? activeLocaleLinkClass : localeLinkClass}
          href="/en/"
          aria-current={locale === "en" ? "page" : undefined}
        >
          English
        </a>
      </nav>

      {/* Mobile: backdrop + right-side drawer (sidebar) */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        className={`${puritan.className} fixed inset-y-0 right-0 z-[70] flex w-72 max-w-[80vw] flex-col bg-[#F1E4EB] shadow-[-8px_0_24px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
        aria-label="Menu"
      >
        <div className="flex items-center justify-end px-3 py-2 sm:px-5">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-foreground"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-8 pt-2"
          aria-label="Sections"
        >
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                className={[
                  "py-2.5 text-xl leading-tight underline-offset-4 transition-colors hover:underline",
                  isActive
                    ? "text-pink"
                    : "text-foreground/55 hover:text-foreground/80",
                ].join(" ")}
                href={`#${item.sectionId}`}
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive ? "location" : undefined}
              >
                {dictionary.nav[item.id]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 border-t border-foreground/10 px-8 py-6">
          <a
            className={
              locale === defaultLocale
                ? "text-lg font-bold text-pink"
                : "text-base text-foreground/65"
            }
            href={`/${defaultLocale}/`}
            aria-current={locale === defaultLocale ? "page" : undefined}
          >
            日本語
          </a>
          <span className="text-foreground/30">/</span>
          <a
            className={
              locale === "en"
                ? "text-lg font-bold text-pink"
                : "text-base text-foreground/65"
            }
            href="/en/"
            aria-current={locale === "en" ? "page" : undefined}
          >
            English
          </a>
        </div>
      </aside>
    </>
  );
}
