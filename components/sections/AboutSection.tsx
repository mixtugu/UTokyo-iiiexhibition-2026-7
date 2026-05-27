import { Playpen_Sans } from "next/font/google";
import { type Locale, type dictionaries } from "@/lib/i18n";

const playpenSans = Playpen_Sans({ subsets: ["latin"] });

type AboutSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section className="bg-[rgb(250,242,245)] px-12 py-20 md:px-16" id="about">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-24 text-center">
        <h2 className={`${playpenSans.className} text-5xl uppercase text-foreground md:text-[50px]`}>
          {dictionary.sections.about.title}
        </h2>
        <p className="font-zen-kaku max-w-4xl whitespace-pre-line text-lg leading-normal text-foreground/75 md:text-2xl">
          {dictionary.sections.about.body}
        </p>
        <p className="font-zen-kaku mt-8 max-w-4xl whitespace-pre-line text-lg leading-normal text-foreground/75 md:text-2xl">
          {dictionary.sections.about.registration}
        </p>
        <a
          className="font-zen-kaku inline-block rounded-[18px] bg-pink px-14 py-6 text-2xl font-bold text-white leading-none shadow-[0_6px_16px_rgba(0,0,0,0.2)] md:text-[40px]"
          href="#"
        >
          {dictionary.sections.about.registrationButton}
        </a>
      </div>
    </section>
  );
}
