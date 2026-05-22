import { memberGroups } from "@/data/members";
import { type Locale, type dictionaries } from "@/lib/i18n";

type MembersSectionProps = {
  dictionary: (typeof dictionaries)[Locale];
  locale: Locale;
};

export function MembersSection({ dictionary, locale }: MembersSectionProps) {
  return (
    <section className="px-6 py-20 md:px-8" id="members">
      <div className="mx-auto grid max-w-6xl gap-8 border-t border-foreground/15 pt-10 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-bold uppercase text-accent">
            {dictionary.sections.members.title}
          </h2>
        </div>
        <div className="grid gap-8">
          {memberGroups.map((group) => (
            <section
              className="grid gap-4 border-b border-foreground/10 pb-8 last:border-b-0 last:pb-0 md:grid-cols-[180px_1fr]"
              key={group.id}
            >
              <h3 className="text-base font-bold text-foreground">
                {group.title[locale]}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {group.members.map((member, index) => (
                  <li
                    className="text-base text-foreground/75"
                    key={member.id || `${group.id}-${index}`}
                  >
                    {member[locale] || "-"}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
