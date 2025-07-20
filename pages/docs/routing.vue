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
              <li>Handler function</li>
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
  server.get('/users', (req, res) => res.send('Users list'));
  server.post('/users', (req, res) => res.sendJson({'status': 'created'}));
  server.put('/users/:id', (req, res) => res.send('User updated'));
  server.delete('/users/:id', (req, res) => res.send('User deleted'));
  
  // With middleware
  server.get('/profile', ProfileController().show, 
    middleware: [AuthMiddleware()]);`
  
  const routeParametersCode = `// Route with parameters
  server.get('/users/:id', (req, res) {
    final params = req.params; // Access route parameters
    final userId = params['id'];
    res.send('User ID: \$userId');
  });
  
  // Multiple parameters
  server.get('/posts/:category/:slug', (req, res) {
    final category = req.params['category'];
    final slug = req.params['slug'];
    res.sendJson({
      'category': category,
      'slug': slug
    });
  });
`
  
  const routeGroupsCode = `// Route group with prefix and middleware
  server.group(
    prefix: '/api',
    middleware: [ApiMiddleware(), AuthMiddleware()],
    routes: (router) {
      router.get('/users', UserController().index);
      router.post('/users', UserController().store);
      router.put('/users/:id', UserController().update);
      router.delete('/users/:id', UserController().destroy);
    }
  );
  
  // Group creates routes like:
  // GET /api/users
  // POST /api/users
  // PUT /api/users/:id
  // DELETE /api/users/:id`
  
  const middlewareCode = `// Middleware implementation
  class AuthMiddleware implements Middleware {
    @override
    void handle(Request request, Response response, NextHandler next) {
      if (!request.isAuthenticated) {
        response.status(401).send('Unauthorized');
        return;
      }
      next();
    }
  }
  
  // Global middleware (applied to all routes)
  server.useMiddlewares([
    LoggingMiddleware(),
    CorsMiddleware(),
  ]);
  
  // Group middleware
  server.group(
    prefix: '/admin',
    middleware: [AuthMiddleware(), AdminMiddleware()],
    routes: (router) {
      router.get('/dashboard', AdminController().index);
    }
  );
  
  // Route-specific middleware
  server.get('/protected', ProtectedController().show,
    middleware: [AuthMiddleware()]);`
  
  const serverIntegrationCode = `// Server setup and route registration
  import 'package:khadem/khadem_dart.dart';
  
  void registerRoutes(Server server) {
    // Global middlewares
    server.useMiddlewares([
      LoggingMiddleware(),
      CorsMiddleware(),
    ]);
    
    // Static files
    server.serveStatic('public');
    
    // Route groups
    server.group(
      prefix: '/home',
      routes: (router) {
        router.get('', HomeController().index);
        router.get('/welcome', HomeController().welcome);
        router.get('/stream', HomeController().stream);
      }
    );
    
    // Direct routes
    server.get('/health', (req, res) => res.send('OK'));
  }
  
  // Start server
  final server = Server();
  registerRoutes(server);
  await server.start(port: 8080);`
  </script>
  
  <style scoped>
  .prose :where(h2):not(:where([class~="not-prose"] *)) {
    margin-top: 2.5rem;
  }
  .prose :where(h3):not(:where([class~="not-prose"] *)) {
    margin-top: 1.5rem;
  }
  </style>