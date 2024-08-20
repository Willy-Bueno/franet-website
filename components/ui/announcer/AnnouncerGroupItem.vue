<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils';

interface Props {
  href: string
  icon?: string
  class?: HTMLAttributes['class']
}

defineProps<Props>()
</script>

<template>
  <a
    :href="$props.href"
    :class="cn('text-sm flex items-center gap-1.5', $props.class)"
    target="_blank"
  >
    <UiIcon
      v-if="$props.icon"
      :name="$props.icon"
      class="size-5"
    />
    <slot />
  </a>
</template>
