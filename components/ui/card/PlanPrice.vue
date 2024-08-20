<script setup lang="ts">
import { cn } from '@/lib/utils'

interface PlanPriceProps {
  class?: string
  price: number
}

defineProps<PlanPriceProps>()
</script>

<template>
  <div :class="cn('flex justify-center', $props.class)">
    <div class="relative flex items-center justify-center">
      <sup class="absolute -left-2 top-4 text-green-600">Apenas</sup>
      <sub class="text-4xl font-bold text-primary-foreground">R$</sub>
      <p class="text-8xl font-extrabold text-primary-foreground">{{ $props.price.toFixed(2).split('.')[0] }}</p>
      <sup class="text-4xl font-bold text-primary-foreground">,{{ $props.price.toFixed(2).split('.')[1] }}</sup>
      <sub class="absolute bottom-6 right-6 text-green-600">/mês</sub>
    </div>
  </div>
</template>
