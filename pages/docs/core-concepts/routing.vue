<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem Routing System</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The Khadem router provides a clean interface for defining HTTP routes with support for parameters, middleware, and route groups.
        </p>
      </header>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Registration</h2>
        
        <CodeBlock 
          :code="routeRegistrationCode" 
          language="dart"
          title="Registering Routes"
        />
        
        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">HTTP Methods</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li><code>get()</code> - GET requests</li>
              <li><code>post()</code> - POST requests</li>
              <li><code>put()</code> - PUT requests</li>
              <li><code>patch()</code> - PATCH requests</li>
              <li><code>delete()</code> - DELETE requests</li>
              <li><code>head()</code> - HEAD requests</li>
              <li><code>options()</code> - OPTIONS requests</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Route Paths</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li><code>/path</code> - Static path</li>
              <li><code>:param</code> - Route parameter</li>
              <li>Uses RegExp for matching</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Handler Types</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>RequestHandler function</li>
              <li>Controller method</li>
              <li>Async/await support</li>
            </ul>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Parameters</h2>
        
        <CodeBlock 
          :code="routeParametersCode" 
          language="dart"
          title="Defining Parameterized Routes"
        />
        
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Parameter Syntax</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li><code>:param</code> - Named parameter</li>
              <li>Extracted using RegExp</li>
              <li>Available in handler as Map</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Matching Rules</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Exact method and path match</li>
              <li>Parameters captured as named groups</li>
              <li>Dynamic routes added after static ones</li>
            </ul>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Groups</h2>
        
        <CodeBlock 
          :code="routeGroupsCode" 
          language="dart"
          title="Organizing Routes with Groups"
        />
        
        <div class="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Group Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
            <li>Path prefixing with prefix parameter</li>
            <li>Shared middleware for all routes in group</li>
            <li>Routes defined via callback function</li>
            <li>Middleware combined with route-specific middleware</li>
          </ul>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Middleware</h2>
        
        <CodeBlock 
          :code="middlewareCode" 
          language="dart"
          title="Applying Middleware to Routes"
        />
        
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Middleware Application</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Global (via Server.useMiddlewares)</li>
              <li>Group (via group middleware parameter)</li>
              <li>Route (via middleware parameter)</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 class="font-medium">Middleware Pipeline</h3>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li>Global middleware processed first</li>
              <li>Group middleware combined with route middleware</li>
              <li>All middleware executed before handler</li>
            </ul>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Server Integration</h2>
        
        <CodeBlock 
          :code="serverIntegrationCode" 
          language="dart"
          title="Server Route Registration"
        />
        
        <div class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Server Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
            <li>Router is internal to Server class</li>
            <li>Routes registered directly on Server instance</li>
            <li>Automatic exception handling with ExceptionHandler</li>
            <li>Support for static file serving</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Route Matching</h2>
        
        <CodeBlock 
          :code="routeMatchingCode" 
          language="dart"
          title="How Routes Are Matched"
        />
        
        <div class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Matching Process</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
            <li>Routes matched by HTTP method and path</li>
            <li>Static routes matched before dynamic routes</li>
            <li>Parameters extracted using RegExp named groups</li>
            <li>First matching route wins</li>
          </ul>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Advanced Features</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Named Routes</h3>
            <CodeBlock :code="namedRoutesCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Routes can be named for easier reference and URL generation.
            </p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg font-medium mb-4">Route Inspection</h3>
            <CodeBlock :code="routeInspectionCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Access registered routes for debugging or dynamic routing.
            </p>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>
        
        <div class="space-y-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use route groups for organizing related routes</li>
              <li>Apply middleware at the appropriate level (global, group, or route)</li>
              <li>Use descriptive parameter names in routes</li>
              <li>Keep route handlers focused and delegate business logic</li>
              <li>Use named routes for URL generation</li>
            </ul>
          </div>
          
          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Don't put business logic directly in route handlers</li>
              <li>Don't overuse global middleware</li>
              <li>Don't create deeply nested route groups</li>
              <li>Don't use generic parameter names like :id everywhere</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Complete Example</h2>
        
        <CodeBlock 
          :code="completeExampleCode" 
          language="dart"
          title="Complete Routing Setup"
        />
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
  
  const routeRegistrationCode = `// Basic route registration
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
  
  const routeParametersCode = `// Route with parameters
  server.get('/users/:id', (req, res) async {
    final userId = req.param('id');
    final user = await User.find(userId);
    
    if (user == null) {
      return res.statusCode(404).sendJson({'error': 'User not found'});
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
  
  // Optional parameters with query strings
  server.get('/search', (req, res) async {
    final query = req.query['q'] ?? '';
    final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
    final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
    
    final results = await Search.query(query, page: page, limit: limit);
    res.sendJson({'results': results});
  });`
  
  const routeGroupsCode = `// Route group with prefix and middleware
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
  );
  
  // This creates routes like:
  // GET /api/v1/users
  // POST /api/v1/users
  // GET /api/v1/users/:id
  // PUT /api/v1/users/:id
  // DELETE /api/v1/users/:id
  // GET /api/v1/admin/stats
  // POST /api/v1/admin/users/:id/ban`
  
  const middlewareCode = `// Middleware implementation
  class AuthMiddleware implements Middleware {
    @override
    MiddlewareHandler get handler => (req, res, next) async {
      if (!req.isAuthenticated) {
        return res.statusCode(401).sendJson({
          'error': 'Unauthorized',
          'message': 'Authentication required'
        });
      }
      await next();
    };
  
    @override
    String get name => 'Auth';
  
    @override
    MiddlewarePriority get priority => MiddlewarePriority.auth;
  }
  
  // Global middleware (applied to all routes)
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
  
  const serverIntegrationCode = `// Server setup and route registration
  import 'package:khadem/khadem_dart.dart';
  
  void registerRoutes(Server server) {
    // 🛡️ Register global middlewares
    server.useMiddlewares(Kernel.middlewares);
  
    // 🏠 Home Routes
    server.group(
      prefix: '/home',
      routes: (router) {
        router.get('', HomeController.index);
        router.get('/welcome', HomeController.welcome);
        router.get('/stream', HomeController.stream);
      },
    );
  
    // 👤 User Routes
    server.group(
      prefix: '/users',
      middleware: [AuthMiddleware()],
      routes: (router) {
        router.get('', UserController.index);
        router.post('', UserController.store);
        router.get('/:id', UserController.show);
        router.put('/:id', UserController.update);
        router.delete('/:id', UserController.destroy);
      },
    );
  
    // 📁 Static file serving
    server.serveStatic('public');
  }
  
  // Start server
  final server = Server();
  registerRoutes(server);
  await server.start(port: 8080);`
  
  const routeMatchingCode = `// How routes are matched internally
  class Route {
    final String method;
    final String path;
    final RegExp matcher;
    final List<String> paramNames;
    
    Route(this.method, this.path, this.handler, this.middleware)
        : matcher = _createMatcher(path),
          paramNames = _extractParamNames(path);
    
    static RegExp _createMatcher(String path) {
      // Convert :param to named capture groups
      final regex = path.replaceAllMapped(
        RegExp(r':(\w+)'), 
        (m) => '(?<_${m[1]}>[^/]+)'
      );
      return RegExp('^$regex\$');
    }
    
    static List<String> _extractParamNames(String path) {
      return RegExp(r':(\w+)')
        .allMatches(path)
        .map((m) => m.group(1)!)
        .toList();
    }
    
    bool matches(String method, String path) {
      return this.method == method && matcher.hasMatch(path);
    }
    
    Map<String, String> extractParams(String path) {
      final match = matcher.firstMatch(path);
      if (match == null) return {};
      
      return {
        for (final name in paramNames) 
          name: match.namedGroup('_$name') ?? '',
      };
    }
  }
  
  // Usage example:
  // Route: GET /users/:id/posts/:postId
  // Request: GET /users/123/posts/456
  // Params: {'id': '123', 'postId': '456'}`
  
  const namedRoutesCode = `// Named routes for URL generation
  server.get('/users/:id', UserController.show, name: 'user.show');
  server.get('/posts/:id', PostController.show, name: 'post.show');
  
  // In controllers or services
  class UserController {
    static Future show(Request req, Response res) async {
      final userId = req.param('id');
      final user = await User.find(userId);
      
      // Generate URLs using named routes
      final userPostsUrl = route('user.posts', {'id': userId});
      final homeUrl = route('home');
      
      res.sendJson({
        'user': user,
        'links': {
          'posts': userPostsUrl,
          'home': homeUrl,
        }
      });
    }
  }`
  
  const routeInspectionCode = `// Access registered routes for debugging
  final server = Server();
  // After registering routes, you can inspect them
  final routes = server.routes; // List of all registered routes
  
  for (final route in routes) {
    print('Route: \${route.method} \${route.path}');
    if (route.isNamed) {
      print('  Name: \${route.name}');
    }
    print('  Middleware: \${route.middleware.length}');
  }
  
  // Example output:
  // Route: GET /users
  //   Name: users.index
  //   Middleware: 2
  // Route: POST /users
  //   Name: users.store
  //   Middleware: 2`
  
  const completeExampleCode = `// Complete routing setup example
  import 'package:khadem/khadem_dart.dart';
  import '../app/http/controllers/user_controller.dart';
  import '../app/http/controllers/post_controller.dart';
  import '../app/http/middleware/auth_middleware.dart';
  import '../app/http/middleware/admin_middleware.dart';
  import '../core/kernel.dart';
  
  void registerRoutes(Server server) {
    // 🛡️ Global middlewares
    server.useMiddlewares([
      LoggingMiddleware(),
      CorsMiddleware(),
      RateLimitMiddleware(),
    ]);
  
    // 🏠 Public routes
    server.group(
      prefix: '/api/v1',
      routes: (router) {
        // Health check
        router.get('/health', (req, res) async {
          res.sendJson({
            'status': 'ok',
            'timestamp': DateTime.now().toIso8601String(),
            'version': '1.0.0'
          });
        });
      }
    );
  
    // 👤 User routes (authenticated)
    server.group(
      prefix: '/api/v1/users',
      middleware: [AuthMiddleware()],
      routes: (router) {
        router.get('', UserController.index, name: 'users.index');
        router.post('', UserController.store, name: 'users.store');
        router.get('/:id', UserController.show, name: 'users.show');
        router.put('/:id', UserController.update, name: 'users.update');
        router.delete('/:id', UserController.destroy, name: 'users.destroy');
        
        // User profile routes
        router.get('/:id/posts', UserController.posts, name: 'users.posts');
        router.get('/:id/followers', UserController.followers, name: 'users.followers');
      }
    );
  
    // 📝 Post routes
    server.group(
      prefix: '/api/v1/posts',
      middleware: [AuthMiddleware()],
      routes: (router) {
        router.get('', PostController.index, name: 'posts.index');
        router.post('', PostController.store, name: 'posts.store');
        router.get('/:id', PostController.show, name: 'posts.show');
        router.put('/:id', PostController.update, name: 'posts.update');
        router.delete('/:id', PostController.destroy, name: 'posts.destroy');
        
        // Post comments
        router.get('/:id/comments', PostController.comments, name: 'posts.comments');
        router.post('/:id/comments', PostController.addComment, name: 'posts.add_comment');
      }
    );
  
    // 👑 Admin routes
    server.group(
      prefix: '/api/v1/admin',
      middleware: [AuthMiddleware(), AdminMiddleware()],
      routes: (router) {
        router.get('/dashboard', AdminController.dashboard, name: 'admin.dashboard');
        router.get('/stats', AdminController.stats, name: 'admin.stats');
        router.get('/users', AdminController.users, name: 'admin.users');
        router.post('/users/:id/ban', AdminController.banUser, name: 'admin.ban_user');
      }
    );
  
    // 📁 Static file serving
    server.serveStatic('public');
  }
  
  // Start the server
  Future<void> main() async {
    await Kernel.bootstrap();
    
    final server = Server();
    registerRoutes(server);
    
    final port = Khadem.env.getInt('APP_PORT', defaultValue: 8080);
    await server.start(port: port);
    
    print('🚀 Server running on http://localhost:\$port');
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