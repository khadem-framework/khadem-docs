<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Configuration System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Hierarchical configuration management with environment overrides, caching, and type-safe access.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">JSON Config</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Environment</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Dot Notation</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Caching</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Type Safety</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Usage</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Access Configuration Values"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Configuration is automatically loaded via service provider</p>
          <p><strong>⚡ Tip:</strong> Use dot notation like <code>'app.database.host'</code> for nested access</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration Structure</h2>

      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h4 class="font-medium mb-4">Directory Layout</h4>
        <CodeBlock
          :code="configStructureCode"
          language="bash"
          title="Configuration Directory Structure"
        />

        <div class="mt-4 grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 class="font-medium text-green-600 mb-2">Base Configuration</h5>
            <p class="text-gray-600 dark:text-gray-400">Default values for all environments</p>
          </div>
          <div>
            <h5 class="font-medium text-blue-600 mb-2">Environment Overrides</h5>
            <p class="text-gray-600 dark:text-gray-400">Environment-specific values that override base config</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="baseConfigCode"
            language="json"
            title="config/app.json"
          />
        </div>
        <div>
          <CodeBlock
            :code="envConfigCode"
            language="json"
            title="config/development/app.json"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Core Operations</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="coreOperationsCode"
            language="dart"
            title="Basic Operations"
          />
        </div>

        <div>
          <CodeBlock
            :code="advancedOperationsCode"
            language="dart"
            title="Advanced Operations"
          />
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Configuration files are cached with TTL for performance</li>
          <li>• Environment overrides are merged with base configuration</li>
          <li>• Use <code>reload()</code> to refresh configuration from disk</li>
          <li>• Runtime changes don't persist to files</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Environment Variables</h2>

      <CodeBlock
        :code="envUsageCode"
        language="dart"
        title="Environment Variable Access"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">.env File Support</h4>
        <CodeBlock
          :code="envFileCode"
          language="env"
          title=".env File Format"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Type-Safe Access</h2>

      <CodeBlock
        :code="typeSafeCode"
        language="dart"
        title="Type-Safe Configuration Access"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Supported Types</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• <code>String</code> - Text values</li>
          <li>• <code>int</code> - Integer numbers</li>
          <li>• <code>double</code> - Floating point numbers</li>
          <li>• <code>bool</code> - Boolean values (true/false)</li>
          <li>• <code>List&lt;String&gt;</code> - String arrays</li>
          <li>• <code>Map&lt;String, dynamic&gt;</code> - Nested objects</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Runtime Configuration</h2>

      <CodeBlock
        :code="runtimeConfigCode"
        language="dart"
        title="Runtime Configuration Management"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Use Cases</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Dynamic feature flags</li>
          <li>• Runtime service configuration</li>
          <li>• Testing environment setup</li>
          <li>• Administrative overrides</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration Sections</h2>

      <CodeBlock
        :code="sectionsCode"
        language="dart"
        title="Working with Configuration Sections"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Section Operations</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• <code>section('name')</code> - Get entire section as map</li>
          <li>• <code>all()</code> - Get all configuration data</li>
          <li>• <code>has('key')</code> - Check if key exists</li>
          <li>• <code>reload()</code> - Refresh from disk</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Registry-Based Loading</h2>

      <CodeBlock
        :code="registryCode"
        language="dart"
        title="Loading Configuration from Code"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">When to Use Registry</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• Programmatic configuration setup</li>
          <li>• Testing with mock configurations</li>
          <li>• Dynamic configuration generation</li>
          <li>• Configuration from external sources</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use descriptive, namespaced keys</li>
            <li>• Provide sensible default values</li>
            <li>• Use environment-specific overrides</li>
            <li>• Validate configuration on startup</li>
            <li>• Document configuration options</li>
            <li>• Use type-safe access methods</li>
            <li>• Cache expensive configuration lookups</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't hardcode configuration values</li>
            <li>• Don't access config in performance-critical loops</li>
            <li>• Don't store sensitive data in config files</li>
            <li>• Don't modify config files at runtime</li>
            <li>• Don't use config for frequently changing data</li>
            <li>• Don't skip validation of required config</li>
            <li>• Don't use generic types without defaults</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Common Patterns</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Configuration Validation</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Validate required configuration on startup</p>
          <CodeBlock
            :code="validationCode"
            language="dart"
            title="Configuration Validation Pattern"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Feature Flags</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Runtime feature toggles</p>
          <CodeBlock
            :code="featureFlagsCode"
            language="dart"
            title="Feature Flags Pattern"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Environment-Specific Config</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Different settings per environment</p>
          <CodeBlock
            :code="envSpecificCode"
            language="dart"
            title="Environment-Specific Configuration"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Configuration System',
  meta: [
    { name: 'description', content: 'Comprehensive configuration system documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Basic configuration access
final appName = Khadem.config.get<String>('app.name');
final port = Khadem.config.get<int>('app.port', 3000);
final debug = Khadem.config.get<bool>('app.debug', false);

// Environment variables
final apiKey = Khadem.env.get('API_KEY');
final dbUrl = Khadem.env.getOrDefault('DATABASE_URL', 'sqlite:memory:');`

// Configuration Structure
const configStructureCode = `config/
├── app.json              # Base application config
├── database.json         # Base database config
├── cache.json            # Base cache config
└── development/          # Environment-specific overrides
    ├── app.json         # Development app overrides
    ├── database.json    # Development database overrides
    └── cache.json       # Development cache overrides`

const baseConfigCode = `{
  "name": "KhademApp",
  "env": "production",
  "port": 8080,
  "debug": false,
  "database": {
    "host": "localhost",
    "port": 5432,
    "database": "khadem"
  }
}`

const envConfigCode = `{
  "env": "development",
  "port": 3000,
  "debug": true,
  "database": {
    "host": "localhost",
    "port": 5432,
    "database": "khadem_dev"
  }
}`

// Core Operations
const coreOperationsCode = `// Get values with type safety
final appName = Khadem.config.get<String>('app.name');
final port = Khadem.config.get<int>('app.port');
final debug = Khadem.config.get<bool>('app.debug');

// Get with defaults
final timeout = Khadem.config.get<int>('app.timeout', 30);
final host = Khadem.config.get<String>('database.host', 'localhost');

// Check existence
if (Khadem.config.has('database.url')) {
  final url = Khadem.config.get<String>('database.url');
}`

const advancedOperationsCode = `// Set runtime values
Khadem.config.set('app.maintenance', true);
Khadem.config.set('cache.ttl', 3600);

// Nested object access
final dbHost = Khadem.config.get<String>('database.host');
final dbPort = Khadem.config.get<int>('database.port');

// Get entire sections
final dbConfig = Khadem.config.section('database');
final allConfig = Khadem.config.all();

// Reload configuration
Khadem.config.reload();`

// Environment Variables
const envUsageCode = `// Environment variable access
final apiKey = Khadem.env.get('API_KEY');
final dbUrl = Khadem.env.getOrDefault('DATABASE_URL', 'sqlite:memory:');

// Type-safe environment access
final port = Khadem.env.getInt('PORT', defaultValue: 3000);
final debug = Khadem.env.getBool('DEBUG', defaultValue: false);
final rate = Khadem.env.getDouble('EXCHANGE_RATE', defaultValue: 1.0);

// List values
final hosts = Khadem.env.getList('ALLOWED_HOSTS', separator: ',');
final paths = Khadem.env.getList('PATHS', separator: ';');

// Set environment values
Khadem.env.set('TEMP_VAR', 'temporary_value');`

const envFileCode = `# Application settings
APP_NAME=MyApp
APP_VERSION=1.0.0
DEBUG=true
PORT=3000

# Database configuration
DATABASE_URL="postgresql://user:pass@localhost:5432/db"

# Export statements supported
export REDIS_URL=redis://localhost:6379

# Variable substitution
API_BASE_URL=http://localhost:\$PORT
FULL_NAME="\${APP_NAME} v\${APP_VERSION}"

# List values
ALLOWED_HOSTS=localhost,127.0.0.1,::1`

// Type-Safe Access
const typeSafeCode = `// String values
final name = Khadem.config.get<String>('app.name');
final url = Khadem.config.get<String>('database.url', 'sqlite:memory:');

// Numeric values
final port = Khadem.config.get<int>('app.port', 3000);
final timeout = Khadem.config.get<double>('app.timeout', 30.0);

// Boolean values
final debug = Khadem.config.get<bool>('app.debug', false);
final enabled = Khadem.config.get<bool>('feature.enabled', true);

// List values (from environment)
final hosts = Khadem.env.getList('ALLOWED_HOSTS');
final paths = Khadem.env.getList('SEARCH_PATHS', separator: ';');

// Environment with type conversion
final maxConn = Khadem.env.getInt('MAX_CONNECTIONS', defaultValue: 10);
final rateLimit = Khadem.env.getDouble('RATE_LIMIT', defaultValue: 100.0);`

// Runtime Configuration
const runtimeConfigCode = `// Runtime configuration changes
Khadem.config.set('app.maintenance', true);
Khadem.config.set('cache.enabled', false);
Khadem.config.set('database.connections.max', 50);

// Dynamic feature flags
class FeatureFlags {
  static bool isEnabled(String feature) {
    return Khadem.config.get<bool>('features.\$feature', false);
  }

  static void enable(String feature) {
    Khadem.config.set('features.\$feature', true);
  }

  static void disable(String feature) {
    Khadem.config.set('features.\$feature', false);
  }
}

// Usage
if (FeatureFlags.isEnabled('new_ui')) {
  // Show new UI
}
FeatureFlags.enable('beta_feature');`

// Configuration Sections
const sectionsCode = `// Get entire configuration sections
final appConfig = Khadem.config.section('app');
final dbConfig = Khadem.config.section('database');
final cacheConfig = Khadem.config.section('cache');

// Work with section data
if (appConfig != null) {
  print('App Name: \${appConfig['name']}');
  print('Debug Mode: \${appConfig['debug']}');
}

// Get all configuration
final allConfig = Khadem.config.all();
for (final section in allConfig.keys) {
  print('Section: \$section');
  print('Values: \${allConfig[section]}');
}

// Check configuration existence
final hasDatabase = Khadem.config.has('database');
final hasCache = Khadem.config.has('cache.host');
final hasFeature = Khadem.config.has('features.new_ui');`

// Registry-Based Loading
const registryCode = `// Load configuration from code
Khadem.loadConfigs({
  'app': {
    'name': 'MyApp',
    'version': '1.0.0',
    'debug': true
  },
  'database': {
    'host': 'localhost',
    'port': 5432,
    'database': 'myapp'
  },
  'cache': {
    'driver': 'memory',
    'ttl': 3600
  }
});

// Or load single sections
final customConfig = {
  'api': {
    'base_url': 'https://api.example.com',
    'timeout': 30,
    'retries': 3
  }
};
Khadem.config.loadFromRegistry(customConfig);`

// Common Patterns
const validationCode = `// Configuration validation on startup
class ConfigValidator {
  static void validate() {
    final missing = <String>[];

    // Required configuration
    if (!Khadem.config.has('app.name')) {
      missing.add('app.name');
    }
    if (!Khadem.config.has('database.host')) {
      missing.add('database.host');
    }

    // Required environment variables
    final missingEnv = Khadem.env.validateRequired([
      'DATABASE_URL',
      'API_KEY',
      'JWT_SECRET'
    ]);

    missing.addAll(missingEnv);

    if (missing.isNotEmpty) {
      throw Exception('Missing required configuration: \$missing');
    }

    // Validate value ranges
    final port = Khadem.config.get<int>('app.port', 3000);
    if (port < 1000 || port > 65535) {
      throw Exception('Invalid port number: \$port');
    }
  }
}

// Call during app startup
void main() {
  ConfigValidator.validate();
  // Continue with app initialization
}`

const featureFlagsCode = `// Feature flags implementation
class FeatureManager {
  static const String _prefix = 'features';

  static bool isEnabled(String feature) {
    return Khadem.config.get<bool>('\$_prefix.\$feature', false);
  }

  static void enable(String feature) {
    Khadem.config.set('\$_prefix.\$feature', true);
    _logFeatureChange(feature, true);
  }

  static void disable(String feature) {
    Khadem.config.set('\$_prefix.\$feature', false);
    _logFeatureChange(feature, false);
  }

  static List<String> getEnabledFeatures() {
    final features = Khadem.config.section(_prefix);
    if (features == null) return [];

    return features.entries
        .where((entry) => entry.value == true)
        .map((entry) => entry.key)
        .toList();
  }

  static void _logFeatureChange(String feature, bool enabled) {
    Khadem.logger.info(
      'Feature flag changed: \$feature = \$enabled'
    );
  }
}

// Usage throughout the app
if (FeatureManager.isEnabled('new_dashboard')) {
  return NewDashboard();
} else {
  return OldDashboard();
}`

const envSpecificCode = `// Environment-specific configuration
class EnvironmentConfig {
  static String get environment {
    return Khadem.config.get<String>('app.env', 'production');
  }

  static bool get isDevelopment {
    return environment == 'development';
  }

  static bool get isProduction {
    return environment == 'production';
  }

  static bool get isTesting {
    return environment == 'testing';
  }

  static String get databaseName {
    final baseName = Khadem.config.get<String>('database.name', 'app');
    return isTesting ? '\${baseName}_test' : baseName;
  }

  static int get cacheTtl {
    return isDevelopment ? 60 : 3600; // 1 min dev, 1 hour prod
  }

  static bool get enableDebugLogging {
    return isDevelopment || Khadem.config.get<bool>('app.debug', false);
  }

  static String get logLevel {
    return isDevelopment ? 'DEBUG' : 'INFO';
  }
}

// Usage
if (EnvironmentConfig.isDevelopment) {
  // Development-specific code
}

final dbName = EnvironmentConfig.databaseName;
final cacheTtl = EnvironmentConfig.cacheTtl;`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>