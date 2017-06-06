import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menus: [],
    targetMenu: null,
    isEditMode: false,
    isDeleteConfimationMode: false,
    hasInformation: false,
    information: null
  },
  mutations,
  actions
});

export default store;
