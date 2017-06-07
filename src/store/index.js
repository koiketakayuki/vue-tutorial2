import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shop: null,
    selectedCategoryId: null,
    categories: [],
    menus: [],
  },
  mutations,
  actions,
});

export default store;
