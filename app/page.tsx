import { LocalePageContent } from "@/components/LocalePageContent";
import { defaultLocale } from "@/lib/i18n";

export default function Home() {
  return <LocalePageContent locale={defaultLocale} />;
}
