<script setup lang="ts">
const { selectedLocation } = useLocations()

const itemsElements = ref()

onMounted(() => {
  if (selectedLocation.value && selectedLocation.value.combo) {
    const items = selectedLocation.value.combo.items.slice(0, 3)
    itemsElements.value = items.flatMap((item, index) => [
      h('span', { class: 'text-6xl font-bold' }, item),
      index < items.length - 1 ? h('span', { class: 'text-green-700' }, ' + ') : null
    ])
  }
})

</script>

<template>
  <div v-if="selectedLocation && selectedLocation.combo" class="container mx-auto mt-8 text-primary-foreground max-lg:hidden">
    <UiCardPlan class="w-full">
      <div class="flex size-full items-center space-x-24">
        <div class="min-w-fit space-y-4">
          <p class="text-6xl font-bold">
            <template v-for="(element, index) in itemsElements" :key="index">
              <component :is="element" />
            </template>
          </p>
          <p class="text-2xl font-medium">{{ selectedLocation.combo.text }}</p>
        </div>
        <div class="flex size-full items-center justify-center">
          <UiButton variant="secondary" as-child>
            <NuxtLink :href="selectedLocation.combo.button.url" target="_blank">{{ selectedLocation.combo.button.text }}</NuxtLink>
          </UiButton>
        </div>
      </div>
    </UiCardPlan>
  </div>
</template>
