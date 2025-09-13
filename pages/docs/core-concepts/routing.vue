<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Routing System</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Clean, modular HTTP routing with parameter support, middleware, and route groups.
        </p>
      </header>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Basic Routes</h2>

        <CodeBlock
          :code="basicRoutesCode"
          language="dart"
          title="HTTP Method Routes"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Supported Methods</h3>
            <div class="space-y-1 text-sm">
              <div><code class="text-blue-600">GET</code> - Retrieve data</div>
              <div><code class="text-green-600">POST</code> - Create resources</div>
              <div><code class="text-orange-600">PUT</code> - Update resources</div>
              <div><code class="text-purple-600">PATCH</code> - Partial updates</div>
              <div><code class="text-red-600">DELETE</code> - Remove resources</div>
              <div><code class="text-gray-600">HEAD</code> - Headers only</div>
              <div><code class="text-gray-600">OPTIONS</code> - CORS preflight</div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Handler Signature</h3>
            <CodeBlock :code="handlerSignatureCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Async handlers with Request/Response objects
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Parameters</h2>

        <CodeBlock
          :code="routeParamsCode"
          language="dart"
          title="Parameterized Routes"
        />

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">Parameter Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
            <li><code>:param</code> syntax for named parameters</li>
            <li>Automatic parameter extraction</li>
            <li>Type-safe parameter access</li>
            <li>Regex-based matching</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Groups</h2>

        <CodeBlock
          :code="routeGroupsCode"
          language="dart"
          title="Organizing Routes with Groups"
        />

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Group Benefits</h3>
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Shared URL prefixes</li>
              <li>Common middleware</li>
              <li>Better organization</li>
              <li>Nested groups supported</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium mb-2">Generated Routes</h3>
            <CodeBlock :code="groupRoutesCode" language="text" />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Middleware Integration</h2>

        <CodeBlock
          :code="middlewareCode"
          language="dart"
          title="Middleware in Routes"
        />

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Middleware Levels</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong class="text-green-700 dark:text-green-300">Global</strong>
              <p class="text-green-600 dark:text-green-400">All routes</p>
            </div>
            <div>
              <strong class="text-green-700 dark:text-green-300">Group</strong>
              <p class="text-green-600 dark:text-green-400">Group routes</p>
            </div>
            <div>
              <strong class="text-green-700 dark:text-green-300">Route</strong>
              <p class="text-green-600 dark:text-green-400">Specific route</p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Static File Serving</h2>

        <CodeBlock
          :code="staticFilesCode"
          language="dart"
          title="Serving Static Assets"
        />

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-2">Static Serving Features</h3>
          <ul class="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
            <li>Automatic file type detection</li>
            <li>Directory browsing disabled</li>
            <li>Configurable root directory</li>
            <li>Efficient caching headers</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Advanced Patterns</h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Query Parameters</h3>
            <CodeBlock :code="queryParamsCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Access URL query strings and form data
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Response Types</h3>
            <CodeBlock :code="responseTypesCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              JSON, HTML, files, and streaming responses
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Complete API Example</h2>

        <CodeBlock
          :code="completeApiCode"
          language="dart"
          title="Full REST API Setup"
        />
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Recommendations</h3>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use route groups for logical organization</li>
              <li>Apply middleware at the appropriate level</li>
              <li>Use descriptive parameter names</li>
              <li>Keep handlers focused and testable</li>
              <li>Validate input parameters</li>
            </ul>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Avoid</h3>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Don't put business logic in route handlers</li>
              <li>Don't create deeply nested groups</li>
              <li>Don't use generic parameter names</li>
              <li>Don't skip input validation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  definePageMeta({ layout: 'docs' })
  useHead({
    title: 'Khadem Routing System',
    meta: [
      { name: 'description', content: 'Complete documentation for Khadem routing system' }
    ]
  })

  const basicRoutesCode = `// Basic HTTP method routes
server.get('/users', (req, res) async {
  final users = await User.all();
  res.sendJson({'users': users});
});

server.post('/users', (req, res) async {
  final data = await req.body;
  final user = await User.create(data);
  res.statusCode(201).sendJson({'user': user});
});

server.put('/users/:id', (req, res) async {
  final userId = req.param('id');
  final data = await req.body;
  final user = await User.find(userId).update(data);
  res.sendJson({'user': user});
});

server.delete('/users/:id', (req, res) async {
  final userId = req.param('id');
  await User.find(userId).delete();
  res.statusCode(204).empty();
});`

  const handlerSignatureCode = `Future Function(Request, Response)`

  const routeParamsCode = `// Route parameters with :param syntax
server.get('/users/:id', (req, res) async {
  final userId = req.param('id');
  final user = await User.find(userId);

  if (user == null) {
    return res.statusCode(404).sendJson({
      'error': 'User not found'
    });
  }

  res.sendJson({'user': user});
});

// Multiple parameters
server.get('/posts/:category/:slug', (req, res) async {
  final category = req.param('category');
  final slug = req.param('slug');

  final post = await Post.where('category', category)
    .where('slug', slug)
    .first();

  res.sendJson({'post': post});
});

// Optional query parameters
server.get('/search', (req, res) async {
  final query = req.query['q'] ?? '';
  final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
  final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;

  final results = await Search.query(query, page: page, limit: limit);
  res.sendJson({'results': results});
});`

  const routeGroupsCode = `// Route groups with shared prefix and middleware
server.group(
  prefix: '/api/v1',
  middleware: [AuthMiddleware(), ApiMiddleware()],
  routes: (router) {
    router.get('/users', UserController.index);
    router.post('/users', UserController.store);
    router.get('/users/:id', UserController.show);
    router.put('/users/:id', UserController.update);
    router.delete('/users/:id', UserController.destroy);

    // Nested groups
    router.group(
      prefix: '/admin',
      middleware: [AdminMiddleware()],
      routes: (adminRouter) {
        adminRouter.get('/stats', AdminController.stats);
        adminRouter.post('/users/:id/ban', AdminController.banUser);
      }
    );
  }
);`

  const groupRoutesCode = `Generated routes:
GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/:id
PUT    /api/v1/users/:id
DELETE /api/v1/users/:id
GET    /api/v1/admin/stats
POST   /api/v1/admin/users/:id/ban`

  const middlewareCode = `// Global middleware (all routes)
server.useMiddlewares([
  LoggingMiddleware(),
  CorsMiddleware(),
  RateLimitMiddleware(),
]);

// Group middleware
server.group(
  prefix: '/admin',
  middleware: [AuthMiddleware(), AdminMiddleware()],
  routes: (router) {
    router.get('/dashboard', AdminController.dashboard);
  }
);

// Route-specific middleware
server.get('/public', PublicController.index);
server.get('/protected', ProtectedController.index,
  middleware: [AuthMiddleware()]);
server.get('/admin-only', AdminController.index,
  middleware: [AuthMiddleware(), AdminMiddleware()]);`

  const staticFilesCode = `// Serve static files from public directory
server.serveStatic('public');

// Custom static directory
server.serveStatic('assets');

// Now these URLs work automatically:
// GET /css/style.css    → public/css/style.css
// GET /images/logo.png  → public/images/logo.png
// GET /js/app.js        → public/js/app.js`

  const queryParamsCode = `server.get('/search', (req, res) async {
  // Query parameters
  final query = req.query['q'];
  final page = req.query['page'];
  final sort = req.query['sort'];

  // Form data (for POST/PUT)
  final formData = await req.body;
  final name = formData['name'];
  final email = formData['email'];

  res.sendJson({
    'query': query,
    'page': page,
    'sort': sort,
    'form': {'name': name, 'email': email}
  });
});`

  const responseTypesCode = `// JSON response
res.sendJson({'message': 'Hello World'});

// HTML response
await res.view('welcome');

// File download
await res.download('files/report.pdf');

// Stream response
await res.stream<String>(
  Stream.periodic(Duration(seconds: 1), (i) => 'Line \$i\n').take(10)
);

// Custom status
res.statusCode(201).sendJson({'created': true});

// Empty response
res.statusCode(204).empty();`

  const completeApiCode = `import 'package:khadem/khadem_dart.dart';

void registerRoutes(Server server) {
  // Global middleware
  server.useMiddlewares([
    LoggingMiddleware(),
    CorsMiddleware(),
    RateLimitMiddleware(),
  ]);

  // Public routes
  server.group(
    prefix: '/api/v1',
    routes: (router) {
      router.get('/health', (req, res) async {
        res.sendJson({
          'status': 'ok',
          'timestamp': DateTime.now().toIso8601String()
        });
      });
    }
  );

  // User routes (authenticated)
  server.group(
    prefix: '/api/v1/users',
    middleware: [AuthMiddleware()],
    routes: (router) {
      router.get('', UserController.index);
      router.post('', UserController.store);
      router.get('/:id', UserController.show);
      router.put('/:id', UserController.update);
      router.delete('/:id', UserController.destroy);

      // User relationships
      router.get('/:id/posts', UserController.posts);
      router.get('/:id/followers', UserController.followers);
    }
  );

  // Post routes
  server.group(
    prefix: '/api/v1/posts',
    middleware: [AuthMiddleware()],
    routes: (router) {
      router.get('', PostController.index);
      router.post('', PostController.store);
      router.get('/:id', PostController.show);
      router.put('/:id', PostController.update);
      router.delete('/:id', PostController.destroy);

      // Comments
      router.get('/:id/comments', PostController.comments);
      router.post('/:id/comments', PostController.addComment);
    }
  );

  // Admin routes
  server.group(
    prefix: '/api/v1/admin',
    middleware: [AuthMiddleware(), AdminMiddleware()],
    routes: (router) {
      router.get('/dashboard', AdminController.dashboard);
      router.get('/stats', AdminController.stats);
      router.get('/users', AdminController.users);
      router.post('/users/:id/ban', AdminController.banUser);
    }
  );

  // Static files
  server.serveStatic('public');
}

// Start server
Future<void> main() async {
  final server = Server();
  registerRoutes(server);
  await server.start(port: 8080);
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