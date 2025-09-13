<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Logging</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive structured logging system with multiple channels, configurable handlers, and proper separation of concerns.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Structured</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Channels</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Handlers</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Rotation</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Context</span>
        <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">JSON</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Logging</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Basic Logger Usage"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Logger automatically handles different log levels and channels</p>
          <p><strong>⚡ Tip:</strong> Use structured context for better debugging and monitoring</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Log Levels</h2>

      <CodeBlock
        :code="logLevelsCode"
        language="dart"
        title="Log Level Usage and Comparison"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Log Level Hierarchy</h4>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 text-sm">
          <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">
            <div class="font-medium text-gray-600 dark:text-gray-400">DEBUG</div>
            <div class="text-xs text-gray-500 dark:text-gray-500">Detailed info</div>
          </div>
          <div class="bg-blue-100 dark:bg-blue-900 p-2 rounded text-center">
            <div class="font-medium text-blue-600 dark:text-blue-400">INFO</div>
            <div class="text-xs text-blue-500 dark:text-blue-500">General info</div>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900 p-2 rounded text-center">
            <div class="font-medium text-yellow-600 dark:text-yellow-400">WARNING</div>
            <div class="text-xs text-yellow-500 dark:text-yellow-500">Potential issues</div>
          </div>
          <div class="bg-red-100 dark:bg-red-900 p-2 rounded text-center">
            <div class="font-medium text-red-600 dark:text-red-400">ERROR</div>
            <div class="text-xs text-red-500 dark:text-red-500">Application errors</div>
          </div>
          <div class="bg-purple-100 dark:bg-purple-900 p-2 rounded text-center">
            <div class="font-medium text-purple-600 dark:text-purple-400">CRITICAL</div>
            <div class="text-xs text-purple-500 dark:text-purple-500">Critical failures</div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Structured Logging with Context</h2>

      <CodeBlock
        :code="contextUsageCode"
        language="dart"
        title="Logging with Structured Context"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Context Benefits</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• Better debugging with structured data</li>
          <li>• Easier log analysis and filtering</li>
          <li>• Consistent metadata across log entries</li>
          <li>• Support for complex objects and nested data</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Multiple Channels</h2>

      <CodeBlock
        :code="channelsUsageCode"
        language="dart"
        title="Using Multiple Log Channels"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Channel Use Cases</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• <code>app</code> - General application logs</li>
          <li>• <code>database</code> - Database operations and queries</li>
          <li>• <code>api</code> - API requests and responses</li>
          <li>• <code>auth</code> - Authentication and authorization</li>
          <li>• <code>cache</code> - Cache operations and performance</li>
          <li>• <code>payment</code> - Payment processing logs</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <CodeBlock
        :code="configUsageCode"
        language="dart"
        title="Loading Logger Configuration"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Configuration Structure</h4>
        <CodeBlock
          :code="configStructureCode"
          language="dart"
          title="config/app.dart"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Handlers</h2>

      <div class="space-y-4">
        <div>
          <h4 class="font-medium mb-2">Console Handler</h4>
          <CodeBlock
            :code="consoleHandlerCode"
            language="dart"
            title="Console Logging with Colorization"
          />
        </div>

        <div>
          <h4 class="font-medium mb-2">File Handler</h4>
          <CodeBlock
            :code="fileHandlerCode"
            language="dart"
            title="File Logging with Rotation"
          />
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Handler Features</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• Console handler with optional colorized output</li>
          <li>• File handler with automatic rotation (size/daily)</li>
          <li>• JSON and text formatting options</li>
          <li>• Configurable backup file management</li>
          <li>• Error handling that prevents logging failures</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Formatters</h2>

      <div class="space-y-4">
        <div>
          <h4 class="font-medium mb-2">JSON Formatter</h4>
          <CodeBlock
            :code="jsonFormatterCode"
            language="dart"
            title="Structured JSON Logging"
          />
        </div>

        <div>
          <h4 class="font-medium mb-2">Text Formatter</h4>
          <CodeBlock
            :code="textFormatterCode"
            language="dart"
            title="Human-Readable Text Logging"
          />
        </div>
      </div>

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">Formatter Output Examples</h4>
        <div class="space-y-2 text-sm">
          <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
            <strong>JSON:</strong> {"timestamp":"2024-01-15T10:30:00.000Z","level":"INFO","message":"User logged in","context":{"userId":123}}
          </div>
          <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
            <strong>Text:</strong> [2024-01-15T10:30:00.000Z] [INFO] User logged in<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Context: {"userId":123}
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling and Stack Traces</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Logging Errors with Stack Traces"
      />

      <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
        <h4 class="font-medium text-pink-800 dark:text-pink-200 mb-2">Error Handling Features</h4>
        <ul class="text-sm text-pink-700 dark:text-pink-300 space-y-1">
          <li>• Automatic stack trace capture</li>
          <li>• Exception details in context</li>
          <li>• Error recovery without crashing the application</li>
          <li>• Handler error isolation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Handlers</h2>

      <CodeBlock
        :code="customHandlerCode"
        language="dart"
        title="Creating Custom Log Handlers"
      />

      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
        <h4 class="font-medium text-cyan-800 dark:text-cyan-200 mb-2">Custom Handler Examples</h4>
        <ul class="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
          <li>• Database log handler</li>
          <li>• External service handler (Logstash, Elasticsearch)</li>
          <li>• Email/SMS alert handler</li>
          <li>• Cloud logging services (AWS CloudWatch, GCP Logging)</li>
          <li>• Metrics collection handler</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Middleware Integration</h2>

      <CodeBlock
        :code="middlewareCode"
        language="dart"
        title="Logging Middleware for HTTP Requests"
      />

      <div class="bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg border border-lime-200 dark:border-lime-800">
        <h4 class="font-medium text-lime-800 dark:text-lime-200 mb-2">Middleware Use Cases</h4>
        <ul class="text-sm text-lime-700 dark:text-lime-300 space-y-1">
          <li>• Request/response logging</li>
          <li>• Performance monitoring</li>
          <li>• Security event logging</li>
          <li>• Error tracking and reporting</li>
          <li>• Audit trail generation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Production Configuration</h2>

      <CodeBlock
        :code="productionConfigCode"
        language="dart"
        title="Production Logging Configuration"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 class="font-medium mb-2">Production Best Practices</h4>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• Use higher minimum log levels (warning/error)</li>
          <li>• Enable file logging with rotation</li>
          <li>• Disable console logging in production</li>
          <li>• Use JSON format for better parsing</li>
          <li>• Configure appropriate file sizes and retention</li>
          <li>• Set up log monitoring and alerting</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Performance Considerations</h2>

      <div class="space-y-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Optimization Tips</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Log level filtering happens early to avoid unnecessary processing</li>
            <li>• Use appropriate minimum log levels in production</li>
            <li>• Consider async logging for high-volume scenarios</li>
            <li>• Batch log writes when possible</li>
            <li>• Monitor log file sizes and rotation performance</li>
          </ul>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Memory Usage</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Context data is kept in memory until logged</li>
            <li>• Large context objects may impact performance</li>
            <li>• Consider sampling for high-frequency debug logs</li>
            <li>• Monitor memory usage with large log volumes</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use appropriate log levels for different types of messages</li>
            <li>• Include relevant context data for debugging</li>
            <li>• Use channels to organize logs by application areas</li>
            <li>• Configure logging for different environments (dev/prod)</li>
            <li>• Handle sensitive data appropriately (avoid logging passwords, tokens)</li>
            <li>• Use structured logging for machine-readable logs</li>
            <li>• Set up log rotation to manage disk space</li>
            <li>• Monitor log files and set up alerts for critical errors</li>
            <li>• Test logging configuration in staging environments</li>
            <li>• Document your logging strategy and conventions</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't log sensitive information (passwords, credit cards, tokens)</li>
            <li>• Don't use print() statements instead of proper logging</li>
            <li>• Don't log at debug level in production for high-traffic applications</li>
            <li>• Don't create too many channels (keep it organized)</li>
            <li>• Don't ignore log rotation configuration</li>
            <li>• Don't use logging for business logic or control flow</li>
            <li>• Don't forget to close loggers when shutting down</li>
            <li>• Don't use generic messages like "Error occurred"</li>
            <li>• Don't mix different log formats in the same application</li>
            <li>• Don't forget to handle logging errors gracefully</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Logging</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Testing Logger Functionality"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Testing Strategies</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Test log level filtering</li>
          <li>• Test structured context logging</li>
          <li>• Test channel-specific logging</li>
          <li>• Test error handling and stack traces</li>
          <li>• Test configuration loading</li>
          <li>• Mock handlers for unit testing</li>
          <li>• Test log file rotation</li>
          <li>• Test custom handlers</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Troubleshooting</h2>

      <div class="space-y-4">
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Common Issues</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li><strong>Logs not appearing:</strong> Check minimum log level configuration</li>
            <li><strong>File permission errors:</strong> Ensure write access to log directories</li>
            <li><strong>Performance issues:</strong> Review log volume and increase minimum log level</li>
            <li><strong>Configuration not loading:</strong> Verify config structure matches expected format</li>
            <li><strong>Handler errors:</strong> Check handler-specific configuration and permissions</li>
            <li><strong>Memory issues:</strong> Monitor context data size and log frequency</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 class="font-medium mb-2">Debug Logging</h4>
          <CodeBlock
            :code="debugLoggingCode"
            language="dart"
            title="Debugging Logger Issues"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Logging',
  meta: [
    { name: 'description', content: 'Comprehensive logging documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Create a logger instance
final logger = Logger();

// Basic logging methods
logger.debug('Detailed debug information');
logger.info('General application information');
logger.warning('Warning about potential issues');
logger.error('Error that occurred');
logger.critical('Critical system failure');

// Logging with different channels
logger.info('User action', channel: 'auth');
logger.error('Database error', channel: 'database');

// Close logger when done
logger.close();`

// Log Levels
const logLevelsCode = `// Log level comparison
LogLevel current = LogLevel.info;
LogLevel message = LogLevel.warning;

// Check if message should be logged
if (message.isAtLeast(current)) {
  print('Message will be logged');
}

// Parse from string
LogLevel level = LogLevel.fromString('error');

// Get string representations
print(LogLevel.debug.name);      // 'debug'
print(LogLevel.debug.nameUpper); // 'DEBUG'

// Level hierarchy (increasing severity)
const levels = [
  LogLevel.debug,    // 0 - Most verbose
  LogLevel.info,     // 1
  LogLevel.warning,  // 2
  LogLevel.error,    // 3
  LogLevel.critical, // 4 - Most severe
];`

// Structured Logging with Context
const contextUsageCode = `// Simple context
logger.info('User logged in', context: {
  'userId': 123,
  'username': 'john_doe',
  'ip': '192.168.1.100',
});

// Complex nested context
logger.debug('Payment processed', context: {
  'transaction': {
    'id': 'txn_123456',
    'amount': 99.99,
    'currency': 'USD',
    'method': 'credit_card',
  },
  'user': {
    'id': 456,
    'email': 'user@example.com',
  },
  'metadata': {
    'timestamp': DateTime.now().toIso8601String(),
    'version': '1.2.3',
    'environment': 'production',
  },
});

// Error context
try {
  processPayment(paymentData);
} catch (e) {
  logger.error('Payment processing failed', context: {
    'error': e.toString(),
    'paymentId': paymentData.id,
    'amount': paymentData.amount,
    'userId': paymentData.userId,
  });
}

// Performance context
logger.info('API request completed', context: {
  'method': 'POST',
  'endpoint': '/api/users',
  'statusCode': 200,
  'responseTime': 150, // milliseconds
  'requestSize': 2048, // bytes
  'responseSize': 1024, // bytes
});`

// Multiple Channels
const channelsUsageCode = `// Set default channel
logger.setDefaultChannel('app');

// Log to default channel
logger.info('Application started');

// Log to specific channels
logger.info('User authentication successful', channel: 'auth');
logger.warning('Cache miss rate is high', channel: 'cache');
logger.error('Database connection timeout', channel: 'database');
logger.debug('API request details', channel: 'api');

// Add handlers to specific channels
logger.addHandler(ConsoleLogHandler(), channel: 'app');
logger.addHandler(FileLogHandler(filePath: 'logs/auth.log'), channel: 'auth');
logger.addHandler(FileLogHandler(filePath: 'logs/database.log'), channel: 'database');

// Channel-specific configuration
class PaymentService {
  void processPayment(Payment payment) {
    logger.info('Processing payment', channel: 'payment', context: {
      'paymentId': payment.id,
      'amount': payment.amount,
    });

    try {
      // Payment processing logic
      _chargeCard(payment);
      logger.info('Payment successful', channel: 'payment', context: {
        'paymentId': payment.id,
        'transactionId': 'txn_123',
      });
    } catch (e) {
      logger.error('Payment failed', channel: 'payment', context: {
        'paymentId': payment.id,
        'error': e.toString(),
      });
      throw e;
    }
  }
}`

// Configuration
const configUsageCode = `// Load configuration from app config
final logger = Logger();
final config = AppConfig(); // Your config implementation

logger.loadFromConfig(config);

// Manual configuration
final logger = Logger(minimumLevel: LogLevel.warning);
logger.setDefaultChannel('app');

// Add handlers programmatically
logger.addHandler(ConsoleLogHandler(colorize: true));
logger.addHandler(FileLogHandler(
  filePath: 'storage/logs/app.log',
  formatJson: true,
  rotateOnSize: true,
  maxFileSizeBytes: 5 * 1024 * 1024, // 5MB
  maxBackupCount: 5,
));`

const configStructureCode = `// config/app.dart
Map<String, dynamic> config = {
  'logging': {
    'minimum_level': 'info',     // debug, info, warning, error, critical
    'default': 'app',            // Default channel name

    'handlers': {
      'console': {
        'enabled': true,
        'colorize': true,        // Colorize console output
      },

      'file': {
        'enabled': true,
        'path': 'storage/logs/app.log',
        'format_json': true,     // Use JSON format
        'rotate_on_size': true,  // Rotate when file reaches max size
        'rotate_daily': false,   // Rotate daily
        'max_size': 5242880,     // 5MB in bytes
        'max_backups': 5,        // Keep 5 backup files
      },
    },
  },
};`

// Handlers
const consoleHandlerCode = `// Basic console handler
final consoleHandler = ConsoleLogHandler();
logger.addHandler(consoleHandler);

// Colored console output (default)
final coloredHandler = ConsoleLogHandler(colorize: true);
logger.addHandler(coloredHandler);

// Disable colors for certain environments
final plainHandler = ConsoleLogHandler(colorize: false);
logger.addHandler(plainHandler);

// Color mapping:
// DEBUG: White
// INFO: Green
// WARNING: Yellow
// ERROR: Red
// CRITICAL: Magenta`

const fileHandlerCode = `// Basic file handler
final fileHandler = FileLogHandler(
  filePath: 'storage/logs/app.log',
);
logger.addHandler(fileHandler);

// Advanced file handler with rotation
final advancedHandler = FileLogHandler(
  filePath: 'storage/logs/app.log',
  formatJson: true,                    // JSON format for structured logging
  rotateOnSize: true,                  // Rotate when file reaches max size
  rotateDaily: false,                  // Rotate daily instead of by size
  maxFileSizeBytes: 10 * 1024 * 1024,  // 10MB
  maxBackupCount: 10,                  // Keep 10 backup files
);

// Daily rotation
final dailyHandler = FileLogHandler(
  filePath: 'storage/logs/daily.log',
  rotateOnSize: false,
  rotateDaily: true,
  maxBackupCount: 30,  // Keep 30 days of logs
);

// Backup file naming:
// app.log.1 (most recent)
// app.log.2
// app.log.3
// ... up to maxBackupCount`

// Formatters
const jsonFormatterCode = `// JSON formatter for structured logging
final jsonFormatter = JsonLogFormatter();

// Output format:
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "level": "INFO",
  "message": "User logged in",
  "context": {
    "userId": 123,
    "username": "john_doe"
  },
  "stackTrace": null
}

// Benefits:
// - Machine-readable
// - Easy to parse and analyze
// - Compatible with log aggregation tools
// - Structured data preservation`

const textFormatterCode = `// Text formatter for human-readable logs
final textFormatter = TextLogFormatter(
  includeTimestamp: true,
  includeLevel: true,
);

// Output format:
// [2024-01-15T10:30:00.000Z] [INFO] User logged in
// Context: {"userId":123,"username":"john_doe"}
// Stack Trace:
// #0      main (file:///path/to/file.dart:10:5)
// #1      _startIsolate.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:299:19)

// Benefits:
// - Human-readable
// - Easy to read in terminal/console
// - Includes full stack traces
// - Familiar format for developers`

// Error Handling
const errorHandlingCode = `// Automatic stack trace capture
try {
  riskyOperation();
} catch (e, stackTrace) {
  logger.error('Operation failed', context: {
    'error': e.toString(),
    'errorType': e.runtimeType.toString(),
  }, stackTrace: stackTrace);
}

// Manual stack trace
StackTrace? currentStack = StackTrace.current;
logger.warning('Potential issue detected', stackTrace: currentStack);

// Error with additional context
class ApiService {
  Future<void> makeRequest(String url) async {
    try {
      final response = await http.get(Uri.parse(url));
      logger.info('API request successful', context: {
        'url': url,
        'statusCode': response.statusCode,
        'responseTime': DateTime.now().difference(startTime).inMilliseconds,
      });
    } catch (e, stackTrace) {
      logger.error('API request failed', context: {
        'url': url,
        'error': e.toString(),
        'method': 'GET',
        'timestamp': DateTime.now().toIso8601String(),
      }, stackTrace: stackTrace);

      throw e; // Re-throw after logging
    }
  }
}

// Graceful error handling
void safeLoggingOperation() {
  try {
    // Some operation that might fail
    performUnsafeOperation();
  } catch (e) {
    // Logging errors won't crash the application
    logger.error('Safe operation failed', context: {'error': e.toString()});
    // Continue execution...
  }
}`

// Custom Handlers
const customHandlerCode = `// Custom handler interface implementation
class DatabaseLogHandler implements LogHandler {
  final DatabaseConnection _db;

  DatabaseLogHandler(this._db);

  @override
  void log(LogLevel level, String message,
      {Map<String, dynamic>? context, StackTrace? stackTrace}) {
    try {
      _db.insert('logs', {
        'level': level.nameUpper,
        'message': message,
        'context': jsonEncode(context),
        'stack_trace': stackTrace?.toString(),
        'timestamp': DateTime.now().toIso8601String(),
      });
    } catch (e) {
      // Fallback to console if database fails
      print('Failed to log to database: \$e');
    }
  }

  @override
  void close() {
    // Close database connection
  }
}

// Email alert handler
class EmailAlertHandler implements LogHandler {
  final EmailService _email;

  EmailAlertHandler(this._email);

  @override
  void log(LogLevel level, String message,
      {Map<String, dynamic>? context, StackTrace? stackTrace}) {
    if (level == LogLevel.critical || level == LogLevel.error) {
      _email.sendAlert(
        subject: 'Critical Error: \$message',
        body: '''
Level: \${level.nameUpper}
Message: \$message
Context: \${jsonEncode(context)}
Stack Trace: \${stackTrace?.toString() ?? 'N/A'}
Timestamp: \${DateTime.now().toIso8601String()}
        ''',
      );
    }
  }

  @override
  void close() {}
}

// Usage
logger.addHandler(DatabaseLogHandler(database));
logger.addHandler(EmailAlertHandler(emailService), channel: 'alerts');`

// Middleware Integration
const middlewareCode = `// HTTP request logging middleware
class RequestLoggingMiddleware extends Middleware {
  final Logger _logger;

  RequestLoggingMiddleware(this._logger);

  @override
  Future<void> handle(Request request, Response response, Next next) async {
    final startTime = DateTime.now();
    final requestId = _generateRequestId();

    // Log incoming request
    _logger.info('Request started', channel: 'http', context: {
      'requestId': requestId,
      'method': request.method,
      'url': request.url.toString(),
      'headers': _sanitizeHeaders(request.headers),
      'userAgent': request.header('user-agent'),
      'ip': request.ip,
    });

    try {
      await next();

      final duration = DateTime.now().difference(startTime);

      // Log successful response
      _logger.info('Request completed', channel: 'http', context: {
        'requestId': requestId,
        'statusCode': response.statusCode,
        'duration': duration.inMilliseconds,
        'responseSize': response.length,
      });
    } catch (e, stackTrace) {
      final duration = DateTime.now().difference(startTime);

      // Log error response
      _logger.error('Request failed', channel: 'http', context: {
        'requestId': requestId,
        'error': e.toString(),
        'statusCode': response.statusCode,
        'duration': duration.inMilliseconds,
      }, stackTrace: stackTrace);

      throw e;
    }
  }

  String _generateRequestId() {
    return DateTime.now().millisecondsSinceEpoch.toString();
  }

  Map<String, String> _sanitizeHeaders(Map<String, dynamic> headers) {
    final sanitized = Map<String, String>.from(headers);
    // Remove sensitive headers
    sanitized.remove('authorization');
    sanitized.remove('cookie');
    return sanitized;
  }
}

// Database operation logging
class DatabaseLoggingMiddleware {
  final Logger _logger;

  DatabaseLoggingMiddleware(this._logger);

  Future<T> execute<T>(String operation, Future<T> Function() action) async {
    final startTime = DateTime.now();

    try {
      final result = await action();
      final duration = DateTime.now().difference(startTime);

      _logger.debug('Database operation completed', channel: 'database', context: {
        'operation': operation,
        'duration': duration.inMilliseconds,
        'success': true,
      });

      return result;
    } catch (e, stackTrace) {
      final duration = DateTime.now().difference(startTime);

      _logger.error('Database operation failed', channel: 'database', context: {
        'operation': operation,
        'duration': duration.inMilliseconds,
        'error': e.toString(),
      }, stackTrace: stackTrace);

      throw e;
    }
  }
}`

// Production Configuration
const productionConfigCode = `// Production configuration
Map<String, dynamic> productionConfig = {
  'logging': {
    'minimum_level': 'warning',  // Reduce noise in production
    'default': 'app',

    'handlers': {
      'console': {
        'enabled': false,         // Disable console in production
      },

      'file': {
        'enabled': true,
        'path': '/var/log/app/app.log',
        'format_json': true,      // JSON for log aggregation
        'rotate_on_size': true,
        'max_size': 100 * 1024 * 1024,  // 100MB
        'max_backups': 10,
      },

      // Additional file for errors only
      'error_file': {
        'enabled': true,
        'path': '/var/log/app/errors.log',
        'format_json': true,
        'rotate_daily': true,
        'max_backups': 30,        // Keep 30 days
      },
    },
  },
};

// Error-only handler for separate error log
class ErrorOnlyHandler implements LogHandler {
  final FileLogHandler _fileHandler;

  ErrorOnlyHandler(String filePath)
      : _fileHandler = FileLogHandler(filePath: filePath, formatJson: true);

  @override
  void log(LogLevel level, String message,
      {Map<String, dynamic>? context, StackTrace? stackTrace}) {
    // Only log errors and above
    if (level == LogLevel.error || level == LogLevel.critical) {
      _fileHandler.log(level, message, context: context, stackTrace: stackTrace);
    }
  }

  @override
  void close() => _fileHandler.close();
}`

// Testing
const testingCode = `// Unit tests for logging
void main() {
  group('Logger Tests', () {
    late Logger logger;
    late MockLogHandler mockHandler;

    setUp(() {
      logger = Logger(minimumLevel: LogLevel.debug);
      mockHandler = MockLogHandler();
      logger.addHandler(mockHandler);
    });

    test('Basic logging works', () {
      logger.info('Test message');
      expect(mockHandler.loggedMessages, contains('Test message'));
    });

    test('Log level filtering works', () {
      logger = Logger(minimumLevel: LogLevel.warning);
      logger.debug('Debug message'); // Should be filtered out
      logger.warning('Warning message'); // Should be logged

      expect(mockHandler.loggedMessages, isNot(contains('Debug message')));
      expect(mockHandler.loggedMessages, contains('Warning message'));
    });

    test('Structured context logging works', () {
      final context = {'userId': 123, 'action': 'login'};
      logger.info('User action', context: context);

      final loggedEntry = mockHandler.loggedEntries.last;
      expect(loggedEntry.context, equals(context));
    });

    test('Channel-specific logging works', () {
      logger.addHandler(MockLogHandler(), channel: 'test');
      logger.info('Channel message', channel: 'test');

      // Verify message went to correct channel
    });

    test('Error handling with stack traces works', () {
      final stackTrace = StackTrace.current;
      logger.error('Test error', stackTrace: stackTrace);

      final loggedEntry = mockHandler.loggedEntries.last;
      expect(loggedEntry.stackTrace, equals(stackTrace));
    });
  });
}

// Mock handler for testing
class MockLogHandler implements LogHandler {
  final List<String> loggedMessages = [];
  final List<LogEntry> loggedEntries = [];

  @override
  void log(LogLevel level, String message,
      {Map<String, dynamic>? context, StackTrace? stackTrace}) {
    loggedMessages.add(message);
    loggedEntries.add(LogEntry(
      level: level,
      message: message,
      context: context,
      stackTrace: stackTrace,
      timestamp: DateTime.now(),
    ));
  }

  @override
  void close() {}
}

class LogEntry {
  final LogLevel level;
  final String message;
  final Map<String, dynamic>? context;
  final StackTrace? stackTrace;
  final DateTime timestamp;

  LogEntry({
    required this.level,
    required this.message,
    this.context,
    this.stackTrace,
    required this.timestamp,
  });
}`

// Debug Logging
const debugLoggingCode = `// Enable debug logging for troubleshooting
final logger = Logger(minimumLevel: LogLevel.debug);

// Log configuration details
logger.debug('Logger initialized', context: {
  'minimumLevel': logger.minimumLevel.name,
  'defaultChannel': logger.defaultChannel,
  'availableChannels': LogChannelManager().channels.toList(),
});

// Log handler information
logger.debug('Handlers configured', context: {
  'console': {'enabled': true, 'colorize': true},
  'file': {'enabled': true, 'path': 'storage/logs/app.log'},
});

// Test logging pipeline
logger.debug('Testing log pipeline', context: {
  'testMessage': 'This is a test',
  'timestamp': DateTime.now().toIso8601String(),
});

// Check file permissions
try {
  final logFile = File('storage/logs/app.log');
  logger.debug('Log file status', context: {
    'exists': logFile.existsSync(),
    'writable': logFile.existsSync() ? logFile.statSync().mode & 0x92 != 0 : false,
    'size': logFile.existsSync() ? logFile.lengthSync() : 0,
  });
} catch (e) {
  logger.error('Failed to check log file', context: {'error': e.toString()});
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