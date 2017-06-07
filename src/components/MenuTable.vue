<template>
  <div>
    <menu-table-action-panel></menu-table-action-panel>
    <div class="panel_base">
      <div class="panel_content_base panel_content-around">
        <div class="fixed_block menu_count_container">
          全<span class="menu_count">{{ menuCount }}</span><span class="sub_text">件</span>
        </div>
        <div class="panel_base">
          <div class="panel_content_base js_valid-group">
            <div class="box-scroll_side">
              <table class="grid_table_base js_shop_list">
                <tbody>
                  <tr>
                    <th>掲載</th>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>金額</th>
                    <th>概要</th>
                    <th></th>
                  </tr>
                  <tr v-for="menu in menus" class="js_area_link">
                    <td class="js_area_link_exception width_20">
                      <label class="checkbox_base">
                        <input type="checkbox" name="sid[]" value="2932640" class="js_checkbox_children valid-required">
                        <i class="input_icon"></i>
                      </label>
                    </td>
                    <td>{{ menu.id }}</td>
                    <td>{{ menu.title }}</td>
                    <td class="width_20">{{ menu.price | formatPrice }}円<span v-if="menu.isTaxIncluded">（税込）</span></td>
                    <td>{{ menu.content }}</td>
                    <td class="width_50">
                      <a href="">
                        <i class="icon_base fa fa-eye"></i>閲覧
                      </a>/
                      <a href="">
                        <i class="icon_base fa fa-edit"></i>編集
                      </a>/
                      <a href="">
                        <i class="icon_base fa fa-clipboard"></i>コピー
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
    selectedCategoryId() {
      return this.$store.state.selectedCategoryId;
    },
    menus() {
      return this.$store.state.menus.filter(m => m.categoryId == this.selectedCategoryId);
    },
    menuCount() {
      return this.menus.length;
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

<style>
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

.width_50 {
  width: 50px;
}

.width_20 {
  width: 20px;
}
</style>