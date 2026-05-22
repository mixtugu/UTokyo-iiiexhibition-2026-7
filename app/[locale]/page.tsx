import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { ArchivesSection } from "@/components/sections/ArchivesSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { MainPageSection } from "@/components/sections/MainPageSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { NavigationSection } from "@/components/sections/NavigationSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { defaultLocale, dictionaries, isLocale, locales } from "@/lib/i18n";

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

  const dictionary = dictionaries[locale];
  const alternateLocale = locale === defaultLocale ? "en" : defaultLocale;

  return (
    <main className="min-h-svh" lang={locale}>
      <MainPageSection
        alternateLocale={alternateLocale}
        dictionary={dictionary}
      />
      <NavigationSection dictionary={dictionary} locale={locale} />
      <ConceptSection dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <WorksSection dictionary={dictionary} />
      <MembersSection dictionary={dictionary} locale={locale} />
      <AccessSection dictionary={dictionary} />
      <ArchivesSection dictionary={dictionary} />
      <FooterSection dictionary={dictionary} />
    </main>
  );
}
