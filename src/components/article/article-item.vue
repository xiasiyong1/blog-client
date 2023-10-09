<template>
  <router-link :to="`/article/${article.id}`" class="text-[12px] p-1 block">
    <div class="article-item-wrapper pb-1">
      <div class="text-[14px]">{{ article.title }}</div>
      <div class="flex justify-between mt-1">
        <div class="mr-2">
          <div class="text-gray-500">
            <span>{{ article.user?.username }}</span>
            <span class="px-1">|</span>
            <span>{{ formateTime(article.updateTime) }}</span>
          </div>
          <div class="text-[14px] leading-1 mt-1 text-gray-700">
            {{ article.summary }}
          </div>
        </div>
        <img
          :src="article.cover || defaultCover"
          class="block w-[100px] h-[80px] object-cover"
          alt=""
        />
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Article } from '@/types/article'
import defaultCover from '@/assets/default-cover.webp'
import { Icon } from 'vant'
import { formateTime } from '@/helpers/time'

const { article } = defineProps<{
  article: Article
}>()
</script>

<style scoped>
.article-item-wrapper {
  border-bottom: 1px solid #e9e9e9;
}
</style>
