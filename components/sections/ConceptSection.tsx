import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";

type ConceptSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

function renderResponsiveLineBreaks(text: string) {
  return text.split("\n").map((line, lineIndex, lines) => (
    <span key={`line-${lineIndex}`}>
      {line.split("|").map((part, partIndex, parts) => (
        <span key={`${lineIndex}-${partIndex}`}>
          <span className="whitespace-nowrap">{part}</span>
          {partIndex < parts.length - 1 ? <wbr /> : null}
        </span>
      ))}
      {lineIndex < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export function ConceptSection({ dictionary }: ConceptSectionProps) {
  return (
    <section
      className="px-4 py-16 md:px-8 md:py-20"
      id="concept"
    >
      <style>{`
    @keyframes concept-float {
      0%, 100% { transform: translateY(0px) scale(1); }
      50%       { transform: translateY(-12px) scale(1.02); }
    }
  `}</style>
      <RevealOnScroll>
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <img
            alt={dictionary.sections.concept.title}
            className="h-auto w-full max-w-[320px] md:max-w-[520px]"
            height={75}
            src="/concept_title.svg"
            width={505}
          />
          <div className="relative mt-8 w-full max-w-5xl px-3 py-10 md:mt-12 md:px-6 md:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/concept_background.png')] bg-contain bg-center bg-no-repeat opacity-90"
              style={{ animation: "concept-float 7s ease-in-out infinite" }}
            />
            <p className="relative whitespace-pre-line text-lg leading-8 text-foreground/75 [word-break:keep-all] md:leading-10">
              {renderResponsiveLineBreaks(dictionary.sections.concept.body)}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
