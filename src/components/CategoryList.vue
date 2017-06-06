<template>
  <div class="border">
    <h2>CategoryList</h2>
    <table>
      <tr>
        <th>カテゴリ名</th>
      </tr>
      <tr v-for="(category, id) in categories">
        <td @click="selectCategory(id)">{{ category }}</td>
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
    selectCategory() {
      this.$router.push({ path: 'menu', query: { plan: 'private' }})
    }
  },
};
</script>
