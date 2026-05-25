import { type Locale, type dictionaries } from "@/lib/i18n";

type ConceptSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function ConceptSection({ dictionary }: ConceptSectionProps) {
  return (
    <section
      className="bg-[rgb(250,242,245)] px-4 py-16 md:px-8 md:py-20"
      id="concept"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <img
          alt={dictionary.sections.concept.title}
          className="h-auto w-full max-w-[320px] md:max-w-[520px]"
          height={75}
          src="/concept_title.svg"
          width={505}
        />
        <div className="relative mt-8 w-full max-w-5xl px-3 py-10 md:mt-12 md:px-6 md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/concept_background.png')] bg-contain bg-center bg-no-repeat opacity-90"
          />
          <p className="relative whitespace-pre-line text-base leading-8 text-foreground/75 sm:text-lg md:text-2xl md:leading-10">
            {dictionary.sections.concept.body}
          </p>
        </div>
      </div>
    </section>
  );
}
