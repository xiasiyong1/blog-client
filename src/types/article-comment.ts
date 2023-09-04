import type { Article } from './article'
import type { User } from './user'

export interface ArticleComment {
  id: number

  content: string

  images: string

  createTime: Date

  updateTime: Date

  article: Article

  user: User
}
