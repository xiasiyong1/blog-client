<template>
  <div v-if="list.length > 0">
    <ArticleItem v-for="item in list" :key="item.id" :article="item" />
  </div>
  <div v-else class="text-center text-gray-400 mt-4">暂无数据</div>
</template>

<script setup lang="ts">
import type { Article } from '@/types/article'
import ArticleItem from './article-item.vue'

const { list } = defineProps<{
  list: Article[]
}>()
</script>

<style></style>
