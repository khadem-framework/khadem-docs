<template>
    <div
      class="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded"
      role="alert"
    >
      🚧 {{ t('docs.warningMessage') }}
    </div>
  </template>
  
  <script setup>
  const { t } = useI18n()
  </script>
  