import axiosInstance from '@/helpers/request'
import type { SimpleSuccessResponse } from '@/types/base'
import type { FindUserLikeArticlesResponse } from '@/types/article-like'

export const addArticleLike = (articleId: number) => {
  return axiosInstance.post<SimpleSuccessResponse>(`/article-like/${articleId}`)
}

export const removeArticleLike = (articleId: number) => {
  return axiosInstance.delete<SimpleSuccessResponse>(`/article-like/${articleId}`)
}

export const findUserLikeArticles = () => {
  return axiosInstance.get<FindUserLikeArticlesResponse>('/article-like/articles')
}
