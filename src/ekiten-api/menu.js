const menus = [
  {
    id: 1,
    name: 'aaaaa',
    price: 5300,
    isTaxIncluded: true,
    numberOfPhoto: 10,
    hasDescription: true,
    isRecomendation: true,
    index: 0,
    category: 'カイロプラティック'
  },
  {
    id: 2,
    name: 'bbbbb',
    numberOfPhoto: 1,
    hasDescription: false,
    index: 1,
    category: 'カイロプラティック'
  },
  {
    id: 3,
    name: 'ccccc',
    numberOfPhoto: 1,
    hasDescription: false,
    index: 2,
    category: 'カイロプラティック'
  },
  {
    id: 4,
    name: 'ddddd',
    numberOfPhoto: 1,
    hasDescription: false,
    index: 3,
    category: 'カイロプラティック'
  },
  {
    id: 5,
    name: 'eeeee',
    numberOfPhoto: 1,
    hasDescription: false,
    index: 4,
    category: 'カイロプラティック'
  },
  {
    id: 6,
    name: 'test2',
    price: 5210,
    isTaxIncluded: true,
    numberOfPhoto: 1,
    hasDescription: false,
    index: 0,
    category: '整体'
  },
  {
    id: 7,
    name: 'test3',
    price: 3300,
    isTaxIncluded: false,
    numberOfPhoto: 1,
    hasDescription: true,
    index: 0,
    category: '骨盤矯正'
  }
];

export default {
  getMenus(shopId) {
    return new Promise((success, failure) => {
      success(menus);
    });
  },
  getDetailedMenu(menu) {
    return new Promise((success, failure) => {
      success(menu);
    });
  },
  updateMenuOrder(updateMenus) {
    return new Promise((success, failure) => {
      failure(new Error('メニュー順の変更に失敗しました。一度ページを更新してやり直してください。'));
    });
  },
  deleteMenu(menu) {
    return new Promise((success, failure) => {
      success();
      failure(new Error('メニューの削除に失敗しました。一度ページを更新してやり直してください。'));
    });
  }
};
