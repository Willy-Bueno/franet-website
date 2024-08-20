<script setup lang="ts">
import { Separator } from 'radix-vue'
import { cn } from '~/lib/utils';

const { selectedLocation } = useLocations()
</script>

<template>
  <div v-if="selectedLocation" class="w-full bg-primary text-primary-foreground">
    <div class="container mx-auto mt-24 flex flex-col justify-start px-4">
      <div
        v-if="selectedLocation && (selectedLocation.footer.sessions && !!selectedLocation.footer.sessions.length || selectedLocation.footer.socialNetworks && !!selectedLocation.footer.socialNetworks.length)"
        class="mt-12 grid grid-cols-1 justify-between gap-12 sm:grid-cols-2 lg:grid-cols-5"
      >
        <div
          v-for="session in selectedLocation.footer.sessions"
          :key="session.title"
          class="col-span-1"
        >
          <h3 class="text-lg font-medium sm:text-xl">{{ session.title }}</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="item in session.links" :key="item.url">
              <NuxtLink class="hover:underline" :to="item.url" target="_blank">
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div
          v-if="selectedLocation.footer.socialNetworks && !!selectedLocation.footer.socialNetworks.length"
          :class="cn('col-span-1 justify-center sm:col-span-full', {
            'lg:col-start-4 sm:col-span-2': selectedLocation.footer.sessions && !!selectedLocation.footer.sessions.length
          })"
        >
          <h3 class="text-center text-lg font-medium sm:text-xl">Acompanhe a Franet nas redes sociais</h3>
          <ul class="mt-4 flex items-center justify-center space-x-4">
            <li
              v-for="network in selectedLocation.footer.socialNetworks"
              :key="network.url"
            >
              <NuxtLink :href="network.url">
                <div class="flex w-fit items-center justify-center rounded-md bg-white p-2">
                  <UiIcon class="text-secondary" :name="network.icon" />
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <Separator
        v-if="selectedLocation.footer.sessions && !!selectedLocation.footer.sessions.length && selectedLocation.footer.socialNetworks && !!selectedLocation.footer.socialNetworks.length"
        class="my-8 h-px w-full bg-green-700"
      />
      <div
        :class="cn('mb-8 flex flex-col  items-center justify-center md:flex-row md:justify-between', {
          'mt-8': !selectedLocation.footer.sessions || !selectedLocation.footer.sessions.length && !selectedLocation.footer.socialNetworks || !selectedLocation.footer.socialNetworks?.length
        })"
      >
        <img src="/images/logo-white.png" class="w-28" >
        <p class="max-md:mt-4">{{ selectedLocation.footer.copy }}</p>
        <div class="hidden lg:block">
          <p>{{ selectedLocation.footer.data }}</p>
          <address>{{selectedLocation.city }} - {{ selectedLocation.state }}</address>
        </div>
      </div>
    </div>
  </div>
</template>
