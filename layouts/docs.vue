<template>

  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <AppHeader />

    <div class="max-w-full mx-auto px-3 sm:px-4 lg:px-6">
      <!-- Mobile Toggle Button -->
      <div class="xl:hidden py-3">
        <button @click="toggleMobileMenu"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {{ mobileMenuOpen ? 'Hide Menu' : 'Show Menu' }}
        </button>
      </div>

      <div class="flex flex-col xl:flex-row gap-6 relative">
        <!-- Mobile Menu Overlay -->
        <div v-if="mobileMenuOpen" @click="closeMobileMenu" class="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden">
        </div>

        <!-- Sidebar (Mobile & Desktop) -->
        <aside :class="[
          'w-full xl:w-80 xl:min-w-[320px] xl:max-w-[400px] flex-shrink-0',
          'xl:block xl:relative', // Always visible and positioned normally on desktop
          // Mobile positioning and visibility
          {
            'fixed top-0 left-0 h-full z-50 transform transition-transform duration-300': true,
            'translate-x-0': mobileMenuOpen,
            '-translate-x-full': !mobileMenuOpen
          },
          'xl:transform-none xl:translate-x-0' // Reset transforms on desktop
        ]">
          <div
            class="h-full xl:sticky xl:top-20 xl:max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            <!-- Mobile header -->
            <div class="xl:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h2>
              <button @click="closeMobileMenu"
                class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <nav class="space-y-1 bg-white dark:bg-gray-900 xl:bg-transparent p-3 xl:p-0 h-full xl:h-auto">
              <div v-for="section in navigation" :key="section.title" class="mb-5">
                <h3 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 px-2">
                  {{ section.title }}
                </h3>
                <ul class="space-y-0.5 px-4">
                  <li v-for="item in section.items" :key="item.path">
                    <NuxtLink :to="localePath(item.path)"
                      class="block px-2 py-1.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 rounded-md transition-all duration-200 font-medium"
                      :class="{
                        'text-blue-600 bg-blue-50 border-r-2 border-blue-500 dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-400': $route.path === item.path,
                        'hover:translate-x-1': $route.path !== item.path
                      }" @click="closeMobileMenu">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main Content + TOC -->
        <div class="flex-1 xl:flex xl:gap-6">
          <!-- Main -->
          <main class="flex-1 min-w-0 py-6">
            <DocsWarningBanner />

            <article class="prose prose-gray dark:prose-invert max-w-none
              prose-headings:scroll-mt-20
              prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4
              prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 dark:prose-h2:border-gray-700
              prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
              prose-p:leading-7 prose-p:mb-4
              prose-code:text-sm prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-gray-100 prose-code:rounded prose-code:font-mono dark:prose-code:bg-gray-800
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r dark:prose-blockquote:bg-blue-900/20 dark:prose-blockquote:border-blue-400
              prose-ul:my-4 prose-li:my-1
              prose-table:text-sm
              prose-img:rounded-lg prose-img:shadow-md
            ">
              <slot />
            </article>

            <!-- Table of Contents on Mobile -->
            <div class="xl:hidden mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                {{ $t('docs.onThisPage') || 'On this page' }}
              </h3>
              <nav class="space-y-1">
                <a v-for="heading in tableOfContents" :key="heading.id" :href="`#${heading.id}`"
                  @click="handleTocClick($event, heading.id)"
                  class="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors rounded"
                  :class="{ 'pl-4 rtl:pl-0 rtl:pr-4': heading.level === 3 }">
                  {{ heading.text }}
                </a>
              </nav>
            </div>
          </main>

          <!-- Table of Contents Desktop -->
          <aside class="hidden xl:block w-64 flex-shrink-0 py-6">
            <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                {{ $t('docs.onThisPage') || 'On this page' }}
              </h3>
              <nav class="space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <a v-for="heading in tableOfContents" :key="heading.id" :href="`#${heading.id}`"
                  @click="handleTocClick($event, heading.id)"
                  class="block py-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors leading-5"
                  :class="{
                    'pl-3 rtl:pl-0 rtl:pr-3 text-gray-500 dark:text-gray-500': heading.level === 3,
                    'font-medium': heading.level === 2
                  }">
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
import DocsWarningBanner from '~/components/common/DocsWarningBanner.vue'

const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()
const $route = route
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Handle smooth scrolling for TOC links
const handleTocClick = (event, id) => {
  event.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    // Update URL without triggering navigation
    window.history.pushState(null, '', `#${id}`)
  }
}

// Navigation Sections
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/docs' },
      { title: 'Installation', path: '/docs/getting-started/installation' },
      { title: 'Creating a Project', path: '/docs/getting-started/creating-project' },
      { title: 'Folder Structure', path: '/docs/getting-started/folder-structure' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Routing', path: '/docs/core-concepts/routing' },
      { title: 'Requests', path: '/docs/core-concepts/request' },
      { title: 'Response System', path: '/docs/core-concepts/response' },
      { title: 'Middleware', path: '/docs/core-concepts/middleware' },
      { title: 'Validation', path: '/docs/core-concepts/validation' },
      { title: 'Service Container', path: '/docs/core-concepts/container' },
      { title: 'Service Providers', path: '/docs/core-concepts/service-providers' },
    ]
  },
  {
    title: 'Database & ORM',
    items: [
      { title: 'Getting Started', path: '/docs/database-models/database' },
      { title: 'Query Builder', path: '/docs/database-models/queries' },
      { title: 'Models', path: '/docs/database-models/models' },
      { title: 'Relationships', path: '/docs/database-models/relationships' },
      { title: 'Eager Loading', path: '/docs/database-models/eager-loading' },
      { title: 'Migrations', path: '/docs/database-models/migrations' },
      { title: 'ORM Features', path: '/docs/database-models/orm' },
    ]
  },
  {
    title: 'Authentication & Security',
    items: [
      { title: 'Overview', path: '/docs/auth-security/auth' },
      { title: 'Guards', path: '/docs/auth-security/guards' },
      { title: 'Middleware', path: '/docs/auth-security/middleware' },
      { title: 'Token Management', path: '/docs/auth-security/tokens' },
      { title: 'Authorization', path: '/docs/auth-security/authorization' },
      { title: 'Security Best Practices', path: '/docs/auth-security/security' }
    ]
  },
  {
    title: 'Mail & Notifications',
    items: [
      { title: 'Mail Overview', path: '/docs/mail' },
      { title: 'Configuration', path: '/docs/mail/configuration' },
      { title: 'Sending Emails', path: '/docs/mail/sending' },
      { title: 'Mail Drivers', path: '/docs/mail/drivers' },
      { title: 'Troubleshooting', path: '/docs/mail/troubleshooting' },
    ]
  },
  {
    title: 'Advanced Features',
    items: [
      { title: 'Caching', path: '/docs/advanced-features/cache' },
      { title: 'Configuration', path: '/docs/advanced-features/configuration' },
      { title: 'Events & Listeners', path: '/docs/advanced-features/events' },
      { title: 'Queue System', path: '/docs/advanced-features/queue' },
      { title: 'Task Scheduling', path: '/docs/advanced-features/scheduler' },
      { title: 'Localization', path: '/docs/advanced-features/localization' },
      { title: 'WebSocket System', path: '/docs/advanced-features/websockets' },
      { title: 'Exception Handling', path: '/docs/advanced-features/exceptions' },
    ]
  },
  {
    title: 'Development Tools',
    items: [
      { title: 'CLI Commands', path: '/docs/dev-tools/cli' },
      { title: 'Logging', path: '/docs/dev-tools/logging' }
    ]
  },
  {
    title: 'Deployment',
    items: [ 
      { title: 'Docker Deployment', path: '/docs/deployment/docker' },
    ]
  }
]

// Extract table of contents (h2, h3)
const tableOfContents = ref([])

onMounted(() => {
  // Handle escape key to close mobile menu
  const handleEscape = (event) => {
    if (event.key === 'Escape' && mobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  document.addEventListener('keydown', handleEscape)

  const extractHeadings = () => {
    // Wait for content to be fully rendered
    nextTick(() => {
      const headings = document.querySelectorAll('article h2, article h3')
      tableOfContents.value = Array.from(headings).map(h => {
        // Ensure heading has an ID
        if (!h.id && h.textContent) {
          h.id = h.textContent.toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .trim()
        }

        return {
          id: h.id,
          text: h.textContent?.trim() || '',
          level: Number(h.tagName.substring(1))
        }
      }).filter(h => h.text && h.id)
    })
  }

  // Extract headings initially
  extractHeadings()

  // Re-extract when route changes
  watch(() => $route.path, () => {
    extractHeadings()
    closeMobileMenu() // Close mobile menu when navigating
  })

  // Re-extract when content changes (for dynamic content)
  const observer = new MutationObserver(() => {
    setTimeout(extractHeadings, 100) // Small delay to ensure content is rendered
  })

  const articleElement = document.querySelector('article')
  if (articleElement) {
    observer.observe(articleElement, {
      childList: true,
      subtree: true
    })
  }

  onUnmounted(() => {
    observer.disconnect()
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>
<style scoped>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for webkit browsers */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f9fafb;
}

.dark .scrollbar-thin {
  scrollbar-color: #4b5563 #111827;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f9fafb;
  border-radius: 3px;
}

.dark .scrollbar-thin::-webkit-scrollbar-track {
  background: #111827;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb {
  background: #4b5563;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

.dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Smooth transitions */
aside {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced link hover effects */
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: transparent;
  transition: background-color 0.2s ease;
}

.nav-link:hover::before {
  background: #3b82f6;
}

.nav-link.router-link-active::before {
  background: #3b82f6;
}

/* Mobile menu animation */
@media (max-width: 1279px) {
  aside {
    width: 320px !important;
    max-width: 85vw;
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  aside.dark {
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  }
}

/* Desktop reset */
@media (min-width: 1280px) {
  aside {
    position: static !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    box-shadow: none !important;
  }
}

/* Focus styles for accessibility */
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Improved prose styling integration */
:deep(.prose) {
  color: inherit;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: inherit;
}

/* Enhanced responsive design */
@media (min-width: 1280px) {
  .main-container {
    display: grid;
    grid-template-columns: 320px 1fr 256px;
    gap: 1.5rem;
    max-width: 1400px;
  }
}
</style>
