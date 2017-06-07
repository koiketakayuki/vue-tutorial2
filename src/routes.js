import ShopInformation from './components/ShopInformation.vue';
import MenuTable from './components/MenuTable.vue';
import CategoryList from './components/CategoryList.vue';

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
        component: CategoryList,
      },
    ],
  },
];

export default routes;
