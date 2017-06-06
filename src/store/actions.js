const EkitenAPI = require('../ekiten-api');

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
};

export default actions;
