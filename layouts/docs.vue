<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <AppHeader />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Mobile Toggle Button -->
      <div class="lg:hidden py-4">
        <button
          @click="toggleMobileMenu"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          {{ mobileMenuOpen ? 'Hide Menu' : 'Show Menu' }}
        </button>
      </div>

      <div class="flex flex-col lg:flex-row">
        <!-- Sidebar (Mobile & Desktop) -->
        <aside
          :class="[
            'w-full lg:w-60 py-8 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8',
            mobileMenuOpen ? 'block' : 'hidden',
            'lg:block'
          ]"
        >
          <div class="sticky top-24 lg:static">
            <nav class="space-y-2 bg-white dark:bg-gray-900 lg:bg-transparent p-4 lg:p-0 rounded-md shadow lg:shadow-none">
              <div v-for="section in navigation" :key="section.title" class="mb-6">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                  {{ section.title }}
                </h3>
                <ul class="space-y-1">
                  <li v-for="item in section.items" :key="item.path">
                    <NuxtLink
                      :to="localePath(item.path)"
                      class="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:bg-gray-800 rounded-md transition-colors"
                      :class="{ 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20': $route.path === item.path }"
                      @click="mobileMenuOpen = false"
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main Content + TOC -->
        <div class="flex-1 lg:flex lg:space-x-8 rtl:lg:space-x-reverse">
          <!-- Main -->
          <main class="flex-1 py-8">
            <article class="prose-custom max-w-none">
              <slot />
            </article>

            <!-- Table of Contents on Mobile -->
            <div class="lg:hidden mt-10 border-t pt-6 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                {{ $t('docs.onThisPage') || 'On this page' }}
              </h3>
              <nav class="space-y-1">
                <a
                  v-for="heading in tableOfContents"
                  :key="heading.id"
                  :href="`#${heading.id}`"
                  class="block px-3 py-1 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  :class="{ 'pl-6 rtl:pl-0 rtl:pr-6': heading.level === 3 }"
                >
                  {{ heading.text }}
                </a>
              </nav>
            </div>
          </main>

          <!-- Table of Contents Desktop -->
          <aside class="hidden xl:block w-64 py-8 pl-8 rtl:pl-0 rtl:pr-8">
            <div class="sticky top-24">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                {{ $t('docs.onThisPage') || 'On this page' }}
              </h3>
              <nav class="space-y-1">
                <a
                  v-for="heading in tableOfContents"
                  :key="heading.id"
                  :href="`#${heading.id}`"
                  class="block px-3 py-1 text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  :class="{ 'pl-6 rtl:pl-0 rtl:pr-6': heading.level === 3 }"
                >
                  {{ heading.text }}
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
<script setup>
const localePath = useLocalePath()
const { t } = useI18n()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Navigation Sections
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/docs' },
      { title: 'Installation', path: '/docs/installation' },
      { title: 'Creating a Project', path: '/docs/creating-project' },
      { title: 'Folder Structure', path: '/docs/folder-structure' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Routing', path: '/docs/routing' },
      { title: 'Service Container', path: '/docs/container' },
      { title: 'Event System', path: '/docs/events' },
      { title: 'Configuration System', path: '/docs/configuration' },
      { title: 'Middleware', path: '/docs/middleware' }
    ]
  },
  {
    title: 'Database',
    items: [
      { title: 'Migrations', path: '/docs/migrations' },
      { title: 'Models', path: '/docs/models' },
      { title: 'Query Builder', path: '/docs/queries' }
    ]
  },
  {
    title: 'CLI Commands',
    items: [
      { title: 'Overview', path: '/docs/cli' },
      { title: 'Build Command', path: '/docs/cli/build' },
      { title: 'Migration Commands', path: '/docs/cli/migrate' },
      { title: 'Custom Commands', path: '/docs/cli/custom' }
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Jobs & Scheduling', path: '/docs/jobs' },
      { title: 'Deployment', path: '/docs/deployment' },
      { title: 'Extending Framework', path: '/docs/extending' }
    ]
  }
]

// Extract table of contents (h2, h3)
const tableOfContents = ref([])

onMounted(() => {
  const headings = document.querySelectorAll('h2, h3')
  tableOfContents.value = Array.from(headings).map(h => ({
    id: h.id,
    text: h.textContent,
    level: Number(h.tagName.substring(1))
  }))
})
</script>
<style scoped>
aside {
  transition: all 0.2s ease-in-out;
}
</style>
