<template>
  <div>
    <h1>Environment & Configuration</h1>
    <p>Khadem uses environment variables and configuration files to manage your application settings.</p>

    <h2>Environment Variables</h2>
    <p>Configure your application using the <code>.env</code> file in your project root:</p>
    <CodeBlock :code="envCode" language="env" />

    <h2>Configuration Files</h2>
    <p>Access environment variables through typed configuration files in the <code>config/</code> directory:</p>
    <CodeBlock :code="configCode" language="dart" />

    <h2>Using Configuration</h2>
    <p>Access configuration values anywhere in your application:</p>
    <CodeBlock :code="usageCode" language="dart" />

    <h2>Custom Configuration</h2>
    <p>Create custom configuration files for different aspects of your application:</p>
    <CodeBlock :code="customConfigCode" language="dart" />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({ title: 'Configuration' })

const envCode = `# Server Configuration
APP_NAME=My API
APP_ENV=development
APP_PORT=3000

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_database
DB_USER=postgres
DB_PASS=secret`

const configCode = `// config/app.dart
import 'package:khadem/khadem.dart';

class AppConfig implements Config {
  final String name;
  final String env;
  final int port;

  AppConfig() {
    name = env('APP_NAME');
    env = env('APP_ENV');
    port = int.parse(env('APP_PORT'));
  }
}`

const usageCode = `// Accessing configuration values
final config = app.make<AppConfig>();
print(config.name); // "My API"
print(config.port); // 3000`

const customConfigCode = `// config/database.dart
import 'package:khadem/khadem.dart';

class DatabaseConfig implements Config {
  final String host;
  final int port;
  final String name;
  final String user;
  final String password;

  DatabaseConfig() {
    host = env('DB_HOST');
    port = int.parse(env('DB_PORT'));
    name = env('DB_NAME');
    user = env('DB_USER');
    password = env('DB_PASS');
  }
}`
</script>