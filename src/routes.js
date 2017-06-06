import ShopInformation from './components/ShopInformation.vue';
import MenuList from './components/MenuList.vue';
import CategoryList from './components/CategoryList.vue';

const routes = [
  {
    path: '/:shopId(\\d+)',
    component: ShopInformation,
    children: [
      {
        path: ':categoryId(\\d+)',
        component: MenuList,
      },
      {
        path: '*',
        component: CategoryList,
      },
    ],
  },
];

export default routes;
