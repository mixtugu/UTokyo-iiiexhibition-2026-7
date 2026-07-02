import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";

type GoodsSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

const goodsImages: Record<string, string> = {
  "CLEAR FILE": "/goods/clearfile.png",
  STICKER: "/goods/sticker.png",
  "ACRYLIC KEYCHAIN": "/goods/keychain.png",
  "T-SHIRT": "/goods/shirt.png",
};

export function GoodsSection({ dictionary }: GoodsSectionProps) {
  const copy = dictionary.sections.goods;

  return (
    <section
      className="bg-transparent px-6 py-20 md:px-8"
      id="goods"
    >
      <RevealOnScroll>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
          <div>
            <h2 className="font-puritan text-5xl uppercase text-foreground md:text-[50px]">
              {copy.title}
            </h2>
          </div>

          <div className="flex max-w-3xl flex-col gap-4 font-zen-kaku text-base leading-relaxed text-foreground/75 md:text-lg">
            <p>{copy.description1}</p>
            <p className="text-xl text-pink md:text-2xl">
              {copy.lead}
            </p>
            <p>{copy.description2}</p>
            <p>
              {copy.description3.before}
              <a
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
                href="https://utf.u-tokyo.ac.jp/project/pjt187"
                rel="noopener noreferrer"
                target="_blank"
              >
                {copy.description3.linkLabel}
              </a>
              {copy.description3.after}
            </p>
            <p>{copy.description4}</p>
            <p>{copy.description5}</p>
          </div>

          <div className="w-full">
            <div className="relative mb-8 border-t-2 border-dotted border-pink/45">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-background px-6 font-zen-kaku text-2xl text-pink">
                {copy.itemsLabel}
              </span>
            </div>

            <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-8">
              {copy.items.map((item, index) => (
                <article
                  className="group flex min-w-0 flex-col items-center transition-transform duration-300 hover:scale-105"
                  key={item.name}
                >
                  <div
                    className={[
                      "flex aspect-square w-full max-w-[180px] items-center justify-center overflow-hidden rounded-full font-puritan text-5xl text-white shadow-[4px_6px_20px_rgba(0,0,0,0.18)] sm:max-w-[220px] md:max-w-[260px] md:text-6xl lg:max-w-[280px] lg:text-7xl",
                      index === 0 ? "bg-[#DA8387]/85" : "",
                      index === 1 ? "bg-[#7AA37A]/85" : "",
                      index === 2 ? "bg-[#6F8FB8]/85" : "",
                      index === 3 ? "bg-[#D7B56D]/85" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {goodsImages[item.name] ? (
                      <img
                        alt=""
                        className="h-full w-full object-cover"
                        src={goodsImages[item.name]}
                      />
                    ) : (
                      item.mark
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-puritan text-xl uppercase text-pink md:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 font-zen-kaku text-sm leading-relaxed text-foreground/65">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t-2 border-dotted border-pink/45" />
          </div>

          <p className="font-zen-kaku text-base leading-relaxed text-foreground/80 md:text-lg">
            {copy.note}
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
