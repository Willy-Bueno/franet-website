<script setup lang="ts">
const { initializeLocations } = useLocations()

onBeforeMount(initializeLocations)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
