<template>
  <div class="flex mb-1 pb-1 comment-item">
    <img
      :src="comment.user.avatar || defaultAvatar"
      class="block w-[30px] h-[30px] rounded-full mr-1 shrink-0"
    />
    <div>
      <div class="text-[14px]">{{ comment.user.username }}</div>
      <div class="text-[10px] text-gray-400">{{ formateTime(comment.createTime) }}</div>
      <div class="mt-0.5">{{ comment.content }}</div>
      <div v-if="images.length > 0">
        <img
          :src="item"
          alt=""
          v-for="item in images"
          :key="item"
          class="w-[80px] h-[80px] object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleComment } from '@/types/article-comment'
import { computed } from 'vue'
import { formateTime } from '@/helpers/time'
import { getDefaultAvatar } from '@/helpers/avatar'

const { comment } = defineProps<{
  comment: ArticleComment
}>()

const defaultAvatar = getDefaultAvatar(comment.user.gender)

const images = computed(() => {
  if (comment.images) {
    return comment.images.split(',')
  }
  return []
})
</script>

<style scoped>
.comment-item {
  border-bottom: 1px solid #e9e9e9;
}
</style>
