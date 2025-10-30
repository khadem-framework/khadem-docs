<template>
    <div class="space-y-12">
      <!-- Hero Section -->
      <header class="relative overflow-hidden ">
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 mb-6">
            <i class="fas fa-box-open text-purple-600 dark:text-purple-400"></i>
            <span class="text-sm font-medium text-purple-700 dark:text-purple-300">Core Concepts</span>
          </div>
          
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Service Container & Dependency Injection
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A powerful tool for managing class dependencies and performing dependency injection with type-safe bindings, singletons, and contextual resolution.
          </p>
        </div>
      </header>

      <!-- Overview Section -->
      <section class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-cubes text-purple-600 dark:text-purple-400"></i>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Core Features</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-check-circle text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Type-safe dependency registration and resolution</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-check-circle text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Singleton and factory binding patterns</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-check-circle text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Contextual binding for multi-implementation support</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-check-circle text-purple-600 dark:text-purple-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Lazy initialization for heavy services</span>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-lightbulb text-pink-600 dark:text-pink-400"></i>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Use Cases</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-arrow-right text-pink-600 dark:text-pink-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Database connection management</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-arrow-right text-pink-600 dark:text-pink-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Service layer architecture</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-arrow-right text-pink-600 dark:text-pink-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Testing with mock implementations</span>
            </div>
            <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
              <i class="fas fa-arrow-right text-pink-600 dark:text-pink-400 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300">Plugin and middleware systems</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Binding Methods Section -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <i class="fas fa-link text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Binding Methods</h2>
            <p class="text-gray-600 dark:text-gray-400">Register dependencies in the container</p>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-plug text-blue-600 dark:text-blue-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">bind()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Registers a factory function for type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">T</code> with optional singleton control.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="bindCode" 
                language="dart"
                title="Basic Binding"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white">Parameters:</p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-code text-blue-600 dark:text-blue-400 mt-1"></i>
                    <span><code class="text-blue-600 dark:text-blue-400">factory</code>: Function that creates the instance (receives container)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-code text-blue-600 dark:text-blue-400 mt-1"></i>
                    <span><code class="text-blue-600 dark:text-blue-400">singleton</code>: If true, same instance will be returned each time (default: false)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-gem text-green-600 dark:text-green-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">singleton()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Convenience method for registering a singleton binding.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="singletonCode" 
                language="dart"
                title="Singleton Binding"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 text-sm">
                <p class="text-gray-700 dark:text-gray-300">
                  <i class="fas fa-info-circle text-green-600 dark:text-green-400 mr-2"></i>
                  Equivalent to <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">bind(factory, singleton: true)</code>
                </p>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-hourglass-half text-purple-600 dark:text-purple-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">lazySingleton()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Registers a singleton that's only instantiated on first resolution.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="lazySingletonCode" 
                language="dart"
                title="Lazy Singleton Binding"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 text-sm">
                <p class="text-gray-700 dark:text-gray-300">
                  <i class="fas fa-clock text-purple-600 dark:text-purple-400 mr-2"></i>
                  Difference from regular singleton: Instantiation is deferred until first use
                </p>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-cube text-yellow-600 dark:text-yellow-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">instance()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Registers an already created instance.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="instanceCode" 
                language="dart"
                title="Instance Binding"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white">Useful for:</p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-yellow-600 dark:text-yellow-400 mt-1"></i>
                    <span>Pre-configured objects</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-yellow-600 dark:text-yellow-400 mt-1"></i>
                    <span>Mock instances in testing</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-yellow-600 dark:text-yellow-400 mt-1"></i>
                    <span>Objects created outside DI system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-sitemap text-indigo-600 dark:text-indigo-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">bindWhen()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Registers a contextual binding that only applies for specific context keys.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="bindWhenCode" 
                language="dart"
                title="Contextual Binding"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white">Parameters:</p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-code text-indigo-600 dark:text-indigo-400 mt-1"></i>
                    <span><code class="text-indigo-600 dark:text-indigo-400">context</code>: String key that identifies this binding</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-code text-indigo-600 dark:text-indigo-400 mt-1"></i>
                    <span><code class="text-indigo-600 dark:text-indigo-400">factory</code>: Function that creates the instance</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-code text-indigo-600 dark:text-indigo-400 mt-1"></i>
                    <span><code class="text-indigo-600 dark:text-indigo-400">singleton</code>: Whether to treat as singleton (default: false)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Resolution Methods Section -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <i class="fas fa-search text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Resolution Methods</h2>
            <p class="text-gray-600 dark:text-gray-400">Retrieve dependencies from the container</p>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-arrow-circle-down text-teal-600 dark:text-teal-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">resolve()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Resolves an instance of type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">T</code>, optionally with context.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="resolveCode" 
                language="dart"
                title="Basic Resolution"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-2">Parameters:</p>
                  <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                    <li class="flex items-start gap-2">
                      <i class="fas fa-code text-teal-600 dark:text-teal-400 mt-1"></i>
                      <span><code class="text-teal-600 dark:text-teal-400">context</code>: Optional context key for contextual bindings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Returns:</p>
                  <p class="text-gray-700 dark:text-gray-300">Instance of type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">T</code></p>
                </div>
                <div>
                  <p class="font-semibold text-red-600 dark:text-red-400 mb-1">Throws:</p>
                  <p class="text-gray-700 dark:text-gray-300">Exception if no binding found</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-layer-group text-cyan-600 dark:text-cyan-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">resolveAll()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Resolves all registered instances of type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="resolveAllCode" 
                language="dart"
                title="Multi-Binding Resolution"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white">Useful for:</p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-cyan-600 dark:text-cyan-400 mt-1"></i>
                    <span>Plugin systems</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-cyan-600 dark:text-cyan-400 mt-1"></i>
                    <span>Middleware pipelines</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-cyan-600 dark:text-cyan-400 mt-1"></i>
                    <span>Event handlers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Management Methods Section -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
            <i class="fas fa-cog text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Management Methods</h2>
            <p class="text-gray-600 dark:text-gray-400">Control and inspect container bindings</p>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-check-circle text-red-600 dark:text-red-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">has()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Checks if a binding exists for type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="hasCode" 
                language="dart"
                title="Binding Check"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white mb-1">Returns:</p>
                <p class="text-gray-700 dark:text-gray-300">
                  <code class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">true</code> if binding exists, 
                  <code class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded">false</code> otherwise
                </p>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-trash-alt text-orange-600 dark:text-orange-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">unbind()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Removes the binding for type <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm">T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="unbindCode" 
                language="dart"
                title="Removing Bindings"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
                <p class="font-semibold text-gray-900 dark:text-white">Useful for:</p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-orange-600 dark:text-orange-400 mt-1"></i>
                    <span>Testing scenarios</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-orange-600 dark:text-orange-400 mt-1"></i>
                    <span>Runtime reconfiguration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-broom text-amber-600 dark:text-amber-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">flush()</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Removes all bindings and resets the container.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="flushCode" 
                language="dart"
                title="Resetting Container"
              />
              <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 text-sm">
                <p class="text-gray-700 dark:text-gray-300">
                  <i class="fas fa-exclamation-triangle text-amber-600 dark:text-amber-400 mr-2"></i>
                  <span class="font-semibold">Primary use case:</span> Between tests to ensure clean state
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Usage Patterns Section -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
            <i class="fas fa-puzzle-piece text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Usage Patterns</h2>
            <p class="text-gray-600 dark:text-gray-400">Common implementation examples</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-cogs text-pink-600 dark:text-pink-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service Provider Example</h3>
            </div>
            <CodeBlock 
              :code="providerExampleCode" 
              language="dart"
            />
          </div>
          <div class="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-route text-rose-600 dark:text-rose-400 text-xl"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Contextual Binding Example</h3>
            </div>
            <CodeBlock 
              :code="contextualExampleCode" 
              language="dart"
            />
          </div>
        </div>
      </section>

      <!-- Best Practices Section -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
            <i class="fas fa-star text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Best Practices</h2>
            <p class="text-gray-600 dark:text-gray-400">Guidelines for effective container usage</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Do's -->
          <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <i class="fas fa-check text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Do's</h3>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <i class="fas fa-check-circle text-emerald-600 dark:text-emerald-400 mt-1"></i>
                <span>Use singletons for stateful services (Database, Config)</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check-circle text-emerald-600 dark:text-emerald-400 mt-1"></i>
                <span>Lazy-load heavy services that might not be used</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check-circle text-emerald-600 dark:text-emerald-400 mt-1"></i>
                <span>Register bindings in service providers</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check-circle text-emerald-600 dark:text-emerald-400 mt-1"></i>
                <span>Use contextual bindings for multi-implementation support</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check-circle text-emerald-600 dark:text-emerald-400 mt-1"></i>
                <span>Check binding existence before resolving conditionally</span>
              </li>
            </ul>
          </div>

          <!-- Don'ts -->
          <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                <i class="fas fa-times text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-red-900 dark:text-red-100">Don'ts</h3>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <i class="fas fa-times-circle text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't resolve in constructors (causes circular dependencies)</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times-circle text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't store container in instance variables</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times-circle text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't use factory bindings for stateful services</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times-circle text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't forget to flush container between tests</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-times-circle text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't resolve without error handling in production</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

 
    </div>
  </template>
  
<script setup>
definePageMeta({ layout: 'docs' });
useHead({ 
  title: 'Service Container & Dependency Injection',
  meta: [
    { name: 'description', content: 'Complete reference for the ContainerInterface and DI system' }
  ]
});

const interfaceCode = `/// Interface for a Dependency Injection (DI) container.
abstract interface class ContainerInterface {
  /// Registers a factory for type [T].
  void bind<T>(dynamic Function(ContainerInterface) factory, {bool singleton});

  /// Registers a singleton factory for type [T].
  void singleton<T>(dynamic Function(ContainerInterface) factory);

  /// Registers a lazy singleton (instantiated on first use).
  void lazySingleton<T>(dynamic Function(ContainerInterface) factory);

  /// Registers an existing instance of type [T].
  void instance<T>(T instance);

  /// Registers a contextual binding that applies under specific context key.
  void bindWhen<T>(String context, dynamic Function(ContainerInterface) factory,
      {bool singleton = false});

  /// Resolves an instance of type [T].
  T resolve<T>([String? context]);

  /// Resolves all instances of type [T] (useful for multi-binding).
  List<T> resolveAll<T>();

  /// Checks if a binding exists for type [T].
  bool has<T>();

  /// Removes a binding.
  void unbind<T>();

  /// Flushes all bindings and resets the container.
  void flush();
}`;

const bindCode = `// Basic factory binding (new instance each time)
container.bind<HttpClient>((c) => HttpClient());

// Singleton factory binding
container.bind<Database>((c) => Database.connect(), singleton: true);`;

const singletonCode = `// Singleton database connection
container.singleton<Database>((c) => Database.connect());

// Singleton with dependencies
container.singleton<AuthService>((c) => AuthService(
  userRepo: c.resolve<UserRepository>(),
  config: c.resolve<Config>(),
));`;

const lazySingletonCode = `// Lazy singleton logger
container.lazySingleton<Logger>((c) => Logger(
  level: c.resolve<Config>().logLevel,
));

// Heavy service that might not be used
container.lazySingleton<ReportGenerator>((c) => ReportGenerator(
  database: c.resolve<Database>(),
));`;

const instanceCode = `// Pre-configured instance
final analytics = AnalyticsService(apiKey: 'key-123');
container.instance<AnalyticsService>(analytics);

// Mock instance for testing
final mockUserRepo = MockUserRepository();
container.instance<UserRepository>(mockUserRepo);`;

const bindWhenCode = `// Different payment providers
container.bindWhen<PaymentGateway>(
  'stripe', 
  (c) => StripeGateway(c.resolve<Config>().stripeKey),
  singleton: true
);

container.bindWhen<PaymentGateway>(
  'paypal',
  (c) => PayPalGateway(c.resolve<Config>().paypalKey),
);`;

const resolveCode = `// Basic resolution
final db = container.resolve<Database>();

// Contextual resolution
final paymentGateway = container.resolve<PaymentGateway>('stripe');

// With error handling
try {
  final service = container.resolve<SomeService>();
} catch (e) {
  // Handle missing binding
}`;

const resolveAllCode = `// Get all validators
final validators = container.resolveAll<Validator>();

// Process all middleware
final middleware = container.resolveAll<Middleware>();
await Future.wait(middleware.map((m) => m.process(request)));`;

const hasCode = `// Check before resolving
if (container.has<FeatureService>()) {
  final feature = container.resolve<FeatureService>();
}

// Contextual check
if (container.has<PaymentGateway>('stripe')) {
  // Stripe-specific logic
}`;

const unbindCode = `// Remove standard binding
container.unbind<Logger>();

// Remove contextual binding
container.unbind<PaymentGateway>('stripe');

// Testing pattern
container.unbind<Database>();
container.singleton<Database>(() => TestDatabase());`;

const flushCode = `// Reset entire container
container.flush();

// Test setup example
void setUpTests() {
  container.flush();
  registerTestBindings();
}`;

const providerExampleCode = `class AppServiceProvider {
  void register(ContainerInterface container) {
    // Singletons
    container.singleton<Config>((c) => Config.load());
    container.lazySingleton<Database>((c) => Database(
      config: c.resolve<Config>(),
    ));
    
    // Factories
    container.bind<HttpRequest>((c) => HttpRequest(
      client: c.resolve<HttpClient>(),
    ));
    
    // Contextual
    container.bindWhen<Cache>('redis', (c) => RedisCache());
  }
}`;

const contextualExampleCode = `// Register different storage implementations
container.bindWhen<Storage>(
  's3', 
  (c) => S3Storage(c.resolve<Config>().s3Config),
);
container.bindWhen<Storage>(
  'local', 
  (c) => LocalStorage('/storage'),
);

// Resolve based on context
final storage = isProduction
  ? container.resolve<Storage>('s3')
  : container.resolve<Storage>('local');`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>