import { type Locale, type dictionaries } from "@/lib/i18n";

type MainPageSectionProps = {
  alternateLocale: Locale;
  dictionary: (typeof dictionaries)[Locale];
};

const boxShadow = "4px 5px 12px rgba(0,0,0,0.22)";

export function MainPageSection({
  alternateLocale,
  dictionary,
}: MainPageSectionProps) {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden" id="main">
      {/* 背景画像 */}
      <img
        src="/images/web-top view.png"
        alt="展示背景"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
        }}
      />

      {/* 展示名 - 右上 */}
      <div
        style={{
          position: "absolute", top: "16px", right: "16px",
          background: "rgba(220,210,190,0.92)", padding: "4px 10px",
          fontFamily: "var(--font-playpen-sans)", fontSize: "0.75rem",
          color: "#6a5a40", boxShadow: boxShadow,
          transform: "rotate(-1deg)", zIndex: 10,
        }}
      >
        iii exhibition 2026 Beginning
      </div>

      {/* たゆたう - 中央上部 */}
      <div
        style={{
          position: "absolute", top: "4%", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "min(280px, 70vw)",
        }}
      >
        <img
          src="/images/tayutau_collage.png"
          alt="たゆたう"
          style={{ width: "100%" }}
        />
      </div>

      {/* 下部コンテンツ */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-6 md:px-12 md:pb-14"
        style={{ zIndex: 10 }}
      >
        {/* 左下 - 展示タイトル（縦書き） */}
        <div
          style={{
            writingMode: "vertical-rl", fontFamily: "var(--font-shippori)",
            boxShadow: boxShadow, background: "rgba(255,255,255,0.90)",
            backdropFilter: "blur(4px)", border: "1px solid rgba(0,0,0,0.08)",
            padding: "10px 6px", transform: "rotate(-0.8deg)",
          }}
        >
          <h1 style={{
            fontSize: "clamp(1.8rem, 5vw, 5rem)", fontWeight: 700,
            letterSpacing: "0.15em", lineHeight: 1.1, margin: 0,
          }}>
            東京大学制作展
          </h1>
        </div>

        {/* 右下 - 日時・会場情報 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
          {/* 日時 */}
          <div
            style={{
              background: "rgba(255,255,255,0.90)", backdropFilter: "blur(4px)",
              padding: "8px 12px", boxShadow: boxShadow,
              border: "1px solid rgba(0,0,0,0.08)",
              transform: "rotate(0.5deg)", fontFamily: "var(--font-shippori)",
              textAlign: "right",
            }}
          >
            <p style={{ color: "var(--color-pink)", fontWeight: 700, fontSize: "clamp(0.85rem, 2.5vw, 1.5rem)", margin: 0 }}>
              2026.07.10 (金) - 07.13 (月)
            </p>
            <p style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.5rem)", fontWeight: 600, margin: "2px 0 0 0" }}>
              11:00 - 19:00
            </p>
          </div>

          {/* 会場 */}
          <div
            style={{
              background: "rgba(255,255,255,0.90)", backdropFilter: "blur(4px)",
              padding: "8px 12px", boxShadow: boxShadow,
              border: "1px solid rgba(0,0,0,0.08)",
              transform: "rotate(-0.5deg)", fontFamily: "var(--font-shippori)",
              textAlign: "right",
            }}
          >
            <p style={{ fontSize: "clamp(0.75rem, 2vw, 1.1rem)", color: "rgba(0,0,0,0.70)", margin: 0, lineHeight: 1.8 }}>
              @東京大学本郷キャンパス情報学環本館<br />
              オープンスタジオ, 地下1階
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
