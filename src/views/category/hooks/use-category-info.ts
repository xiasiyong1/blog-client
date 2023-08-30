import type { ArticleCategory } from '@/types/article-category'
import type { ArticleTag } from '@/types/article-tag'
import articleApi from '@/apis/article'
import { onMounted, ref, watch } from 'vue'
import type { Article } from '@/types/article'

const useCategoryInfo = () => {
  const categoryList = ref<ArticleCategory[]>([])
  const tagList = ref<ArticleTag[]>([])
  const categoryArticleList = ref<Article[]>([])
  const activeCategoryIdx = ref(0)
  const activeTagId = ref<number>(-1)

  const getArticleCategoryList = () => {
    return articleApi.getArticleCategory({}).then((res) => {
      categoryList.value = res.data
      return res.data
    })
  }

  const getArticles = (categoryId: number, tagId: number) => {
    articleApi.getCategoryArticles({ categoryId, tagId }).then((res) => {
      categoryArticleList.value = res.data.articleList
    })
  }

  const getArticleCategoryTags = (categoryId: number) => {
    return articleApi.getArticleCategoryTags({ categoryId }).then((res) => {
      tagList.value = res.data
      if (res.data && res.data.length > 0) {
        activeTagId.value = res.data[0].id
      } else {
        activeTagId.value = -1
      }
    })
  }

  watch(activeCategoryIdx, (newVal) => {
    console.log('activeCategoryIdx', newVal)
    getArticleCategoryTags(categoryList.value[newVal].id)
  })

  watch(activeTagId, (newVal) => {
    if (activeTagId.value !== -1) {
      const categoryId = categoryList.value[activeCategoryIdx.value].id
      if (categoryId) {
        getArticles(categoryId, newVal)
      }
    } else {
      categoryArticleList.value = []
    }
  })

  onMounted(() => {
    getArticleCategoryList().then((res) => {
      getArticleCategoryTags(res[0].id)
    })
  })

  return {
    categoryList,
    tagList,
    activeCategoryIdx,
    activeTagId,
    categoryArticleList
  }
}

export default useCategoryInfo
