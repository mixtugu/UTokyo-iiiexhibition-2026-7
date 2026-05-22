import { type Locale, type dictionaries } from "@/lib/i18n";

type ConceptSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function ConceptSection({ dictionary }: ConceptSectionProps) {
  return (
    <section className="px-6 py-20 md:px-8" id="concept">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[220px_1fr]">
        <h2 className="text-sm font-bold uppercase text-accent">
          {dictionary.sections.concept.title}
        </h2>
        <p className="max-w-3xl text-2xl leading-normal text-foreground md:text-4xl">
          {dictionary.sections.concept.body}
        </p>
      </div>
    </section>
  );
}
