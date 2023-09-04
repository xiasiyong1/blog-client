import type { ArticleCategory } from './article-category'
import type { ArticleTag } from './article-tag'
import type { User } from './user'

export interface Article {
  id: number

  title: string

  cover: string

  summary: string

  content: string

  categoryId: number | undefined

  tagIds: number[]

  createTime: Date

  updateTime: Date

  author: User
}

export interface ArticleWithExtra extends Article {
  viewed: number
}

export type AddArticle = Omit<Article, 'id' | 'createTime' | 'updateTime'>

export interface ArticleDetail extends Omit<Article, 'categoryId' | 'tagIds'> {
  category: ArticleCategory
  tags: ArticleTag[]
}

export interface ArticleConditionParams {
  title?: string
  categoryId?: number
  tagIds: number[]
  currentPage?: number
  pageSize?: number
  createTime?: [string, string]
}

export interface GetArticleParams {
  title?: string
  categoryId?: number
  tagIds?: string
  currentPage?: number
  pageSize?: number
  startTime?: string
  endTime?: string
}

export interface ArticleStatus {
  like: boolean
}

export interface ArticleLike {
  article: Article
  createAr: string
  id: number
}
