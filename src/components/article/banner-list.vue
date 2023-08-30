<template>
  <Swipe class="home-banner" :autoplay="3000" height="150" :show-indicators="false">
    <SwipeItem v-for="item in 4" :key="item">
      <div class="bannner-text truncate">
        文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题
      </div>
    </SwipeItem>
  </Swipe>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant'
</script>

<style scoped lang="less">
.home-banner {
  .bannner-text {
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .van-swipe-item {
    background-color: #39a9ed;
  }
}
</style>
