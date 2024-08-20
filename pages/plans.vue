<script setup lang="ts">
definePageMeta({
  title: 'Planos',
  description: 'Conheça os planos de internet, TV por assinatura e telefonia fixa e móvel da Franet.',
  path: '/planos',
  name: 'plans',
})
</script>

<template>
  <div>
    <PagePlansHelper />
    <PagePlans />
    <PageSupport />
  </div>
</template>
