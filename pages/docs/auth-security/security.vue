<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Security Best Practices</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive security guidelines and best practices for building secure Khadem applications.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Authentication Security</h2>

      <CodeBlock
        :code="authSecurityCode"
        language="dart"
        title="Secure Authentication Implementation"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Security Risks</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
            <li>Plain text password storage</li>
            <li>Weak password policies</li>
            <li>Session fixation attacks</li>
            <li>Brute force attacks</li>
            <li>Token leakage</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Security Measures</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
            <li>Strong password hashing (bcrypt/Argon2)</li>
            <li>Multi-factor authentication</li>
            <li>Secure session management</li>
            <li>Rate limiting</li>
            <li>JWT token security</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Input Validation & Sanitization</h2>

      <CodeBlock
        :code="inputValidationCode"
        language="dart"
        title="Input Validation and Sanitization"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Validation Rules</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><code>required</code> - Field must be present</li>
          <li><code>email</code> - Valid email format</li>
          <li><code>min:X|max:X</code> - Length constraints</li>
          <li><code>numeric|alpha|alphanum</code> - Character restrictions</li>
          <li><code>unique:table,column</code> - Database uniqueness</li>
          <li><code>regex:pattern</code> - Custom regex validation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">SQL Injection Prevention</h2>

      <CodeBlock
        :code="sqlInjectionCode"
        language="dart"
        title="SQL Injection Prevention"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">ORM Security Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Automatic query parameter binding</li>
          <li>Prepared statements</li>
          <li>Input sanitization</li>
          <li>SQL escaping</li>
          <li>Query builder protection</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cross-Site Scripting (XSS) Protection</h2>

      <CodeBlock
        :code="xssProtectionCode"
        language="dart"
        title="XSS Protection in Templates"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">XSS Prevention Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Auto-escaping in templates</li>
            <li>Content Security Policy (CSP)</li>
            <li>Input sanitization</li>
            <li>Output encoding</li>
            <li>Secure cookie flags</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">CSP Headers</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>default-src 'self'</code></li>
            <li><code>script-src 'self' 'unsafe-inline'</code></li>
            <li><code>style-src 'self' 'unsafe-inline'</code></li>
            <li><code>img-src 'self' data: https:</code></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">CSRF Protection</h2>

      <CodeBlock
        :code="csrfProtectionCode"
        language="dart"
        title="CSRF Protection Implementation"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">CSRF Protection Methods</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Synchronizer tokens</li>
          <li>SameSite cookie attribute</li>
          <li>Origin header validation</li>
          <li>Custom CSRF middleware</li>
          <li>Double submit cookie pattern</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">File Upload Security</h2>

      <CodeBlock
        :code="fileUploadSecurityCode"
        language="dart"
        title="Secure File Upload Handling"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">File Security Checks</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>File type validation</li>
            <li>File size limits</li>
            <li>MIME type verification</li>
            <li>Virus scanning</li>
            <li>Safe filename generation</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Storage Security</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Private file permissions</li>
            <li>Secure upload directories</li>
            <li>File access controls</li>
            <li>CDN integration</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">API Security</h2>

      <CodeBlock
        :code="apiSecurityCode"
        language="dart"
        title="API Security Best Practices"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">API Security Headers</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li><code>X-API-Key</code> - API key authentication</li>
          <li><code>X-Rate-Limit</code> - Rate limiting information</li>
          <li><code>X-Content-Type-Options: nosniff</code></li>
          <li><code>X-Frame-Options: DENY</code></li>
          <li><code>X-XSS-Protection: 1; mode=block</code></li>
          <li><code>Strict-Transport-Security</code></li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Rate Limiting</h2>

      <CodeBlock
        :code="rateLimitingCode"
        language="dart"
        title="Rate Limiting Implementation"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Rate Limiting Strategies</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Fixed window</li>
            <li>Sliding window</li>
            <li>Token bucket</li>
            <li>Leaky bucket</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Common Limits</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Login attempts: 5 per minute</li>
            <li>API requests: 1000 per hour</li>
            <li>File uploads: 10 per minute</li>
            <li>Password resets: 3 per hour</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Security Middleware</h2>

      <CodeBlock
        :code="securityMiddlewareCode"
        language="dart"
        title="Security Middleware Implementation"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Security Middleware Stack</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>CORS middleware for cross-origin requests</li>
          <li>Helmet middleware for security headers</li>
          <li>Rate limiting middleware</li>
          <li>Authentication middleware</li>
          <li>Authorization middleware</li>
          <li>Input validation middleware</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Environment Security</h2>

      <CodeBlock
        :code="environmentSecurityCode"
        language="dart"
        title="Environment Configuration Security"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Environment Best Practices</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>Never commit secrets to version control</li>
          <li>Use environment-specific configurations</li>
          <li>Validate environment variables on startup</li>
          <li>Use secret management services</li>
          <li>Rotate secrets regularly</li>
          <li>Monitor environment variable access</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Security Monitoring</h2>

      <CodeBlock
        :code="securityMonitoringCode"
        language="dart"
        title="Security Monitoring and Logging"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Security Events to Monitor</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Failed authentication attempts</li>
            <li>Unusual API usage patterns</li>
            <li>File upload attempts</li>
            <li>Rate limit violations</li>
            <li>Suspicious input patterns</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Logging Best Practices</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Structured logging</li>
            <li>Log levels (DEBUG, INFO, WARN, ERROR)</li>
            <li>Security event correlation</li>
            <li>Log retention policies</li>
            <li>Secure log storage</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Security Checklist</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Pre-Deployment Checklist</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Environment variables are properly configured</li>
            <li>Debug mode is disabled in production</li>
            <li>HTTPS is enforced</li>
            <li>Security headers are configured</li>
            <li>Rate limiting is implemented</li>
            <li>Input validation is comprehensive</li>
            <li>Authentication is properly implemented</li>
            <li>Authorization checks are in place</li>
            <li>Database queries use parameterized statements</li>
            <li>File uploads are secured</li>
            <li>CSRF protection is enabled</li>
            <li>XSS protection is active</li>
            <li>Security monitoring is configured</li>
          </ul>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">🔄 Ongoing Security Maintenance</h3>
          <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
            <li>Regular security updates and patches</li>
            <li>Dependency vulnerability scanning</li>
            <li>Security audits and penetration testing</li>
            <li>Monitor security advisories</li>
            <li>Review and update security policies</li>
            <li>Employee security training</li>
            <li>Incident response planning</li>
            <li>Regular backup verification</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Security Best Practices',
  meta: [
    { name: 'description', content: 'Comprehensive security guidelines for Khadem applications' }
  ]
})

const authSecurityCode = `// Secure authentication with proper password hashing
class AuthController {
  static Future register(Request req, Response res) async {
    final data = await req.body;

    // Validate input
    final validation = await req.validator.validateData(data, {
      'email': 'required|email|unique:users,email',
      'password': 'required|min:8|confirmed',
      'name': 'required|min:2|max:100'
    });

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors
      });
    }

    // Hash password securely
    final hashedPassword = await Hash.make(data['password']);

    final user = await User.create({
      'email': data['email'],
      'password': hashedPassword,
      'name': data['name'],
      'email_verified_at': null
    });

    // Generate secure token
    final token = await JWT.generate({
      'sub': user.id,
      'iat': DateTime.now().millisecondsSinceEpoch ~/ 1000,
      'exp': DateTime.now().add(Duration(hours: 24)).millisecondsSinceEpoch ~/ 1000,
      'type': 'access'
    });

    res.sendJson({
      'user': user.toJson(),
      'token': token,
      'message': 'Registration successful'
    });
  }

  static Future login(Request req, Response res) async {
    final data = await req.body;

    // Rate limiting for login attempts
    final clientIP = req.ip;
    final attempts = await Cache.get('login_attempts:$clientIP', 0);

    if (attempts >= 5) {
      return res.tooManyRequests().sendJson({
        'error': 'Too many login attempts. Try again later.'
      });
    }

    final user = await User.where('email', data['email']).first();

    if (user == null || !await Hash.check(data['password'], user.password)) {
      // Increment failed attempts
      await Cache.put('login_attempts:$clientIP', attempts + 1, Duration(minutes: 15));

      return res.unauthorized().sendJson({
        'error': 'Invalid credentials'
      });
    }

    // Clear failed attempts on successful login
    await Cache.forget('login_attempts:$clientIP');

    // Generate secure session
    final sessionId = await Session.create(user.id);

    res.cookieHandler.set(
      'session_id',
      sessionId,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: Duration(hours: 24)
    );

    res.sendJson({
      'user': user.toJson(),
      'message': 'Login successful'
    });
  }
}`

const inputValidationCode = `// Comprehensive input validation
class UserController {
  static Future create(Request req, Response res) async {
    final data = await req.body;

    // Define validation rules
    final rules = {
      'name': 'required|min:2|max:100|regex:^[a-zA-Z\\s]+\$',
      'email': 'required|email|unique:users,email|max:255',
      'password': 'required|min:8|max:128|regex:(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@\$!%*?&])[A-Za-z\\d@\$!%*?&]',
      'phone': 'nullable|regex:^[+]?[1-9][\\d]{0,15}\$',
      'age': 'nullable|numeric|min:13|max:120',
      'website': 'nullable|url|max:255',
      'bio': 'nullable|max:500'
    };

    // Custom validation messages
    final messages = {
      'name.regex': 'Name can only contain letters and spaces',
      'password.regex': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'phone.regex': 'Please enter a valid phone number'
    };

    final validation = await req.validator.validateData(data, rules, messages);

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors,
        'code': 'VALIDATION_ERROR'
      });
    }

    // Sanitize input data
    final sanitizedData = {
      'name': data['name'].trim(),
      'email': data['email'].toLowerCase().trim(),
      'password': await Hash.make(data['password']),
      'phone': data['phone']?.trim(),
      'age': data['age'] != null ? int.parse(data['age']) : null,
      'website': data['website']?.trim(),
      'bio': data['bio']?.trim(),
      'created_at': DateTime.now(),
      'updated_at': DateTime.now()
    };

    final user = await User.create(sanitizedData);

    res.created().sendJson({
      'user': user.toJson(),
      'message': 'User created successfully'
    });
  }

  static Future updateProfile(Request req, Response res) async {
    final userId = req.param('id');
    final data = await req.body;

    // Validate only provided fields
    final rules = {};
    if (data.containsKey('name')) {
      rules['name'] = 'min:2|max:100|regex:^[a-zA-Z\\s]+\$';
    }
    if (data.containsKey('email')) {
      rules['email'] = 'email|unique:users,email,$userId|max:255';
    }
    if (data.containsKey('bio')) {
      rules['bio'] = 'nullable|max:500';
    }

    final validation = await req.validator.validateData(data, rules);

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors
      });
    }

    final user = await User.find(userId);
    if (user == null) {
      return res.notFound().sendJson({'error': 'User not found'});
    }

    // Sanitize and update
    final updateData = {};
    if (data.containsKey('name')) updateData['name'] = data['name'].trim();
    if (data.containsKey('email')) updateData['email'] = data['email'].toLowerCase().trim();
    if (data.containsKey('bio')) updateData['bio'] = data['bio']?.trim();
    updateData['updated_at'] = DateTime.now();

    await user.update(updateData);

    res.sendJson({
      'user': user.toJson(),
      'message': 'Profile updated successfully'
    });
  }
}`

const sqlInjectionCode = `// SQL Injection Prevention with ORM
class PostController {
  static Future getPosts(Request req, Response res) async {
    final userId = req.query['user_id'];
    final category = req.query['category'];
    final search = req.query['search'];
    final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
    final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;

    // Safe query building with parameter binding
    var query = Post.query()
      .with(['user', 'category', 'tags'])
      .orderBy('created_at', 'desc');

    // User ID filter (automatic parameter binding)
    if (userId != null && userId.isNotEmpty) {
      query = query.where('user_id', int.parse(userId));
    }

    // Category filter with relationship
    if (category != null && category.isNotEmpty) {
      query = query.whereHas('category', (q) => q.where('slug', category));
    }

    // Search with LIKE (safe parameter binding)
    if (search != null && search.isNotEmpty) {
      query = query.where((q) {
        q.where('title', 'LIKE', '%$search%')
         .orWhere('content', 'LIKE', '%$search%')
         .orWhere('excerpt', 'LIKE', '%$search%');
      });
    }

    // Pagination
    final posts = await query.paginate(page, limit);
    final total = await query.count();

    res.sendJson({
      'data': posts.map((post) => post.toJson()).toList(),
      'meta': {
        'page': page,
        'per_page': limit,
        'total': total,
        'total_pages': (total / limit).ceil(),
        'has_next': page * limit < total,
        'has_prev': page > 1
      }
    });
  }

  static Future createPost(Request req, Response res) async {
    final data = await req.body;
    final userId = req.user.id; // From authentication middleware

    // Validate input
    final validation = await req.validator.validateData(data, {
      'title': 'required|min:5|max:200',
      'content': 'required|min:10',
      'excerpt': 'nullable|max:300',
      'category_id': 'required|exists:categories,id',
      'tags': 'nullable|array|max:10',
      'status': 'required|in:draft,published,archived'
    });

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors
      });
    }

    // Safe mass assignment with fillable fields
    final post = await Post.create({
      'title': data['title'],
      'content': data['content'],
      'excerpt': data['excerpt'],
      'category_id': data['category_id'],
      'user_id': userId,
      'status': data['status'],
      'created_at': DateTime.now(),
      'updated_at': DateTime.now()
    });

    // Handle tags relationship safely
    if (data['tags'] != null && data['tags'].isNotEmpty) {
      final tagIds = [];
      for (final tagName in data['tags']) {
        final tag = await Tag.firstOrCreate({'name': tagName});
        tagIds.add(tag.id);
      }
      await post.tags().attach(tagIds);
    }

    res.created().sendJson({
      'post': post.toJson(),
      'message': 'Post created successfully'
    });
  }

  static Future searchPosts(Request req, Response res) async {
    final query = req.query['q'];

    if (query == null || query.isEmpty) {
      return res.badRequest().sendJson({'error': 'Search query is required'});
    }

    // Safe full-text search
    final posts = await Post.query()
      .selectRaw("*, MATCH(title, content) AGAINST(? IN NATURAL LANGUAGE MODE) as relevance", [query])
      .whereRaw("MATCH(title, content) AGAINST(? IN NATURAL LANGUAGE MODE)", [query])
      .with(['user', 'category'])
      .orderByRaw('relevance DESC')
      .limit(20)
      .get();

    res.sendJson({
      'data': posts.map((post) => post.toJson()).toList(),
      'query': query,
      'total': posts.length
    });
  }
}`

const xssProtectionCode = `// XSS Protection in Templates and Responses
class BlogController {
  static Future showPost(Request req, Response res) async {
    final postId = req.param('id');
    final post = await Post.with(['user', 'comments.user']).find(postId);

    if (post == null) {
      return res.notFound().sendJson({'error': 'Post not found'});
    }

    // Set security headers
    res.security(
      enableXssProtection: true,
      enableContentTypeOptions: true,
      enableFrameOptions: true,
      cspPolicy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:"
    );

    // Render template with auto-escaping
    await res.view('blog/post', data: {
      'post': post,
      'comments': post.comments,
      'currentUser': req.user,
      'csrf_token': req.csrfToken, // For forms
      'meta': {
        'title': post.title,
        'description': post.excerpt,
        'keywords': post.tags.map((tag) => tag.name).join(', ')
      }
    });
  }

  static Future createComment(Request req, Response res) async {
    final data = await req.body;
    final postId = req.param('post_id');

    // Validate CSRF token
    if (!req.verifyCsrfToken(data['csrf_token'])) {
      return res.forbidden().sendJson({'error': 'CSRF token mismatch'});
    }

    // Validate and sanitize input
    final validation = await req.validator.validateData(data, {
      'content': 'required|min:5|max:1000',
      'parent_id': 'nullable|exists:comments,id'
    });

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors
      });
    }

    // Sanitize HTML content (allow only safe tags)
    final sanitizedContent = sanitizeHtml(data['content'], {
      'allowedTags': ['p', 'br', 'strong', 'em', 'u', 'a'],
      'allowedAttributes': {
        'a': ['href', 'title']
      }
    });

    final comment = await Comment.create({
      'post_id': postId,
      'user_id': req.user.id,
      'content': sanitizedContent,
      'parent_id': data['parent_id'],
      'created_at': DateTime.now()
    });

    res.created().sendJson({
      'comment': comment.toJson(),
      'message': 'Comment added successfully'
    });
  }
}

// Template with auto-escaping (example)
const postTemplate = 'Template with HTML content and auto-escaping';

const sanitizeHtml = (html, options) => {
  // Basic HTML sanitization (use a proper library in production)
  return html
    .replace(/script/gi, '')
    .replace(/style/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+="[^"]*"/gi, '');
};`

const csrfProtectionCode = `// CSRF Protection Implementation
class CsrfMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    // Generate CSRF token for GET requests
    if (req.method == 'GET') {
      final token = generateCsrfToken();
      req.csrfToken = token;

      // Store token in session
      await req.session.put('csrf_token', token);
    }

    // Verify CSRF token for state-changing requests
    if (['POST', 'PUT', 'PATCH', 'DELETE'].contains(req.method)) {
      final token = req.body['csrf_token'] ?? req.header('X-CSRF-Token');

      if (token == null) {
        return res.forbidden().sendJson({
          'error': 'CSRF token missing',
          'code': 'CSRF_TOKEN_MISSING'
        });
      }

      final sessionToken = await req.session.get('csrf_token');

      if (sessionToken == null || !verifyCsrfToken(token, sessionToken)) {
        return res.forbidden().sendJson({
          'error': 'CSRF token invalid',
          'code': 'CSRF_TOKEN_INVALID'
        });
      }

      // Rotate token after successful verification
      final newToken = generateCsrfToken();
      await req.session.put('csrf_token', newToken);
      req.csrfToken = newToken;
    }

    await next();
  }
}

class SecurityHeadersMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    // CSRF protection headers
    res.header('X-CSRF-Token', req.csrfToken ?? '');

    // CORS headers
    res.cors(
      allowOrigin: req.header('origin') ?? '*',
      allowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
      allowHeaders: 'Content-Type, Authorization, X-CSRF-Token',
      allowCredentials: true
    );

    // Security headers
    res.security(
      enableHsts: true,
      enableCsp: true,
      enableXFrameOptions: true,
      enableXContentTypeOptions: true,
      cspPolicy: "default-src 'self'; script-src 'self' 'nonce-${req.nonce}'; style-src 'self' 'unsafe-inline'"
    );

    await next();
  }
}

// CSRF Token Generation and Verification
String generateCsrfToken() {
  final random = Random.secure();
  final bytes = List<int>.generate(32, (_) => random.nextInt(256));
  return base64Url.encode(bytes);
}

bool verifyCsrfToken(String token, String sessionToken) {
  try {
    final tokenBytes = base64Url.decode(token);
    final sessionBytes = base64Url.decode(sessionToken);

    if (tokenBytes.length != sessionBytes.length) return false;

    // Constant-time comparison to prevent timing attacks
    var result = 0;
    for (var i = 0; i < tokenBytes.length; i++) {
      result |= tokenBytes[i] ^ sessionBytes[i];
    }

    return result == 0;
  } catch (e) {
    return false;
  }
}

// Usage in routes
void setupRoutes(Server server) {
  server.group(
    prefix: '/api',
    middleware: [CsrfMiddleware(), SecurityHeadersMiddleware()],
    routes: (router) {
      router.post('/posts', PostController.create);
      router.put('/posts/:id', PostController.update);
      router.delete('/posts/:id', PostController.delete);
    }
  );

  // Public routes (CSRF still applied but may be less strict)
  server.group(
    prefix: '/auth',
    middleware: [CsrfMiddleware()],
    routes: (router) {
      router.post('/login', AuthController.login);
      router.post('/register', AuthController.register);
      router.post('/logout', AuthController.logout);
    }
  );
}`

const fileUploadSecurityCode = `// Secure File Upload Implementation
class FileUploadController {
  static Future uploadAvatar(Request req, Response res) async {
    // Check if file exists
    if (!req.hasFile('avatar')) {
      return res.badRequest().sendJson({
        'error': 'No avatar file provided',
        'code': 'MISSING_FILE'
      });
    }

    final avatarFile = req.file('avatar');

    if (avatarFile == null) {
      return res.badRequest().sendJson({
        'error': 'Invalid avatar file',
        'code': 'INVALID_FILE'
      });
    }

    // Security checks
    final securityChecks = await performSecurityChecks(avatarFile);

    if (!securityChecks.isValid) {
      return res.badRequest().sendJson({
        'error': securityChecks.error,
        'code': securityChecks.code
      });
    }

    // Generate secure filename
    final userId = req.user.id;
    final extension = avatarFile.extension.toLowerCase();
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    final random = Random.secure().nextInt(10000);
    final filename = 'avatar_${userId}_${timestamp}_${random}.${extension}';

    // Save file to secure location
    final uploadPath = 'storage/app/avatars/$filename';
    await avatarFile.move(uploadPath);

    // Update user profile
    final user = await User.find(userId);
    await user.update({
      'avatar': filename,
      'updated_at': DateTime.now()
    });

    // Generate secure URL
    final avatarUrl = generateSecureFileUrl(filename);

    res.sendJson({
      'message': 'Avatar uploaded successfully',
      'avatar_url': avatarUrl,
      'filename': filename
    });
  }

  static Future uploadDocument(Request req, Response res) async {
    if (!req.hasFile('document')) {
      return res.badRequest().sendJson({
        'error': 'No document file provided'
      });
    }

    final documentFile = req.file('document');
    final userId = req.user.id;

    // Validate file type and size
    final allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (!allowedTypes.contains(documentFile.mimeType)) {
      return res.badRequest().sendJson({
        'error': 'Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed'
      });
    }

    if (documentFile.size > 10 * 1024 * 1024) { // 10MB limit
      return res.badRequest().sendJson({
        'error': 'File too large. Maximum size is 10MB'
      });
    }

    // Scan for viruses (if virus scanner is available)
    final scanResult = await scanFileForViruses(documentFile);

    if (!scanResult.isClean) {
      return res.badRequest().sendJson({
        'error': 'File contains malicious content',
        'code': 'MALICIOUS_FILE'
      });
    }

    // Generate secure filename and path
    final extension = documentFile.extension;
    final timestamp = DateTime.now().millisecondsSinceEpoch;
    final random = Random.secure().nextInt(10000);
    final filename = 'doc_${userId}_${timestamp}_${random}.${extension}';

    // Save to user-specific directory
    final userDir = 'storage/app/documents/users/$userId';
    await Directory(userDir).create(recursive: true);

    final filePath = '$userDir/$filename';
    await documentFile.move(filePath);

    // Store file metadata in database
    final document = await Document.create({
      'user_id': userId,
      'filename': filename,
      'original_name': documentFile.originalName,
      'mime_type': documentFile.mimeType,
      'size': documentFile.size,
      'path': filePath,
      'uploaded_at': DateTime.now()
    });

    res.created().sendJson({
      'document': document.toJson(),
      'message': 'Document uploaded successfully'
    });
  }
}

// Security check functions
Future<SecurityCheckResult> performSecurityChecks(UploadedFile file) async {
  // Check file size
  if (file.size > 5 * 1024 * 1024) { // 5MB for avatars
    return SecurityCheckResult(
      isValid: false,
      error: 'File too large. Maximum size is 5MB',
      code: 'FILE_TOO_LARGE'
    );
  }

  // Check file type
  final allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (!allowedImageTypes.contains(file.mimeType)) {
    return SecurityCheckResult(
      isValid: false,
      error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed',
      code: 'INVALID_FILE_TYPE'
    );
  }

  // Verify file extension matches MIME type
  final extension = file.extension.toLowerCase();
  final expectedExtensions = {
    'image/jpeg': ['jpg', 'jpeg'],
    'image/png': ['png'],
    'image/gif': ['gif'],
    'image/webp': ['webp']
  };

  if (!expectedExtensions[file.mimeType]!.contains(extension)) {
    return SecurityCheckResult(
      isValid: false,
      error: 'File extension does not match file type',
      code: 'EXTENSION_MISMATCH'
    );
  }

  // Check for malicious content in filename
  final maliciousPatterns = RegExp(r'[<>:"/\\|?*\x00-\x1f]');
  if (maliciousPatterns.hasMatch(file.originalName)) {
    return SecurityCheckResult(
      isValid: false,
      error: 'Invalid characters in filename',
      code: 'MALICIOUS_FILENAME'
    );
  }

  return SecurityCheckResult(isValid: true);
}

Future<VirusScanResult> scanFileForViruses(UploadedFile file) async {
  // This is a placeholder - integrate with actual virus scanning service
  // Examples: ClamAV, VirusTotal API, or cloud-based scanners

  try {
    // Read file content
    final bytes = await file.readAsBytes();

    // Check file signatures (basic check)
    final signatures = [
      [0x4D, 0x5A], // EXE files
      [0x7F, 0x45, 0x4C, 0x46], // ELF files
      [0x23, 0x21], // Shell scripts
    ];

    for (final signature in signatures) {
      if (bytes.length >= signature.length) {
        bool matches = true;
        for (int i = 0; i < signature.length; i++) {
          if (bytes[i] != signature[i]) {
            matches = false;
            break;
          }
        }
        if (matches) {
          return VirusScanResult(isClean: false, threat: 'Executable file detected');
        }
      }
    }

    return VirusScanResult(isClean: true);
  } catch (e) {
    // Log error and assume clean if scan fails
    print('Virus scan failed: $e');
    return VirusScanResult(isClean: true);
  }
}

String generateSecureFileUrl(String filename) {
  // Generate time-limited, signed URLs for private files
  final timestamp = DateTime.now().millisecondsSinceEpoch ~/ 1000;
  final expires = timestamp + (24 * 60 * 60); // 24 hours

  final data = '$filename$expires';
  final signature = Hmac(sha256, utf8.encode(Khadem.env.get('FILE_SIGNING_KEY')))
    .convert(utf8.encode(data))
    .toString();

  return '/secure-files/$filename?expires=$expires&signature=$signature';
}

class SecurityCheckResult {
  final bool isValid;
  final String? error;
  final String? code;

  SecurityCheckResult({
    required this.isValid,
    this.error,
    this.code
  });
}

class VirusScanResult {
  final bool isClean;
  final String? threat;

  VirusScanResult({
    required this.isClean,
    this.threat
  });
}`

const apiSecurityCode = `// API Security Best Practices
class ApiController {
  static Future index(Request req, Response res) async {
    // API Key Authentication
    final apiKey = req.header('X-API-Key');

    if (apiKey == null) {
      return res.unauthorized().sendJson({
        'error': 'API key required',
        'code': 'MISSING_API_KEY'
      });
    }

    final client = await ApiClient.where('api_key', apiKey).first();

    if (client == null || !client.isActive) {
      return res.unauthorized().sendJson({
        'error': 'Invalid API key',
        'code': 'INVALID_API_KEY'
      });
    }

    // Rate limiting
    final rateLimitKey = 'api_requests:${client.id}';
    final requests = await Cache.get(rateLimitKey, 0);

    if (requests >= client.rateLimit) {
      res.header('X-Rate-Limit-Limit', client.rateLimit.toString());
      res.header('X-Rate-Limit-Remaining', '0');
      res.header('X-Rate-Limit-Reset', DateTime.now().add(Duration(hours: 1)).toIso8601String());

      return res.tooManyRequests().sendJson({
        'error': 'Rate limit exceeded',
        'code': 'RATE_LIMIT_EXCEEDED'
      });
    }

    // Increment request count
    await Cache.put(rateLimitKey, requests + 1, Duration(hours: 1));

    // Set rate limit headers
    res.header('X-Rate-Limit-Limit', client.rateLimit.toString());
    res.header('X-Rate-Limit-Remaining', (client.rateLimit - requests - 1).toString());
    res.header('X-Rate-Limit-Reset', DateTime.now().add(Duration(hours: 1)).toIso8601String());

    // Security headers
    res.security(
      enableHsts: true,
      enableCsp: true,
      enableXFrameOptions: true,
      enableXContentTypeOptions: true,
      cspPolicy: "default-src 'none'; script-src 'self'; connect-src 'self'"
    );

    // Process request
    final data = await fetchApiData(req.query);

    res.sendJson({
      'data': data,
      'meta': {
        'timestamp': DateTime.now().toIso8601String(),
        'version': 'v1',
        'request_id': generateRequestId()
      }
    });
  }

  static Future createResource(Request req, Response res) async {
    final data = await req.body;

    // Input validation with strict rules
    final validation = await req.validator.validateData(data, {
      'name': 'required|min:1|max:100|regex:^[a-zA-Z0-9\\s_-]+\$',
      'description': 'nullable|max:500',
      'type': 'required|in:user,admin,system',
      'metadata': 'nullable|json|max:2048'
    });

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors,
        'code': 'VALIDATION_ERROR'
      });
    }

    // Sanitize input
    final sanitizedData = {
      'name': data['name'].trim(),
      'description': data['description']?.trim(),
      'type': data['type'],
      'metadata': data['metadata'] != null ? jsonDecode(data['metadata']) : null,
      'created_by': req.apiClient.id,
      'created_at': DateTime.now(),
      'updated_at': DateTime.now()
    };

    final resource = await Resource.create(sanitizedData);

    // Log API action
    await ApiLog.create({
      'client_id': req.apiClient.id,
      'action': 'create_resource',
      'resource_type': 'resource',
      'resource_id': resource.id,
      'ip_address': req.ip,
      'user_agent': req.header('User-Agent'),
      'timestamp': DateTime.now()
    });

    res.created().sendJson({
      'resource': resource.toJson(),
      'message': 'Resource created successfully'
    });
  }
}

// API Key Management
class ApiKeyController {
  static Future generateKey(Request req, Response res) async {
    final data = await req.body;

    final validation = await req.validator.validateData(data, {
      'name': 'required|min:1|max:100',
      'rate_limit': 'required|numeric|min:1|max:10000',
      'permissions': 'required|array'
    });

    if (!validation.isValid) {
      return res.badRequest().sendJson({
        'error': 'Validation failed',
        'fields': validation.errors
      });
    }

    // Generate secure API key
    final apiKey = generateSecureApiKey();
    final hashedKey = await Hash.make(apiKey); // Store hash, not plain key

    final client = await ApiClient.create({
      'name': data['name'],
      'api_key_hash': hashedKey,
      'rate_limit': data['rate_limit'],
      'permissions': jsonEncode(data['permissions']),
      'is_active': true,
      'created_by': req.user.id,
      'created_at': DateTime.now(),
      'last_used_at': null
    });

    res.created().sendJson({
      'client': {
        'id': client.id,
        'name': client.name,
        'api_key': apiKey, // Only returned once
        'rate_limit': client.rate_limit,
        'permissions': data['permissions'],
        'created_at': client.created_at
      },
      'message': 'API key generated successfully',
      'warning': 'Save this API key securely. It will not be shown again.'
    });
  }

  static Future revokeKey(Request req, Response res) async {
    final clientId = req.param('id');

    final client = await ApiClient.find(clientId);

    if (client == null) {
      return res.notFound().sendJson({'error': 'API client not found'});
    }

    if (client.created_by != req.user.id && !req.user.hasRole('admin')) {
      return res.forbidden().sendJson({'error': 'Access denied'});
    }

    await client.update({
      'is_active': false,
      'revoked_at': DateTime.now(),
      'revoked_by': req.user.id
    });

    // Log revocation
    await ApiLog.create({
      'client_id': client.id,
      'action': 'revoke_api_key',
      'ip_address': req.ip,
      'user_agent': req.header('User-Agent'),
      'timestamp': DateTime.now()
    });

    res.sendJson({
      'message': 'API key revoked successfully'
    });
  }
}

String generateSecureApiKey() {
  final random = Random.secure();
  final bytes = List<int>.generate(32, (_) => random.nextInt(256));
  return 'kh_${base64Url.encode(bytes).replaceAll("=", "")}';
}

String generateRequestId() {
  final timestamp = DateTime.now().millisecondsSinceEpoch;
  final random = Random.secure().nextInt(1000000);
  return '\$timestamp\$random';
}`

const rateLimitingCode = `// Rate Limiting Implementation
class RateLimitMiddleware implements Middleware {
  final Map<String, RateLimiter> _limiters = {};

  @override
  Future handle(Request req, Response res, next) async {
    final clientIP = req.ip;
    final route = req.route?.path ?? req.path;
    final method = req.method;

    // Create rate limiter key
    final key = '$method:$route:$clientIP';

    // Get or create rate limiter
    final limiter = _limiters.putIfAbsent(key, () => RateLimiter(
      maxRequests: getRateLimitForRoute(route),
      window: Duration(minutes: 1)
    ));

    // Check if request is allowed
    final result = await limiter.check(clientIP);

    // Set rate limit headers
    res.header('X-Rate-Limit-Limit', result.limit.toString());
    res.header('X-Rate-Limit-Remaining', result.remaining.toString());
    res.header('X-Rate-Limit-Reset', result.resetAt.toIso8601String());

    if (!result.allowed) {
      return res.tooManyRequests().sendJson({
        'error': 'Rate limit exceeded',
        'code': 'RATE_LIMIT_EXCEEDED',
        'retry_after': result.resetAt.difference(DateTime.now()).inSeconds
      });
    }

    await next();
  }
}

class RateLimiter {
  final int maxRequests;
  final Duration window;
  final Map<String, List<DateTime>> _requests = {};

  RateLimiter({
    required this.maxRequests,
    required this.window
  });

  Future<RateLimitResult> check(String identifier) async {
    final now = DateTime.now();
    final windowStart = now.subtract(window);

    // Get existing requests for this identifier
    final requests = _requests.putIfAbsent(identifier, () => []);

    // Remove old requests outside the window
    requests.removeWhere((time) => time.isBefore(windowStart));

    // Check if limit exceeded
    final allowed = requests.length < maxRequests;

    if (allowed) {
      requests.add(now);
    }

    final resetAt = now.add(window);
    final remaining = max(0, maxRequests - requests.length);

    return RateLimitResult(
      allowed: allowed,
      limit: maxRequests,
      remaining: remaining,
      resetAt: resetAt
    );
  }
}

class RateLimitResult {
  final bool allowed;
  final int limit;
  final int remaining;
  final DateTime resetAt;

  RateLimitResult({
    required this.allowed,
    required this.limit,
    required this.remaining,
    required this.resetAt
  });
}

// Route-specific rate limits
int getRateLimitForRoute(String route) {
  // Authentication routes - stricter limits
  if (route.startsWith('/auth/')) {
    return 5; // 5 requests per minute
  }

  // API routes
  if (route.startsWith('/api/')) {
    return 100; // 100 requests per minute
  }

  // File upload routes
  if (route.contains('/upload')) {
    return 10; // 10 uploads per minute
  }

  // Search routes
  if (route.contains('/search')) {
    return 30; // 30 searches per minute
  }

  // Default limit
  return 60; // 60 requests per minute
}

// Advanced rate limiting with Redis
class RedisRateLimiter {
  static Future<RateLimitResult> check(String key, int maxRequests, Duration window) async {
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    final windowKey = '\$key:\${now ~/ window.inSeconds}';

    // Use Redis pipeline for atomic operations
    final pipeline = Redis.pipeline();
    pipeline.zadd(windowKey, {'\$now': '\$now'});
    pipeline.zremrangebyscore(windowKey, 0, now - window.inSeconds);
    pipeline.zcard(windowKey);
    pipeline.expire(windowKey, window.inSeconds);

    final results = await pipeline.exec();
    final requestCount = results[2] as int;

    final allowed = requestCount <= maxRequests;
    final remaining = max(0, maxRequests - requestCount);
    final resetAt = DateTime.fromMillisecondsSinceEpoch((now + window.inSeconds) * 1000);

    return RateLimitResult(
      allowed: allowed,
      limit: maxRequests,
      remaining: remaining,
      resetAt: resetAt
    );
  }
}

// Distributed rate limiting for multiple servers
class DistributedRateLimiter {
  static Future<RateLimitResult> check(String identifier, String resource, int maxRequests, Duration window) async {
    final now = DateTime.now();
    final key = 'ratelimit:\$resource:\$identifier';

    // Use Redis for distributed counting
    final count = await Redis.incr(key);

    if (count == 1) {
      // First request, set expiration
      await Redis.expire(key, window.inSeconds);
    }

    final allowed = count <= maxRequests;
    final remaining = max(0, maxRequests - count + 1); // +1 because we already incremented
    final resetAt = now.add(window);

    return RateLimitResult(
      allowed: allowed,
      limit: maxRequests,
      remaining: remaining,
      resetAt: resetAt
    );
  }
}

// Usage in routes
void setupRoutes(Server server) {
  server.group(
    prefix: '/api',
    middleware: [RateLimitMiddleware()],
    routes: (router) {
      router.get('/users', UserController.index);
      router.post('/users', UserController.create);
      router.get('/search', SearchController.search);
    }
  );

  // Different limits for different endpoints
  server.group(
    prefix: '/auth',
    middleware: [AuthRateLimitMiddleware()],
    routes: (router) {
      router.post('/login', AuthController.login);
      router.post('/register', AuthController.register);
    }
  );
}`

const securityMiddlewareCode = `// Security Middleware Stack
class SecurityMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    // 1. HTTPS Enforcement
    if (Khadem.env.get('APP_ENV') == 'production' && !req.isSecure) {
      return res.redirect('https://${req.host}${req.path}', status: 301);
    }

    // 2. Security Headers
    res.security(
      enableHsts: true,
      enableCsp: true,
      enableXFrameOptions: true,
      enableXContentTypeOptions: true,
      enableReferrerPolicy: true,
      cspPolicy: getCspPolicy(req.path)
    );

    // 3. CORS Configuration
    res.cors(
      allowOrigin: getAllowedOrigins(req.header('origin')),
      allowMethods: 'GET, POST, PUT, DELETE, OPTIONS',
      allowHeaders: 'Content-Type, Authorization, X-CSRF-Token, X-API-Key',
      allowCredentials: true,
      maxAge: Duration(hours: 24)
    );

    // 4. Request Size Limits
    final contentLength = int.tryParse(req.header('Content-Length') ?? '0') ?? 0;
    final maxSize = getMaxRequestSize(req.path);

    if (contentLength > maxSize) {
      return res.requestEntityTooLarge().sendJson({
        'error': 'Request too large',
        'max_size': maxSize,
        'code': 'REQUEST_TOO_LARGE'
      });
    }

    // 5. Request Timeout
    final timeout = getRequestTimeout(req.path);
    final completer = Completer();

    final timer = Timer(timeout, () {
      if (!completer.isCompleted) {
        completer.completeError(TimeoutException('Request timeout'));
      }
    });

    try {
      await next();
      timer.cancel();
    } catch (e) {
      timer.cancel();
      if (e is TimeoutException) {
        return res.requestTimeout().sendJson({
          'error': 'Request timeout',
          'code': 'REQUEST_TIMEOUT'
        });
      }
      rethrow;
    }
  }
}

class InputValidationMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    // Sanitize query parameters
    final sanitizedQuery = {};
    for (final entry in req.query.entries) {
      sanitizedQuery[entry.key] = sanitizeString(entry.value);
    }
    req.query = sanitizedQuery;

    // Sanitize route parameters
    final sanitizedParams = {};
    for (final entry in req.params.entries) {
      sanitizedParams[entry.key] = sanitizeString(entry.value);
    }
    req.params = sanitizedParams;

    // Validate and sanitize body for POST/PUT/PATCH
    if (['POST', 'PUT', 'PATCH'].contains(req.method) && req.hasBody) {
      final body = await req.body;

      if (body is Map<String, dynamic>) {
        req.body = sanitizeObject(body);
      } else if (body is String) {
        req.body = sanitizeString(body);
      }
    }

    await next();
  }
}

class LoggingMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    final startTime = DateTime.now();
    final requestId = generateRequestId();

    // Log request
    await logRequest(req, requestId, startTime);

    try {
      await next();

      // Log successful response
      final duration = DateTime.now().difference(startTime);
      await logResponse(res, requestId, duration, null);

    } catch (e, stackTrace) {
      // Log error response
      final duration = DateTime.now().difference(startTime);
      await logResponse(res, requestId, duration, e);

      // Don't rethrow - let error handler deal with it
    }
  }
}

class ErrorHandlingMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    try {
      await next();
    } catch (e, stackTrace) {
      // Log error
      await Logger.error('Unhandled error', e, stackTrace);

      // Don't expose internal errors in production
      final isProduction = Khadem.env.get('APP_ENV') == 'production';

      final errorResponse = {
        'error': isProduction ? 'Internal server error' : e.toString(),
        'code': 'INTERNAL_ERROR',
        'request_id': req.requestId ?? generateRequestId(),
        'timestamp': DateTime.now().toIso8601String()
      };

      if (!isProduction) {
        errorResponse['stack_trace'] = stackTrace.toString();
      }

      res.statusCode(500).sendJson(errorResponse);
    }
  }
}

// Utility functions
String getCspPolicy(String path) {
  if (path.startsWith('/admin')) {
    return "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
  }

  if (path.startsWith('/api')) {
    return "default-src 'none'; script-src 'self'; connect-src 'self';";
  }

  return "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;";
}

List<String> getAllowedOrigins(String? origin) {
  final allowedOrigins = Khadem.env.get('ALLOWED_ORIGINS', '').split(',');

  if (origin != null && allowedOrigins.contains(origin)) {
    return [origin];
  }

  return ['*']; // Or return [] for no CORS
}

int getMaxRequestSize(String path) {
  if (path.contains('/upload')) {
    return 50 * 1024 * 1024; // 50MB for uploads
  }

  if (path.startsWith('/api')) {
    return 10 * 1024 * 1024; // 10MB for API
  }

  return 1 * 1024 * 1024; // 1MB default
}

Duration getRequestTimeout(String path) {
  if (path.contains('/upload')) {
    return Duration(minutes: 5);
  }

  if (path.contains('/export') || path.contains('/report')) {
    return Duration(minutes: 2);
  }

  return Duration(seconds: 30);
}

String sanitizeString(String input) {
  if (input == null) return '';

  // Remove null bytes and other dangerous characters
  return input
    .replaceAll('\\x00', '')
    .replaceAll('\\r\\n', '\\n')
    .replaceAll('\\r', '\\n')
    .trim();
}

Map<String, dynamic> sanitizeObject(Map<String, dynamic> input) {
  final sanitized = <String, dynamic>{};

  for (final entry in input.entries) {
    final key = sanitizeString(entry.key);
    final value = entry.value;

    if (value is String) {
      sanitized[key] = sanitizeString(value);
    } else if (value is Map<String, dynamic>) {
      sanitized[key] = sanitizeObject(value);
    } else if (value is List) {
      sanitized[key] = value.map((item) {
        if (item is String) return sanitizeString(item);
        if (item is Map<String, dynamic>) return sanitizeObject(item);
        return item;
      }).toList();
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

Future logRequest(Request req, String requestId, DateTime startTime) async {
  await Logger.info('Request', {
    'request_id': requestId,
    'method': req.method,
    'path': req.path,
    'ip': req.ip,
    'user_agent': req.header('User-Agent'),
    'timestamp': startTime.toIso8601String()
  });
}

Future logResponse(Response res, String requestId, Duration duration, dynamic error) async {
  final level = error != null ? 'error' : 'info';

  await Logger.log(level, 'Response', {
    'request_id': requestId,
    'status_code': res.statusCode,
    'duration_ms': duration.inMilliseconds,
    'error': error?.toString(),
    'timestamp': DateTime.now().toIso8601String()
  });
}

String generateRequestId() {
  final timestamp = DateTime.now().millisecondsSinceEpoch;
  final random = Random.secure().nextInt(1000000);
  return '\$timestamp\$random';
}

// Register middleware stack
void setupMiddleware(Server server) {
  server.middleware([
    SecurityMiddleware(),
    RateLimitMiddleware(),
    InputValidationMiddleware(),
    LoggingMiddleware(),
    ErrorHandlingMiddleware(),
    // Add authentication middleware here
    // AuthenticationMiddleware(),
  ]);
}`

const environmentSecurityCode = `// Environment Security Configuration
class EnvironmentSecurity {
  static void validateEnvironment() {
    final requiredVars = [
      'APP_KEY',
      'DB_PASSWORD',
      'JWT_SECRET',
      'REDIS_PASSWORD',
      'MAIL_PASSWORD'
    ];

    final missing = requiredVars.where((varName) {
      final value = Khadem.env.get(varName);
      return value == null || value.isEmpty;
    }).toList();

    if (missing.isNotEmpty) {
      throw Exception('Missing required environment variables: ${missing.join(", ")}');
    }

    // Validate APP_KEY format
    final appKey = Khadem.env.get('APP_KEY');
    if (appKey.length < 32) {
      throw Exception('APP_KEY must be at least 32 characters long');
    }

    // Validate database URL doesn't contain sensitive info
    final dbUrl = Khadem.env.get('DATABASE_URL');
    if (dbUrl.contains('password') && !dbUrl.contains('@')) {
      Logger.warning('Database URL may expose password in logs');
    }
  }

  static void secureEnvironment() {
    // Remove sensitive environment variables from process
    final sensitiveVars = [
      'DB_PASSWORD',
      'JWT_SECRET',
      'REDIS_PASSWORD',
      'MAIL_PASSWORD',
      'AWS_SECRET_ACCESS_KEY'
    ];

    for (final varName in sensitiveVars) {
      Platform.environment.remove(varName);
    }
  }
}

// Secure Configuration Loading
class SecureConfig {
  static Future<Map<String, dynamic>> loadConfig() async {
    final config = <String, dynamic>{};

    // Load from secure sources
    config.addAll(await loadFromVault());
    config.addAll(await loadFromEnvironment());
    config.addAll(await loadFromDatabase());

    // Validate configuration
    await validateConfiguration(config);

    // Cache encrypted config
    await cacheSecureConfig(config);

    return config;
  }

  static Future<Map<String, dynamic>> loadFromVault() async {
    // Integrate with HashiCorp Vault, AWS Secrets Manager, etc.
    final vault = VaultClient(
      address: Khadem.env.get('VAULT_ADDR'),
      token: Khadem.env.get('VAULT_TOKEN')
    );

    try {
      final secrets = await vault.read('secret/khadem/config');
      return secrets.data ?? {};
    } catch (e) {
      Logger.error('Failed to load secrets from vault', e);
      return {};
    }
  }

  static Future<Map<String, dynamic>> loadFromEnvironment() async {
    final envConfig = <String, dynamic>{};

    // Only load non-sensitive config from environment
    final safeVars = [
      'APP_NAME',
      'APP_ENV',
      'APP_DEBUG',
      'APP_URL',
      'DB_HOST',
      'DB_PORT',
      'DB_DATABASE',
      'REDIS_HOST',
      'REDIS_PORT',
      'MAIL_HOST',
      'MAIL_PORT',
      'CACHE_DRIVER',
      'SESSION_DRIVER'
    ];

    for (final varName in safeVars) {
      final value = Khadem.env.get(varName);
      if (value != null) {
        envConfig[varName.toLowerCase()] = value;
      }
    }

    return envConfig;
  }

  static Future<Map<String, dynamic>> loadFromDatabase() async {
    // Load tenant-specific configuration
    final tenantId = Khadem.env.get('TENANT_ID');

    if (tenantId != null) {
      final tenant = await Tenant.where('id', tenantId).first();
      return tenant?.config ?? {};
    }

    return {};
  }

  static Future validateConfiguration(Map<String, dynamic> config) async {
    // Validate database connection
    try {
      await Database.connection().rawQuery('SELECT 1');
    } catch (e) {
      throw Exception('Database connection failed: $e');
    }

    // Validate Redis connection
    try {
      await Redis.ping();
    } catch (e) {
      Logger.warning('Redis connection failed: $e');
    }

    // Validate required configuration
    final requiredKeys = ['app.name', 'database.default'];
    for (final key in requiredKeys) {
      if (!config.containsKey(key)) {
        throw Exception('Missing required configuration: $key');
      }
    }
  }

  static Future cacheSecureConfig(Map<String, dynamic> config) async {
    // Encrypt and cache configuration
    final encrypted = await encryptConfig(config);
    await Cache.forever('app.config', encrypted);
  }

  static Future<Map<String, dynamic>> getCachedConfig() async {
    final encrypted = await Cache.get('app.config');
    if (encrypted != null) {
      return await decryptConfig(encrypted);
    }

    // Fallback to loading fresh config
    return await loadConfig();
  }
}

// Encryption utilities
Future<String> encryptConfig(Map<String, dynamic> config) async {
  final key = utf8.encode(Khadem.env.get('CONFIG_ENCRYPTION_KEY'));
  final iv = IV.fromSecureRandom(16);

  final encrypter = Encrypter(AES(key));
  final encrypted = encrypter.encrypt(jsonEncode(config), iv: iv);

  return jsonEncode({
    'data': encrypted.base64,
    'iv': iv.base64
  });
}

Future<Map<String, dynamic>> decryptConfig(String encrypted) async {
  final key = utf8.encode(Khadem.env.get('CONFIG_ENCRYPTION_KEY'));
  final data = jsonDecode(encrypted);

  final encrypter = Encrypter(AES(key));
  final iv = IV.fromBase64(data['iv']);
  final decrypted = encrypter.decrypt64(data['data'], iv: iv);

  return jsonDecode(decrypted);
}

// Secure logging
class SecureLogger {
  static Future info(String message, [Map<String, dynamic>? context]) async {
    final logEntry = {
      'level': 'info',
      'message': message,
      'context': sanitizeLogContext(context),
      'timestamp': DateTime.now().toIso8601String(),
      'request_id': getCurrentRequestId()
    };

    await writeLogEntry(logEntry);
  }

  static Future error(String message, dynamic error, [StackTrace? stackTrace]) async {
    final logEntry = {
      'level': 'error',
      'message': message,
      'error': error.toString(),
      'stack_trace': stackTrace?.toString(),
      'timestamp': DateTime.now().toIso8601String(),
      'request_id': getCurrentRequestId()
    };

    await writeLogEntry(logEntry);
  }

  static Map<String, dynamic>? sanitizeLogContext(Map<String, dynamic>? context) {
    if (context == null) return null;

    final sanitized = Map<String, dynamic>.from(context);

    // Remove sensitive fields
    final sensitiveFields = [
      'password',
      'token',
      'api_key',
      'secret',
      'credit_card',
      'ssn'
    ];

    for (final field in sensitiveFields) {
      if (sanitized.containsKey(field)) {
        sanitized[field] = '[REDACTED]';
      }
    }

    return sanitized;
  }

  static Future writeLogEntry(Map<String, dynamic> entry) async {
    final logFile = File('storage/logs/security.log');
    await logFile.writeAsString(
      jsonEncode(entry) + '\\n',
      mode: FileMode.append
    );

    // Also write to external logging service
    await sendToExternalLogger(entry);
  }

  static Future sendToExternalLogger(Map<String, dynamic> entry) async {
    // Send to services like DataDog, LogRocket, etc.
    try {
      final response = await HttpClient().post(
        Uri.parse(Khadem.env.get('LOGGING_SERVICE_URL')),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${Khadem.env.get('LOGGING_SERVICE_TOKEN')}'
        },
        body: jsonEncode(entry)
      );

      if (response.statusCode != 200) {
        print('Failed to send log to external service: ${response.statusCode}');
      }
    } catch (e) {
      print('Error sending log to external service: $e');
    }
  }
}

// Application startup
void main() async {
  // Validate environment before starting
  EnvironmentSecurity.validateEnvironment();

  // Initialize secure configuration
  final config = await SecureConfig.loadConfig();

  // Secure the environment
  EnvironmentSecurity.secureEnvironment();

  // Initialize Khadem with secure config
  await Khadem.initialize(config);

  // Start server
  final server = Server();
  setupMiddleware(server);
  setupRoutes(server);

  server.listen(3000, () {
    print('Server started securely on port 3000');
  });
}`

const securityMonitoringCode = `// Security Monitoring and Alerting
class SecurityMonitor {
  static final List<SecurityEvent> _events = [];
  static Timer? _alertTimer;

  static void initialize() {
    // Start periodic security checks
    _alertTimer = Timer.periodic(Duration(minutes: 5), (_) => checkSecurity());

    // Setup real-time monitoring
    setupRealTimeMonitoring();
  }

  static void logSecurityEvent(String type, Map<String, dynamic> data) {
    final event = SecurityEvent(
      type: type,
      data: data,
      timestamp: DateTime.now(),
      ip: data['ip'] ?? 'unknown',
      userId: data['user_id']
    );

    _events.add(event);

    // Immediate alerts for critical events
    if (isCriticalEvent(type)) {
      sendImmediateAlert(event);
    }

    // Keep only recent events
    if (_events.length > 1000) {
      _events.removeRange(0, 100);
    }
  }

  static bool isCriticalEvent(String type) {
    return [
      'brute_force_attempt',
      'sql_injection_attempt',
      'xss_attempt',
      'unauthorized_access',
      'data_breach'
    ].contains(type);
  }

  static Future checkSecurity() async {
    // Check for suspicious patterns
    await checkFailedLogins();
    await checkUnusualTraffic();
    await checkSecurityMisconfigurations();
    await checkExpiredCertificates();

    // Generate security report
    await generateSecurityReport();
  }

  static Future checkFailedLogins() async {
    final failedLogins = await Database.query()
      .from('login_attempts')
      .where('created_at', '>', DateTime.now().subtract(Duration(hours: 1)))
      .where('success', false)
      .count();

    if (failedLogins > 50) {
      logSecurityEvent('brute_force_suspicion', {
        'failed_attempts': failedLogins,
        'time_window': '1 hour'
      });
    }
  }

  static Future checkUnusualTraffic() async {
    // Analyze traffic patterns
    final trafficStats = await Database.query()
      .from('request_logs')
      .selectRaw('ip_address, COUNT(*) as request_count')
      .where('created_at', '>', DateTime.now().subtract(Duration(minutes: 10)))
      .groupBy('ip_address')
      .having('request_count', '>', 100)
      .get();

    for (final stat in trafficStats) {
      logSecurityEvent('unusual_traffic', {
        'ip': stat['ip_address'],
        'request_count': stat['request_count'],
        'time_window': '10 minutes'
      });
    }
  }

  static Future checkSecurityMisconfigurations() async {
    // Check for common misconfigurations
    final checks = [
      Check(
        name: 'debug_mode',
        condition: () => Khadem.env.get('APP_DEBUG') != 'true',
        message: 'Debug mode is enabled in production'
      ),
      Check(
        name: 'secure_cookies',
        condition: () => Khadem.env.get('SESSION_SECURE_COOKIE') == 'true',
        message: 'Secure cookies are not enabled'
      ),
      Check(
        name: 'https_only',
        condition: () => Khadem.env.get('APP_URL')?.startsWith('https') ?? false,
        message: 'Application is not using HTTPS'
      )
    ];

    for (final check in checks) {
      if (!await check.condition()) {
        logSecurityEvent('misconfiguration', {
          'check': check.name,
          'message': check.message
        });
      }
    }
  }

  static Future checkExpiredCertificates() async {
    // Check SSL certificate expiration
    try {
      final certInfo = await getCertificateInfo();
      final daysUntilExpiry = certInfo.expiry.difference(DateTime.now()).inDays;

      if (daysUntilExpiry < 30) {
        logSecurityEvent('certificate_expiring', {
          'days_remaining': daysUntilExpiry,
          'expiry_date': certInfo.expiry.toIso8601String()
        });
      }
    } catch (e) {
      logSecurityEvent('certificate_check_failed', {
        'error': e.toString()
      });
    }
  }

  static Future generateSecurityReport() async {
    final report = {
      'period': 'last_24_hours',
      'failed_logins': await getFailedLoginCount(),
      'blocked_ips': await getBlockedIPCount(),
      'security_events': _events.where((e) =>
        e.timestamp.isAfter(DateTime.now().subtract(Duration(hours: 24)))
      ).length,
      'top_attack_vectors': await getTopAttackVectors(),
      'generated_at': DateTime.now().toIso8601String()
    };

    // Store report
    await Database.table('security_reports').insert(report);

    // Send report to administrators
    await sendSecurityReport(report);
  }

  static Future sendImmediateAlert(SecurityEvent event) async {
    final alert = {
      'type': 'security_alert',
      'severity': 'high',
      'event': event.type,
      'details': event.data,
      'timestamp': event.timestamp.toIso8601String(),
      'ip': event.ip
    };

    // Send to multiple channels
    await Future.wait([
      sendEmailAlert(alert),
      sendSlackAlert(alert),
      sendSMSAlert(alert)
    ]);
  }

  static Future sendSecurityReport(Map<String, dynamic> report) async {
    // Send weekly security report
    final admins = await User.where('role', 'admin').get();

    for (final admin in admins) {
      await Mail.send(
        admin.email,
        'Weekly Security Report',
        'security-report',
        {'report': report}
      );
    }
  }
}

class SecurityEvent {
  final String type;
  final Map<String, dynamic> data;
  final DateTime timestamp;
  final String ip;
  final int? userId;

  SecurityEvent({
    required this.type,
    required this.data,
    required this.timestamp,
    required this.ip,
    this.userId
  });
}

class Check {
  final String name;
  final Future<bool> Function() condition;
  final String message;

  Check({
    required this.name,
    required this.condition,
    required this.message
  });
}

// Middleware for security monitoring
class SecurityMonitoringMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    final startTime = DateTime.now();

    try {
      await next();

      final duration = DateTime.now().difference(startTime);

      // Log successful request
      await Database.table('request_logs').insert({
        'method': req.method,
        'path': req.path,
        'ip_address': req.ip,
        'user_agent': req.header('User-Agent'),
        'status_code': res.statusCode,
        'duration_ms': duration.inMilliseconds,
        'created_at': DateTime.now()
      });

      // Check for suspicious patterns
      if (isSuspiciousRequest(req)) {
        SecurityMonitor.logSecurityEvent('suspicious_request', {
          'method': req.method,
          'path': req.path,
          'ip': req.ip,
          'user_agent': req.header('User-Agent'),
          'status_code': res.statusCode
        });
      }

    } catch (e) {
      // Log failed request
      await Database.table('request_logs').insert({
        'method': req.method,
        'path': req.path,
        'ip_address': req.ip,
        'user_agent': req.header('User-Agent'),
        'status_code': 500,
        'error': e.toString(),
        'created_at': DateTime.now()
      });

      SecurityMonitor.logSecurityEvent('request_error', {
        'method': req.method,
        'path': req.path,
        'ip': req.ip,
        'error': e.toString()
      });

      rethrow;
    }
  }
}

bool isSuspiciousRequest(Request req) {
  // Check for common attack patterns
  final suspiciousPatterns = [
    RegExp(r'\\.\\./'), // Directory traversal
    RegExp(r'<script', caseSensitive: false), // XSS attempts
    RegExp(r'union.*select', caseSensitive: false), // SQL injection
    RegExp(r'eval\\(', caseSensitive: false), // Code injection
  ];

  final checkString = '${req.method} ${req.path} ${req.query}';

  return suspiciousPatterns.any((pattern) => pattern.hasMatch(checkString));
}

// Setup monitoring
void setupSecurityMonitoring(Server server) {
  SecurityMonitor.initialize();

  server.middleware([
    SecurityMonitoringMiddleware(),
    // Other middleware...
  ]);
}

// Helper functions
Future<int> getFailedLoginCount() async {
  return await Database.table('login_attempts')
    .where('success', false)
    .where('created_at', '>', DateTime.now().subtract(Duration(hours: 24)))
    .count();
}

Future<int> getBlockedIPCount() async {
  return await Database.table('blocked_ips')
    .where('created_at', '>', DateTime.now().subtract(Duration(hours: 24)))
    .count();
}

Future<List<Map<String, dynamic>>> getTopAttackVectors() async {
  return await Database.query()
    .from('security_events')
    .selectRaw('event_type, COUNT(*) as count')
    .where('created_at', '>', DateTime.now().subtract(Duration(hours: 24)))
    .groupBy('event_type')
    .orderBy('count', 'desc')
    .limit(10)
    .get();
}

Future<CertificateInfo> getCertificateInfo() async {
  // Implementation to check SSL certificate
  // This would integrate with certificate authorities or monitoring services
  throw UnimplementedError('Certificate checking not implemented');
}

class CertificateInfo {
  final DateTime expiry;
  final String issuer;
  final List<String> domains;

  CertificateInfo({
    required this.expiry,
    required this.issuer,
    required this.domains
  });
}

// Alert channels
Future sendEmailAlert(Map<String, dynamic> alert) async {
  // Send email alert to security team
}

Future sendSlackAlert(Map<String, dynamic> alert) async {
  // Send Slack notification
}

Future sendSMSAlert(Map<String, dynamic> alert) async {
  // Send SMS alert for critical issues
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
