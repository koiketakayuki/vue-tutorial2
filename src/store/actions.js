import ShopAPI from '../ekiten-api/shop';
import MenuAPI from '../ekiten-api/menu';

export default {
  getShop({ commit }, shopId) {
    return ShopAPI.getShop(shopId).then(shop => commit('receiveShop', shop));
  },
  getMenus({ commit }, shopId) {
    return MenuAPI.getMenus(shopId).then(menus => commit('receiveMenus', menus));
  },
  getDetailedMenu(targetMenu) {
    return MenuAPI.getDetailedMenu(targetMenu);
  },
  deleteMenu({ commit }, targetMenu) {
    commit('goToMenuList');
    return MenuAPI
      .deleteMenu(targetMenu)
      .then(() => {
        /* 削除結果をstateに反映 */
        commit('deleteMenu', targetMenu);
        /* 削除成功のメッセージを表示 */
        commit('displayInformation', 'メニューを削除しました');
      })
      .catch(e => {/* 失敗したらメッセージを表示 */
        commit('displayInformation', e.message);
      });
  },
  updateMenuOrder({ commit }, menus ) {
    return MenuAPI
      .updateMenuOrder(menus)/* うまくアップデートできたら何もしない */
      .catch(e => {/* 失敗したらメッセージを表示 */
        commit('displayInformation', e.message);
      });
  },
  saveMenu() {

  }
};
