import { type Locale, type dictionaries } from "@/lib/i18n";

type WorksSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function WorksSection({ dictionary }: WorksSectionProps) {
  return (
    <section className="px-6 py-20 md:px-8" id="works">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[220px_1fr]">
        <h2 className="text-sm font-bold uppercase text-accent">
          {dictionary.sections.works.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              className="min-h-40 border border-foreground/15 p-5"
              key={item}
            >
              <p className="text-sm font-bold text-foreground/40">
                Work {item}
              </p>
              <p className="mt-8 text-base leading-7 text-foreground/70">
                {dictionary.sections.works.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
