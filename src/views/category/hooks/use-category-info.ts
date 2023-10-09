import type { ArticleCategory } from '@/types/article-category'
import type { ArticleTag } from '@/types/article-tag'
import * as articleCategoryApi from '@/apis/article-category'
import * as articleApi from '@/apis/article'
import { onMounted, ref, watch } from 'vue'
import type { Article } from '@/types/article'

const useCategoryInfo = () => {
  const categoryList = ref<ArticleCategory[]>([])
  const tagList = ref<ArticleTag[]>([])
  const categoryArticleList = ref<Article[]>([])
  const activeCategoryIdx = ref(0)
  const activeTagId = ref<number>(-1)

  const getArticleCategoryList = () => {
    return articleCategoryApi.getArticleCategoryList({}).then((res) => {
      categoryList.value = res.data.data
      return res.data
    })
  }

  const getArticles = (categoryId: number, tagId: number) => {
    articleApi.findArticleList({ categoryId, tagId }).then((res) => {
      categoryArticleList.value = res.data.data.articleList
    })
  }

  const getArticleCategoryTags = (categoryId: number) => {
    return articleCategoryApi.getTagsByArticleCategoryId(categoryId).then((res) => {
      tagList.value = res.data.data
      if (res.data && res.data.data.length > 0) {
        activeTagId.value = res.data.data[0].id
      } else {
        activeTagId.value = -1
      }
    })
  }

  watch(activeCategoryIdx, (newVal) => {
    getArticleCategoryTags(categoryList.value[newVal].id)
  })

  watch(activeTagId, (newVal) => {
    console.log(123, activeTagId)
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
      getArticleCategoryTags(res.data[0].id)
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
