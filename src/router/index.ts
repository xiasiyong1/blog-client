import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import { ROUTES } from './constants'
import { useUserStore } from '@/stores/user'
import { getAccessToken } from '@/helpers/local-storge'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: ROUTES.HOME.path,
      meta: { needAuth: false }
    },
    {
      path: ROUTES.HOME.path,
      name: ROUTES.HOME.name,
      component: Home,
      meta: { needAuth: false }
    },
    {
      path: ROUTES.SIGNIN.path,
      name: ROUTES.SIGNIN.name,
      component: () => import('@/views/sign-in/index.vue'),
      meta: { needAuth: false }
    },
    {
      path: ROUTES.SINGUP.path,
      name: ROUTES.SINGUP.name,
      // route level code-splitting
      component: () => import('@/views/sign-up/index.vue'),
      meta: { needAuth: false }
    },
    {
      path: ROUTES.CATEGORY.path,
      name: ROUTES.CATEGORY.name,
      component: () => import('@/views/category/index.vue'),
      meta: { needAuth: false }
    },
    {
      path: ROUTES.NOTICE.path,
      name: ROUTES.NOTICE.name,
      component: () => import('@/views/notice/index.vue'),
      meta: { needAuth: true }
    },
    {
      path: ROUTES.USER.path,
      name: ROUTES.USER.name,
      component: () => import('@/views/user/index.vue'),
      meta: { needAuth: true }
    },
    {
      path: ROUTES.ARTICLE_DETAIL.path,
      name: ROUTES.ARTICLE_DETAIL.name,
      component: () => import('@/views/article-detail/index.vue')
    },
    {
      path: ROUTES.LIKE_ARTICLES.path,
      name: ROUTES.LIKE_ARTICLES.name,
      component: () => import('@/views/like-articles/index.vue'),
      meta: { needAuth: true }
    },
    {
      path: ROUTES.ADMIN_PERMISSION_APPLY.path,
      name: ROUTES.ADMIN_PERMISSION_APPLY.name,
      component: () => import('@/views/admin-permission-apply/index.vue'),
      meta: { needAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const accessToken = getAccessToken()
  if (to.meta.needAuth && !accessToken) {
    return next({
      path: ROUTES.SIGNIN.path,
      query: {
        redirect: to.path
      }
    })
  } else {
    next()
  }
})

export default router
