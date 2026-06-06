import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";


type AboutSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section
      className="bg-transparent bg-contain bg-center bg-no-repeat px-12 py-20 md:px-16"
      id="about"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-24 text-center">
        <h2 className="font-puritan text-5xl uppercase text-foreground md:text-[50px]">
          {dictionary.sections.about.title}
        </h2>
        <p className="font-zen-kaku max-w-4xl whitespace-pre-line text-lg leading-normal text-foreground/75">
          {dictionary.sections.about.body}
        </p>
        <p className="font-zen-kaku mt-8 max-w-4xl whitespace-pre-line text-lg leading-normal text-foreground/75">
          {dictionary.sections.about.registration}
        </p>
        <a
          className="font-zen-kaku inline-block rounded-[28px] bg-gradient-to-br from-[#e89aae] to-[#DA8387] px-14 py-6 text-2xl font-bold text-white leading-none shadow-[0_8px_24px_rgba(218,131,135,0.35)] transition-transform duration-300 hover:scale-105 md:text-[40px]"
          href="#"
        >
          {dictionary.sections.about.registrationButton}
        </a>
      </div>
    </section>
  );
}
