import { notFound } from "next/navigation";
import { LocalePageContent } from "@/components/LocalePageContent";
import { isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams(): Array<{ locale: string }> {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LocalePageContent locale={locale} />;
}
