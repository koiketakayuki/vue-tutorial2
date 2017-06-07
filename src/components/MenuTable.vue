<template>
  <div>
    <menu-table-action-panel></menu-table-action-panel>
    <div class="panel_base">
      <div class="panel_content_base js_valid-group">
        <div class="box-scroll_side">
          <table class="grid_table_base js_shop_list">
            <tbody>
              <tr>
                <th>公開</th>
                <th></th>
                <th>タイトル</th>
                <th>金額</th>
                <th>概要</th>
              </tr>
              <tr v-for="menu in menus" class="js_area_link">
                <td class="js_area_link_exception">
                  <label class="checkbox_base">
                    <input type="checkbox" name="sid[]" value="2932640" class="js_checkbox_children valid-required">
                    <i class="input_icon"></i>
                  </label>
                </td>
                <td>
                  <a href="">
                    <i class="icon_base fa fa-edit"></i>編集
                  </a>
                </td>
                <td>{{ menu.title }}</td>
                <td>{{ menu.price | formatPrice }}円<span v-if="menu.isTaxIncluded">（税込）</span></td>
                <td>{{ menu.content }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuTableActionPanel from './MenuTableActionPanel.vue';
import MenuRow from './MenuRow.vue';

export default {
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategoryId;
    },
    menus() {
      return this.$store.state.menus;
    }
  },
  methods: {
    onEditButtonClick() {
      this.$store.commit('goToEditMode');
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
    MenuRow,
  }
}
</script>
