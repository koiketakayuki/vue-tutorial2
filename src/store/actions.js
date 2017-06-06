import EkitenAPI from '../ekiten-api';

const actions = {
  fetchShop({ commit }, shopId) {
    EkitenAPI.getShop(shopId).then((shop) => {
      commit('receiveShop', shop);
    });
  },
  fetchCategories({ commit }, shopId) {
    EkitenAPI.getCategories(shopId).then((categories) => {
      commit('receiveCategories', categories);
    });
  },
  fetchMenus({ commit }, shopId) {
    EkitenAPI.getCategories(shopId).then((menus) => {
      commit('receiveMenus', menus);
    });
  },
};

export default actions;
