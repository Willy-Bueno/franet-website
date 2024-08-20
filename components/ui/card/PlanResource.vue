<script setup lang="ts">
import { cn } from '@/lib/utils'

interface PlanResourceProps {
  class?: string
  resources: string[]
}

defineProps<PlanResourceProps>()
</script>

<template>
  <div :class="cn('flex flex-col space-y-2', $props.class)">
    <div
      v-for="(resource, index) in resources"
      :key="index"
      class="relative flex w-full items-center justify-start rounded-md border border-green-700 px-4 py-2 before:absolute before:left-[-7px] before:text-2xl before:text-white before:content-['+']"
    >
      <p class="text-sm text-white">
        {{ resource }}
      </p>
    </div>
  </div>
</template>
