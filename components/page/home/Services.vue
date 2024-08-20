<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div
    v-if="selectedLocation && selectedLocation.services"
    class="container mx-auto mt-24 flex flex-col justify-start"
  >
    <UiSectionTitle>Outros serviços franet</UiSectionTitle>
    <div class="mt-8 w-full text-primary-foreground">
      <div class="grid w-full grid-cols-1 lg:grid-cols-12">
        <div class="relative col-span-6 h-72 bg-primary lg:mt-16 lg:h-96">
          <img class="absolute -right-8 -top-8 hidden lg:block" src="/images/dots-group.svg" alt="dots group">
          <div class="flex size-full flex-col justify-between p-4 text-center lg:p-8 lg:text-start">
            <div class="size-full space-y-8">
              <h1 class="text-3xl font-semibold lg:text-4xl">{{ selectedLocation.services[0].title }}<span class="text-5xl font-bold text-orange-500">.</span></h1>
              <p class="text-2xl font-medium lg:text-3xl">{{ selectedLocation.services[0].text }}</p>
            </div>
            <div class="h-fit w-full">
              <UiButton
                class="w-full max-w-[400px]"
                variant="secondary"
                as-child
              >
                <NuxtLink :href="selectedLocation.services[0].button.url" target="_blank">{{ selectedLocation.services[0].button.text }}</NuxtLink>
              </UiButton>
            </div>
          </div>
        </div>
        <div class="col-span-6 h-72 bg-green-700 lg:h-96">
          <div class="flex size-full flex-col justify-between p-4 text-center lg:p-8 lg:text-start">
            <div class="size-full space-y-8">
              <h1 class="text-3xl font-semibold lg:text-4xl">{{ selectedLocation.services[1].title }}<span class="text-5xl font-bold text-orange-500">.</span></h1>
              <p class="text-2xl font-medium lg:text-3xl">{{ selectedLocation.services[1].text }}</p>
            </div>
            <div class="h-fit w-full">
              <UiButton
                class="w-full max-w-[400px]"
                variant="secondary"
                as-child
              >
                <NuxtLink :href="selectedLocation.services[1].button.url" target="_blank">{{ selectedLocation.services[1].button.text }}</NuxtLink>
              </UiButton>
            </div>
          </div>
        </div>
        <div class="col-span-10 h-72 bg-green-800 lg:h-96">
          <div class="flex size-full p-4 lg:p-8">
            <div class="col-span-10 flex w-full flex-col justify-between text-center lg:col-span-7 lg:text-start">
              <div class="size-full space-y-8">
                <h1 class="text-3xl font-semibold lg:text-4xl">{{ selectedLocation.services[2].title }}<span class="text-5xl font-bold text-orange-500">.</span></h1>
                <p class="text-2xl font-medium lg:text-3xl">{{ selectedLocation.services[2].text }}</p>
              </div>
              <div class="h-fit w-full">
                <UiButton
                  class="w-full max-w-[400px]"
                  variant="secondary"
                  as-child
                >
                  <NuxtLink :href="selectedLocation.services[2].button.url" target="_blank">{{ selectedLocation.services[2].button.text }}</NuxtLink>
                </UiButton>
              </div>
            </div>
            <div class="col-span-3 hidden flex-col lg:flex">
              <img src="/images/happy-family.png" alt="Imagem de uma família feliz">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
