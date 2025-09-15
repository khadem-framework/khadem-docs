<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Middleware System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive middleware framework with priority-based execution, error handling, and flexible registration patterns.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Overview</h2>
 

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Core Features</h3>
          <div class="space-y-1 text-sm">
            <div><code class="text-blue-600">Priority-based execution</code></div>
            <div><code class="text-green-600">Named middleware</code></div>
            <div><code class="text-orange-600">Error handling</code></div>
            <div><code class="text-purple-600">Conditional execution</code></div>
            <div><code class="text-red-600">Pipeline management</code></div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Execution Flow</h3>
          <div class="space-y-1 text-sm">
            <div>1. Global middleware (CORS, logging)</div>
            <div>2. Routing middleware</div>
            <div>3. Authentication middleware</div>
            <div>4. Preprocessing middleware</div>
            <div>5. Business logic middleware</div>
            <div>6. Terminating middleware</div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Creating Middleware</h2>

      <CodeBlock
        :code="basicMiddlewareCode"
        language="dart"
        title="Basic Middleware Implementation"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">Middleware Contract</h3>
        <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
          <li><code>handler</code>: The main middleware function</li>
          <li><code>name</code>: Unique identifier for the middleware</li>
          <li><code>priority</code>: Execution order priority level</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Priority System</h2>

      <CodeBlock
        :code="prioritySystemCode"
        language="dart"
        title="Middleware Priority Levels"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">Execution Order</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Global (0)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">CORS, logging, security headers</p>
          </div>
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Routing (1)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">Route resolution, URL rewriting</p>
          </div>
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Auth (2)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">Authentication, authorization</p>
          </div>
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Preprocessing (3)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">Input validation, sanitization</p>
          </div>
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Business (4)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">App-specific logic</p>
          </div>
          <div>
            <strong class="text-yellow-700 dark:text-yellow-300">Terminating (5)</strong>
            <p class="text-yellow-600 dark:text-yellow-400">Response formatting, cleanup</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Built-in Middleware</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Logging Middleware</h3>
          <CodeBlock :code="loggingMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Logs request/response details with timing information
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">CORS Middleware</h3>
          <CodeBlock :code="corsMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Handles Cross-Origin Resource Sharing headers
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Authentication Middleware</h3>
          <CodeBlock :code="authMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Validates Bearer tokens and attaches user data
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Exception Middleware</h3>
          <CodeBlock :code="exceptionMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Catches and handles uncaught exceptions
          </p>
        </div>
      </div>
    </section> -->

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Middleware Pipeline</h2>

      <CodeBlock
        :code="pipelineUsageCode"
        language="dart"
        title="Pipeline Management"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Pipeline Features</h3>
        <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
          <li>Add middleware with specific priorities</li>
          <li>Insert middleware before/after named middleware</li>
          <li>Remove middleware by name</li>
          <li>Conditional middleware execution</li>
          <li>Automatic priority-based sorting</li>
        </ul>
      </div>
    </section> -->

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Registration Patterns</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Global Registration</h3>
          <CodeBlock :code="globalRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Applies to all routes in the application
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Route-specific Registration</h3>
          <CodeBlock :code="routeRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Applies only to specific routes or route groups
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Group Registration</h3>
          <CodeBlock :code="groupRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Applies to all routes within a group
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Conditional Registration</h3>
          <CodeBlock :code="conditionalRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Executes only when conditions are met
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Patterns</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Middleware Composition</h3>
          <CodeBlock :code="compositionCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Combine multiple middleware into reusable compositions
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Dynamic Middleware</h3>
          <CodeBlock :code="dynamicMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Create middleware with runtime configuration
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Middleware Factory</h3>
          <CodeBlock :code="factoryCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Factory pattern for creating parameterized middleware
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Error Recovery</h3>
          <CodeBlock :code="errorRecoveryCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Handle errors and provide fallback responses
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling in Middleware"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">Error Handling Strategies</h3>
        <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
          <li>Use terminating middleware for global error handling</li>
          <li>Attach error information to request for downstream processing</li>
          <li>Provide fallback responses when middleware fails</li>
          <li>Log errors with appropriate context</li>
          <li>Don't swallow errors unless you handle them properly</li>
        </ul>
      </div>
    </section>

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Middleware</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Middleware Testing Patterns"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">Testing Best Practices</h3>
        <ul class="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Test middleware in isolation</li>
          <li>Mock request and response objects</li>
          <li>Verify middleware behavior with different inputs</li>
          <li>Test error conditions and edge cases</li>
          <li>Use dependency injection for testable middleware</li>
        </ul>
      </div>
    </section> -->

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Complete Example</h2>

      <CodeBlock
        :code="completeExampleCode"
        language="dart"
        title="Complete Middleware Implementation"
      />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Recommendations</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use descriptive names for middleware clarity</li>
            <li>Choose appropriate priority levels for execution order</li>
            <li>Always call <code>await next()</code> unless terminating the pipeline</li>
            <li>Handle errors appropriately in middleware</li>
            <li>Use dependency injection for testable middleware</li>
            <li>Keep middleware focused on single responsibilities</li>
            <li>Document middleware behavior and requirements</li>
            <li>Use conditional middleware for performance optimization</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't perform heavy operations in middleware</li>
            <li>Don't modify request/response in unexpected ways</li>
            <li>Don't forget to call <code>next()</code> in non-terminating middleware</li>
            <li>Don't use middleware for business logic (use controllers)</li>
            <li>Don't create middleware with too many responsibilities</li>
            <li>Don't ignore error handling in middleware</li>
            <li>Don't use global state in middleware</li>
            <li>Don't make middleware dependent on specific route structures</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Khadem Middleware System',
  meta: [
    { name: 'description', content: 'Complete documentation for Khadem middleware system with priority-based execution and error handling' }
  ]
})

const middlewareOverviewCode = `// Middleware Pipeline Architecture
class MiddlewarePipeline {
  final List<Middleware> _middleware = [];

  // Process request through middleware chain
  Future<void> process(Request request, Response response) async {
    var index = 0;

    Future<void> next() async {
      if (index < _middleware.length) {
        final middleware = _middleware[index++];
        await middleware.handler(request, response, next);
      }
    }

    await next();
  }
}`

const basicMiddlewareCode = `import 'package:khadem/khadem_dart.dart';

class CustomMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    // Pre-processing logic
    print('Request to: \${req.path} at \${DateTime.now()}');


    // Call next middleware or route handler
    await next();

    // Post-processing logic
    print('Response sent at \${DateTime.now()}');
  };

  @override
  String get name => 'CustomLogger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const prioritySystemCode = `enum MiddlewarePriority {
  global,        // 0 - CORS, logging, security
  routing,       // 1 - Route resolution
  auth,          // 2 - Authentication
  preprocessing, // 3 - Input validation
  business,      // 4 - App-specific logic
  terminating    // 5 - Error handling, cleanup
}

// Usage
class AuthMiddleware implements Middleware {
  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}`

const loggingMiddlewareCode = `class LoggingMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final start = DateTime.now();
    Khadem.logger.debug('➡️ \${req.method} \${req.uri}');

    await next();

    final duration = DateTime.now().difference(start);
    Khadem.logger.debug('⬅️ \${res.statusCode} in \${duration.inMilliseconds}ms');
  };

  @override
  String get name => 'Logger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const corsMiddlewareCode = `class CorsMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final config = Khadem.config;
    final allowedOrigins = config.get<List>('cors.allowed_origins') ?? [];
    final origin = req.header('origin') ?? '*';

    res.header('Access-Control-Allow-Origin',
        allowedOrigins.contains(origin) ? origin : 'null')
       .header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
       .header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
       .header('Access-Control-Allow-Credentials', 'true');

    if (req.method == 'OPTIONS') {
      return res.status(204).header('Content-Length', '0').send('');
    }

    await next();
  };

  @override
  String get name => 'CORS';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const authMiddlewareCode = `class AuthMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final authHeader = req.header('authorization');

    if (authHeader == null || !authHeader.startsWith('Bearer ')) {
      throw AuthException('Missing or invalid authorization header');
    }

    final token = authHeader.replaceFirst('Bearer ', '');
    final user = await Khadem.auth.verify(token);

    // Attach user to request
    req.setAttribute('user', user);
    req.setAttribute('isAuthenticated', true);

    await next();
  };

  @override
  String get name => 'Auth';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}`

const exceptionMiddlewareCode = `class ExceptionMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (error, stackTrace) {
      Khadem.logger.error('Middleware error', error, stackTrace);
      ExceptionHandler.handle(res, error, stackTrace);
    }
  };

  @override
  String get name => 'ExceptionHandler';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const pipelineUsageCode = `// Pipeline management
final pipeline = MiddlewarePipeline();

// Add middleware with different priorities
pipeline.add((req, res, next) async {
  print('Global middleware');
  await next();
}, priority: MiddlewarePriority.global, name: 'logger');

pipeline.add((req, res, next) async {
  print('Auth middleware');
  await next();
}, priority: MiddlewarePriority.auth, name: 'auth');

// Insert middleware at specific positions
pipeline.addBefore('auth', (req, res, next) async {
  print('Before auth');
  await next();
}, name: 'pre-auth');

pipeline.addAfter('auth', (req, res, next) async {
  print('After auth');
  await next();
}, name: 'post-auth');

// Conditional middleware
pipeline.addConditional(
  (req, res, next) async {
    print('Only for API routes');
    await next();
  },
  condition: (req) => req.path.startsWith('/api'),
  name: 'api-only'
);

// Remove middleware
pipeline.remove('logger');

// Process request
await pipeline.process(request, response);`

const globalRegistrationCode = `// Global middleware registration
void setupGlobalMiddleware(Server server) {
  server.useMiddlewares([
    CorsMiddleware(),
    LoggingMiddleware(),
    ExceptionMiddleware(),
    RateLimitMiddleware(),
  ]);
}

// All routes will use these middleware
server.get('/api/users', UserController.index);
server.post('/api/users', UserController.store);`

const routeRegistrationCode = `// Route-specific middleware
server.get('/api/profile', ProfileController.show,
    middleware: [AuthMiddleware()]);

server.post('/api/admin/users', AdminController.create,
    middleware: [AuthMiddleware(), AdminOnlyMiddleware()]);

server.get('/public/data', PublicController.index,
    middleware: []); // No middleware for public routes`

const groupRegistrationCode = `// Group middleware
server.group(
  prefix: '/api/v1',
  middleware: [AuthMiddleware(), JsonResponseMiddleware()],
  routes: (router) {
    router.get('/users', UserController.index);
    router.post('/users', UserController.store);
    router.get('/profile', ProfileController.show);
  }
);

// Nested groups inherit parent middleware
server.group(
  prefix: '/api/v1/admin',
  middleware: [AdminOnlyMiddleware()], // Additional middleware
  routes: (router) {
    router.delete('/users/:id', AdminController.delete);
    router.put('/settings', AdminController.updateSettings);
  }
);`

const conditionalRegistrationCode = `// Conditional middleware
class MaintenanceMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (Khadem.config.get('app.maintenance_mode') == true) {
      return res.status(503).json({
        'error': 'Service temporarily unavailable',
        'maintenance': true
      });
    }
    await next();
  };

  @override
  String get name => 'Maintenance';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Environment-based middleware
class DebugMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (Khadem.env.get('APP_DEBUG') == 'true') {
      final start = DateTime.now();
      await next();
      final duration = DateTime.now().difference(start);
      res.header('X-Debug-Time', '\${duration.inMilliseconds}ms');
    } else {
      await next();
    }
  };

  @override
  String get name => 'Debug';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const compositionCode = `// Middleware composition
class ApiMiddlewareStack {
  static List<Middleware> get standard => [
    CorsMiddleware(),
    LoggingMiddleware(),
    AuthMiddleware(),
    ValidationMiddleware(),
    ExceptionMiddleware(),
  ];

  static List<Middleware> get public => [
    CorsMiddleware(),
    LoggingMiddleware(),
    RateLimitMiddleware(),
  ];

  static List<Middleware> get admin => [
    ...standard,
    AdminOnlyMiddleware(),
    AuditMiddleware(),
  ];
}

// Usage
server.group(
  prefix: '/api',
  middleware: ApiMiddlewareStack.standard,
  routes: (router) {
    // Routes with standard middleware
  }
);

server.group(
  prefix: '/admin',
  middleware: ApiMiddlewareStack.admin,
  routes: (router) {
    // Routes with admin middleware
  }
);`

const dynamicMiddlewareCode = `// Dynamic middleware with configuration
class RateLimitMiddleware implements Middleware {
  final int maxRequests;
  final Duration window;

  RateLimitMiddleware({
    this.maxRequests = 100,
    this.window = const Duration(minutes: 1)
  });

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final clientId = req.ip ?? 'anonymous';
    final key = 'rate_limit:\$clientId';

    final current = await Khadem.cache.get(key, defaultValue: 0);
    if (current >= maxRequests) {
      return res.status(429).json({
        'error': 'Too many requests',
        'retry_after': window.inSeconds
      });
    }

    await Khadem.cache.put(key, current + 1, ttl: window);
    await next();
  };

  @override
  String get name => 'RateLimit';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Factory for different rate limits
class RateLimitFactory {
  static Middleware api() => RateLimitMiddleware(maxRequests: 1000);
  static Middleware auth() => RateLimitMiddleware(maxRequests: 5, window: Duration(minutes: 5));
  static Middleware public() => RateLimitMiddleware(maxRequests: 100);
}`

const factoryCode = `// Middleware factory pattern
class ThrottleMiddleware implements Middleware {
  final String name;
  final int maxAttempts;
  final Duration decayMinutes;

  ThrottleMiddleware(this.name, {
    this.maxAttempts = 60,
    this.decayMinutes = const Duration(minutes: 1)
  });

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final key = 'throttle:\$name:\${req.ip}';
    final attempts = await Khadem.cache.get(key, defaultValue: 0);

    if (attempts >= maxAttempts) {
      final ttl = await Khadem.cache.ttl(key);
      return res.status(429).json({
        'error': 'Too many attempts',
        'retry_after': ttl
      });
    }

    await Khadem.cache.put(key, attempts + 1, ttl: decayMinutes);
    await next();
  };

  @override
  String get name => this.name;

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Usage
final loginThrottle = ThrottleMiddleware('login', maxAttempts: 5, decayMinutes: Duration(minutes: 15));
final apiThrottle = ThrottleMiddleware('api', maxAttempts: 1000);`

const errorRecoveryCode = `// Error recovery middleware
class FallbackMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (e) {
      // Log the error
      Khadem.logger.error('Request failed', e);

      // Provide fallback response
      if (!res.headersSent) {
        res.status(500).json({
          'error': 'Internal server error',
          'request_id': req.header('x-request-id'),
          'timestamp': DateTime.now().toIso8601String()
        });
      }
    }
  };

  @override
  String get name => 'Fallback';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Circuit breaker pattern
class CircuitBreakerMiddleware implements Middleware {
  final String serviceName;
  int failureCount = 0;
  DateTime? lastFailureTime;
  bool isOpen = false;

  CircuitBreakerMiddleware(this.serviceName);

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (isOpen) {
      // Check if we should attempt to close the circuit
      if (lastFailureTime != null &&
          DateTime.now().difference(lastFailureTime!) > Duration(minutes: 1)) {
        isOpen = false;
        failureCount = 0;
      } else {
        return res.status(503).json({
          'error': 'Service temporarily unavailable',
          'circuit_breaker': 'open'
        });
      }
    }

    try {
      await next();
      // Reset on success
      failureCount = 0;
    } catch (e) {
      failureCount++;
      lastFailureTime = DateTime.now();

      if (failureCount >= 5) {
        isOpen = true;
      }

      throw e; // Re-throw to let other error handlers deal with it
    }
  };

  @override
  String get name => 'CircuitBreaker';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.business;
}`

const errorHandlingCode = `// Comprehensive error handling
class ErrorHandlingMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (e, stackTrace) {
      // Attach error info to request for logging
      req.setAttribute('error', e.toString());
      req.setAttribute('stackTrace', stackTrace.toString());
      req.setAttribute('errorTime', DateTime.now());

      // Handle different error types
      if (e is ValidationException) {
        return res.status(422).json({
          'error': 'Validation failed',
          'fields': e.errors,
          'code': 'VALIDATION_ERROR'
        });
      }

      if (e is AuthenticationException) {
        return res.status(401).json({
          'error': 'Authentication required',
          'code': 'AUTH_REQUIRED'
        });
      }

      if (e is AuthorizationException) {
        return res.status(403).json({
          'error': 'Access denied',
          'code': 'ACCESS_DENIED'
        });
      }

      // Generic error response
      Khadem.logger.error('Unhandled error', e, stackTrace);
      res.status(500).json({
        'error': 'Internal server error',
        'request_id': req.header('x-request-id'),
        'code': 'INTERNAL_ERROR'
      });
    }
  };

  @override
  String get name => 'ErrorHandler';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const testingCode = `// Middleware testing
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';

class MockRequest extends Mock implements Request {}
class MockResponse extends Mock implements Response {}

void main() {
  group('AuthMiddleware', () {
    late AuthMiddleware middleware;
    late MockRequest request;
    late MockResponse response;

    setUp(() {
      middleware = AuthMiddleware();
      request = MockRequest();
      response = MockResponse();
    });

    test('should attach user data on valid token', () async {
      // Arrange
      when(request.header('authorization')).thenReturn('Bearer valid-token');
      when(Khadem.auth.verify('valid-token')).thenReturn({'id': 1, 'name': 'John'});

      var nextCalled = false;
      final next = () async => nextCalled = true;

      // Act
      await middleware.handler(request, response, next);

      // Assert
      verify(request.setAttribute('user', {'id': 1, 'name': 'John'}));
      verify(request.setAttribute('isAuthenticated', true));
      expect(nextCalled, true);
    });

    test('should throw on missing token', () async {
      // Arrange
      when(request.header('authorization')).thenReturn(null);

      // Act & Assert
      expect(
        () async => await middleware.handler(request, response, () {}),
        throwsA(isA<AuthException>())
      );
    });
  });
}`

const completeExampleCode = `// Complete middleware implementation example
import 'package:khadem/khadem_dart.dart';

// 1. Custom middleware classes
class RequestLoggerMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final start = DateTime.now();
    Khadem.logger.info('→ \${req.method} \${req.uri}');

    await next();

    final duration = DateTime.now().difference(start);
    Khadem.logger.info('← \${res.statusCode} in \${duration.inMilliseconds}ms');
  };

  @override
  String get name => 'RequestLogger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

class ApiAuthMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      throw AuthException('No token provided');
    }

    try {
      final payload = await Khadem.auth.verify(token);
      req.setAttribute('user', payload);
      req.setAttribute('userId', payload['id']);
    } catch (e) {
      throw AuthException('Invalid token');
    }

    await next();
  };

  @override
  String get name => 'ApiAuth';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}

class ValidationMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    // Add validation context
    req.setAttribute('validated', false);

    await next();

    // Post-validation checks
    if (req.getAttribute('validation_errors') != null) {
      throw ValidationException(req.getAttribute('validation_errors'));
    }
  };

  @override
  String get name => 'Validation';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.preprocessing;
}

class ResponseFormatterMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    await next();

    // Ensure JSON responses have consistent format
    if (req.path.startsWith('/api') && !res.headersSent) {
      final existingData = res.getData();
      if (existingData != null && existingData is! Map) {
        res.json({
          'success': true,
          'data': existingData,
          'timestamp': DateTime.now().toIso8601String()
        });
      }
    }
  };

  @override
  String get name => 'ResponseFormatter';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}

// 2. Server setup with middleware
void setupServer(Server server) {
  // Global middleware
  server.useMiddlewares([
    RequestLoggerMiddleware(),
    CorsMiddleware(),
    ExceptionMiddleware(),
  ]);

  // API routes with authentication
  server.group(
    prefix: '/api/v1',
    middleware: [ApiAuthMiddleware(), ValidationMiddleware()],
    routes: (router) {
      router.get('/users', UserController.index);
      router.post('/users', UserController.store);
      router.get('/users/:id', UserController.show);
      router.put('/users/:id', UserController.update);
      router.delete('/users/:id', UserController.destroy);
    }
  );

  // Public routes
  server.group(
    prefix: '/public',
    routes: (router) {
      router.get('/health', HealthController.check);
      router.get('/version', VersionController.get);
    }
  );

  // Admin routes with additional middleware
  server.group(
    prefix: '/api/v1/admin',
    middleware: [AdminOnlyMiddleware(), AuditMiddleware()],
    routes: (router) {
      router.get('/stats', AdminController.stats);
      router.post('/maintenance', AdminController.maintenance);
    }
  );
}

// 3. Controller example
class UserController {
  static Future index(Request req, Response res) async {
    final users = await User.query()
        .paginate(perPage: 20, page: int.tryParse(req.query['page'] ?? '1') ?? 1);

    res.json({
      'users': users.data,
      'pagination': {
        'page': users.currentPage,
        'total': users.total,
        'per_page': 20,
        'last_page': users.lastPage,
        'has_next': users.currentPage < users.lastPage,
        'has_prev': users.currentPage > 1,
      }
    });
  }

  static Future store(Request req, Response res) async {
    final data = await req.body;

    // Validation is handled by ValidationMiddleware
    final user = await User.create(data);

    res.status(201).json({
      'user': user,
      'message': 'User created successfully'
    });
  }
}

// 4. Custom exceptions
class AuthException implements Exception {
  final String message;
  AuthException(this.message);

  @override
  String toString() => message;
}

class ValidationException implements Exception {
  final Map<String, dynamic> errors;
  ValidationException(this.errors);

  @override
  String toString() => 'Validation failed: \$errors';
}`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
