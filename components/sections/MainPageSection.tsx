import { type Locale, type dictionaries } from "@/lib/i18n";

type MainPageSectionProps = {
  alternateLocale: Locale;
  dictionary: (typeof dictionaries)[Locale];
};

export function MainPageSection({
  alternateLocale,
  dictionary,
}: MainPageSectionProps) {
  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden"
      id="main"
    >
      {/* 背景画像 */}
      <img
        src="/main/hero.webp"
        alt="展示背景"
        className="absolute inset-0 size-full object-cover object-center"
      />

      {/* 展示名 - 右上 */}
      <div className="absolute top-4 right-4 z-10 -rotate-1 bg-[rgba(220,210,190,0.92)] px-2.5 py-1 font-playpen-sans text-xs text-[#6a5a40] shadow-[4px_5px_12px_rgba(0,0,0,0.22)] md:top-6 md:right-8 md:px-4 md:py-[5px] md:text-[0.9rem]">
        iii exhibition 2026 Beginning
      </div>

      {/* たゆたう - 中央上部 */}
      <div className="animate-tayutau absolute top-[4%] inset-x-0 z-10 mx-auto w-[min(280px,70vw)] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.022)] md:w-[30vw]">
        <img className="w-full" src="/main/tayutau.webp" alt="たゆたう" />
      </div>

      {/* 下部コンテンツ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-4 pb-6 md:px-12 md:pb-14">
        {/* 左下 - 展示タイトル（縦書き） */}
        <div className="[writing-mode:vertical-rl] rotate-[-0.8deg] border border-black/8 bg-white/90 px-1.5 py-2.5 font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs md:px-2.5 md:py-4">
          <h1 className="m-0 origin-center scale-x-[1.15] text-[clamp(1.8rem,5vw,5rem)] font-medium leading-[1.1] tracking-[0.15em]">
            東京大学制作展
          </h1>
        </div>

        {/* 右下 - 日時・会場情報 */}
        <div className="flex flex-col items-end gap-1.5">
          {/* 日時 */}
          <div className="rotate-[0.5deg] border border-black/8 bg-white/90 px-3 py-2 text-right font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs md:px-5 md:py-3.5">
            <p className="m-0 text-[clamp(0.85rem,2.5vw,1.5rem)] font-bold text-pink">
              2026.07.10 (金) - 07.13 (月)
            </p>
            <p className="mt-0.5 mb-0 text-[clamp(0.85rem,2.5vw,1.5rem)] font-semibold md:mt-1">
              11:00 - 19:00
            </p>
          </div>

          {/* 会場 */}
          <div className="rotate-[-0.5deg] border border-black/8 bg-white/90 px-3 py-2 text-right font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs md:px-5 md:py-3.5">
            <p
              className="m-0 text-[clamp(0.75rem,2vw,1.1rem)] leading-[1.8] text-foreground"
              style={{ opacity: 0.85 }}
            >
              @東京大学本郷キャンパス情報学環本館
              <br />
              オープンスタジオ, 地下1階
            </p>
          </div>

          {/* 入場登録ボタン */}
          <a
            href="#about"
            className="block whitespace-nowrap rotate-[-0.5deg] rounded-full bg-[linear-gradient(135deg,#e89aae,#DA8387)] px-7 py-2.5 text-center font-zen-kaku text-[clamp(0.85rem,2vw,1.2rem)] font-bold text-white opacity-90 shadow-[0_4px_16px_rgba(218,131,135,0.35)]"
          >
            入場登録
          </a>

        </div>
      </div>
    </section>
  );
}
