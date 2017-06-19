import VIEW_MODE from './view-mode';

const mutations = {
  goToListMode(state) {
    state.viewMode = VIEW_MODE.LIST_MODE;
  },
  goToEditMode(state) {
    state.viewMode = VIEW_MODE.EDIT_MODE;
  },
  goToBulkEditMode(state) {
    state.viewMode = VIEW_MODE.BULK_EDIT_MODE;
  },
  goToCreateMode(state) {
    state.viewMode = VIEW_MODE.CREATE_MODE;
  },
  goToSortMode(state) {
    state.viewMode = VIEW_MODE.SORT_MODE;
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
  setCategoryId(state, categoryId) {
    state.selectedCategoryId = categoryId;
  },
  displayInformation(state, message) {
    state.message = message;
    state.hasInformation = true;
  },
  closeInformation(state,) {
    state.hasInformation = false;
  },
};

export default mutations;
