<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 dark:bg-secondary-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft animation-delay-2000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-subtle">
            <span class="text-white font-bold text-3xl">خ</span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Khadem
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-slide-up animation-delay-200">
          {{ $t('hero.title') }}
        </p>
        
        <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-400">
          {{ $t('hero.description') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-600">
          <NuxtLink
            :to="localePath('/docs')"
            class="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            {{ $t('hero.getStarted') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/docs')"
            class="btn btn-outline text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            {{ $t('hero.viewDocs') }}
          </NuxtLink>
        </div>

        <!-- Install Command -->
        <div class="max-w-md mx-auto animate-slide-up animation-delay-800">
          <div class="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 text-left">
            <div class="flex items-center justify-between mb-2">
              <span class="text-gray-400 text-sm">Terminal</span>
              <button
                @click="copyInstallCommand"
                class="text-gray-400 hover:text-white transition-colors"
                :title="copied ? 'Copied!' : 'Copy command'"
              >
                <CheckIcon v-if="copied" class="w-4 h-4" />
                <ClipboardIcon v-else class="w-4 h-4" />
              </button>
            </div>
            <code class="text-green-400 text-sm">$ {{ $t('hero.installCommand') }}</code>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, ClipboardDocumentIcon as ClipboardIcon } from '@heroicons/vue/24/outline'

const localePath = useLocalePath()
const { t } = useI18n()

const copied = ref(false)

const copyInstallCommand = async () => {
  try {
    await navigator.clipboard.writeText(t('hero.installCommand'))
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy command:', err)
  }
}
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>