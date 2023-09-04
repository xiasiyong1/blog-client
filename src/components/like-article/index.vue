<template>
  <div>
    <ArticleItem v-for="item in list" :key="item.id" :article="item" />
  </div>
</template>

<script setup lang="ts">
import ArticleItem from '@/components/article/article-item.vue'
import type { Article } from '@/types/article'

const { list } = defineProps<{
  list: Article[]
}>()
</script>

<style></style>
