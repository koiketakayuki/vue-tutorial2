import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
