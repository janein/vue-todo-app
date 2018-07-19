import Vue from 'vue';
import VueRouter from 'vue-router';
import OverviewPage from '../pages/overview';
import DetailPage from '../pages/detail';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'overview',
    component: OverviewPage,
  },
  {
    path: '/new',
    name: 'new',
    component: DetailPage,
  },
  {
    path: '/edit/:idx',
    name: 'detail',
    component: DetailPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
