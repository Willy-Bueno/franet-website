<script setup lang="ts">
import { cn } from '~/lib/utils'
import { routes } from '~/lib/constants'
import { LucideMenu, MapPin } from 'lucide-vue-next'

const { locations, selectedLocationId, initializeLocations } = useLocations()

onBeforeMount(initializeLocations)
</script>

<template>
  <div class="container flex items-center justify-between px-4 lg:hidden">
    <div class="flex w-full items-center justify-between">
      <UiLogo width="126" height="32" alt="Franet Logo" src="/images/logo.png" />
      <UiSheet>
        <UiSheetTrigger>
          <LucideMenu class="size-6 text-zinc-900" />
        </UiSheetTrigger>
        <UiSheetContent class="w-full sm:w-3/4 md:w-2/4">
          <nav class="mt-10">
            <ul class="flex flex-col items-center">
              <li
                v-for="route in routes"
                :key="route.name"
                class="w-full"
              >
                <UiSheetClose as-child>
                  <NuxtLink
                    :to="{ name: route.name }"
                    :class="cn('flex justify-center w-full border-b hover:cursor-pointer hover:bg-zinc-500/5 whitespace-nowrap  py-6 text-lg hover:text-zinc-950', route.name === $route.name ? 'text-black' : 'text-zinc-700')"
                  >
                    {{ route.title }}
                  </NuxtLink>
                </UiSheetClose>
              </li>
            </ul>
          </nav>
          <UiSelect v-model="selectedLocationId">
            <UiSelectTrigger class="mt-10">
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
        </UiSheetContent>
      </UiSheet>
    </div>
  </div>
</template>

