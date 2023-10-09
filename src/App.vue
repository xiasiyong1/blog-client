<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
import { watch } from 'vue'
import { TAB_BAR_ROUTES } from './router/constants'
import { computed } from 'vue'

const active = ref(0)
const router = useRouter()
const route = useRoute()
const tabList = [
  { icon: 'home-o', text: '首页', path: '/home' },
  { icon: 'apps-o', text: '全部分类', path: '/category' },
  { icon: 'chat-o', text: '消息通知', path: '/notice' },
  { icon: 'friends-o', text: '个人中心', path: '/user' }
]

watch(
  () => route.path,
  (value) => {
    const index = tabList.findIndex((tab) => tab.path === value)
    active.value = index
  }
)

const showTabBar = computed(() => {
  return TAB_BAR_ROUTES.includes(router.currentRoute.value.path)
})
</script>

<template>
  <div class="pb-[30px] h-[100vh] flex flex-col">
    <div class="flex-1">
      <RouterView />
    </div>
    <div class="text-gray-200 pb-6 text-center">把学的记录下来吧～</div>
  </div>
  <Tabbar v-model="active" v-if="showTabBar">
    <TabbarItem :icon="tab.icon" v-for="tab in tabList" :key="tab.path" :to="tab.path">{{
      tab.text
    }}</TabbarItem>
  </Tabbar>
</template>

<style scoped></style>
