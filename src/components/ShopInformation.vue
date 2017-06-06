<template>
  <div>
    <div class="shop-information border">
        <h2>ShopInformation</h2>
        <div v-if="shop">
        <p>{{ shop.name }}</p>
        </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shop() {
      return this.$store.state.shop;
    },
  },
  created() {
    this.initialize();
  },
  updated() {
    this.initialize();
  },
  initialize() {
    const shopId = this.$route.query.shopId;
    this.$store.dispatch('fetchShop', shopId);
    this.$store.dispatch('fetchCategories', shopId);
    this.$store.dispatch('fetchMenus', shopId);
  }
};
</script>

<style>
.shop-information {
  width: 100%;
}
</style>
