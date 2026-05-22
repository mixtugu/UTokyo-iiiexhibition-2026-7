import { type Locale, type dictionaries } from "@/lib/i18n";

type AboutSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section className="px-6 py-20 md:px-8" id="about">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[220px_1fr]">
        <h2 className="text-sm font-bold uppercase text-accent">
          {dictionary.sections.about.title}
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-foreground/80">
          {dictionary.sections.about.body}
        </p>
      </div>
    </section>
  );
}
