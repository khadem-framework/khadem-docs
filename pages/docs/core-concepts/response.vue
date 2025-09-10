<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Response System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        The Khadem response system provides a comprehensive API for sending HTTP responses with support for JSON, HTML, files, streaming, and more.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Response Basics</h2>

      <CodeBlock
        :code="basicResponseCode"
        language="dart"
        title="Basic Response Methods"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Response Types</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><code>send()</code> - Plain text response</li>
            <li><code>sendJson()</code> - JSON response</li>
            <li><code>sendHtml()</code> - HTML response</li>
            <li><code>sendFile()</code> - File response</li>
            <li><code>stream()</code> - Stream response</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Status Code Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><code>statusCode()</code> - Set status code</li>
            <li><code>ok()</code> - 200 OK</li>
            <li><code>created()</code> - 201 Created</li>
            <li><code>noContent()</code> - 204 No Content</li>
            <li><code>badRequest()</code> - 400 Bad Request</li>
            <li><code>unauthorized()</code> - 401 Unauthorized</li>
            <li><code>forbidden()</code> - 403 Forbidden</li>
            <li><code>notFound()</code> - 404 Not Found</li>
            <li><code>internalServerError()</code> - 500 Internal Server Error</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">JSON Responses</h2>

      <CodeBlock
        :code="jsonResponseCode"
        language="dart"
        title="JSON Response Examples"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">JSON Response Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Automatic Content-Type header set to application/json</li>
          <li>Proper JSON encoding with Dart's jsonEncode</li>
          <li>Support for nested objects and arrays</li>
          <li>Pretty printing option available</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">File Responses</h2>

      <CodeBlock
        :code="fileResponseCode"
        language="dart"
        title="File Response Examples"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">File Response Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Automatic content-type detection</li>
            <li>Support for large files with streaming</li>
            <li>Custom headers support</li>
            <li>Download with custom filename</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Common Use Cases</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Image/file serving</li>
            <li>Document downloads</li>
            <li>Generated PDF reports</li>
            <li>CSV exports</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Streaming Responses</h2>

      <CodeBlock
        :code="streamingResponseCode"
        language="dart"
        title="Streaming Response Examples"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Streaming Benefits</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>Memory efficient for large data</li>
          <li>Real-time data transmission</li>
          <li>Server-sent events support</li>
          <li>Progress indicators possible</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Headers and Cookies</h2>

      <CodeBlock
        :code="headersCookiesCode"
        language="dart"
        title="Headers and Cookies Management"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Header Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>header(name, value)</code> - Set header</li>
            <li><code>headers.setHeader()</code> - Set header</li>
            <li><code>headers.setCorsHeaders()</code> - CORS headers</li>
            <li><code>headers.setSecurityHeaders()</code> - Security headers</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cookie Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>cookieHandler.set()</code> - Set cookie</li>
            <li><code>cookieHandler.get()</code> - Get cookie</li>
            <li><code>cookieHandler.delete()</code> - Delete cookie</li>
            <li><code>cookieHandler.clear()</code> - Clear all cookies</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Redirects</h2>

      <CodeBlock
        :code="redirectCode"
        language="dart"
        title="Redirect Response Examples"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Redirect Types</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><code>302 Found</code> - Temporary redirect (default)</li>
          <li><code>301 Moved Permanently</code> - Permanent redirect</li>
          <li><code>303 See Other</code> - Redirect after POST</li>
          <li><code>307 Temporary Redirect</code> - Preserve method</li>
          <li><code>308 Permanent Redirect</code> - Preserve method permanently</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">View Rendering</h2>

      <CodeBlock
        :code="viewRenderingCode"
        language="dart"
        title="View Rendering Examples"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">View Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Template engine integration</li>
          <li>Data passing to templates</li>
          <li>Layout support</li>
          <li>Partial views</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Session Management</h2>

      <CodeBlock
        :code="sessionCode"
        language="dart"
        title="Session Management in Responses"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Session Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>sessionPut()</code> - Store session value</li>
            <li><code>flashInput()</code> - Flash input data</li>
            <li><code>session()</code> - Access session manager</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Flash Messages</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Temporary session data</li>
            <li>Auto-cleaned after access</li>
            <li>Form validation errors</li>
            <li>Success messages</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Responses</h2>

      <CodeBlock
        :code="errorResponseCode"
        language="dart"
        title="Error Response Examples"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Error Handling Best Practices</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li>Use appropriate HTTP status codes</li>
          <li>Provide meaningful error messages</li>
          <li>Include error codes for API consumers</li>
          <li>Don't expose sensitive information</li>
          <li>Use consistent error response format</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Response Builder Pattern</h2>

      <CodeBlock
        :code="responseBuilderCode"
        language="dart"
        title="Response Builder Pattern"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Builder Pattern Benefits</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li>Method chaining for readable code</li>
          <li>Fluent API design</li>
          <li>Consistent response structure</li>
          <li>Easy to extend and customize</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Complete Example</h2>

      <CodeBlock
        :code="completeExampleCode"
        language="dart"
        title="Complete Response Handling Example"
      />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use appropriate HTTP status codes</li>
            <li>Set proper Content-Type headers</li>
            <li>Handle errors gracefully with meaningful messages</li>
            <li>Use JSON for API responses</li>
            <li>Implement proper CORS headers when needed</li>
            <li>Use streaming for large responses</li>
            <li>Validate response data before sending</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't send responses multiple times</li>
            <li>Don't expose sensitive information in error messages</li>
            <li>Don't use generic error messages</li>
            <li>Don't forget to set proper status codes</li>
            <li>Don't send HTML when JSON is expected</li>
            <li>Don't block the event loop with large synchronous operations</li>
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
server.get('/text', (req, res) async {
  res.send('Hello World');
});

server.get('/json', (req, res) async {
  res.sendJson({
    'message': 'Hello World',
    'status': 'success',
    'timestamp': DateTime.now().toIso8601String()
  });
});

server.get('/html', (req, res) async {
  res.sendHtml('<h1>Hello World</h1>');
});

server.get('/empty', (req, res) async {
  res.statusCode(204).empty();
});

// Status code convenience methods
server.get('/success', (req, res) async {
  res.ok().sendJson({'status': 'success'});
});

server.get('/created', (req, res) async {
  res.created().sendJson({'message': 'Resource created'});
});

server.get('/error', (req, res) async {
  res.badRequest().sendJson({'error': 'Invalid request'});
});`

const jsonResponseCode = `// JSON responses with different options
server.get('/api/user', (req, res) async {
  final user = await User.find(1);

  // Basic JSON response
  res.sendJson({
    'id': user.id,
    'name': user.name,
    'email': user.email,
    'created_at': user.createdAt.toIso8601String()
  });
});

server.get('/api/users', (req, res) async {
  final users = await User.all();

  // JSON response with metadata
  res.sendJson({
    'data': users.map((user) => user.toJson()).toList(),
    'meta': {
      'total': users.length,
      'page': 1,
      'per_page': 10
    },
    'links': {
      'self': '/api/users?page=1',
      'next': '/api/users?page=2'
    }
  });
});

server.get('/api/debug', (req, res) async {
  final data = {'debug': true, 'config': Khadem.config.all()};

  // Pretty-printed JSON for debugging
  res.sendJsonPretty(data, indent: 2);
});`

const fileResponseCode = `// File response examples
server.get('/download/image', (req, res) async {
  final file = File('storage/app/avatar.jpg');
  await res.file(file);
});

server.get('/download/document', (req, res) async {
  final file = File('storage/app/report.pdf');

  // Download with custom filename
  res.header('Content-Disposition', 'attachment; filename="monthly-report.pdf"');
  await res.file(file);
});

server.get('/image/:filename', (req, res) async {
  final filename = req.param('filename');
  final file = File('storage/app/images/\$filename');

  if (!await file.exists()) {
    return res.notFound().sendJson({'error': 'File not found'});
  }

  // Set appropriate content type
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
    res.header('Content-Type', 'image/jpeg');
  } else if (filename.endsWith('.png')) {
    res.header('Content-Type', 'image/png');
  }

  await res.file(file);
});

server.get('/export/csv', (req, res) async {
  // Generate CSV content
  final csvContent = await generateCsvReport();

  res.header('Content-Type', 'text/csv');
  res.header('Content-Disposition', 'attachment; filename="report.csv"');
  res.send(csvContent);
});`

const streamingResponseCode = `// Streaming response examples
server.get('/stream/data', (req, res) async {
  final dataStream = Database.query('SELECT * FROM large_table')
    .asStream()
    .map((row) => jsonEncode(row) + '\\n');

  await res.stream(
    dataStream,
    contentType: 'application/json',
    headers: {'Transfer-Encoding': 'chunked'}
  );
});

server.get('/events', (req, res) async {
  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');
  res.header('Connection', 'keep-alive');

  // Server-sent events
  final eventStream = Stream.periodic(
    Duration(seconds: 1),
    (count) => 'data: {"count": \$count, "timestamp": "\${DateTime.now().toIso8601String()}"}\\n\\n'
  );

  await res.stream(eventStream);
});

server.get('/download/large-file', (req, res) async {
  final file = File('storage/app/large-video.mp4');
  final stream = file.openRead();

  res.header('Content-Type', 'video/mp4');
  res.header('Content-Length', (await file.length()).toString());

  await res.stream(
    stream,
    contentType: 'video/mp4',
    headers: {'Accept-Ranges': 'bytes'}
  );
});

server.get('/progress/:taskId', (req, res) async {
  final taskId = req.param('taskId');

  // Simulate progress updates
  final progressStream = Stream.periodic(
    Duration(milliseconds: 500),
    (i) => 'data: {"taskId": "\$taskId", "progress": \${(i + 1) * 10}}\\n\\n'
  ).take(10);

  res.header('Content-Type', 'text/event-stream');
  await res.stream(progressStream);
});`

const headersCookiesCode = `// Headers management
server.get('/api/data', (req, res) async {
  // Set custom headers
  res.header('X-API-Version', '1.0');
  res.header('X-Request-ID', generateRequestId());

  // CORS headers
  res.cors(
    allowOrigin: req.header('origin') ?? '*',
    allowMethods: 'GET, POST, PUT, DELETE',
    allowHeaders: 'Content-Type, Authorization',
    allowCredentials: true
  );

  // Security headers
  res.security(
    enableHsts: true,
    enableCsp: true,
    enableXFrameOptions: true,
    enableXContentTypeOptions: true,
    cspPolicy: "default-src 'self'"
  );

  // Cache control
  res.cache('public, max-age=3600');

  res.sendJson({'data': 'response with headers'});
});

server.get('/no-cache', (req, res) async {
  res.noCache();
  res.sendJson({'data': 'never cached'});
});

// Cookies management
server.post('/login', (req, res) async {
  final credentials = await req.body;
  final user = await authenticateUser(credentials);

  if (user != null) {
    // Set authentication cookie
    res.cookieHandler.set(
      'auth_token',
      generateAuthToken(user),
      httpOnly: true,
      secure: true,
      maxAge: Duration(days: 7)
    );

    // Set remember token if requested
    if (credentials['remember'] == true) {
      res.cookieHandler.set(
        'remember_token',
        generateRememberToken(user),
        maxAge: Duration(days: 30)
      );
    }

    res.sendJson({'message': 'Login successful', 'user': user});
  } else {
    res.unauthorized().sendJson({'error': 'Invalid credentials'});
  }
});

server.post('/logout', (req, res) async {
  // Clear authentication cookies
  res.cookieHandler.delete('auth_token');
  res.cookieHandler.delete('remember_token');

  res.sendJson({'message': 'Logout successful'});
});`

const redirectCode = `// Redirect responses
server.get('/old-url', (req, res) async {
  // Permanent redirect (301)
  await res.redirect('/new-url', status: 301);
});

server.get('/temp-redirect', (req, res) async {
  // Temporary redirect (302) - default
  await res.redirect('/maintenance');
});

server.post('/process', (req, res) async {
  final result = await processFormData(await req.body);

  if (result.success) {
    // Redirect after POST (303)
    await res.redirect('/success', status: 303);
  } else {
    // Redirect back with errors
    res.flashInput(await req.body);
    await res.redirect('/form?errors=validation_failed', status: 303);
  }
});

server.get('/admin', (req, res) async {
  if (!req.isAuthenticated) {
    // Redirect to login with return URL
    await res.redirect('/login?return_url=/admin', status: 302);
    return;
  }

  if (!req.hasRole('admin')) {
    // Forbidden redirect
    await res.redirect('/403', status: 302);
    return;
  }

  res.sendHtml('<h1>Admin Dashboard</h1>');
});`

const viewRenderingCode = `// View rendering examples
server.get('/welcome', (req, res) async {
  await res.view('welcome', data: {
    'title': 'Welcome to Khadem',
    'user': req.user,
    'currentYear': DateTime.now().year
  });
});

server.get('/user/profile', (req, res) async {
  final user = await User.find(req.param('id'));

  await res.view('user/profile', data: {
    'user': user,
    'posts': await user.posts().get(),
    'isOwner': req.user?.id == user.id,
    'canEdit': req.user?.hasRole('admin') ?? false
  });
});

server.get('/dashboard', (req, res) async {
  final stats = await getDashboardStats();

  await res.view('admin/dashboard', data: {
    'stats': stats,
    'recentActivity': await getRecentActivity(),
    'notifications': await getAdminNotifications(),
    'currentUser': req.user
  });
});

// Error pages
server.get('/404', (req, res) async {
  res.statusCode(404);
  await res.view('errors/404', data: {
    'requestedUrl': req.path,
    'suggestions': getSuggestedUrls(req.path)
  });
});

server.get('/500', (req, res) async {
  res.statusCode(500);
  await res.view('errors/500', data: {
    'error': 'Internal Server Error',
    'supportEmail': 'support@example.com'
  });
});`

const sessionCode = `// Session management in responses
server.post('/register', (req, res) async {
  final data = await req.body;

  try {
    final user = await User.create(data);

    // Store user in session
    res.sessionPut('user_id', user.id);
    res.sessionPut('user_name', user.name);

    // Flash success message
    res.flashSession('success', 'Account created successfully!');

    await res.redirect('/dashboard', status: 303);
  } catch (e) {
    // Flash input data back to form
    res.flashInput(data);
    res.flashSession('error', 'Failed to create account');

    await res.redirect('/register', status: 303);
  }
});

server.post('/update-profile', (req, res) async {
  final data = await req.body;
  final userId = req.session.get('user_id');

  if (userId == null) {
    return res.unauthorized().sendJson({'error': 'Not authenticated'});
  }

  try {
    final user = await User.find(userId);
    await user.update(data);

    // Update session data
    res.sessionPut('user_name', data['name']);

    res.flashSession('success', 'Profile updated successfully');
    res.sendJson({'message': 'Profile updated'});
  } catch (e) {
    res.flashSession('error', 'Failed to update profile');
    res.badRequest().sendJson({'error': 'Invalid data'});
  }
});

server.get('/flash-messages', (req, res) async {
  // Get flashed messages
  final successMessage = req.session.pull('success');
  final errorMessage = req.session.pull('error');

  res.sendJson({
    'messages': {
      if (successMessage != null) 'success': successMessage,
      if (errorMessage != null) 'error': errorMessage,
    }
  });
});`

const errorResponseCode = `// Error response examples
server.get('/api/user/:id', (req, res) async {
  final userId = req.param('id');

  if (userId == null || int.tryParse(userId) == null) {
    return res.badRequest().sendJson({
      'error': {
        'code': 'INVALID_USER_ID',
        'message': 'User ID must be a valid integer',
        'field': 'id',
        'value': userId
      }
    });
  }

  final user = await User.find(int.parse(userId));

  if (user == null) {
    return res.notFound().sendJson({
      'error': {
        'code': 'USER_NOT_FOUND',
        'message': 'User not found',
        'user_id': userId
      }
    });
  }

  res.sendJson({'user': user});
});

server.post('/api/posts', (req, res) async {
  try {
    final data = await req.body;

    // Validate required fields
    if (data['title'] == null || data['title'].isEmpty) {
      return res.badRequest().sendJson({
        'error': {
          'code': 'VALIDATION_ERROR',
          'message': 'Title is required',
          'field': 'title',
          'validation': 'required'
        }
      });
    }

    if (data['content'] == null || data['content'].isEmpty) {
      return res.badRequest().sendJson({
        'error': {
          'code': 'VALIDATION_ERROR',
          'message': 'Content is required',
          'field': 'content',
          'validation': 'required'
        }
      });
    }

    final post = await Post.create(data);
    res.created().sendJson({'post': post});

  } catch (e) {
    print('Error creating post: \$e');
    res.internalServerError().sendJson({
      'error': {
        'code': 'INTERNAL_ERROR',
        'message': 'Failed to create post',
        'details': Khadem.env.get('APP_DEBUG') == 'true' ? e.toString() : null
      }
    });
  }
});

// Global error handler
server.get('/test-error', (req, res) async {
  try {
    // Simulate an error
    throw Exception('Something went wrong');
  } catch (e) {
    res.internalServerError().sendJson({
      'error': {
        'code': 'UNEXPECTED_ERROR',
        'message': 'An unexpected error occurred',
        'trace_id': generateTraceId()
      }
    });
  }
});`

const responseBuilderCode = `// Response builder pattern for consistent APIs
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

  ApiResponse noContent() {
    _response.statusCode(204).empty();
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

  static Future show(Request req, Response res) async {
    final user = await User.find(req.param('id'));

    if (user == null) {
      return ApiResponse(res).error('User not found', statusCode: 404, code: 'USER_NOT_FOUND');
    }

    ApiResponse(res).success(user);
  }
}`

const completeExampleCode = `// Complete response handling example
import 'package:khadem/khadem_dart.dart';

class ApiController {
  static Future getUsers(Request req, Response res) async {
    try {
      final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
      final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
      final search = req.query['search'];

      // Build query
      var query = User.query();

      if (search != null && search.isNotEmpty) {
        query = query.where('name', 'LIKE', '%\$search%')
                    .orWhere('email', 'LIKE', '%\$search%');
      }

      final users = await query.paginate(page, limit);
      final total = await query.count();

      // Set pagination headers
      res.header('X-Total-Count', total.toString());
      res.header('X-Page', page.toString());
      res.header('X-Per-Page', limit.toString());
      res.header('X-Total-Pages', (total / limit).ceil().toString());

      // Add cache control for better performance
      res.cache('private, max-age=300'); // Cache for 5 minutes

      res.sendJson({
        'data': users.map((user) => user.toJson()).toList(),
        'meta': {
          'page': page,
          'per_page': limit,
          'total': total,
          'total_pages': (total / limit).ceil(),
          'has_next': page * limit < total,
          'has_prev': page > 1,
        },
        'links': {
          'self': '/api/users?page=\$page&limit=\$limit',
          'first': '/api/users?page=1&limit=\$limit',
          'last': '/api/users?page=\${(total / limit).ceil()}&limit=\$limit',
          if (page > 1) 'prev': '/api/users?page=\${page - 1}&limit=\$limit',
          if (page * limit < total) 'next': '/api/users?page=\${page + 1}&limit=\$limit',
        }
      });

    } catch (e) {
      print('Error fetching users: \$e');
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

      // Create user
      final user = await User.create({
        ...data,
        'password': hashPassword(data['password']),
        'email_verified_at': null,
      });

      // Send welcome email asynchronously
      Queue.dispatch(SendWelcomeEmail(user));

      // Set session
      res.sessionPut('user_id', user.id);
      res.sessionPut('user_name', user.name);

      // Flash success message
      res.flashSession('success', 'Account created successfully!');

      res.created().sendJson({
        'user': user.toJson(),
        'message': 'Account created successfully',
        'next_steps': [
          'Check your email for verification',
          'Complete your profile',
          'Explore the dashboard'
        ]
      });

    } catch (e) {
      print('Error creating user: \$e');

      // Flash input data back for form repopulation
      res.flashInput(await req.body);
      res.flashSession('error', 'Failed to create account. Please try again.');

      res.internalServerError().sendJson({
        'error': 'Failed to create user',
        'code': 'USER_CREATE_FAILED'
      });
    }
  }

  static Future uploadAvatar(Request req, Response res) async {
    try {
      final userId = req.param('id');

      if (!req.hasFile('avatar')) {
        return res.badRequest().sendJson({
          'error': 'No avatar file provided',
          'code': 'MISSING_AVATAR'
        });
      }

      final avatarFile = req.file('avatar');

      if (avatarFile == null) {
        return res.badRequest().sendJson({
          'error': 'Invalid avatar file',
          'code': 'INVALID_AVATAR'
        });
      }

      // Validate file type
      final allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.contains(avatarFile.mimeType)) {
        return res.badRequest().sendJson({
          'error': 'Invalid file type. Only JPEG, PNG, and GIF are allowed',
          'code': 'INVALID_FILE_TYPE'
        });
      }

      // Validate file size (max 5MB)
      if (avatarFile.size > 5 * 1024 * 1024) {
        return res.badRequest().sendJson({
          'error': 'File too large. Maximum size is 5MB',
          'code': 'FILE_TOO_LARGE'
        });
      }

      // Generate unique filename
      final extension = avatarFile.extension;
      final filename = 'avatar_\${userId}_\${DateTime.now().millisecondsSinceEpoch}.\$extension';

      // Save file
      final path = 'storage/app/avatars/\$filename';
      await avatarFile.move(path);

      // Update user avatar
      final user = await User.find(userId);
      await user.update({'avatar': filename});

      res.sendJson({
        'message': 'Avatar uploaded successfully',
        'avatar_url': '/storage/avatars/\$filename',
        'filename': filename
      });

    } catch (e) {
      print('Error uploading avatar: \$e');
      res.internalServerError().sendJson({
        'error': 'Failed to upload avatar',
        'code': 'AVATAR_UPLOAD_FAILED'
      });
    }
  }

  static Future streamLogs(Request req, Response res) async {
    res.header('Content-Type', 'text/event-stream');
    res.header('Cache-Control', 'no-cache');
    res.header('Connection', 'keep-alive');

    final logFile = File('storage/logs/app.log');
    final stream = logFile.openRead();

    // Convert bytes to lines
    final lines = stream
        .transform(utf8.decoder)
        .transform(LineSplitter())
        .map((line) => 'data: \$line\\n\\n');

    await res.stream(lines);
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
