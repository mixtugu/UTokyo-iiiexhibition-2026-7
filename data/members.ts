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
    id: "PD",
    title: {
      ja: "PD",
      en: "PROJECT DIRECTOR",
    },
    members: [
      {
        id: "Michal_Wong_Kam",
        ja: "ウォンカム 真生路",
        en: "Michal Wong Kam",
      },
      {
        id: "Inohara_taichi",
        ja: "猪原 大智",
        en: "Inohara taichi",
      },
      {
        id: "Dou_Jingtong",
        ja: "竇 靖童",
        en: "Dou Jingtong",
      },
      {
        id: "Hiromi_Imawaka",
        ja: "今若 広美",
        en: "Hiromi Imawaka",
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
        en: "Ryuhei Sugimoto"
      },
      {
        id: "Tsumada Masataka",
        ja: "塚田 昌孝",
        en: "Tsumada Masataka"
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
        en: "Misaki Kyono"
      },
      {
        id: "Kim_Jaemin",
        ja: "キム ジェミン",
        en: "Kim Jaemin"
      },
      {
        id: "Lee_Seojung",
        ja: "イ ソジョン",
        en: "Lee Seojung"
      },
      {
        id: "Mizuki_Ogawa",
        ja: "小川 美杉",
        en: "Mizuki Ogawa"
      },
            {
        id: "Kenta_Kito",
        ja: "鬼頭 健太",
        en: "Kenta Kito"
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
        en: "Haruta Ogawa"
      },
      {
        id: "Yuki_Kamon",
        ja: "賀門 祐輝",
        en: "Yuki Kamon"
      },
      {
        id: "Yasmin_Hinano_Yamashita",
        ja: "山下 ヤスミン姫名乃",
        en: "Yasmin Hinano Yamashita"
      },
      {
        id: "Akane_Koyama",
        ja: "小山 茜",
        en: "Akane Koyama"
      },
            {
        id: "Yukihiko_Shinobu",
        ja: "シノブ ユキヒコ",
        en: "Yukihiko Shinobu"
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
        en: "Hiroaki Tsuneizumi"
      },
      {
        id: "Michitoshi_Tsubaki",
        ja: "椿 道智",
        en: "Michitoshi Tsubaki"
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
        en: "Meika Mizuno"
      },
      {
        id: "Yufei_Wu",
        ja: "武 雨菲",
        en: "Yufei Wu"
      },
      {
        id: "Naohiro_Sudo",
        ja: "須藤 均寛",
        en: "Naohiro Sudo"
      },
      {
        id: "Arata_Kokani",
        ja: "小谷 新太",
        en: "Arata Kokani"
      },
      {
        id: "Meika_Mizuno",
        ja: "水野 明香",
        en: "Meika Mizuno"
      },
      {
        id: "Keigo_Toda",
        ja: "戸田 圭吾",
        en: "Keigo Toda"
      },
      {
        id: "Kota_Murakami",
        ja: "村上 滉太",
        en: "Kota Murakami"
      },
      {
        id: "Ryouichi_Satou",
        ja: "佐藤 遼一",
        en: "Ryouichi Satou"
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
        id: "Maruse_Rikuto",
        ja: "丸㔟 陸斗",
        en: "Maruse Rikuto"
      },
      {
        id: "Sasaki_Rinji",
        ja: "佐々木 凛士",
        en: "Sasaki Rinji"
      },
      {
        id: "Kawaji_Kengo",
        ja: "河路 健吾",
        en: "Kawaji Kengo"
      },
      {
        id: "Fukaya_Taisei",
        ja: "深谷 太聖",
        en: "Fukaya Taisei"
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
        en: "Haruna Nohara"
      },
      {
        id: "Tadasuke_Koshimbo",
        ja: "光真 坊忠佑",
        en: "Tadasuke Koshimbo"
      },
      {
        id: "Gao_Jiaqi",
        ja: "コウ カキ",
        en: "Gao Jiaqi"
      },
      {
        id: "Yayoi_Okamoto",
        ja: "岡本弥生",
        en: "Yayoi Okamoto"
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
        en: "Sato Ryoichi"
      },
      {
        id: "Kishimoto_Aino",
        ja: "岸本 安維乃",
        en: "Kishimoto Aino"
      },
      {
        id: "Mikami_Hinata",
        ja: "三上 日向汰",
        en: "Mikami Hinata"
      },
      {
        id: "Hou_Yancheng",
        ja: "侯彦丞",
        en: "Hou Yancheng"
      },
      {
        id: "Yugo_Tamakia",
        ja: "田牧 悠吾",
        en: "Yugo Tamaki"
      },
      {
        id: "Hinako_Makita",
        ja: "牧田 陽奈子",
        en: "Hinako Makita"
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
        ja: "苗村健",
        en: "Takeshi Naemura"
      },
      {
        id: "Hidenori_Watanabe",
        ja: "渡邉英徳",
        en: "Hidenori Watanabe"
      },
      {
        id: "Yasuaki_Kakehi",
        ja: "筧康明",
        en: "Yasuaki Kakehi"
      },
      {
        id: "Daisuke_Kuramoto",
        ja: "倉本大資",
        en: "Daisuke Kuramoto"
      },
      {
        id: "Takafumi_Morita",
        ja: "森田崇文",
        en: "Takafumi Morita"
      },
      {
        id: "Koki_Sone",
        ja: "曽根光揮",
        en: "Koki Sone"
      },
      {
        id: "Shohei_Takei",
        ja: "武井祥平",
        en: "Shohei Takei"
      }
    ]
  }
];
