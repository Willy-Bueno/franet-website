<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div v-if="selectedLocation && selectedLocation.support && selectedLocation.support.links" class="container mx-auto mt-24 flex flex-col justify-start px-4">
    <UiSectionTitle>Autoatendimento para clientes</UiSectionTitle>
    <div class="mt-8 flex w-full text-gray-950">
      <div class="w-full font-medium">
        <p>Estamos sempre prontos para lhe atender.</p>
        <p>Você pode se interessar por essas opções.</p>

        <div class="mt-4 flex w-full">
          <div class="hidden min-w-fit lg:block">
            <img class="aspect-[1/3]" src="/images/person.png" alt="Imagem do mascote da Franet Telecom" >
          </div>
          <div class="mt-4 flex w-full flex-col gap-4 text-zinc-50 md:flex-row">
            <div
              v-for="item of selectedLocation.support.links"
              :key="item.text"
              class="flex h-36 w-44 flex-col justify-between rounded-md bg-primary p-4"
            >
              <UiIcon v-if="item.icon" class="size-9 stroke-1 text-secondary" :name="item.icon" />
              <NuxtLink class="text-base font-normal hover:underline" :href="item.url" target="_blank">{{item.text}}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
