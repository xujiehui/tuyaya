import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // redirect: 'yaya',
      component: () => import('@/views/index/index.vue'),
    },
    // {
    //   path: '/yaya',
    //   name: 'yaya',
    //   component: () => import('@/views/index/index.vue'),
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/index.vue'),
    //   meta: {
    //     requiresAuth: false,
    //   },
    // },
    // ...appRoutes,
    // REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// createRouteGuard(router);

export default router;