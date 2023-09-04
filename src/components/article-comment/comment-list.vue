<template>
  <div class="p-1">
    <template v-if="list.length > 0">
      <CommentItem v-for="item in list" :key="item.id" :comment="item" />
    </template>
    <div v-else class="text-center text-gray-400 mt-2" @click="addComment">
      暂无评论，添加一下评论吧
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleComment } from '@/types/article-comment'
import CommentItem from './comment-item.vue'
const { list } = defineProps<{
  list: ArticleComment[]
}>()

const emit = defineEmits<{
  addComment: []
}>()

const addComment = () => {
  emit('addComment')
}
</script>

<style></style>
