<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Exception Handling</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive exception handling with automatic response formatting, reporting, and context management.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Error Handling</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Response Formatting</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Error Reporting</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Context Tracking</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Multiple Formats</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Exception Handling</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Basic Exception Handling Setup"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Exception handling is automatically configured via service provider</p>
          <p><strong>⚡ Tip:</strong> Use <code>AppException</code> for custom application errors with specific status codes</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Exceptions</h2>

      <CodeBlock
        :code="customExceptionCode"
        language="dart"
        title="Creating Custom Application Exceptions"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Common Exception Types</h4>
        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• <code>ValidationException</code> - Input validation errors (400)</li>
          <li>• <code>AuthenticationException</code> - Auth failures (401)</li>
          <li>• <code>AuthorizationException</code> - Permission denied (403)</li>
          <li>• <code>NotFoundException</code> - Resource not found (404)</li>
          <li>• <code>ConflictException</code> - Resource conflicts (409)</li>
          <li>• <code>RateLimitException</code> - Too many requests (429)</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Exception Handler</h2>

      <CodeBlock
        :code="handlerUsageCode"
        language="dart"
        title="Using Exception Handler"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Handler Features</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• Automatic JSON response formatting</li>
          <li>• Development vs production error details</li>
          <li>• Multiple response formats (JSON, XML, HTML)</li>
          <li>• Custom error response formatting</li>
          <li>• Request context inclusion</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Response Formats</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="jsonResponseCode"
            language="json"
            title="JSON Error Response"
          />
        </div>

        <div>
          <CodeBlock
            :code="xmlResponseCode"
            language="xml"
            title="XML Error Response"
          />
        </div>
      </div>

      <CodeBlock
        :code="formatUsageCode"
        language="dart"
        title="Specifying Response Format"
      />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Exception Reporter</h2>

      <CodeBlock
        :code="reporterUsageCode"
        language="dart"
        title="Exception Reporting"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Reporting Features</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Automatic logging with context</li>
          <li>• External service integration (Sentry, Rollbar)</li>
          <li>• Request and user context tracking</li>
          <li>• Environment information inclusion</li>
          <li>• Custom global context</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <CodeBlock
        :code="configurationCode"
        language="dart"
        title="Configuring Exception Handling"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Configuration Options</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• <code>showDetailedErrors</code> - Show error details in development</li>
          <li>• <code>includeStackTracesInResponse</code> - Include stack traces in responses</li>
          <li>• <code>customFormatter</code> - Custom error response formatting</li>
          <li>• <code>includeStackTraces</code> - Include stack traces in reports</li>
          <li>• <code>includeUserContext</code> - Include user information in reports</li>
          <li>• <code>includeRequestContext</code> - Include request details in reports</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling Patterns</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Try-Catch with Custom Exceptions</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Handle errors with specific exception types</p>
          <CodeBlock
            :code="tryCatchPatternCode"
            language="dart"
            title="Try-Catch Error Handling"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Middleware Error Handling</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Handle errors in middleware pipeline</p>
          <CodeBlock
            :code="middlewarePatternCode"
            language="dart"
            title="Middleware Error Handling"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Async Error Handling</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Handle errors in async operations</p>
          <CodeBlock
            :code="asyncPatternCode"
            language="dart"
            title="Async Error Handling"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Global Context</h2>

      <CodeBlock
        :code="globalContextCode"
        language="dart"
        title="Adding Global Context to Reports"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Context Types</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• <code>user</code> - Current user information</li>
          <li>• <code>request</code> - HTTP request details</li>
          <li>• <code>environment</code> - Platform and environment info</li>
          <li>• <code>custom</code> - Application-specific data</li>
          <li>• <code>session</code> - Session and authentication data</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">External Service Integration</h2>

      <CodeBlock
        :code="externalServiceCode"
        language="dart"
        title="Integrating with External Error Tracking"
      />

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">Supported Services</h4>
        <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-1">
          <li>• <strong>Sentry</strong> - Real-time error tracking and performance monitoring</li>
          <li>• <strong>Rollbar</strong> - Full-stack error monitoring and debugging</li>
          <li>• <strong>Bugsnag</strong> - Automated error monitoring and reporting</li>
          <li>• <strong>LogRocket</strong> - Session replay and error tracking</li>
          <li>• <strong>Airbrake</strong> - Error monitoring and alerting</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use specific exception types for different error scenarios</li>
            <li>• Include meaningful error messages for API consumers</li>
            <li>• Configure different error detail levels for development vs production</li>
            <li>• Add relevant context to exception reports</li>
            <li>• Use appropriate HTTP status codes for different error types</li>
            <li>• Handle exceptions gracefully without exposing sensitive information</li>
            <li>• Log exceptions with sufficient context for debugging</li>
            <li>• Test error scenarios and exception handling</li>
            <li>• Use custom formatters for consistent error responses</li>
            <li>• Monitor and alert on critical application errors</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't expose sensitive information in error messages</li>
            <li>• Don't show detailed stack traces in production</li>
            <li>• Don't catch exceptions without proper handling or rethrowing</li>
            <li>• Don't use generic exceptions for specific error scenarios</li>
            <li>• Don't ignore exceptions or use empty catch blocks</li>
            <li>• Don't log sensitive data like passwords or tokens</li>
            <li>• Don't rely on exception messages for user-facing content</li>
            <li>• Don't forget to configure error reporting for production</li>
            <li>• Don't use exceptions for normal flow control</li>
            <li>• Don't expose internal system details in error responses</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Common Exception Types</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">HTTP-Related Exceptions</h4>
          <CodeBlock
            :code="httpExceptionsCode"
            language="dart"
            title="HTTP Exception Examples"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Business Logic Exceptions</h4>
          <CodeBlock
            :code="businessExceptionsCode"
            language="dart"
            title="Business Logic Exception Examples"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Validation Exceptions</h4>
          <CodeBlock
            :code="validationExceptionsCode"
            language="dart"
            title="Validation Exception Examples"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Exceptions</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Testing Exception Handling"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Testing Strategies</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Test custom exception creation and properties</li>
          <li>• Test exception handler response formatting</li>
          <li>• Test exception reporter context inclusion</li>
          <li>• Test error scenarios in controllers and services</li>
          <li>• Test middleware error handling</li>
          <li>• Test external service integration</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Exception Handling',
  meta: [
    { name: 'description', content: 'Comprehensive exception handling documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Automatic exception handling in controllers
class UserController {
  Future<void> createUser(Request request) async {
    try {
      final userData = request.validate({
        'name': 'required|string|min:2',
        'email': 'required|email|unique:users',
        'password': 'required|string|min:8',
      });

      final user = await User.create(userData);
      return response.json({'user': user});
    } catch (e) {
      // ExceptionHandler will automatically handle this
      // and send appropriate error response
      rethrow;
    }
  }
}

// Manual exception handling
try {
  await riskyOperation();
} catch (e, stackTrace) {
  ExceptionHandler.handle(response, e, stackTrace);
}`

// Custom Exceptions
const customExceptionCode = `// Base custom exception
class ValidationException extends AppException {
  ValidationException(String message, {Map<String, dynamic>? errors})
      : super(message, statusCode: 400, details: errors);

  @override
  Map<String, dynamic> toResponse() => {
        'error': 'validation_failed',
        'message': message,
        'errors': details,
        'status_code': statusCode,
      };
}

// Specific validation errors
class UnauthorizedException extends AppException {
  UnauthorizedException([String message = 'Unauthorized'])
      : super(message, statusCode: 401);
}

class NotFoundException extends AppException {
  NotFoundException(String resource)
      : super('\$resource not found', statusCode: 404);
}

class ConflictException extends AppException {
  ConflictException(String message)
      : super(message, statusCode: 409);
}

// Usage in business logic
class UserService {
  Future<User> createUser(Map<String, dynamic> data) async {
    if (await User.exists(data['email'])) {
      throw ConflictException('User with this email already exists');
    }

    if (!isValidPassword(data['password'])) {
      throw ValidationException('Password does not meet requirements', {
        'password': ['Must be at least 8 characters', 'Must contain numbers']
      });
    }

    return await User.create(data);
  }
}`

// Exception Handler Usage
const handlerUsageCode = `// Basic exception handling
try {
  await processPayment(order);
} catch (e, stackTrace) {
  ExceptionHandler.handle(response, e, stackTrace);
}

// Handle with specific format
try {
  await generateReport();
} catch (e, stackTrace) {
  ExceptionHandler.handleWithFormat(response, e, 'xml', stackTrace);
}

// Custom response handling
ExceptionHandler.configure(
  showDetailedErrors: Khadem.isDevelopment,
  includeStackTracesInResponse: Khadem.isDevelopment,
  customFormatter: (AppException error) => {
    'success': false,
    'error': {
      'code': error.statusCode,
      'type': error.runtimeType.toString(),
      'message': error.message,
      'details': error.details,
    },
    'timestamp': DateTime.now().toIso8601String(),
  },
);`

// Response Formats
const jsonResponseCode = `{
  "error": true,
  "message": "Validation failed",
  "status_code": 400,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "details": {
    "email": ["Email is required"],
    "password": ["Password must be at least 8 characters"]
  },
  "exception_type": "ValidationException"
}`

const xmlResponseCode = `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <status_code>400</status_code>
  <message>Validation failed</message>
  <details>
    <email>Email is required</email>
    <password>Password must be at least 8 characters</password>
  </details>
  <timestamp>2024-01-15T10:30:00.000Z</timestamp>
</error>`

const formatUsageCode = `// Automatic format detection based on Accept header
app.get('/api/users', (request, response) async {
  try {
    final users = await User.all();
    return response.json({'users': users});
  } catch (e, stackTrace) {
    // Will respond in JSON, XML, or HTML based on request
    ExceptionHandler.handle(response, e, stackTrace);
  }
});

// Force specific format
app.get('/api/users.xml', (request, response) async {
  try {
    final users = await User.all();
    return response.xml({'users': users});
  } catch (e, stackTrace) {
    ExceptionHandler.handleWithFormat(response, e, 'xml', stackTrace);
  }
});`

// Exception Reporter Usage
const reporterUsageCode = `// Automatic reporting for AppException
try {
  await processOrder(orderData);
} catch (e, stackTrace) {
  if (e is AppException) {
    ExceptionReporter.reportAppException(e, stackTrace, {
      'order_id': orderData['id'],
      'user_id': orderData['user_id'],
      'amount': orderData['total'],
    });
  } else {
    ExceptionReporter.reportException(e, stackTrace, {
      'operation': 'process_order',
      'order_data': orderData,
    });
  }
  rethrow;
}

// Report with custom severity
ExceptionReporter.reportWithLevel('critical', error, stackTrace, {
  'service': 'payment_processor',
  'impact': 'high',
});

// Configure reporting
ExceptionReporter.configure(
  includeStackTraces: true,
  includeUserContext: true,
  includeRequestContext: true,
  includeEnvironmentInfo: true,
  minimumReportLevel: 'warning',
  globalContext: {
    'service': 'user_service',
    'version': '1.2.0',
  },
);`

// Configuration
const configurationCode = `// Configure exception handler
ExceptionHandler.configure(
  showDetailedErrors: Khadem.isDevelopment,
  includeStackTracesInResponse: Khadem.isDevelopment,
  customFormatter: (AppException error) => {
    'success': false,
    'error': {
      'code': error.statusCode,
      'type': error.runtimeType.toString(),
      'message': error.message,
      'timestamp': DateTime.now().toIso8601String(),
    },
    'data': error.details,
  },
);

// Configure exception reporter
ExceptionReporter.configure(
  includeStackTraces: true,
  includeUserContext: true,
  includeRequestContext: true,
  includeEnvironmentInfo: true,
  minimumReportLevel: Khadem.isProduction ? 'error' : 'warning',
);

// Add global context for all reports
ExceptionReporter.addGlobalContext('service', 'api_gateway');
ExceptionReporter.addGlobalContext('version', '2.1.0');
ExceptionReporter.addGlobalContext('environment', Khadem.environment);`

// Error Handling Patterns
const tryCatchPatternCode = `// Specific exception handling
class PaymentService {
  Future<void> processPayment(Order order) async {
    try {
      // Validate payment data
      if (order.total <= 0) {
        throw ValidationException('Order total must be greater than 0');
      }

      // Check payment method
      if (!isValidPaymentMethod(order.paymentMethod)) {
        throw ValidationException('Invalid payment method');
      }

      // Process payment
      await _chargeCard(order);

    } on ValidationException catch (e) {
      // Handle validation errors
      ExceptionReporter.reportAppException(e, null, {
        'order_id': order.id,
        'validation_errors': e.details,
      });
      throw e; // Re-throw for controller to handle

    } on PaymentException catch (e) {
      // Handle payment processing errors
      ExceptionReporter.reportAppException(e, null, {
        'order_id': order.id,
        'payment_method': order.paymentMethod,
      });
      throw PaymentFailedException('Payment processing failed');

    } catch (e, stackTrace) {
      // Handle unexpected errors
      ExceptionReporter.reportException(e, stackTrace, {
        'order_id': order.id,
        'operation': 'process_payment',
      });
      throw InternalServerException('An unexpected error occurred');
    }
  }
}`

const middlewarePatternCode = `// Error handling middleware
class ErrorHandlingMiddleware extends Middleware {
  @override
  Future<void> handle(Request request, Response response, Next next) async {
    try {
      await next();
    } on AppException catch (e, stackTrace) {
      ExceptionReporter.reportAppException(e, stackTrace, {
        'request_method': request.method,
        'request_url': request.uri.toString(),
        'user_agent': request.headers.header('user-agent'),
        'ip_address': request.ip,
      });

      ExceptionHandler.handle(response, e, stackTrace);
    } catch (e, stackTrace) {
      ExceptionReporter.reportException(e, stackTrace, {
        'request_method': request.method,
        'request_url': request.uri.toString(),
        'user_agent': request.headers.header('user-agent'),
        'ip_address': request.ip,
      });

      ExceptionHandler.handle(response, e, stackTrace);
    }
  }
}

// Register middleware
class Kernel {
  List<Middleware> get middleware => [
    ErrorHandlingMiddleware(),
    // Other middleware...
  ];
}`

const asyncPatternCode = `// Async error handling
class AsyncService {
  Future<void> performAsyncOperation() async {
    final completer = Completer<void>();

    // Start async operation
    Timer(Duration(seconds: 5), () async {
      try {
        await riskyAsyncOperation();
        completer.complete();
      } catch (e, stackTrace) {
        completer.completeError(e, stackTrace);
      }
    });

    try {
      await completer.future;
    } catch (e, stackTrace) {
      // Handle async errors
      ExceptionReporter.reportException(e, stackTrace, {
        'operation': 'async_operation',
        'timestamp': DateTime.now(),
      });
      throw AsyncOperationException('Async operation failed');
    }
  }

  // Using Future.error for error propagation
  Future<Result> processWithError() async {
    try {
      final data = await fetchData();
      final result = await processData(data);
      return Result.success(result);
    } catch (e, stackTrace) {
      ExceptionReporter.reportException(e, stackTrace, {
        'operation': 'process_with_error',
      });
      return Result.failure(e);
    }
  }
}`

// Global Context
const globalContextCode = `// Add global context for all reports
ExceptionReporter.addGlobalContext('service', 'user_management');
ExceptionReporter.addGlobalContext('version', '1.3.2');
ExceptionReporter.addGlobalContext('environment', Khadem.environment);

// Add user context (typically in auth middleware)
class AuthMiddleware extends Middleware {
  @override
  Future<void> handle(Request request, Response response, Next next) async {
    final user = await authenticateUser(request);

    if (user != null) {
      ExceptionReporter.addGlobalContext('user_id', user.id);
      ExceptionReporter.addGlobalContext('user_role', user.role);
      ExceptionReporter.addGlobalContext('user_email', user.email);
    }

    ExceptionReporter.addGlobalContext('request_id', request.id);
    ExceptionReporter.addGlobalContext('ip_address', request.ip);

    try {
      await next();
    } finally {
      // Clean up request-specific context
      ExceptionReporter.removeGlobalContext('request_id');
      if (user == null) {
        ExceptionReporter.removeGlobalContext('user_id');
        ExceptionReporter.removeGlobalContext('user_role');
        ExceptionReporter.removeGlobalContext('user_email');
      }
    }
  }
}

// Add session context
ExceptionReporter.addGlobalContext('session_id', session.id);
ExceptionReporter.addGlobalContext('last_activity', DateTime.now());

// Clear all custom context
ExceptionReporter.clearGlobalContext();`

// External Service Integration
const externalServiceCode = `// Sentry integration
class SentryReporter {
  static void initialize() {
    // Initialize Sentry SDK
    Sentry.init((options) {
      options.dsn = 'your-sentry-dsn';
      options.environment = Khadem.environment;
      options.release = '1.2.0';
    });
  }

  static void report(Object error, Map<String, dynamic> context, StackTrace? stackTrace) {
    Sentry.captureException(
      error,
      stackTrace: stackTrace,
      withScope: (scope) {
        // Add context to Sentry scope
        scope.setUser(SentryUser(
          id: context['user']?['id'],
          email: context['user']?['email'],
        ));

        scope.setTag('service', context['service'] ?? 'unknown');
        scope.setTag('environment', context['environment'] ?? 'unknown');

        if (context['request'] != null) {
          scope.setContext('request', context['request']);
        }
      },
    );
  }
}

// Extend ExceptionReporter
class ExtendedExceptionReporter extends ExceptionReporter {
  static void _sendToExternalService(
    Object error,
    Map<String, dynamic> context,
    StackTrace? stackTrace,
  ) {
    // Send to Sentry
    SentryReporter.report(error, context, stackTrace);

    // Send to Rollbar
    Rollbar.report(error, stackTrace: stackTrace, context: context);

    // Send to custom monitoring service
    MonitoringService.report(error, context, stackTrace);
  }
}`

// Common Exception Types
const httpExceptionsCode = `// HTTP-related exceptions
class UnauthorizedException extends AppException {
  UnauthorizedException([String message = 'Unauthorized'])
      : super(message, statusCode: 401);
}

class ForbiddenException extends AppException {
  ForbiddenException([String message = 'Forbidden'])
      : super(message, statusCode: 403);
}

class NotFoundException extends AppException {
  NotFoundException(String resource)
      : super('\$resource not found', statusCode: 404);
}

class MethodNotAllowedException extends AppException {
  MethodNotAllowedException(String method)
      : super('Method \$method not allowed', statusCode: 405);
}

class ConflictException extends AppException {
  ConflictException(String message)
      : super(message, statusCode: 409);
}

class UnprocessableEntityException extends AppException {
  UnprocessableEntityException(String message, Map<String, dynamic>? errors)
      : super(message, statusCode: 422, details: errors);
}

class TooManyRequestsException extends AppException {
  TooManyRequestsException([String message = 'Too many requests'])
      : super(message, statusCode: 429);
}

class InternalServerException extends AppException {
  InternalServerException([String message = 'Internal server error'])
      : super(message, statusCode: 500);
}`

const businessExceptionsCode = `// Business logic exceptions
class InsufficientFundsException extends AppException {
  InsufficientFundsException(double required, double available)
      : super(
          'Insufficient funds. Required: \$required, Available: \$available',
          statusCode: 400,
          details: {'required': required, 'available': available},
        );
}

class ProductOutOfStockException extends AppException {
  ProductOutOfStockException(String productId, int requested, int available)
      : super(
          'Product out of stock',
          statusCode: 409,
          details: {
            'product_id': productId,
            'requested': requested,
            'available': available,
          },
        );
}

class DuplicateOrderException extends AppException {
  DuplicateOrderException(String orderId)
      : super(
          'Duplicate order',
          statusCode: 409,
          details: {'order_id': orderId},
        );
}

class SubscriptionExpiredException extends AppException {
  SubscriptionExpiredException(DateTime expiryDate)
      : super(
          'Subscription expired',
          statusCode: 403,
          details: {'expiry_date': expiryDate.toIso8601String()},
        );
}

class FeatureNotAvailableException extends AppException {
  FeatureNotAvailableException(String feature, String plan)
      : super(
          'Feature not available in \$plan plan',
          statusCode: 403,
          details: {'feature': feature, 'plan': plan},
        );
}`

const validationExceptionsCode = `// Validation exceptions
class ValidationException extends AppException {
  ValidationException(String message, Map<String, List<String>>? errors)
      : super(message, statusCode: 400, details: errors);

  @override
  Map<String, dynamic> toResponse() => {
        'error': 'validation_failed',
        'message': message,
        'errors': details,
        'status_code': statusCode,
      };
}

// Specific validation errors
class RequiredFieldException extends ValidationException {
  RequiredFieldException(String field)
      : super('Field is required', {field: ['This field is required']});
}

class InvalidFormatException extends ValidationException {
  InvalidFormatException(String field, String expectedFormat)
      : super('Invalid format', {
          field: ['Expected format: \$expectedFormat']
        });
}

class LengthException extends ValidationException {
  LengthException(String field, int min, int max, int actual)
      : super('Invalid length', {
          field: ['Length must be between \$min and \$max characters (current: \$actual)']
        });
}

class RangeException extends ValidationException {
  RangeException(String field, num min, num max, num actual)
      : super('Value out of range', {
          field: ['Value must be between \$min and \$max (current: \$actual)']
        });
}

// Usage in validation
class UserValidator {
  static void validateCreate(Map<String, dynamic> data) {
    final errors = <String, List<String>>{};

    if (data['name'] == null || data['name'].toString().isEmpty) {
      errors['name'] = ['Name is required'];
    } else if (data['name'].toString().length < 2) {
      errors['name'] = ['Name must be at least 2 characters'];
    }

    if (data['email'] == null || !isValidEmail(data['email'])) {
      errors['email'] = ['Valid email is required'];
    }

    if (errors.isNotEmpty) {
      throw ValidationException('Validation failed', errors);
    }
  }
}`

// Testing
const testingCode = `// Unit test for custom exceptions
void main() {
  group('Custom Exceptions', () {
    test('ValidationException creates correct response', () {
      final errors = {'email': ['Invalid email format']};
      final exception = ValidationException('Validation failed', errors);

      expect(exception.statusCode, 400);
      expect(exception.message, 'Validation failed');
      expect(exception.details, errors);

      final response = exception.toResponse();
      expect(response['error'], 'validation_failed');
      expect(response['errors'], errors);
    });

    test('NotFoundException has correct status code', () {
      final exception = NotFoundException('User');
      expect(exception.statusCode, 404);
      expect(exception.message, 'User not found');
    });
  });

  group('Exception Handler', () {
    test('handles AppException correctly', () async {
      final exception = ValidationException('Test error', {});
      final response = MockResponse();

      ExceptionHandler.handle(response, exception);

      expect(response.statusCode, 400);
      expect(response.sentData['error'], true);
      expect(response.sentData['message'], 'Test error');
    });

    test('handles generic exception correctly', () async {
      final exception = Exception('Generic error');
      final response = MockResponse();

      ExceptionHandler.handle(response, exception);

      expect(response.statusCode, 500);
      expect(response.sentData['error'], true);
      expect(response.sentData['message'], 'Internal Server Error');
    });
  });

  group('Exception Reporter', () {
    test('includes context in reports', () async {
      ExceptionReporter.addGlobalContext('test', 'value');

      final exception = Exception('Test error');
      final context = {'custom': 'data'};

      // Mock logger to capture report
      final mockLogger = MockLogger();
      Khadem.logger = mockLogger;

      ExceptionReporter.reportException(exception, null, context);

      verify(mockLogger.error(
        any,
        context: captureAnyNamed('context'),
        stackTrace: anyNamed('stackTrace'),
      )).called(1);

      final capturedContext = verify(mockLogger.error(
        any,
        context: captureAnyNamed('context'),
      )).captured[0];

      expect(capturedContext['test'], 'value');
      expect(capturedContext['custom'], 'data');
      expect(capturedContext['exception']['type'], 'Exception');
    });
  });
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