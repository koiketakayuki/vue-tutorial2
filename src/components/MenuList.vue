<template>
  <div class="border">
    <h2>MenuList</h2>
    <table>
      <tr>
        <th>タイトル</th>
        <th></th>
      </tr>
      <tr v-for="menu in menus">
        <td>{{ menu.title }}</td>
        <td>
          <button @click="onEditButtonClick">編集</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory;
    },
    menus() {
      return this.$store.state.menus;
    }
  },
  methods: {
    onEditButtonClick() {
      this.$store.commit('goToEditMode');
    },
  },
}
</script>
