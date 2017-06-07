<template>
  <div class="breadcrumbs breadcrumbs-adjust_page">
    <ol v-if="isCategorySelected">
      <li>カテゴリ</li>
      <li><strong>メニュー一覧</strong></li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    isCategorySelected() {
      return this.$store.state.selectedCategoryId !== null;
    },
  },
};
</script>