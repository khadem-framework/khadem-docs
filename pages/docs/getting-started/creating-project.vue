<template>
  <div>
    <!-- Hero Section -->
    <div class="mb-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Creating Your First Project
      </h1>
      <p class="text-xl text-gray-400 leading-relaxed">
        Learn how to create and structure your first <strong class="text-primary-500">Khadem</strong> backend project. 
        We'll walk you through project scaffolding, understanding the structure, and running your application.
      </p>
    </div>

    <!-- Prerequisites -->
    <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-6 mb-10">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <i class="fas fa-exclamation-circle text-blue-500 text-3xl"></i>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white mb-2">Prerequisites</h3>
          <p class="text-gray-300 text-sm mb-3">
            Before creating a project, ensure you have:
          </p>
          <ul class="space-y-1 text-sm text-gray-300">
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-green-500 text-xs"></i>
              <span>Dart SDK 3.0.0+ installed</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="fas fa-check text-green-500 text-xs"></i>
              <span>Khadem CLI installed globally — 
                <NuxtLink to="/docs/getting-started/installation" class="text-blue-400 hover:text-blue-300 underline">
                  Installation Guide
                </NuxtLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Creating New Project -->
    <section class="mb-12">
      <h2 id="creating-new-project" class="text-3xl font-bold mb-4">
        <i class="fas fa-plus-circle text-primary-500 mr-2"></i>
        Create a New Project
      </h2>
      <p class="text-gray-300 mb-6">
        Use the Khadem CLI to scaffold a new project with all the necessary files, folders, and configurations:
      </p>

      <CodeBlock :code="createProjectCode" language="bash" />

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-folder-tree text-green-500"></i>
            <h3 class="font-semibold text-white text-sm">Project Structure</h3>
          </div>
          <p class="text-xs text-gray-400">Complete folder structure with organized directories</p>
        </div>
        
        <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-box text-blue-500"></i>
            <h3 class="font-semibold text-white text-sm">Dependencies</h3>
          </div>
          <p class="text-xs text-gray-400">All required packages and configurations included</p>
        </div>
        
        <div class="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <div class="flex items-center gap-2 mb-2">
            <i class="fas fa-rocket text-purple-500"></i>
            <h3 class="font-semibold text-white text-sm">Ready to Go</h3>
          </div>
          <p class="text-xs text-gray-400">Start building immediately with pre-configured setup</p>
        </div>
      </div>
    </section>

    <!-- Environment Setup -->
    <section class="mb-12">
      <h2 id="environment-setup" class="text-3xl font-bold mb-4">
        <i class="fas fa-cog text-primary-500 mr-2"></i>
        Environment Configuration
      </h2>
      <p class="text-gray-300 mb-6">
        Configure your application by editing the <code class="px-1.5 py-0.5 bg-gray-800 rounded text-sm">.env</code> file 
        in your project root. This file contains environment-specific settings:
      </p>

      <CodeBlock :code="envConfigCode" language="properties" />

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
          <h3 class="font-semibold text-white mb-3 flex items-center">
            <i class="fas fa-info-circle text-blue-500 mr-2"></i>
            Configuration Groups
          </h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><strong class="text-white">APP_*</strong> — Application settings</li>
            <li><strong class="text-white">DB_*</strong> — Database connection</li>
            <li><strong class="text-white">JWT_*</strong> — Authentication tokens</li>
          </ul>
        </div>

        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-5">
          <h3 class="font-semibold text-white mb-3 flex items-center">
            <i class="fas fa-shield-alt text-green-500 mr-2"></i>
            Security Note
          </h3>
          <p class="text-sm text-gray-300">
            Never commit <code class="px-1 py-0.5 bg-gray-900 rounded text-xs">.env</code> files to version control. 
            Keep sensitive data like <code class="px-1 py-0.5 bg-gray-900 rounded text-xs">JWT_SECRET</code> secure.
          </p>
        </div>
      </div>
    </section>

    <!-- Running the Project -->
    <section class="mb-12">
      <h2 id="running-development" class="text-3xl font-bold mb-4">
        <i class="fas fa-play text-primary-500 mr-2"></i>
        Running Your Project
      </h2>
      <p class="text-gray-300 mb-6">
        Start the development server with hot reload support:
      </p>

      <CodeBlock :code="serveCode" language="bash" />

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <i class="fas fa-globe text-green-500"></i>
            </div>
            <div>
              <h3 class="font-semibold text-white">HTTP Server</h3>
              <p class="text-xs text-gray-400">REST API endpoint</p>
            </div>
          </div>
          <code class="text-sm text-green-400">http://localhost:8080</code>
        </div>

        <div class="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <i class="fas fa-plug text-blue-500"></i>
            </div>
            <div>
              <h3 class="font-semibold text-white">WebSocket Server</h3>
              <p class="text-xs text-gray-400">Real-time communication</p>
            </div>
          </div>
          <code class="text-sm text-blue-400">ws://localhost:8080</code>
        </div>
      </div>

      <div class="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
        <div class="flex items-start gap-3">
          <i class="fas fa-fire text-purple-400 text-xl mt-0.5"></i>
          <div>
            <p class="text-sm text-gray-300">
              <strong class="text-white">Hot Reload:</strong> Press <kbd class="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs font-mono">r</kbd> 
              in the terminal to hot reload your application after making changes to your Dart files. Quick and easy!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Checklist -->
    <section class="mb-12">
      <h2 id="project-checklist" class="text-3xl font-bold mb-4">
        <i class="fas fa-tasks text-primary-500 mr-2"></i>
        Project Setup Checklist
      </h2>
      <p class="text-gray-300 mb-6">
        Verify everything is set up correctly before proceeding:
      </p>
      
      <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-check-square text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Project created successfully</p>
              <p class="text-sm text-gray-400">Verify with <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">khadem new --name=my_api</code></p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-square text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Dependencies installed</p>
              <p class="text-sm text-gray-400">Run <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">dart pub get</code> in project directory</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-square text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Environment variables configured</p>
              <p class="text-sm text-gray-400">Edit <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">.env</code> with your settings</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-square text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Development server running</p>
              <p class="text-sm text-gray-400">Start with <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">khadem serve</code> and visit http://localhost:9000</p>
            </div>
          </div>
        </div>
      </div>
    </section>

 
    <!-- Help Section -->
    <div class="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg p-6">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <i class="fas fa-question-circle text-primary-500 text-3xl"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white mb-2">Need Assistance?</h3>
          <p class="text-gray-300 mb-4">
            Stuck or have questions? Our community is here to help you get started!
          </p>
          <div class="flex flex-wrap gap-3">
            <a 
              href="https://github.com/khedrmahmoud/khadem/discussions" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors text-sm font-medium"
            >
              <i class="fas fa-comments mr-2"></i>
              Ask a Question
            </a>
            <a 
              href="https://github.com/khedrmahmoud/khadem/issues" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
            >
              <i class="fab fa-github mr-2"></i>
              Report an Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Creating Your First Project - Khadem Docs',
  meta: [
    {
      name: 'description',
      content: 'Learn how to create your first Khadem project - Complete guide to project scaffolding, structure understanding, and running your Dart backend application.'
    }
  ]
})

const createProjectCode = `# Create a new Khadem project
khadem new --name=my_first_api

# Navigate into the project directory
cd my_first_api

# Install project dependencies
dart pub get`

const envConfigCode = `# Application Configuration
APP_NAME=MyFirstAPI
APP_ENV=development
APP_PORT=8080
APP_LOCALE=en

# Database Configuration (MySQL)
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=my_first_api_db
DB_USERNAME=root
DB_PASSWORD=

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_ACCESS_EXPIRY_MINUTES=60
JWT_REFRESH_EXPIRY_DAYS=30`

const serveCode = `# Run the application in development mode with hot reload
khadem serve

# Your application is now running!
`
</script>