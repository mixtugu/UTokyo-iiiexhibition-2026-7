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
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {works.map((work) => (
              <button
                aria-label={work.title[locale]}
                className="group flex w-[240px] flex-col items-center transition-transform duration-300 hover:scale-105 md:w-[280px]"
                key={work.id}
                onClick={() => setSelected(work)}
                type="button"
              >
                <div
                  className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-full bg-white/85 shadow-[4px_6px_20px_rgba(0,0,0,0.18)] md:h-[280px] md:w-[280px]"
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
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 pt-16 text-left shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:max-w-4xl md:p-10 md:pt-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-2xl leading-none text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setSelected(null)}
              type="button"
            >
              ×
            </button>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              {selected.image ? (
                <img
                  alt={selected.title[locale]}
                  className="h-auto w-full rounded-2xl object-cover md:w-1/2 md:shrink-0"
                  src={selected.image}
                />
              ) : null}
              <div className="md:flex-1">
                <h3 className="mb-4 font-puritan text-xl uppercase text-foreground md:text-3xl">
                  {selected.title[locale]}
                </h3>
                <p className="whitespace-pre-line font-zen-kaku text-base leading-relaxed text-foreground/75">
                  {selected.description[locale]}
                </p>
                {selected.memberIds && selected.memberIds.length > 0 ? (
                  <p className="mt-6 font-zen-kaku text-sm text-foreground/60">
                    {selected.memberIds
                      .map((id) => getMemberById(id)?.[locale])
                      .filter(Boolean)
                      .join(" / ")}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
