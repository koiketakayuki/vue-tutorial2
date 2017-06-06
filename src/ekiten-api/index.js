const shop = {
  id: 0,
  name: 'test',
};

const categories = ['test'];

const ekitenAPI = {
  getShop() {
    return new Promise((success) => {
      success(shop);
    });
  },
  getCategories() {
    return new Promise((success) => {
      success(categories);
    });
  },
};

export default ekitenAPI;
