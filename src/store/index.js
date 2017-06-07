import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import { countBy } from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shop: null,
    selectedCategoryId: null,
    categories: [],
    menus: [],
  },
  getters: {
    menuCounts(state) {
      return countBy(state.menus, 'categoryId');
    },
  },
  mutations,
  actions,
});

export default store;
