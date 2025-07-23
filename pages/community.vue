<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Community
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Join the growing Khadem community and connect with developers from around the world.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="platform in platforms"
          :key="platform.name"
          class="card p-6 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
               :class="platform.bgColor">
               <Icon :icon="platform.icon" class="w-8 h-8 text-white"  />
            <!-- <component :is="platform.icon" class="w-8 h-8 text-white" /> -->
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ platform.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ platform.description }}
          </p>
          <a
            :href="platform.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            Join {{ platform.name }}
          </a>
        </div>
      </div>

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contributing
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Khadem is an open-source project and we welcome contributions from the community. 
            Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.
          </p>
          <div class="space-y-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon class="w-6 h-6 text-green-500" />
              <span class="text-gray-700 dark:text-gray-300">Bug fixes and improvements</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon class="w-6 h-6 text-green-500" />
              <span class="text-gray-700 dark:text-gray-300">New features and enhancements</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon class="w-6 h-6 text-green-500" />
              <span class="text-gray-700 dark:text-gray-300">Documentation updates</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <CheckCircleIcon class="w-6 h-6 text-green-500" />
              <span class="text-gray-700 dark:text-gray-300">Community support</span>
            </div>
          </div>
          <a
            href="https://github.com/khadem-framework/khadem/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary mt-6"
          >
            Contributing Guide
          </a>
        </div>

        <div class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Code of Conduct
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            We are committed to providing a welcoming and inclusive environment for all community members. 
            Please read and follow our code of conduct to ensure a positive experience for everyone.
          </p>
          <div class="space-y-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <HeartIcon class="w-6 h-6 text-red-500" />
              <span class="text-gray-700 dark:text-gray-300">Be respectful and inclusive</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <HeartIcon class="w-6 h-6 text-red-500" />
              <span class="text-gray-700 dark:text-gray-300">Support fellow developers</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <HeartIcon class="w-6 h-6 text-red-500" />
              <span class="text-gray-700 dark:text-gray-300">Share knowledge and experience</span>
            </div>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <HeartIcon class="w-6 h-6 text-red-500" />
              <span class="text-gray-700 dark:text-gray-300">Create a positive environment</span>
            </div>
          </div>
          <a
            href="https://github.com/khadem-framework/khadem/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary mt-6"
          >
            Read Full Code of Conduct
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Community'
})
const platforms = [
  {
    name: 'GitHub',
    description: 'Track development progress and contribute.',
    url: 'https://github.com/khadem-framework',
    icon: 'mdi:github', // Material Design Icon set
    bgColor: 'bg-gray-800'
  },
  {
    name: 'Discord',
    description: 'Chat and collaborate in real time.',
    url: 'https://discord.gg/khadem',
    icon: 'mdi:discord',
    bgColor: 'bg-indigo-600'
  },
  {
    name: 'Twitter',
    description: 'Stay updated with latest news.',
    url: 'https://twitter.com/khadem_framework',
    icon: 'mdi:twitter',
    bgColor: 'bg-blue-400'
  }
]

</script>