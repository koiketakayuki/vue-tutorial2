import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import { countBy } from 'lodash';
import VIEW_MODE from './view-mode';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shop: null,
    selectedCategoryId: null,
    categories: [],
    menus: [],
    viewMode: VIEW_MODE.LIST_MODE,
    message: "",
    hasInformation: false,
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
