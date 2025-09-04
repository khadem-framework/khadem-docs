<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2 rtl:space-x-reverse">
            <!-- <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg mb-2">خ</span>
            </div> -->
            <AppLogo :animated="false" containerSize="w-8 h-8" :withWrapper="false"  class=" bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg p-0.5" />

            <span class="text-xl font-bold text-gray-900 dark:text-white">Khadem</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.key"
            :to="localePath(item.path)"
            class="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors font-medium"
            :class="{ 'text-primary-600 dark:text-primary-400': isActiveRoute(item.path) }"
          >
            {{ $t(item.key) }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :title="$t('common.theme')"
          >
            <SunIcon v-if="colorMode === 'dark'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :title="$t('common.language')"
          >
            <span class="text-sm font-medium">{{ locale === 'en' ? 'عربي' : 'EN' }}</span>
          </button>

          <!-- GitHub Link -->
          <a
            href="https://github.com/khedrmahmoud/khadem"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :title="$t('nav.github')"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <!-- Get Started Button -->
          <NuxtLink
            :to="localePath('/docs')"
            class="hidden sm:inline-flex btn btn-primary"
          >
            {{ $t('nav.getStarted') }}
          </NuxtLink>

          <!-- Mobile Menu Toggle -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :title="$t('common.menu')"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="w-5 h-5" />
            <XMarkIcon v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
        <nav class="flex flex-col space-y-2">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.key"
            :to="localePath(item.path)"
            @click="mobileMenuOpen = false"
            class="px-3 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors font-medium"
            :class="{ 'text-primary-600 dark:text-primary-400 bg-gray-50 dark:bg-gray-800': isActiveRoute(item.path) }"
          >
            {{ $t(item.key) }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/docs')"
            @click="mobileMenuOpen = false"
            class="btn btn-primary mt-4"
          >
            {{ $t('nav.getStarted') }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const colorMode = useColorMode()

const mobileMenuOpen = ref(false)

const navigation = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.docs', path: '/docs' },
  //{ key: 'nav.showcase', path: '/showcase' },
  { key: 'nav.community', path: '/community' },
  //{ key: 'nav.blog', path: '/blog' }
]

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  setLocale(newLocale)
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const isActiveRoute = (path) => {
  if (path === '/') {
    return route.path === '/' || route.path === '/ar'
  }
  return route.path.includes(path)
}

// Set initial direction
onMounted(() => {
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
})

// Watch locale changes
watch(locale, (newLocale) => {
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
})
</script>