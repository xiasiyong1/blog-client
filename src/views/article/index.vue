<template>
  <div>
    <div class="p-1">
      <div class="text-[16px]">{{ articleDetail?.title }}</div>
      <div class="text-[12px] text-gray-400 mt-1 flex gap-1">
        <span> 夏思勇发布于2023/10/01 </span>
        <span> <Icon name="comment-o" /> 100</span>
        <span><Icon name="like-o" /> 300</span>
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
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'vant'
import SectionTitle from '@/components/section-title/index.vue'
import RecommendArticleList from '@/components/recommend-article/article-list.vue'
import ArticleComment from '@/components/article-comment/comment-list.vue'
import articleApi from '@/apis/article'
import type { Article } from '@/types/article'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/vue-next'

const articleDetail = ref<Article>()

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

onMounted(() => {
  getArticleDetail()
})
</script>

<style></style>
