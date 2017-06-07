const shop = {
  id: 0,
  name: 'test',
};

const categories = {
  0: 'test0',
  1: 'test1',
  2: 'test2',
};

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
    categoryId: 2,
  },
  {
    id: 3,
    title: 'title3',
    price: 1200,
    isTaxIncluded: true,
    categoryId: 3,
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
