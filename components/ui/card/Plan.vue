<script setup lang="ts">
import { cn } from '@/lib/utils'

interface PlanContainerProps {
  class?: string
}

defineProps<PlanContainerProps>()
</script>

<template>
  <div :class="cn('flex flex-col max-lg:mx-auto max-lg:max-w-md max-lg:w-full flex-grow justify-center relative rounded-md w-1/3 p-8 bg-primary before:absolute before:left-2 before:bottom-2 before:content-[\'\'] before:w-full before:h-full before:border-2 before:border-secondary before:rounded-md before:pointer-events-none', $props.class)">
    <slot/>
  </div>
</template>
