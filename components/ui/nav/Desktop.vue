<script setup lang="ts">
import { cn } from '~/lib/utils'
import { routes } from '~/lib/constants'
import { MapPin } from 'lucide-vue-next';

const { locations, selectedLocationId, initializeLocations, selectedLocation } = useLocations()

onBeforeMount(initializeLocations)
</script>

<template>
  <div class="container hidden items-center justify-between lg:flex">
    <div class="flex items-center">
      <UiLogo width="126" height="32" alt="Franet Logo" src="/images/logo.png" />
      <nav
        v-if="selectedLocation?.active"
        class="ml-12"
      >
        <ul class="grid grid-cols-4 items-center">
          <li
            v-for="route in routes"
            :key="route.name"
            :class="cn('w-full flex justify-center items-center hover:bg-zinc-500/5 hover:cursor-pointer border-b-2', route.name === $route.name ? 'border-primary' : 'border-transparent')"
          >
            <NuxtLink
              :to="{ name: route.name }"
              :class="cn('whitespace-nowrap px-6 py-3 text-sm hover:text-zinc-950', route.name === $route.name ? 'text-black' : 'text-zinc-700')"
            >
              {{ route.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <UiSelect v-model="selectedLocationId">
      <UiSelectTrigger class="w-64">
        <template #icon>
          <MapPin class="size-4" />
        </template>
        <UiSelectValue placeholder="Selecione sua cidade" />
      </UiSelectTrigger>
      <UiSelectContent>
        <UiSelectGroup>
          <UiSelectItem
            v-for="location in locations"
            :key="location.id"
            :value="location.id"
          >
            {{ `${location.city} - ${location.state}` }}
          </UiSelectItem>
        </UiSelectGroup>
      </UiSelectContent>
    </UiSelect>
  </div>
</template>

