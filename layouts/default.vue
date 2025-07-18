<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const i18n = useI18n()

// Layout metadata
useHead({
  htmlAttrs: {
    lang: () => i18n.locale.value,
    dir: () => i18n.locale.value === 'ar' ? 'rtl' : 'ltr'
  }
})
</script>