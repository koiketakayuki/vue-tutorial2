const Vue = require('vue');
const VueRouter = require('vue-router');
const App = require('./App.vue');
const routes = require('./routes');
const store = require('./store');

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
