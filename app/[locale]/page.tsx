import { notFound } from "next/navigation";
import { LocalePageContent } from "@/components/LocalePageContent";
import { isLocale, locales } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LocalePageContent locale={locale} />;
}
