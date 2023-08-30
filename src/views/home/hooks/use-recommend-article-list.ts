import type { Article } from '@/types/article'
import articleApi from '@/apis/article'
import { onMounted, ref } from 'vue'

const useRecommendArticleList = () => {
  const recommendArticleList = ref<Article[]>([])

  const getRecommendArticles = () => {
    articleApi.getRecommendArticles({}).then((res) => {
      recommendArticleList.value = res.data
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
