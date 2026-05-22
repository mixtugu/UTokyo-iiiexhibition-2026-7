export type Member = {
  id: string;
  ja: string;
  en: string;
};

export type MemberGroup = {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  members: Member[];
};

export const memberGroups: MemberGroup[] = [
  {
    id: "producer",
    title: {
      ja: "プロデューサー",
      en: "Producers",
    },
    members: [
      {
        id: "",
        ja: "",
        en: "",
      },
      {
        id: "",
        ja: "",
        en: "",
      }
    ],
  },
];
