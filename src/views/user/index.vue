<template>
  <div class="p-1">
    <div class="flex items-center">
      <img src="@/assets/avatar.webp" class="block w-[60px] h-[60px] rounded-full mr-1 shrink-0" />
      <div class="flex-1">
        <div class="text-[16px]">{{ userInfo?.profile.username }}</div>
        <div class="text-[12px] mt-1 text-gray-400">{{ userInfo?.email }}</div>
      </div>
      <Icon name="arrow" size="24" color="#ddd" />
    </div>
    <CellGroup class="mt-4">
      <Cell title="浏览记录" is-link />
      <Cell title="收藏列表" is-link value="多少篇？" />
      <Cell title="我赞过的" is-link value="多少篇？" to="/like-articles" />
      <Cell title="发布权限申请" is-link :to="ROUTES.ADMIN_PERMISSION_APPLY.path" />
      <Cell title="退出登录" @click="logout" />
    </CellGroup>
  </div>
</template>

<script setup lang="ts">
import { Icon, Cell, CellGroup } from 'vant'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { removeAccessToken } from '@/helper/localstorge'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/constants'

const userStore = useUserStore()

const router = useRouter()

const { userInfo } = storeToRefs(userStore)

const logout = () => {
  removeAccessToken()
  router.replace(ROUTES.HOME.path)
}

onMounted(() => {
  userStore.getAndSetUserInfo()
})
</script>

<style></style>
