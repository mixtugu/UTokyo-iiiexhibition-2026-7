import type { Metadata } from "next";
import "./globals.css";

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
      <body
        style={{
          backgroundColor: "rgb(250,242,245)",
          backgroundImage: "url('/member_background.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}