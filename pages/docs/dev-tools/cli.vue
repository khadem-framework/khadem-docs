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
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Available Commands</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li><strong>Project Management:</strong> <code>khadem new</code> - Create new projects</li>
          <li><strong>Development:</strong> <code>khadem serve</code> - Hot reload development server</li>
          <li><strong>Code Generation:</strong> <code>khadem make:*</code> - Generate models, controllers, etc.</li>
          <li><strong>Build & Deploy:</strong> <code>khadem build</code> - Production builds with multiple options</li>
          <li><strong>Database:</strong> <code>khadem migrate</code>, <code>khadem db:seed</code> (coming soon)</li>
          <li><strong>Queue:</strong> <code>khadem queue:work</code> (coming soon)</li>
          <li><strong>Custom Commands:</strong> Automatically discovered from <code>lib/app/commands/</code> directory</li>
        </ul>
        <div class="mt-3 p-2 bg-blue-100 dark:bg-blue-900/40 rounded">
          <p class="text-sm text-blue-800 dark:text-blue-200">
            ✨ <strong>Auto-Discovery:</strong> Custom commands are automatically discovered using Dart mirrors - no manual registration required!
          </p>
        </div>
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
          <h3 class="font-medium">Project Creation Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Uses <code>khadem_template</code> as base</li>
            <li>Automatic placeholder replacement</li>
            <li>JWT secret key auto-generation</li>
            <li>Project name validation</li>
            <li>Environment file configuration</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Project Structure</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>--name</code> - Required project name</li>
            <li>Automatic folder structure creation</li>
            <li>Dependency installation ready</li>
            <li>Pre-configured with best practices</li>
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
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Advanced Server Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li><strong>VM Service Integration:</strong> Hot reload and restart via Dart VM</li>
          <li><strong>File Watching:</strong> Automatic detection of Dart file changes</li>
          <li><strong>Interactive Controls:</strong> Keyboard shortcuts during development</li>
          <li><strong>Error Recovery:</strong> Automatic restart on compilation errors</li>
          <li><strong>Custom Port:</strong> Configurable server port</li>
          <li><strong>Debounced Reloads:</strong> Prevents excessive reloads during rapid changes</li>
          <li><strong>Process Management:</strong> Proper cleanup and signal handling</li>
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
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Database Commands (Available but Disabled)</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li><strong>Migration System:</strong> Full migration framework with Dart mirrors</li>
          <li><strong>Auto-Discovery:</strong> Automatic migration file discovery and loading</li>
          <li><strong>Production Safety:</strong> Force flags and confirmation prompts</li>
          <li><strong>Seeder Support:</strong> Database seeding with mirror-based discovery</li>
          <li><strong>Status Tracking:</strong> Migration status and rollback capabilities</li>
          <li><strong>Batch Operations:</strong> Step-by-step and reset operations</li>
        </ul>
        <div class="mt-3 p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
          <p class="text-sm text-purple-800 dark:text-purple-200">
            <strong>Note:</strong> Database commands are implemented but currently disabled in the CLI registry.
            They will be enabled in a future release with full testing and documentation.
          </p>
        </div>
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
          <li><strong>Docker Generation:</strong> Automatically creates Dockerfile and docker-compose.yml</li>
          <li><strong>Multi-Service Support:</strong> MySQL, PostgreSQL, MongoDB, Redis, Nginx</li>
          <li><strong>Environment Templates:</strong> Auto-generates .env.example and .dockerignore</li>
          <li><strong>Production Ready:</strong> Optimized Docker configurations with health checks</li>
          <li><strong>Cross-Platform:</strong> Works on Linux, Windows, macOS via Docker</li>
          <li><strong>Service Configuration:</strong> Flexible external service integration</li>
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
          <h3 class="font-medium">Queue Management (Available but Disabled)</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Mirror-based Discovery:</strong> Auto-discover job classes using Dart mirrors</li>
            <li><strong>Registry Support:</strong> Load jobs from lib/app/jobs/jobs.dart registry</li>
            <li><strong>Background Processing:</strong> Process jobs asynchronously</li>
            <li><strong>Job Limits:</strong> Configurable max jobs and timeouts</li>
            <li><strong>Signal Handling:</strong> Graceful shutdown with Ctrl+C</li>
            <li><strong>Error Recovery:</strong> Continue processing on individual job failures</li>
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

      <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-6">
        <h3 class="text-lg font-medium text-emerald-800 dark:text-emerald-200">🎯 Automatic Command Discovery</h3>
        <p class="mt-2 text-emerald-700 dark:text-emerald-300">
          Khadem automatically discovers and registers custom commands using <strong>Dart mirrors</strong>. 
          Simply create your command class in the <code>lib/app/commands/</code> directory, and it will be 
          automatically available in the CLI without any manual registration required!
        </p>
      </div>

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
            <li>Logger integration (flexible constructor support)</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Auto-Discovery Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Mirror-based class discovery</li>
            <li>Cross-project compatibility</li>
            <li>Flexible constructor handling</li>
            <li>Package and file URI fallback</li>
            <li>Automatic registration</li>
          </ul>
        </div>
      </div>

      <CodeBlock
        :code="autoDiscoveryExampleCode"
        language="bash"
        title="Command Auto-Discovery in Action"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">How Auto-Discovery Works</h3>
        <ol class="list-decimal pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Khadem scans the <code>lib/app/commands/</code> directory for <code>.dart</code> files</li>
          <li>Uses Dart mirrors to load and inspect each file</li>
          <li>Identifies classes that extend <code>KhademCommand</code></li>
          <li>Automatically instantiates and registers discovered commands</li>
          <li>Supports both local project commands and cross-project usage</li>
          <li>Handles multiple constructor patterns (named parameters, positional, etc.)</li>
        </ol>
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
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">khadem build</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Generate Docker setup for production deployment</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">--services, --verbose, --delete-temp</td>
            </tr>
            <tr>
              <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-mono">custom:*</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Custom commands auto-discovered from lib/app/commands/</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">Varies by command</td>
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
            <li>Use version control for all generated files</li>
            <li>Document custom CLI commands</li>
            <li>Use environment-specific configurations</li>
            <li>Regularly update CLI to latest version</li>
            <li>Use interactive mode for complex setups</li>
            <li>Backup database before manual database changes</li>
            <li>Use cache warming for better performance</li>
            <li>Test code generation output before using in production</li>
            <li>Follow Dart naming conventions for generated classes</li>
            <li>Place custom commands in the <code>lib/app/commands/</code> directory for auto-discovery</li>
            <li>Use flexible constructor patterns for better compatibility</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't use generic names for database tables</li>
            <li>Don't skip database backups before manual changes</li>
            <li>Don't hardcode sensitive data in commands</li>
            <li>Don't forget to clear cache after configuration changes</li>
            <li>Don't use development database for production testing</li>
            <li>Don't skip code generation tests</li>
            <li>Don't deploy without running the build command</li>
            <li>Don't modify generated code directly (use inheritance instead)</li>
            <li>Don't use the same port for multiple development servers</li>
            <li>Don't skip dependency installation after project creation</li>
            <li>Don't manually register custom commands (use auto-discovery instead)</li>
            <li>Don't place custom commands outside of <code>lib/app/commands/</code> directory</li>
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
              <strong>Build failures:</strong> Check for syntax errors with <code>dart analyze</code>
            </div>
            <div>
              <strong>Hot reload not working:</strong> Ensure VM service connection (check port 8181) and Dart files are being watched
            </div>
            <div>
              <strong>Server crashes on startup:</strong> Check for syntax errors with <code>dart analyze lib/main.dart</code>
            </div>
            <div>
              <strong>Docker build issues:</strong> Check that Docker is installed and services are properly configured in .env
            </div>
            <div>
              <strong>Custom command not discovered:</strong> Ensure command is in <code>lib/app/commands/</code> directory and extends <code>KhademCommand</code>
            </div>
            <div>
              <strong>Mirror loading failed:</strong> Check that your command class has a compatible constructor (supports named or positional logger parameter)
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
khadem serve --watch=false

# Interactive commands during development:
# r - Hot reload (reload code changes)
# f - Hot restart (full application restart)
# c - Clear consecutive failure count
# q - Quit server

# VM Service will be available on port 8181 for debugging`

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

const databaseCommandsCode = `# Database commands (currently disabled but implemented)
# These commands exist in the codebase but are commented out

# Migration commands (when enabled):
# khadem migrate - Run all pending migrations
# khadem migrate --reset - Rollback and re-run all migrations
# khadem migrate --fresh - Drop all tables and re-run migrations
# khadem migrate --status - Show migration status
# khadem migrate --force - Run in production (dangerous)
# khadem migrate --step=5 - Run migrations in batches
# khadem migrate --verbose - Detailed migration information

# Seeder commands (when enabled):
# khadem db:seed - Run all seeders
# khadem db:seed --class=UserSeeder - Run specific seeder
# khadem db:seed --force - Run in production
# khadem db:seed --verbose - Detailed seeder information

# For now, manage database manually or use direct SQL queries`

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

const deploymentCommandsCode = `# Generate Docker setup for production deployment (default)
khadem build

# Generate Docker setup with specific services
khadem build --services=mysql,redis,nginx

# Generate Docker setup with verbose logging
khadem build --verbose

# Generate Docker setup without deleting temp files
khadem build --delete-temp=false

# Available service options:
# - mysql: MySQL database service
# - postgres: PostgreSQL database service
# - mongo: MongoDB database service
# - redis: Redis cache service
# - nginx: Nginx reverse proxy

# After running khadem build:
# 1. Dockerfile and docker-compose.yml will be generated
# 2. .env.example template will be created
# 3. .dockerignore file will be generated
# 4. Copy .env.example to .env and configure your environment
# 5. Run: docker-compose up -d`

const advancedCommandsCode = `# Queue worker (currently disabled but implemented)
# khadem queue:work - Start processing queued jobs
# khadem queue:work --max-jobs=100 - Process max 100 jobs
# khadem queue:work --delay=2 - 2 second delay between jobs
# khadem queue:work --timeout=3600 - Stop after 1 hour

# Cache management (not implemented yet)
# khadem cache:clear (planned)

# Additional available commands:
# khadem build - Generate Docker setup for deployment
# khadem make:* - Code generation commands
# khadem new - Project creation
# khadem serve - Development server`

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
# f - Hot restart (full application restart)
# c - Clear consecutive failure count
# q - Quit the development server

# Manual code generation (no interactive mode available)
khadem make:model --name=User
khadem make:controller --name=UserController
khadem make:migration --name=create_users_table`

const customCommandsCode = `// File: lib/app/commands/my_custom_command.dart
import 'dart:io';
import 'package:khadem/src/cli/bus/command.dart';

class MyCustomCommand extends KhademCommand {
  @override
  String get name => 'custom:example';

  @override
  String get description => 'Example custom command with auto-discovery';

  // Flexible constructor - supports multiple patterns for auto-discovery
  MyCustomCommand({Logger? logger}) : super(logger: logger ?? Logger()) {
    argParser.addOption('name', abbr: 'n', help: 'Name argument');
    argParser.addFlag('verbose', abbr: 'v', help: 'Verbose output');
  }

  @override
  Future<void> handle(List<String> args) async {
    final name = argResults?['name'] as String? ?? 'World';
    final verbose = argResults?['verbose'] as bool? ?? false;

    if (verbose) {
      logger.info('🚀 Starting custom command...');
    }

    // Your custom logic here
    logger.info('👋 Hello, \$name!');

    if (verbose) {
      logger.info('✅ Custom command completed successfully.');
    }

    exit(0);
  }
}

// No manual registration needed! 
// Khadem automatically discovers and registers this command
// when placed in the lib/app/commands/ directory`;

const autoDiscoveryExampleCode = `# 1. Create your custom command file
# File: lib/app/commands/my_custom_command.dart
# (See example above)

# 2. Run khadem to see your command automatically discovered
khadem

# Output will show:
# Available commands:
#   new          Create a new Khadem project
#   serve        Start development server
#   build        Build application for deployment
#   custom:example   Example custom command with auto-discovery  ← Your command!
#   ...

# 3. Use your custom command
khadem custom:example --name=Developer --verbose

# Output:
# 🚀 Starting custom command...
# 👋 Hello, Developer!
# ✅ Custom command completed successfully.

# 4. Works across projects too!
# If you have Khadem in a different project (e.g., 'pingora'):
# Your commands will still be auto-discovered and available`;

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
# Stop with Ctrl+C, then run: khadem serve

# Check custom command discovery
# Verify command file is in lib/app/commands/ directory
# Ensure command extends KhademCommand
# Check for syntax errors in command file`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>