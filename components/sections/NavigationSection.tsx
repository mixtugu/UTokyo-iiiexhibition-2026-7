import Link from "next/link";
import { Playpen_Sans } from "next/font/google";
import { defaultLocale, type Locale, type dictionaries } from "@/lib/i18n";

type NavigationSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

const navigationItems = [
  { id: "concept", href: "#main" },
  { id: "about", href: "#about" },
  { id: "works", href: "#works" },
  { id: "members", href: "#members" },
  { id: "access", href: "#access" },
  { id: "archives", href: "#archives" },
] as const;

const playpenSans = Playpen_Sans({
  subsets: ["latin"],
});

export function NavigationSection({
  dictionary,
  locale,
}: NavigationSectionProps) {
  const localeLinkClass =
    "flex h-8 min-w-12 items-center justify-center px-3 text-sm text-foreground/65 transition hover:text-foreground";
  const activeLocaleLinkClass =
    "flex h-8 min-w-12 items-center justify-center rounded bg-foreground px-3 text-sm font-bold text-background";

  return (
    <>
      <header className="sticky top-0 z-10 border-y border-foreground/10 bg-[#F1E4EB]/90 px-2 py-2 backdrop-blur sm:px-4 md:px-8 md:py-4">
        <div className="mx-auto flex w-full flex-col gap-4 md:flex-row md:items-center">
          <nav
            className={`${playpenSans.className} grid w-full flex-1 grid-cols-6 gap-1 text-[0.68rem] sm:text-sm md:gap-2 md:text-xl`}
            aria-label="Sections"
          >
            {navigationItems.map((item) => (
              <Link
                className="flex min-h-8 items-center justify-center px-1 text-center text-foreground/75 underline-offset-4 hover:text-foreground hover:underline md:min-h-10 md:px-3"
                href={item.href}
                key={item.id}
              >
                {dictionary.nav[item.id]}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <nav
        className="fixed right-3 top-16 z-50 flex overflow-hidden rounded border border-foreground/15 bg-white/90 p-1 shadow-[0_4px_14px_rgba(0,0,0,0.12)] backdrop-blur sm:right-5 md:right-8 md:top-20"
        aria-label="Language"
      >
        <Link
          className={
            locale === defaultLocale ? activeLocaleLinkClass : localeLinkClass
          }
          href={`/${defaultLocale}`}
          aria-current={locale === defaultLocale ? "page" : undefined}
        >
          日本語
        </Link>
        <Link
          className={locale === "en" ? activeLocaleLinkClass : localeLinkClass}
          href="/en"
          aria-current={locale === "en" ? "page" : undefined}
        >
          English
        </Link>
      </nav>
    </>
  );
}
