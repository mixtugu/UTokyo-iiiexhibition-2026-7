import en from "@/lib/locales/en.json";
import ja from "@/lib/locales/ja.json";

export const locales = ["ja", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export type Dictionary = {
  eyebrow: string;
  title: string;
  description: string;
  switchLanguage: string;
  nav: {
    concept: string;
    about: string;
    works: string;
    members: string;
    access: string;
    archives: string;
  };
  sections: {
    main: {
      label: string;
      lead: string;
    };
    concept: {
      title: string;
      body: string;
    };
    about: {
      title: string;
      body: string;
    };
    works: {
      title: string;
      body: string;
    };
    members: {
      title: string;
      body: string;
    };
    access: {
      title: string;
      body: string;
    };
    archives: {
      title: string;
      body: string;
    };
    footer: {
      title: string;
    };
  };
};

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const dictionaries = {
  ja,
  en,
} satisfies Record<Locale, Dictionary>;
