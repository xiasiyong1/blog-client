import axiosInstance from '@/helpers/request'
import type { ArticleCommentDto, GetArticleCommentsResponse } from '@/types/article-comment'
import type { SimpleSuccessResponse } from '@/types/base'

export const addArticleComment = (articleId: number, params: ArticleCommentDto) => {
  return axiosInstance.post<SimpleSuccessResponse>(`/article-comment/${articleId}`, params)
}

export const getArticleComments = (articleId: number) => {
  return axiosInstance.get<GetArticleCommentsResponse>(`/article-comment/list/${articleId}`)
}
