<template>
  <router-link :to="`/article/${article.id}`" class="text-[12px] p-1 block">
    <div class="article-item-wrapper pb-1">
      <div class="text-[14px]">{{ article.title }}</div>
      <div class="flex justify-between mt-1">
        <div class="mr-2">
          <div class="text-gray-500">
            <span>夏思勇</span>
            <span class="px-1">|</span>
            <span>2天前</span>
          </div>
          <div class="text-[14px] leading-1 mt-1 text-gray-700">
            {{ article.summary }}
          </div>
          <div class="mt-1 flex gap-x-1">
            <span><Icon name="like-o" /> 100</span>
            <span><Icon name="chat-o" /> 20</span>
          </div>
        </div>
        <img :src="article.cover" class="block w-[100px] h-[80px] object-cover" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Article } from '@/types/article'
import { Icon } from 'vant'

const { article } = defineProps<{
  article: Article
}>()
</script>

<style scoped>
.article-item-wrapper {
  border-bottom: 1px solid #e9e9e9;
}
</style>
