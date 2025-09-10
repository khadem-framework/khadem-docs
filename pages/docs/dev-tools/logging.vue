<template>
  <div>
    <h1>Logging</h1>
    <p>Khadem provides a comprehensive logging system that helps you track application behavior, debug issues, and monitor system health.</p>

    <h2>Overview</h2>
    <p>The logging system supports multiple log levels, channels, and formats, making it easy to manage logs across different environments and use cases.</p>

    <h2>Basic Logging</h2>
    <CodeBlock language="dart" title="Basic Logging Usage">
const basicLogging = `
// Simple logging
Logger.info('User login successful', {'user_id': user.id, 'ip': request.ip});

Logger.warning('Rate limit exceeded', {'user_id': user.id, 'endpoint': request.path});

Logger.error('Database connection failed', error, stackTrace);

// Debug logging (only in development)
Logger.debug('Processing user data', {'user_count': users.length});
`;
    </CodeBlock>

    <h2>Log Levels</h2>
    <p>Khadem supports standard log levels:</p>
    <ul>
      <li><strong>DEBUG</strong> - Detailed information for debugging</li>
      <li><strong>INFO</strong> - General information about application operation</li>
      <li><strong>WARNING</strong> - Warning messages for potential issues</li>
      <li><strong>ERROR</strong> - Error messages for failures</li>
      <li><strong>CRITICAL</strong> - Critical errors that require immediate attention</li>
    </ul>

    <h2>Contextual Logging</h2>
    <CodeBlock language="dart" title="Logging with Context">
const contextualLogging = `
// Logging with request context
class RequestLogger {
  static void logRequest(Request req, Response res, Duration duration) {
    Logger.info('HTTP Request', {
      'method': req.method,
      'path': req.path,
      'status_code': res.statusCode,
      'duration_ms': duration.inMilliseconds,
      'user_agent': req.header('User-Agent'),
      'ip': req.ip,
      'user_id': req.user?.id,
    });
  }

  static void logError(Request req, dynamic error, StackTrace stackTrace) {
    Logger.error('Request Error', error, stackTrace, {
      'method': req.method,
      'path': req.path,
      'ip': req.ip,
      'user_id': req.user?.id,
      'headers': req.headers,
    });
  }
}

// Usage in middleware
class LoggingMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    final startTime = DateTime.now();

    try {
      await next();

      final duration = DateTime.now().difference(startTime);
      RequestLogger.logRequest(req, res, duration);
    } catch (e, stackTrace) {
      final duration = DateTime.now().difference(startTime);
      RequestLogger.logError(req, e, stackTrace);

      rethrow;
    }
  }
}
`;
    </CodeBlock>

    <h2>Log Channels</h2>
    <CodeBlock language="dart" title="Multiple Log Channels">
const logChannels = `
// Configure multiple log channels
class LoggingConfig {
  static Map&lt;String, dynamic&gt; get channels => {
    'single': {
      'driver': 'single',
      'path': 'storage/logs/app.log',
      'level': 'debug',
    },
    'daily': {
      'driver': 'daily',
      'path': 'storage/logs/app.log',
      'level': 'info',
      'days': 30,
    },
    'slack': {
      'driver': 'slack',
      'url': env('LOG_SLACK_WEBHOOK_URL'),
      'username': 'Khadem App',
      'emoji': ':warning:',
      'level': 'critical',
    },
    'database': {
      'driver': 'database',
      'table': 'logs',
      'level': 'error',
    }
  };
}

// Usage with specific channels
Logger.channel('slack').critical('System down!', {'server': 'web-01'});

Logger.channel('database').error('Payment failed', {'user_id': user.id, 'amount': 99.99});
`;
    </CodeBlock>

    <h2>Structured Logging</h2>
    <CodeBlock language="dart" title="Structured Log Data">
const structuredLogging = `
// Structured logging for better searchability
class UserActivityLogger {
  static void logUserAction(String action, Map&lt;String, dynamic&gt; context) {
    Logger.info('User Action: \${action}', {
      'action': action,
      'user_id': context['user_id'],
      'resource_type': context['resource_type'],
      'resource_id': context['resource_id'],
      'ip_address': context['ip'],
      'user_agent': context['user_agent'],
      'timestamp': DateTime.now().toIso8601String(),
      'metadata': context['metadata'] ?? {},
    });
  }

  static void logSecurityEvent(String event, Map&lt;String, dynamic&gt; data) {
    Logger.warning('Security Event: \${event}', {
      'event': event,
      'severity': data['severity'] ?? 'medium',
      'user_id': data['user_id'],
      'ip_address': data['ip'],
      'user_agent': data['user_agent'],
      'details': data['details'] ?? {},
      'timestamp': DateTime.now().toIso8601String(),
    });
  }
}

// Usage examples
UserActivityLogger.logUserAction('profile_update', {
  'user_id': user.id,
  'resource_type': 'user',
  'resource_id': user.id,
  'ip': request.ip,
  'user_agent': request.header('User-Agent'),
  'metadata': {'fields_updated': ['name', 'email']}
});

UserActivityLogger.logSecurityEvent('failed_login', {
  'user_id': user.id,
  'ip': request.ip,
  'severity': 'low',
  'details': {'attempts': 3}
});
`;
    </CodeBlock>

    <h2>Log Formatting</h2>
    <CodeBlock language="dart" title="Custom Log Formatting">
const logFormatting = `
// Custom log formatter
class JsonFormatter implements LogFormatter {
  @override
  String format(LogRecord record) {
    return jsonEncode({
      'timestamp': record.timestamp.toIso8601String(),
      'level': record.level.name,
      'message': record.message,
      'context': record.context,
      'channel': record.channel,
    });
  }
}

// Custom formatter for development
class DevFormatter implements LogFormatter {
  @override
  String format(LogRecord record) {
    final timestamp = record.timestamp.toString().split('.')[0];
    final level = record.level.name.padRight(8);
    final context = record.context.isNotEmpty ? ' ${jsonEncode(record.context)}' : '';

    return '[\${timestamp}] \${level} \${record.message}\${context}';
  }
}

// Configure formatter
Logger.formatter = Khadem.env.get('APP_ENV') == 'production'
  ? JsonFormatter()
  : DevFormatter();
`;
    </CodeBlock>

    <h2>Log Rotation and Management</h2>
    <CodeBlock language="dart" title="Log Rotation">
const logRotation = `
// Automatic log rotation
class LogRotationManager {
  static Future rotateLogs() async {
    final logDir = Directory('storage/logs');
    final files = await logDir.list().toList();

    // Keep only last 30 days of logs
    final cutoffDate = DateTime.now().subtract(Duration(days: 30));

    for (final file in files) {
      if (file is File && file.path.endsWith('.log')) {
        final stat = await file.stat();
        if (stat.modified.isBefore(cutoffDate)) {
          await file.delete();
          Logger.info('Deleted old log file: \${file.path}');
        }
      }
    }
  }

  static Future compressOldLogs() async {
    final logDir = Directory('storage/logs');
    final files = await logDir.list().toList();

    // Compress logs older than 7 days
    final cutoffDate = DateTime.now().subtract(Duration(days: 7));

    for (final file in files) {
      if (file is File && file.path.endsWith('.log')) {
        final stat = await file.stat();
        if (stat.modified.isBefore(cutoffDate)) {
          final gzipFile = File('\${file.path}.gz');
          await file.openRead().transform(gzip.encoder).pipe(gzipFile.openWrite());
          await file.delete();

          Logger.info('Compressed log file: \${file.path}');
        }
      }
    }
  }
}
`;
    </CodeBlock>

    <h2>Performance Logging</h2>
    <CodeBlock language="dart" title="Performance Monitoring">
const performanceLogging = `
// Performance logging middleware
class PerformanceLogger implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    final startTime = DateTime.now();
    final startMemory = ProcessInfo.currentRss;

    try {
      await next();

      final duration = DateTime.now().difference(startTime);
      final memoryUsed = ProcessInfo.currentRss - startMemory;

      Logger.info('Request Performance', {
        'method': req.method,
        'path': req.path,
        'duration_ms': duration.inMilliseconds,
        'memory_used_kb': memoryUsed ~/ 1024,
        'status_code': res.statusCode,
        'response_size': res.contentLength,
      });

      // Alert on slow requests
      if (duration.inMilliseconds > 1000) {
        Logger.warning('Slow Request Detected', {
          'method': req.method,
          'path': req.path,
          'duration_ms': duration.inMilliseconds,
        });
      }
    } catch (e) {
      final duration = DateTime.now().difference(startTime);
      Logger.error('Request Failed', e, {
        'method': req.method,
        'path': req.path,
        'duration_ms': duration.inMilliseconds,
      });

      rethrow;
    }
  }
}
`;
    </CodeBlock>

    <h2>Best Practices</h2>
    <ul>
      <li>Use appropriate log levels for different types of messages</li>
      <li>Include relevant context in log messages</li>
      <li>Avoid logging sensitive information</li>
      <li>Use structured logging for better searchability</li>
      <li>Implement log rotation to manage disk space</li>
      <li>Monitor logs for errors and performance issues</li>
      <li>Use different channels for different types of logs</li>
    </ul>
  </div>
</template>

<script setup>
import CodeBlock from '~/components/common/CodeBlock.vue'
</script>
