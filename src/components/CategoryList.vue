<template>
  <table>
    <tr><th>カテゴリ名</th></tr>
    <tr v-for="category in categories">
      <td>{{ category }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.categories;
    },
  },
};
</script>
