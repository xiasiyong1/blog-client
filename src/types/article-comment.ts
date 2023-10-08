import type { BaseResponse } from './base'
import type { Article } from './article'
import type { User } from './user'

export interface ArticleCommentDto {
  content: string
  images?: string
}

export interface ArticleComment {
  id: number

  content: string

  images: string

  createTime: string

  updateTime: string

  article: Article

  user: User
}

export type GetArticleCommentsResponse = BaseResponse<ArticleComment[]>
