import Link from "next/link";
import { defaultLocale, type Locale, type dictionaries } from "@/lib/i18n";

type NavigationSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

const navigationItems = [
  { id: "concept", href: "#concept" },
  { id: "about", href: "#about" },
  { id: "works", href: "#works" },
  { id: "members", href: "#members" },
  { id: "access", href: "#access" },
  { id: "archives", href: "#archives" },
] as const;

export function NavigationSection({
  dictionary,
  locale,
}: NavigationSectionProps) {
  const localeLinkClass =
    "text-sm underline decoration-foreground/35 underline-offset-4";
  const activeLocaleLinkClass = "text-sm font-bold text-accent no-underline";

  return (
    <header className="sticky top-0 z-10 border-y border-foreground/10 bg-background/90 px-6 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link className="text-sm font-bold text-foreground" href={`/${locale}`}>
          Beginning
        </Link>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          aria-label="Sections"
        >
          {navigationItems.map((item) => (
            <Link
              className="text-foreground/75 underline-offset-4 hover:text-foreground hover:underline"
              href={item.href}
              key={item.id}
            >
              {dictionary.nav[item.id]}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-4" aria-label="Language">
          <Link
            className={
              locale === defaultLocale ? activeLocaleLinkClass : localeLinkClass
            }
            href={`/${defaultLocale}`}
            aria-current={locale === defaultLocale}
          >
            日本語
          </Link>
          <Link
            className={locale === "en" ? activeLocaleLinkClass : localeLinkClass}
            href="/en"
            aria-current={locale === "en"}
          >
            English
          </Link>
        </nav>
      </div>
    </header>
  );
}
