<template>
  <div class="px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-4xl mx-auto space-y-16">
      <!-- Page Header -->
      <header class="space-y-4">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Middleware</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Middleware in Khadem allows you to intercept, inspect, modify, or block HTTP requests and responses. They help implement cross-cutting concerns like authentication, CORS, logging, and more.
        </p>
      </header>

      <!-- Overview -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">What is Middleware?</h2>
        <p>
          A middleware is a class that implements the <code>Middleware</code> interface. It includes a <code>handler</code> method that runs before or after a request hits the controller.
        </p>
        <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400">
          <li>Handle tasks like CORS, authentication, or request modification</li>
          <li>Chain multiple middleware using priorities</li>
          <li>Use global or route-specific registration</li>
        </ul>
      </section>

      <!-- Creating Middleware -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">Creating Middleware</h2>
        <p>Here's how you define a custom middleware class:</p>
        <CodeBlock :code="basicMiddlewareCode" language="dart" title="Custom Middleware" />
      </section>

      <!-- Middleware Priority -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">Middleware Priority</h2>
        <p>Khadem supports prioritizing middleware execution:</p>
        <CodeBlock :code="priorityCode" language="dart" title="Priority Levels" />
        <div class="text-sm text-gray-700 dark:text-gray-400 mt-2">
          <strong>Order of Execution:</strong>
          <ul class="list-disc pl-5 space-y-1 mt-1">
            <li><code>global</code>: CORS, logging, etc.</li>
            <li><code>routing</code>: Route resolution middleware</li>
            <li><code>auth</code>: Authorization checks</li>
            <li><code>preprocessing</code>: Input validation</li>
            <li><code>business</code>: App-specific logic</li>
            <li><code>terminating</code>: Cleanup/logging responses</li>
          </ul>
        </div>
      </section>

     

      <!-- Registering Middleware -->
      <section class="space-y-10">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">Registering Middleware</h2>

        <div>
          <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200">Global Middleware</h3>
          <p>Register middleware globally via <code>server.useMiddlewares</code>:</p>
          <CodeBlock :code="globalMiddlewareCode" language="dart" title="Global Middleware" />
        </div>

        <div>
          <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200">Route Middleware</h3>
          <p>Apply middleware to individual routes using the <code>middleware</code> property:</p>
          <CodeBlock :code="routeMiddlewareCode" language="dart" title="Per-route Middleware" />
        </div>
      </section>

      <!-- Best Practices -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">Best Practices</h2>
        <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Use specific names for clarity (e.g., <code>JwtAuthMiddleware</code>)</li>
          <li>Order your middleware properly using priority levels</li>
          <li>Call <code>await next()</code> unless you want to stop the pipeline</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });

useHead({
  title: 'Middleware - Khadem Framework',
  meta: [
    {
      name: 'description',
      content: 'Learn how to define, prioritize, and register middleware in the Khadem Dart framework.'
    }
  ]
});

// Code examples
const basicMiddlewareCode = `
class CustomMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    print('Request to: \${req.path}');
    await next();
  };

  @override
  String get name => 'Custom';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.preprocessing;
}
`;

const priorityCode = `
enum MiddlewarePriority {
  global,
  routing,
  auth,
  preprocessing,
  business,
  terminating
}
`;
 

const globalMiddlewareCode = `
void registerRoutes(Server server) {
  server.useMiddlewares([
    CorsMiddleware(),
    CustomMiddleware(),
  ]);
}
`;

const routeMiddlewareCode = `
void registerRoutes(Server server) {
  server.group(
    prefix: '/api',
    routes: (router) async {
      router.get('/profile', ProfileController().get, middleware: [AuthMiddleware()]);
    },
  );
}
`;
</script>
