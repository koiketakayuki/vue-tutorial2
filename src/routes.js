import ShopInformation from './components/ShopInformation.vue';
import MenuList from './components/MenuList.vue';
import CategoryList from './components/CategoryList.vue';

const routes = [
  {
    path: '/shop-:shopId(\\d+)',
    component: ShopInformation,
    props: true,
    children: [
      {
        path: 'category-:categoryId(\\d+)',
        component: MenuList,
        props: true,
      },
      {
        path: '*',
        component: CategoryList,
      },
    ],
  },
];

export default routes;
