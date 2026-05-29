import Image from "next/image";
import { dictionaries, type Locale } from "@/lib/i18n";

type MainPageSectionProps = {
  alternateLocale: Locale;
  dictionary: (typeof dictionaries)[Locale];
};

export function MainPageSection({
  alternateLocale,
  dictionary,
}: MainPageSectionProps) {
  return (
    <section className="min-h-svh" id="main">
      <div className="mx-auto w-full max-w-[1600px] py-4 px-8">
        <div className="h-40 mb-24">
          <h1 className="mb-5 text-8xl font-bold text-accent font-shippori">
            {dictionary.eyebrow}
          </h1>
          {dictionary.subtitle && (
            <p className="text-4xl font-medium text-accent font-shippori">
              {dictionary.subtitle}
            </p>
          )}
        </div>
        <img
          className="w-150 select-none [user-drag:none] [-webkit-user-drag:none] mb-24"
          src="/main/text.webp"
          alt="2026 Beginning"
        />
        <ul className="font-shippori flex flex-col gap-4 text-xl">
          <li className="flex items-start gap-2">
            <img className="mt-1" src="/main/icon/date.svg" alt="Date" width={22} />
            <span>{dictionary.sections.main.date}</span>
          </li>
          <li className="flex items-start gap-2">
            <img className="mt-1" src="/main/icon/location.svg" alt="Location" width={22} />
            <span>
              {dictionary.sections.main.location1}
              <br />
              {dictionary.sections.main.location2}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
