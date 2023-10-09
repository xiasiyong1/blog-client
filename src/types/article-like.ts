import type { Article } from './article'
import type { BaseResponse } from './base'

export type FindUserLikeArticlesResponse = BaseResponse<{
  articles: Article[]
  count: number
}>
