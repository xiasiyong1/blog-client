<template>
  <router-link :to="`/article/${article.id}`" class="text-s p-2 block">
    <div class="border-b pb-1">
      <div class="">{{ article.title }}</div>
      <div class="flex justify-between mt-1">
        <div class="mr-2">
          <div class="text-weakest">
            <span>{{ article.user?.username }}</span>
            <span class="px-1">|</span>
            <span>{{ formateTime(article.updateTime) }}</span>
          </div>
          <div class="leading-1 mt-1 text-weak">
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
.border-b {
  border-bottom: 1px solid #e9e9e9;
}
</style>
