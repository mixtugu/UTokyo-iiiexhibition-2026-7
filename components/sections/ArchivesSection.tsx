import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";

type ArchivesSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

type ArchiveItem = {
  title: string;
  href?: string;
};

function ArchiveTitles({ items }: { items: ArchiveItem[] }) {
  return (
    <ul className="w-full max-w-[340px] text-left text-sm font-medium font-zen-kaku md:w-fit md:max-w-none md:text-base">
      {items.map(({ title, href }) => (
        <li className="leading-relaxed my-2.5" key={title}>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </li>
      ))}
    </ul>
  );
}

export function ArchivesSection({ dictionary }: ArchivesSectionProps) {
  const iiiExhibitionTitles: ArchiveItem[] = [
    { title: "iiiExhibition 2025 : あることないこと",
    },
    {
      title: "iiiExhibition 2024 : 付いて離れて",
      href: "https://2024-main.pages.dev/",
    },
    {
      title: "iiiExhibition 2023 : 學藝運動",
      href: "https://iii-exhibition2023-main.vercel.app/",
    },
    {
      title: "iiiExhibition 2022 : Emulsion",
      href: "https://archive.iiiexhibition.com/log/i3e24",
    },
    {
      title: "iiiExhibition 2021 : キョリブレーション",
      href: "https://archive.iiiexhibition.com/log/i3e23",
    },
    {
      title: "iiiExhibition 2020 : 弛む",
      href: "https://archive.iiiexhibition.com/log/i3e22",
    },
    {
      title: "iiiExhibition 2019 : ああ言えばこう言う。こう言えばどう言う？",
      href: "https://archive.iiiexhibition.com/log/i3e21",
    },
    {
      title: "iiiExhibition 2018 : Destlogy REBUILD",
      href: "https://archive.iiiexhibition.com/log/i3e20",
    },
    {
      title: "iiiExhibition 2017 : WYSIWYG?",
      href: "https://archive.iiiexhibition.com/log/i3e19",
    },
    {
      title: "iiiExhibition 2016 : FAKE FUTURE",
      href: "https://archive.iiiexhibition.com/log/i3e18",
    },
    {
      title: "iiiExhibition 2015 : わたしエクステンション",
      href: "https://archive.iiiexhibition.com/log/i3e17",
    },
    {
      title: "iiiExhibition 2014 : !!!",
      href: "https://archive.iiiexhibition.com/log/i3e16",
    },
    {
      title: "iiiExhibition 2013 : mosaic",
      href: "https://archive.iiiexhibition.com/log/i3e15",
    },
    {
      title: "iiiExhibition 2012 : いとをかし",
      href: "https://archive.iiiexhibition.com/log/i3e14",
    },
    {
      title: "iiiExhibition 2011 : Re:",
      href: "https://archive.iiiexhibition.com/log/i3e13",
    },
  ];

  const beginningTitles: ArchiveItem[] = [
    { title: "Beginning 2025 : あることないこと",
      href: "https://iii-exhibition2025-beginning.pages.dev",
    },
    {
      title: "Extra 2024 : なにいう展",
      href: "https://iii-exhibition-2024-web.vercel.app/",
    },
    {
      title: "Extra 2023 : voidage",
      href: "https://iii-exhibition2023.vercel.app/",
    },
    {
      title: "Extra 2022 : Emulsion",
      href: "https://archive.iiiexhibition.com/log/iiiEx2022",
    },
    {
      title: "Extra 2021 : 0PUNK",
      href: "https://archive.iiiexhibition.com/log/iiiEx2021",
    },
    {
      title: "Extra 2020 : WHO ZIPS YOU?",
      href: "https://archive.iiiexhibition.com/log/iiiEx2020",
    },
    {
      title: "Extra 2019 : enact one's self",
      href: "https://archive.iiiexhibition.com/log/iiiEx2019",
    },
    {
      title: "Extra 2018 : Dest-logy",
      href: "https://archive.iiiexhibition.com/log/iiiEx2018",
    },
    {
      title: "Extra 2017 : SUKIMANIAC",
      href: "https://archive.iiiexhibition.com/log/iiiEx2017",
    },
    {
      title: "Extra 2016 : 補序線",
      href: "https://archive.iiiexhibition.com/log/iiiEx2016",
    },
    {
      title: "Extra 2015 : グッバイ・マイ・ボディ",
      href: "https://archive.iiiexhibition.com/log/iiiEx2015",
    },
    {
      title: "Extra 2014 : リアルからちょっと離れてる空間",
      href: "https://archive.iiiexhibition.com/log/iiiEx2014",
    },
    {
      title: "Extra 2013 : ⏻",
      href: "https://archive.iiiexhibition.com/log/iiiEx2013",
    },
    {
      title: "Extra 2012 : パルス",
      href: "https://archive.iiiexhibition.com/log/iiiEx2012",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-8" id="archives">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-medium font-puritan">
            {dictionary.sections.archives.title}
          </h2>

          <div className="mt-12 grid md:mt-16 md:grid-cols-[1fr_2px_1fr]">
            <div className="flex flex-col items-center pb-12 md:pb-0 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16">
              <h3 className="mb-8 text-center text-base lowercase md:text-lg font-medium font-puritan">
                iii exhibition
              </h3>
              <ArchiveTitles items={iiiExhibitionTitles} />
            </div>
            <div className="hidden md:block w-[2px] h-full bg-[linear-gradient(to_bottom,#973A3C_38%,#15394D_100%)] opacity-50"></div>

            <div className="flex flex-col items-center md:pl-10 lg:pl-16">
              <h3 className="mb-8 text-center text-base lowercase md:text-lg font-medium font-puritan">
                beginning
              </h3>
              <ArchiveTitles items={beginningTitles} />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
