import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'
import type { Article, ArticleStatus, ArticleWithExtra } from '@/types/article'
import type { ArticleCategory } from '@/types/article-category'
import type { ArticleTag } from '@/types/article-tag'

interface ArticleAPISchema extends APISchema {
  getRecommendArticles: {
    request: {}
    response: Article[]
  }
  getArticleCategory: {
    request: {}
    response: ArticleCategory[]
  }
  getArticleCategoryTags: {
    request: {
      categoryId: number
    }
    response: ArticleTag[]
  }
  getCategoryArticles: {
    request: {
      categoryId: number
      tagId: number
    }
    response: { articleList: Article[]; count: number }
  }
  getArticleDetail: {
    request: {
      id: number
    }
    response: ArticleWithExtra
  }
  getArticleStatus: {
    request: {
      id: number
    }
    response: ArticleStatus
  }
}

const articleApi = createRequestClient<ArticleAPISchema>({
  apis: {
    getRecommendArticles: 'GET /article/recommend',
    getArticleCategory: 'GET /article/category',
    getArticleCategoryTags: 'GET /article/category/:categoryId/tags',
    getCategoryArticles: 'GET /article',
    getArticleDetail: 'GET /article/:id',
    getArticleStatus: 'GET /article/status/:id'
  }
})

export default articleApi
