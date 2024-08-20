<script setup lang="ts">
import { Separator } from 'radix-vue'

const { selectedLocation } = useLocations()
</script>


<template>
  <div v-if="selectedLocation && selectedLocation.tvDetails && !!selectedLocation.tvDetails.length" class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>É importante saber</UiSectionTitle>
    <div class="mt-8 flex w-full flex-col items-end justify-end">
      <div
        v-for="details in selectedLocation.tvDetails"
        :key="details.title"
        class="group w-full max-w-5xl"
      >
        <div class="grid w-full justify-end gap-4 text-zinc-800 md:grid-cols-6">
          <p class="col-span-1 text-xl md:col-span-2">{{ details.title }}</p>
          <p class="col-span-1 md:col-span-4">{{ details.description }}</p>
        </div>
        <Separator  class="my-8 h-px w-full bg-zinc-800 group-last:hidden" />
      </div>
    </div>
  </div>
</template>
