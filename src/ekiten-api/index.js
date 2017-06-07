const shop = {
  id: 0,
  name: 'test',
};

const categories = [
  {
    id: 0,
    name: '瘦身',
    index: 0,
  },
  {
    id: 1,
    name: 'プライダルエステ',
    index: 1,
  },
  {
    id: 2,
    name: 'ほぐし・マッサージ',
    index: 2,
  },
  {
    id: 3,
    name: 'アロママッサージ',
    index: 3,
  },
  {
    id: 4,
    name: '指圧',
    index: 4,
  },
  {
    id: 5,
    name: '足踏み・足圧・フーレセラピー',
    index: 5,
  },
  {
    id: 6,
    name: 'リンパマッサージ・リンパドレナージュ',
    index: 6,
  },
  {
    id: 7,
    name: 'タイ古式',
    index: 7,
  },
  {
    id: 8,
    name: '中国式・台湾式・推拿',
    index: 8,
  },
  {
    id: 9,
    name: 'アーユルヴェーダ',
    index: 9,
  },
  {
    id: 10,
    name: 'バリニーズ',
    index: 10,
  },
  {
    id: 11,
    name: 'ロミロミ',
    index: 11,
  },
  {
    id: 12,
    name: 'スウェディッシュ',
    index: 12,
  },
  {
    id: 13,
    name: 'ホットストーン',
    index: 13,
  },
  {
    id: 14,
    name: 'ヘッドスパ',
    index: 14,
  },
  {
    id: 15,
    name: 'ボディケア',
    index: 15,
  },
  {
    id: 16,
    name: 'ボディトリートメント',
    index: 16,
  },
  {
    id: 17,
    name: 'あかすり',
    index: 17,
  },
  {
    id: 18,
    name: 'フットケア',
    index: 18,
  },
  {
    id: 19,
    name: 'リフレクソロジー(足裏・足つぼ)',
    index: 19,
  },
  {
    id: 20,
    name: 'ストレッチ',
    index: 20,
  },
  {
    id: 21,
    name: 'ヨガ',
    index: 21,
  },
  {
    id: 22,
    name: '岩盤浴・溶岩浴',
    index: 22,
  },
  {
    id: 23,
    name: 'よもぎ蒸し・ハーブテント',
    index: 23,
  },
  {
    id: 24,
    name: 'ゲルマニウム温浴',
    index: 24,
  },
  {
    id: 25,
    name: '酸素カプセル・酸素バー',
    index: 25,
  },
  {
    id: 26,
    name: 'フェイシャルケア',
    index: 26,
  },
  {
    id: 27,
    name: 'ワキ脱毛',
    index: 27,
  },
  {
    id: 28,
    name: '全身脱毛',
    index: 28,
  },
  {
    id: 29,
    name: 'VIO脱毛',
    index: 29,
  },
  {
    id: 30,
    name: 'その他脱毛',
    index: 30,
  },
  {
    id: 31,
    name: 'モンテセラピー',
    index: 31,
  },
  {
    id: 32,
    name: 'カッピング',
    index: 32,
  },
  {
    id: 33,
    name: '脂肪もみほぐし',
    index: 33,
  },
  {
    id: 34,
    name: 'その他',
    index: 34,
  },
  {
    id: 35,
    name: '加圧トレーニング',
    index: 35,
  },
  {
    id: 36,
    name: 'ピラティス',
    index: 36,
  },
  {
    id: 37,
    name: 'パーソナルトレーニング',
    index: 37,
  },
  {
    id: 38,
    name: '食事指導',
    index: 38,
  },
  {
    id: 39,
    name: '酵素風呂',
    index: 39,
  },
  {
    id: 40,
    name: 'オステオパシー',
    index: 40,
  },
  {
    id: 41,
    name: 'コルギ',
    index: 41,
  },
  {
    id: 42,
    name: 'ハンドリフレクソロジ',
    index: 42,
  },
  {
    id: 43,
    name: 'かっさ',
    index: 43,
  },
  {
    id: 44,
    name: '腸セラピー',
    index: 44,
  },
  {
    id: 45,
    name: '筋膜リリース',
    index: 45,
  },
  {
    id: 46,
    name: '耳つぼ',
    index: 46,
  },
  {
    id: 47,
    name: '肩甲骨はがし',
    index: 47,
  },
  {
    id: 48,
    name: 'スポーツマッサージ・スポーツ整体',
    index: 48,
  },
  {
    id: 49,
    name: '角質ケア',
    index: 49,
  },
];

const menus = [
  {
    id: 0,
    title: 'title0',
    price: 1200,
    isTaxIncluded: true,
    categoryId: 0,
  },
  {
    id: 1,
    title: 'title1',
    price: 1200,
    isTaxIncluded: true,
    categoryId: 1,
  },
  {
    id: 2,
    title: 'title2',
    price: 1200,
    isTaxIncluded: false,
    categoryId: 1,
  },
  {
    id: 3,
    title: 'title3',
    price: 1200,
    isTaxIncluded: true,
    categoryId: 0,
  },
];

const ekitenAPI = {
  getShop(shopId) {
    return new Promise((success) => {
      success(shop);
    });
  },
  getCategories(shopId) {
    return new Promise((success) => {
      success(categories);
    });
  },
  getMenus(shopId) {
    return new Promise((success) => {
      success(menus);
    });
  }
};

export default ekitenAPI;
