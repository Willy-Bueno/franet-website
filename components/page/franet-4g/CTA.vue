<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div v-if="selectedLocation && selectedLocation.movelCTA" class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>Aplie sua conexão com a Franet 4G</UiSectionTitle>
    <div class="mt-8 flex w-full flex-col text-gray-950">
      <div class="w-full font-medium">
        <p class="max-w-xs">Seu smartphone com uma conexão rápida e de qualidade, onde quer que esteja.</p>
        <div class="mt-8 grid w-full lg:grid-cols-2">
          <div class="col-span-1 grid">
            <p class="max-w-sm text-2xl lg:text-4xl">Já é cliente <strong>Franet?</strong></p>
            <p class="mt-4 max-w-sm text-lg lg:text-2xl">Garanta já seu Chip <strong>Franet 4G</strong>.</p>
            <UiButton class="max-w-sm" as-child>
              <NuxtLink :href="selectedLocation.movelCTA.url" target="_blank">
                Contratar
              </NuxtLink>
            </UiButton>
          </div>
          <div class="col-span-1 hidden lg:grid">
            <img src="/images/chip-4g.png" alt="Chip 4g Franet" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
