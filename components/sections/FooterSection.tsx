import { type Locale, type dictionaries } from "@/lib/i18n";

type FooterSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function FooterSection({ dictionary }: FooterSectionProps) {
  return (
    <footer className="px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-foreground/15 pt-8 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
        <p>{dictionary.sections.footer.title}</p>
        <p>© 2026 UTokyo iii Exhibition</p>
      </div>
    </footer>
  );
}
