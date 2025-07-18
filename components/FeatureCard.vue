<!-- components/FeatureCard.vue -->
<template>
    <div class="card p-6 bg-white/5 border border-white/10 rounded-lg shadow">
      <div class="flex items-center gap-3 mb-3">
        <i :class="icon" class="text-primary-500 text-xl"></i>
        <h3 class="text-lg font-semibold">{{ title }}</h3>
      </div>
      <p class="text-gray-400">
        <slot />
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    icon: String
  })
  </script>
  