<template>
  <div class="breadcrumbs breadcrumbs-adjust_page">
    <ol v-if="isCategorySelected">
      <li><a href="#" @click.prevent="onClick">メニュー種別一覧</a></li>
      <li><strong>メニュー一覧</strong></li>
    </ol>
    <ol v-else>
      <li>メニュー種別一覧</li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    isCategorySelected() {
      return this.$store.state.selectedCategoryId !== null && this.$store.state.selectedCategoryId !== undefined;
    },
  },
  methods: {
    onClick() {
      this.$router.push({ path: '/' + this.$store.state.shop.id + '/' });
      this.$store.commit('setCategoryId', null);
    },
  },
};
</script>