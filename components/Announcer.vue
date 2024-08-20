<script setup lang="ts">
const { selectedLocation } = useLocations()
</script>

<template>
  <UiAnnouncer v-if="selectedLocation && selectedLocation.announcer" class="hidden sm:flex">
    <UiAnnouncerContent>
      <UiAnnouncerText>
        {{ selectedLocation.announcer.text }}
      </UiAnnouncerText>
      <UiAnnouncerGroup v-if="selectedLocation.announcer.links && !!selectedLocation.announcer.links.length">
        <UiAnnouncerGroupItem
          v-for="link in selectedLocation.announcer.links"
          :key="link.url"
          :href="link.url"
          :icon="link.icon"
        >
          {{ link.text }}
        </UiAnnouncerGroupItem>
      </UiAnnouncerGroup>
    </UiAnnouncerContent>
  </UiAnnouncer>
</template>
