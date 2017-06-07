<template>
  <div>
    <breadcrumbs></breadcrumbs>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './components/Breadcrumbs.vue';

export default {
  components: {
    Breadcrumbs,
  },
  created() {
    const shopId = this.$route.params.shopId;
    const selectedCategoryId = this.$route.params.categoryId;

    this.$store.dispatch('fetchShop', shopId);
    this.$store.dispatch('fetchCategories', shopId);
    this.$store.dispatch('fetchMenus', shopId);

    if (selectedCategoryId !== null) {
      this.$store.commit('setCategoryId', selectedCategoryId);
    }
  },
  updated() {
    console.log("test");
  },
};
</script>

<style>
.container {
  margin: 30px 50px;
}
</style>