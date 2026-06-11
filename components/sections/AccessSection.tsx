import { RevealOnScroll } from "@/components/RevealOnScroll";
import { type Locale, type dictionaries } from "@/lib/i18n";

type AccessSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AccessSection({ dictionary }: AccessSectionProps) {
  const { access } = dictionary.sections;

  return (
    <section
      className="bg-transparent bg-contain bg-center bg-no-repeat px-6 py-20 md:px-8"
      id="access"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl pt-10 text-center">
          <h2 className="mb-12 font-puritan text-5xl uppercase tracking-tight">
            {access.title}
          </h2>

          {/* Map */}
          <img
            src="/map_new.png"
            alt="Map"
            className="mx-auto w-full max-w-2xl rounded-2xl bg-white"
          />

          {/* Info */}
          <div className="mt-12 flex flex-col gap-8">
            {/* Venue */}
            <div className="flex flex-col gap-1">
              <p className="font-zen-kaku py-4 text-2xl font-bold uppercase tracking-wider text-accent">
                {access.venue.title}
              </p>
              <p className="font-zen-kaku text-lg leading-relaxed text-pink underline underline-offset-4 transition-opacity hover:opacity-70">
                <a
                  href={access.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {access.link.label}
                </a>
              </p>
              <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
                {access.venue.address}
              </p>
            </div>

            {/* Transport */}
            <div>
              <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
                {access.transport}
              </p>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-1">
            <p className="font-zen-kaku text-md leading-relaxed text-pink underline underline-offset-4 transition-opacity hover:opacity-70">
                <a
                  href={access.map.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {access.map.label}
                </a>
              </p>
            </div>

            {/* Datetime */}
            <div className="flex flex-col gap-1">
              <p className="font-zen-kaku py-4 text-2xl font-bold uppercase tracking-wider text-accent">
                {access.datetime.title}
              </p>
              <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
                {access.datetime.value}
              </p>
            </div>

            {/* Organizer */}
            <div className="flex flex-col gap-1">
              <p className="font-zen-kaku py-4 text-2xl font-bold uppercase tracking-wider text-accent">
                {access.organizer.title}
              </p>
              <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
                {access.organizer.detail}
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
