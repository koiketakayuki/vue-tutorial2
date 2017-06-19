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
    EkitenAPI.getMenus(shopId).then((menus) => {
      commit('receiveMenus', menus);
    });
  },
  updateMenuCategoryOrder({ commit }, menuCategories) {
    setTimeout(() => {
      commit('displayInformation', 'メニューを並べ替えました');

      setTimeout(() => {
        commit('closeInformation');
      }, 3000);
    }, 800);
  },
};

export default actions;
