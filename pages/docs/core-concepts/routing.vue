<template>
    <div>
        <!-- Hero Section -->
        <div class="mb-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Routing System
            </h1>
            <p class="text-xl text-gray-400 leading-relaxed">
                Build powerful APIs with <strong class="text-primary-500">Khadem's</strong> intuitive routing system. 
                Clean, modular HTTP routing with parameters, middleware, and route groups.
            </p>
        </div>

        <!-- Overview Card -->
        <div class="bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-6 mb-10">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <i class="fas fa-route text-green-500 text-3xl"></i>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-white mb-2">Express-like Routing</h3>
                    <p class="text-gray-300 text-sm">
                        Familiar routing patterns with powerful features like parameter extraction, 
                        middleware chains, and nested groups for building scalable REST APIs.
                    </p>
                </div>
            </div>
        </div>

        <!-- Basic Routes Section -->
        <section class="mb-12">
            <h2 id="basic-routes" class="text-3xl font-bold mb-4">
                <i class="fas fa-code text-primary-500 mr-2"></i>
                Basic Routes
            </h2>
            <p class="text-gray-300 mb-6">
                Define routes using HTTP methods with clean, expressive syntax. Each route accepts a path and a handler function.
            </p>

            <CodeBlock
                :code="basicRoutesCode"
                language="dart"
            />

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-list-check text-blue-500 mr-2"></i>
                        HTTP Methods
                    </h3>
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">GET</code>
                            <span class="text-gray-300">Retrieve resources</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">POST</code>
                            <span class="text-gray-300">Create new resources</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono">PUT</code>
                            <span class="text-gray-300">Update resources</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-mono">PATCH</code>
                            <span class="text-gray-300">Partial updates</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">DELETE</code>
                            <span class="text-gray-300">Remove resources</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-mono">HEAD</code>
                            <span class="text-gray-300">Headers only</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-mono">OPTIONS</code>
                            <span class="text-gray-300">CORS preflight</span>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-code-branch text-green-500 mr-2"></i>
                        Handler Signature
                    </h3>
                    <CodeBlock :code="handlerSignatureCode" language="dart" />
                    <p class="text-sm text-gray-400 mt-4">
                        All handlers are <strong class="text-white">async functions</strong> that receive 
                        <code class="px-1.5 py-0.5 bg-gray-700 rounded text-xs">Request</code> and 
                        <code class="px-1.5 py-0.5 bg-gray-700 rounded text-xs">Response</code> objects.
                    </p>
                </div>
            </div>
        </section>

        <!-- Route Parameters Section -->
        <section class="mb-12">
            <h2 id="route-parameters" class="text-3xl font-bold mb-4">
                <i class="fas fa-tag text-primary-500 mr-2"></i>
                Route Parameters
            </h2>
            <p class="text-gray-300 mb-6">
                Extract dynamic values from URLs using the <code class="px-1.5 py-0.5 bg-gray-800 rounded text-sm">:param</code> syntax. 
                Perfect for building RESTful APIs with resource identifiers.
            </p>

            <CodeBlock
                :code="routeParamsCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-lightbulb text-blue-500 mr-2"></i>
                    Parameter Features
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span><code class="px-1.5 py-0.5 bg-gray-800 rounded text-xs">:param</code> syntax for named parameters</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Automatic parameter extraction</span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Type-safe parameter access</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Regex-based matching support</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Route Groups Section -->
        <section class="mb-12">
            <h2 id="route-groups" class="text-3xl font-bold mb-4">
                <i class="fas fa-layer-group text-primary-500 mr-2"></i>
                Route Groups
            </h2>
            <p class="text-gray-300 mb-6">
                Organize related routes with shared prefixes and middleware. Group routes for better code organization 
                and consistent configuration across multiple endpoints.
            </p>

            <CodeBlock
                :code="routeGroupsCode"
                language="dart"
            />

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-star text-purple-500 mr-2"></i>
                        Group Benefits
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-purple-500 text-xs mt-1"></i>
                            <span><strong class="text-white">Shared URL prefixes</strong> - Avoid repeating paths</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-purple-500 text-xs mt-1"></i>
                            <span><strong class="text-white">Common middleware</strong> - Apply to all group routes</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-purple-500 text-xs mt-1"></i>
                            <span><strong class="text-white">Better organization</strong> - Group by feature/version</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-purple-500 text-xs mt-1"></i>
                            <span><strong class="text-white">Nested groups</strong> - Create hierarchies</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-list-ul text-green-500 mr-2"></i>
                        Generated Routes
                    </h3>
                    <CodeBlock :code="groupRoutesCode" language="text" />
                    <p class="text-xs text-gray-400 mt-3">
                        All routes inherit the group prefix and middleware
                    </p>
                </div>
            </div>
        </section>

        <!-- Middleware Integration Section -->
        <section class="mb-12">
            <h2 id="middleware" class="text-3xl font-bold mb-4">
                <i class="fas fa-filter text-primary-500 mr-2"></i>
                Middleware Integration
            </h2>
            <p class="text-gray-300 mb-6">
                Apply middleware at global, group, or route level for authentication, logging, validation, and more.
            </p>

            <CodeBlock
                :code="middlewareCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-layer-group text-green-500 mr-2"></i>
                    Middleware Levels
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-globe text-blue-500"></i>
                            <strong class="text-white">Global</strong>
                        </div>
                        <p class="text-sm text-gray-400">Applied to all routes in your application</p>
                    </div>
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-layer-group text-purple-500"></i>
                            <strong class="text-white">Group</strong>
                        </div>
                        <p class="text-sm text-gray-400">Shared across all routes in a group</p>
                    </div>
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-route text-green-500"></i>
                            <strong class="text-white">Route</strong>
                        </div>
                        <p class="text-sm text-gray-400">Applied to specific individual routes</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Static File Serving Section -->
        <section class="mb-12">
            <h2 id="static-files" class="text-3xl font-bold mb-4">
                <i class="fas fa-folder-open text-primary-500 mr-2"></i>
                Static File Serving
            </h2>
            <p class="text-gray-300 mb-6">
                Serve static assets like CSS, JavaScript, images, and downloads with automatic MIME type detection.
            </p>

            <CodeBlock
                :code="staticFilesCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-rocket text-yellow-500 mr-2"></i>
                    Static Serving Features
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-yellow-500 mt-1"></i>
                            <span>Automatic file type detection</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-yellow-500 mt-1"></i>
                            <span>Directory browsing disabled (security)</span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-yellow-500 mt-1"></i>
                            <span>Configurable root directory</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-yellow-500 mt-1"></i>
                            <span>Efficient caching headers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Advanced Patterns Section -->
        <section class="mb-12">
            <h2 id="advanced-patterns" class="text-3xl font-bold mb-4">
                <i class="fas fa-magic text-primary-500 mr-2"></i>
                Advanced Patterns
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-search text-blue-500 mr-2"></i>
                        Query Parameters
                    </h3>
                    <CodeBlock :code="queryParamsCode" language="dart" />
                    <p class="text-sm text-gray-400 mt-4">
                        Access URL query strings and form data easily
                    </p>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-reply text-green-500 mr-2"></i>
                        Response Types
                    </h3>
                    <CodeBlock :code="responseTypesCode" language="dart" />
                    <p class="text-sm text-gray-400 mt-4">
                        JSON, HTML, files, and streaming responses
                    </p>
                </div>
            </div>
        </section>

        <!-- Complete API Example Section -->
        <section class="mb-12">
            <h2 id="complete-example" class="text-3xl font-bold mb-4">
                <i class="fas fa-code-branch text-primary-500 mr-2"></i>
                Complete API Example
            </h2>
            <p class="text-gray-300 mb-6">
                Here's a full example showing how to structure a production-ready REST API with authentication, versioning, and nested resources.
            </p>

            <CodeBlock
                :code="completeApiCode"
                language="dart"
            />
        </section>

        <!-- Best Practices Section -->
        <section class="mb-12">
            <h2 id="best-practices" class="text-3xl font-bold mb-6">
                <i class="fas fa-check-circle text-primary-500 mr-2"></i>
                Best Practices
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center text-lg">
                        <i class="fas fa-thumbs-up text-green-500 mr-2"></i>
                        Do's
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Use route groups for logical organization by feature or API version</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Apply middleware at the appropriate level (global, group, or route)</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Use descriptive parameter names that reflect the resource</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Keep route handlers focused - delegate to controllers/services</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Always validate and sanitize input parameters</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Return appropriate HTTP status codes (200, 201, 404, etc.)</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center text-lg">
                        <i class="fas fa-times-circle text-red-500 mr-2"></i>
                        Don'ts
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't put business logic directly in route handlers</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't create deeply nested route groups (max 2-3 levels)</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't use generic parameter names like <code class="px-1 py-0.5 bg-gray-800 rounded text-xs">:id</code> everywhere</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't skip input validation - always validate user input</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't forget error handling - use try-catch blocks</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't expose sensitive information in error responses</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

 

        <!-- Help Section -->
        <div class="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg p-6">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <i class="fas fa-question-circle text-primary-500 text-3xl"></i>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-white mb-2">Need Help with Routing?</h3>
                    <p class="text-gray-300 mb-4">
                        Join our community to get help with routing patterns and API design.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a 
                            href="https://discord.com/invite/XdbryzNJt9" 
                            target="_blank"
                            class="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors text-sm font-medium"
                        >
                            <i class="fab fa-discord mr-2"></i>
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
    title: 'Routing System - Khadem Docs',
    meta: [
        { 
            name: 'description', 
            content: 'Complete guide to Khadem routing system - Learn HTTP methods, route parameters, groups, middleware integration, and best practices for building REST APIs.' 
        }
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