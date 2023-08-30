<template>
  <div class="">
    <Search placeholder="文章搜索" v-model="keyword" @search="onSearch" />
    <BannerList />
    <section-title title="文章推荐" extra-text="查看全部" extra-link="/" />
    <ArticleList :list="recommendArticleList" />
  </div>
</template>

<script setup lang="ts">
import { Search } from 'vant'
import BannerList from '@/components/article/banner-list.vue'
import ArticleList from '@/components/article/article-list.vue'
import SectionTitle from '@/components/section-title/index.vue'
import { ref } from 'vue'
import useRecommendArticleList from './hooks/use-recommend-article-list'

const keyword = ref('')
const onSearch = (val) => {
  console.log(val)
}

const { recommendArticleList } = useRecommendArticleList()
</script>

<style></style>
