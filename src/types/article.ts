import type { ArticleTag } from './article-tag'
import type { BaseResponse } from './base'
import type { User } from './user'

export interface Article {
  id: number

  title: string

  cover: string

  summary: string

  content: string

  categoryId: number | undefined

  tags: ArticleTag[]

  createTime: string

  updateTime: string

  user: User
}

export interface ArticleConditionParams {
  title?: string
  categoryId?: number
  tagIds: number[]
  currentPage?: number
  pageSize?: number
  createTime?: [string, string]
}

export interface CreateArticleDto
  extends Omit<Article, 'id' | 'tags' | 'createTime' | 'updateTime'> {
  tagIds: number[]
}
export interface FindArticleListDto {
  title?: string
  categoryId?: number
  tagId?: number
  currentPage?: number
  pageSize?: number
}
export interface UpdateArticleDto extends CreateArticleDto {}

export type CreateArticleResponse = BaseResponse<Article>
export type UpdateArticleResponse = BaseResponse<Article>
export type FindArticleListResponse = BaseResponse<{
  articleList: Article[]
  count: number
}>
export type GetArticleInfoByIdResponse = BaseResponse<Article>
export type RetArticleExtraDataResponse = BaseResponse<{
  isLike: boolean
  likeCount: number
  commentCount: number
  viewCount: number
}>
