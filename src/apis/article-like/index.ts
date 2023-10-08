import axiosInstance from '@/helpers/request'
import type { SimpleSuccessResponse } from '@/types/base'

export const addArticleLike = (articleId: number) => {
  return axiosInstance.post<SimpleSuccessResponse>(`/article-like/${articleId}`)
}

export const removeArticleLike = (articleId: number) => {
  return axiosInstance.delete<SimpleSuccessResponse>(`/article-like/${articleId}`)
}
