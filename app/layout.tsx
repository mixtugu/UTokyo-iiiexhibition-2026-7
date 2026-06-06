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
  title: "UTokyo iii Exhibition 2026: Beginning",
  description: "Public page for UTokyo iii Exhibition 2026 Beginning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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