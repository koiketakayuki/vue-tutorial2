import VIEW_MODE from './view-mode';

const mutations = {
  goToListMode() {
    state.viewMode = VIEW_MODE.LIST_MODE;
  },
  goToEditMode(state) {
    state.viewMode = VIEW_MODE.EDIT_MODE;
  },
  goToCreateMode(state) {
    state.viewMode = VIEW_MODE.CREATE_MODE;
  },
  goToOrderChangeMode(state) {
    state.viewMode = VIEW_MODE.CHANGE_ORDER_MODE;
  },
  receiveShop(state, shop) {
    state.shop = shop;
  },
  receiveCategories(state, categories) {
    state.categories = categories;
  },
  receiveMenus(state, menus) {
    state.menus = menus;
  },
};

export default mutations;
