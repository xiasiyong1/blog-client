<template>
  <router-link to="/article/1" class="text-[12px] px-1 block">
    <div class="article-item-wrapper pb-1">
      <div class="flex justify-between mt-1">
        <div class="mr-2">
          <div class="text-[14px]">文章标题文章标题文章标题</div>
          <div class="text-[14px] leading-1 mt-1 text-gray-700">
            文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述
          </div>
        </div>
        <img src="@/assets/avatar.webp" class="block w-[100px] h-[80px] object-cover" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { Icon } from 'vant'
</script>

<style scoped>
.article-item-wrapper {
  border-bottom: 1px solid #e9e9e9;
}
</style>
