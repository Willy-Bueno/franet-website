<template>
  <div class="flex w-full max-w-2xl flex-col items-start">
    <div class="h-2 w-12 bg-secondary lg:w-16"/>
    <h1 class="text-2xl font-bold text-gray-950 lg:text-4xl">
      <slot/>
      <span class="text-5xl font-bold text-secondary">.</span>
    </h1>
  </div>
</template>
