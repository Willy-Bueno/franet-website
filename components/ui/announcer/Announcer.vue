<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils';

interface Props {
  class?: HTMLAttributes['class']
}

defineProps<Props>()
</script>

<template>
  <div :class="cn('flex w-full items-center bg-secondary text-secondary-foreground py-1.5', $props.class)">
    <slot />
  </div>
</template>
