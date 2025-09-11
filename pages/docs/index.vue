<template>
  <div class="docs-landing">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Khadem Documentation</h1>
        <p class="hero-description">
          Comprehensive documentation for the Khadem framework - your complete guide to building powerful applications.
        </p>
      </div>
    </div>

    <div class="docs-sections">
      <div class="section-grid">
        <div class="section-card" v-for="section in sections" :key="section.slug">
          <div class="section-icon">
            <i :class="section.icon"></i>
          </div>
          <h3 class="section-title">{{ section.title }}</h3>
          <p class="section-description">{{ section.description }}</p>
          <NuxtLink :to="`/docs/${section.slug}`" class="section-link">
            Explore {{ section.title }}
            <i class="fas fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })

useHead({
  title: 'Khadem Documentation',
  meta: [
    { name: 'description', content: 'Complete documentation for the Khadem framework' }
  ]
})

const sections = ref([
  {
    title: 'Getting Started',
    slug: 'getting-started',
    icon: 'fas fa-rocket',
    description: 'Quick start guide and installation instructions'
  },
  {
    title: 'Core Concepts',
    slug: 'core-concepts',
    icon: 'fas fa-cogs',
    description: 'Fundamental concepts and architecture overview'
  },
  {
    title: 'Database & Models',
    slug: 'database-models',
    icon: 'fas fa-database',
    description: 'Database integration and model management'
  },
  {
    title: 'Auth & Security',
    slug: 'auth-security',
    icon: 'fas fa-shield-alt',
    description: 'Authentication and security features'
  },
  {
    title: 'Advanced Features',
    slug: 'advanced-features',
    icon: 'fas fa-star',
    description: 'Advanced caching, scheduling, and more'
  },
  {
    title: 'Deployment',
    slug: 'deployment',
    icon: 'fas fa-server',
    description: 'Deployment strategies and production setup'
  },
  {
    title: 'Dev Tools',
    slug: 'dev-tools',
    icon: 'fas fa-tools',
    description: 'Development tools and CLI commands'
  }
])
</script>

<style scoped>
.docs-landing {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-section {
  padding: 4rem 0 2rem;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
}

.docs-sections {
  padding: 2rem 0 4rem;
}

.section-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.section-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.section-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.section-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #3b82f6;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.section-link:hover {
  color: #1d4ed8;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-grid {
    grid-template-columns: 1fr;
  }
}
</style>
