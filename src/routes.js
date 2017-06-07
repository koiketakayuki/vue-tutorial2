import ShopInformation from './components/ShopInformation.vue';
import MenuTable from './components/MenuTable.vue';
import CategoryTable from './components/CategoryTable.vue';

const routes = [
  {
    path: '/:shopId(\\d+)',
    component: ShopInformation,
    props: true,
    children: [
      {
        path: ':categoryId(\\d+)',
        component: MenuTable,
      },
      {
        path: '*',
        component: CategoryTable,
      },
    ],
  },
];

export default routes;
