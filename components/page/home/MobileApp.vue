<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div v-if="selectedLocation && selectedLocation.mobile" class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>Soluções sobre sua conexão na palma de sua mão</UiSectionTitle>
    <div class="mt-8 grid grid-cols-1 text-gray-950 lg:grid-cols-2">
      <div class="col-span-1 font-medium">
        <p>Aplicativo disponivel para android e ios.</p>
        <p>Tenha total controle  sobre sua conexão.</p>

        <div class="mt-8">
          <p class="text-lg font-medium">Com o app você pode:</p>
          <div class="mt-4 space-y-4">
            <p v-for="item in selectedLocation.mobile.resources" :key="item" class="font-normal">{{ item }}</p>
          </div>
          <div class="mt-4 flex gap-2">
            <NuxtLink :href="selectedLocation.mobile.ios" target="_blank">
              <img class="w-32" src="/images/apple-store.png" alt="Apple Store">
            </NuxtLink>
            <NuxtLink :href="selectedLocation.mobile.android" target="_blank">
              <img class="w-32" src="/images/google-play.png" alt="Google Play">
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <img class="aspect-[1/3]" src="/images/phone.png" alt="Imagem do aplicativo">
      </div>
    </div>
  </div>
</template>
