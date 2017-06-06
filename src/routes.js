import CategoryList from './components/CategoryList.vue';
import MenuList from './components/MenuList.vue';

const routes = [
  { path: '/:shopId/menu', component: MenuList },
  { path: '/:shopId/', component: CategoryList },
];

export default routes;
