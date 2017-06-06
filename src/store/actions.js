import { getShop, getCategories } from '../ekiten-api';


const actions = {
  fetchShop({ commit }, shopId) {
    getShop(shopId).then((shop) => {
      commit('receiveShop', shop);
    });
  },
  fetchCategories({ commit }, shopId) {
    getCategories(shopId).then((categories) => {
      commit('receiveCategories', categories);
    });
  },
};

export default actions;
