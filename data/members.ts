export type Member = {
  id: string;
  ja: string;
  en: string;
  profileLink: string;
  affiliation?: { ja: string; en: string };
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
      ja: "プロデューサー/ディレクター",
      en: "PROJECT DIRECTOR",
    },
    members: [
      {
        id: "Michael_Wong_Kam",
        ja: "ウォンカム 真生路",
        en: "Michael Wong Kam",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　山肩研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Yamakata Lab, M1",
        },
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
      ja: "プロジェクトマネージャー",
      en: "PROJECT MANAGER"
    },
    members : [
      {
        id: "Ryuhei_Sugimoto",
        ja: "杉本 隆平",
        en: "Ryuhei Sugimoto",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　筧研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Kakehi Lab, M1",
        },
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
      ja: "ウェブ",
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
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　渡邉研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Watanabe Lab, M1",
        },
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
      ja: "コピー",
      en: "COPY WRITING"
    },
    members : [
      {
        id: "Haruta_Ogawa",
        ja: "小川 陽大",
        en: "Haruta Ogawa",
        profileLink: "",
        affiliation: {
          ja: "文学部美学芸術学専修　美学芸術学研究室　学部４年",
          en: "Faculty of Letters, Aesthetics, Aesthetics Lab, B4",
        },
      },
      {
        id: "Yuki_Kamon",
        ja: "賀門 祐輝",
        en: "Yuki Kamon",
        profileLink: "",
        affiliation: {
          ja: "文学部美術史学科　学部４年",
          en: "Faculty of Letters, Art History, B4",
        },
      },
      {
        id: "Yasmin_Hinano_Yamashita",
        ja: "山下 ヤスミン姫名乃",
        en: "Yasmin Hinano Yamashita",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　稲見研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Inami Lab, M1",
        },
      },
      {
        id: "Akane_Koyama",
        ja: "小山 茜",
        en: "Akane Koyama",
        profileLink: "",
        affiliation: { ja: "", en: "" },
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
        profileLink: "",
        affiliation: {
          ja: "工学系研究科　伊藤・山本研究室　修士１年",
          en: "Graduate School of Engineering, Ito & Yamamoto Lab, M1",
        },
      },
      {
        id: "Michitoshi_Tsubaki",
        ja: "椿 道智",
        en: "Michitoshi Tsubaki",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　岡田研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Okada Lab, M1",
        },
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
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　筧研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Kakehi Lab, M1",
        },
      },
      {
        id: "Yufei_Wu",
        ja: "武 雨菲",
        en: "Yufei Wu",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　筧研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Kakehi Lab, M1",
        },
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
        profileLink: "",
        affiliation: {
          ja: "工学部精密工学科　学部３年",
          en: "Faculty of Engineering, Precision Engineering, B3",
        },
      },
      {
        id: "Keigo_Toda",
        ja: "戸田 圭吾",
        en: "Keigo Toda",
        profileLink: "",
        affiliation: {
          ja: "情報理工学系研究科　伊藤研究室　修士１年",
          en: "Graduate School of Information Science and Technology, Ito Lab, M1",
        },
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
        profileLink: "",
        affiliation: {
          ja: "総合文化研究科　雨宮研究室　修士１年",
          en: "Graduate School of Arts and Sciences, Amemiya Lab, M1",
        },
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
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　中野研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Nakano Lab, M1",
        },
      },
      {
        id: "Rinji_Sasaki",
        ja: "佐々木 凛士",
        en: "Rinji Sasaki",
        profileLink: "",
        affiliation: {
          ja: "文学部美学芸術学専修　美学芸術学研究室　学部４年",
          en: "Faculty of Letters, Aesthetics, Aesthetics Lab, B4",
        },
      },
      {
        id: "Kengo_Kawaji",
        ja: "河路 健吾",
        en: "Kengo Kawaji",
        profileLink: "",
        affiliation: {
          ja: "教育学研究科　修士１年",
          en: "Graduate School of Education, M1",
        },
      },
      {
        id: "Taisei_Fukaya",
        ja: "深谷 太聖",
        en: "Taisei Fukaya",
        profileLink: "",
        affiliation: {
          ja: "総合文化研究科　雨宮研究室　修士１年",
          en: "Graduate School of Arts and Sciences, Amemiya Lab, M1",
        },
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
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　渡邉研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Watanabe Lab, M1",
        },
      },
      {
        id: "Tadasuke_Koshimbo",
        ja: "光真坊 忠佑",
        en: "Tadasuke Koshimbo",
        profileLink: "",
        affiliation: {
          ja: "教養学部　国際関係論コース　学部４年",
          en: "College of Arts and Sciences, International Relations, B4",
        },
      },
      {
        id: "Gao_Jiaqi",
        ja: "コウ カキ",
        en: "Gao Jiaqi",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　渡邉研究室　研究生",
          en: "Graduate School of Interdisciplinary Information Studies, Watanabe Lab, Research Student",
        },
      },
      {
        id: "Yayoi_Okamoto",
        ja: "岡本 弥生",
        en: "Yayoi Okamoto",
        profileLink: "",
        affiliation: {
          ja: "東京藝術大学　音楽学部楽理科　鎌谷研究室　学部４年",
          en: "Tokyo University of the Arts, Faculty of Music, Musicology, Kamatani Lab, B4",
        },
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
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　雨宮研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Amemiya Lab, M1",
        },
      },
      {
        id: "Hou_Yancheng",
        ja: "侯 彦丞",
        en: "Hou Yancheng",
        profileLink: "",
        affiliation: { ja: "", en: "" },
      },
      {
        id: "Yugo_Tamakia",
        ja: "田牧 悠吾",
        en: "Yugo Tamaki",
        profileLink: "",
        affiliation: {
          ja: "工学部建築学科　学部４年",
          en: "Faculty of Engineering, Architecture, B4",
        },
      },
      {
        id: "Hinako_Makita",
        ja: "牧田 陽奈子",
        en: "Hinako Makita",
        profileLink: "",
        affiliation: {
          ja: "学際情報学府　筧研究室　修士１年",
          en: "Graduate School of Interdisciplinary Information Studies, Kakehi Lab, M1",
        },
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
