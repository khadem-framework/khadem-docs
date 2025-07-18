<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Showcase
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover amazing projects built with Khadem by developers around the world.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 relative">
            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">{{ project.name.charAt(0) }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                View on GitHub
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <div class="card p-8 max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Project
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Built something awesome with Khadem? We'd love to feature it in our showcase!
          </p>
          <a
            href="https://github.com/khadem-framework/showcase"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            Submit Your Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Showcase'
})

const projects = [
  {
    id: 1,
    name: 'TaskFlow API',
    description: 'A comprehensive task management API with real-time updates and team collaboration features.',
    tags: ['API', 'Real-time', 'WebSocket'],
    github: 'https://github.com/example/taskflow-api',
    demo: 'https://taskflow-api.example.com'
  },
  {
    id: 2,
    name: 'E-commerce Backend',
    description: 'Scalable e-commerce platform backend with payment processing and inventory management.',
    tags: ['E-commerce', 'Payments', 'Microservices'],
    github: 'https://github.com/example/ecommerce-backend',
    demo: null
  },
  {
    id: 3,
    name: 'Analytics Dashboard',
    description: 'High-performance analytics API serving millions of data points with real-time insights.',
    tags: ['Analytics', 'Big Data', 'Performance'],
    github: 'https://github.com/example/analytics-dashboard',
    demo: 'https://analytics.example.com'
  },
  {
    id: 4,
    name: 'Chat Application',
    description: 'Real-time chat application with message encryption and file sharing capabilities.',
    tags: ['Chat', 'WebSocket', 'Encryption'],
    github: 'https://github.com/example/chat-app',
    demo: 'https://chat.example.com'
  },
  {
    id: 5,
    name: 'IoT Data Collector',
    description: 'Efficient IoT data collection and processing system handling thousands of devices.',
    tags: ['IoT', 'MQTT', 'Data Processing'],
    github: 'https://github.com/example/iot-collector',
    demo: null
  },
  {
    id: 6,
    name: 'Content Management System',
    description: 'Modern headless CMS with flexible content modeling and API-first architecture.',
    tags: ['CMS', 'Headless', 'Content'],
    github: 'https://github.com/example/headless-cms',
    demo: 'https://cms.example.com'
  }
]
</script>