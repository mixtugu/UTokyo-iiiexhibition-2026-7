import { memberGroups } from "@/data/members";
import { type Locale, type dictionaries } from "@/lib/i18n";

type MembersSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

export function MembersSection({ dictionary, locale }: MembersSectionProps) {
  return (
    <section
      className="bg-[rgb(250,242,245)] bg-[url('/member_background.png')] bg-contain bg-center bg-no-repeat px-6 py-20 md:px-8"
      id="members"
    >
      <div className="mx-auto max-w-6xl pt-10 text-center">
        <h2 className="mb-12 font-playpen-sans text-5xl uppercase tracking-tight">
          {dictionary.sections.members.title}
        </h2>
        <div className="grid gap-6">
          {memberGroups.map((group) => (
            <div className="pb-4 last:pb-0" key={group.id}>
              <p className="mb-1.5 font-zen-kaku text-sm font-bold uppercase tracking-wider text-accent">
                {group.title[locale]}
              </p>
              <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 font-zen-kaku text-lg leading-relaxed text-foreground/75">
                {group.members.map((member, index) => (
                  <span
                    className="whitespace-nowrap"
                    key={member.id || `${group.id}-${index}`}
                  >
                    {index > 0 ? "| " : ""}
                    {member[locale] || "-"}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
