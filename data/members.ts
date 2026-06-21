export type Member = {
  id: string;
  ja: string;
  en: string;
  profileLink: string;
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
    id: "PD",
    title: {
      ja: "PD",
      en: "PROJECT DIRECTOR",
    },
    members: [
      {
        id: "Michael_Wong_Kam",
        ja: "ウォンカム 真生路",
        en: "Michael Wong Kam",
        profileLink: "",
      },
      {
        id: "Taichi_Inohara",
        ja: "猪原 大智",
        en: "Taichi Inohara",
        profileLink: "",
      },
      {
        id: "Jingtong_Dou",
        ja: "竇 靖童",
        en: "Jingtong Dou",
        profileLink: "",
      },
      {
        id: "Hiromi_Imawaka",
        ja: "今若 広美",
        en: "Hiromi Imawaka",
        profileLink: "",
      }
    ],
  },
  {
    id:"PM",
    title: {
      ja: "PM",
      en: "PROJECT MANAGER"
    },
    members : [
      {
        id: "Ryuhei_Sugimoto",
        ja: "杉本 隆平",
        en: "Ryuhei Sugimoto",
        profileLink: ""
      },
      {
        id: "Masataka_Tsukada",
        ja: "塚田 昌孝",
        en: "Masataka Tsukada",
        profileLink: ""
      },
    ]
  },
  {
    id:"Website",
    title: {
      ja: "Web",
      en: "WEBSITE"
    },
    members : [
      {
        id: "Misaki_Kyono",
        ja: "京野 美咲",
        en: "Misaki Kyono",
        profileLink: ""
      },
      {
        id: "Jaemin_Kim",
        ja: "キム ジェミン",
        en: "Jaemin Kim",
        profileLink: ""
      },
      {
        id: "Seojung_Lee",
        ja: "イ ソジョン",
        en: "Seojung Lee",
        profileLink: ""
      },
      {
        id: "Mizuki_Ogawa",
        ja: "小川 美杉",
        en: "Mizuki Ogawa",
        profileLink: ""
      },
            {
        id: "Kenta_Kito",
        ja: "鬼頭 健太",
        en: "Kenta Kito",
        profileLink: ""
      }
    ]
  },
  {
    id:"Copy",
    title: {
      ja: "Copy",
      en: "COPY WRITING"
    },
    members : [
      {
        id: "Haruta_Ogawa",
        ja: "小川 陽大",
        en: "Haruta Ogawa",
        profileLink: ""
      },
      {
        id: "Yuki_Kamon",
        ja: "賀門 祐輝",
        en: "Yuki Kamon",
        profileLink: ""
      },
      {
        id: "Yasmin_Hinano_Yamashita",
        ja: "山下 ヤスミン姫名乃",
        en: "Yasmin Hinano Yamashita",
        profileLink: ""
      },
      {
        id: "Akane_Koyama",
        ja: "小山 茜",
        en: "Akane Koyama",
        profileLink: ""
      },
            {
        id: "Yukihiko_Shinobu",
        ja: "信夫 行彦",
        en: "Yukihiko Shinobu",
        profileLink: ""
      }
    ]
  },
  {
    id:"Accounting",
    title: {
      ja: "会計",
      en: "ACCOUNTING"
    },
    members : [
      {
        id: "Hiroaki_Tsuneizumi",
        ja: "常泉 宏陽",
        en: "Hiroaki Tsuneizumi",
        profileLink: ""
      },
      {
        id: "Michitoshi_Tsubaki",
        ja: "椿 道智",
        en: "Michitoshi Tsubaki",
        profileLink: ""
      }
    ]
  },
  {
    id:"gallery",
    title: {
      ja: "会場",
      en: "GALLERY"
    },
    members : [
      {
        id: "Meika_Mizuno",
        ja: "水野 明香",
        en: "Meika Mizuno",
        profileLink: ""
      },
      {
        id: "Yufei_Wu",
        ja: "武 雨菲",
        en: "Yufei Wu",
        profileLink: ""
      },
      {
        id: "Naohiro_Sudo",
        ja: "須藤 均寛",
        en: "Naohiro Sudo",
        profileLink: ""
      },
      {
        id: "Arata_Kotani",
        ja: "小谷 新太",
        en: "Arata Kotani",
        profileLink: ""
      },
      {
        id: "Keigo_Toda",
        ja: "戸田 圭吾",
        en: "Keigo Toda",
        profileLink: ""
      },
      {
        id: "Kota_Murakami",
        ja: "村上 滉太",
        en: "Kota Murakami",
        profileLink: ""
      },
      {
        id: "Ryoichi_Sato",
        ja: "佐藤 遼一",
        en: "Ryoichi Sato",
        profileLink: ""
      }
    ]
  },
  {
    id:"PR",
    title: {
      ja: "広報",
      en: "PR"
    },
    members : [
      {
        id: "Rikuto_Maruse",
        ja: "丸㔟 陸斗",
        en: "Rikuto Maruse",
        profileLink: ""
      },
      {
        id: "Rinji_Sasaki",
        ja: "佐々木 凛士",
        en: "Rinji Sasaki",
        profileLink: ""
      },
      {
        id: "Kengo_Kawaji",
        ja: "河路 健吾",
        en: "Kengo Kawaji",
        profileLink: ""
      },
      {
        id: "Taisei_Fukaya",
        ja: "深谷 太聖",
        en: "Taisei Fukaya",
        profileLink: ""
      }
    ]
  },
  {
    id:"Archive",
    title: {
      ja: "アーカイブ",
      en: "ARCHIVE"
    },
    members : [
      {
        id: "Haruna_Nohara",
        ja: "野原 春菜",
        en: "Haruna Nohara",
        profileLink: ""
      },
      {
        id: "Tadasuke_Koshimbo",
        ja: "光真坊 忠佑",
        en: "Tadasuke Koshimbo",
        profileLink: ""
      },
      {
        id: "Gao_Jiaqi",
        ja: "コウ カキ",
        en: "Gao Jiaqi",
        profileLink: ""
      },
      {
        id: "Yayoi_Okamoto",
        ja: "岡本 弥生",
        en: "Yayoi Okamoto",
        profileLink: ""
      }
    ]
  },
  {
    id:"Design",
    title: {
      ja: "デザイン",
      en: "DESIGN"
    },
    members : [
      {
        id: "Sato_Ryoichi",
        ja: "佐藤 遼一",
        en: "Ryoichi Sato",
        profileLink: ""
      },
      {
        id: "Aino_Kishimoto",
        ja: "岸本 安維乃",
        en: "Aino Kishimoto",
        profileLink: ""
      },
      {
        id: "Hinata_Mikami",
        ja: "三上 日向汰",
        en: "Hinata Mikami",
        profileLink: ""
      },
      {
        id: "Hou_Yancheng",
        ja: "侯 彦丞",
        en: "Hou Yancheng",
        profileLink: ""
      },
      {
        id: "Yugo_Tamakia",
        ja: "田牧 悠吾",
        en: "Yugo Tamaki",
        profileLink: ""
      },
      {
        id: "Hinako_Makita",
        ja: "牧田 陽奈子",
        en: "Hinako Makita",
        profileLink: ""
      }
    ]
  },
  {
    id:"Faculty_Advisor",
    title: {
      ja: "教員",
      en: "FACULTY ADVISOR"
    },
    members : [
      {
        id: "Takeshi_Naemura",
        ja: "苗村 健",
        en: "Takeshi Naemura",
        profileLink: ""
      },
      {
        id: "Hidenori_Watanabe",
        ja: "渡邉 英徳",
        en: "Hidenori Watanabe",
        profileLink: ""
      },
      {
        id: "Yasuaki_Kakehi",
        ja: "筧 康明",
        en: "Yasuaki Kakehi",
        profileLink: ""
      },
      {
        id: "Koki_Sone",
        ja: "曽根 光揮",
        en: "Koki Sone",
        profileLink: ""
      },
      {
        id: "Shohei_Takei",
        ja: "武井 祥平",
        en: "Shohei Takei",
        profileLink: ""
      },
      {
        id: "Takafumi_Morita",
        ja: "森田 崇文",
        en: "Takafumi Morita",
        profileLink: ""
      },
      {
        id: "Daisuke_Kuramoto",
        ja: "倉本 大資",
        en: "Daisuke Kuramoto",
        profileLink: ""
      },
    ]
  }
];

// 全メンバーの一覧
export const allMembers: Member[] = memberGroups.flatMap(
  (group) => group.members,
);

// id からメンバーを取得
export function getMemberById(id: string): Member | undefined {
  return allMembers.find((member) => member.id === id);
}
