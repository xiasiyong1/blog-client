<template>
  <Swipe class="home-banner" :autoplay="3000" height="150" :show-indicators="false">
    <SwipeItem v-for="item in bannerList" :key="item.id" @click="handleItemClick(item)">
      <img :src="item.image" alt="" />
      <div class="bannner-text truncate">
        {{ item.title }}
      </div>
    </SwipeItem>
  </Swipe>
</template>

<script setup lang="ts">
import type { Banner } from '@/types/banner'
import { Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'
import banner1 from '@/assets/banner1.webp'
import banner2 from '@/assets/banner2.webp'
import { useRouter } from 'vue-router'

const router = useRouter()

const bannerList = ref<Banner[]>([])

bannerList.value = [
  { title: '深刻记录每一个认真学过的知识点', image: banner1, articleId: 1, id: 1 },
  { title: '夏思勇的个人简历', image: banner2, articleId: 2, id: 2 }
]

const handleItemClick = (banner: Banner) => {
  router.push({ path: `/article/${banner.articleId}` })
}
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
    background-color: rgba(0, 0, 0, 0.6);
  }
  .van-swipe-item {
    background-color: #39a9ed;
  }
}
</style>
