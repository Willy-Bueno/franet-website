<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div v-if="selectedLocation && !!selectedLocation.features!.length" class="bg-primary py-8">
    <div class="container mx-auto grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="feature in selectedLocation.features!.slice(0, 4)"
        :key="feature.heading"
        class="flex w-72"
      >
        <div class="flex w-fit items-center justify-center rounded-md bg-white p-2">
          <UiIcon class="text-secondary" :name="feature.icon" />
        </div>
        <div class="ml-4 flex flex-col items-start justify-center">
          <p class="font-medium text-white">{{ feature.heading }}</p>
          <p class="text-sm text-white">{{ feature.subheading }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
