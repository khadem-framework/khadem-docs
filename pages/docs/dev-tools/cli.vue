<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">CLI Commands</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Powerful command-line tools for Khadem framework development and deployment.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font          <li>Use descrip          <li>Don't run migrations on production without testing</li>
          <li>Don't use generic names for database tables</li>
          <li>Don't skip database backups before major changes</li>
          <li>Don't deploy without building JIT snapshot</li>
          <li>Don't hardcode sensitive data in source code</li>
          <li>Don't run multiple queue workers without monitoring</li>
          <li>Don't forget to install dependencies with <code>dart pub get</code></li>
          <li>Don't use development database for testing migrations</li>
          <li>Don't skip code analysis with <code>dart analyze</code></li>
          <li>Don't deploy without testing the build</li> for generated components</li>
          <li>Run migrations before deploying to production</li>
          <li>Use version control for migration files</li>
          <li>Test applications with <code>dart test</code></li>
          <li>Use <code>dart analyze</code> for code quality</li>
          <li>Regularly update Dart SDK</li>
          <li>Use hot reload during development</li>
          <li>Backup database before running migrations</li>
          <li>Monitor queue worker processes</li>
          <li>Build JIT snapshots for production deployment</li>border-b pb-2">Getting Started</h2>

      <CodeBlock
        :code="cliInstallationCode"
        language="bash"
        title="CLI Installation"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">CLI Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Project scaffolding from template</li>
          <li>Code generation for models, controllers, middleware, providers, jobs, listeners</li>
          <li>Development server with hot reload and hot restart</li>
          <li>Database migration management</li>
          <li>Database seeding</li>
          <li>Queue job processing</li>
          <li>Cache management</li>
          <li>JIT snapshot building for production</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Project Management</h2>

      <CodeBlock
        :code="projectCommandsCode"
        language="bash"
        title="Project Creation and Management"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Project Creation</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Single template based on khadem_template</li>
            <li>Automatic .env configuration</li>
            <li>JWT secret key generation</li>
            <li>Project name replacement in files</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Project Options</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>--name</code> - Project name (required)</li>
            <li>Automatic folder structure creation</li>
            <li>Dependency installation ready</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Development Server</h2>

      <CodeBlock
        :code="serverCommandsCode"
        language="bash"
        title="Development Server Commands"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Server Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>Hot reload for instant code changes</li>
          <li>Hot restart for full application restart</li>
          <li>Automatic file watching</li>
          <li>VM Service integration for debugging</li>
          <li>Custom port configuration</li>
          <li>Interactive keyboard controls</li>
          <li>Error handling and recovery</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Code Generation</h2>

      <CodeBlock
        :code="generateCommandsCode"
        language="bash"
        title="Code Generation Commands"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Generated Components</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Models with relationships and traits</li>
            <li>Controllers with basic CRUD methods</li>
            <li>Middleware classes</li>
            <li>Service providers</li>
            <li>Job classes for queue processing</li>
            <li>Event listeners</li>
            <li>Database migrations</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Generation Options</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>--name</code> - Component name (required)</li>
            <li>Folder structure support (e.g., Auth/User)</li>
            <li>Automatic file placement</li>
            <li>Basic code stubs with comments</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Operations</h2>

      <CodeBlock
        :code="databaseCommandsCode"
        language="bash"
        title="Database Management Commands"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Migration Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Run all pending migrations</li>
          <li>Reset all migrations (rollback all)</li>
          <li>Fresh migration (drop all and rerun)</li>
          <li>Database seeding support</li>
          <li>Automatic migration file generation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing & Quality</h2>

      <CodeBlock
        :code="testingCommandsCode"
        language="bash"
        title="Testing and Quality Assurance"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Testing Tools</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Dart's built-in test runner</li>
            <li>Unit tests for individual functions</li>
            <li>Integration tests for components</li>
            <li>Coverage reporting with lcov</li>
            <li>Test file organization in test/ directory</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Quality Tools</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>dart analyze</code> - Static analysis</li>
            <li><code>dart format</code> - Code formatting</li>
            <li>Manual test coverage generation</li>
            <li>Dependency checking with pub</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Deployment & Build</h2>

      <CodeBlock
        :code="deploymentCommandsCode"
        language="bash"
        title="Deployment and Build Commands"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Build Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li>JIT snapshot compilation for faster startup</li>
          <li>Code obfuscation for production</li>
          <li>Archive creation with dependencies</li>
          <li>Custom output path configuration</li>
          <li>Includes config files and assets</li>
          <li>Production-ready executable generation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Commands</h2>

      <CodeBlock
        :code="advancedCommandsCode"
        language="bash"
        title="Advanced CLI Features"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Queue Management</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Process jobs from queue</li>
            <li>Background job processing</li>
            <li>Queue worker management</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache Operations</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Clear application cache</li>
            <li>Cache management for performance</li>
            <li>Memory and storage cache clearing</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <CodeBlock
        :code="configCommandsCode"
        language="bash"
        title="Configuration Management"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Environment Management</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>Manual .env file configuration</li>
          <li>Automatic JWT secret generation</li>
          <li>Project-specific environment setup</li>
          <li>Configuration validation through code</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Interactive Mode</h2>

      <CodeBlock
        :code="interactiveCommandsCode"
        language="bash"
        title="Interactive CLI Mode"
      />

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h3 class="text-lg font-medium text-teal-800 dark:text-teal-200">Interactive Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-teal-700 dark:text-teal-300">
          <li>Development server with keyboard controls</li>
          <li>Hot reload and restart during development</li>
          <li>Real-time file watching</li>
          <li>Interactive error feedback</li>
          <li>Manual code generation commands</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Commands</h2>

      <CodeBlock
        :code="customCommandsCode"
        language="dart"
        title="Creating Custom CLI Commands"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Command Structure</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Inheritance from KhademCommand</li>
            <li>Argument and option definition</li>
            <li>Async handle method implementation</li>
            <li>Logger integration</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Available Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Built-in logger for output</li>
            <li>Argument parsing with validation</li>
            <li>Exit code management</li>
            <li>Error handling and reporting</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Command Reference</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b">Command</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b">Description</th>
              <th class="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b">Options</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem new</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Create a new Khadem project</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem serve</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Start development server with hot reload</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--port, --watch</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:model</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new model class</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:controller</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new controller class</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:migration</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new migration file</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:middleware</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new middleware class</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:provider</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new service provider</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:job</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new job class</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem make:listener</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate a new event listener</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--name</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem migrate</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Run database migrations</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--reset, --fresh</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem seed</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Run database seeders</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">None</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem queue:work</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Process queue jobs</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">None</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem cache:clear</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Clear application cache</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">None</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem build</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Build JIT snapshot for production</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--output, --archive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use descriptive names for generated components</li>
            <li>Run tests before deploying to production</li>
            <li>Use version control for migration files</li>
            <li>Document custom CLI commands</li>
            <li>Use environment-specific configurations</li>
            <li>Regularly update CLI to latest version</li>
            <li>Use interactive mode for complex setups</li>
            <li>Backup database before running migrations</li>
            <li>Monitor queue worker processes</li>
            <li>Use cache warming for better performance</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't run migrations on production without testing</li>
            <li>Don't use generic names for database tables</li>
            <li>Don't skip database backups before major changes</li>
            <li>Don't ignore failed queue jobs</li>
            <li>Don't hardcode sensitive data in commands</li>
            <li>Don't run multiple queue workers without monitoring</li>
            <li>Don't forget to clear cache after configuration changes</li>
            <li>Don't use development database for testing migrations</li>
            <li>Don't skip code generation tests</li>
            <li>Don't deploy without running the build command</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Troubleshooting</h2>

      <div class="space-y-4">
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Common Issues</h3>
          <div class="mt-2 space-y-2">
            <div>
              <strong>Command not found:</strong> Ensure Dart SDK is installed and khadem is activated globally
            </div>
            <div>
              <strong>Port already in use:</strong> Use different port with <code>khadem serve --port=3001</code>
            </div>
            <div>
              <strong>Database connection failed:</strong> Check database configuration and connectivity
            </div>
            <div>
              <strong>Migration errors:</strong> Review migration files and database schema
            </div>
            <div>
              <strong>Build failures:</strong> Check for syntax errors with <code>dart analyze</code>
            </div>
            <div>
              <strong>Hot reload not working:</strong> Ensure VM service connection (check port 8181)
            </div>
          </div>
        </div>

        <CodeBlock
          :code="troubleshootingCode"
          language="bash"
          title="Troubleshooting Commands"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'CLI Commands',
  meta: [
    { name: 'description', content: 'Khadem CLI commands for development and deployment' }
  ]
})

const cliInstallationCode = `# Install Khadem CLI globally
dart pub global activate khadem_cli

# Verify installation
khadem --version

# View help
khadem --help

# View available commands
khadem`;

const projectCommandsCode = `# Create a new Khadem project
khadem new --name=my_project

# Create project with specific name
khadem new --name=my_api

# List available templates (if any)
khadem new --help

# Initialize project in existing directory (if supported)
# khadem init (not currently available)`

const serverCommandsCode = `# Start development server with hot reload
khadem serve

# Start server on specific port
khadem serve --port=3001

# Start server with file watching disabled
khadem serve --no-watch

# Interactive commands during development:
# r - Hot reload
# R - Hot restart  
# q - Quit server`

const generateCommandsCode = `# Generate a model
khadem make:model --name=User

# Generate model with folder structure
khadem make:model --name=Auth/User

# Generate controller
khadem make:controller --name=UserController

# Generate controller with folder
khadem make:controller --name=auth/AuthController

# Generate middleware
khadem make:middleware --name=AuthMiddleware

# Generate provider
khadem make:provider --name=AuthServiceProvider

# Generate job
khadem make:job --name=SendEmailJob

# Generate listener
khadem make:listener --name=UserEventListener

# Generate migration
khadem make:migration --name=create_users_table`

const databaseCommandsCode = `# Run all pending migrations
khadem migrate

# Reset all migrations (rollback all)
khadem migrate --reset

# Fresh migration (drop all tables and rerun)
khadem migrate --fresh

# Run seeders
khadem seed`

const testingCommandsCode = `# Run all tests (using pub run test)
dart test

# Run specific test file
dart test test/unit/user_test.dart

# Run tests with coverage
dart test --coverage

# Run tests in verbose mode
dart test --verbose

# Run tests matching pattern
dart test -k "User"

# Generate test coverage report
dart test --coverage && genhtml coverage/lcov.info -o coverage/html

# Run integration tests
dart test test/integration/

# Run performance tests
dart test test/performance/

# Generate test file (manual creation recommended)
# No automated test generation command available`

const deploymentCommandsCode = `# Build JIT snapshot for production
khadem build

# Build with custom output path
khadem build --output=bin/my_app.jit

# Build and create archive
khadem build --archive

# Build without deleting temp files
khadem build --no-delete-temp

# Deploy (manual process - no automated deploy command)
# Manual deployment steps:
# 1. Build the application: khadem build --archive
# 2. Upload the archive to your server
# 3. Extract and configure environment
# 4. Start the application`

const advancedCommandsCode = `# Process queue jobs
khadem queue:work

# Clear application cache
khadem cache:clear

# Run scheduled tasks (if implemented)
# khadem schedule:run (not currently available)

# Additional available commands:
# khadem seed - Run database seeders
# khadem build - Build JIT snapshot
# khadem make:* - Various code generation commands`

const configCommandsCode = `# View help for any command
khadem --help
khadem <command> --help

# Check system status (manual)
# No automated doctor command available
# Manual system checks:
# - Verify Dart SDK: dart --version
# - Check dependencies: dart pub get
# - Test database: manual verification

# Environment configuration (manual)
# Edit .env file directly for configuration
# No automated env generation command available`

const interactiveCommandsCode = `# Interactive development with serve command
khadem serve

# During development, use these keyboard shortcuts:
# r - Hot reload (reload code changes)
# R - Hot restart (full application restart)
# q - Quit the development server

# Manual code generation (no interactive mode available)
khadem make:model --name=User
khadem make:controller --name=UserController
khadem make:migration --name=create_users_table`

const customCommandsCode = `import 'dart:io';
import 'package:khadem/src/cli/bus/command.dart';

class CustomCommand extends KhademCommand {
  @override
  String get name => 'custom:example';

  @override
  String get description => 'Example custom command';

  CustomCommand({required super.logger}) {
    argParser.addOption('name', abbr: 'n', help: 'Name argument');
    argParser.addFlag('verbose', abbr: 'v', help: 'Verbose output');
  }

  @override
  Future<void> handle(List<String> args) async {
    final name = argResults?['name'] as String?;
    final verbose = argResults?['verbose'] as bool? ?? false;

    if (verbose) {
      logger.info('Starting custom command...');
    }

    // Your custom logic here
    logger.info('Hello, \$name!');

    if (verbose) {
      logger.info('Custom command completed.');
    }

    exit(0);
  }
}

// Register in command registry
// Add to CommandRegistry._registerCoreCommands() or create custom registry`

const troubleshootingCode = `# Check CLI version and available commands
khadem --help
khadem <command> --help

# Check Dart SDK version
dart --version

# Install/update dependencies
dart pub get

# Check for syntax errors
dart analyze

# Run tests to verify functionality
dart test

# Clear any cached files (manual)
# Delete .dart_tool directory if needed
# rm -rf .dart_tool

# Check database connectivity (manual)
# Verify database configuration in config files

# View application logs (if running)
# tail -f logs/app.log (if log files exist)

# Restart development server
# Stop with Ctrl+C, then run: khadem serve`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
