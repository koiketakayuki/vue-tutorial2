<template>
  <div>
    <menu-table-action-panel></menu-table-action-panel>
    <div v-if="menuCount > 0" class="panel_base">
      <div class="panel_content_base panel_content-around">
        <div class="fixed_block menu_count_container">
          全
          <span class="menu_count">{{ menuCount }}</span>
          <span class="sub_text">件</span>
        </div>
        <div class="panel_base">
          <div class="panel_content_base js_valid-group">
            <div class="box-scroll_side">
              <table class="grid_table_base js_shop_list">
                <tbody>
                  <tr>
                    <th style="width: 120px;">ID</th>
                    <th style="width: 90px;">公開</th>
                    <th>PU</th>
                    <th>タイトル</th>
                    <th style="width: 190px">金額</th>
                    <th>概要</th>
                    <th style="width: 90px;"></th>
                  </tr>
                  <tr draggable="true" style="cursor: move;" v-for="menu in menus" @dragstart="dragStart(menu, $event)" @dragend="dragEnd($event)" @dragover.prevent @dragenter.prevent="dragEnter(menu, $event)">
                    <td>
                      <div>{{ menu.id }}</div>
                      <div>
                        <a href="#">
                          <i class="icon_base fa fa-upload"></i>写真変更
                        </a>
                      </div>
                    </td>
                    <td>
                      <label class="radio_base">
                        <input type="radio" :name="menu.id" value="true" :checked="menu.isTaxIncluded">
                        <i class="input_icon"></i>
                        <span class="text">公開</span>
                      </label>
                      <label class="radio_base">
                        <input type="radio" :name="menu.id" value="false" :checked="!menu.isTaxIncluded">
                        <i class="input_icon"></i>
                        <span class="text">非公開</span>
                      </label>
                    </td>
                    <td>
                      <label class="checkbox_base">
                        <input type="checkbox" name="pid[]" value="2932640" class="js_checkbox_children valid-required">
                        <i class="input_icon"></i>
                      </label>
                    </td>
                    <td>
                      <input type="text" placeholder="タイトル" :value="menu.title" class="input_base input-inline" style="min-width: 200px; width: 100%;">
                    </td>
                    <td>
                      <div class="column_base">
                        <div>
                          <label class="radio_base">
                            <input type="radio" :name="menu.id + 100" value="true" :checked="menu.isTaxIncluded">
                            <i class="input_icon"></i>
                            <span class="text">税込</span>
                          </label>
                          <label class="radio_base">
                            <input type="radio" :name="menu.id + 100" value="false" :checked="!menu.isTaxIncluded">
                            <i class="input_icon"></i>
                            <span class="text">税抜き</span>
                          </label>
                        </div>
                        <div class="col">
                          <input type="text" placeholder="価格" :value="menu.price" class="input_base input-inline mr05" style="width: 80px">円
                        </div>
                      </div>
                    </td>
                    <td>
                      <textarea class="input_base" style="min-width: 350px;">{{ menu.description }}</textarea>
                    </td>
                    <td>
                      <ul>
                        <li class="aL">
                          <a href="#">
                            <i class="icon_base fa fa-eye"></i>閲覧
                          </a>
                        </li>
                        <li class="aL mt05">
                          <a href="#">
                            <i class="icon_base fa fa-edit"></i>編集
                          </a>
                        </li>
                        <li class="aL mt05">
                          <a href="#">
                            <i class="icon_base fa fa-clipboard"></i>コピー
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="submit_utility">
          <ul class="button_list">
            <li>
              <button type="submit" class="button_base button-primary js_refine_search_submit js_click_loader">
                <i class="icon_base fa fa-refresh"></i>一括編集</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p v-else>このメニュー種別のメニューはまだありません。</p>
    <div v-if="isCreateOrEditMode" class="overlay">
      <menu-form></menu-form>
    </div>
  </div>
</template>

<script>
import MenuTableActionPanel from './MenuTableActionPanel.vue';
import MenuForm from './MenuForm.vue';
import VIEW_MODE from '../store/view-mode';
import { sortBy } from 'lodash';

export default {
  computed: {
    selectedCategoryId() {
      return this.$store.state.selectedCategoryId;
    },
    menus() {
      const menus = this.$store.state.menus.filter(m => m.categoryId == this.selectedCategoryId);
      return sortBy(menus, m => m.index);
    },
    menuCount() {
      return this.menus.length;
    },
    isCreateOrEditMode() {
      return (this.$store.state.viewMode === VIEW_MODE.CREATE_MODE) || (this.$store.state.viewMode === VIEW_MODE.EDIT_MODE);
    },
  },
  methods: {
    onEditButtonClick() {
      this.$store.commit('goToEditMode');
    },
    dragStart(menu, e) {
      this.draggingItem = menu;
      e.target.style.opacity = 0.5;
    },
    dragEnd(e) {
      if (this.draggingItem) {
        e.target.style.opacity = 1;
        this.draggingItem = null;
      }
    },
    dragEnter(menu, e) {
      if (this.draggingItem && menu.index !== this.draggingItem.index) {
        const tempIndex = menu.index;
        menu.index = this.draggingItem.index
        this.draggingItem.index = tempIndex
      }
    },
  },
  filters: {
    formatPrice(price) {
      let result = price.toString();
      const pattern = /(\d+)(\d{3})/;
      while (pattern.test(result)) {
        result = result.replace(pattern, "$1,$2");
      }
      return result;
    }
  },
  components: {
    MenuTableActionPanel,
    MenuForm,
  }
}
</script>

<style lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}

.menu_count_container {
  text-align: right;
  padding-right: 40px;
}

.menu_count {
  font-size: 26px;
  font-weight: bold;
  margin-right: 3px;
  margin-left: 3px;
}
</style>