import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
import ItemInfoPage from '@/views/ItemInfo.vue';
=======
import ItemInfo from '../views/ItemInfo.vue';
>>>>>>> develop

const routes = [
  {
    path: '/',
    name: 'Home',
<<<<<<< HEAD
    component: ItemInfoPage,
=======
    component: ItemInfo,
>>>>>>> develop
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
