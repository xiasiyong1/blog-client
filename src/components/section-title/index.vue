<template>
  <div class="text-[16px] flex justify-between items-center px-1 mt-1">
    <span>{{ props.title }}</span>
    <router-link
      :to="props.extraLink"
      class="text-gray-400 text-[12px]"
      v-if="props.extraText && props.extraLink"
    >
      {{ props.extraText }} <Icon name="arrow" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'vant'

const props = defineProps<{
  title: string
  extraText?: string
  extraLink?: string
}>()
</script>

<style></style>
