import type { ArticleTag } from './article-tag'
import type { BaseResponse } from './base'

export interface ArticleCategory {
  id: number
  name: string
  createTime: string
}

export interface CreateArticleCategoryDto {
  name: string
}

export interface UpdateArticleCategoryDto {
  name: string
}
export interface GetArticleCategoryListDto {
  name?: string
}

export type CreateArticleCategoryResponse = BaseResponse<ArticleCategory>
export type GetArticleCategoryListResponse = BaseResponse<ArticleCategory[]>
export type GetTagsByArticleCategoryIdResponse = BaseResponse<ArticleTag[]>
export type UpdateArticleCategoryResponse = BaseResponse<ArticleCategory>
