<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex">
        <!-- Sidebar -->
        <aside class="hidden lg:block w-64 py-8 pr-8 rtl:pr-0 rtl:pl-8">
          <div class="sticky top-24">
            <nav class="space-y-2">
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
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main content -->
        <main class="flex-1 py-8 pl-8 rtl:pl-0 rtl:pr-8 lg:pl-0 rtl:lg:pr-0">
          <article class="prose-custom max-w-none">
            <slot />
          </article>
        </main>

        <!-- Table of contents -->
        <aside class="hidden xl:block w-64 py-8 pl-8 rtl:pl-0 rtl:pr-8">
          <div class="sticky top-24">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
              {{ $t('docs.onThisPage') }}
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
    <AppFooter />
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const { t } = useI18n()

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/docs' },
      { title: 'Installation', path: '/docs/installation' },
      { title: 'Creating a Project', path: '/docs/creating-project' },
      { title: 'Folder Structure', path: '/docs/folder-structure' },
      { title: 'Configuration', path: '/docs/configuration' }
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
    title: 'Core Concepts',
    items: [
      { title: 'Service Container', path: '/docs/container' },
      { title: 'Event System', path: '/docs/events' },
      { title: 'Configuration System', path: '/docs/config' },
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
    title: 'Advanced',
    items: [
      { title: 'Jobs & Scheduling', path: '/docs/jobs' },
      { title: 'Deployment', path: '/docs/deployment' },
      { title: 'Extending Framework', path: '/docs/extending' }
    ]
  }
]

const tableOfContents = ref([])

onMounted(() => {
  // Extract headings from the page content
  const headings = document.querySelectorAll('h2, h3')
  tableOfContents.value = Array.from(headings).map(heading => ({
    id: heading.id,
    text: heading.textContent,
    level: parseInt(heading.tagName.substring(1))
  }))
})
</script>