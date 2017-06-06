const Vue = require('vue');
const Vuex = require('vuex');
const mutations = require('./mutations');
const actions = require('./actions');

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menus: [],
    targetMenu: null,
    isEditMode: false,
    isDeleteConfimationMode: false,
    hasInformation: false,
    information: null,
  },
  mutations,
  actions,
});

export default store;
