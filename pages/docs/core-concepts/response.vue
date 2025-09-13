<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Response System</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Modular HTTP response handling with JSON, files, streaming, and comprehensive header management.
        </p>
      </header>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Basic Response Methods</h2>

        <CodeBlock
          :code="basicResponseCode"
          language="dart"
          title="Core Response Methods"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Response Types</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">sendJson()</code> - JSON responses</div>
              <div><code class="text-green-600">send()</code> - Plain text</div>
              <div><code class="text-orange-600">html()</code> - HTML content</div>
              <div><code class="text-purple-600">file()</code> - File downloads</div>
              <div><code class="text-red-600">stream()</code> - Data streaming</div>
              <div><code class="text-gray-600">bytes()</code> - Binary data</div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Status Code Methods</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-green-600">ok()</code> - 200 OK</div>
              <div><code class="text-blue-600">created()</code> - 201 Created</div>
              <div><code class="text-orange-600">noContent()</code> - 204 No Content</div>
              <div><code class="text-red-600">badRequest()</code> - 400 Bad Request</div>
              <div><code class="text-red-600">unauthorized()</code> - 401 Unauthorized</div>
              <div><code class="text-red-600">notFound()</code> - 404 Not Found</div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">JSON Responses</h2>

        <CodeBlock
          :code="jsonResponseCode"
          language="dart"
          title="JSON Response Patterns"
        />

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">JSON Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
            <li>Automatic Content-Type header</li>
            <li>Pretty printing with <code>jsonPretty()</code></li>
            <li>Proper JSON encoding</li>
            <li>Support for nested data structures</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">File & Binary Responses</h2>

        <CodeBlock
          :code="fileResponseCode"
          language="dart"
          title="File and Binary Response Handling"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">File Response Features</h3>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Automatic MIME type detection</li>
              <li>Content-Length header</li>
              <li>Download with custom filename</li>
              <li>Efficient streaming</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Binary Data</h3>
            <CodeBlock :code="binaryResponseCode" language="dart" />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Streaming Responses</h2>

        <CodeBlock
          :code="streamingResponseCode"
          language="dart"
          title="Data Streaming Examples"
        />

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Streaming Benefits</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Memory efficient for large datasets</li>
            <li>Real-time data transmission</li>
            <li>Server-sent events support</li>
            <li>Custom data transformation</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Headers & CORS</h2>

        <CodeBlock
          :code="headersCode"
          language="dart"
          title="Header Management"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">CORS Headers</h3>
            <CodeBlock :code="corsCode" language="dart" />
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Security Headers</h3>
            <CodeBlock :code="securityCode" language="dart" />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Caching & Performance</h2>

        <CodeBlock
          :code="cachingCode"
          language="dart"
          title="Cache Control Headers"
        />

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">Cache Strategies</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong class="text-yellow-700 dark:text-yellow-300">Static Assets</strong>
              <p class="text-yellow-600 dark:text-yellow-400">Long-term caching</p>
            </div>
            <div>
              <strong class="text-yellow-700 dark:text-yellow-300">API Data</strong>
              <p class="text-yellow-600 dark:text-yellow-400">Short-term caching</p>
            </div>
            <div>
              <strong class="text-yellow-700 dark:text-yellow-300">Dynamic Content</strong>
              <p class="text-yellow-600 dark:text-yellow-400">No caching</p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Session & Flash Messages</h2>

        <CodeBlock
          :code="sessionCode"
          language="dart"
          title="Session Management"
        />

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">Session Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
            <li>Store data across requests</li>
            <li>Flash messages for one-time notifications</li>
            <li>Old input preservation for form validation</li>
            <li>Automatic cleanup of flash data</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

        <CodeBlock
          :code="errorHandlingCode"
          language="dart"
          title="Error Response Patterns"
        />

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">Error Response Best Practices</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Use appropriate HTTP status codes</li>
            <li>Provide consistent error format</li>
            <li>Include error codes for API consumers</li>
            <li>Don't expose sensitive information</li>
            <li>Log errors for debugging</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Advanced Patterns</h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Response Builder</h3>
            <CodeBlock :code="responseBuilderCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Consistent API responses with method chaining
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Server-Sent Events</h3>
            <CodeBlock :code="sseCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Real-time communication with clients
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Complete API Example</h2>

        <CodeBlock
          :code="completeApiCode"
          language="dart"
          title="Full REST API Implementation"
        />
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Recommendations</h3>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use appropriate HTTP status codes for different scenarios</li>
              <li>Set proper Content-Type headers automatically</li>
              <li>Implement consistent error response formats</li>
              <li>Use streaming for large responses to save memory</li>
              <li>Set appropriate cache headers for performance</li>
              <li>Validate response data before sending</li>
              <li>Use flash messages for user feedback</li>
            </ul>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid</h3>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Don't send multiple responses in one handler</li>
              <li>Don't expose sensitive error details in production</li>
              <li>Don't use generic error messages</li>
              <li>Don't forget to set proper status codes</li>
              <li>Don't send HTML when JSON is expected</li>
              <li>Don't block the event loop with synchronous operations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  definePageMeta({ layout: 'docs' })
  useHead({
    title: 'Khadem Response System',
    meta: [
      { name: 'description', content: 'Complete documentation for Khadem response system' }
    ]
  })

  const basicResponseCode = `// Basic response methods
server.get('/api/status', (req, res) async {
  res.sendJson({'status': 'ok', 'timestamp': DateTime.now()});
});

server.get('/text', (req, res) async {
  res.send('Hello World');
});

server.get('/html', (req, res) async {
  res.html('<h1>Welcome</h1><p>This is HTML content</p>');
});

server.get('/empty', (req, res) async {
  res.noContent(); // 204 No Content
});

// Status code convenience methods
server.get('/success', (req, res) async {
  res.ok().sendJson({'message': 'Success'});
});

server.get('/created', (req, res) async {
  res.created().sendJson({'id': 123, 'message': 'Resource created'});
});

server.get('/error', (req, res) async {
  res.badRequest().sendJson({'error': 'Invalid request'});
});`

  const jsonResponseCode = `// JSON responses with different formats
server.get('/api/user/:id', (req, res) async {
  final user = await User.find(req.param('id'));

  if (user == null) {
    return res.notFound().sendJson({
      'error': 'User not found',
      'code': 'USER_NOT_FOUND'
    });
  }

  res.sendJson({
    'id': user.id,
    'name': user.name,
    'email': user.email,
    'created_at': user.createdAt.toIso8601String()
  });
});

// Pretty-printed JSON for debugging
server.get('/api/debug', (req, res) async {
  final debugData = {
    'config': Khadem.config.all(),
    'routes': server.routes.length,
    'timestamp': DateTime.now()
  };

  res.jsonPretty(debugData, indent: 2);
});

// Paginated API response
server.get('/api/users', (req, res) async {
  final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
  final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;

  final users = await User.paginate(page, limit);
  final total = await User.count();

  res.sendJson({
    'data': users,
    'pagination': {
      'page': page,
      'limit': limit,
      'total': total,
      'pages': (total / limit).ceil()
    }
  });
});`

  const fileResponseCode = `// File download with automatic MIME type detection
server.get('/download/avatar/:filename', (req, res) async {
  final filename = req.param('filename');
  final file = File('storage/avatars/\$filename');

  if (!await file.exists()) {
    return res.notFound().sendJson({'error': 'File not found'});
  }

  await res.file(file);
});

// File download with custom headers
server.get('/export/report.pdf', (req, res) async {
  final file = File('storage/reports/monthly.pdf');

  res.header('Content-Disposition', 'attachment; filename="monthly-report.pdf"');
  res.header('Content-Description', 'Monthly Report');

  await res.file(file);
});

// Image serving with caching
server.get('/images/:filename', (req, res) async {
  final filename = req.param('filename');
  final file = File('storage/images/\$filename');

  if (!await file.exists()) {
    return res.notFound().sendJson({'error': 'Image not found'});
  }

  // Cache images for 1 hour
  res.cache('public, max-age=3600');
  await res.file(file);
});`

  const binaryResponseCode = `// Binary data response
server.get('/api/binary', (req, res) async {
  final data = await generateBinaryData();
  res.bytes(data, contentType: 'application/octet-stream');
});

// Custom content type
server.get('/api/pdf', (req, res) async {
  final pdfBytes = await generatePdf();
  res.bytes(pdfBytes, contentType: 'application/pdf');
});`

  const streamingResponseCode = `// Database streaming
server.get('/api/export/users', (req, res) async {
  res.header('Content-Type', 'application/json');
  res.header('Transfer-Encoding', 'chunked');

  final userStream = Database.query('SELECT * FROM users')
    .asStream()
    .map((user) => jsonEncode(user) + '\\n');

  await res.stream(userStream);
});

// Real-time progress updates
server.get('/api/process/:taskId', (req, res) async {
  final taskId = req.param('taskId');

  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');

  final progressStream = Stream.periodic(
    Duration(seconds: 1),
    (count) => 'data: {"taskId": "\$taskId", "progress": \${count * 10}}\\n\\n'
  ).take(10);

  await res.stream(progressStream);
});

// Large file streaming
server.get('/download/large-file.mp4', (req, res) async {
  final file = File('storage/videos/large.mp4');

  res.header('Content-Type', 'video/mp4');
  res.header('Accept-Ranges', 'bytes');

  await res.stream(file.openRead());
});

// Custom data transformation
server.get('/api/logs/stream', (req, res) async {
  final logFile = File('storage/logs/app.log');

  res.header('Content-Type', 'text/plain');

  final logStream = logFile.openRead()
    .transform(utf8.decoder)
    .transform(LineSplitter())
    .map((line) => '[LOG] \$line\\n');

  await res.stream(logStream);
});`

  const headersCode = `// Custom headers
server.get('/api/data', (req, res) async {
  // Set custom headers
  res.header('X-API-Version', '1.0.0');
  res.header('X-Request-ID', generateRequestId());
  res.header('X-Response-Time', DateTime.now().millisecondsSinceEpoch.toString());

  res.sendJson({'data': 'response with custom headers'});
});

// Content-Type and Content-Length
server.get('/api/file-info', (req, res) async {
  final file = File('storage/document.pdf');

  res.header('Content-Type', 'application/pdf');
  res.header('Content-Length', (await file.length()).toString());
  res.header('Content-Disposition', 'inline; filename="document.pdf"');

  await res.file(file);
});`

  const corsCode = `// CORS configuration
server.get('/api/public', (req, res) async {
  res.cors(
    allowOrigin: '*',
    allowMethods: 'GET, POST',
    allowHeaders: 'Content-Type, Authorization'
  );

  res.sendJson({'message': 'Public API'});
});

// Restricted CORS
server.get('/api/private', (req, res) async {
  res.cors(
    allowOrigin: 'https://myapp.com',
    allowMethods: 'GET, POST, PUT, DELETE',
    allowHeaders: 'Content-Type, Authorization, X-API-Key',
    allowCredentials: true,
    maxAge: 86400 // 24 hours
  );

  res.sendJson({'message': 'Private API'});
});`

  const securityCode = `// Security headers
server.get('/api/secure', (req, res) async {
  res.security(
    enableHsts: true,
    enableCsp: true,
    enableXFrameOptions: true,
    enableXContentTypeOptions: true,
    cspPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'"
  );

  res.sendJson({'message': 'Secure response'});
});

// Individual security headers
server.get('/api/headers', (req, res) async {
  res.header('X-Frame-Options', 'DENY');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.header('Content-Security-Policy', "default-src 'self'");

  res.sendJson({'message': 'Response with security headers'});
});`

  const cachingCode = `// Cache control examples
server.get('/api/static-data', (req, res) async {
  // Cache for 5 minutes
  res.cache('public, max-age=300');

  res.sendJson({'data': 'This can be cached'});
});

server.get('/api/dynamic-data', (req, res) async {
  // No caching
  res.noCache();

  res.sendJson({'data': 'This should not be cached'});
});

server.get('/api/user-data', (req, res) async {
  // Private cache (user-specific)
  res.cache('private, max-age=60');

  res.sendJson({'data': 'User-specific data'});
});

// Static file caching
server.get('/assets/style.css', (req, res) async {
  // Cache for 1 year
  res.cache('public, max-age=31536000, immutable');

  await res.file(File('public/assets/style.css'));
});

// Conditional caching
server.get('/api/posts/:id', (req, res) async {
  final post = await Post.find(req.param('id'));
  final lastModified = post.updatedAt;

  res.header('Last-Modified', lastModified.toUtc().toString());
  res.cache('public, max-age=3600'); // 1 hour

  res.sendJson({'post': post});
});`

  const sessionCode = `// Session management
server.post('/login', (req, res) async {
  final credentials = await req.body;
  final user = await authenticateUser(credentials);

  if (user != null) {
    // Store user data in session
    res.sessionPut('user_id', user.id);
    res.sessionPut('user_name', user.name);
    res.sessionPut('user_role', user.role);

    // Flash success message
    res.flashSession('success', 'Login successful!');

    res.sendJson({'message': 'Login successful'});
  } else {
    res.unauthorized().sendJson({'error': 'Invalid credentials'});
  }
});

// Flash input preservation
server.post('/register', (req, res) async {
  final data = await req.body;

  try {
    final user = await User.create(data);

    res.flashSession('success', 'Account created successfully!');
    res.sendJson({'message': 'Account created'});
  } catch (e) {
    // Preserve form input for repopulation
    res.flashInput(data);
    res.flashSession('error', 'Failed to create account');

    res.badRequest().sendJson({'error': 'Validation failed'});
  }
});

// Access flash messages
server.get('/messages', (req, res) async {
  final successMessage = req.session.pull('success');
  final errorMessage = req.session.pull('error');

  res.sendJson({
    'messages': {
      if (successMessage != null) 'success': successMessage,
      if (errorMessage != null) 'error': errorMessage,
    }
  });
});`

  const errorHandlingCode = `// Error response patterns
server.get('/api/user/:id', (req, res) async {
  final userId = req.param('id');

  if (userId == null || int.tryParse(userId) == null) {
    return res.badRequest().sendJson({
      'error': {
        'code': 'INVALID_USER_ID',
        'message': 'User ID must be a valid integer',
        'field': 'id',
        'received': userId
      }
    });
  }

  final user = await User.find(int.parse(userId));

  if (user == null) {
    return res.notFound().sendJson({
      'error': {
        'code': 'USER_NOT_FOUND',
        'message': 'User with ID \$userId not found',
        'user_id': userId
      }
    });
  }

  res.sendJson({'user': user});
});

// Validation errors
server.post('/api/posts', (req, res) async {
  final data = await req.body;

  final errors = <String, String>{};

  if (data['title'] == null || data['title'].isEmpty) {
    errors['title'] = 'Title is required';
  }

  if (data['content'] == null || data['content'].isEmpty) {
    errors['content'] = 'Content is required';
  }

  if (errors.isNotEmpty) {
    return res.badRequest().sendJson({
      'error': {
        'code': 'VALIDATION_FAILED',
        'message': 'Please fix the following errors',
        'fields': errors
      }
    });
  }

  final post = await Post.create(data);
  res.created().sendJson({'post': post});
});

// Global error handler
server.get('/test-error', (req, res) async {
  try {
    // Simulate an error
    throw Exception('Database connection failed');
  } catch (e) {
    print('Error: \$e');

    res.internalServerError().sendJson({
      'error': {
        'code': 'INTERNAL_ERROR',
        'message': 'An unexpected error occurred',
        'trace_id': generateTraceId(),
        'details': Khadem.env.get('APP_DEBUG') == 'true' ? e.toString() : null
      }
    });
  }
});`

  const responseBuilderCode = `// Response builder pattern
class ApiResponse {
  final Response _response;

  ApiResponse(this._response);

  ApiResponse success(dynamic data, {String? message}) {
    _response.sendJson({
      'success': true,
      'data': data,
      if (message != null) 'message': message,
      'timestamp': DateTime.now().toIso8601String()
    });
    return this;
  }

  ApiResponse error(String message, {
    String? code,
    int statusCode = 400,
    Map<String, dynamic>? details
  }) {
    _response.statusCode(statusCode).sendJson({
      'success': false,
      'error': {
        'message': message,
        if (code != null) 'code': code,
        if (details != null) 'details': details,
      },
      'timestamp': DateTime.now().toIso8601String()
    });
    return this;
  }

  ApiResponse created(dynamic data) {
    _response.statusCode(201).sendJson({
      'success': true,
      'data': data,
      'message': 'Resource created successfully'
    });
    return this;
  }
}

// Usage in controllers
class UserController {
  static Future index(Request req, Response res) async {
    final users = await User.all();
    ApiResponse(res).success(users);
  }

  static Future store(Request req, Response res) async {
    try {
      final data = await req.body;
      final user = await User.create(data);
      ApiResponse(res).created(user);
    } catch (e) {
      ApiResponse(res).error('Failed to create user', code: 'USER_CREATE_FAILED');
    }
  }
}`

  const sseCode = `// Server-Sent Events
server.get('/events/notifications', (req, res) async {
  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');
  res.header('Connection', 'keep-alive');

  // Send initial connection message
  res.send('data: {"type": "connected", "message": "Connection established"}\\n\\n');

  // Stream notifications
  final notificationStream = getNotificationStream(req.user.id)
    .map((notification) => 'data: \${jsonEncode(notification)}\\n\\n');

  await res.stream(notificationStream);
});

// Progress tracking
server.get('/upload/progress/:uploadId', (req, res) async {
  final uploadId = req.param('uploadId');

  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');

  final progressStream = Stream.periodic(
    Duration(milliseconds: 500),
    (count) => 'data: {"uploadId": "\$uploadId", "progress": \${count * 10}}\\n\\n'
  ).take(10);

  await res.stream(progressStream);
});`

  const completeApiCode = `// Complete API example with all response features
import 'package:khadem/khadem_dart.dart';

class ApiController {
  static Future getUsers(Request req, Response res) async {
    try {
      final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
      final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
      final search = req.query['search'];

      var query = User.query();
      if (search != null && search.isNotEmpty) {
        query = query.where('name', 'LIKE', '%\$search%');
      }

      final users = await query.paginate(page, limit);
      final total = await query.count();

      // Set pagination headers
      res.header('X-Total-Count', total.toString());
      res.header('X-Page', page.toString());
      res.header('X-Per-Page', limit.toString());

      // Cache for 5 minutes
      res.cache('private, max-age=300');

      res.sendJson({
        'data': users.map((user) => user.toJson()).toList(),
        'pagination': {
          'page': page,
          'per_page': limit,
          'total': total,
          'total_pages': (total / limit).ceil(),
          'has_next': page * limit < total,
          'has_prev': page > 1,
        }
      });

    } catch (e) {
      res.internalServerError().sendJson({
        'error': 'Failed to fetch users',
        'code': 'USERS_FETCH_FAILED'
      });
    }
  }

  static Future createUser(Request req, Response res) async {
    try {
      final data = await req.body;

      // Validate input
      final validation = await req.validator.validateData(data, {
        'name': 'required|min:2|max:100',
        'email': 'required|email|unique:users,email',
        'password': 'required|min:8',
      });

      if (!validation.isValid) {
        return res.badRequest().sendJson({
          'error': 'Validation failed',
          'code': 'VALIDATION_ERROR',
          'fields': validation.errors
        });
      }

      final user = await User.create({
        ...data,
        'password': hashPassword(data['password']),
        'email_verified_at': null,
      });

      // Flash success message
      res.flashSession('success', 'Account created successfully!');

      res.created().sendJson({
        'user': user.toJson(),
        'message': 'Account created successfully',
        'next_steps': [
          'Check your email for verification',
          'Complete your profile'
        ]
      });

    } catch (e) {
      // Flash input for form repopulation
      res.flashInput(await req.body);
      res.flashSession('error', 'Failed to create account');

      res.internalServerError().sendJson({
        'error': 'Failed to create user',
        'code': 'USER_CREATE_FAILED'
      });
    }
  }

  static Future uploadAvatar(Request req, Response res) async {
    try {
      final userId = req.param('id');
      final avatarFile = req.file('avatar');

      if (avatarFile == null) {
        return res.badRequest().sendJson({
          'error': 'No avatar file provided',
          'code': 'MISSING_AVATAR'
        });
      }

      // Validate file
      if (avatarFile.size > 5 * 1024 * 1024) {
        return res.badRequest().sendJson({
          'error': 'File too large',
          'code': 'FILE_TOO_LARGE'
        });
      }

      final allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.contains(avatarFile.mimeType)) {
        return res.badRequest().sendJson({
          'error': 'Invalid file type',
          'code': 'INVALID_FILE_TYPE'
        });
      }

      // Save file
      final filename = 'avatar_\${userId}_\${DateTime.now().millisecondsSinceEpoch}.\${avatarFile.extension}';
      await avatarFile.move('storage/avatars/\$filename');

      // Update user
      final user = await User.find(userId);
      await user.update({'avatar': filename});

      res.sendJson({
        'message': 'Avatar uploaded successfully',
        'avatar_url': '/storage/avatars/\$filename'
      });

    } catch (e) {
      res.internalServerError().sendJson({
        'error': 'Failed to upload avatar',
        'code': 'AVATAR_UPLOAD_FAILED'
      });
    }
  }

  static Future streamLogs(Request req, Response res) async {
    res.header('Content-Type', 'text/plain');
    res.header('Cache-Control', 'no-cache');

    final logFile = File('storage/logs/app.log');
    final logStream = logFile.openRead()
      .transform(utf8.decoder)
      .transform(LineSplitter())
      .map((line) => '[LOG] \$line\\n');

    await res.stream(logStream);
  }
}

// Register routes
void registerApiRoutes(Server server) {
  server.group(
    prefix: '/api/v1',
    middleware: [AuthMiddleware()],
    routes: (router) {
      router.get('/users', ApiController.getUsers);
      router.post('/users', ApiController.createUser);
      router.post('/users/:id/avatar', ApiController.uploadAvatar);
      router.get('/logs/stream', ApiController.streamLogs);
    }
  );
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
