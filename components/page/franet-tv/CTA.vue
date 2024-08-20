<script setup lang="ts">
import { Play } from 'lucide-vue-next'

const { selectedLocation } = useLocations()
</script>
<template>
  <div v-if="selectedLocation && selectedLocation.tvCTA && selectedLocation.tvCTA.url" class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>Tudo que você quer assistir</UiSectionTitle>
    <div class="mt-8 flex w-full flex-col text-gray-950">
      <div class="w-full font-medium">
        <p class="max-w-xs">Explore uma Nova Dimensão de Entretenimento com a TV Box Franet</p>
        <div class="mt-8 grid w-full lg:grid-cols-2">
          <div class="col-span-1 grid">
            <p class="max-w-sm text-2xl lg:text-4xl">Já é cliente <strong>Franet?</strong></p>
            <p class="mt-4 max-w-sm text-lg lg:text-2xl">Apete o play e garanta sua <strong>Franet TV</strong></p>
            <div class="mt-16 grid max-w-sm place-items-center">
              <NuxtLink :href="selectedLocation.tvCTA.url" target="_blank">
                <button class="pulse grid size-16 place-items-center rounded-full bg-gradient-to-tr from-primary to-green-700 before:absolute before:-z-10 before:size-16 before:rounded-full before:bg-primary before:opacity-70 before:content-[''] after:absolute after:-z-10 after:size-16 after:rounded-full after:bg-primary after:opacity-70 after:content-[''] lg:size-20 lg:before:size-20 lg:after:size-20">
                  <Play class="size-8 text-secondary" />
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="col-span-1 hidden lg:grid">
            <img src="/images/telecine-ferdinando.png" alt="Telecine Ferdinando" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pulse:before{
    animation: pulse 2s ease-out infinite;
}
.pulse:after{
    animation: pulse 2s 1s ease-out infinite;
}
@keyframes pulse{
    100%{
        transform: scale(2.5);
        opacity: 0;
    }
}
</style>
