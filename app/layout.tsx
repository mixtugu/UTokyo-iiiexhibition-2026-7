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
  title: "UTokyo iii Exhibition 2026: Beginning",
  description: "【UTokyo iii Exhibition 2026 Beginning】 Public page",
  openGraph: {
    title: "UTokyo iii Exhibition 2026: Beginning",
    description: "【UTokyo iii Exhibition】 Public page",
    url: "https://iiiexhibition.com/",
    siteName: "UTokyo iii Exhibition 2026",
    images: [
      {
        url: "https://iiiexhibition.com/ogp_image.jpg", // 👉 무조건 https:// 부터 시작하는 풀 주소를 적어주세요!
        width: 1200,
        height: 630,
        alt: "UTokyo iii Exhibition 2026 Main Poster",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://iiiexhibition.com/ogp_image.jpg"], 
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