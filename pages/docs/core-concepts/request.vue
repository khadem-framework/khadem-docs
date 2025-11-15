<template>
    <div class="space-y-12">
      <!-- Hero Section -->
      <header class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-600/10 dark:from-blue-500/20 dark:via-purple-500/10 dark:to-blue-600/20 p-12 border border-blue-200/50 dark:border-blue-800/50">
        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 mb-6">
            <i class="fas fa-inbox text-blue-600 dark:text-blue-400"></i>
            <span class="text-sm font-medium text-blue-700 dark:text-blue-300">HTTP Request Handling</span>
          </div>
          
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Request System
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Comprehensive HTTP request handling with body parsing, validation, authentication, and session management.
          </p>
        </div>
      </header>

      <!-- Overview Card -->
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
          <i class="fas fa-info-circle text-blue-600 dark:text-blue-400"></i>
          Request Object Overview
        </h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div class="font-semibold text-gray-900 dark:text-white mb-2">Data Access</div>
            <div class="text-gray-600 dark:text-gray-400">Body parsing, parameters, query strings, headers, and cookies</div>
          </div>
          <div class="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div class="font-semibold text-gray-900 dark:text-white mb-2">Validation</div>
            <div class="text-gray-600 dark:text-gray-400">Built-in validation rules with automatic error handling</div>
          </div>
          <div class="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div class="font-semibold text-gray-900 dark:text-white mb-2">Authentication</div>
            <div class="text-gray-600 dark:text-gray-400">User authentication, sessions, and authorization helpers</div>
          </div>
        </div>
      </div>

      <!-- Basic Request Properties -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <i class="fas fa-list text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Basic Request Properties</h2>
            <p class="text-gray-600 dark:text-gray-400">Access HTTP methods, paths, URIs, and headers</p>
          </div>
        </div>

        <CodeBlock
          :code="basicRequestCode"
          language="dart"
          title="Accessing Request Properties"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-globe text-blue-600 dark:text-blue-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">HTTP Properties</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <code class="text-blue-600 dark:text-blue-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">method</code>
                <span class="text-gray-700 dark:text-gray-300">GET, POST, PUT, etc.</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-green-600 dark:text-green-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">path</code>
                <span class="text-gray-700 dark:text-gray-300">Request path (/api/users)</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-orange-600 dark:text-orange-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">uri</code>
                <span class="text-gray-700 dark:text-gray-300">Full URI object</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">query</code>
                <span class="text-gray-700 dark:text-gray-300">Query parameters map</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-file-lines text-purple-600 dark:text-purple-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Header Properties</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <code class="text-blue-600 dark:text-blue-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">contentType</code>
                <span class="text-gray-700 dark:text-gray-300">Content-Type header</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-green-600 dark:text-green-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">userAgent</code>
                <span class="text-gray-700 dark:text-gray-300">User-Agent header</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-orange-600 dark:text-orange-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">acceptsJson()</code>
                <span class="text-gray-700 dark:text-gray-300">Accepts JSON check</span>
              </div>
              <div class="flex items-start gap-2">
                <code class="text-purple-600 dark:text-purple-400 font-mono bg-white dark:bg-gray-900 px-2 py-1 rounded">isAjax()</code>
                <span class="text-gray-700 dark:text-gray-300">AJAX request check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Body Parsing -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
            <i class="fas fa-code text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Body Parsing</h2>
            <p class="text-gray-600 dark:text-gray-400">Parse JSON, form data, and multipart requests</p>
          </div>
        </div>

        <CodeBlock
          :code="bodyParsingCode"
          language="dart"
          title="Request Body Handling"
        />

        <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-file-code text-green-600 dark:text-green-400 text-xl"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Supported Content Types</h3>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <code class="text-green-600 dark:text-green-400 text-sm">application/json</code>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">JSON data</div>
            </div>
            <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <code class="text-green-600 dark:text-green-400 text-sm">application/x-www-form-urlencoded</code>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Form data</div>
            </div>
            <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <code class="text-green-600 dark:text-green-400 text-sm">multipart/form-data</code>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">File uploads</div>
            </div>
          </div>
        </div>
      </section>

      <!-- File Uploads -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <i class="fas fa-upload text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">File Uploads</h2>
            <p class="text-gray-600 dark:text-gray-400">Handle single and multiple file uploads with validation</p>
          </div>
        </div>

        <CodeBlock
          :code="fileUploadCode"
          language="dart"
          title="Handling File Uploads"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-info-circle text-orange-600 dark:text-orange-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">File Properties</h3>
            </div>
            <CodeBlock :code="filePropertiesCode" language="dart" />
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-wrench text-orange-600 dark:text-orange-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">File Methods</h3>
            </div>
            <div class="space-y-3 text-sm">
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-blue-600 dark:text-blue-400 font-mono">saveTo(path)</code>
                <span class="text-gray-700 dark:text-gray-300">Save to disk</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-green-600 dark:text-green-400 font-mono">asString()</code>
                <span class="text-gray-700 dark:text-gray-300">Get as string</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-orange-600 dark:text-orange-400 font-mono">size</code>
                <span class="text-gray-700 dark:text-gray-300">File size in bytes</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-purple-600 dark:text-purple-400 font-mono">extension</code>
                <span class="text-gray-700 dark:text-gray-300">File extension</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Input Validation -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <i class="fas fa-check-circle text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Input Validation</h2>
            <p class="text-gray-600 dark:text-gray-400">Validate request data with comprehensive rules</p>
          </div>
        </div>

        <CodeBlock
          :code="validationCode"
          language="dart"
          title="Request Validation"
        />

        <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-shield-halved text-purple-600 dark:text-purple-400 text-xl"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Validation Features</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-list-check text-purple-600 dark:text-purple-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Comprehensive Rules</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Built-in validation rules for common scenarios</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-exclamation-circle text-purple-600 dark:text-purple-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Automatic Errors</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Error formatting and response handling</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-comment-dots text-purple-600 dark:text-purple-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Custom Messages</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Customize validation error messages</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-file-arrow-up text-purple-600 dark:text-purple-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">File Validation</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Validate file uploads and types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Parameters & Query Strings -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
            <i class="fas fa-link text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Parameters & Query Strings</h2>
            <p class="text-gray-600 dark:text-gray-400">Access route parameters and query string data</p>
          </div>
        </div>

        <CodeBlock
          :code="parametersCode"
          language="dart"
          title="Parameter Handling"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-route text-cyan-600 dark:text-cyan-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Path Parameters</h3>
            </div>
            <CodeBlock :code="pathParamsCode" language="dart" />
          </div>

          <div class="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-magnifying-glass text-cyan-600 dark:text-cyan-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Query Parameters</h3>
            </div>
            <CodeBlock :code="queryParamsCode" language="dart" />
          </div>
        </div>
      </section>

      <!-- Authentication & Authorization -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
            <i class="fas fa-shield-halved text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Authentication & Authorization</h2>
            <p class="text-gray-600 dark:text-gray-400">Handle user authentication and role-based access</p>
          </div>
        </div>

        <CodeBlock
          :code="authCode"
          language="dart"
          title="Authentication Handling"
        />

        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-lock text-indigo-600 dark:text-indigo-400 text-xl"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Auth Features</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-user-check text-indigo-600 dark:text-indigo-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Authentication State</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Check if user is authenticated</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-user-shield text-indigo-600 dark:text-indigo-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Role Authorization</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Role-based access control</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-browser text-indigo-600 dark:text-indigo-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Web Auth Helpers</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Web authentication utilities</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-key text-indigo-600 dark:text-indigo-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">CSRF Protection</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Token validation for security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Session Management -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
            <i class="fas fa-database text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Session Management</h2>
            <p class="text-gray-600 dark:text-gray-400">Store and retrieve session data across requests</p>
          </div>
        </div>

        <CodeBlock
          :code="sessionCode"
          language="dart"
          title="Session Operations"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-cog text-pink-600 dark:text-pink-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Session Methods</h3>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-blue-600 dark:text-blue-400 font-mono">getSession(key)</code>
                <span class="text-gray-700 dark:text-gray-300">Get value</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-green-600 dark:text-green-400 font-mono">setSession(key, value)</code>
                <span class="text-gray-700 dark:text-gray-300">Set value</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-orange-600 dark:text-orange-400 font-mono">flashSession(key, value)</code>
                <span class="text-gray-700 dark:text-gray-300">Flash data</span>
              </div>
              <div class="flex items-start gap-2 bg-white dark:bg-gray-900 p-3 rounded-lg">
                <code class="text-purple-600 dark:text-purple-400 font-mono">pullSession(key)</code>
                <span class="text-gray-700 dark:text-gray-300">Get & remove</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-message text-pink-600 dark:text-pink-400"></i>
              <h3 class="font-semibold text-lg text-gray-900 dark:text-white">Flash Messages</h3>
            </div>
            <CodeBlock :code="flashMessagesCode" language="dart" />
          </div>
        </div>
      </section>

      <!-- Cookies -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
            <i class="fas fa-cookie-bite text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Cookies</h2>
            <p class="text-gray-600 dark:text-gray-400">Manage HTTP cookies with security features</p>
          </div>
        </div>

        <CodeBlock
          :code="cookiesCode"
          language="dart"
          title="Cookie Management"
        />

        <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
          <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-shield text-yellow-600 dark:text-yellow-400 text-xl"></i>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Cookie Features</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-lock text-yellow-600 dark:text-yellow-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Secure Handling</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Secure cookie management</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-flag text-yellow-600 dark:text-yellow-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">HttpOnly Support</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">HttpOnly flag protection</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-clock text-yellow-600 dark:text-yellow-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Auto Expiration</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Automatic expiration handling</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
              <i class="fas fa-ticket text-yellow-600 dark:text-yellow-400 mt-1"></i>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Remember Tokens</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Persistent authentication tokens</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Patterns -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
            <i class="fas fa-puzzle-piece text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Advanced Patterns</h2>
            <p class="text-gray-600 dark:text-gray-400">Custom attributes and request context</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-tag text-red-600 dark:text-red-400"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Custom Attributes</h3>
            </div>
            <CodeBlock :code="attributesCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
              <i class="fas fa-info-circle mr-1"></i>
              Store custom data during request lifecycle
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <div class="flex items-center gap-2 mb-4">
              <i class="fas fa-layer-group text-red-600 dark:text-red-400"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Request Context</h3>
            </div>
            <CodeBlock :code="contextCode" language="dart" />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
              <i class="fas fa-info-circle mr-1"></i>
              Access request data across middleware and handlers
            </p>
          </div>
        </div>
      </section>

      <!-- Complete API Example -->
      <section class="space-y-6">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <i class="fas fa-code text-white text-xl"></i>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Complete API Example</h2>
            <p class="text-gray-600 dark:text-gray-400">Full CRUD implementation with all request features</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
          <CodeBlock
            :code="completeApiCode"
            language="dart"
            title="Full Request Handling Example"
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
            <p class="text-gray-600 dark:text-gray-400">Guidelines for effective request handling</p>
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
                <span>Always validate input data before processing</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
                <span>Use appropriate HTTP status codes in responses</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
                <span>Handle file uploads securely with size limits</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
                <span>Implement proper authentication checks</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
                <span>Use session flash messages for user feedback</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-green-600 dark:text-green-400 mt-1"></i>
                <span>Validate CSRF tokens for state-changing operations</span>
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
                <span>Don't trust user input without validation</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't store sensitive data in cookies without encryption</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't skip authentication checks on protected routes</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't expose error stack traces in production</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't allow unlimited file upload sizes</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-xmark text-red-600 dark:text-red-400 mt-1"></i>
                <span>Don't use GET requests for state-changing operations</span>
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
            href="https://discord.com/invite/XdbryzNJt9"
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
  title: 'Request System - Khadem Docs',
  meta: [
    { name: 'description', content: 'Comprehensive HTTP request handling with body parsing, validation, authentication, and session management in Khadem framework.' }
  ]
})

const basicRequestCode = `// Basic request properties
router.get('/api/profile', (req, res) async {
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
router.post('/api/users', (req, res) async {
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
router.post('/api/contact', (req, res) async {
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
router.post('/api/avatar', (req, res) async {
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
router.post('/api/gallery', (req, res) async {
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
router.post('/api/users', (req, res) async {
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
router.put('/api/users/:id', (req, res) async {
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
router.post('/api/documents', (req, res) async {
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
router.get('/api/users/:id', (req, res) async {
  final userId = req.param('id'); // Get path parameter

  if (userId == null) {
    return res.badRequest().sendJson({'error': 'User ID required'});
  }

  final user = await User.find(userId);
  res.sendJson({'user': user});
});

// Multiple path parameters
router.get('/api/posts/:category/:slug', (req, res) async {
  final category = req.param('category');
  final slug = req.param('slug');

  final post = await Post.where('category', category)
    .where('slug', slug)
    .first();

  res.sendJson({'post': post});
});

// Query parameters
router.get('/api/search', (req, res) async {
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
router.get('/api/profile', (req, res) async {
  if (!req.isAuthenticated) {
    return res.unauthorized().sendJson({
      'error': 'Authentication required'
    });
  }

  final user = req.user;
  res.sendJson({'user': user});
});

// Role-based authorization
router.get('/api/admin/users', (req, res) async {
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
router.get('/api/moderator/content', (req, res) async {
  if (!req.hasAnyRole(['admin', 'moderator'])) {
    return res.forbidden().sendJson({'error': 'Insufficient permissions'});
  }

  // User has admin or moderator role
  const content = await Content.needingModeration();
  res.sendJson({'content': content});
});

// Web authentication helpers
router.get('/dashboard', (req, res) async {
  if (!req.isWebAuthenticated) {
    return await res.redirect('/login');
  }

  final user = await req.getWebUser();
  const viewData = req.webViewData;

  // Render dashboard with user data
  await res.view('dashboard', data: viewData);
});

// CSRF protection
router.post('/api/posts', (req, res) async {
  if (!req.validateCsrfToken(req.input('csrf_token'))) {
    return res.forbidden().sendJson({'error': 'Invalid CSRF token'});
  }

  // Process form...
  res.sendJson({'message': 'Post created'});
});`

const sessionCode = `// Session management
router.post('/login', (req, res) async {
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
router.get('/api/user', (req, res) async {
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
router.get('/api/session/info', (req, res) async {
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
router.post('/logout', (req, res) async {
  req.destroySession();
  res.sendJson({'message': 'Logged out successfully'});
});`

const flashMessagesCode = `// Flash messages
router.post('/contact', (req, res) async {
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
router.get('/messages', (req, res) async {
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
router.post('/login', (req, res) async {
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
router.get('/api/user', (req, res) async {
  final authToken = req.cookie('auth_token');
  final rememberToken = req.rememberToken;

  if (authToken == null && rememberToken == null) {
    return res.unauthorized().sendJson({'error': 'Not authenticated'});
  }

  // Validate tokens...
  res.sendJson({'message': 'Authenticated'});
});

// Cookie utilities
router.get('/cookies', (req, res) async {
  res.sendJson({
    'all_cookies': req.cookies,
    'auth_token': req.cookie('auth_token'),
    'has_remember_token': req.hasRememberToken(),
    'has_csrf_token': req.hasCsrfToken(),
    'csrf_token': req.csrfToken,
  });
});

// Clear cookies
router.post('/logout', (req, res) async {
  req.cookieHandler.delete('auth_token');
  req.cookieHandler.delete('remember_token');

  res.sendJson({'message': 'Logged out'});
});`

const attributesCode = `// Custom attributes
server.addMiddlewareHandler((req, res, next) async {
  // Add custom data to request
  req.setAttribute('request_id', generateRequestId());
  req.setAttribute('start_time', DateTime.now());
  req.setAttribute('user_agent_parsed', parseUserAgent(req.userAgent));

  await next();
});

router.get('/api/data', (req, res) async {
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
  router.group(
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