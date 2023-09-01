import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'
import type { Article, ArticleWithExtra } from '@/types/article'
import type { ArticleCategory } from '@/types/article-category'
import type { ArticleTag } from '@/types/article-tag'
import type { User } from '@/types/user'

interface ArticleAPISchema extends APISchema {
  addArticleLike: {
    request: {
      articleId: number
    }
    response: {}
  }
  removeArticleLike: {
    request: {
      articleId: number
    }
    response: {}
  }
  findUserLikeArticles: {
    request: {}
    response: Article[]
  }
  findArticleLikeUsers: {
    request: {
      articleId: number
    }
    response: User[]
  }
}

const articleApi = createRequestClient<ArticleAPISchema>({
  apis: {
    addArticleLike: 'POST /article-like',
    removeArticleLike: 'DELETE /article-like/:articleId',
    findUserLikeArticles: 'GET /article-like/users',
    findArticleLikeUsers: 'GET /article-like/:articleId'
  }
})

export default articleApi
