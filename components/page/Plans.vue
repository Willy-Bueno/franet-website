<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <div
    v-if="selectedLocation && selectedLocation.plans && !!selectedLocation.plans.length"
    class="container mx-auto mt-24 flex flex-col justify-start"
  >
    <UiSectionTitle>Escolha seu plano franet</UiSectionTitle>
    <div class="mt-12 flex flex-col justify-center max-lg:space-y-8 lg:flex-row lg:space-x-12">
      <UiCardPlan v-for="plan in selectedLocation.plans" :key="plan.id">
        <UiCardPlanSpeed :speed="plan.speed" />
        <UiCardPlanResource class="mt-8" :resources="plan.resources" />
        <UiCardPlanPrice class="mt-8" :price="plan.price" />
        <UiButton class="mt-8" variant="secondary" as-child>
          <NuxtLink :href="plan.button.url" target="_blank">{{ plan.button.text }}</NuxtLink>
        </UiButton>
      </UiCardPlan>
    </div>
  </div>
</template>
