<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Latest news, updates, and insights from the Khadem development team.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in posts"
          :key="post.id"
          class="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 relative">
            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span class="text-white text-4xl">📝</span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{{ formatDate(post.date) }}</span>
              <span>•</span>
              <span>{{ post.readTime }} min read</span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ post.excerpt }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              Read More →
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="text-center mt-16">
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Want to stay updated with the latest Khadem news?
        </p>
        <a
          href="https://github.com/khadem-framework/khadem/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Follow on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Blog'
})

const posts = [
  {
    id: 1,
    title: 'Introducing Khadem: The Modern Dart Backend Framework',
    excerpt: 'We\'re excited to announce the first stable release of Khadem, a new backend framework for Dart developers.',
    date: '2024-01-15',
    readTime: 5,
    tags: ['Release', 'Announcement'],
    slug: 'introducing-khadem'
  },
  {
    id: 2,
    title: 'Building High-Performance APIs with Khadem',
    excerpt: 'Learn how to leverage Khadem\'s JIT compilation and optimized architecture for maximum performance.',
    date: '2024-01-10',
    readTime: 8,
    tags: ['Tutorial', 'Performance'],
    slug: 'high-performance-apis'
  },
  {
    id: 3,
    title: 'Dependency Injection in Khadem: A Complete Guide',
    excerpt: 'Master the service container and dependency injection system in Khadem for clean, testable code.',
    date: '2024-01-05',
    readTime: 12,
    tags: ['Tutorial', 'Architecture'],
    slug: 'dependency-injection-guide'
  },
  {
    id: 4,
    title: 'Deploying Khadem Applications with Docker',
    excerpt: 'Step-by-step guide to containerizing and deploying your Khadem applications using Docker.',
    date: '2024-01-01',
    readTime: 10,
    tags: ['Tutorial', 'Docker', 'Deployment'],
    slug: 'docker-deployment'
  },
  {
    id: 5,
    title: 'Event-Driven Architecture with Khadem',
    excerpt: 'Explore how to build scalable, decoupled applications using Khadem\'s powerful event system.',
    date: '2023-12-28',
    readTime: 9,
    tags: ['Tutorial', 'Architecture', 'Events'],
    slug: 'event-driven-architecture'
  },
  {
    id: 6,
    title: 'Database Migrations and Schema Management',
    excerpt: 'Learn how to manage your database schema evolution with Khadem\'s migration system.',
    date: '2023-12-25',
    readTime: 7,
    tags: ['Tutorial', 'Database'],
    slug: 'database-migrations'
  }
]

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>