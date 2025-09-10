<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Service Container & Dependency Injection</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The Dependency Injection (DI) container is a powerful tool for managing class dependencies and
          performing dependency injection.
        </p>
      </header>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Binding Methods</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">bind()</h3>
            <p>Registers a factory function for type <code>T</code> with optional singleton control.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="bindCode" 
                language="dart"
                title="Basic Binding"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>factory</code>: Function that creates the instance (receives container)</li>
                  <li><code>singleton</code>: If true, same instance will be returned each time (default: false)</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">singleton()</h3>
            <p>Convenience method for registering a singleton binding.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="singletonCode" 
                language="dart"
                title="Singleton Binding"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Equivalent to <code>bind(factory, singleton: true)</code></p>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">lazySingleton()</h3>
            <p>Registers a singleton that's only instantiated on first resolution.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="lazySingletonCode" 
                language="dart"
                title="Lazy Singleton Binding"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Difference from regular singleton: Instantiation is deferred until first use</p>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">instance()</h3>
            <p>Registers an already created instance.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="instanceCode" 
                language="dart"
                title="Instance Binding"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Useful for:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Pre-configured objects</li>
                  <li>Mock instances in testing</li>
                  <li>Objects created outside DI system</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">bindWhen()</h3>
            <p>Registers a contextual binding that only applies for specific context keys.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="bindWhenCode" 
                language="dart"
                title="Contextual Binding"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>context</code>: String key that identifies this binding</li>
                  <li><code>factory</code>: Function that creates the instance</li>
                  <li><code>singleton</code>: Whether to treat as singleton (default: false)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Resolution Methods</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">resolve()</h3>
            <p>Resolves an instance of type <code>T</code>, optionally with context.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="resolveCode" 
                language="dart"
                title="Basic Resolution"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>context</code>: Optional context key for contextual bindings</li>
                </ul>
                <p class="mt-2"><strong>Returns:</strong> Instance of type <code>T</code></p>
                <p class="mt-2"><strong>Throws:</strong> Exception if no binding found</p>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">resolveAll()</h3>
            <p>Resolves all registered instances of type <code>T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="resolveAllCode" 
                language="dart"
                title="Multi-Binding Resolution"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Useful for:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Plugin systems</li>
                  <li>Middleware pipelines</li>
                  <li>Event handlers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Management Methods</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">has()</h3>
            <p>Checks if a binding exists for type <code>T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="hasCode" 
                language="dart"
                title="Binding Check"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Returns:</strong> <code>true</code> if binding exists, <code>false</code> otherwise</p>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">unbind()</h3>
            <p>Removes the binding for type <code>T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="unbindCode" 
                language="dart"
                title="Removing Bindings"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Useful for:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Testing scenarios</li>
                  <li>Runtime reconfiguration</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">flush()</h3>
            <p>Removes all bindings and resets the container.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="flushCode" 
                language="dart"
                title="Resetting Container"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Primary use case: Between tests to ensure clean state</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 class="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Usage Patterns</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-medium text-blue-700 dark:text-blue-300">Service Provider Example</h3>
            <CodeBlock 
              :code="providerExampleCode" 
              language="dart"
              compact
            />
          </div>
          <div>
            <h3 class="font-medium text-blue-700 dark:text-blue-300">Contextual Binding Example</h3>
            <CodeBlock 
              :code="contextualExampleCode" 
              language="dart"
              compact
            />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  definePageMeta({ layout: 'docs' });
  useHead({ 
    title: 'Service Container & Dependency Injection',
    meta: [
      { name: 'description', content: 'Complete reference for the ContainerInterface and DI system' }
    ]
  });
  
  const interfaceCode = `/// Interface for a Dependency Injection (DI) container.
  abstract interface class ContainerInterface {
    /// Registers a factory for type [T].
    void bind<T>(dynamic Function(ContainerInterface) factory, {bool singleton});
  
    /// Registers a singleton factory for type [T].
    void singleton<T>(dynamic Function(ContainerInterface) factory);
  
    /// Registers a lazy singleton (instantiated on first use).
    void lazySingleton<T>(dynamic Function(ContainerInterface) factory);
  
    /// Registers an existing instance of type [T].
    void instance<T>(T instance);
  
    /// Registers a contextual binding that applies under specific context key.
    void bindWhen<T>(String context, dynamic Function(ContainerInterface) factory,
        {bool singleton = false});
  
    /// Resolves an instance of type [T].
    T resolve<T>([String? context]);
  
    /// Resolves all instances of type [T] (useful for multi-binding).
    List<T> resolveAll<T>();
  
    /// Checks if a binding exists for type [T].
    bool has<T>();
  
    /// Removes a binding.
    void unbind<T>();
  
    /// Flushes all bindings and resets the container.
    void flush();
  }`;
  
  const bindCode = `// Basic factory binding (new instance each time)
  container.bind<HttpClient>((c) => HttpClient());
  
  // Singleton factory binding
  container.bind<Database>((c) => Database.connect(), singleton: true);`;
  
  const singletonCode = `// Singleton database connection
  container.singleton<Database>((c) => Database.connect());
  
  // Singleton with dependencies
  container.singleton<AuthService>((c) => AuthService(
    userRepo: c.resolve<UserRepository>(),
    config: c.resolve<Config>(),
  ));`;
  
  const lazySingletonCode = `// Lazy singleton logger
  container.lazySingleton<Logger>((c) => Logger(
    level: c.resolve<Config>().logLevel,
  ));
  
  // Heavy service that might not be used
  container.lazySingleton<ReportGenerator>((c) => ReportGenerator(
    database: c.resolve<Database>(),
  ));`;
  
  const instanceCode = `// Pre-configured instance
  final analytics = AnalyticsService(apiKey: 'key-123');
  container.instance<AnalyticsService>(analytics);
  
  // Mock instance for testing
  final mockUserRepo = MockUserRepository();
  container.instance<UserRepository>(mockUserRepo);`;
  
  const bindWhenCode = `// Different payment providers
  container.bindWhen<PaymentGateway>(
    'stripe', 
    (c) => StripeGateway(c.resolve<Config>().stripeKey),
    singleton: true
  );
  
  container.bindWhen<PaymentGateway>(
    'paypal',
    (c) => PayPalGateway(c.resolve<Config>().paypalKey),
  );`;
  
  const resolveCode = `// Basic resolution
  final db = container.resolve<Database>();
  
  // Contextual resolution
  final paymentGateway = container.resolve<PaymentGateway>('stripe');
  
  // With error handling
  try {
    final service = container.resolve<SomeService>();
  } catch (e) {
    // Handle missing binding
  }`;
  
  const resolveAllCode = `// Get all validators
  final validators = container.resolveAll<Validator>();
  
  // Process all middleware
  final middleware = container.resolveAll<Middleware>();
  await Future.wait(middleware.map((m) => m.process(request)));`;
  
  const hasCode = `// Check before resolving
  if (container.has<FeatureService>()) {
    final feature = container.resolve<FeatureService>();
  }
  
  // Contextual check
  if (container.has<PaymentGateway>('stripe')) {
    // Stripe-specific logic
  }`;
  
  const unbindCode = `// Remove standard binding
  container.unbind<Logger>();
  
  // Remove contextual binding
  container.unbind<PaymentGateway>('stripe');
  
  // Testing pattern
  container.unbind<Database>();
  container.singleton<Database>(() => TestDatabase());`;
  
  const flushCode = `// Reset entire container
  container.flush();
  
  // Test setup example
  void setUpTests() {
    container.flush();
    registerTestBindings();
  }`;
  
  const providerExampleCode = `class AppServiceProvider {
    void register(ContainerInterface container) {
      // Singletons
      container.singleton<Config>((c) => Config.load());
      container.lazySingleton<Database>((c) => Database(
        config: c.resolve<Config>(),
      ));
      
      // Factories
      container.bind<HttpRequest>((c) => HttpRequest(
        client: c.resolve<HttpClient>(),
      ));
      
      // Contextual
      container.bindWhen<Cache>('redis', (c) => RedisCache());
    }
  }`;
  
  const contextualExampleCode = `// Register different storage implementations
  container.bindWhen<Storage>(
    's3', 
    (c) => S3Storage(c.resolve<Config>().s3Config),
  );
  container.bindWhen<Storage>(
    'local', 
    (c) => LocalStorage('/storage'),
  );
  
  // Resolve based on context
  final storage = isProduction
    ? container.resolve<Storage>('s3')
    : container.resolve<Storage>('local');`;
  </script>
  
  <style scoped>
  .prose :where(h2):not(:where([class~="not-prose"] *)) {
    margin-top: 2.5rem;
  }
  .prose :where(h3):not(:where([class~="not-prose"] *)) {
    margin-top: 1.5rem;
  }
  </style>