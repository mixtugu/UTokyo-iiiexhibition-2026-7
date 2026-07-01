import type { Metadata } from "next";
import "./globals.css";

const bgAnimations = `
  @keyframes bg-breathing {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }
  @keyframes bg-float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-15px); }
  }
  @keyframes bg-drift {
    0%, 100% { transform: translateX(0px); }
    50%       { transform: translateX(-20px); }
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://iiiexhibition.com"),
  title: "東京大学 制作展 「たゆたう」 | UTokyo iii Exhibition 2026 Beginning",
  description: "東京大学 制作展 「たゆたう」 2026.07.10(金) - 07.13(月) 11:00 - 19:00 （※最終日のみ17:00まで） @東京大学本郷キャンパス 情報学環本館 地下1階 情報学環オープンスタジオ",

  openGraph: {
    title: "東京大学 制作展 「たゆたう」 | UTokyo iii Exhibition 2026 Beginning",
    description: "2026.07.10(金) - 07.13(月) 11:00 - 19:00 （※最終日17:00まで） @東京大学本郷キャンパス 情報学環オープンスタジオにて開催される、東京大学 制作展 「たゆたう」 の公式ページです。",
    url: "https://iiiexhibition.com/",
    siteName: "東京大学 制作展 たゆたう",
    images: [
      {
        url: "https://iiiexhibition.com/ogp_image_v2.jpg",
        width: 1200,
        height: 630,
        alt: "東京大学 制作展 「たゆたう」 メインビジュアル",
      },
    ],
    locale: "ja_JP", 
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "東京大学 制作展 「たゆたう」 | UTokyo iii Exhibition 2026 Beginning",
    description: "2026.07.10(金) - 07.13(月) 11:00 - 19:00 （※最終日17:00まで）@東京大学本郷キャンパス 情報学環オープンスタジオ",
    images: ["https://iiiexhibition.com/ogp_image_v2.jpg"],
  },

  other: {
    thumbnail: "https://iiiexhibition.com/ogp_image_v2.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ overscrollBehaviorY: "none" }}>
      <body style={{ backgroundColor: "rgb(250,242,245)", margin: 0 }}>
        <style>{bgAnimations}</style>
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: "-5%",
            backgroundImage: "url('/member_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            animation: "bg-float 18s ease-in-out infinite",
          }}
        />
        {children}
      </body>
    </html>
  );
}