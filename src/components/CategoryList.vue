<template>
  <div>
    <h2>CategoryList</h2>
    <table>
      <tr>
        <th>カテゴリ名</th>
      </tr>
      <tr
        v-for="(category, id) in categories"
        @click="selectCategory(id)">
        <td>{{ category }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.$router.push({ path: this.props.shopId , params: { categoryId } })
    }
  },
};
</script>
