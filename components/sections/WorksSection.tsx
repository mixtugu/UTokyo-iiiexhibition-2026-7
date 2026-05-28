import Image from "next/image";
import { type Locale, type dictionaries } from "@/lib/i18n";

type WorksSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

const works = [
  { id: 1, src: "/works_dummy_1.svg", rotate: "-rotate-2" },
  { id: 2, src: "/works_dummy_2.svg", rotate: "rotate-1" },
  { id: 3, src: "/works_dummy_3.svg", rotate: "-rotate-1" },
];

export function WorksSection({ dictionary }: WorksSectionProps) {
  return (
    <section
      className="bg-[rgb(250,242,245)] bg-[url('/member_background.png')] bg-contain bg-center bg-no-repeat px-12 py-20 md:px-16"
      id="works"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 text-center">
        <h2 className="font-playpen-sans text-5xl uppercase text-foreground md:text-[50px]">
          {dictionary.sections.works.title}
        </h2>
        <p className="font-zen-kaku max-w-4xl text-lg leading-normal text-foreground/75 md:text-2xl">
          {dictionary.sections.works.body}
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {works.map((work) => (
            <button
              className={`group relative ${work.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-105`}
              key={work.id}
              type="button"
            >
              <div className="overflow-hidden rounded-full shadow-[4px_6px_20px_rgba(0,0,0,0.18)] ring-[6px] ring-white">
                <Image
                  alt={`Work ${work.id}`}
                  className="block h-[240px] w-[240px] object-cover md:h-[280px] md:w-[280px]"
                  height={280}
                  src={work.src}
                  width={280}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
