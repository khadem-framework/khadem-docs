<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="ml-4 rtl:ml-0 rtl:mr-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ testimonial.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ testimonial.title }}
              </p>
            </div>
          </div>
          <p class="text-gray-700 dark:text-gray-300 italic">
            "{{ testimonial.quote }}"
          </p>
        </div>
      </div>

      <div class="text-center mt-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">1000+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Contributors</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Countries</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Backend Developer at TechCorp',
    quote: 'Khadem has revolutionized how we build APIs. The performance is incredible and the developer experience is top-notch.'
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    title: 'CTO at StartupXYZ',
    quote: 'Moving from Node.js to Khadem was the best decision we made. The type safety and performance gains are remarkable.'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    title: 'Senior Developer at DataFlow',
    quote: 'The service container and dependency injection system in Khadem make our code so much cleaner and testable.'
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'DevOps Engineer at CloudScale',
    quote: 'Docker deployment with Khadem is seamless. The JIT compilation produces incredibly efficient containers.'
  },
  {
    id: 5,
    name: 'Emily Chen',
    title: 'Full Stack Developer',
    quote: 'The CLI tools are fantastic. Setting up a new project and running migrations is so straightforward.'
  },
  {
    id: 6,
    name: 'Michael Brown',
    title: 'Architect at Enterprise Solutions',
    quote: 'Khadem\'s event system has enabled us to build truly scalable, decoupled applications.'
  }
]
</script>