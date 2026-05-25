import { type Locale, type dictionaries } from "@/lib/i18n";

type AboutSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section className="bg-[rgb(250,242,245)] px-6 py-20 md:px-8" id="about">
      <div className="mx-auto flex max-w-6xl flex-col items-center border-t border-foreground/15 pt-10 text-center">
        <h2 className="text-[50px] font-bold uppercase text-foreground">
          {dictionary.sections.about.title}
        </h2>
        <p className="mt-8 max-w-3xl whitespace-pre-line text-2xl leading-normal text-foreground/75">
          {dictionary.sections.about.body}
        </p>
        <p className="mt-16 max-w-2xl whitespace-pre-line text-2xl leading-normal text-foreground/75">
          {dictionary.sections.about.registration}
        </p>
        <a
          className="mt-10 inline-block rounded-[18px] bg-pink px-10 py-4 text-[40px] font-bold text-white leading-none shadow-lg"
          href="#"
        >
          {dictionary.sections.about.registrationButton}
        </a>
      </div>
    </section>
  );
}
