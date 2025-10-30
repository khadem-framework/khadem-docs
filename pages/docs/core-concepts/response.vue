<template>
    <div>
        <!-- Hero Section -->
        <div class="mb-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Response System
            </h1>
            <p class="text-xl text-gray-400 leading-relaxed">
                Powerful HTTP response handling with <strong class="text-primary-500">Khadem's</strong> modular system. 
                Send JSON, files, streams, and manage headers with an intuitive API.
            </p>
        </div>

        <!-- Overview Card -->
        <div class="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-6 mb-10">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <i class="fas fa-paper-plane text-purple-500 text-3xl"></i>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-white mb-2">Flexible Response API</h3>
                    <p class="text-gray-300 text-sm">
                        Send various response types with proper headers, status codes, and caching. 
                        Built-in support for JSON, files, streaming, sessions, and more.
                    </p>
                </div>
            </div>
        </div>

        <!-- Basic Response Methods Section -->
        <section class="mb-12">
            <h2 id="basic-methods" class="text-3xl font-bold mb-4">
                <i class="fas fa-code text-primary-500 mr-2"></i>
                Basic Response Methods
            </h2>
            <p class="text-gray-300 mb-6">
                Send different types of responses using simple, chainable methods with automatic header management.
            </p>

            <CodeBlock
                :code="basicResponseCode"
                language="dart"
            />

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-reply text-blue-500 mr-2"></i>
                        Response Types
                    </h3>
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">sendJson()</code>
                            <span class="text-gray-300">JSON responses</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">send()</code>
                            <span class="text-gray-300">Plain text</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono">html()</code>
                            <span class="text-gray-300">HTML content</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-mono">file()</code>
                            <span class="text-gray-300">File downloads</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">stream()</code>
                            <span class="text-gray-300">Data streaming</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-mono">bytes()</code>
                            <span class="text-gray-300">Binary data</span>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-signal text-green-500 mr-2"></i>
                        Status Code Methods
                    </h3>
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">ok()</code>
                            <span class="text-gray-300">200 OK</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">created()</code>
                            <span class="text-gray-300">201 Created</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono">noContent()</code>
                            <span class="text-gray-300">204 No Content</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">badRequest()</code>
                            <span class="text-gray-300">400 Bad Request</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">unauthorized()</code>
                            <span class="text-gray-300">401 Unauthorized</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <code class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">notFound()</code>
                            <span class="text-gray-300">404 Not Found</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- JSON Responses Section -->
        <section class="mb-12">
            <h2 id="json-responses" class="text-3xl font-bold mb-4">
                <i class="fas fa-brackets-curly text-primary-500 mr-2"></i>
                JSON Responses
            </h2>
            <p class="text-gray-300 mb-6">
                Send JSON data with automatic content-type headers and proper encoding. Perfect for REST APIs.
            </p>

            <CodeBlock
                :code="jsonResponseCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-star text-blue-500 mr-2"></i>
                    JSON Features
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Automatic Content-Type header</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Pretty printing with <code class="px-1 py-0.5 bg-gray-800 rounded text-xs">jsonPretty()</code></span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Proper JSON encoding</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-blue-500 mt-1"></i>
                            <span>Support for nested data structures</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- File & Binary Responses Section -->
        <section class="mb-12">
            <h2 id="file-binary" class="text-3xl font-bold mb-4">
                <i class="fas fa-file-arrow-down text-primary-500 mr-2"></i>
                File & Binary Responses
            </h2>
            <p class="text-gray-300 mb-6">
                Serve files and binary data with automatic MIME type detection and efficient streaming.
            </p>

            <CodeBlock
                :code="fileResponseCode"
                language="dart"
            />

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-file text-green-500 mr-2"></i>
                        File Response Features
                    </h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-green-500 text-xs mt-1"></i>
                            <span>Automatic MIME type detection</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-green-500 text-xs mt-1"></i>
                            <span>Content-Length header</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-green-500 text-xs mt-1"></i>
                            <span>Download with custom filename</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-chevron-right text-green-500 text-xs mt-1"></i>
                            <span>Efficient streaming</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-binary text-purple-500 mr-2"></i>
                        Binary Data
                    </h3>
                    <CodeBlock :code="binaryResponseCode" language="dart" />
                </div>
            </div>
        </section>

        <!-- Streaming Responses Section -->
        <section class="mb-12">
            <h2 id="streaming" class="text-3xl font-bold mb-4">
                <i class="fas fa-stream text-primary-500 mr-2"></i>
                Streaming Responses
            </h2>
            <p class="text-gray-300 mb-6">
                Stream large datasets efficiently without loading everything into memory. Perfect for real-time data and large files.
            </p>

            <CodeBlock
                :code="streamingResponseCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-rocket text-green-500 mr-2"></i>
                    Streaming Benefits
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Memory efficient for large datasets</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Real-time data transmission</span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Server-sent events support</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Custom data transformation</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Headers & CORS Section -->
        <section class="mb-12">
            <h2 id="headers-cors" class="text-3xl font-bold mb-4">
                <i class="fas fa-list text-primary-500 mr-2"></i>
                Headers & CORS
            </h2>
            <p class="text-gray-300 mb-6">
                Manage custom headers, CORS policies, and security headers for your responses.
            </p>

            <CodeBlock
                :code="headersCode"
                language="dart"
            />

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-globe text-blue-500 mr-2"></i>
                        CORS Headers
                    </h3>
                    <CodeBlock :code="corsCode" language="dart" />
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-shield-halved text-green-500 mr-2"></i>
                        Security Headers
                    </h3>
                    <CodeBlock :code="securityCode" language="dart" />
                </div>
            </div>
        </section>

        <!-- Caching & Performance Section -->
        <section class="mb-12">
            <h2 id="caching" class="text-3xl font-bold mb-4">
                <i class="fas fa-gauge-high text-primary-500 mr-2"></i>
                Caching & Performance
            </h2>
            <p class="text-gray-300 mb-6">
                Optimize performance with proper cache control headers for different content types.
            </p>

            <CodeBlock
                :code="cachingCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-bolt text-yellow-500 mr-2"></i>
                    Cache Strategies
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-image text-blue-500"></i>
                            <strong class="text-white">Static Assets</strong>
                        </div>
                        <p class="text-sm text-gray-400">Long-term caching (1 year)</p>
                    </div>
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-database text-green-500"></i>
                            <strong class="text-white">API Data</strong>
                        </div>
                        <p class="text-sm text-gray-400">Short-term caching (5-60 min)</p>
                    </div>
                    <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                            <i class="fas fa-sync text-purple-500"></i>
                            <strong class="text-white">Dynamic Content</strong>
                        </div>
                        <p class="text-sm text-gray-400">No caching</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Session & Flash Messages Section -->
        <section class="mb-12">
            <h2 id="session-flash" class="text-3xl font-bold mb-4">
                <i class="fas fa-cookie-bite text-primary-500 mr-2"></i>
                Session & Flash Messages
            </h2>
            <p class="text-gray-300 mb-6">
                Store data across requests and display one-time flash messages for user feedback.
            </p>

            <CodeBlock
                :code="sessionCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-database text-purple-500 mr-2"></i>
                    Session Features
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-purple-500 mt-1"></i>
                            <span>Store data across requests</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-purple-500 mt-1"></i>
                            <span>Flash messages for one-time notifications</span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-purple-500 mt-1"></i>
                            <span>Old input preservation for form validation</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-purple-500 mt-1"></i>
                            <span>Automatic cleanup of flash data</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Error Handling Section -->
        <section class="mb-12">
            <h2 id="error-handling" class="text-3xl font-bold mb-4">
                <i class="fas fa-triangle-exclamation text-primary-500 mr-2"></i>
                Error Handling
            </h2>
            <p class="text-gray-300 mb-6">
                Return consistent, informative error responses with proper status codes and error details.
            </p>

            <CodeBlock
                :code="errorHandlingCode"
                language="dart"
            />

            <div class="mt-8 bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <i class="fas fa-shield-check text-red-500 mr-2"></i>
                    Error Response Best Practices
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Use appropriate HTTP status codes</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Provide consistent error format</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Include error codes for API consumers</span>
                        </li>
                    </ul>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Don't expose sensitive information</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Log errors for debugging</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-red-500 mt-1"></i>
                            <span>Use trace IDs for error tracking</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Advanced Patterns Section -->
        <section class="mb-12">
            <h2 id="advanced-patterns" class="text-3xl font-bold mb-4">
                <i class="fas fa-wand-magic-sparkles text-primary-500 mr-2"></i>
                Advanced Patterns
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-code text-blue-500 mr-2"></i>
                        Response Builder
                    </h3>
                    <CodeBlock :code="responseBuilderCode" language="dart" />
                    <p class="text-sm text-gray-400 mt-4">
                        Consistent API responses with method chaining
                    </p>
                </div>

                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                        <i class="fas fa-satellite-dish text-green-500 mr-2"></i>
                        Server-Sent Events
                    </h3>
                    <CodeBlock :code="sseCode" language="dart" />
                    <p class="text-sm text-gray-400 mt-4">
                        Real-time communication with clients
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
                Full REST API implementation showcasing all response features: pagination, validation, file uploads, and streaming.
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
                            <span>Use appropriate HTTP status codes for different scenarios</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Set proper Content-Type headers automatically</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Implement consistent error response formats</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Use streaming for large responses to save memory</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Set appropriate cache headers for performance</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Validate response data before sending</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-green-500 mt-1"></i>
                            <span>Use flash messages for user feedback</span>
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
                            <span>Don't send multiple responses in one handler</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't expose sensitive error details in production</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't use generic error messages</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't forget to set proper status codes</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't send HTML when JSON is expected</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't block the event loop with synchronous operations</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times text-red-500 mt-1"></i>
                            <span>Don't ignore proper error logging</span>
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
                    <h3 class="text-xl font-semibold text-white mb-2">Questions about Responses?</h3>
                    <p class="text-gray-300 mb-4">
                        Join our community to discuss response patterns and API best practices.
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
    title: 'Response System - Khadem Docs',
    meta: [
        { 
            name: 'description', 
            content: 'Complete guide to Khadem response system - Learn JSON responses, file serving, streaming, headers, caching, sessions, and error handling for building REST APIs.' 
        }
    ]
})

const basicResponseCode = `// Basic response methods
server.get('/api/status', (req, res) async {
  res.sendJson({'status': 'ok', 'timestamp': DateTime.now()});
});

server.get('/text', (req, res) async {
  res.send('Hello World');
});

server.get('/html', (req, res) async {
  res.html('<h1>Welcome</h1><p>This is HTML content</p>');
});

server.get('/empty', (req, res) async {
  res.noContent(); // 204 No Content
});

// Status code convenience methods
server.get('/success', (req, res) async {
  res.ok().sendJson({'message': 'Success'});
});

server.get('/created', (req, res) async {
  res.created().sendJson({'id': 123, 'message': 'Resource created'});
});

server.get('/error', (req, res) async {
  res.badRequest().sendJson({'error': 'Invalid request'});
});`

const jsonResponseCode = `// JSON responses with different formats
server.get('/api/user/:id', (req, res) async {
  final user = await User.find(req.param('id'));

  if (user == null) {
    return res.notFound().sendJson({
      'error': 'User not found',
      'code': 'USER_NOT_FOUND'
    });
  }

  res.sendJson({
    'id': user.id,
    'name': user.name,
    'email': user.email,
    'created_at': user.createdAt.toIso8601String()
  });
});

// Pretty-printed JSON for debugging
server.get('/api/debug', (req, res) async {
  final debugData = {
    'config': Khadem.config.all(),
    'routes': server.routes.length,
    'timestamp': DateTime.now()
  };

  res.jsonPretty(debugData, indent: 2);
});

// Paginated API response
server.get('/api/users', (req, res) async {
  final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
  final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;

  final users = await User.paginate(page, limit);
  final total = await User.count();

  res.sendJson({
    'data': users,
    'pagination': {
      'page': page,
      'limit': limit,
      'total': total,
      'pages': (total / limit).ceil()
    }
  });
});`

const fileResponseCode = `// File download with automatic MIME type detection
server.get('/download/avatar/:filename', (req, res) async {
  final filename = req.param('filename');
  final file = File('storage/avatars/\$filename');

  if (!await file.exists()) {
    return res.notFound().sendJson({'error': 'File not found'});
  }

  await res.file(file);
});

// File download with custom headers
server.get('/export/report.pdf', (req, res) async {
  final file = File('storage/reports/monthly.pdf');

  res.header('Content-Disposition', 'attachment; filename="monthly-report.pdf"');
  res.header('Content-Description', 'Monthly Report');

  await res.file(file);
});

// Image serving with caching
server.get('/images/:filename', (req, res) async {
  final filename = req.param('filename');
  final file = File('storage/images/\$filename');

  if (!await file.exists()) {
    return res.notFound().sendJson({'error': 'Image not found'});
  }

  // Cache images for 1 hour
  res.cache('public, max-age=3600');
  await res.file(file);
});`

const binaryResponseCode = `// Binary data response
server.get('/api/binary', (req, res) async {
  final data = await generateBinaryData();
  res.bytes(data, contentType: 'application/octet-stream');
});

// Custom content type
server.get('/api/pdf', (req, res) async {
  final pdfBytes = await generatePdf();
  res.bytes(pdfBytes, contentType: 'application/pdf');
});`

const streamingResponseCode = `// Database streaming
server.get('/api/export/users', (req, res) async {
  res.header('Content-Type', 'application/json');
  res.header('Transfer-Encoding', 'chunked');

  final userStream = Database.query('SELECT * FROM users')
    .asStream()
    .map((user) => jsonEncode(user) + '\\n');

  await res.stream(userStream);
});

// Real-time progress updates
server.get('/api/process/:taskId', (req, res) async {
  final taskId = req.param('taskId');

  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');

  final progressStream = Stream.periodic(
    Duration(seconds: 1),
    (count) => 'data: {"taskId": "\$taskId", "progress": \${count * 10}}\\n\\n'
  ).take(10);

  await res.stream(progressStream);
});

// Large file streaming
server.get('/download/large-file.mp4', (req, res) async {
  final file = File('storage/videos/large.mp4');

  res.header('Content-Type', 'video/mp4');
  res.header('Accept-Ranges', 'bytes');

  await res.stream(file.openRead());
});

// Custom data transformation
server.get('/api/logs/stream', (req, res) async {
  final logFile = File('storage/logs/app.log');

  res.header('Content-Type', 'text/plain');

  final logStream = logFile.openRead()
    .transform(utf8.decoder)
    .transform(LineSplitter())
    .map((line) => '[LOG] \$line\\n');

  await res.stream(logStream);
});`

const headersCode = `// Custom headers
server.get('/api/data', (req, res) async {
  // Set custom headers
  res.header('X-API-Version', '1.0.0');
  res.header('X-Request-ID', generateRequestId());
  res.header('X-Response-Time', DateTime.now().millisecondsSinceEpoch.toString());

  res.sendJson({'data': 'response with custom headers'});
});

// Content-Type and Content-Length
server.get('/api/file-info', (req, res) async {
  final file = File('storage/document.pdf');

  res.header('Content-Type', 'application/pdf');
  res.header('Content-Length', (await file.length()).toString());
  res.header('Content-Disposition', 'inline; filename="document.pdf"');

  await res.file(file);
});`

const corsCode = `// CORS configuration
server.get('/api/public', (req, res) async {
  res.cors(
    allowOrigin: '*',
    allowMethods: 'GET, POST',
    allowHeaders: 'Content-Type, Authorization'
  );

  res.sendJson({'message': 'Public API'});
});

// Restricted CORS
server.get('/api/private', (req, res) async {
  res.cors(
    allowOrigin: 'https://myapp.com',
    allowMethods: 'GET, POST, PUT, DELETE',
    allowHeaders: 'Content-Type, Authorization, X-API-Key',
    allowCredentials: true,
    maxAge: 86400 // 24 hours
  );

  res.sendJson({'message': 'Private API'});
});`

const securityCode = `// Security headers
server.get('/api/secure', (req, res) async {
  res.security(
    enableHsts: true,
    enableCsp: true,
    enableXFrameOptions: true,
    enableXContentTypeOptions: true,
    cspPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'"
  );

  res.sendJson({'message': 'Secure response'});
});

// Individual security headers
server.get('/api/headers', (req, res) async {
  res.header('X-Frame-Options', 'DENY');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.header('Content-Security-Policy', "default-src 'self'");

  res.sendJson({'message': 'Response with security headers'});
});`

const cachingCode = `// Cache control examples
server.get('/api/static-data', (req, res) async {
  // Cache for 5 minutes
  res.cache('public, max-age=300');

  res.sendJson({'data': 'This can be cached'});
});

server.get('/api/dynamic-data', (req, res) async {
  // No caching
  res.noCache();

  res.sendJson({'data': 'This should not be cached'});
});

server.get('/api/user-data', (req, res) async {
  // Private cache (user-specific)
  res.cache('private, max-age=60');

  res.sendJson({'data': 'User-specific data'});
});

// Static file caching
server.get('/assets/style.css', (req, res) async {
  // Cache for 1 year
  res.cache('public, max-age=31536000, immutable');

  await res.file(File('public/assets/style.css'));
});

// Conditional caching
server.get('/api/posts/:id', (req, res) async {
  final post = await Post.find(req.param('id'));
  final lastModified = post.updatedAt;

  res.header('Last-Modified', lastModified.toUtc().toString());
  res.cache('public, max-age=3600'); // 1 hour

  res.sendJson({'post': post});
});`

const sessionCode = `// Session management
server.post('/login', (req, res) async {
  final credentials = await req.body;
  final user = await authenticateUser(credentials);

  if (user != null) {
    // Store user data in session
    res.sessionPut('user_id', user.id);
    res.sessionPut('user_name', user.name);
    res.sessionPut('user_role', user.role);

    // Flash success message
    res.flashSession('success', 'Login successful!');

    res.sendJson({'message': 'Login successful'});
  } else {
    res.unauthorized().sendJson({'error': 'Invalid credentials'});
  }
});

// Flash input preservation
server.post('/register', (req, res) async {
  final data = await req.body;

  try {
    final user = await User.create(data);

    res.flashSession('success', 'Account created successfully!');
    res.sendJson({'message': 'Account created'});
  } catch (e) {
    // Preserve form input for repopulation
    res.flashInput(data);
    res.flashSession('error', 'Failed to create account');

    res.badRequest().sendJson({'error': 'Validation failed'});
  }
});

// Access flash messages
server.get('/messages', (req, res) async {
  final successMessage = req.session.pull('success');
  final errorMessage = req.session.pull('error');

  res.sendJson({
    'messages': {
      if (successMessage != null) 'success': successMessage,
      if (errorMessage != null) 'error': errorMessage,
    }
  });
});`

const errorHandlingCode = `// Error response patterns
server.get('/api/user/:id', (req, res) async {
  final userId = req.param('id');

  if (userId == null || int.tryParse(userId) == null) {
    return res.badRequest().sendJson({
      'error': {
        'code': 'INVALID_USER_ID',
        'message': 'User ID must be a valid integer',
        'field': 'id',
        'received': userId
      }
    });
  }

  final user = await User.find(int.parse(userId));

  if (user == null) {
    return res.notFound().sendJson({
      'error': {
        'code': 'USER_NOT_FOUND',
        'message': 'User with ID \$userId not found',
        'user_id': userId
      }
    });
  }

  res.sendJson({'user': user});
});

// Validation errors
server.post('/api/posts', (req, res) async {
  final data = await req.body;

  final errors = <String, String>{};

  if (data['title'] == null || data['title'].isEmpty) {
    errors['title'] = 'Title is required';
  }

  if (data['content'] == null || data['content'].isEmpty) {
    errors['content'] = 'Content is required';
  }

  if (errors.isNotEmpty) {
    return res.badRequest().sendJson({
      'error': {
        'code': 'VALIDATION_FAILED',
        'message': 'Please fix the following errors',
        'fields': errors
      }
    });
  }

  final post = await Post.create(data);
  res.created().sendJson({'post': post});
});

// Global error handler
server.get('/test-error', (req, res) async {
  try {
    // Simulate an error
    throw Exception('Database connection failed');
  } catch (e) {
    print('Error: \$e');

    res.internalServerError().sendJson({
      'error': {
        'code': 'INTERNAL_ERROR',
        'message': 'An unexpected error occurred',
        'trace_id': generateTraceId(),
        'details': Khadem.env.get('APP_DEBUG') == 'true' ? e.toString() : null
      }
    });
  }
});`

const responseBuilderCode = `// Response builder pattern
class ApiResponse {
  final Response _response;

  ApiResponse(this._response);

  ApiResponse success(dynamic data, {String? message}) {
    _response.sendJson({
      'success': true,
      'data': data,
      if (message != null) 'message': message,
      'timestamp': DateTime.now().toIso8601String()
    });
    return this;
  }

  ApiResponse error(String message, {
    String? code,
    int statusCode = 400,
    Map<String, dynamic>? details
  }) {
    _response.statusCode(statusCode).sendJson({
      'success': false,
      'error': {
        'message': message,
        if (code != null) 'code': code,
        if (details != null) 'details': details,
      },
      'timestamp': DateTime.now().toIso8601String()
    });
    return this;
  }

  ApiResponse created(dynamic data) {
    _response.statusCode(201).sendJson({
      'success': true,
      'data': data,
      'message': 'Resource created successfully'
    });
    return this;
  }
}

// Usage in controllers
class UserController {
  static Future index(Request req, Response res) async {
    final users = await User.all();
    ApiResponse(res).success(users);
  }

  static Future store(Request req, Response res) async {
    try {
      final data = await req.body;
      final user = await User.create(data);
      ApiResponse(res).created(user);
    } catch (e) {
      ApiResponse(res).error('Failed to create user', code: 'USER_CREATE_FAILED');
    }
  }
}`

const sseCode = `// Server-Sent Events
server.get('/events/notifications', (req, res) async {
  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');
  res.header('Connection', 'keep-alive');

  // Send initial connection message
  res.send('data: {"type": "connected", "message": "Connection established"}\\n\\n');

  // Stream notifications
  final notificationStream = getNotificationStream(req.user.id)
    .map((notification) => 'data: \${jsonEncode(notification)}\\n\\n');

  await res.stream(notificationStream);
});

// Progress tracking
server.get('/upload/progress/:uploadId', (req, res) async {
  final uploadId = req.param('uploadId');

  res.header('Content-Type', 'text/event-stream');
  res.header('Cache-Control', 'no-cache');

  final progressStream = Stream.periodic(
    Duration(milliseconds: 500),
    (count) => 'data: {"uploadId": "\$uploadId", "progress": \${count * 10}}\\n\\n'
  ).take(10);

  await res.stream(progressStream);
});`

const completeApiCode = `// Complete API example with all response features
import 'package:khadem/khadem_dart.dart';

class ApiController {
  static Future getUsers(Request req, Response res) async {
    try {
      final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
      final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;
      final search = req.query['search'];

      var query = User.query();
      if (search != null && search.isNotEmpty) {
        query = query.where('name', 'LIKE', '%\$search%');
      }

      final users = await query.paginate(page, limit);
      final total = await query.count();

      // Set pagination headers
      res.header('X-Total-Count', total.toString());
      res.header('X-Page', page.toString());
      res.header('X-Per-Page', limit.toString());

      // Cache for 5 minutes
      res.cache('private, max-age=300');

      res.sendJson({
        'data': users.map((user) => user.toJson()).toList(),
        'pagination': {
          'page': page,
          'per_page': limit,
          'total': total,
          'total_pages': (total / limit).ceil(),
          'has_next': page * limit < total,
          'has_prev': page > 1,
        }
      });

    } catch (e) {
      res.internalServerError().sendJson({
        'error': 'Failed to fetch users',
        'code': 'USERS_FETCH_FAILED'
      });
    }
  }

  static Future createUser(Request req, Response res) async {
    try {
      final data = await req.body;

      // Validate input
      final validation = await req.validator.validateData(data, {
        'name': 'required|min:2|max:100',
        'email': 'required|email|unique:users,email',
        'password': 'required|min:8',
      });

      if (!validation.isValid) {
        return res.badRequest().sendJson({
          'error': 'Validation failed',
          'code': 'VALIDATION_ERROR',
          'fields': validation.errors
        });
      }

      final user = await User.create({
        ...data,
        'password': hashPassword(data['password']),
        'email_verified_at': null,
      });

      // Flash success message
      res.flashSession('success', 'Account created successfully!');

      res.created().sendJson({
        'user': user.toJson(),
        'message': 'Account created successfully',
        'next_steps': [
          'Check your email for verification',
          'Complete your profile'
        ]
      });

    } catch (e) {
      // Flash input for form repopulation
      res.flashInput(await req.body);
      res.flashSession('error', 'Failed to create account');

      res.internalServerError().sendJson({
        'error': 'Failed to create user',
        'code': 'USER_CREATE_FAILED'
      });
    }
  }

  static Future uploadAvatar(Request req, Response res) async {
    try {
      final userId = req.param('id');
      final avatarFile = req.file('avatar');

      if (avatarFile == null) {
        return res.badRequest().sendJson({
          'error': 'No avatar file provided',
          'code': 'MISSING_AVATAR'
        });
      }

      // Validate file
      if (avatarFile.size > 5 * 1024 * 1024) {
        return res.badRequest().sendJson({
          'error': 'File too large',
          'code': 'FILE_TOO_LARGE'
        });
      }

      final allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.contains(avatarFile.mimeType)) {
        return res.badRequest().sendJson({
          'error': 'Invalid file type',
          'code': 'INVALID_FILE_TYPE'
        });
      }

      // Save file
      final filename = 'avatar_\${userId}_\${DateTime.now().millisecondsSinceEpoch}.\${avatarFile.extension}';
      await avatarFile.move('storage/avatars/\$filename');

      // Update user
      final user = await User.find(userId);
      await user.update({'avatar': filename});

      res.sendJson({
        'message': 'Avatar uploaded successfully',
        'avatar_url': '/storage/avatars/\$filename'
      });

    } catch (e) {
      res.internalServerError().sendJson({
        'error': 'Failed to upload avatar',
        'code': 'AVATAR_UPLOAD_FAILED'
      });
    }
  }

  static Future streamLogs(Request req, Response res) async {
    res.header('Content-Type', 'text/plain');
    res.header('Cache-Control', 'no-cache');

    final logFile = File('storage/logs/app.log');
    final logStream = logFile.openRead()
      .transform(utf8.decoder)
      .transform(LineSplitter())
      .map((line) => '[LOG] \$line\\n');

    await res.stream(logStream);
  }
}

// Register routes
void registerApiRoutes(Server server) {
  server.group(
    prefix: '/api/v1',
    middleware: [AuthMiddleware()],
    routes: (router) {
      router.get('/users', ApiController.getUsers);
      router.post('/users', ApiController.createUser);
      router.post('/users/:id/avatar', ApiController.uploadAvatar);
      router.get('/logs/stream', ApiController.streamLogs);
    }
  );
}`
</script>
