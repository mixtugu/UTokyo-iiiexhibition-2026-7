import { type Locale, type dictionaries } from "@/lib/i18n";

type AccessSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
};

export function AccessSection({ dictionary }: AccessSectionProps) {
  const { access } = dictionary.sections;

  return (
    <section className="bg-[rgb(250,242,245)] px-6 py-20 md:px-8" id="access">
      <div className="mx-auto max-w-6xl pt-10 text-center">
        <h2 className="mb-12 font-playpen-sans text-5xl uppercase tracking-tight">
          {access.title}
        </h2>

        {/* Map */}
        <img
          src="/map.svg"
          alt="Map"
          className="mx-auto w-full max-w-lg rounded-2xl bg-white"
        />

        {/* Info */}
        <div className="mt-12 flex flex-col gap-8">
          {/* Venue */}
          <div className="flex flex-col gap-1">
            <p className="font-zen-kaku py-4 text-2xl font-bold uppercase tracking-wider text-accent">
              {access.venue.title}
            </p>
            <p className="font-zen-kaku text-lg leading-relaxed text-foreground/75">
              {access.venue.name}
            </p>
            <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
              {access.venue.detail}
            </p>
          </div>

          {/* Transport */}
          <div>
            <p className="font-zen-kaku whitespace-pre-line text-lg leading-relaxed text-foreground/75">
              {access.transport}
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
    </section>
  );
}
