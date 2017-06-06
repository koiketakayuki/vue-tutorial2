export default {
  goToEditMode(state, menu) {
    state.targetMenu = menu;
    state.isEditMode = true;
    state.isDeleteConfimationMode = false;
    document.body.className = 'no-scroll';
  },
  goToDeleteConfirmationMode(state, menu) {
    state.targetMenu = menu;
    state.isEditMode = false;
    state.isDeleteConfimationMode = true;
    document.body.className = 'no-scroll';
  },
  goToMenuList(state) {
    state.targetMenu = null;
    state.isEditMode = false;
    state.isDeleteConfimationMode = false;
    document.body.className = '';
  },
  receiveShop(state, shop) {
    state.shop = shop;
  },
  receiveMenus(state, menus) {
    state.menus = menus;
  },
  deleteMenu(state, menu) {
    const index = state.menus.findIndex(m => m.id === menu.id);

    if (index >= 0) {
      state.menus.splice(index, 1);
    }
  },
  displayInformation(state, information) {
    state.information = information;
    state.hasInformation = true;
  },
  closeInformation(state) {
    state.hasInformation = false;
  }
};
