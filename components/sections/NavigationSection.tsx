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

  return (
    <>
      <header className="sticky top-0 z-50 border-y border-foreground/10 bg-[#F1E4EB]/90 px-3 py-2 backdrop-blur sm:px-5 md:px-8 md:py-3">
        <div className="mx-auto w-full max-w-7xl">
          <nav
            className={`${puritan.className} flex w-full items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center md:gap-3`}
            aria-label="Sections"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <a
                  className={[
                    "relative flex shrink-0 items-center justify-center px-3 py-2 text-center leading-none underline-offset-4 transition-[font-size,color,opacity,transform] duration-300 ease-out hover:underline sm:px-4 md:px-5",
                    isActive
                      ? "text-xl text-pink sm:text-2xl md:text-[28px]"
                      : "text-sm text-foreground/45 hover:text-foreground/75 sm:text-base md:text-lg",
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
        </div>
      </header>
      <nav
        className="fixed right-3 top-16 z-50 flex overflow-hidden rounded border border-foreground/15 bg-white/90 p-1 shadow-[0_4px_14px_rgba(0,0,0,0.12)] backdrop-blur sm:right-5 md:right-8 md:top-20"
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
    </>
  );
}
