<template>
  <div class="text-l flex justify-between items-center px-2 mt-1">
    <span>{{ props.title }}</span>
    <router-link
      :to="props.extraLink"
      class="text-weak text-s"
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
