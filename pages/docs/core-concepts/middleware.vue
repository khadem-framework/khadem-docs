<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <header class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-600/10 dark:from-purple-500/20 dark:via-pink-500/10 dark:to-purple-600/20 p-12 border border-purple-200/50 dark:border-purple-800/50">
      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 mb-6">
          <i class="fas fa-filter text-purple-600 dark:text-purple-400"></i>
          <span class="text-sm font-medium text-purple-700 dark:text-purple-300">Request/Response Pipeline</span>
        </div>
        
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Middleware System
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          Comprehensive middleware framework with priority-based execution, error handling, and flexible registration patterns.
        </p>
      </div>
    </header>

    <!-- Overview Section -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <i class="fas fa-info-circle text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Overview</h2>
          <p class="text-gray-600 dark:text-gray-400">Understanding the middleware pipeline</p>
        </div>
      </div>
 

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-star text-purple-600 dark:text-purple-400"></i>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Core Features</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-layer-group text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Priority-based execution order</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-tag text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Named middleware identification</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-shield-halved text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Built-in error handling</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-code-branch text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Conditional execution logic</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-diagram-project text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Pipeline management</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-arrow-right-arrow-left text-pink-600 dark:text-pink-400"></i>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Execution Flow</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">1</span>
              <span class="text-gray-700 dark:text-gray-300">Global middleware (CORS, logging)</span>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">2</span>
              <span class="text-gray-700 dark:text-gray-300">Routing middleware</span>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">3</span>
              <span class="text-gray-700 dark:text-gray-300">Authentication middleware</span>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">4</span>
              <span class="text-gray-700 dark:text-gray-300">Preprocessing middleware</span>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">5</span>
              <span class="text-gray-700 dark:text-gray-300">Business logic middleware</span>
            </div>
            <div class="flex items-center gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 flex items-center justify-center text-xs font-bold">6</span>
              <span class="text-gray-700 dark:text-gray-300">Terminating middleware</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creating Middleware -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <i class="fas fa-code text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Creating Middleware</h2>
          <p class="text-gray-600 dark:text-gray-400">Implement custom middleware classes</p>
        </div>
      </div>

      <CodeBlock
        :code="basicMiddlewareCode"
        language="dart"
        title="Basic Middleware Implementation"
      />

      <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <div class="flex items-center gap-2 mb-4">
          <i class="fas fa-file-contract text-blue-600 dark:text-blue-400 text-xl"></i>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Middleware Contract</h3>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <code class="text-blue-600 dark:text-blue-400 text-sm font-mono">handler</code>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">The main middleware function</div>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <code class="text-green-600 dark:text-green-400 text-sm font-mono">name</code>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Unique identifier for the middleware</div>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <code class="text-purple-600 dark:text-purple-400 text-sm font-mono">priority</code>
            <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Execution order priority level</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Priority System -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
          <i class="fas fa-sort-numeric-down text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Priority System</h2>
          <p class="text-gray-600 dark:text-gray-400">Control middleware execution order</p>
        </div>
      </div>

      <CodeBlock
        :code="prioritySystemCode"
        language="dart"
        title="Middleware Priority Levels"
      />

      <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <div class="flex items-center gap-2 mb-4">
          <i class="fas fa-list-ol text-yellow-600 dark:text-yellow-400 text-xl"></i>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Execution Order</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">0</span>
              <strong class="text-gray-900 dark:text-white">Global</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">CORS, logging, security headers</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">1</span>
              <strong class="text-gray-900 dark:text-white">Routing</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Route resolution, URL rewriting</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">2</span>
              <strong class="text-gray-900 dark:text-white">Auth</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Authentication, authorization</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">3</span>
              <strong class="text-gray-900 dark:text-white">Preprocessing</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Input validation, sanitization</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">4</span>
              <strong class="text-gray-900 dark:text-white">Business</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">App-specific logic</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">5</span>
              <strong class="text-gray-900 dark:text-white">Terminating</strong>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Response formatting, cleanup</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Built-in Middleware</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Logging Middleware</h3>
          <CodeBlock :code="loggingMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Logs request/response details with timing information
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">CORS Middleware</h3>
          <CodeBlock :code="corsMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Handles Cross-Origin Resource Sharing headers
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Authentication Middleware</h3>
          <CodeBlock :code="authMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Validates Bearer tokens and attaches user data
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Exception Middleware</h3>
          <CodeBlock :code="exceptionMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Catches and handles uncaught exceptions
          </p>
        </div>
      </div>
    </section> -->

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Middleware Pipeline</h2>

      <CodeBlock
        :code="pipelineUsageCode"
        language="dart"
        title="Pipeline Management"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">Pipeline Features</h3>
        <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
          <li>Add middleware with specific priorities</li>
          <li>Insert middleware before/after named middleware</li>
          <li>Remove middleware by name</li>
          <li>Conditional middleware execution</li>
          <li>Automatic priority-based sorting</li>
        </ul>
      </div>
    </section> -->

    <!-- Registration Patterns -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
          <i class="fas fa-puzzle-piece text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Registration Patterns</h2>
          <p class="text-gray-600 dark:text-gray-400">Different ways to register middleware</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-globe text-green-600 dark:text-green-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Global Registration</h3>
          </div>
          <CodeBlock :code="globalRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Applies to all routes in the application</span>
          </p>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-route text-green-600 dark:text-green-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Route-specific Registration</h3>
          </div>
          <CodeBlock :code="routeRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Applies only to specific routes or route groups</span>
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-layer-group text-green-600 dark:text-green-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Group Registration</h3>
          </div>
          <CodeBlock :code="groupRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Applies to all routes within a group</span>
          </p>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-code-branch text-green-600 dark:text-green-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Conditional Registration</h3>
          </div>
          <CodeBlock :code="conditionalRegistrationCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Executes only when conditions are met</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Advanced Patterns -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
          <i class="fas fa-wand-magic-sparkles text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Advanced Patterns</h2>
          <p class="text-gray-600 dark:text-gray-400">Powerful middleware composition techniques</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-cube text-indigo-600 dark:text-indigo-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Middleware Composition</h3>
          </div>
          <CodeBlock :code="compositionCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Combine multiple middleware into reusable compositions</span>
          </p>
        </div>

        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-bolt text-indigo-600 dark:text-indigo-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Dynamic Middleware</h3>
          </div>
          <CodeBlock :code="dynamicMiddlewareCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Create middleware with runtime configuration</span>
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-6">
        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-industry text-indigo-600 dark:text-indigo-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Middleware Factory</h3>
          </div>
          <CodeBlock :code="factoryCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Factory pattern for creating parameterized middleware</span>
          </p>
        </div>

        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-life-ring text-indigo-600 dark:text-indigo-400"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Error Recovery</h3>
          </div>
          <CodeBlock :code="errorRecoveryCode" language="dart" />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-start gap-2">
            <i class="fas fa-info-circle mt-1"></i>
            <span>Handle errors and provide fallback responses</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Error Handling -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
          <i class="fas fa-exclamation-triangle text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Error Handling</h2>
          <p class="text-gray-600 dark:text-gray-400">Robust error handling strategies</p>
        </div>
      </div>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling in Middleware"
      />

      <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
        <div class="flex items-center gap-2 mb-4">
          <i class="fas fa-shield-halved text-red-600 dark:text-red-400 text-xl"></i>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Error Handling Strategies</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <i class="fas fa-check-circle text-red-600 dark:text-red-400 mt-1"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Use terminating middleware for global error handling</span>
          </div>
          <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <i class="fas fa-check-circle text-red-600 dark:text-red-400 mt-1"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Attach error information to request for downstream processing</span>
          </div>
          <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <i class="fas fa-check-circle text-red-600 dark:text-red-400 mt-1"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Provide fallback responses when middleware fails</span>
          </div>
          <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <i class="fas fa-check-circle text-red-600 dark:text-red-400 mt-1"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Log errors with appropriate context</span>
          </div>
          <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg col-span-2">
            <i class="fas fa-check-circle text-red-600 dark:text-red-400 mt-1"></i>
            <span class="text-sm text-gray-700 dark:text-gray-300">Don't swallow errors unless you handle them properly</span>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Middleware</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Middleware Testing Patterns"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">Testing Best Practices</h3>
        <ul class="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Test middleware in isolation</li>
          <li>Mock request and response objects</li>
          <li>Verify middleware behavior with different inputs</li>
          <li>Test error conditions and edge cases</li>
          <li>Use dependency injection for testable middleware</li>
        </ul>
      </div>
    </section> -->

    <!-- Complete Example -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
          <i class="fas fa-code text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Complete Example</h2>
          <p class="text-gray-600 dark:text-gray-400">Full middleware implementation with all features</p>
        </div>
      </div>

      <div class="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
        <CodeBlock
          :code="completeExampleCode"
          language="dart"
          title="Complete Middleware Implementation"
        />
      </div>
    </section>

    <!-- Best Practices -->
    <section class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
          <i class="fas fa-lightbulb text-white text-xl"></i>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Best Practices</h2>
          <p class="text-gray-600 dark:text-gray-400">Guidelines for effective middleware usage</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-circle-check text-green-600 dark:text-green-400 text-xl"></i>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Do's</h3>
          </div>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Use descriptive names for middleware clarity</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Choose appropriate priority levels for execution order</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Always call <code class="text-xs">await next()</code> unless terminating</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Handle errors appropriately in middleware</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Use dependency injection for testable middleware</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
              <span>Keep middleware focused on single responsibilities</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-circle-xmark text-red-600 dark:text-red-400 text-xl"></i>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Don'ts</h3>
          </div>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't modify response after calling next()</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't perform heavy computations in middleware</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't swallow errors without handling them</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't create circular middleware dependencies</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't use blocking operations in middleware</span>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
              <span>Don't leak resources without proper cleanup</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

 
    <!-- Help Section -->
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
      <div class="text-center">
        <i class="fas fa-circle-question text-4xl text-gray-400 dark:text-gray-500 mb-4"></i>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Need Help?</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Join our community for support and discussions
        </p>
        <a
          href="https://discord.gg/khadem"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <i class="fab fa-discord"></i>
          Join Discord Community
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Middleware System - Khadem Docs',
  meta: [
    { name: 'description', content: 'Comprehensive middleware framework with priority-based execution, error handling, and flexible registration patterns in Khadem.' }
  ]
})

const middlewareOverviewCode = `// Middleware Pipeline Architecture
class MiddlewarePipeline {
  final List<Middleware> _middleware = [];

  // Process request through middleware chain
  Future<void> process(Request request, Response response) async {
    var index = 0;

    Future<void> next() async {
      if (index < _middleware.length) {
        final middleware = _middleware[index++];
        await middleware.handler(request, response, next);
      }
    }

    await next();
  }
}`

const basicMiddlewareCode = `import 'package:khadem/khadem_dart.dart';

class CustomMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    // Pre-processing logic
    print('Request to: \${req.path} at \${DateTime.now()}');


    // Call next middleware or route handler
    await next();

    // Post-processing logic
    print('Response sent at \${DateTime.now()}');
  };

  @override
  String get name => 'CustomLogger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const prioritySystemCode = `enum MiddlewarePriority {
  global,        // 0 - CORS, logging, security
  routing,       // 1 - Route resolution
  auth,          // 2 - Authentication
  preprocessing, // 3 - Input validation
  business,      // 4 - App-specific logic
  terminating    // 5 - Error handling, cleanup
}

// Usage
class AuthMiddleware implements Middleware {
  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}`

const loggingMiddlewareCode = `class LoggingMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final start = DateTime.now();
    Khadem.logger.debug('➡️ \${req.method} \${req.uri}');

    await next();

    final duration = DateTime.now().difference(start);
    Khadem.logger.debug('⬅️ \${res.statusCode} in \${duration.inMilliseconds}ms');
  };

  @override
  String get name => 'Logger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const corsMiddlewareCode = `class CorsMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final config = Khadem.config;
    final allowedOrigins = config.get<List>('cors.allowed_origins') ?? [];
    final origin = req.header('origin') ?? '*';

    res.header('Access-Control-Allow-Origin',
        allowedOrigins.contains(origin) ? origin : 'null')
       .header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
       .header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
       .header('Access-Control-Allow-Credentials', 'true');

    if (req.method == 'OPTIONS') {
      return res.status(204).header('Content-Length', '0').send('');
    }

    await next();
  };

  @override
  String get name => 'CORS';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}`

const authMiddlewareCode = `class AuthMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final authHeader = req.header('authorization');

    if (authHeader == null || !authHeader.startsWith('Bearer ')) {
      throw AuthException('Missing or invalid authorization header');
    }

    final token = authHeader.replaceFirst('Bearer ', '');
    final user = await Khadem.auth.verify(token);

    // Attach user to request
    req.setAttribute('user', user);
    req.setAttribute('isAuthenticated', true);

    await next();
  };

  @override
  String get name => 'Auth';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}`

const exceptionMiddlewareCode = `class ExceptionMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (error, stackTrace) {
      Khadem.logger.error('Middleware error', error, stackTrace);
      ExceptionHandler.handle(res, error, stackTrace);
    }
  };

  @override
  String get name => 'ExceptionHandler';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const pipelineUsageCode = `// Pipeline management
final pipeline = MiddlewarePipeline();

// Add middleware with different priorities
pipeline.add((req, res, next) async {
  print('Global middleware');
  await next();
}, priority: MiddlewarePriority.global, name: 'logger');

pipeline.add((req, res, next) async {
  print('Auth middleware');
  await next();
}, priority: MiddlewarePriority.auth, name: 'auth');

// Insert middleware at specific positions
pipeline.addBefore('auth', (req, res, next) async {
  print('Before auth');
  await next();
}, name: 'pre-auth');

pipeline.addAfter('auth', (req, res, next) async {
  print('After auth');
  await next();
}, name: 'post-auth');

// Conditional middleware
pipeline.addConditional(
  (req, res, next) async {
    print('Only for API routes');
    await next();
  },
  condition: (req) => req.path.startsWith('/api'),
  name: 'api-only'
);

// Remove middleware
pipeline.remove('logger');

// Process request
await pipeline.process(request, response);`

const globalRegistrationCode = `// Global middleware registration
void setupGlobalMiddleware(Server server) {
  server.applyMiddlewares([
    CorsMiddleware(),
    LoggingMiddleware(),
    ExceptionMiddleware(),
    RateLimitMiddleware(),
  ]);
}

// All routes will use these middleware
router.get('/api/users', UserController.index);
router.post('/api/users', UserController.store);`

const routeRegistrationCode = `// Route-specific middleware
router.get('/api/profile', ProfileController.show,
    middleware: [AuthMiddleware()]);

router.post('/api/admin/users', AdminController.create,
    middleware: [AuthMiddleware(), AdminOnlyMiddleware()]);

router.get('/public/data', PublicController.index,
    middleware: []); // No middleware for public routes`

const groupRegistrationCode = `// Group middleware
router.group(
  prefix: '/api/v1',
  middleware: [AuthMiddleware(), JsonResponseMiddleware()],
  routes: (router) {
    router.get('/users', UserController.index);
    router.post('/users', UserController.store);
    router.get('/profile', ProfileController.show);
  }
);

// Nested groups inherit parent middleware
router.group(
  prefix: '/api/v1/admin',
  middleware: [AdminOnlyMiddleware()], // Additional middleware
  routes: (router) {
    router.delete('/users/:id', AdminController.delete);
    router.put('/settings', AdminController.updateSettings);
  }
);`

const conditionalRegistrationCode = `// Conditional middleware
class MaintenanceMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (Khadem.config.get('app.maintenance_mode') == true) {
      return res.status(503).json({
        'error': 'Service temporarily unavailable',
        'maintenance': true
      });
    }
    await next();
  };

  @override
  String get name => 'Maintenance';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Environment-based middleware
class DebugMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (Khadem.env.get('APP_DEBUG') == 'true') {
      final start = DateTime.now();
      await next();
      final duration = DateTime.now().difference(start);
      res.header('X-Debug-Time', '\${duration.inMilliseconds}ms');
    } else {
      await next();
    }
  };

  @override
  String get name => 'Debug';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const compositionCode = `// Middleware composition
class ApiMiddlewareStack {
  static List<Middleware> get standard => [
    CorsMiddleware(),
    LoggingMiddleware(),
    AuthMiddleware(),
    ValidationMiddleware(),
    ExceptionMiddleware(),
  ];

  static List<Middleware> get public => [
    CorsMiddleware(),
    LoggingMiddleware(),
    RateLimitMiddleware(),
  ];

  static List<Middleware> get admin => [
    ...standard,
    AdminOnlyMiddleware(),
    AuditMiddleware(),
  ];
}

// Usage
router.group(
  prefix: '/api',
  middleware: ApiMiddlewareStack.standard,
  routes: (router) {
    // Routes with standard middleware
  }
);

router.group(
  prefix: '/admin',
  middleware: ApiMiddlewareStack.admin,
  routes: (router) {
    // Routes with admin middleware
  }
);`

const dynamicMiddlewareCode = `// Dynamic middleware with configuration
class RateLimitMiddleware implements Middleware {
  final int maxRequests;
  final Duration window;

  RateLimitMiddleware({
    this.maxRequests = 100,
    this.window = const Duration(minutes: 1)
  });

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final clientId = req.ip ?? 'anonymous';
    final key = 'rate_limit:\$clientId';

    final current = await Khadem.cache.get(key, defaultValue: 0);
    if (current >= maxRequests) {
      return res.status(429).json({
        'error': 'Too many requests',
        'retry_after': window.inSeconds
      });
    }

    await Khadem.cache.put(key, current + 1, ttl: window);
    await next();
  };

  @override
  String get name => 'RateLimit';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Factory for different rate limits
class RateLimitFactory {
  static Middleware api() => RateLimitMiddleware(maxRequests: 1000);
  static Middleware auth() => RateLimitMiddleware(maxRequests: 5, window: Duration(minutes: 5));
  static Middleware public() => RateLimitMiddleware(maxRequests: 100);
}`

const factoryCode = `// Middleware factory pattern
class ThrottleMiddleware implements Middleware {
  final String name;
  final int maxAttempts;
  final Duration decayMinutes;

  ThrottleMiddleware(this.name, {
    this.maxAttempts = 60,
    this.decayMinutes = const Duration(minutes: 1)
  });

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final key = 'throttle:\$name:\${req.ip}';
    final attempts = await Khadem.cache.get(key, defaultValue: 0);

    if (attempts >= maxAttempts) {
      final ttl = await Khadem.cache.ttl(key);
      return res.status(429).json({
        'error': 'Too many attempts',
        'retry_after': ttl
      });
    }

    await Khadem.cache.put(key, attempts + 1, ttl: decayMinutes);
    await next();
  };

  @override
  String get name => this.name;

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Usage
final loginThrottle = ThrottleMiddleware('login', maxAttempts: 5, decayMinutes: Duration(minutes: 15));
final apiThrottle = ThrottleMiddleware('api', maxAttempts: 1000);`

const errorRecoveryCode = `// Error recovery middleware
class FallbackMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (e) {
      // Log the error
      Khadem.logger.error('Request failed', e);

      // Provide fallback response
      if (!res.headersSent) {
        res.status(500).json({
          'error': 'Internal server error',
          'request_id': req.header('x-request-id'),
          'timestamp': DateTime.now().toIso8601String()
        });
      }
    }
  };

  @override
  String get name => 'Fallback';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

// Circuit breaker pattern
class CircuitBreakerMiddleware implements Middleware {
  final String serviceName;
  int failureCount = 0;
  DateTime? lastFailureTime;
  bool isOpen = false;

  CircuitBreakerMiddleware(this.serviceName);

  @override
  MiddlewareHandler get handler => (req, res, next) async {
    if (isOpen) {
      // Check if we should attempt to close the circuit
      if (lastFailureTime != null &&
          DateTime.now().difference(lastFailureTime!) > Duration(minutes: 1)) {
        isOpen = false;
        failureCount = 0;
      } else {
        return res.status(503).json({
          'error': 'Service temporarily unavailable',
          'circuit_breaker': 'open'
        });
      }
    }

    try {
      await next();
      // Reset on success
      failureCount = 0;
    } catch (e) {
      failureCount++;
      lastFailureTime = DateTime.now();

      if (failureCount >= 5) {
        isOpen = true;
      }

      throw e; // Re-throw to let other error handlers deal with it
    }
  };

  @override
  String get name => 'CircuitBreaker';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.business;
}`

const errorHandlingCode = `// Comprehensive error handling
class ErrorHandlingMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    try {
      await next();
    } catch (e, stackTrace) {
      // Attach error info to request for logging
      req.setAttribute('error', e.toString());
      req.setAttribute('stackTrace', stackTrace.toString());
      req.setAttribute('errorTime', DateTime.now());

      // Handle different error types
      if (e is ValidationException) {
        return res.status(422).json({
          'error': 'Validation failed',
          'fields': e.errors,
          'code': 'VALIDATION_ERROR'
        });
      }

      if (e is AuthenticationException) {
        return res.status(401).json({
          'error': 'Authentication required',
          'code': 'AUTH_REQUIRED'
        });
      }

      if (e is AuthorizationException) {
        return res.status(403).json({
          'error': 'Access denied',
          'code': 'ACCESS_DENIED'
        });
      }

      // Generic error response
      Khadem.logger.error('Unhandled error', e, stackTrace);
      res.status(500).json({
        'error': 'Internal server error',
        'request_id': req.header('x-request-id'),
        'code': 'INTERNAL_ERROR'
      });
    }
  };

  @override
  String get name => 'ErrorHandler';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}`

const testingCode = `// Middleware testing
import 'package:test/test.dart';
import 'package:mockito/mockito.dart';

class MockRequest extends Mock implements Request {}
class MockResponse extends Mock implements Response {}

void main() {
  group('AuthMiddleware', () {
    late AuthMiddleware middleware;
    late MockRequest request;
    late MockResponse response;

    setUp(() {
      middleware = AuthMiddleware();
      request = MockRequest();
      response = MockResponse();
    });

    test('should attach user data on valid token', () async {
      // Arrange
      when(request.header('authorization')).thenReturn('Bearer valid-token');
      when(Khadem.auth.verify('valid-token')).thenReturn({'id': 1, 'name': 'John'});

      var nextCalled = false;
      final next = () async => nextCalled = true;

      // Act
      await middleware.handler(request, response, next);

      // Assert
      verify(request.setAttribute('user', {'id': 1, 'name': 'John'}));
      verify(request.setAttribute('isAuthenticated', true));
      expect(nextCalled, true);
    });

    test('should throw on missing token', () async {
      // Arrange
      when(request.header('authorization')).thenReturn(null);

      // Act & Assert
      expect(
        () async => await middleware.handler(request, response, () {}),
        throwsA(isA<AuthException>())
      );
    });
  });
}`

const completeExampleCode = `// Complete middleware implementation example
import 'package:khadem/khadem_dart.dart';

// 1. Custom middleware classes
class RequestLoggerMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final start = DateTime.now();
    Khadem.logger.info('→ \${req.method} \${req.uri}');

    await next();

    final duration = DateTime.now().difference(start);
    Khadem.logger.info('← \${res.statusCode} in \${duration.inMilliseconds}ms');
  };

  @override
  String get name => 'RequestLogger';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.global;
}

class ApiAuthMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      throw AuthException('No token provided');
    }

    try {
      final payload = await Khadem.auth.verify(token);
      req.setAttribute('user', payload);
      req.setAttribute('userId', payload['id']);
    } catch (e) {
      throw AuthException('Invalid token');
    }

    await next();
  };

  @override
  String get name => 'ApiAuth';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.auth;
}

class ValidationMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    // Add validation context
    req.setAttribute('validated', false);

    await next();

    // Post-validation checks
    if (req.getAttribute('validation_errors') != null) {
      throw ValidationException(req.getAttribute('validation_errors'));
    }
  };

  @override
  String get name => 'Validation';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.preprocessing;
}

class ResponseFormatterMiddleware implements Middleware {
  @override
  MiddlewareHandler get handler => (req, res, next) async {
    await next();

    // Ensure JSON responses have consistent format
    if (req.path.startsWith('/api') && !res.headersSent) {
      final existingData = res.getData();
      if (existingData != null && existingData is! Map) {
        res.json({
          'success': true,
          'data': existingData,
          'timestamp': DateTime.now().toIso8601String()
        });
      }
    }
  };

  @override
  String get name => 'ResponseFormatter';

  @override
  MiddlewarePriority get priority => MiddlewarePriority.terminating;
}

  // 2. Server setup with middleware
void setupServer(Server server) {
  // Global middleware
  server.applyMiddlewares([
    RequestLoggerMiddleware(),
    CorsMiddleware(),
    ExceptionMiddleware(),
  ]);

  // API routes with authentication
  router.group(
    prefix: '/api/v1',
    middleware: [ApiAuthMiddleware(), ValidationMiddleware()],
    routes: (router) {
      router.get('/users', UserController.index);
      router.post('/users', UserController.store);
      router.get('/users/:id', UserController.show);
      router.put('/users/:id', UserController.update);
      router.delete('/users/:id', UserController.destroy);
    }
  );

  // Public routes
  router.group(
    prefix: '/public',
    routes: (router) {
      router.get('/health', HealthController.check);
      router.get('/version', VersionController.get);
    }
  );

  // Admin routes with additional middleware
  router.group(
    prefix: '/api/v1/admin',
    middleware: [AdminOnlyMiddleware(), AuditMiddleware()],
    routes: (router) {
      router.get('/stats', AdminController.stats);
      router.post('/maintenance', AdminController.maintenance);
    }
  );
}

// 3. Controller example
class UserController {
  static Future index(Request req, Response res) async {
    final users = await User.query()
        .paginate(perPage: 20, page: int.tryParse(req.query['page'] ?? '1') ?? 1);

    res.json({
      'users': users.data,
      'pagination': {
        'page': users.currentPage,
        'total': users.total,
        'per_page': 20,
        'last_page': users.lastPage,
        'has_next': users.currentPage < users.lastPage,
        'has_prev': users.currentPage > 1,
      }
    });
  }

  static Future store(Request req, Response res) async {
    final data = await req.body;

    // Validation is handled by ValidationMiddleware
    final user = await User.create(data);

    res.status(201).json({
      'user': user,
      'message': 'User created successfully'
    });
  }
}

// 4. Custom exceptions
class AuthException implements Exception {
  final String message;
  AuthException(this.message);

  @override
  String toString() => message;
}

class ValidationException implements Exception {
  final Map<String, dynamic> errors;
  ValidationException(this.errors);

  @override
  String toString() => 'Validation failed: \$errors';
}`
</script>
