<template>
  <div>
    <menu-list-action-panel></menu-list-action-panel>
    <div class="panel_base">
      <div class="panel_content_base js_valid-group">
        <div class="box-scroll_side">
          <table class="grid_table_base js_shop_list">
            <tbody>
              <tr>
                <th><label class="checkbox_base"><input type="checkbox" class="js_all_check" data-check-target=".js_checkbox_children"><i class="input_icon"></i></label></th>      <th>&nbsp;</th>
                <th>関係1</th>
              </tr>
              <tr class="js_area_link">
                <td class="js_area_link_exception"><label class="checkbox_base"><input type="checkbox" name="sid[]" value="2932640" class="js_checkbox_children valid-required"><i class="input_icon"></i></label></td>      <td><a href="/support/shop/index.php?sid=2932640" class="js_click_loader js_area_link_target"><i class="icon_base fa fa-edit"></i>編集</a></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuListActionPanel from './MenuListActionPanel.vue';

export default {
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory;
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
  components: {
    MenuListActionPanel,
  }
}
</script>
