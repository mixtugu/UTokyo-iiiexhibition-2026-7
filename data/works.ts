export type Work = {
  id: string;
  image?: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  memberIds?: string[];
};

export const works: Work[] = [
  {
    id: "work1",
    image: "/works/breathing_currents.jpg",
    title: { ja: "Breathing Currents", en: "Breathing Currents" },
    description: {
      ja: "海中の僅かな流れに呼応しながら姿を変えるウミウシから着想を得た作品。空気が送り込まれる度、半透明の膜が編み地の隙間から現れ、新たな起伏や模様を生み出す。鑑賞者が表面に触れることで、その表情は絶えず変化する。見ることと触れることを通して、流れのなかを揺蕩い続ける生命の気配を立ち上げる。",
      en: "Inspired by nudibranchs that continuously reshape themselves in response to subtle underwater currents, this work explores a living state of transformation. As air flows into the structure, a translucent skin emerges through openings in the knitted surface, creating new textures and patterns. Through touch, the surface changes further, responding to each gesture of the viewer. By engaging both sight and touch, the work evokes the subtle presence of life in constant flux.",
    },
    memberIds: ["Meika_Mizuno", "Yufei_Wu"],
  },
  {
    id: "work2",
    image: "/works/echoes_like_waves.jpg",
    title: { ja: "残響は波のように", en: "Echoes Like Waves" },
    description: {
      ja: "戦後の経済復興と社会変容のなかで、日本の音楽文化は発展し、アジアにも影響を与えた。米軍基地文化と港町文化が交差する神奈川では、多様な音楽と人々の記憶が重なり、独自の音楽文化が育まれた。\n\n本作品は、神奈川で育った二人の音楽家を手がかりに、音楽と記憶の波紋を通して、地域に刻まれた歴史の残響をたどる。",
      en: "In the midst of postwar economic recovery and social transformation, Japan’s music culture developed and became influential across Asia. In Kanagawa, where U.S. military base culture intersected with port-city culture, diverse musical traditions and personal memories intertwined, giving rise to a distinctive local music culture.\n\nThrough the stories of two musicians raised in Kanagawa, this work traces the historical echoes embedded in the region through the ripples of music and memory.",
    },
    memberIds: ["Gao_Jiaqi"],
  },
  {
    id: "work3",
    image: "/works/fashitecture.jpg",
    title: { ja: "空間を纏う", en: "Fashitecture" },
    description: {
      ja: "場と衣服の境界を曖昧にすることで、\n身体は輪郭を失い、空間へと染み出していく。\nそこで 人は、ただ在るのではなく、\n空間にただよい、ゆれ、とけこんでいく。\nきっと、彼我の境界なんてものは、\n思っているよりもずっと曖昧なものなのでしょうね。",
      en: "By blurring the boundary between space and clothing, the body loses its outline and seeps into its surroundings.\nHere, people do not simply exist—they drift, they sway, they dissolve into space.\nPerhaps the line between self and other is far more uncertain than we imagine.",
    },
    memberIds: ["Yugo_Tamakia", "Arata_Kotani"],
  },
  {
    id: "work4",
    image: "/works/memory_landscapes.jpg",
    title: { ja: "記憶の風景を歩くVR", en: "Memory Landscapes" },
    description: {
      ja: "記憶をテーマにしたVRの中で思い出の中をたゆたう。懐かしさを手がかりに、鑑賞者が過去の記憶を想起し、誰もが共有する原体験や他者の記憶を追体験できるかもしれない。体験があたたかな感情を生み、自分の原点を思い出させるような、精神的にかえる場所をつくることを目指す試みである。",
      en: "Drifting through memories within a VR experience themed around shared and personal memory.Using nostalgia as a guide, this work may allow viewers to recall memories of the past and re-experience primal memories shared by many, as well as memories held by others. Through this experience, it seeks to evoke a warm emotional response and create a place to which one can return spiritually, as if quietly reconnecting with one’s own origins.",
    },
    memberIds: [
      "Haruna_Nohara",
      "Hou_Yancheng",
      "Ryoichi_Sato",
      "Keigo_Toda",
      "Seojung_Lee",
    ],
  },
  {
    id: "work5",
    image: "/works/ai_artistic_integration.jpg",
    title: { ja: "AI：Artistic Integration", en: "AI：Artistic Integration" },
    description: {
      ja: "布に覆われ、正体を見せない「モチーフ」あなたはその中身を想像し、傍らのホワイトボードに線を描き加える\n\n描いた軌跡は他者に侵食され、混ざり合う\n\n正解のない問いに向かって、人々の意識が不確かに「たゆたう」時間の記録\nそこに、あなたは何を見出すか",
      en: "A form shrouded in cloth, its true shape concealed.You imagine what’s inside, adding a line to the whiteboard beside you.\n\nThe lines you draw will be disrupted by others and blend together.\nIt is a record of time, in which people’s consciousness “tayutau (drifts)” uncertainly toward a correct answer that does not (even) exist.\nWhat do you see beneath this cloth?",
    },
    memberIds: ["Hinata_Mikami", "Taisei_Fukaya"],
  },
  {
    id: "work6",
    image: "/works/microorganisms.jpg",
    title: {
      ja: "微生物の見過ごされた美の再発見",
      en: "Rediscovering the Overlooked Beauty of Microorganisms",
    },
    description: {
      ja: "あなたは、微生物たちの美に目を向けたことがあるだろうか。本展示では、肉眼で見ることができず、普段見過ごされることが多い微生物たちの美やデザインを追求する。\nAR技術とデジタル万華鏡を用いて、実際に東京大学本郷キャンパス内に生息する微生物たちと来場者によるバイオアート制作を試みる。",
      en: "Have you ever paid attention to the beauty of microorganisms? This exhibition explores the aesthetics and forms of microorganisms—life forms too small to be seen with the naked eye and often overlooked in our daily lives.\nUsing AR technology and a digital kaleidoscope, this exhibition invites visitors to create bio‑art in collaboration with microorganisms inhabiting the University of Tokyo’s Hongo campus.",
    },
    memberIds: ["Taisei_Fukaya"],
  },
  {
    id: "work7",
    image: "/works/mollusk.png",
    title: { ja: "Mollusk", en: "Mollusk" },
    description: {
      ja: "私たちはつねに何かに触れている。\nその感覚は日常の背景に消えていく。\n本作品では、形を定めず水中で蠢くタコの腕が、鑑賞者の手に巻きつく。皮膚を這い、手を囲い込むその異物の触覚は、普段は意識の外に沈んでいる感覚を強く呼び覚ます。\nそれは心地よさではなく、背景化していた身体の輪郭を取り戻す瞬間となる。",
      en: "We are always touching something.\nYet these sensations fade into the background of everyday life.\nIn this work, an octopus arm, writhing underwater without a fixed form, wraps around the viewer’s hand. As it crawls over the skin and encloses the hand, its alien tactility forcefully awakens sensations that usually sink beyond our awareness.\nIt is not comfort, but a moment in which the body’s backgrounded contours return.",
    },
    memberIds: ["Ryuhei_Sugimoto"],
  },
  {
    id: "work8",
    title: { ja: "可聴化される遺伝子", en: "Audible Genes" },
    description: {
      ja: "DNA 配列のデータを、実行可能な命令セットとして再定義した上で、音楽理論に基づく音響に即時変換し、自己の生命情報を音楽作品として体験するためのシステム。コンプレックスである自らの身体を美しい音楽に変換することで、克服しようとする試み。",
      en: "This system redefines DNA sequence data as an executable set of instructions, translating it instantly into sound based on music theory, and allows users to experience their own biological information as a musical composition. It is an attempt to overcome my body—which is perceived as a source of complexity—by transforming it into beautiful music.",
    },
    memberIds: [
      "Yayoi_Okamoto",
      "Yuki_Kamon",
      "Tadasuke_Koshimbo",
      "Hiroaki_Tsuneizumi",
    ],
  },
  {
    id: "work9",
    title: { ja: "手のひらで踊らされる", en: "Danced in the Palm of a Hand" },
    description: {
      ja: "私たちが自らの意志で決定している（と思い込んでいる）事柄は、遺伝や環境、アルゴリズム等の外部要因に無意識に影響されている。\n\n本作は、音楽や空間が行動に与える影響を「踊り」を通して体験し、自由意志とは何かを問いかけるインスタレーションだ。\n\n私たちは踊っているのだろうか、それとも踊らされているのだろうか。",
      en: "What we believe we choose of our own free will is, in reality, unconsciously influenced by external factors such as genetics, environment, and algorithms.\n\nThrough the medium of \"dance,\" this installation allows us to experience how music and space affect our behavior, questioning the nature of free will.\n\nAre we dancing, or are we being danced?",
    },
    memberIds: ["Haruta_Ogawa", "Michael_Wong_Kam", "Tadasuke_Koshimbo"],
  },
  {
    id: "work10",
    title: { ja: "paw walk", en: "paw walk" },
    description: {
      ja: "犬が肉球で受ける歩行感覚を、人間の手のひらへ授ける。\n触覚体験と、犬視点での映像が、見慣れた街の風景を「あしもと３０センチ」から捉え直す。\nそして、犬の身体を通して歩くことで、私たち自身の身体感覚を再発見するとともに、都市環境は、誰にとっての「快適さ」として設計されてきたのかを問いかける。",
      en: "This work transfers the sensation of walking through a dog's paw pads into the human palm. Combining a tactile experience with video from a dog's perspective, it invites participants to re-experience familiar urban landscapes from just 30 centimeters above the ground. By walking through the body of a dog, we not only rediscover our own embodied sense of perception, but also question for whom urban environments have been designed as spaces of “comfort.”",
    },
    memberIds: ["Hinako_Makita"],
  },
];
