<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">CLI Commands</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Powerful command-line tools for Khadem framework development and deployment.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Getting Started</h2>

      <CodeBlock
        :code="cliInstallationCode"
        language="bash"
        title="CLI Installation"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">CLI Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Project scaffolding and generation</li>
          <li>Database migrations and seeders</li>
          <li>Code generation for models, controllers, and services</li>
          <li>Development server management</li>
          <li>Testing and quality assurance tools</li>
          <li>Deployment and build optimization</li>
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
          <h3 class="font-medium">Project Templates</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>basic</code> - Minimal setup</li>
            <li><code>api</code> - REST API focused</li>
            <li><code>full</code> - Complete application</li>
            <li><code>microservice</code> - Service-oriented</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Project Options</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>--database</code> - Database type</li>
            <li><code>--auth</code> - Authentication setup</li>
            <li><code>--websocket</code> - WebSocket support</li>
            <li><code>--docker</code> - Docker configuration</li>
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
          <li>Hot reload for instant development</li>
          <li>Built-in debugging and logging</li>
          <li>Environment-specific configurations</li>
          <li>Automatic dependency injection</li>
          <li>Request/response monitoring</li>
          <li>Graceful shutdown handling</li>
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
          <h3 class="font-medium">Generated Files</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Models with relationships</li>
            <li>Controllers with CRUD operations</li>
            <li>Services with business logic</li>
            <li>Middleware for request handling</li>
            <li>Tests for generated code</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Generation Options</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>--migration</code> - Create database migration</li>
            <li><code>--factory</code> - Generate model factory</li>
            <li><code>--resource</code> - Create API resource</li>
            <li><code>--test</code> - Generate unit tests</li>
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
          <li>Automatic migration generation</li>
          <li>Schema versioning and rollback</li>
          <li>Database seeding for test data</li>
          <li>Multi-environment support</li>
          <li>Migration status tracking</li>
          <li>Database optimization tools</li>
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
          <h3 class="font-medium">Test Types</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Unit tests for individual functions</li>
            <li>Integration tests for components</li>
            <li>End-to-end API tests</li>
            <li>Performance and load tests</li>
            <li>Database tests with transactions</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Quality Tools</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Code formatting and linting</li>
            <li>Security vulnerability scanning</li>
            <li>Dependency analysis</li>
            <li>Performance profiling</li>
            <li>Coverage reporting</li>
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
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Build Optimization</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li>Tree shaking for smaller bundles</li>
          <li>Code splitting for better loading</li>
          <li>Asset optimization and compression</li>
          <li>Docker container generation</li>
          <li>Multi-stage build support</li>
          <li>CDN asset deployment</li>
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
            <li>Job queue processing</li>
            <li>Failed job management</li>
            <li>Queue monitoring</li>
            <li>Worker process control</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache Operations</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Cache clearing and warming</li>
            <li>Cache statistics</li>
            <li>Distributed cache management</li>
            <li>Cache key inspection</li>
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
          <li>Environment file generation</li>
          <li>Configuration validation</li>
          <li>Secret key management</li>
          <li>Database connection testing</li>
          <li>Service dependency checking</li>
          <li>Configuration documentation</li>
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
          <li>Guided project setup wizard</li>
          <li>Interactive code generation</li>
          <li>Database schema builder</li>
          <li>Configuration editor</li>
          <li>Command history and favorites</li>
          <li>Context-aware help system</li>
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
            <li>Command class inheritance</li>
            <li>Argument and option definition</li>
            <li>Input validation</li>
            <li>Output formatting</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Advanced Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Progress bars and spinners</li>
            <li>Interactive prompts</li>
            <li>File system operations</li>
            <li>External API integration</li>
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
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--template, --database, --auth</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem serve</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Start development server</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--port, --host, --env</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem generate</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate code components</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--model, --controller, --migration</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem migrate</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Run database migrations</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--fresh, --seed, --step</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem test</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Run test suites</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--coverage, --verbose, --filter</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem build</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Build for production</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--optimize, --analyze, --docker</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem queue:work</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Process queue jobs</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--queue, --timeout, --tries</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem cache:clear</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Clear application cache</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--tags, --store</td>
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
              <strong>Command not found:</strong> Ensure Khadem CLI is installed and in PATH
            </div>
            <div>
              <strong>Permission denied:</strong> Run with appropriate permissions or use sudo
            </div>
            <div>
              <strong>Database connection failed:</strong> Check database credentials and connectivity
            </div>
            <div>
              <strong>Migration errors:</strong> Review migration files and database schema
            </div>
            <div>
              <strong>Build failures:</strong> Check for syntax errors and missing dependencies
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

# Update CLI to latest version
khadem self-update

# View help
khadem --help`

const projectCommandsCode = `# Create a new Khadem project
khadem new my_project

# Create project with specific template
khadem new my_api --template=api

# Create project with database and auth
khadem new my_app --database=postgresql --auth=jwt

# Create project with WebSocket support
khadem new my_chat --websocket

# List available templates
khadem new --list-templates

# Initialize project in existing directory
khadem init

# Show project information
khadem info`

const serverCommandsCode = `# Start development server
khadem serve

# Start server on specific port
khadem serve --port=3001

# Start server with custom host
khadem serve --host=0.0.0.0

# Start server in specific environment
khadem serve --env=staging

# Start server with hot reload disabled
khadem serve --no-reload

# Start server with debug logging
khadem serve --debug

# Stop development server
khadem serve:stop

# Restart development server
khadem serve:restart`

const generateCommandsCode = `# Generate a model
khadem generate model User

# Generate model with migration
khadem generate model Product --migration

# Generate controller
khadem generate controller ApiController

# Generate service
khadem generate service UserService

# Generate middleware
khadem generate middleware AuthMiddleware

# Generate all CRUD operations
khadem generate scaffold Post

# Generate API resource
khadem generate resource UserResource

# Generate factory for testing
khadem generate factory UserFactory

# Generate migration only
khadem generate migration create_posts_table

# List generated files
khadem generate:list`

const databaseCommandsCode = `# Run all pending migrations
khadem migrate

# Run migrations for specific environment
khadem migrate --env=production

# Rollback last migration
khadem migrate:rollback

# Rollback multiple migrations
khadem migrate:rollback --step=3

# Reset all migrations
khadem migrate:reset

# Fresh migration (drop all tables and re-run)
khadem migrate:fresh

# Run seeders
khadem db:seed

# Run specific seeder
khadem db:seed --class=UserSeeder

# Create database if it doesn't exist
khadem db:create

# Drop database
khadem db:drop

# Show migration status
khadem migrate:status

# Generate migration file
khadem make:migration create_users_table`

const testingCommandsCode = `# Run all tests
khadem test

# Run specific test file
khadem test tests/unit/UserTest.dart

# Run tests with coverage
khadem test --coverage

# Run tests in verbose mode
khadem test --verbose

# Run tests matching pattern
khadem test --filter="User.*"

# Generate test coverage report
khadem test:coverage

# Run integration tests only
khadem test:integration

# Run performance tests
khadem test:performance

# Generate test file
khadem make:test UserTest

# Lint code
khadem lint

# Format code
khadem format

# Run security scan
khadem security:scan`

const deploymentCommandsCode = `# Build for production
khadem build

# Build with optimization
khadem build --optimize

# Build with bundle analysis
khadem build --analyze

# Build Docker image
khadem build --docker

# Build for specific platform
khadem build --platform=linux

# Deploy to server
khadem deploy

# Deploy to specific environment
khadem deploy --env=production

# Rollback deployment
khadem deploy:rollback

# Show deployment status
khadem deploy:status

# Setup deployment configuration
khadem deploy:setup

# Run pre-deployment checks
khadem deploy:check`

const advancedCommandsCode = `# Queue management
khadem queue:work
khadem queue:work --queue=high_priority
khadem queue:failed
khadem queue:retry
khadem queue:clear

# Cache operations
khadem cache:clear
khadem cache:clear --tags=user,post
khadem cache:warm
khadem cache:stats
khadem cache:keys

# Schedule management
khadem schedule:run
khadem schedule:list
khadem schedule:work

# Event management
khadem event:generate
khadem event:list
khadem event:clear

# Route management
khadem route:list
khadem route:cache
khadem route:clear

# Configuration
khadem config:cache
khadem config:clear
khadem config:list`

const configCommandsCode = `# Generate environment file
khadem env:generate

# Validate configuration
khadem config:validate

# Show current configuration
khadem config:show

# Edit configuration interactively
khadem config:edit

# Generate secret keys
khadem key:generate

# Test database connection
khadem db:test

# Check system requirements
khadem doctor

# Show application information
khadem about

# Clear all caches
khadem optimize`

const interactiveCommandsCode = `# Start interactive mode
khadem interactive

# Guided project setup
khadem new --interactive

# Interactive code generation
khadem generate --interactive

# Database schema builder
khadem db:build

# Configuration wizard
khadem config:wizard

# Help system
khadem help --interactive

# Command history
khadem history

# Favorite commands
khadem favorite:add "khadem serve --debug"
khadem favorite:run 1`

const customCommandsCode = `import 'package:khadem/khadem_dart.dart';

class CustomCommand extends Command {
  @override
  String get name => 'custom:example';

  @override
  String get description => 'Example custom command';

  @override
  void configure() {
    addArgument('name', mode: ArgumentMode.REQUIRED, description: 'Name argument');
    addOption('count', abbr: 'c', defaultsTo: '1', description: 'Count option');
    addFlag('verbose', abbr: 'v', description: 'Verbose output');
  }

  @override
  Future<int> execute(CommandContext context) async {
    final name = context.getArgument('name');
    final count = int.parse(context.getOption('count'));
    final verbose = context.getFlag('verbose');

    if (verbose) {
      context.writeln('Starting custom command...');
    }

    // Show progress bar
    final progress = context.progress('Processing items');
    progress.start();

    for (var i = 0; i < count; i++) {
      // Simulate work
      await Future.delayed(Duration(milliseconds: 100));
      progress.advance();
    }

    progress.finish();

    context.success('Custom command completed for $name!');

    return CommandExitCode.success;
  }
}

// Register custom command
class CustomCommandProvider extends ServiceProvider {
  @override
  Future<void> register() async {
    // Register command
    this.app.singleton<CustomCommand>((container) => CustomCommand());
  }

  @override
  Future<void> boot() async {
    // Add to CLI
    final command = await this.app.make<CustomCommand>();
    CLI.add(command);
  }
}`

const troubleshootingCode = `# Check CLI version and status
khadem --version
khadem doctor

# Clear all caches
khadem optimize

# Reset database (development only)
khadem migrate:fresh --seed

# Check file permissions
ls -la

# Check available disk space
df -h

# Check running processes
ps aux | grep khadem

# View application logs
tail -f storage/logs/app.log

# Check database connectivity
khadem db:test

# Validate configuration
khadem config:validate

# Run security scan
khadem security:scan

# Check dependencies
khadem dependencies:check`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
