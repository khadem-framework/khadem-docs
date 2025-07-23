<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('features.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl">
        <div
          v-for="feature in features"
          :key="feature.key"
          class="card p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ $t(feature.titleKey) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t(feature.descriptionKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  BoltIcon, 
  CubeIcon, 
  CommandLineIcon, 
  CloudIcon 
} from '@heroicons/vue/24/outline'

const features = [
  // {
  //   key: 'fast',
  //   icon: BoltIcon,
  //   titleKey: 'features.fast.title',
  //   descriptionKey: 'features.fast.description'
  // },
  {
    key: 'modular',
    icon: CubeIcon,
    titleKey: 'features.modular.title',
    descriptionKey: 'features.modular.description'
  },
  {
    key: 'cli',
    icon: CommandLineIcon,
    titleKey: 'features.cli.title',
    descriptionKey: 'features.cli.description'
  },
  {
    key: 'docker',
    icon: CloudIcon,
    titleKey: 'features.docker.title',
    descriptionKey: 'features.docker.description'
  }
]
</script>