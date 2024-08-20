<script setup lang="ts">
interface PlanSpeedProps {
  speed: number
}

defineProps<PlanSpeedProps>()
</script>

<template>
  <div class="flex flex-col items-center justify-center text-primary-foreground">
    <div class="relative text-8xl font-black text-primary-foreground before:absolute before:bottom-10 before:right-9 before:rounded-sm before:bg-secondary before:px-2 before:text-sm before:font-normal before:content-['MEGA']">{{ speed }}</div>
    <p>Velocidade de dowload</p>
  </div>
</template>
