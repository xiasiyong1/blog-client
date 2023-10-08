import { onMounted, ref } from 'vue'
import * as articleRecommendApi from '@/apis/article-recommend'
import type { Article } from '@/types/article'

const useRecommendArticleList = () => {
  const recommendArticleList = ref<Article[]>([])

  const getRecommendArticles = () => {
    articleRecommendApi.getArticleRecommendList().then((res) => {
      recommendArticleList.value = res.data.data
    })
  }

  onMounted(() => {
    getRecommendArticles()
  })

  return {
    recommendArticleList
  }
}

export default useRecommendArticleList
