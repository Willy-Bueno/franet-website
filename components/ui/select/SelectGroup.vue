<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { SelectGroupProps } from 'radix-vue'
import { SelectGroup } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<SelectGroupProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup :class="cn('p-1 w-full space-y-1', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
