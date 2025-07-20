<template>
    <div>
        <h1>Folder Structure</h1>

        <p>
            When you create a new project using the Khadem CLI, it generates a clean and organized folder structure
            designed for scalability, modularity, and testability.
        </p>

        <CodeBlock :code="structureCode" language="text" />

        <h2>app/</h2>
        <p>
            Contains the core business logic of your application. This directory is split into subdirectories:
        </p>

        <ul class="list-disc pl-6">
            <li><strong>http/controllers:</strong> Define route logic and call services. Example:
                <code>UserController</code></li>
            <li><strong>http/middlewares:</strong> Define middleware like authentication, logging, CORS, etc.</li>
            <li><strong>models:</strong> Data models that represent database entities.</li>
            <li><strong>services:</strong> Reusable logic like email sending, notifications, or file handling.</li>
            <li><strong>providers:</strong> Event listeners, service providers, or anything that bootstraps application
                behavior.</li>
            <li><strong>exceptions:</strong> Custom exception classes to handle domain-specific errors.</li>
        </ul>

        <CodeBlock :code="appExample" language="text" />

        <h2>bootstrap/</h2>
        <p>
            This folder contains logic responsible for booting your application. It prepares services, loads configs,
            and wires everything into the container.
        </p>

        <p><code>bootstrap/app.dart</code> exports two main functions:</p>

        <ul class="list-disc pl-6">
            <li><strong>bootstrap:</strong> Initializes the core services, loads configuration, and registers service
                providers.</li>
            <li><strong>lazyBootstrap:</strong> Executes optional components like database migrations or seeders, if
                enabled in configuration.</li>
        </ul>

        <!-- <CodeBlock :code="bootstrapCode" language="dart" /> -->


        <h2>config/</h2>
        <p>
            Contains configuration files in Dart that map to environment variables. Each file exports a config map.
        </p>
        <ul class="list-disc pl-6">
            <li><code>config/app.dart</code>: Application name, environment, port, etc.</li>
            <li>You can create files like <code>database.dart</code> or <code>mail.dart</code> based on your needs.</li>
        </ul>

        <CodeBlock :code="configExample" language="dart" />

        <h2>core/</h2>
        <p>
            Low-level classes like <code>Kernel</code> which handles bootstrapping, service registration, and core
            bindings.
        </p>

        <h2>routes/</h2>
        <p>
            Define all routes here using the expressive Khadem router. Organized by file such as <code>web.dart</code>,
            <code>api.dart</code>.
        </p>

        <CodeBlock :code="routesExample" language="dart" />

        <h2>bin/</h2>
        <p>
            Contains the Dart entry point of your application. Usually <code>server.dart</code>.
        </p>

        <!-- <CodeBlock :code="entryPoint" language="dart" /> -->

        <h2>tests/</h2>
        <p>
            Unit and integration tests live here. Use <code>test</code> package to cover your services, controllers,
            etc.
        </p>

        <h2>Other Files</h2>
        <ul class="list-disc pl-6">
            <li><code>pubspec.yaml</code>: Dart dependencies, project name, SDK constraints.</li>
            <li><code>.env</code>: Environment variables used inside configs.</li>
            <li><code>README.md</code>: Documentation and project overview.</li>
        </ul>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({ title: 'Folder Structure' })

const structureCode = `my_api/
  ├── app/
  │   ├── exceptions/
  │   ├── http/
  │   │   ├── controllers/
  │   │   └── middlewares/
  │   ├── models/
  │   ├── services/
  │   └── providers/
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
  ├── database/
  │   └── migrations/
  ├── tests/
  ├── .env
  ├── pubspec.yaml
  └── README.md`

const appExample = `app/
  ├── http/
  │   ├── controllers/
  │   │   └── UserController.dart
  │   └── middlewares/
  │       └── AuthMiddleware.dart
  ├── models/
  │   └── User.dart
  ├── services/
  │   └── EmailService.dart
  ├── providers/
  │   └── AppServiceProvider.dart
  ├── exceptions/
  │   └── NotFoundException.dart`

const configExample = `// config/app.dart
// config/app.dart
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

const routesExample = `// routes/web.dart
  server.get('/users', UserController().index);
  server.post('/login', AuthController().login);`

 

</script>