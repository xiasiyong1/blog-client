export const ROUTES = {
  HOME: { path: '/home', name: 'home' },
  CATEGORY: { path: '/category', name: 'category' },
  NOTICE: { path: '/notice', name: 'notice' },
  ARTICLE_DETAIL: { path: '/article/:id', name: 'articleDetail' },
  USER: { path: '/user', name: 'user' }
}

export const TAB_BAR_ROUTES = [
  ROUTES.HOME.path,
  ROUTES.CATEGORY.path,
  ROUTES.NOTICE.path,
  ROUTES.USER.path
]
