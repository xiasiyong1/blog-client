<template>
  <Tabs v-model:active="activeCategoryIdx" sticky v-if="categoryList.length > 0">
    <Tab v-for="category in categoryList" :title="category.name" :key="category.id">
      <ArticleTags :tags="tagList" v-model:activeTagId="activeTagId" />
      <ArticleList :list="categoryArticleList" />
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { Tab, Tabs } from 'vant'
import ArticleList from '@/components/article/article-list.vue'
import ArticleTags from '@/components/article/article-tags.vue'
import useCategoryInfo from './hooks/use-category-info'

const { categoryList, tagList, activeTagId, categoryArticleList, activeCategoryIdx } =
  useCategoryInfo()
</script>

<style></style>
