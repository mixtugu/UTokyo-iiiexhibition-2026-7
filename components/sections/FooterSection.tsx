"use client";

import { type Locale, type dictionaries } from "@/lib/i18n";
import Link from "next/link";

type FooterSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function FooterSection({ dictionary }: FooterSectionProps) {
  const share = async () => {
    if (!window.navigator.share) {
      return;
    }

    try {
      await window.navigator.share({
        title: dictionary.eyebrow,
        url: window.location.href,
      });
    } catch (e) {
      console.log(e instanceof Error ? e.message : e);
    }
  };
  return (
    <footer className="px-6 pt-2 pb-8 md:px-8 bg-[#F5E6EE]">
      <div className="mx-auto flex flex-col gap-6 max-w-6xl pt-8 text-sm text-foreground items-center justify-between">
        <p className="font-bold text-xl">© 2026 iii Exhibition</p>
        <ul className="flex gap-6">
          <li>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center bg-foreground rounded-full cursor-pointer"
              onClick={share}
              aria-label="Share"
            >
              <img src="/footer/share.svg" alt="" width={30} />
            </button>
          </li>
          <li>
            <Link
              className="w-10 h-10 flex items-center justify-center bg-foreground rounded-full"
              href="https://x.com/iiiexhibition?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/x.svg" alt="X" width={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/iiiexhibition?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/ig.svg" alt="Instagram" width={40} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/iiiexhibition/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/fb.png" alt="Facebook" width={40} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
