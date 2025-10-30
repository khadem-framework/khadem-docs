<template>
  <div>
    <!-- Hero Section -->
    <div class="mb-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Khadem
      </h1>
      <p class="text-xl text-gray-400 leading-relaxed">
        A powerful, modern <strong class="text-primary-500">Dart backend framework</strong> for building 
        high-performance, scalable web applications with elegance and full control.
      </p>
    </div>

    <!-- Version Badge -->
    <div class="flex flex-wrap items-center gap-3 mb-10">
    
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
        <i class="fas fa-code mr-2"></i>
        Dart >=3.0.0
      </span>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
        <i class="fas fa-balance-scale mr-2"></i>
        Apache 2.0
      </span>
    </div>

    <!-- What is Khadem -->
    <section class="mb-12">
      <h2 id="what-is-khadem" class="text-3xl font-bold mb-4">
        <i class="fas fa-question-circle text-primary-500 mr-2"></i>
        What is Khadem?
      </h2>
      <p class="text-lg text-gray-300 mb-4 leading-relaxed">
        <strong>Khadem (خادم)</strong> is a comprehensive backend framework designed for developers who demand 
        <strong>performance</strong>, <strong>elegance</strong>, and <strong>full control</strong>. 
        Built with Dart, it provides everything you need to create robust web applicationsfrom 
        dependency injection and modular architecture to authentication, background jobs, and deployment tools.
      </p>
      <p class="text-gray-400 mb-6">
        Whether you are building microservices, monolithic applications, or CLI tools, Khadem gives you 
        modern backend features powered by Dart's exceptional speed and efficiency.
      </p>

      <!-- Quick Highlights Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-lg border border-primary-500/20">
          <i class="fas fa-rocket text-primary-500 text-2xl mt-1"></i>
          <div>
            <h3 class="font-semibold text-white mb-1">High Performance</h3>
            <p class="text-sm text-gray-400">Dart JIT & AOT compilation for exceptional speed</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg border border-blue-500/20">
          <i class="fas fa-cubes text-blue-500 text-2xl mt-1"></i>
          <div>
            <h3 class="font-semibold text-white mb-1">Modular Design</h3>
            <p class="text-sm text-gray-400">Clean architecture with service providers & DI</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-lg border border-green-500/20">
          <i class="fas fa-shield-alt text-green-500 text-2xl mt-1"></i>
          <div>
            <h3 class="font-semibold text-white mb-1">Production Ready</h3>
            <p class="text-sm text-gray-400">JWT auth, Docker support, and security built-in</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="mb-12">
      <h2 id="quick-start" class="text-3xl font-bold mb-4">
        <i class="fas fa-play-circle text-primary-500 mr-2"></i>
        Quick Start
      </h2>
      <p class="text-gray-300 mb-6">
        Get started with Khadem in under 2 minutes. Install the CLI, create a project, and start building.
      </p>
      <CodeBlock :code="quickStartCode" language="bash" />
      
      <div class="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p class="text-sm text-gray-300">
          <i class="fas fa-info-circle text-blue-400 mr-2"></i>
          <strong>Pro tip:</strong> Use <code class="px-2 py-1 bg-gray-800 rounded text-xs">khadem serve</code> 
          for development with hot reload support, leveraging Dart isolate system for true concurrency.
        </p>
      </div>
    </section>

    <!-- Key Features -->
    <section class="mb-12">
      <h2 id="key-features" class="text-3xl font-bold mb-4">
        <i class="fas fa-star text-primary-500 mr-2"></i>
        Key Features
      </h2>
      <p class="text-gray-300 mb-6">
        Khadem comes packed with powerful features to accelerate your development and simplify complex tasks.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FeatureCard title="Service Container" icon="fas fa-box">
          Powerful dependency injection system with automatic resolution, singleton support, and flexible binding options.
        </FeatureCard>
        
        <FeatureCard title="Event System" icon="fas fa-bolt">
          Decouple your application logic with async event-driven architecture and listener-based patterns.
        </FeatureCard>
        
        <FeatureCard title="CLI Tools" icon="fas fa-terminal">
          Comprehensive command-line tools with automatic discovery, code generation, and project scaffolding.
        </FeatureCard>
        
        <FeatureCard title="Database & ORM" icon="fas fa-database">
          Full migration system, database seeders, and MySQL support with an extensible driver architecture.
        </FeatureCard>
        
        <FeatureCard title="Queue & Jobs" icon="fas fa-tasks">
          Background job processing with Redis queue support for asynchronous task handling.
        </FeatureCard>
        
        <FeatureCard title="Authentication" icon="fas fa-lock">
          JWT-based authentication system with secure token generation, multi-device support, and middleware protection.
        </FeatureCard>
        
        <FeatureCard title="Middleware & Routing" icon="fas fa-route">
          Clean, modular routing with full middleware support for request/response processing.
        </FeatureCard>
        
        <FeatureCard title="Caching" icon="fas fa-tachometer-alt">
          Multiple caching drivers including Redis and memory-based caching for optimal performance.
        </FeatureCard>
        
        <FeatureCard title="File Storage" icon="fas fa-folder-open">
          Flexible file upload and storage management system with support for multiple storage drivers.
        </FeatureCard>
        
        <FeatureCard title="Validation" icon="fas fa-check-circle">
          Comprehensive validation rules with custom error messages and multi-language support.
        </FeatureCard>
        
        <FeatureCard title="Logging" icon="fas fa-file-alt">
          Structured logging system with multiple output formats and configurable log levels.
        </FeatureCard>
        
        <FeatureCard title="Internationalization" icon="fas fa-globe">
          Built-in i18n support with JSON-based translations and dot-notation access.
        </FeatureCard>
      </div>
    </section>

    <!-- Why Choose Khadem -->
    <section class="mb-12">
      <h2 id="why-khadem" class="text-3xl font-bold mb-4">
        <i class="fas fa-heart text-primary-500 mr-2"></i>
        Why Choose Khadem?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Performance First</h3>
              <p class="text-sm text-gray-400">Built with Dart for exceptional speed, leveraging JIT during development and AOT for production deployments.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Developer Experience</h3>
              <p class="text-sm text-gray-400">Intuitive API design with excellent tooling, auto-discovery, and comprehensive code generation capabilities.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Modern Structure</h3>
              <p class="text-sm text-gray-400">Follows Dart package conventions with organized lib directory structure and clear separation of concerns.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Full Control</h3>
              <p class="text-sm text-gray-400">No magic complete transparency and control over your application with explicit configuration.</p>
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Scalable Architecture</h3>
              <p class="text-sm text-gray-400">Designed to handle growth from prototype to production scale with Dart isolates for true concurrency.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Security Built-in</h3>
              <p class="text-sm text-gray-400">Security best practices included from the ground up with JWT authentication and middleware protection.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Docker Ready</h3>
              <p class="text-sm text-gray-400">Production-ready with Docker support and optimized containers for seamless deployment.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
            <div>
              <h3 class="font-semibold text-white mb-1">Active Development</h3>
              <p class="text-sm text-gray-400">Growing ecosystem with continuous improvements, taking advantage of the latest Dart features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section class="mb-12">
      <h2 id="requirements" class="text-3xl font-bold mb-4">
        <i class="fas fa-clipboard-check text-primary-500 mr-2"></i>
        Requirements
      </h2>
      <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-white mb-3">
              <i class="fas fa-check text-green-500 mr-2"></i>
              Required
            </h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-2">
                <i class="fas fa-chevron-right text-primary-500 text-xs"></i>
                <strong>Dart SDK:</strong> 3.0.0
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-chevron-right text-primary-500 text-xs"></i>
                <strong>Platforms:</strong> Windows, macOS, Linux
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-white mb-3">
              <i class="fas fa-plus-circle text-blue-500 mr-2"></i>
              Optional
            </h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center gap-2">
                <i class="fas fa-chevron-right text-primary-500 text-xs"></i>
                <strong>Database:</strong> MySQL (for database features)
              </li>
              <li class="flex items-center gap-2">
                <i class="fas fa-chevron-right text-primary-500 text-xs"></i>
                <strong>Cache:</strong> Redis (for caching & queues)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

 
    <!-- Community & Support -->
    <section class="mb-12">
      <h2 id="community" class="text-3xl font-bold mb-4">
        <i class="fas fa-users text-primary-500 mr-2"></i>
        Community & Support
      </h2>
      <p class="text-gray-300 mb-6">
        Join our growing community of Dart backend developers and get the help you need.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a 
          href="https://github.com/khedrmahmoud/khadem/issues" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-lg transition-all group"
        >
          <i class="fab fa-github text-red-500 text-2xl group-hover:scale-110 transition-transform"></i>
          <div>
            <h3 class="font-semibold text-white">Report Issues</h3>
            <p class="text-xs text-gray-400">Found a bug? Let us know</p>
          </div>
        </a>

        <a 
          href="https://github.com/khedrmahmoud/khadem/discussions" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-lg transition-all group"
        >
          <i class="fas fa-comments text-blue-500 text-2xl group-hover:scale-110 transition-transform"></i>
          <div>
            <h3 class="font-semibold text-white">Discussions</h3>
            <p class="text-xs text-gray-400">Share ideas and ask questions</p>
          </div>
        </a>

        <a 
          href="https://github.com/khedrmahmoud/khadem" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 rounded-lg transition-all group"
        >
          <i class="fas fa-code text-purple-500 text-2xl group-hover:scale-110 transition-transform"></i>
          <div>
            <h3 class="font-semibold text-white">Contribute</h3>
            <p class="text-xs text-gray-400">Help improve Khadem</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Footer Note -->
    <div class="mt-12 p-6 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg text-center">
      <p class="text-gray-300 mb-2">
        <i class="fas fa-heart text-red-500 mr-2"></i>
        Built with passion for the Dart community by 
        <a href="https://github.com/khedrmahmoud" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-400 font-semibold">
          Khedr Mahmoud
        </a>
      </p>
      <p class="text-sm text-gray-400 italic">
        Empowering developers to build powerful backend applications with the elegance and performance of Dart
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Getting Started - Khadem Docs',
  meta: [
    {
      name: 'description',
      content: 'Get started with Khadem - A powerful, modern Dart backend framework for building high-performance, scalable web applications.'
    }
  ]
})

const quickStartCode = `# Install Khadem CLI globally
dart pub global activate khadem

# Create a new project
khadem new --name=my_api

# Navigate to project directory
cd my_api

# Install dependencies
dart pub get

# Start development server with hot reload
khadem serve
`;
</script>
