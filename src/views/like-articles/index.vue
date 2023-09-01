<template>
  <div>like</div>
</template>

<script setup lang="ts">
import articleLikeApi from '@/apis/article-like'
import { onMounted } from 'vue'

onMounted(() => {
  articleLikeApi.findUserLikeArticles({}).then((res) => {
    console.log(res)
  })
})
</script>

<style></style>
