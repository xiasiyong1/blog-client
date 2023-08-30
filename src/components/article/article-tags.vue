<template>
  <div class="p-1 flex bg-white" v-if="tags.length > 0">
    <div class="flex gap-1 flex-wrap">
      <Tag
        size="large"
        class="shrink-0"
        round
        :type="activeTagId === tag.id ? 'primary' : 'default'"
        v-for="tag in tags"
        :key="tag.id"
        @click="changeActiveTag(tag.id)"
        >{{ tag.name }}</Tag
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'vant'
import type { ArticleTag } from '@/types/article-tag'

const { tags } = defineProps<{
  tags: ArticleTag[]
  activeTagId: number
}>()

const emit = defineEmits(['update:activeTagId'])

const changeActiveTag = (id: number) => {
  emit('update:activeTagId', id)
}
</script>

<style></style>
