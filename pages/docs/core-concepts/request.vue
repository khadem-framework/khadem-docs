<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Request System</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Comprehensive HTTP request handling with body parsing, validation, authentication, and session management.
        </p>
      </header>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Basic Request Properties</h2>

        <CodeBlock
          :code="basicRequestCode"
          language="dart"
          title="Accessing Request Properties"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">HTTP Properties</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">method</code> - GET, POST, PUT, etc.</div>
              <div><code class="text-green-600">path</code> - Request path (/api/users)</div>
              <div><code class="text-orange-600">uri</code> - Full URI object</div>
              <div><code class="text-purple-600">query</code> - Query parameters map</div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Header Properties</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">contentType</code> - Content-Type header</div>
              <div><code class="text-green-600">userAgent</code> - User-Agent header</div>
              <div><code class="text-orange-600">acceptsJson()</code> - Accepts JSON check</div>
              <div><code class="text-purple-600">isAjax()</code> - AJAX request check</div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Body Parsing</h2>

        <CodeBlock
          :code="bodyParsingCode"
          language="dart"
          title="Request Body Handling"
        />

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">Supported Content Types</h3>
          <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
            <li><code>application/json</code> - JSON data</li>
            <li><code>application/x-www-form-urlencoded</code> - Form data</li>
            <li><code>multipart/form-data</code> - File uploads</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">File Uploads</h2>

        <CodeBlock
          :code="fileUploadCode"
          language="dart"
          title="Handling File Uploads"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">File Properties</h3>
            <CodeBlock :code="filePropertiesCode" language="dart" />
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">File Methods</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">saveTo(path)</code> - Save to disk</div>
              <div><code class="text-green-600">asString()</code> - Get as string</div>
              <div><code class="text-orange-600">size</code> - File size in bytes</div>
              <div><code class="text-purple-600">extension</code> - File extension</div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Input Validation</h2>

        <CodeBlock
          :code="validationCode"
          language="dart"
          title="Request Validation"
        />

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Validation Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Comprehensive validation rules</li>
            <li>Automatic error formatting</li>
            <li>Custom validation messages</li>
            <li>File upload validation</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Parameters & Query Strings</h2>

        <CodeBlock
          :code="parametersCode"
          language="dart"
          title="Parameter Handling"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Path Parameters</h3>
            <CodeBlock :code="pathParamsCode" language="dart" />
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Query Parameters</h3>
            <CodeBlock :code="queryParamsCode" language="dart" />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Authentication & Authorization</h2>

        <CodeBlock
          :code="authCode"
          language="dart"
          title="Authentication Handling"
        />

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">Auth Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
            <li>User authentication state</li>
            <li>Role-based authorization</li>
            <li>Web authentication helpers</li>
            <li>CSRF token validation</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Session Management</h2>

        <CodeBlock
          :code="sessionCode"
          language="dart"
          title="Session Operations"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Session Methods</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">getSession(key)</code> - Get value</div>
              <div><code class="text-green-600">setSession(key, value)</code> - Set value</div>
              <div><code class="text-orange-600">flashSession(key, value)</code> - Flash data</div>
              <div><code class="text-purple-600">pullSession(key)</code> - Get & remove</div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Flash Messages</h3>
            <CodeBlock :code="flashMessagesCode" language="dart" />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Cookies</h2>

        <CodeBlock
          :code="cookiesCode"
          language="dart"
          title="Cookie Management"
        />

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">Cookie Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
            <li>Secure cookie handling</li>
            <li>HttpOnly flag support</li>
            <li>Automatic expiration</li>
            <li>Remember tokens</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Advanced Patterns</h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Custom Attributes</h3>
            <CodeBlock :code="attributesCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Store custom data during request lifecycle
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Request Context</h3>
            <CodeBlock :code="contextCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Access request data across middleware and handlers
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Complete API Example</h2>

        <CodeBlock
          :code="completeApiCode"
          language="dart"
          title="Full Request Handling Example"
        />
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Recommendations</h3>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Always validate input data before processing</li>
              <li>Use appropriate HTTP status codes in responses</li>
              <li>Handle file uploads securely with size limits</li>
              <li>Validate CSRF tokens for state-changing operations</li>
              <li>Use sessions for temporary user data</li>
              <li>Check authentication status before accessing protected resources</li>
              <li>Use flash messages for user feedback</li>
              <li>Parse request body only when needed</li>
            </ul>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid</h3>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Don't trust user input without validation</li>
              <li>Don't store sensitive data in sessions</li>
              <li>Don't parse request body multiple times unnecessarily</li>
              <li>Don't expose internal errors to clients</li>
              <li>Don't use cookies for sensitive authentication data</li>
              <li>Don't skip CSRF protection for forms</li>
              <li>Don't store large files in memory</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  definePageMeta({ layout: 'docs' })
  useHead({
    title: 'Khadem Request System',
    meta: [
      { name: 'description', content: 'Complete documentation for Khadem request system' }
    ]
  })

  const basicRequestCode = `// Basic request properties
server.get('/api/profile', (req, res) async {
  // HTTP method
  final method = req.method; // 'GET'

  // Request path
  final path = req.path; // '/api/profile'

  // Full URI
  final uri = req.uri; // Uri object

  // Query parameters
  final page = req.query['page']; // '1'
  final limit = req.query['limit']; // '10'

  // Headers
  final userAgent = req.userAgent;
  final contentType = req.contentType;
  final isAjax = req.isAjax();
  final acceptsJson = req.acceptsJson();

  res.sendJson({
    'method': method,
    'path': path,
    'query': req.query,
    'headers': {
      'user_agent': userAgent,
      'content_type': contentType,
      'is_ajax': isAjax,
      'accepts_json': acceptsJson,
    }
  });
});`

  const bodyParsingCode = `// JSON request body
server.post('/api/users', (req, res) async {
  final body = await req.body;

  // Access specific fields
  final name = req.input('name');
  final email = req.input('email');
  final age = req.input('age', 18); // with default

  // Check if field exists
  if (req.has('name')) {
    // Field exists
  }

  res.sendJson({
    'received': body,
    'name': name,
    'email': email,
    'age': age,
  });
});

// Form data
server.post('/api/contact', (req, res) async {
  final formData = await req.body;

  final message = req.input('message');
  final priority = req.input('priority', 'normal');

  // Process form data...
  res.sendJson({
    'message': 'Form submitted',
    'data': formData,
  });
});`

  const fileUploadCode = `// Single file upload
server.post('/api/avatar', (req, res) async {
  if (!req.hasFile('avatar')) {
    return res.badRequest().sendJson({'error': 'No avatar file provided'});
  }

  final avatarFile = req.file('avatar');

  if (avatarFile == null) {
    return res.badRequest().sendJson({'error': 'Invalid avatar file'});
  }

  // Validate file size (max 2MB)
  if (avatarFile.size > 2 * 1024 * 1024) {
    return res.badRequest().sendJson({'error': 'File too large'});
  }

  // Validate file type
  final allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (!allowedTypes.contains(avatarFile.contentType)) {
    return res.badRequest().sendJson({'error': 'Invalid file type'});
  }

  // Save file
  final filename = 'avatar_\${DateTime.now().millisecondsSinceEpoch}.\${avatarFile.extension}';
  final path = 'storage/avatars/\$filename';
  await avatarFile.saveTo(path);

  res.sendJson({
    'message': 'Avatar uploaded successfully',
    'filename': filename,
    'path': path,
  });
});

// Multiple file upload
server.post('/api/gallery', (req, res) async {
  final uploadedFiles = req.filesByName('images');

  if (uploadedFiles.isEmpty) {
    return res.badRequest().sendJson({'error': 'No images provided'});
  }

  final savedFiles = [];
  for (final file in uploadedFiles) {
    final filename = 'gallery_\${DateTime.now().millisecondsSinceEpoch}_\${file.filename}';
    final path = 'storage/gallery/\$filename';
    await file.saveTo(path);

    savedFiles.add({
      'original_name': file.filename,
      'saved_name': filename,
      'size': file.size,
      'type': file.contentType,
    });
  }

  res.sendJson({
    'message': '\${savedFiles.length} images uploaded',
    'files': savedFiles,
  });
});`

  const filePropertiesCode = `final avatarFile = req.file('avatar');

// File properties
final filename = avatarFile.filename;        // 'profile.jpg'
final size = avatarFile.size;                // 1024000 (bytes)
final contentType = avatarFile.contentType;  // 'image/jpeg'
final extension = avatarFile.extension;      // 'jpg'
final fieldName = avatarFile.fieldName;      // 'avatar'

// File content
final asString = avatarFile.asString();      // File content as string
final asBytes = avatarFile.data;             // Raw bytes`

  const validationCode = `// Request validation
server.post('/api/users', (req, res) async {
  try {
    // Validate request body
    final validatedData = await req.validate({
      'name': 'required|min:2|max:100',
      'email': 'required|email|unique:users,email',
      'password': 'required|min:8',
      'age': 'optional|integer|min:18|max:120',
    });

    // Data is validated and sanitized
    final user = await User.create(validatedData);

    res.created().sendJson({'user': user});
  } catch (e) {
    // Validation failed - error response sent automatically
    // No need to handle manually
  }
});

// Custom validation with specific data
server.put('/api/users/:id', (req, res) async {
  final userId = req.param('id');
  final updateData = await req.body;

  try {
    final validatedData = req.validateData(updateData, {
      'name': 'optional|min:2|max:100',
      'email': 'optional|email',
      'bio': 'optional|max:500',
    });

    final user = await User.find(userId);
    await user.update(validatedData);

    res.sendJson({'user': user});
  } catch (e) {
    // Validation failed
  }
});

// File upload validation
server.post('/api/documents', (req, res) async {
  try {
    final validatedData = await req.validate({
      'title': 'required|min:3|max:200',
      'document': 'required|file|max:10MB|mimes:pdf,doc,docx',
      'category': 'required|in:contract,report,invoice',
    });

    final documentFile = req.file('document');
    // Process validated file...

    res.sendJson({'message': 'Document uploaded successfully'});
  } catch (e) {
    // Validation failed
  }
});`

  const parametersCode = `// Path parameters
server.get('/api/users/:id', (req, res) async {
  final userId = req.param('id'); // Get path parameter

  if (userId == null) {
    return res.badRequest().sendJson({'error': 'User ID required'});
  }

  final user = await User.find(userId);
  res.sendJson({'user': user});
});

// Multiple path parameters
server.get('/api/posts/:category/:slug', (req, res) async {
  final category = req.param('category');
  final slug = req.param('slug');

  final post = await Post.where('category', category)
    .where('slug', slug)
    .first();

  res.sendJson({'post': post});
});

// Query parameters
server.get('/api/search', (req, res) async {
  final query = req.query['q'] ?? '';
  final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
  final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
  final sort = req.query['sort'] ?? 'created_at';
  final order = req.query['order'] ?? 'desc';

  // Build search query...
  final results = await Search.query(query)
    .orderBy(sort, direction: order)
    .paginate(perPage: limit, page: page);

  res.sendJson({
    'query': query,
    'results': results.data,
    'pagination': {
      'page': results.currentPage,
      'limit': limit,
      'total': results.total,
      'pages': results.lastPage,
    }
  });
});`

  const pathParamsCode = `// Path parameter access
final userId = req.param('id');
final category = req.param('category');
final slug = req.param('slug');

// With default values
final page = req.param('page') ?? '1';
final limit = req.param('limit') ?? '10';

// Check if parameter exists
if (req.params.hasParam('id')) {
  // Parameter exists
}`

  const queryParamsCode = `// Query parameter access
final search = req.query['q'];
final page = req.query['page'];
final limit = req.query['limit'];
final sort = req.query['sort'];

// All query parameters
final allParams = req.query; // Map<String, String>`

  const authCode = `// Authentication checks
server.get('/api/profile', (req, res) async {
  if (!req.isAuthenticated) {
    return res.unauthorized().sendJson({
      'error': 'Authentication required'
    });
  }

  final user = req.user;
  res.sendJson({'user': user});
});

// Role-based authorization
server.get('/api/admin/users', (req, res) async {
  if (!req.isAuthenticated) {
    return res.unauthorized().sendJson({'error': 'Not authenticated'});
  }

  if (!req.hasRole('admin')) {
    return res.forbidden().sendJson({'error': 'Admin access required'});
  }

  const users = await User.all();
  res.sendJson({'users': users});
});

// Multiple role check
server.get('/api/moderator/content', (req, res) async {
  if (!req.hasAnyRole(['admin', 'moderator'])) {
    return res.forbidden().sendJson({'error': 'Insufficient permissions'});
  }

  // User has admin or moderator role
  const content = await Content.needingModeration();
  res.sendJson({'content': content});
});

// Web authentication helpers
server.get('/dashboard', (req, res) async {
  if (!req.isWebAuthenticated) {
    return await res.redirect('/login');
  }

  final user = await req.getWebUser();
  const viewData = req.webViewData;

  // Render dashboard with user data
  await res.view('dashboard', data: viewData);
});

// CSRF protection
server.post('/api/posts', (req, res) async {
  if (!req.validateCsrfToken(req.input('csrf_token'))) {
    return res.forbidden().sendJson({'error': 'Invalid CSRF token'});
  }

  // Process form...
  res.sendJson({'message': 'Post created'});
});`

  const sessionCode = `// Session management
server.post('/login', (req, res) async {
  final credentials = await req.body;
  final user = await authenticateUser(credentials);

  if (user != null) {
    // Store user data in session
    req.setSession('user_id', user.id);
    req.setSession('user_name', user.name);
    req.setSession('user_role', user.role);

    // Flash success message
    req.flashSession('success', 'Login successful!');

    res.sendJson({'message': 'Login successful'});
  } else {
    res.unauthorized().sendJson({'error': 'Invalid credentials'});
  }
});

// Access session data
server.get('/api/user', (req, res) async {
  final userId = req.getSession('user_id');
  final userName = req.getSession('user_name');

  if (userId == null) {
    return res.unauthorized().sendJson({'error': 'Not authenticated'});
  }

  res.sendJson({
    'user_id': userId,
    'user_name': userName,
  });
});

// Session utilities
server.get('/api/session/info', (req, res) async {
  res.sendJson({
    'session_id': req.sessionId,
    'is_empty': req.isSessionEmpty,
    'length': req.sessionLength,
    'keys': req.sessionKeys.toList(),
    'is_valid': req.isSessionValid(),
    'created_at': req.getSessionCreatedAt(),
    'last_access': req.getSessionLastAccess(),
  });
});

// Session cleanup
server.post('/logout', (req, res) async {
  req.destroySession();
  res.sendJson({'message': 'Logged out successfully'});
});`

  const flashMessagesCode = `// Flash messages
server.post('/contact', (req, res) async {
  try {
    // Process contact form
    await processContactForm(await req.body);

    req.flashSession('success', 'Message sent successfully!');
    res.sendJson({'message': 'Message sent'});
  } catch (e) {
    req.flashSession('error', 'Failed to send message');
    res.badRequest().sendJson({'error': 'Failed to send message'});
  }
});

// Retrieve flash messages
server.get('/messages', (req, res) async {
  final successMessage = req.pullSession('success');
  final errorMessage = req.pullSession('error');

  res.sendJson({
    'messages': {
      if (successMessage != null) 'success': successMessage,
      if (errorMessage != null) 'error': errorMessage,
    }
  });
});`

  const cookiesCode = `// Cookie management
server.post('/login', (req, res) async {
  final credentials = await req.body;
  final user = await authenticateUser(credentials);

  if (user != null) {
    // Set authentication cookie
    req.cookieHandler.set(
      'auth_token',
      generateAuthToken(user),
      httpOnly: true,
      secure: true,
      maxAge: Duration(days: 7)
    );

    // Set remember token if requested
    if (req.input('remember') == true) {
      req.cookieHandler.set(
        'remember_token',
        generateRememberToken(user),
        maxAge: Duration(days: 30)
      );
    }

    res.sendJson({'message': 'Login successful'});
  }
});

// Access cookies
server.get('/api/user', (req, res) async {
  final authToken = req.cookie('auth_token');
  final rememberToken = req.rememberToken;

  if (authToken == null && rememberToken == null) {
    return res.unauthorized().sendJson({'error': 'Not authenticated'});
  }

  // Validate tokens...
  res.sendJson({'message': 'Authenticated'});
});

// Cookie utilities
server.get('/cookies', (req, res) async {
  res.sendJson({
    'all_cookies': req.cookies,
    'auth_token': req.cookie('auth_token'),
    'has_remember_token': req.hasRememberToken(),
    'has_csrf_token': req.hasCsrfToken(),
    'csrf_token': req.csrfToken,
  });
});

// Clear cookies
server.post('/logout', (req, res) async {
  req.cookieHandler.delete('auth_token');
  req.cookieHandler.delete('remember_token');

  res.sendJson({'message': 'Logged out'});
});`

  const attributesCode = `// Custom attributes
server.useMiddleware((req, res, next) async {
  // Add custom data to request
  req.setAttribute('request_id', generateRequestId());
  req.setAttribute('start_time', DateTime.now());
  req.setAttribute('user_agent_parsed', parseUserAgent(req.userAgent));

  await next();
});

server.get('/api/data', (req, res) async {
  // Access custom attributes
  final requestId = req.attribute<String>('request_id');
  final startTime = req.attribute<DateTime>('start_time');
  final userAgentInfo = req.attribute<Map<String, dynamic>>('user_agent_parsed');

  // Use attributes in response
  res.sendJson({
    'request_id': requestId,
    'processing_time': DateTime.now().difference(startTime),
    'user_agent': userAgentInfo,
  });
});`

  const contextCode = `// Request context across middleware
class AuthMiddleware implements Middleware {
  @override
  Future<void> handle(Request req, Response res, NextFunction next) async {
    final token = req.header('authorization');

    if (token != null) {
      try {
        final user = await validateToken(token);
        req.setAttribute('user', user);
        req.setUser(user); // Also set in auth system
      } catch (e) {
        // Invalid token
      }
    }

    await next();
  }
}

class LoggingMiddleware implements Middleware {
  @override
  Future<void> handle(Request req, Response res, NextFunction next) async {
    final startTime = DateTime.now();
    req.setAttribute('start_time', startTime);

    await next();

    final duration = DateTime.now().difference(startTime);
    final user = req.attribute<Map<String, dynamic>>('user');

    print('Request: \${req.method} \${req.path}');
    print('User: \${user?['id'] ?? 'anonymous'}');
    print('Duration: \${duration.inMilliseconds}ms');
  }
}`

  const completeApiCode = `// Complete request handling example
import 'package:khadem/khadem_dart.dart';

class UserController {
  static Future index(Request req, Response res) async {
    // Check authentication
    if (!req.isAuthenticated) {
      return res.unauthorized().sendJson({'error': 'Not authenticated'});
    }

    // Parse query parameters
    final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
    final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
    final search = req.query['search'];

    // Build query
    var query = User.query();
    if (search != null && search.isNotEmpty) {
      query = query.where('name', 'LIKE', '%\$search%')
                  .orWhere('email', 'LIKE', '%\$search%');
    }

    // Get paginated results
    final users = await query.paginate(perPage: limit, page: page);

    res.sendJson({
      'data': users.data.map((user) => user.toJson()).toList(),
      'pagination': {
        'page': users.currentPage,
        'per_page': limit,
        'total': users.total,
        'last_page': users.lastPage,
        'has_next': users.currentPage < users.lastPage,
        'has_prev': users.currentPage > 1,
      }
    });
  }

  static Future store(Request req, Response res) async {
    try {
      // Validate input
      final validatedData = await req.validate({
        'name': 'required|min:2|max:100',
        'email': 'required|email|unique:users,email',
        'password': 'required|min:8|confirmed',
        'avatar': 'optional|file|max:2MB|mimes:jpeg,png,gif',
      });

      // Handle file upload if provided
      if (req.hasFile('avatar')) {
        final avatarFile = req.file('avatar')!;
        final filename = 'avatar_\${DateTime.now().millisecondsSinceEpoch}.\${avatarFile.extension}';
        await avatarFile.saveTo('storage/avatars/\$filename');
        validatedData['avatar'] = filename;
      }

      // Hash password
      validatedData['password'] = hashPassword(validatedData['password']);

      // Create user
      final user = await User.create(validatedData);

      // Set session
      req.setSession('user_id', user.id);
      req.flashSession('success', 'Account created successfully!');

      res.created().sendJson({
        'user': user.toJson(),
        'message': 'Account created successfully'
      });

    } catch (e) {
      // Flash input for form repopulation
      req.flashInput(await req.body);
      req.flashSession('error', 'Failed to create account');

      res.badRequest().sendJson({
        'error': 'Validation failed',
        'message': 'Please check your input and try again'
      });
    }
  }

  static Future show(Request req, Response res) async {
    final userId = req.param('id');

    if (userId == null) {
      return res.badRequest().sendJson({'error': 'User ID required'});
    }

    final user = await User.find(userId);

    if (user == null) {
      return res.notFound().sendJson({'error': 'User not found'});
    }

    // Check if user can view this profile
    if (!req.isAuthenticated || (req.userId != user.id && !req.hasRole('admin'))) {
      return res.forbidden().sendJson({'error': 'Access denied'});
    }

    res.sendJson({'user': user.toJson()});
  }

  static Future update(Request req, Response res) async {
    final userId = req.param('id');

    if (userId == null) {
      return res.badRequest().sendJson({'error': 'User ID required'});
    }

    // Check ownership or admin role
    if (!req.isAuthenticated || (req.userId != userId && !req.hasRole('admin'))) {
      return res.forbidden().sendJson({'error': 'Access denied'});
    }

    try {
      final validatedData = await req.validate({
        'name': 'optional|min:2|max:100',
        'email': 'optional|email',
        'bio': 'optional|max:500',
        'avatar': 'optional|file|max:2MB|mimes:jpeg,png,gif',
      });

      // Handle avatar upload
      if (req.hasFile('avatar')) {
        final avatarFile = req.file('avatar')!;
        final filename = 'avatar_\${DateTime.now().millisecondsSinceEpoch}.\${avatarFile.extension}';
        await avatarFile.saveTo('storage/avatars/\$filename');
        validatedData['avatar'] = filename;
      }

      final user = await User.find(userId);
      await user.update(validatedData);

      req.flashSession('success', 'Profile updated successfully');

      res.sendJson({
        'user': user.toJson(),
        'message': 'Profile updated successfully'
      });

    } catch (e) {
      res.badRequest().sendJson({
        'error': 'Validation failed',
        'message': 'Please check your input'
      });
    }
  }

  static Future destroy(Request req, Response res) async {
    final userId = req.param('id');

    if (userId == null) {
      return res.badRequest().sendJson({'error': 'User ID required'});
    }

    // Only admins can delete users
    if (!req.hasRole('admin')) {
      return res.forbidden().sendJson({'error': 'Admin access required'});
    }

    final user = await User.find(userId);

    if (user == null) {
      return res.notFound().sendJson({'error': 'User not found'});
    }

    await user.delete();

    // Clear session if user deleted themselves
    if (req.userId == userId) {
      req.destroySession();
    }

    res.sendJson({'message': 'User deleted successfully'});
  }
}

// Register routes
void registerUserRoutes(Server server) {
  server.group(
    prefix: '/api/users',
    routes: (router) {
      router.get('', UserController.index);
      router.post('', UserController.store);
      router.get('/:id', UserController.show);
      router.put('/:id', UserController.update);
      router.delete('/:id', UserController.destroy);
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