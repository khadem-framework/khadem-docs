<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Service Providers</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A powerful dependency injection and service registration system for organizing and bootstrapping your Khadem application.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Dependency Injection</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Service Registration</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Boot Lifecycle</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Modular Architecture</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">System Overview</h2>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Service Provider Architecture</h3>
        <p class="text-blue-800 dark:text-blue-200 mb-4">
          Service providers are the foundation of Khadem's dependency injection system. They provide a clean, organized way to register services, configure dependencies, and execute initialization logic.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Core Components</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                ServiceProviderManager - Main orchestrator
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                ServiceProviderRegistry - Provider registration
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                ServiceProviderBootloader - Boot lifecycle
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                ServiceProviderValidator - Validation system
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Features</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Deferred loading support
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Async boot lifecycle
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Type-safe provider management
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Validation and error handling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Provider Lifecycle</h2>

      <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">1</span>
            </div>
            <h3 class="font-semibold mb-2">Registration</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Provider is registered with the container. Services and dependencies are bound.
            </p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">2</span>
            </div>
            <h3 class="font-semibold mb-2">Boot</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              After all providers are registered, boot() method is called for initialization.
            </p>
          </div>

          <div class="text-center">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">3</span>
            </div>
            <h3 class="font-semibold mb-2">Ready</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Application is fully initialized and all services are available.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Basic Setup</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">1. Create a Service Provider</h4>
            <CodeBlock
              :code="createProviderCode"
              language="dart"
              title="Create a Basic Service Provider"
            />
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">2. Register the Provider</h4>
            <CodeBlock
              :code="registerProviderCode"
              language="dart"
              title="Register Provider with Manager"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Provider Types</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">Regular Providers</h3>
          <CodeBlock
            :code="regularProviderCode"
            language="dart"
            title="Regular Service Provider"
          />
          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            Loaded immediately when the application starts. Use for core services and essential dependencies.
          </p>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-3">Deferred Providers</h3>
          <CodeBlock
            :code="deferredProviderCode"
            language="dart"
            title="Deferred Service Provider"
          />
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-2">
            Loaded only when their services are actually needed. Improves application startup performance.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Usage</h2>

      <div class="space-y-6">
        <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200 mb-3">Complex Service Registration</h3>
          <CodeBlock
            :code="complexProviderCode"
            language="dart"
            title="Complex Service Provider with Dependencies"
          />
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200 mb-3">Boot-time Initialization</h3>
          <CodeBlock
            :code="bootInitializationCode"
            language="dart"
            title="Provider with Boot-time Logic"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Provider Management</h2>

      <CodeBlock
        :code="providerManagementCode"
        language="dart"
        title="Provider Management Examples"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Management Operations</h4>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Registration</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">register(provider)</code> - Register single provider</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">registerAll(providers)</code> - Register multiple providers</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">isRegistered(provider)</code> - Check if registered</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Boot Control</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">bootAll()</code> - Boot all providers</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">bootNonDeferred()</code> - Boot non-deferred only</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">bootDeferred()</code> - Boot deferred only</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Validation & Error Handling</h2>

      <CodeBlock
        :code="validationCode"
        language="dart"
        title="Provider Validation"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Validation Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li>Automatic provider validation before registration</li>
          <li>Detection of duplicate providers</li>
          <li>Dependency validation (extensible)</li>
          <li>Detailed error reporting with specific issues</li>
          <li>Graceful handling of validation failures</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use deferred providers for non-essential services to improve startup performance</li>
            <li>Keep provider logic focused and single-responsibility</li>
            <li>Use meaningful names for your providers and services</li>
            <li>Implement proper error handling in boot() methods</li>
            <li>Document dependencies and requirements in provider comments</li>
            <li>Group related services in the same provider when logical</li>
            <li>Use the container for dependency injection instead of manual instantiation</li>
            <li>Test your providers thoroughly, especially boot logic</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't perform heavy operations in register() - use boot() instead</li>
            <li>Don't create circular dependencies between providers</li>
            <li>Don't skip validation - always validate your providers</li>
            <li>Don't use providers for one-off utilities - use regular classes</li>
            <li>Don't make all providers deferred - core services need immediate loading</li>
            <li>Don't ignore boot errors - handle them appropriately</li>
            <li>Don't register the same provider multiple times</li>
            <li>Don't put business logic in providers - keep them focused on DI</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">API Reference</h2>

      <div class="space-y-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ServiceProvider Interface</h3>
          <CodeBlock
            :code="serviceProviderApiCode"
            language="dart"
            title="ServiceProvider Contract"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ServiceProviderManager</h3>
          <CodeBlock
            :code="serviceProviderManagerApiCode"
            language="dart"
            title="ServiceProviderManager API"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ServiceProviderRegistry</h3>
          <CodeBlock
            :code="serviceProviderRegistryApiCode"
            language="dart"
            title="ServiceProviderRegistry API"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ServiceProviderBootloader</h3>
          <CodeBlock
            :code="serviceProviderBootloaderApiCode"
            language="dart"
            title="ServiceProviderBootloader API"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Service Providers',
  meta: [
    { name: 'description', content: 'Comprehensive service provider system documentation for Khadem' }
  ]
})

const createProviderCode = `import 'package:khadem/khadem.dart';

class DatabaseServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register database connection
    container.singleton(DatabaseConnection.new);

    // Register repository classes
    container.singleton<UserRepository>(UserRepository.new);
    container.singleton<PostRepository>(PostRepository.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    // Initialize database connection
    final db = container.make<DatabaseConnection>();
    await db.connect();

    print('✅ Database service initialized');
  }
}`

const registerProviderCode = `import 'package:khadem/khadem.dart';

void main() async {
  // Initialize Khadem
  await Khadem.initialize();

  // Create service provider manager
  final container = Khadem.container;
  final providerManager = ServiceProviderManager(container);

  // Register providers
  providerManager.register(DatabaseServiceProvider());
  providerManager.register(CacheServiceProvider());
  providerManager.register(AuthServiceProvider());

  // Boot all providers
  await providerManager.bootAll();

  print('🚀 Application started with all services');
}`

const regularProviderCode = `import 'package:khadem/khadem.dart';

class CacheServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register cache implementation
    container.singleton<CacheInterface>(RedisCache.new);

    // Register cache manager
    container.singleton(CacheManager.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    final cache = container.make<CacheInterface>();
    await cache.connect();

    print('✅ Cache service initialized');
  }

  // This is a regular provider (loaded immediately)
  @override
  bool get isDeferred => false;
}`

const deferredProviderCode = `import 'package:khadem/khadem.dart';

class EmailServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register email service
    container.singleton<EmailService>(SmtpEmailService.new);

    // Register mailer
    container.singleton(Mailer.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    final emailService = container.make<EmailService>();
    await emailService.verifyConnection();

    print('✅ Email service initialized');
  }

  // This is a deferred provider (loaded only when needed)
  @override
  bool get isDeferred => true;
}`

const complexProviderCode = `import 'package:khadem/khadem.dart';

class ApiServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register HTTP client with configuration
    container.singleton<HttpClient>(() {
      final config = container.make<Config>();
      return HttpClient(
        baseUrl: config.get('api.base_url'),
        timeout: Duration(seconds: config.get('api.timeout', 30)),
        headers: {
          'Authorization': 'Bearer \${config.get('api.token')}',
          'Accept': 'application/json',
        },
      );
    });

    // Register API services
    container.singleton<UserApiService>(UserApiService.new);
    container.singleton<PostApiService>(PostApiService.new);
    container.singleton<NotificationApiService>(NotificationApiService.new);

    // Register API client facade
    container.singleton<ApiClient>(ApiClient.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    final httpClient = container.make<HttpClient>();
    final apiClient = container.make<ApiClient>();

    // Test API connectivity
    try {
      await httpClient.get('/health');
      print('✅ API connection established');
    } catch (e) {
      print('❌ API connection failed: \$e');
      rethrow;
    }

    // Initialize API services
    await apiClient.initialize();
  }
}`

const bootInitializationCode = `import 'package:khadem/khadem.dart';

class MonitoringServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register monitoring services
    container.singleton<MetricsCollector>(MetricsCollector.new);
    container.singleton<HealthChecker>(HealthChecker.new);
    container.singleton<AlertManager>(AlertManager.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    final metrics = container.make<MetricsCollector>();
    final healthChecker = container.make<HealthChecker>();
    final alertManager = container.make<AlertManager>();

    // Start background monitoring tasks
    metrics.startCollecting();
    healthChecker.startPeriodicChecks();

    // Set up alert handlers
    alertManager.registerHandler('database', (alert) {
      print('🚨 Database alert: \${alert.message}');
      // Send notification, log to external service, etc.
    });

    alertManager.registerHandler('memory', (alert) {
      print('🚨 Memory alert: \${alert.message}');
      // Trigger garbage collection, scale resources, etc.
    });

    // Start alert manager
    await alertManager.start();

    print('✅ Monitoring system initialized');
  }
}`

const providerManagementCode = `import 'package:khadem/khadem.dart';

class ProviderManager {
  final ServiceProviderManager _manager;

  ProviderManager(ContainerInterface container)
      : _manager = ServiceProviderManager(container);

  // Register core providers
  void registerCoreProviders() {
    _manager.registerAll([
      DatabaseServiceProvider(),
      CacheServiceProvider(),
      AuthServiceProvider(),
      RoutingServiceProvider(),
    ]);
  }

  // Register optional providers
  void registerOptionalProviders() {
    _manager.registerAll([
      EmailServiceProvider(),
      QueueServiceProvider(),
      MonitoringServiceProvider(),
    ]);
  }

  // Boot providers in phases
  Future<void> bootApplication() async {
    // Phase 1: Boot core services first
    await _manager.bootNonDeferred();

    // Phase 2: Boot deferred services when needed
    // This can be called later when services are actually needed
    // await _manager.bootDeferred();

    print('✅ Application booted successfully');
  }

  // Get provider statistics
  void printProviderStats() {
    print('\\n📊 Provider Statistics:');
    print('Total providers: \${_manager.providerCount}');
    print('Booted: \${_manager.isBooted ? 'Yes' : 'No'}');
    print('Deferred providers: \${_manager.deferredProviders.length}');
    print('Non-deferred providers: \${_manager.nonDeferredProviders.length}');

    // Validate providers
    final validationErrors = _manager.validateProviders();
    if (validationErrors.isEmpty) {
      print('✅ All providers are valid');
    } else {
      print('❌ Validation errors:');
      for (final error in validationErrors) {
        print('  - \$error');
      }
    }
  }

  // Get providers by type
  List<DatabaseServiceProvider> getDatabaseProviders() {
    return _manager.getProvidersByType<DatabaseServiceProvider>();
  }

  // Clean up
  void reset() {
    _manager.clear();
    print('🧹 All providers cleared');
  }
}

// Usage
final providerManager = ProviderManager(container);
providerManager.registerCoreProviders();
await providerManager.bootApplication();
providerManager.printProviderStats();`

const validationCode = `import 'package:khadem/khadem.dart';

class ProviderValidator {
  final ServiceProviderManager _manager;

  ProviderValidator(this._manager);

  // Validate all providers before booting
  bool validateAllProviders() {
    final errors = _manager.validateProviders();

    if (errors.isEmpty) {
      print('✅ All providers passed validation');
      return true;
    } else {
      print('❌ Provider validation failed:');
      for (final error in errors) {
        print('  - \$error');
      }
      return false;
    }
  }

  // Custom validation logic
  List<String> customValidation() {
    final errors = <String>[];
    final providers = _manager.allProviders;

    // Check for required providers
    final hasDatabase = providers.any((p) => p is DatabaseServiceProvider);
    if (!hasDatabase) {
      errors.add('DatabaseServiceProvider is required but not registered');
    }

    // Check for circular dependencies (simplified example)
    final dependencyGraph = _buildDependencyGraph(providers);
    final cycles = _detectCycles(dependencyGraph);
    if (cycles.isNotEmpty) {
      errors.add('Circular dependencies detected: \$cycles');
    }

    // Check provider naming conventions
    for (final provider in providers) {
      if (!provider.runtimeType.toString().endsWith('ServiceProvider')) {
        errors.add('\${provider.runtimeType} does not follow naming convention');
      }
    }

    return errors;
  }

  Map<String, List<String>> _buildDependencyGraph(List<ServiceProvider> providers) {
    // Simplified dependency analysis
    return {};
  }

  List<String> _detectCycles(Map<String, List<String>> graph) {
    // Simplified cycle detection
    return [];
  }

  // Validate provider boot order
  List<String> validateBootOrder() {
    final errors = <String>[];
    final deferred = _manager.deferredProviders;
    final nonDeferred = _manager.nonDeferredProviders;

    // Ensure critical services are not deferred
    final criticalServices = ['DatabaseServiceProvider', 'AuthServiceProvider'];
    for (final service in criticalServices) {
      final isDeferred = deferred.any((p) => p.runtimeType.toString() == service);
      if (isDeferred) {
        errors.add('\$service should not be deferred (critical service)');
      }
    }

    return errors;
  }
}

// Usage
final validator = ProviderValidator(manager);

if (validator.validateAllProviders()) {
  final customErrors = validator.customValidation();
  final bootErrors = validator.validateBootOrder();

  if (customErrors.isEmpty && bootErrors.isEmpty) {
    await manager.bootAll();
  } else {
    print('❌ Custom validation failed:');
    [...customErrors, ...bootErrors].forEach(print);
  }
}`

const serviceProviderApiCode = `abstract class ServiceProvider {
  /// Called when the provider is registered in the container.
  /// Use this method to bind services and dependencies.
  void register(ContainerInterface container);

  /// Called after all providers are registered.
  /// Use this method for initialization logic that requires other services.
  Future<void> boot(ContainerInterface container) async {}

  /// If true, the provider is deferred and only loaded when needed.
  /// Deferred providers improve startup performance.
  bool get isDeferred => false;
}

// Example implementation
class MyServiceProvider extends ServiceProvider {
  @override
  void register(ContainerInterface container) {
    // Register services here
    container.singleton(MyService.new);
  }

  @override
  Future<void> boot(ContainerInterface container) async {
    // Initialization logic here
    final service = container.make<MyService>();
    await service.initialize();
  }

  @override
  bool get isDeferred => true; // Optional: make it deferred
}`

const serviceProviderManagerApiCode = `class ServiceProviderManager {
  // Constructor
  ServiceProviderManager(ContainerInterface container)

  // Registration methods
  void register(ServiceProvider provider)           // Register single provider
  void registerAll(List<ServiceProvider> providers) // Register multiple providers

  // Boot methods
  Future<void> bootAll()                    // Boot all providers
  Future<void> bootNonDeferred()            // Boot only non-deferred providers
  Future<void> bootDeferred()               // Boot only deferred providers

  // Query methods
  List<ServiceProvider> get allProviders           // Get all providers
  bool get isBooted                               // Check if all providers are booted
  List<String> validateProviders()                 // Validate all providers
  bool get areAllValid                            // Check if all providers are valid
  List<T> getProvidersByType<T>()                 // Get providers by type
  List<ServiceProvider> get deferredProviders     // Get deferred providers
  List<ServiceProvider> get nonDeferredProviders  // Get non-deferred providers
  int get providerCount                           // Get total provider count

  // Utility methods
  void clear()                                    // Clear all providers and reset state
}`

const serviceProviderRegistryApiCode = `class ServiceProviderRegistry {
  // Constructor
  ServiceProviderRegistry(ContainerInterface container)

  // Properties
  List<ServiceProvider> get providers  // Get all registered providers (unmodifiable)

  // Registration methods
  void register(ServiceProvider provider)           // Register single provider
  void registerAll(List<ServiceProvider> providers) // Register multiple providers

  // Query methods
  bool isRegistered(ServiceProvider provider)      // Check if provider is registered
  List<T> getProvidersByType<T>()                  // Get providers by type
  List<ServiceProvider> getDeferredProviders()     // Get deferred providers
  List<ServiceProvider> getNonDeferredProviders()  // Get non-deferred providers
  int get count                                    // Get total provider count

  // Utility methods
  void clear()                                     // Clear all registered providers
}`

const serviceProviderBootloaderApiCode = `class ServiceProviderBootloader {
  // Constructor
  ServiceProviderBootloader(ContainerInterface container)

  // Properties
  bool get isBooted  // Check if all providers have been booted

  // Boot methods
  Future<void> bootProvider(ServiceProvider provider)         // Boot single provider
  Future<void> bootProviders(List<ServiceProvider> providers)  // Boot multiple providers
  Future<void> bootAll(List<ServiceProvider> providers)        // Boot all providers
  Future<void> bootNonDeferred(List<ServiceProvider> providers) // Boot non-deferred only
  Future<void> bootDeferred(List<ServiceProvider> providers)    // Boot deferred only

  // Utility methods
  void reset()  // Reset boot state
}`
</script>