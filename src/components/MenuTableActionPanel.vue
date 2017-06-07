<template>
  <div class="panel_base js_list_utility">
    <div class="panel_content_base panel_content-around position-relative">
      <div class="media_base">
        <div class="fixed_block">
          選択中のカテゴリ：
          <span>
            <label class="select_base">
              <select v-model="selectedCategoryId">
                <option
                  v-for="category in categories"
                  :value="category.id">{{ category.name }}({{ countMenuByCategoryId(category.id) }})</option>
              </select>
            </label>
          </span>
        </div>
        <div class="fixed_block actions">
          <ul class="button_list">
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-refresh"></i>一括編集
              </a>
            </li>
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-sort"></i>並べ替え
              </a>
            </li>
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-plus"></i>メニュー作成
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sortBy } from 'lodash';

export default {
  computed: {
    selectedCategoryId: {
      get() {
        return this.$store.state.selectedCategoryId;
      },
      set: function (categoryId) {
        this.$router.push({ path: categoryId.toString()});
        this.$store.commit('setCategoryId', categoryId);
      },
    },
    categories() {
      return sortBy(this.$store.state.categories, c => c.index);
    },
  },
  methods: {
    countMenuByCategoryId(categoryId) {
      return this.$store.getters.menuCounts[categoryId] || 0;
    },
  },
};
</script>
