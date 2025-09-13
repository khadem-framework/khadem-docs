<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Framework</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A powerful, modern Dart framework for building scalable web applications with built-in caching, authentication, database integration, and more.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">MVC Architecture</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Database ORM</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Authentication</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Caching</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">REST API</span>
        <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">WebSockets</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Get Started in Minutes</h3>

        <CodeBlock
          :code="quickStartCode"
          language="bash"
          title="Installation & Setup"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Khadem requires Dart SDK 2.19+ and follows semantic versioning</p>
          <p><strong>⚡ Tip:</strong> Use <code>khadem create myapp</code> to scaffold a new project</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Core Features</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-route text-blue-600 dark:text-blue-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Routing</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Powerful routing system with middleware support, route groups, and parameter binding.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Route.get('/users', handler)</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-database text-green-600 dark:text-green-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Database ORM</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Built-in ORM with migrations, relationships, and query builder for multiple databases.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">User().query().where('active', true)</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-shield-alt text-purple-600 dark:text-purple-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Authentication</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Complete auth system with sessions, JWT, OAuth, and role-based permissions.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">@auth guard='jwt'</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-bolt text-red-600 dark:text-red-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Caching</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Multiple cache drivers with tags, TTL, and automatic invalidation strategies.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cache.remember('key', duration, fn)</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-code text-orange-600 dark:text-orange-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Template Engine</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Powerful template system with directives, layouts, and component support.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">@if(condition) @endif</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-plug text-yellow-600 dark:text-yellow-400"></i>
            </div>
            <h3 class="text-lg font-semibold">Middleware</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Flexible middleware system for request/response processing and cross-cutting concerns.
          </p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">middleware: [AuthMiddleware()]</code>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Architecture Overview</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">MVC Pattern</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Clean separation of concerns with Models, Views, and Controllers working together seamlessly.
          </p>
          <CodeBlock
            :code="mvcExampleCode"
            language="dart"
            title="MVC Structure"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Service Providers</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Dependency injection and service registration through a powerful provider system.
          </p>
          <CodeBlock
            :code="providerExampleCode"
            language="dart"
            title="Service Registration"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Documentation Sections</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="section in sections"
          :key="section.slug"
          :to="`/docs/${section.slug}`"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
        >
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <i :class="section.icon" class="text-blue-600 dark:text-blue-400"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ section.title }}</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ section.description }}</p>
          <div class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span>Learn more</span>
            <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Why Choose Khadem?</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">🚀 Performance First</h4>
            <p class="text-sm text-green-700 dark:text-green-300">
              Built on Dart's efficient runtime with optimized caching and database layers for maximum performance.
            </p>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">🔧 Developer Experience</h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Intuitive API design, comprehensive documentation, and powerful CLI tools for rapid development.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">🛡️ Production Ready</h4>
            <p class="text-sm text-purple-700 dark:text-purple-300">
              Battle-tested architecture with security best practices, error handling, and monitoring built-in.
            </p>
          </div>

          <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">📈 Scalable Architecture</h4>
            <p class="text-sm text-orange-700 dark:text-orange-300">
              Designed for growth with modular components, microservices support, and horizontal scaling capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Getting Help</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <i class="fab fa-github text-blue-600 dark:text-blue-400 text-xl"></i>
          </div>
          <h4 class="font-medium mb-2">GitHub Issues</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Report bugs or request features on our GitHub repository.
          </p>
          <a href="https://github.com/khedrmahmoud/khadem" class="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            View Repository
          </a>
        </div>

        <div class="text-center">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-book text-green-600 dark:text-green-400 text-xl"></i>
          </div>
          <h4 class="font-medium mb-2">Documentation</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Explore our comprehensive documentation and examples.
          </p>
          <NuxtLink to="/docs/getting-started" class="text-green-600 dark:text-green-400 hover:underline text-sm">
            Browse Docs
          </NuxtLink>
        </div>

        <div class="text-center">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <i class="fas fa-users text-purple-600 dark:text-purple-400 text-xl"></i>
          </div>
          <h4 class="font-medium mb-2">Community</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Join our community for discussions and support.
          </p>
          <a href="#" class="text-purple-600 dark:text-purple-400 hover:underline text-sm">
            Join Community
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })

useHead({
  title: 'Khadem Framework Documentation',
  meta: [
    { name: 'description', content: 'Complete documentation for the Khadem Dart framework - build scalable web applications with MVC architecture, database ORM, authentication, and more' }
  ]
})

// Quick Start Code
const quickStartCode = `# Install Dart SDK (if not already installed)
# Visit: https://dart.dev/get-dart

# Install Khadem CLI
dart pub global activate khadem_cli

# Create a new Khadem project
khadem create my_app

# Navigate to project
cd my_app

# Install dependencies
dart pub get

# Run development server
khadem serve

# Your app is now running at http://localhost:3000`

// MVC Example
const mvcExampleCode = `// Model - app/models/user.dart
class User extends KhademModel<User> {
  int? id;
  String? name;
  String? email;

  @override
  String get table => 'users';
}

// Controller - app/http/controllers/user_controller.dart
class UserController {
  static Future index(Request req, Response res) async {
    final users = await User().query().paginate(1, 15);
    return res.view('users.index', {'users': users});
  }
}

// Route - routes/web.dart
Route.get('/users', UserController.index);`

// Service Provider Example
const providerExampleCode = `// app/providers/app_service_provider.dart
class AppServiceProvider extends ServiceProvider {
  @override
  Future<void> register() async {
    // Register services
    this.app.singleton(DatabaseService());
    this.app.bind(CacheService());
  }

  @override
  Future<void> boot() async {
    // Bootstrap application
    await this.app.make(DatabaseService()).connect();
  }
}

// Usage in controller
class PostController {
  static Future index(Request req, Response res) async {
    final cache = await req.app.make(CacheService());
    // Use cache service...
  }
}`

// Documentation Sections
const sections = ref([
  {
    title: 'Getting Started',
    slug: 'getting-started',
    icon: 'fas fa-rocket',
    description: 'Installation guide, project setup, and basic concepts to get you started quickly.'
  },
  {
    title: 'Core Concepts',
    slug: 'core-concepts',
    icon: 'fas fa-cogs',
    description: 'Fundamental concepts including MVC architecture, routing, middleware, and request lifecycle.'
  },
  {
    title: 'Database & Models',
    slug: 'database-models',
    icon: 'fas fa-database',
    description: 'Database integration, ORM usage, migrations, relationships, and query building.'
  },
  {
    title: 'Auth & Security',
    slug: 'auth-security',
    icon: 'fas fa-shield-alt',
    description: 'Authentication, authorization, sessions, JWT tokens, and security best practices.'
  },
  {
    title: 'Advanced Features',
    slug: 'advanced-features',
    icon: 'fas fa-star',
    description: 'Caching, background jobs, WebSockets, file uploads, and other advanced features.'
  },
  {
    title: 'Deployment',
    slug: 'deployment',
    icon: 'fas fa-server',
    description: 'Production deployment, Docker, cloud platforms, and performance optimization.'
  },
  {
    title: 'Dev Tools',
    slug: 'dev-tools',
    icon: 'fas fa-tools',
    description: 'CLI commands, debugging tools, testing framework, and development utilities.'
  }
])
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
