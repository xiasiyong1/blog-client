import type { APISchema } from '@/apis/request/type'
import { createRequestClient } from '@/apis/request/'
import type { ArticleComment } from '@/types/article-comment'

interface ArticleCommentAPISchema extends APISchema {
  addArticleComment: {
    request: {
      articleId: number
      content: string
      images?: string
    }
    response: {}
  }
  getArticleComments: {
    request: {
      articleId: number
    }
    response: ArticleComment[]
  }
}

const articleCommentApi = createRequestClient<ArticleCommentAPISchema>({
  apis: {
    addArticleComment: 'POST /article/comment/:articleId',
    getArticleComments: 'GET /article/comment/:articleId'
  }
})

export default articleCommentApi
