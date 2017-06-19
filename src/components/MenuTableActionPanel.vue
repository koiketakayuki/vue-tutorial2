<template>
  <div class="panel_base js_list_utility">
    <div class="panel_content_base panel_content-around position-relative">
      <div class="media_base flex">
        <div class="fixed_block">
          <span>
            <label class="select_base">
              <select v-model="selectedCategoryId">
                <option v-for="category in categories" :value="category.id">{{ category.name }}({{ countMenuByCategoryId(category.id) }})</option>
              </select>
            </label>
          </span>
        </div>
        <div>
          <a href="#" class="button_base width_200" @click.prevent="goToCreateMode">
            <i class="icon_base fa fa-plus"></i>メニュー作成
          </a>
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
        this.$router.push({ path: categoryId.toString() });
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
    goToCreateMode() {
      return this.$store.commit('goToCreateMode');
    },
  },
};
</script>

<style>
.width_200 {
  width: 200px;
}

.flex {
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
