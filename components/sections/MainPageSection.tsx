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
      <div className="absolute top-6 right-8 z-10 -rotate-1 bg-[rgba(220,210,190,0.92)] px-4 py-[5px] font-playpen-sans text-[0.9rem] text-[#6a5a40] shadow-[4px_5px_12px_rgba(0,0,0,0.22)]">
        iii exhibition 2026 Beginning
      </div>

      {/* たゆたう - 中央上部 */}
      <div className="absolute top-[4%] inset-x-0 mx-auto z-10 w-[30vw] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.022)]">
        <img className="w-full" src="/main/tayutau.webp" alt="たゆたう" />
      </div>

      {/* 下部コンテンツ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 pb-10 md:px-12 md:pb-14">
        {/* 左下 - 展示タイトル（縦書き） */}
        <div className="[writing-mode:vertical-rl] rotate-[-0.8deg] border border-black/8 bg-white/90 px-2.5 py-4 font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs">
          <h1 className="m-0 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-[0.15em]">
            東京大学制作展
          </h1>
        </div>

        {/* 右下 - 日時・会場情報 */}
        <div className="flex flex-col items-end gap-2">
          {/* 日時 */}
          <div className="rotate-[0.5deg] border border-black/8 bg-white/90 px-5 py-3.5 text-right font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs">
            <p className="m-0 text-2xl font-bold text-pink">
              2026.07.10 (金) - 07.13 (月)
            </p>
            <p className="mt-1 mb-0 text-2xl font-semibold">11:00 - 19:00</p>
          </div>

          {/* 会場 */}
          <div className="rotate-[-0.5deg] border border-black/8 bg-white/90 px-5 py-3.5 text-right font-shippori shadow-[4px_5px_12px_rgba(0,0,0,0.22)] backdrop-blur-xs">
            <p className="m-0 text-[1.1rem] leading-[1.8] text-black/70">
              @東京大学本郷キャンパス情報学環本館
              <br />
              オープンスタジオ, 地下1階
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
