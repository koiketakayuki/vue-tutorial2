<template>
  <div>
    <div class="panel_base">
      <div class="panel_content_base panel_content-around position-relative">
        <div class="fixed_block actions">
          <ul class="button_list">
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-sort"></i>並べ替え
              </a>
            </li>
          </ul>
        </div>
        <table class="grid_table_base js_shop_list mt_60">
          <tbody>
            <tr>
              <th>メニュー種別</th>
              <th>登録件数</th>
              <th>最終更新日時</th>
              <th></th>
            </tr>
            <tr
              v-for="category in categories"
              class="js_area_link">
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
</template>

<script>
import { sortBy } from 'lodash';

export default {
  computed: {
    categories() {
      return sortBy(this.$store.state.categories, c => c.index);
    },
    menuCounts() {
      return this.$store.getters.menuCounts;
    }
  },
  methods: {
    selectCategory(categoryId) {
      this.$router.push({ path: categoryId.toString() });
      this.$store.commit('setCategoryId', categoryId);
    },
    countMenuByCategoryId(categoryId) {
      return this.menuCounts[categoryId] || 0;
    },
  },
};
</script>
