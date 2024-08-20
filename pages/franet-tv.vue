<script setup lang="ts">
definePageMeta({
  title: 'Franet TV',
  description: 'Franet TV é um serviço de TV por assinatura com canais de TV ao vivo e conteúdo on demand.',
  path: '/franet-tv',
  name: 'franet-tv',
})
</script>

<template>
  <div>
    <PageFranetTvBanner />
    <PageFranetTvCTA />
    <PageFranetTvResources />
    <PageFranetTvDetails />
    <PageSupport />
  </div>
</template>
