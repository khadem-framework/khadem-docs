<template>
  <div>
    <h1>Creating Your First Project</h1>

    <p class="mb-6 text-lg">
      Learn how to create, configure, and run your first Khadem backend project. This guide walks you through the entire process from project creation to your first API endpoint.
    </p>

    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
      <div class="flex items-center">
        <div class="text-2xl mr-3">⚡</div>
        <div>
          <h3 class="font-semibold text-blue-800 dark:text-blue-200">Prerequisites</h3>
          <p class="text-blue-700 dark:text-blue-300 text-sm">
            Make sure you have <a href="/docs/installation" class="underline">Khadem CLI installed</a> before proceeding
          </p>
        </div>
      </div>
    </div>

    <h2 id="creating-new-project">Create a New Project</h2>
    <p class="mb-4">Use the Khadem CLI to generate a new project with all the necessary files and folders:</p>

    <CodeBlock :code="createProjectCode" language="bash" />

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
      <p class="text-green-800 dark:text-green-200 text-sm">
        <strong>What happens:</strong> The CLI creates a complete project structure with all necessary files, dependencies, and configurations.
      </p>
    </div>

    <h2 id="project-structure">Project Structure Overview</h2>
    <p class="mb-4">Khadem projects follow a clean, organized structure inspired by Laravel:</p>

    <CodeBlock :code="projectStructureCode" language="text" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center">
          <span class="text-blue-600 mr-2">📁</span> Key Directories
        </h3>
        <ul class="space-y-2 text-sm">
          <li><strong>app/</strong> - Application logic and business code</li>
          <li><strong>config/</strong> - Environment-specific configurations</li>
          <li><strong>routes/</strong> - HTTP and WebSocket route definitions</li>
          <li><strong>database/</strong> - Migrations and seeders</li>
          <li><strong>core/</strong> - Application kernel and bootstrap</li>
        </ul>
      </div>

      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center">
          <span class="text-green-600 mr-2">📄</span> Key Files
        </h3>
        <ul class="space-y-2 text-sm">
          <li><strong>bin/server.dart</strong> - Application entry point</li>
          <li><strong>pubspec.yaml</strong> - Project dependencies</li>
          <li><strong>.env</strong> - Environment variables</li>
          <li><strong>core/kernel.dart</strong> - Service registration</li>
        </ul>
      </div>
    </div>

    <h2 id="environment-setup">Environment Configuration</h2>
    <p class="mb-4">Configure your application environment variables in the <code>.env</code> file:</p>

    <CodeBlock :code="envConfigCode" language="properties" />

    <h3>Configuration Files</h3>
    <p class="mb-4">The main configuration is handled in <code>config/app.dart</code>:</p>
    <CodeBlock :code="appConfigCode" language="dart" />

    <h2 id="first-endpoint">Creating Your First Endpoint</h2>
    <p class="mb-4">Let's create a simple API endpoint. First, create a controller:</p>

    <h3>Create Home Controller</h3>
    <CodeBlock :code="createControllerCode" language="bash" />

    <p class="mb-4">Add the controller logic in <code>app/http/controllers/home_controller.dart</code>:</p>
    <CodeBlock :code="homeControllerCode" language="dart" />

    <h3>Register Routes</h3>
    <p class="mb-4">Update <code>routes/web.dart</code> to register your routes:</p>
    <CodeBlock :code="routesCode" language="dart" />

    <h2 id="running-development">Running in Development</h2>
    <p class="mb-4">Start the development server with hot reload:</p>

    <CodeBlock :code="serveCode" language="bash" />

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
      <p class="text-green-800 dark:text-green-200 text-sm">
        <strong>Server URLs:</strong>
        <br>• HTTP Server: <code>http://localhost:8080</code>
        <br>• WebSocket Server: <code>ws://localhost:8080</code>
      </p>
    </div>

    <h3>Test Your API</h3>
    <p class="mb-4">Test your first endpoint:</p>
    <CodeBlock :code="testEndpointCode" language="bash" />

    <h2 id="database-setup">Database Setup (Optional)</h2>
    <p class="mb-4">If you want to use a database, update your <code>.env</code> file with database credentials:</p>

    <CodeBlock :code="databaseEnvCode" language="properties" />

    <p class="mb-4">Khadem supports MySQL out of the box. PostgreSQL, SQLite, and MongoDB support is coming soon.</p>

    <h2 id="build-production">Building for Production</h2>
    <p class="mb-4">Create an optimized production build:</p>

    <CodeBlock :code="buildCode" language="bash" />

    <h3>Deploy the Build</h3>
    <p class="mb-4">Extract and run the production build:</p>
    <CodeBlock :code="deployCode" language="bash" />

    <h2 id="project-commands">Useful CLI Commands</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-2">Development</h3>
        <CodeBlock :code="devCommandsCode" language="bash" />
      </div>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-2">Database</h3>
        <CodeBlock :code="dbCommandsCode" language="bash" />
      </div>
    </div>

    <h2 id="troubleshooting">Common Issues & Solutions</h2>

    <div class="space-y-4 mb-8">
      <div class="border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Port Already in Use</h3>
        <p class="text-red-700 dark:text-red-300 text-sm mb-2">
          If port 8080 is busy:
        </p>
        <CodeBlock :code="portFixCode" language="bash" />
      </div>

      <div class="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Dependencies Issues</h3>
        <p class="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
          If you encounter dependency issues:
        </p>
        <CodeBlock :code="depsFixCode" language="bash" />
      </div>
    </div>

    <h2 id="next-steps">Next Steps</h2>
    <p class="mb-4">Your Khadem project is ready! Continue exploring:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <NuxtLink to="/docs/routing" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">🛣️</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Routing & Controllers</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Learn about HTTP routing and controllers</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/docs/configuration" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">⚙️</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Configuration</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Environment and app configuration</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/docs/models" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">🗄️</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Models & Database</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Working with data models and ORM</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/docs/container" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">📦</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Service Container</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Dependency injection and providers</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h3 class="font-semibold mb-2">🎯 Project Checklist</h3>
      <div class="space-y-2">
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Project created with <code>khadem new</code></span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Dependencies installed with <code>dart pub get</code></span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Environment configured in <code>.env</code></span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">First endpoint created and tested</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Server running on <code>http://localhost:8080</code></span>
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
  title: 'Creating Your First Project - Khadem Docs'
})

const createProjectCode = `# Create a new Khadem project
khadem new --name=my_first_api

# Navigate into the project directory
cd my_first_api

# Install project dependencies
dart pub get

# Start the development server
khadem serve`

const projectStructureCode = `my_first_api/
├── app/
│   ├── http/
│   │   ├── controllers/
│   │   │   └── home_controller.dart
│   │   └── middleware/
│   │       └── cors_middleware.dart
│   ├── jobs/
│   ├── listeners/
│   ├── models/
│   └── providers/
│       ├── app_service_provider.dart
│       ├── event_service_provider.dart
│       └── scheduler_service_provider.dart
├── bin/
│   └── server.dart
├── config/
│   ├── app.dart
│   ├── development/
│   │   └── logging.json
│   └── production/
├── core/
│   └── kernel.dart
├── database/
│   ├── migrations/
│   └── seeders/
├── lang/
│   ├── ar/
│   └── en/
├── public/
│   ├── index.html
│   └── assets/
├── resources/
│   └── views/
├── routes/
│   ├── socket.dart
│   └── web.dart
├── storage/
│   ├── app/
│   ├── framework/
│   │   ├── cache/
│   │   ├── sessions/
│   │   └── views/
│   └── logs/
├── tests/
├── .env
├── .gitignore
├── pubspec.yaml
└── README.md`

const pubspecCode = `name: my_api
description: A backend API using Khadem
version: 1.0.0

environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  khadem: ^1.0.0

dev_dependencies:
  test: ^1.21.0`

const appConfigCode = `// config/app.dart
import 'package:khadem/khadem.dart';

class AppConfig {
  static final env = Khadem.env;

  static Map<String, Map<String, dynamic>> get configs => {
    'database': {
      'driver': env.getOrDefault('DB_CONNECTION', 'mysql'),
      'host': env.getOrDefault('DB_HOST', 'localhost'),
      'port': env.getInt('DB_PORT'),
      'database': env.get('DB_DATABASE'),
      'username': env.get('DB_USERNAME'),
      'password': env.get('DB_PASSWORD'),
    },
  };
}`

const handlerCode = `// routes/web.dart

server.get('/say-hello', (req, res) {
  res.sendJson({
    'message': 'Hello from Khadem!',
    'timestamp': DateTime.now().toIso8601String()
  });
});`

const serveCode = `# Run the application in development mode
khadem serve`

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

const createControllerCode = `# Create the controllers directory if it doesn't exist
mkdir -p app/http/controllers

# Create the home controller file
touch app/http/controllers/home_controller.dart`

const homeControllerCode = `import 'package:khadem/khadem_dart.dart';

class HomeController {
  static Future<void> index(Request req, Response res) async {
    res.sendJson({
      'message': 'Welcome to Khadem API!',
      'status': 'success',
      'timestamp': DateTime.now().toIso8601String(),
      'version': '1.0.0'
    });
  }

  static Future<void> welcome(Request req, Response res) async {
    final name = req.query('name') ?? 'Guest';

    res.sendJson({
      'message': 'Hello, \${name}! Welcome to your first Khadem API.',
      'status': 'success',
      'data': {
        'name': name,
        'user_agent': req.headers['user-agent'],
        'ip': req.ip,
      }
    });
  }

  static Stream<String> stream(Request req, Response res) async* {
    res.setContentType('text/plain');

    for (int i = 1; i <= 10; i++) {
      yield 'Chunk \${i}: \${DateTime.now()}\\n';
      await Future.delayed(Duration(seconds: 1));
    }
  }
}`

const routesCode = `import 'package:khadem/khadem_dart.dart';
import '../app/http/controllers/home_controller.dart';
import '../core/kernel.dart';

void registerRoutes(Server server) {
  // Register global middlewares
  server.useMiddlewares(Kernel.middlewares);

  // Home Routes
  server.group(
    prefix: '/api',
    middleware: [],
    routes: (router) async {
      router.get('/hello', HomeController.index);
      router.get('/welcome', HomeController.welcome);
      router.get('/stream', HomeController.stream);
    },
  );

  // Serve static files
  server.serveStatic();
}`

const testEndpointCode = `# Test your first endpoint
curl http://localhost:8080/api/hello

# Test with query parameter
curl "http://localhost:8080/api/welcome?name=World"

# Test streaming endpoint
curl http://localhost:8080/api/stream`

const databaseEnvCode = `# Update these values for your database
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=my_first_api_db
DB_USERNAME=root
DB_PASSWORD=your_password_here`

const buildCode = `# Build for production
khadem build

# This creates a production-ready bundle`

const deployCode = `# Extract the production build
tar -xzf build/server.tar.gz -C build/

# Run the production server
dart run ./build/server/bin/server.jit`

const devCommandsCode = `# Start development server
khadem serve

# Run with custom port
khadem serve --port 3000

# Run in background
khadem serve --background`

const dbCommandsCode = `# Run database migrations
khadem migrate

# Create a new migration
khadem make:migration create_users_table

# Run database seeders
khadem seed`

const portFixCode = `# Kill process using port 8080
lsof -ti:8080 | xargs kill -9

# Or use a different port
khadem serve --port 3000`

const depsFixCode = `# Clean and reinstall dependencies
rm -rf .dart_tool pubspec.lock
dart pub get

# Update Khadem to latest version
dart pub global activate khadem`

const buildRunCode = `# Build a JIT snapshot of your application
khadem build

# After building, a compressed bundle will be created:
# build/
# └── server.tar.gz

# Extract the archive:
tar -xzf build/server.tar.gz -C build/

# After extracting, your folder structure will look like this:

build/
├── server/
│   ├── bin/
│   │   └── server.jit     # Compiled JIT executable
│   ├── config/            # Your configuration files
│   └── .env               # Environment variables
└── server.tar.gz          # Original compressed archive

# Run the server
dart run ./build/server/bin/server.jit
`
</script>
