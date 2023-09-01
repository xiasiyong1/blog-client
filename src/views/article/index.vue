<template>
  <div>
    <div class="p-1">
      <div class="text-[16px]">{{ articleDetail?.title }}</div>
      <div class="text-[12px] text-gray-400 mt-1 flex gap-1">
        <span> 【待实现作者】发布于2023/10/01 </span>
        <span> <Icon name="comment-o" /> 100</span>
        <span><Icon name="like-o" /> 300</span>
        <span><Icon name="browsing-history-o" /> {{ articleDetail?.viewed }}</span>
      </div>
      <div class="mt-1 text-[14px]">
        <Viewer :value="articleDetail?.content" :plugins="plugins" />
      </div>
    </div>

    <!-- <div class="text-[16px] mt-1">
      <div>点赞列表</div>
    </div> -->

    <div>
      <SectionTitle title="相关文章" />
      <RecommendArticleList />
    </div>
    <div>
      <SectionTitle title="评论列表" />
      <ArticleComment />
    </div>
    <div class="fixed bottom-0 left-0 w-full h-[40px] flex items-center gap-1 px-1 bg-white">
      <div class="flex-1"></div>
      <Icon name="like-o" size="20" @click="addArticleLike" v-if="!isLike" />
      <Icon name="like" size="20" v-else @click="removeArticleLike" />
      <Icon name="star-o" size="20" @click="addArticleCollect" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'vant'
import SectionTitle from '@/components/section-title/index.vue'
import RecommendArticleList from '@/components/recommend-article/article-list.vue'
import ArticleComment from '@/components/article-comment/comment-list.vue'
import articleApi from '@/apis/article'
import articleLikeApi from '@/apis/article-like'
import type { ArticleWithExtra } from '@/types/article'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/vue-next'
import 'github-markdown-css/github-markdown.css'
import { useUserStore } from '@/stores/user'

const store = useUserStore()

const articleDetail = ref<ArticleWithExtra>()
const isLike = ref(false)

const author = computed(() => articleDetail.value?.author)

const plugins = [
  gfm()
  // Add more plugins here
]

const route = useRoute()

console.log(route)

const getArticleDetail = () => {
  articleApi.getArticleDetail({ id: +route.params.id }).then((res) => {
    articleDetail.value = res.data
  })
}

const addArticleLike = () => {
  articleLikeApi.addArticleLike({ articleId: +route.params.id }).then((res) => {
    isLike.value = true
  })
}
const getArticleStatus = () => {
  articleApi.getArticleStatus({ id: +route.params.id }).then((res) => {
    isLike.value = res.data.like
  })
}

const removeArticleLike = () => {
  articleLikeApi.removeArticleLike({ articleId: +route.params.id }).then(() => {
    isLike.value = false
  })
}
const addArticleCollect = () => {}

onMounted(() => {
  getArticleDetail()
  if (store.isLogin) {
    getArticleStatus()
  }
})
</script>

<style></style>
