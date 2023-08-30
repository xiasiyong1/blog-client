<template>
  <div class="p-1">
    <div class="flex items-center">
      <img src="@/assets/avatar.webp" class="block w-[60px] h-[60px] rounded-full mr-1 shrink-0" />
      <div class="flex-1">
        <div class="text-[16px]">夏思勇</div>
        <div class="text-[12px] mt-1 text-gray-400">514123901@qq.com</div>
      </div>
      <Icon name="arrow" size="24" color="#ddd" />
    </div>
    <CellGroup class="mt-4">
      <Cell title="浏览记录" is-link />
      <Cell title="收藏列表" is-link value="12" />
      <Cell title="我赞过的" is-link value="Content" />
      <Cell title="发布权限申请" is-link />
      <Cell title="退出登录" />
    </CellGroup>
  </div>
</template>

<script setup lang="ts">
import { Icon, Cell, CellGroup } from 'vant'
</script>

<style></style>
