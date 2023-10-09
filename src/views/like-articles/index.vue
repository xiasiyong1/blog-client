<template>
  <div>
    <SectionTitle title="我赞过的文章" />
    <LikeArticleList :list="articleList" />
  </div>
</template>

<script setup lang="ts">
import * as articleLikeApi from '@/apis/article-like'
import SectionTitle from '@/components/section-title/index.vue'
import LikeArticleList from '@/components/like-article/index.vue'
import { onMounted, ref } from 'vue'
import type { Article } from '@/types/article'

const articleList = ref<Article[]>([])

onMounted(() => {
  articleLikeApi.findUserLikeArticles().then((res) => {
    articleList.value = res.data.data.articles
  })
})
</script>

<style></style>
