"use client";

import { useEffect, useState } from "react";

import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getMemberById } from "@/data/members";
import { works, type Work } from "@/data/works";
import { type Locale, type dictionaries } from "@/lib/i18n";

type WorksSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

export function WorksSection({ dictionary, locale }: WorksSectionProps) {
  const [selected, setSelected] = useState<Work | null>(null);

  // モーダルを開いている間は背面のスクロールを止め、Esc で閉じられるようにする。
  useEffect(() => {
    if (!selected) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section
      className="bg-transparent bg-contain bg-center bg-no-repeat px-12 py-20 md:px-16"
      id="works"
    >
      <RevealOnScroll>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 text-center">
          <h2 className="font-puritan text-3xl uppercase text-foreground md:text-[50px]">
            {dictionary.sections.works.title}
          </h2>
          <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10">
            {works.map((work) => (
              <button
                aria-label={work.title[locale]}
                className="group flex w-[calc(50%-1rem)] cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-105 md:w-[calc(20%-2.25rem)]"
                key={work.id}
                onClick={() => setSelected(work)}
                type="button"
              >
                <div
                  className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-white/85 shadow-[4px_6px_20px_rgba(0,0,0,0.18)]"
                >
                  {work.image ? (
                    <img
                      alt={work.title[locale]}
                      className="h-full w-full object-cover"
                      src={work.image}
                    />
                  ) : null}
                </div>
                <span className="mt-4 block font-zen-kaku text-base text-foreground/80">
                  {work.title[locale]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {selected ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6 py-10"
          onClick={() => setSelected(null)}
          role="dialog"
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white p-6 pt-16 text-left shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:max-w-4xl md:p-10 md:pt-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 text-2xl leading-none text-foreground/70 backdrop-blur-sm transition-colors [transform:translateZ(0)] [will-change:transform] hover:text-foreground"
              onClick={() => setSelected(null)}
              type="button"
            >
              ×
            </button>
            <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto md:flex-row md:items-stretch md:gap-8 md:overflow-hidden">
              {selected.image ? (
                <img
                  alt={selected.title[locale]}
                  className="h-auto w-full rounded-2xl object-cover md:w-1/2 md:shrink-0 md:self-start"
                  src={selected.image}
                />
              ) : null}
              <div className="md:relative md:flex-1 md:min-h-0 md:self-stretch">
                <div className="scrollbar-thin md:absolute md:inset-x-0 md:inset-y-8 md:overflow-y-auto md:pr-2">
                <h3 className="mb-4 font-puritan text-xl uppercase text-foreground md:text-3xl">
                  {selected.title[locale]}
                </h3>
                <p className="whitespace-pre-line font-zen-kaku text-base leading-relaxed text-foreground/75">
                  {selected.description[locale]}
                </p>
                {(() => {
                  const credits = [
                    ...(selected.memberIds ?? [])
                      .map((id) => getMemberById(id))
                      .filter((member): member is NonNullable<typeof member> =>
                        Boolean(member),
                      )
                      .map((member) => ({
                        name: member[locale],
                        affiliation: member.affiliation?.[locale] ?? "",
                      })),
                    ...(selected.extraMembers ?? []).map((name) => ({
                      name,
                      affiliation: "",
                    })),
                  ];

                  return credits.length > 0 ? (
                    <ul className="mt-6 space-y-1 font-zen-kaku text-sm text-foreground/60">
                      {credits.map((credit, index) => (
                        <li key={`${credit.name}-${index}`}>
                          {credit.name}
                          {credit.affiliation ? (
                            <span className="text-xs text-foreground/50">
                              {"　"}
                              {credit.affiliation}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null;
                })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
