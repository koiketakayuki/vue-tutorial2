<template>
  <div>
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store';
import MenuBar from './components/MenuBar.vue';

export default {
  store,
  components: {
    MenuBar,
  },
};
</script>
