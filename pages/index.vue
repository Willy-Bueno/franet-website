<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'A Franet é uma empresa de telecomunicações que oferece serviços de internet, TV por assinatura e telefonia fixa e móvel.',
  name: 'home',
})
</script>

<template>
  <div>
    <Swipper />
    <PageHomeFeatures />
    <PagePlans />
    <PageHomeCombo />
    <PageHomeServices />
    <PageHomeMobileApp />
    <PageSupport />
  </div>
</template>
