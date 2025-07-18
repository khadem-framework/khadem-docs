<template>
  <div>
    <h1>Creating a Project</h1>
    
    <p>Learn how to create and set up a new Khadem project from scratch.</p>

    <h2 id="creating-new-project">Creating a New Project</h2>
    
    <p>Use the Khadem CLI to create a new project:</p>

    <CodeBlock
      :code="createProjectCode"
      language="bash"
    />

    <p>This command will create a new directory with your project name and set up the basic project structure.</p>

    <h2 id="project-structure">Project Structure</h2>
    
    <p>A new Khadem project has the following structure:</p>

    <CodeBlock
      :code="projectStructureCode"
      language="text"
    />

    <h2 id="configuration">Initial Configuration</h2>
    
    <p>After creating your project, you'll need to configure it for your needs:</p>

    <h3>pubspec.yaml</h3>
    
    <p>Your project's dependencies and metadata:</p>

    <CodeBlock
      :code="pubspecCode"
      language="yaml"
    />

    <h3>config/app.dart</h3>
    
    <p>Main application configuration:</p>

    <CodeBlock
      :code="appConfigCode"
      language="dart"
    />

    <h2 id="first-handler">Creating Your First Handler</h2>
    
    <p>Let's create a simple handler to get started:</p>

    <CodeBlock
      :code="handlerCode"
      language="dart"
    />

    <h2 id="building-running">Building and Running</h2>
    
    <p>Build your project and create a JIT snapshot:</p>

    <CodeBlock
      :code="buildRunCode"
      language="bash"
    />

    <h2 id="development-workflow">Development Workflow</h2>
    
    <p>For development, you can use the watch mode to automatically rebuild when files change:</p>

    <CodeBlock
      :code="watchCode"
      language="bash"
    />

    <h2 id="next-steps">Next Steps</h2>
    
    <p>Now that you have a basic project set up, explore these topics:</p>
    
    <ul>
      <li><NuxtLink to="/docs/folder-structure" class="text-primary-600 hover:text-primary-700">Understanding the Folder Structure</NuxtLink></li>
      <li><NuxtLink to="/docs/configuration" class="text-primary-600 hover:text-primary-700">Configuration Options</NuxtLink></li>
      <li><NuxtLink to="/docs/container" class="text-primary-600 hover:text-primary-700">Service Container</NuxtLink></li>
      <li><NuxtLink to="/docs/cli" class="text-primary-600 hover:text-primary-700">CLI Commands</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Creating a Project'
})

const createProjectCode = `# Create a new Khadem project
khadem new my_api

# Navigate to the project directory
cd my_api

# Install dependencies
dart pub get`

const projectStructureCode = `my_api/
├── bin/
│   └── server.dart          # Application entry point
├── lib/
│   ├── handlers/           # Request handlers
│   ├── models/             # Data models
│   ├── services/           # Business logic
│   └── config/             # Configuration files
├── migrations/             # Database migrations
├── test/                   # Test files
├── docker/                 # Docker configuration
├── pubspec.yaml           # Project dependencies
└── README.md              # Project documentation`

const pubspecCode = `name: my_api
description: A Khadem backend application
version: 1.0.0

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  khadem: ^1.0.0
  
dev_dependencies:
  test: ^1.21.0`

const appConfigCode = `// config/app.dart
import 'package:khadem/khadem.dart';

class AppConfig {
  static const String name = 'My API';
  static const String version = '1.0.0';
  static const int port = 8080;
  static const String environment = 'development';
  
  static Map<String, dynamic> get database => {
    'host': 'localhost',
    'port': 5432,
    'database': 'my_api',
    'username': 'postgres',
    'password': 'password',
  };
}`

const handlerCode = `// lib/handlers/hello_handler.dart
import 'package:khadem/khadem.dart';

class HelloHandler extends Handler {
  @override
  Future<Response> handle(Request request) async {
    return Response.json({
      'message': 'Hello from Khadem!',
      'timestamp': DateTime.now().toIso8601String(),
    });
  }
}`

const buildRunCode = `# Build JIT snapshot
khadem build

# Run the application
./bin/server.jit

# Or run directly with Dart
dart bin/server.dart`

const watchCode = `# Watch for changes and rebuild automatically
khadem build --watch`
</script>