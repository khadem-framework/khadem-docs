<template>
  <section class="mb-12">
    <div class="border-l-4 border-blue-500 pl-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ title }}</h2>
      <div v-if="$slots.description" class="mb-6">
        <slot name="description"></slot>
      </div>
      <div class="space-y-6">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>