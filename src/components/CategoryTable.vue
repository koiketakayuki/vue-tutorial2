<template>
  <div>
    <snackbar :message="message" :open="hasInformation"></snackbar>
    <div class="panel_base">
      <div class="panel_content_base panel_content-around position-relative">
        <div class="panel_base mt_60">
          <div class="panel_content_base js_valid-group">
            <div class="box-scroll_side">
              <table class="grid_table_base js_shop_list">
                <tbody>
                  <tr>
                    <th>メニュー種別</th>
                    <th>登録件数</th>
                    <th>最終更新日時</th>
                    <th></th>
                  </tr>
                  <tr draggable="true" style="cursor: move;" v-for="category in categories" @dragstart="dragStart(category, $event)" @dragend="dragEnd($event)" @dragover.prevent @dragenter.prevent="dragEnter(category, $event)">
                    <td>{{ category.name }}</td>
                    <td>{{ countMenuByCategoryId(category.id) }}件</td>
                    <td></td>
                    <td>
                      <a href="#" @click.prevent="selectCategory(category.id)">
                        <i class="icon_base fa fa-edit"></i>編集
                      </a>
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
              <button class="button_base button-primary js_refine_search_submit js_click_loader" @click.prevent="onSortButtonClicked">
                <i class="icon_base fa fa-refresh"></i>並べ替えを適用</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snackbar from './Snackbar.vue';
import VIEW_MODE from '../store/view-mode';
import { sortBy } from 'lodash';

export default {
  computed: {
    categories() {
      return sortBy(this.$store.state.categories, c => c.index);
    },
    menuCounts() {
      return this.$store.getters.menuCounts;
    },
    message() {
      return this.$store.state.message;
    },
    hasInformation() {
      return this.$store.state.hasInformation;
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.$router.push({ path: categoryId.toString() });
      this.$store.commit('setCategoryId', categoryId);
    },
    countMenuByCategoryId(categoryId) {
      return this.menuCounts[categoryId] || 0;
    },
    dragStart(category, e) {
      this.draggingItem = category;
      e.target.style.opacity = 0.5;
    },
    dragEnd(e) {
      if (this.draggingItem) {
        e.target.style.opacity = 1;
        this.draggingItem = null;
      }
    },
    dragEnter(category, e) {
      if (this.draggingItem && category.index !== this.draggingItem.index) {
        const tempIndex = category.index;
        category.index = this.draggingItem.index
        this.draggingItem.index = tempIndex
      }
    },
    onSortButtonClicked() {
      this.$store.dispatch('updateMenuCategoryOrder', this.menus);
    },
  },
  components: {
    Snackbar,
  },
};
</script>
