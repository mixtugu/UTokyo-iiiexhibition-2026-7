import { type Locale, type dictionaries } from "@/lib/i18n";

type ArchivesSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

function ArchiveTitles({ titles }: { titles: string[] }) {
  return (
    <ul className="w-full text-left text-sm md:text-base font-medium font-zen-kaku">
      {titles.map((title) => (
        <li className="leading-relaxed my-2.5" key={title}>{title}</li>
      ))}
    </ul>
  );
}

export function ArchivesSection({ dictionary }: ArchivesSectionProps) {
  // 仮のテキストデータ
  const iiiExhibitionTitles = [
    "iiiExhibition 2026 : あることないこと",
    "iiiExhibition 2024 : 付いて離れて",
    "iiiExhibition 2023 : 學藝運動",
    "iiiExhibition 2022 : Emulsion",
    "iiiExhibition 2021 : キョリブレーション",
    "iiiExhibition 2020 : 弛む",
    "iiiExhibition 2019 : ああ言えばこう言う。こう言えばどう言う？",
    "iiiExhibition 2018 : Destlogy REBUILD",
    "iiiExhibition 2017 : WYSIWYG?",
    "iiiExhibition 2016 : FAKE FUTURE",
    "iiiExhibition 2015 : わたしエクステンション",
    "iiiExhibition 2014 : !!!",
    "iiiExhibition 2013 : mosaic",
    "iiiExhibition 2012 : いとをかし",
    "iiiExhibition 2011 : Re:",
  ];

  const beginningTitles = [
    "Beginning 2025 : あることないこと",
    "Extra 2024 : なにいう展",
    "Extra 2023 : voidage",
    "Extra 2022 : Emulsion",
    "Extra 2021 : 0PUNK",
    "Extra 2020 : WHO ZIPS YOU?",
    "Extra 2019 : enact one's self",
    "Extra 2018 : Dest-logy",
    "Extra 2017 : SUKIMANIAC",
    "Extra 2016 : 補序線",
    "Extra 2015 : グッバイ・マイ・ボディ",
    "Extra 2014 : リアルからちょっと離れてる空間",
    "Extra 2013 : ⏻",
    "Extra 2012 : パルス",
  ];

  return (
    <section className="px-6 py-20 md:px-8 bg-[rgb(250,242,245)]" id="archives">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-medium font-playpen-sans">
          {dictionary.sections.archives.title}
        </h2>

        <div className="mt-12 grid md:mt-16 md:grid-cols-[1fr_2px_1fr]">
          <div className="flex flex-col items-center  pb-12 md:pb-0 md:pr-10 lg:pr-16">
            <h3 className="mb-8 text-center text-base lowercase md:text-lg font-medium font-playpen-sans">
              iii exhibition
            </h3>
            <ArchiveTitles titles={iiiExhibitionTitles} />
          </div>
          <div className="hidden md:block w-[2px] h-full bg-[linear-gradient(to_bottom,#973A3C_38%,#15394D_100%)] opacity-50"></div>

          <div className="flex flex-col items-center md:pl-10 lg:pl-16">
            <h3 className="mb-8 text-center text-base lowercase md:text-lg font-medium font-playpen-sans">
              beginning
            </h3>
            <ArchiveTitles titles={beginningTitles} />
          </div>
        </div>
      </div>
    </section>
  );
}
