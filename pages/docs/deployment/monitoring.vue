<template>
  <div>
    <h1>Monitoring</h1>
    <p>Comprehensive monitoring setup for your Khadem application including metrics, logging, alerting, and performance tracking.</p>

    <h2>Overview</h2>
    <p>Monitoring is crucial for maintaining application health, performance, and reliability in production environments.</p>

    <h2>Application Metrics</h2>
    <CodeBlock language="dart" title="Metrics Middleware">
// lib/src/core/middleware/metrics_middleware.dart
import 'package:shelf/shelf.dart';
import 'package:prometheus_client/prometheus_client.dart';

class MetricsMiddleware {
  final CollectorRegistry _registry;
  final Counter _httpRequestsTotal;
  final Histogram _httpRequestDuration;
  final Gauge _activeConnections;

  MetricsMiddleware()
      : _registry = CollectorRegistry(),
        _httpRequestsTotal = Counter(
          name: 'http_requests_total',
          help: 'Total number of HTTP requests',
          labelNames: ['method', 'route', 'status'],
        )..register(_registry),
        _httpRequestDuration = Histogram(
          name: 'http_request_duration_seconds',
          help: 'HTTP request duration in seconds',
          labelNames: ['method', 'route'],
        )..register(_registry),
        _activeConnections = Gauge(
          name: 'active_connections',
          help: 'Number of active connections',
        )..register(_registry);

  Middleware get middleware =&gt; (Handler innerHandler) &#123;
        return (Request request) async {
          final stopwatch = Stopwatch()..start();
          _activeConnections.inc();

          try {
            final response = await innerHandler(request);

            _httpRequestsTotal
                .labels([
                  request.method,
                  request.url.path,
                  response.statusCode.toString()
                ])
                .inc();

            _httpRequestDuration
                .labels([request.method, request.url.path])
                .observe(stopwatch.elapsedMilliseconds / 1000.0);

            return response;
          } catch (e) {
            _httpRequestsTotal
                .labels([request.method, request.url.path, '500'])
                .inc();

            rethrow;
          } finally {
            _activeConnections.dec();
            stopwatch.stop();
          }
        };
      };

  String getMetrics() {
    return _registry.collect().map((metric) =&gt; metric.serialize()).join('\n');
  }
}
    </CodeBlock>

    <h2>Health Check Endpoint</h2>
    <CodeBlock language="dart" title="Health Check Controller">
// lib/src/http/controllers/health_controller.dart
import 'package:khadem/core/database/database_manager.dart';
import 'package:khadem/core/cache/cache_manager.dart';
import 'package:khadem/core/queue/queue_manager.dart';

class HealthController {
  final DatabaseManager _databaseManager;
  final CacheManager _cacheManager;
  final QueueManager _queueManager;

  HealthController(
    this._databaseManager,
    this._cacheManager,
    this._queueManager,
  );

  Future&lt;Map&lt;String, dynamic&gt;&gt; check() async {
    final results = &lt;String, dynamic&gt;&#123;
      'status': 'healthy',
      'timestamp': DateTime.now().toIso8601String(),
      'services': &lt;String, dynamic&gt;&#123;&#125;,
    };

    // Database health check
    try {
      await _databaseManager.connection.query('SELECT 1');
      results['services']['database'] = {'status': 'healthy'};
    } catch (e) {
      results['services']['database'] = {
        'status': 'unhealthy',
        'error': e.toString()
      };
      results['status'] = 'unhealthy';
    }

    // Cache health check
    try {
      await _cacheManager.store('health_check', 'ok', Duration(seconds: 10));
      final value = await _cacheManager.get('health_check');
      if (value &#61;&#61; 'ok') {
        results['services']['cache'] = {'status': 'healthy'};
      } else {
        throw Exception('Cache read/write failed');
      }
    } catch (e) {
      results['services']['cache'] = {
        'status': 'unhealthy',
        'error': e.toString()
      };
      results['status'] = 'unhealthy';
    }

    // Queue health check
    try {
      final queueStats = await _queueManager.getStats();
      results['services']['queue'] = {
        'status': 'healthy',
        'stats': queueStats
      };
    } catch (e) {
      results['services']['queue'] = {
        'status': 'unhealthy',
        'error': e.toString()
      };
      results['status'] = 'unhealthy';
    }

    // System metrics
    results['system'] = {
      'memory_usage': ProcessInfo.currentRss,
      'cpu_usage': await _getCpuUsage(),
      'uptime': ProcessInfo.currentRss, // Platform dependent
    };

    return results;
  }

  Future&lt;double&gt; _getCpuUsage() async {
    // Implementation depends on platform
    // This is a simplified example
    return 0.0;
  }
}
    </CodeBlock>

    <h2>Logging Configuration</h2>
    <CodeBlock language="dart" title="Advanced Logging Setup">
// lib/src/core/logging/logger.dart
import 'package:logging/logging.dart';
import 'package:khadem/core/config/config.dart';

class AppLogger &#123;
  static final Logger _logger = Logger('Khadem');
  static late File _logFile;
  static late IOSink _logSink;

  static Future&lt;void&gt; initialize() async &#123;
    // Set up logging level
    Logger.root.level = Config.get('LOG_LEVEL', Level.INFO);

    // Create logs directory
    final logDir = Directory('storage/logs');
    if (!await logDir.exists()) {
      await logDir.create(recursive: true);
    }

    // Set up file logging
    final date = DateTime.now().toIso8601String().split('T')[0];
    _logFile = File('storage/logs/khadem_$date.log');
    _logSink = _logFile.openWrite(mode: FileMode.append);

    // Set up console logging
    Logger.root.onRecord.listen((record) {
      final message = _formatLogRecord(record);

      // Console output
      print(message);

      // File output
      _logSink.writeln(message);
    });

    // Handle log rotation
    Timer.periodic(Duration(hours: 1), (_) =&gt; _rotateLogs());
  }

  static String _formatLogRecord(LogRecord record) {
    final timestamp = DateTime.now().toIso8601String();
    final level = record.level.name.padRight(7);
    final loggerName = record.loggerName;
    final message = record.message;
    final error = record.error != null ? '\nError: &#36;{record.error}' : '';
    final stackTrace = record.stackTrace != null
        ? '\nStackTrace: &#36;{record.stackTrace}'
        : '';

    return '[$timestamp] $level $loggerName: $message$error$stackTrace';
  }

  static Future&lt;void&gt; _rotateLogs() async &#123;
    await _logSink.flush();
    await _logSink.close();

    final date = DateTime.now().toIso8601String().split('T')[0];
    _logFile = File('storage/logs/khadem_$date.log');
    _logSink = _logFile.openWrite(mode: FileMode.append);
  }

  static Logger getLogger(String name) &#123;
    return Logger(name);
  &#125;

  static Future&lt;void&gt; dispose() async &#123;
    await _logSink.flush();
    await _logSink.close();
  }
}

// Usage in application
class UserController &#123;
  final Logger _logger = AppLogger.getLogger('UserController');

  Future&lt;void&gt; createUser(Map&lt;String, dynamic&gt; data) async &#123;
    _logger.info('Creating new user: &#36;{data['email']}');

    try {
      // User creation logic
      _logger.info('User created successfully');
    } catch (e, stackTrace) {
      _logger.severe('Failed to create user', e, stackTrace);
      rethrow;
    }
  }
}
    </CodeBlock>

    <h2>Prometheus Integration</h2>
    <CodeBlock language="dart" title="Prometheus Metrics Exporter">
// lib/src/core/monitoring/prometheus_exporter.dart
import 'package:shelf/shelf.dart';
import 'package:prometheus_client/prometheus_client.dart';
import 'package:khadem/core/database/database_manager.dart';
import 'package:khadem/core/cache/cache_manager.dart';

class PrometheusExporter {
  final CollectorRegistry _registry;
  final DatabaseManager _databaseManager;
  final CacheManager _cacheManager;

  // Application metrics
  late final Counter _httpRequestsTotal;
  late final Histogram _httpRequestDuration;
  late final Gauge _activeConnections;
  late final Gauge _memoryUsage;
  late final Gauge _cpuUsage;

  // Database metrics
  late final Gauge _dbConnectionsActive;
  late final Counter _dbQueriesTotal;
  late final Histogram _dbQueryDuration;

  // Cache metrics
  late final Counter _cacheHits;
  late final Counter _cacheMisses;
  late final Gauge _cacheSize;

  PrometheusExporter(
    this._databaseManager,
    this._cacheManager,
  ) : _registry = CollectorRegistry() &#123;
    _initializeMetrics();
  &#125;

  void _initializeMetrics() &#123;
    // HTTP metrics
    _httpRequestsTotal = Counter(
      name: 'khadem_http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status'],
    )..register(_registry);

    _httpRequestDuration = Histogram(
      name: 'khadem_http_request_duration_seconds',
      help: 'HTTP request duration in seconds',
      labelNames: ['method', 'route'],
    )..register(_registry);

    _activeConnections = Gauge(
      name: 'khadem_active_connections',
      help: 'Number of active connections',
    )..register(_registry);

    // System metrics
    _memoryUsage = Gauge(
      name: 'khadem_memory_usage_bytes',
      help: 'Current memory usage in bytes',
    )..register(_registry);

    _cpuUsage = Gauge(
      name: 'khadem_cpu_usage_percent',
      help: 'Current CPU usage percentage',
    )..register(_registry);

    // Database metrics
    _dbConnectionsActive = Gauge(
      name: 'khadem_db_connections_active',
      help: 'Number of active database connections',
    )..register(_registry);

    _dbQueriesTotal = Counter(
      name: 'khadem_db_queries_total',
      help: 'Total number of database queries',
      labelNames: ['operation'],
    )..register(_registry);

    _dbQueryDuration = Histogram(
      name: 'khadem_db_query_duration_seconds',
      help: 'Database query duration in seconds',
      labelNames: ['operation'],
    )..register(_registry);

    // Cache metrics
    _cacheHits = Counter(
      name: 'khadem_cache_hits_total',
      help: 'Total number of cache hits',
    )..register(_registry);

    _cacheMisses = Counter(
      name: 'khadem_cache_misses_total',
      help: 'Total number of cache misses',
    )..register(_registry);

    _cacheSize = Gauge(
      name: 'khadem_cache_size',
      help: 'Current cache size',
    )..register(_registry);
  }

  void recordHttpRequest(String method, String route, int status, Duration duration) {
    _httpRequestsTotal.labels([method, route, status.toString()]).inc();
    _httpRequestDuration.labels([method, route]).observe(duration.inMilliseconds / 1000.0);
  }

  void updateActiveConnections(int count) {
    _activeConnections.value = count;
  }

  void updateSystemMetrics(int memoryUsage, double cpuUsage) {
    _memoryUsage.value = memoryUsage;
    _cpuUsage.value = cpuUsage;
  }

  void recordDatabaseQuery(String operation, Duration duration) {
    _dbQueriesTotal.labels([operation]).inc();
    _dbQueryDuration.labels([operation]).observe(duration.inMilliseconds / 1000.0);
  }

  void updateDatabaseConnections(int activeConnections) {
    _dbConnectionsActive.value = activeConnections;
  }

  void recordCacheHit() {
    _cacheHits.inc();
  }

  void recordCacheMiss() {
    _cacheMisses.inc();
  }

  void updateCacheSize(int size) {
    _cacheSize.value = size;
  }

  Handler get metricsHandler {
    return (Request request) async {
      // Update system metrics
      _updateSystemMetrics();

      // Update database metrics
      await _updateDatabaseMetrics();

      // Update cache metrics
      await _updateCacheMetrics();

      final metrics = _registry.collect()
          .map((metric) =&gt; metric.serialize())
          .join('\n');

      return Response.ok(
        metrics,
        headers: {'Content-Type': 'text/plain; charset=utf-8'},
      );
    };
  }

  void _updateSystemMetrics() {
    // Update memory and CPU usage
    // Implementation depends on platform
  }

  Future&lt;void&gt; _updateDatabaseMetrics() async &#123;
    try {
      final stats = await _databaseManager.getStats();
      _dbConnectionsActive.value = stats['active_connections'] ?? 0;
    } catch (e) {
      // Log error
    }
  }

  Future&lt;void&gt; _updateCacheMetrics() async &#123;
    try {
      final stats = await _cacheManager.getStats();
      _cacheSize.value = stats['size'] ?? 0;
    } catch (e) {
      // Log error
    }
  }
}
    </CodeBlock>

    <h2>Grafana Dashboards</h2>
    <CodeBlock language="json" title="Grafana Dashboard JSON">
{
  "dashboard": {
    "title": "Khadem Application Metrics",
    "tags": ["khadem", "dart"],
    "timezone": "browser",
    "panels": [
      {
        "title": "HTTP Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(khadem_http_requests_total[5m])",
            "legendFormat": "&#123;&#123;method&#125;&#125; &#123;&#123;route&#125;&#125;"
          }
        ]
      },
      {
        "title": "HTTP Request Duration",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(khadem_http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          }
        ]
      },
      {
        "title": "Active Connections",
        "type": "graph",
        "targets": [
          {
            "expr": "khadem_active_connections",
            "legendFormat": "Active connections"
          }
        ]
      },
      {
        "title": "Memory Usage",
        "type": "graph",
        "targets": [
          {
            "expr": "khadem_memory_usage_bytes / 1024 / 1024",
            "legendFormat": "Memory usage (MB)"
          }
        ]
      },
      {
        "title": "Database Connections",
        "type": "graph",
        "targets": [
          {
            "expr": "khadem_db_connections_active",
            "legendFormat": "Active DB connections"
          }
        ]
      },
      {
        "title": "Cache Hit Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(khadem_cache_hits_total[5m]) / (rate(khadem_cache_hits_total[5m]) + rate(khadem_cache_misses_total[5m])) * 100",
            "legendFormat": "Cache hit rate %"
          }
        ]
      }
    ]
  }
}
    </CodeBlock>

    <h2>Alerting Rules</h2>
    <CodeBlock language="yaml" title="Prometheus Alerting Rules">
groups:
  - name: khadem_alerts
    rules:
      - alert: HighErrorRate
        expr: rate(khadem_http_requests_total{status=~"5.."}[5m]) / rate(khadem_http_requests_total[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is &#123;&#123; $value | printf &quot;%.2f&quot; &#125;&#125;%"

      - alert: HighMemoryUsage
        expr: khadem_memory_usage_bytes / khadem_memory_usage_bytes{job="khadem"} > 0.9
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage"
          description: "Memory usage is above 90%"

      - alert: DatabaseConnectionPoolExhausted
        expr: khadem_db_connections_active >= 50
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Database connection pool exhausted"
          description: "Active database connections: &#123;&#123; $value &#125;&#125;"

      - alert: ApplicationDown
        expr: up{job="khadem"} &#61;&#61; 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Khadem application is down"
          description: "Khadem application has been down for more than 1 minute"
    </CodeBlock>

    <h2>Log Aggregation</h2>
    <CodeBlock language="yaml" title="ELK Stack Configuration">
# Filebeat configuration for Khadem logs
filebeat.inputs:
  - type: log
    enabled: true
    paths:
      - /var/www/khadem/storage/logs/*.log
    fields:
      app: khadem
      environment: production

# Logstash pipeline configuration
input {
  beats {
    port => 5044
  }
}

filter {
  if [fields][app] &#61;&#61; "khadem" {
    grok {
      match => { "message" => "\[%{TIMESTAMP_ISO8601:timestamp}\] %{LOGLEVEL:level} %{DATA:logger}: %{GREEDYDATA:message}" }
    }

    date {
      match => [ "timestamp", "ISO8601" ]
      target => "@timestamp"
    }

    mutate {
      remove_field => [ "timestamp" ]
    }
  }
}

output {
  elasticsearch {
    hosts => ["localhost:9200"]
    index => "khadem-%{+YYYY.MM.dd}"
  }
}
    </CodeBlock>

    <h2>Distributed Tracing</h2>
    <CodeBlock language="dart" title="OpenTelemetry Integration">
// lib/src/core/tracing/tracer.dart
import 'package:opentelemetry/api.dart';
import 'package:opentelemetry/sdk.dart';
import 'package:opentelemetry/exporter_jaeger.dart';

class AppTracer &#123;
  static late Tracer _tracer;
  static late TracerProvider _tracerProvider;

  static Future&lt;void&gt; initialize() async &#123;
    // Set up Jaeger exporter
    final exporter = JaegerExporter(
      endpoint: 'http://localhost:14268/api/traces',
      serviceName: 'khadem-app',
    );

    // Create tracer provider
    _tracerProvider = TracerProvider(
      resource: Resource.create({'service.name': 'khadem-app'}),
      processors: [
        BatchSpanProcessor(exporter),
      ],
    );

    // Set global tracer provider
    globalTracerProvider = _tracerProvider;
    _tracer = globalTracerProvider.getTracer('khadem-tracer');
  }

  static Tracer get tracer =&gt; _tracer;

  static Future&lt;void&gt; dispose() async &#123;
    await _tracerProvider.shutdown();
  }
}

// Usage in HTTP middleware
class TracingMiddleware &#123;
  Middleware get middleware =&gt; (Handler innerHandler) &#123;
        return (Request request) async {
          final span = AppTracer.tracer.startSpan(
            'http_request',
            kind: SpanKind.server,
          );

          span.setAttributes({
            'http.method': request.method,
            'http.url': request.url.toString(),
            'http.scheme': request.url.scheme,
            'http.host': request.url.host,
          });

          try {
            final response = await innerHandler(request);

            span.setAttributes({
              'http.status_code': response.statusCode,
            });

            span.setStatus(SpanStatus.ok);
            return response;
          } catch (e) {
            span.recordException(e);
            span.setStatus(SpanStatus.error, e.toString());
            rethrow;
          } finally {
            span.end();
          }
        };
      };
}
    </CodeBlock>

    <h2>Performance Monitoring</h2>
    <CodeBlock language="dart" title="Performance Profiler">
// lib/src/core/monitoring/performance_monitor.dart
import 'dart:async';
import 'package:vm_service/vm_service.dart';
import 'package:vm_service/vm_service_io.dart';

class PerformanceMonitor {
  static const Duration _sampleInterval = Duration(seconds: 30);
  Timer? _timer;
  VmService? _vmService;

  final Map&lt;String, dynamic&gt; _metrics = &#123;&#125;;

  Future&lt;void&gt; start() async &#123;
    // Connect to VM service
    final serverUri = (await Service.getInfo()).serverUri;
    if (serverUri != null) {
      _vmService = await vmServiceConnectUri(serverUri.toString());
    }

    // Start periodic sampling
    _timer = Timer.periodic(_sampleInterval, _collectMetrics);
  }

  Future&lt;void&gt; _collectMetrics(Timer timer) async &#123;
    if (_vmService == null) return;

    try {
      // Get VM metrics
      final vm = await _vmService!.getVM();
      _metrics['heap_usage'] = vm.heapUsage;
      _metrics['cpu_samples'] = vm.cpuSamples;

      // Get isolate metrics
      final isolates = await _vmService!.getVMIsolates(vm.isolates!.first.id!);
      for (final isolate in isolates.isolates!) {
        final isolateMetrics = await _vmService!.getIsolate(isolate.id!);
        _metrics['isolate_&#36;{isolate.id}_heap'] = isolateMetrics.heapUsage;
      }

      // Log or export metrics
      _exportMetrics();
    } catch (e) {
      // Log error
    }
  }

  void _exportMetrics() {
    // Export to monitoring system
    // This could send to Prometheus, DataDog, etc.
  }

  Future&lt;void&gt; stop() async &#123;
    _timer?.cancel();
    await _vmService?.dispose();
  }

  Map&lt;String, dynamic&gt; getMetrics() =&gt; Map.from(_metrics);
}
    </CodeBlock>

    <h2>Monitoring Dashboard</h2>
    <CodeBlock language="yaml" title="Docker Compose Monitoring Stack">
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=200h'
      - '--web.enable-lifecycle'

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    depends_on:
      - prometheus

  jaeger:
    image: jaegertracing/all-in-one:latest
    ports:
      - "16686:16686"
      - "14268:14268"
    environment:
      - COLLECTOR_OTLP_ENABLED=true

  elasticsearch:
    image: elasticsearch:8.7.0
    ports:
      - "9200:9200"
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  logstash:
    image: logstash:8.7.0
    ports:
      - "5044:5044"
    volumes:
      - ./monitoring/logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch

  filebeat:
    image: elastic/filebeat:8.7.0
    volumes:
      - ./monitoring/filebeat.yml:/usr/share/filebeat/filebeat.yml
      - /var/www/khadem/storage/logs:/var/log/khadem
    depends_on:
      - logstash

volumes:
  prometheus_data:
  grafana_data:
  elasticsearch_data:
    </CodeBlock>

    <h2>Best Practices</h2>
    <ul>
      <li>Monitor key metrics: response time, error rate, throughput</li>
      <li>Set up alerts for critical issues</li>
      <li>Use structured logging with consistent format</li>
      <li>Implement distributed tracing for complex requests</li>
      <li>Monitor resource usage (CPU, memory, disk)</li>
      <li>Set up log aggregation and analysis</li>
      <li>Implement health checks for all services</li>
      <li>Use monitoring in development and staging environments</li>
      <li>Regular review and tuning of monitoring configuration</li>
      <li>Implement proper log rotation and retention policies</li>
    </ul>
  </div>
</template>

<script setup>
import CodeBlock from '~/components/CodeBlock.vue'
</script>
