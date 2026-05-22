import Link from "next/link";
import { type Locale, type dictionaries } from "@/lib/i18n";

type MainPageSectionProps = {
  alternateLocale: Locale;
  dictionary: (typeof dictionaries)[Locale];
};

export function MainPageSection({
  alternateLocale,
  dictionary,
}: MainPageSectionProps) {
  return (
    <section
      className="flex min-h-svh flex-col justify-center px-6 py-20 md:px-8"
      id="main"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-sm font-bold text-accent sm:text-base">
          {dictionary.eyebrow}
        </p>
        <h1 className="m-0 text-[clamp(4rem,14vw,10rem)] leading-[0.9]">
          {dictionary.title}
        </h1>
        <p className="mt-7 max-w-[680px] text-[clamp(1.125rem,2.4vw,1.75rem)] leading-normal text-muted">
          {dictionary.description}
        </p>
        <p className="mt-4 max-w-[680px] text-base leading-7 text-foreground/75 md:text-lg">
          {dictionary.sections.main.lead}
        </p>
        <Link
          className="mt-8 inline-block text-[0.95rem] underline decoration-foreground/35 underline-offset-4"
          href={`/${alternateLocale}`}
        >
          {dictionary.switchLanguage}
        </Link>
      </div>
    </section>
  );
}
