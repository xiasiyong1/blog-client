export const ROUTES = {
  SIGNIN: { path: '/signin', name: 'signin' },
  SINGUP: { path: '/signup', name: 'singup' },
  HOME: { path: '/home', name: 'home' },
  CATEGORY: { path: '/category', name: 'category' },
  NOTICE: { path: '/notice', name: 'notice' },
  ARTICLE_DETAIL: { path: '/article/:id', name: 'articleDetail' },
  USER: { path: '/user', name: 'user' },
  LIKE_ARTICLES: { path: '/like-articles', name: 'likeArticles' }
}

export const TAB_BAR_ROUTES = [
  ROUTES.HOME.path,
  ROUTES.CATEGORY.path,
  ROUTES.NOTICE.path,
  ROUTES.USER.path
]
