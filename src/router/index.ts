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
      path: ROUTES.SIGNIN.path,
      name: ROUTES.SIGNIN.name,
      component: () => import('@/views/sign-in/index.vue')
    },
    {
      path: ROUTES.SINGUP.path,
      name: ROUTES.SINGUP.name,
      // route level code-splitting
      component: () => import('@/views/sign-up/index.vue')
    },
    {
      path: ROUTES.CATEGORY.path,
      name: ROUTES.CATEGORY.name,
      component: () => import('@/views/category/index.vue')
    },
    {
      path: ROUTES.NOTICE.path,
      name: ROUTES.NOTICE.name,
      component: () => import('@/views/notice/index.vue')
    },
    {
      path: ROUTES.USER.path,
      name: ROUTES.USER.name,
      component: () => import('@/views/user/index.vue')
    },
    {
      path: ROUTES.ARTICLE_DETAIL.path,
      name: ROUTES.ARTICLE_DETAIL.name,
      component: () => import('@/views/article/index.vue')
    },
    {
      path: ROUTES.LIKE_ARTICLES.path,
      name: ROUTES.LIKE_ARTICLES.name,
      component: () => import('@/views/like-articles/index.vue')
    },
    {
      path: ROUTES.ADMIN_PERMISSION_APPLY.path,
      name: ROUTES.ADMIN_PERMISSION_APPLY.name,
      component: () => import('@/views/admin-permission-apply/index.vue')
    }
  ]
})

export default router
