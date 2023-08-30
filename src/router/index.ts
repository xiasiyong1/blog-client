import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import { ROUTES } from './constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: ROUTES.HOME.path
    },
    {
      path: ROUTES.HOME.path,
      name: ROUTES.HOME.name,
      component: Home
    },
    {
      path: ROUTES.CATEGORY.path,
      name: ROUTES.CATEGORY.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/category/index.vue')
    },
    {
      path: ROUTES.NOTICE.path,
      name: ROUTES.NOTICE.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/notice/index.vue')
    },
    {
      path: ROUTES.USER.path,
      name: ROUTES.USER.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/user/index.vue')
    },
    {
      path: ROUTES.ARTICLE_DETAIL.path,
      name: ROUTES.ARTICLE_DETAIL.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/article/index.vue')
    }
  ]
})

export default router
