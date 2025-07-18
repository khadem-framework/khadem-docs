<template>
  <div>
    <h1>🚀 Getting Started with Khadem</h1>

    <p class="mb-6 text-lg">
      Welcome to <strong>Khadem</strong> — the Laravel-inspired, Dart-powered backend framework for building fast, scalable APIs and CLI tools.
    </p>

    <h2 id="what-is-khadem">🧾 What is Khadem?</h2>
    <p class="mb-4">
      <strong>Khadem (خادم)</strong> is a modern and expressive backend framework built for the Dart language. It offers:
    </p>
    <ul class="list-disc pl-6 mb-8">
      <li><strong>⚡ High Performance:</strong> Powered by Dart's JIT and AOT compilation</li>
      <li><strong>🧱 Modular Design:</strong> Clean architecture using Dependency Injection</li>
      <li><strong>🛠️ CLI First:</strong> Rich set of commands to scaffold and manage your project</li>
      <li><strong>🚀 Production Ready:</strong> Environment configs, JWT auth, and Docker-ready</li>
    </ul>

    <h2 id="key-features">🧩 Key Features</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <FeatureCard title="Service Container" icon="fas fa-cogs">
        Powerful and flexible dependency injection system.
      </FeatureCard>
      <FeatureCard title="Event System" icon="fas fa-bolt">
        Decouple your logic using async event-driven architecture.
      </FeatureCard>
      <FeatureCard title="CLI Tools" icon="fas fa-terminal">
        Intuitive commands to generate code and manage your app.
      </FeatureCard>
      <FeatureCard title="Migrations & ORM" icon="fas fa-database">
        Manage your database schema and models with ease.
      </FeatureCard>
    </div>

    <h2 id="quick-start">⚡ Quick Start</h2>
    <p>Follow these steps to spin up your first project:</p>
    <CodeBlock :code="quickStartCode" language="bash" />

    <h2 id="next-steps">📘 Next Steps</h2>
    <p>Once your project is created, here’s what you can explore next:</p>
    <ol class="list-decimal pl-6 mt-4">
      <li><NuxtLink to="/docs/installation">Complete Installation Guide</NuxtLink></li>
      <li><NuxtLink to="/docs/creating-project">Creating Your First Project</NuxtLink></li>
      <li><NuxtLink to="/docs/folder-structure">Understanding the Folder Structure</NuxtLink></li>
      <li><NuxtLink to="/docs/configuration">Environment & Configuration</NuxtLink></li>
    </ol>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Getting Started - Khadem Docs'
})

const quickStartCode = `# Install Khadem globally
dart pub global activate khadem

# Create a new project
khadem new --name=my_api

# Navigate to project directory
cd my_api

# Start development server
khadem serve`;
</script>
