<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils';

interface Props {
  src: string
  alt: string
  height?: string
  width?: string
  class?: HTMLAttributes['class']
}

defineProps<Props>()
</script>

<template>
  <div :class="cn('h-12', $props.class)">
    <img
      :width="$props.width"
      :height="$props.height"
      :src="$props.src"
      :alt="$props.alt"
      class="bg-cover"
    >
  </div>
</template>
