import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";

type WorksSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

const works = [
  { id: 1, rotate: "-rotate-2" },
  { id: 2, rotate: "rotate-1" },
  { id: 3, rotate: "-rotate-1" },
];

export function WorksSection({ dictionary }: WorksSectionProps) {
  return (
    <section
      className="bg-transparent bg-contain bg-center bg-no-repeat px-12 py-20 md:px-16"
      id="works"
    >
      <RevealOnScroll>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 text-center">
          <h2 className="font-puritan text-5xl uppercase text-foreground md:text-[50px]">
            {dictionary.sections.works.title}
          </h2>
          <p className="font-zen-kaku max-w-4xl text-lg leading-normal text-foreground/75">
            {dictionary.sections.works.body}
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {works.map((work) => (
              <button
                className={`group relative ${work.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
                key={work.id}
                type="button"
              >
                <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-full bg-white/85 px-8 shadow-[4px_6px_20px_rgba(0,0,0,0.18)] ring-[6px] ring-white md:h-[280px] md:w-[280px]">
                  <span className="font-puritan text-3xl uppercase tracking-[0.08em] text-foreground/70 md:text-4xl">
                    {dictionary.sections.works.comingSoon}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
