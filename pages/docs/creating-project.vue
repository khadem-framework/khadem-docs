<template>
  <div>
    <h1>Creating a Project</h1>

    <p>This guide shows you how to scaffold, configure, and run a new Khadem backend project using the CLI.</p>

    <h2 id="creating-new-project">Create a New Project</h2>
    <p>Use the <code>khadem</code> CLI tool to generate a new project:</p>

    <CodeBlock :code="createProjectCode" language="bash" />

    <p>The CLI will create a directory with a fully structured project based on the Khadem conventions.</p>

    <h2 id="project-structure">Project Structure</h2>
    <p>Here’s what the default folder structure looks like:</p>

    <CodeBlock :code="projectStructureCode" language="text" />

    <h2 id="config-files">Configuration Files</h2>

    <h3>pubspec.yaml</h3>
    <p>Defines project metadata and package dependencies:</p>
    <CodeBlock :code="pubspecCode" language="yaml" />

    <h3>config/app.dart</h3>
    <p>Main application configuration file using <code>Khadem.env</code>:</p>
    <CodeBlock :code="appConfigCode" language="dart" />

    <h2 id="first-handler">Creating Your First Endpoint</h2>
    <p>Let’s create a simple <code>/say-hello</code> route inside your <code>routes/web.dart</code> file:</p>

    <CodeBlock :code="handlerCode" language="dart" />

    <h2 id="serving">Serving the Application (Dev)</h2>
    <p>Run the server in development mode using hot reload:</p>
    <CodeBlock :code="serveCode" language="bash" />

    <h2 id="build-prod">Building for Production</h2>
    <p>Build a JIT snapshot for faster startup:</p>

    <CodeBlock :code="buildRunCode" language="bash" />

    <h2 id="next-steps">Next Steps</h2>
    <p>Explore the following documentation pages:</p>

    <ul class="list-disc pl-6 my-4">
      <li><NuxtLink to="/docs/folder-structure" class="text-primary-600 hover:text-primary-700">Understanding the Folder Structure</NuxtLink></li>
      <li><NuxtLink to="/docs/configuration" class="text-primary-600 hover:text-primary-700">Environment & Configuration</NuxtLink></li>
      <li><NuxtLink to="/docs/routing" class="text-primary-600 hover:text-primary-700">Routing & Controllers</NuxtLink></li>
      <li><NuxtLink to="/docs/container" class="text-primary-600 hover:text-primary-700">Service Container & Providers</NuxtLink></li>
    </ul>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({ title: 'Creating a Project' })

const createProjectCode = `# Create a new Khadem project
khadem new --name=my_api

# Navigate into the project
cd my_api

# Install dependencies
dart pub get

# Serve the application in development mode
khadem serve`

const projectStructureCode = `my_api/
├── app/
│   ├── exceptions/
│   ├── http/
│   │   ├── controllers/
│   │   └── middlewares/
│   ├── models/
│   ├── providers/
│   └── services/
├── bootstrap/
│   └── app.dart
├── config/
│   └── app.dart
├── core/
│   └── kernel.dart
├── routes/
│   └── web.dart
├── bin/
│   └── server.dart
├── tests/
├── .env
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
