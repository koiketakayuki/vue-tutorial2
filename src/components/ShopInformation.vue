<template>
  <div>
    <div class="shop-information border">
        <h2>ShopInformation</h2>
        <div v-if="shop">
        <p>{{ shop.name }}</p>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    const shopId = this.shopId;

    if (shopId) {
      this.$store.dispatch('fetchShop', shopId);
      this.$store.dispatch('fetchCategories', shopId);
      this.$store.dispatch('fetchMenus', shopId);
    }
  },
  computed: {
    shop() {
      return this.$store.state.shop;
    },
  },
  props: {
    shopId: {
      type: Number,
      required: true,
    }
  },
};
</script>

<style>
.shop-information {
  width: 100%;
}
</style>
