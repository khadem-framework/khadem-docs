<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Advanced Caching System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive caching solution with multiple drivers, advanced features, and performance monitoring for optimizing your Khadem application.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Multiple Drivers</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">TTL Management</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Cache Tags</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Statistics</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Performance Monitoring</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">System Overview</h2>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">CacheManager Architecture</h3>
        <p class="text-blue-800 dark:text-blue-200 mb-4">
          The Khadem CacheManager provides a unified interface for caching operations across different storage backends. It supports automatic driver management, TTL handling, cache tagging, and comprehensive statistics tracking.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Core Features</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Multiple cache drivers (Memory, File, Redis, Hybrid)
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Automatic TTL (Time-To-Live) management
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Cache tagging for bulk invalidation
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Comprehensive statistics and monitoring
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Graceful error handling and fallbacks
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Advanced Capabilities</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Cache warming and preloading
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Distributed caching with Redis
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Cache stampede prevention
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Multi-level caching strategies
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Event-driven cache invalidation
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Important Note</h4>
            <p class="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
              Cache is not a replacement for proper database design. Use caching to improve performance, not to fix architectural issues.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Drivers</h2>

      <CodeBlock
        :code="cacheDriversCode"
        language="dart"
        title="Cache Driver Configuration"
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h3 class="font-medium text-green-600 dark:text-green-400">Memory Driver</h3>
          </div>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>Fastest performance</li>
            <li>Process-specific storage</li>
            <li>Perfect for development</li>
            <li>Lost on application restart</li>
            <li>No external dependencies</li>
          </ul>
          <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <strong>Use Case:</strong> Development, testing, temporary data
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <h3 class="font-medium text-blue-600 dark:text-blue-400">File Driver</h3>
          </div>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>Persistent across restarts</li>
            <li>Simple file-based storage</li>
            <li>No external services needed</li>
            <li>Slower than memory</li>
            <li>File system limitations</li>
          </ul>
          <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <strong>Use Case:</strong> Small applications, shared hosting
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <h3 class="font-medium text-red-600 dark:text-red-400">Redis Driver</h3>
          </div>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>High-performance in-memory</li>
            <li>Distributed caching</li>
            <li>Data persistence options</li>
            <li>Advanced data structures</li>
            <li>Requires Redis server</li>
          </ul>
          <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <strong>Use Case:</strong> Production, distributed systems
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <h3 class="font-medium text-purple-600 dark:text-purple-400">Hybrid Driver</h3>
          </div>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li>Combines memory + file</li>
            <li>Fast access + persistence</li>
            <li>Automatic fallback</li>
            <li>Memory limits handled</li>
            <li>Best of both worlds</li>
          </ul>
          <div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
            <strong>Use Case:</strong> Balanced performance and persistence
          </div>
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Driver Selection Guide</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="text-left py-2 px-3">Scenario</th>
                <th class="text-left py-2 px-3">Recommended Driver</th>
                <th class="text-left py-2 px-3">Reason</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="py-2 px-3">Development/Local</td>
                <td class="py-2 px-3 font-medium text-green-600">Memory</td>
                <td class="py-2 px-3">Fastest, no setup required</td>
              </tr>
              <tr>
                <td class="py-2 px-3">Single Server Production</td>
                <td class="py-2 px-3 font-medium text-blue-600">File</td>
                <td class="py-2 px-3">Persistent, no external services</td>
              </tr>
              <tr>
                <td class="py-2 px-3">Distributed System</td>
                <td class="py-2 px-3 font-medium text-red-600">Redis</td>
                <td class="py-2 px-3">Shared cache across instances</td>
              </tr>
              <tr>
                <td class="py-2 px-3">High-Traffic App</td>
                <td class="py-2 px-3 font-medium text-purple-600">Hybrid</td>
                <td class="py-2 px-3">Memory speed + file persistence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Core Cache Operations</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="basicOperationsCode"
            language="dart"
            title="Basic Cache Operations"
          />
        </div>

        <div>
          <CodeBlock
            :code="advancedOperationsCode"
            language="dart"
            title="Advanced Operations"
          />
        </div>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Available Methods</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">Basic Operations</h4>
            <ul class="space-y-1 text-sm text-blue-600 dark:text-blue-400">
              <li><code>put(key, value, ttl)</code> - Store with TTL</li>
              <li><code>get(key)</code> - Retrieve value</li>
              <li><code>has(key)</code> - Check existence</li>
              <li><code>forget(key)</code> - Remove item</li>
              <li><code>clear()</code> - Clear all items</li>
            </ul>
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">Advanced Operations</h4>
            <ul class="space-y-1 text-sm text-blue-600 dark:text-blue-400">
              <li><code>remember(key, ttl, callback)</code> - Get or store</li>
              <li><code>forever(key, value)</code> - Store permanently</li>
              <li><code>increment(key, amount)</code> - Atomic increment</li>
              <li><code>decrement(key, amount)</code> - Atomic decrement</li>
              <li><code>putMany(items, ttl)</code> - Bulk store</li>
              <li><code>many(keys)</code> - Bulk retrieve</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">Cache Key Best Practices</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-green-700 dark:text-green-300 mb-2">✅ Good Patterns</h4>
            <ul class="space-y-1 text-sm text-green-600 dark:text-green-400">
              <li><code>user:123</code> - Entity-specific keys</li>
              <li><code>posts:recent:page:1</code> - Descriptive keys</li>
              <li><code>cache:user:profile:123</code> - Namespaced keys</li>
              <li><code>api:response:v1:users</code> - Versioned keys</li>
            </ul>
          </div>

          <div>
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-2">❌ Avoid These</h4>
            <ul class="space-y-1 text-sm text-red-600 dark:text-red-400">
              <li><code>123</code> - Non-descriptive keys</li>
              <li><code>user_profile_123</code> - Underscore separators</li>
              <li><code>UserProfile123</code> - Mixed case</li>
              <li><code>very_long_key_name_that_is_hard_to_read</code></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Tags</h2>

      <CodeBlock
        :code="cacheTagsCode"
        language="dart"
        title="Cache Tags for Grouped Operations"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Tag Benefits</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>Group related cache items</li>
          <li>Clear multiple items at once</li>
          <li>Organize cache by feature/area</li>
          <li>Efficient cache invalidation</li>
          <li>Better cache management</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Query Caching</h2>

      <CodeBlock
        :code="queryCachingCode"
        language="dart"
        title="Database Query Result Caching"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">When to Cache Queries</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Frequently accessed data</li>
            <li>Expensive/complex queries</li>
            <li>Data that changes infrequently</li>
            <li>Reference/lookup tables</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache Invalidation Strategies</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Time-based expiration</li>
            <li>Event-based invalidation</li>
            <li>Manual cache clearing</li>
            <li>Database triggers</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Model Caching</h2>

      <CodeBlock
        :code="modelCachingCode"
        language="dart"
        title="Model Instance and Query Caching"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Model Cache Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Automatic cache key generation</li>
          <li>Relationship caching</li>
          <li>Cache warming strategies</li>
          <li>Smart cache invalidation</li>
          <li>Memory-efficient storage</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Response Caching</h2>

      <CodeBlock
        :code="responseCachingCode"
        language="dart"
        title="HTTP Response Caching"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache-Control Headers</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>public</code> - Cacheable by browsers/CDNs</li>
            <li><code>private</code> - Cacheable by browsers only</li>
            <li><code>no-cache</code> - Revalidate before using</li>
            <li><code>max-age</code> - Cache duration in seconds</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">ETag Support</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Automatic ETag generation</li>
            <li>Conditional requests (304)</li>
            <li>Bandwidth optimization</li>
            <li>Cache validation</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Warming</h2>

      <CodeBlock
        :code="cacheWarmingCode"
        language="dart"
        title="Cache Warming Strategies"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Warming Benefits</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li>Eliminate cache misses on startup</li>
          <li>Improve initial response times</li>
          <li>Reduce database load</li>
          <li>Better user experience</li>
          <li>Predictable performance</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Distributed Caching</h2>

      <CodeBlock
        :code="distributedCachingCode"
        language="dart"
        title="Distributed Cache Management"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Redis Cluster Benefits</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Horizontal scaling</li>
            <li>High availability</li>
            <li>Automatic failover</li>
            <li>Data partitioning</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache Synchronization</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Event-driven invalidation</li>
            <li>Pub/Sub notifications</li>
            <li>Cache stampede prevention</li>
            <li>Atomic operations</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Performance Monitoring</h2>

      <CodeBlock
        :code="cacheMonitoringCode"
        language="dart"
        title="Cache Performance Monitoring"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Monitoring Metrics</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>Cache hit/miss ratios</li>
          <li>Response times</li>
          <li>Memory usage</li>
          <li>Eviction rates</li>
          <li>Connection pool stats</li>
          <li>Error rates</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Cache Patterns</h2>

      <CodeBlock
        :code="advancedPatternsCode"
        language="dart"
        title="Advanced Caching Patterns"
      />

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Cache-Aside Pattern</h3>
          <p class="text-sm mt-2">Application checks cache first, then database if miss</p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Write-Through Pattern</h3>
          <p class="text-sm mt-2">Data written to cache and database simultaneously</p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Write-Behind Pattern</h3>
          <p class="text-sm mt-2">Data written to cache first, then asynchronously to database</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use appropriate cache keys and TTL values</li>
            <li>Implement proper cache invalidation strategies</li>
            <li>Monitor cache performance and hit rates</li>
            <li>Use cache tags for organized invalidation</li>
            <li>Implement cache warming for critical data</li>
            <li>Use distributed caching for scalability</li>
            <li>Handle cache failures gracefully</li>
            <li>Consider cache stampede prevention</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't cache sensitive or user-specific data without proper security</li>
            <li>Don't rely solely on cache for critical business logic</li>
            <li>Don't use cache as primary data store</li>
            <li>Don't forget to handle cache misses</li>
            <li>Don't use overly broad cache invalidation</li>
            <li>Don't ignore cache memory limits</li>
            <li>Don't cache frequently changing data</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Caching System',
  meta: [
    { name: 'description', content: 'Comprehensive caching system documentation for Khadem' }
  ]
})

const cacheDriversCode = `// Cache driver configuration and setup
import 'package:khadem/khadem.dart';

// Initialize cache manager
final cacheManager = CacheManager();

// Register cache drivers
cacheManager.registerDriver('memory', MemoryCacheDriver());
cacheManager.registerDriver('file', FileCacheDriver(config: {'path': 'storage/cache'}));
cacheManager.registerDriver('hybrid', HybridCacheDriver(filePath: 'storage/cache'));
cacheManager.registerDriver('redis', RedisCacheDriver(host: 'localhost', port: 6379));

// Set default driver
cacheManager.setDefaultDriver('memory');

// Load from configuration (alternative approach)
final config = ConfigInterface(); // Your config implementation
cacheManager.loadFromConfig(config);

// Basic usage
await cacheManager.put('user:123', {'name': 'John', 'email': 'john@example.com'}, Duration(hours: 1));
final user = await cacheManager.get('user:123');

// Use specific driver
final redisCache = cacheManager.driver('redis');
await redisCache.put('session:abc', sessionData, Duration(hours: 2));

// Get cache statistics
final stats = cacheManager.stats;
print('Hit rate: \${(stats.hitRate * 100).toStringAsFixed(1)}%');
print('Total operations: \${stats.hits + stats.misses}');`

const basicOperationsCode = `// Basic cache operations
class CacheExample {
  static Future demonstrateBasicOperations() async {
    // Store data in cache with TTL
    await Khadem.cache.put('user:123', {'name': 'John', 'email': 'john@example.com'}, Duration(minutes: 10));

    // Store with default TTL
    await Khadem.cache.put('settings', {'theme': 'dark', 'lang': 'en'});

    // Retrieve data
    final user = await Khadem.cache.get('user:123');
    if (user != null) {
      print('User: \$user');
    }

    // Get with default value
    final settings = await Khadem.cache.get('settings', {'theme': 'light', 'lang': 'en'});

    // Check if key exists
    if (await Khadem.cache.has('user:123')) {
      print('User exists in cache');
    }

    // Remove from cache
    await Khadem.cache.forget('user:123');

    // Store permanently
    await Khadem.cache.forever('app_config', {'version': '1.0', 'features': []});

    // Get or store with callback
    final posts = await Khadem.cache.remember('posts', Duration(hours: 1), () async {
      return await Post.all();
    });

    // Clear all cache
    await Khadem.cache.clear();
  }
}`

const advancedOperationsCode = `// Advanced cache operations
class AdvancedCacheExample {
  static Future demonstrateAdvancedOperations() async {
    // Cache with remember pattern - fetch expensive data
    final expensiveData = await Khadem.cache.remember('expensive_calculation', Duration(hours: 1), () async {
      // Simulate expensive operation
      await Future.delayed(Duration(seconds: 2));
      return {'result': 42, 'computed': true};
    });

    // Cache with tags for group invalidation
    await Khadem.cache.tag('user:123', ['users', 'active']);
    await Khadem.cache.tag('user:456', ['users', 'active']);
    await Khadem.cache.tag('post:789', ['posts', 'published']);

    // Invalidate all items with a specific tag
    await Khadem.cache.forgetByTag('users');

    // Cache statistics
    final stats = Khadem.cache.stats;
    print('Cache hit rate: \${(stats.hitRate * 100).toStringAsFixed(1)}%');
    print('Total operations: \${stats.hits + stats.misses}');

    // Multiple drivers usage
    final memoryCache = Khadem.cache.driver('memory');
    final fileCache = Khadem.cache.driver('file');

    await memoryCache.put('quick_data', 'fast access', Duration(minutes: 5));
    await fileCache.put('persistent_data', 'long term storage', Duration(days: 1));

    // Error handling
    try {
      final data = await Khadem.cache.get('nonexistent_key');
      if (data == null) {
        print('Cache miss - data not found');
      }
    } catch (e) {
      print('Cache error: \$e');
    }
  }
}`

const cacheTagsCode = `// Cache tags for grouped operations
class TaggedCacheExample {
  static Future demonstrateTags() async {
    // Tag cache items for group invalidation
    await Khadem.cache.tag('user:123', ['users', 'active']);
    await Khadem.cache.tag('user:456', ['users', 'active']);
    await Khadem.cache.tag('post:789', ['posts', 'published']);

    // Store tagged items
    await Khadem.cache.put('user:123', userData, Duration(hours: 1));
    await Khadem.cache.put('user:456', userData2, Duration(hours: 1));
    await Khadem.cache.put('post:789', postData, Duration(hours: 2));

    // Retrieve tagged items
    final user = await Khadem.cache.get('user:123');

    // Clear all items with specific tag
    await Khadem.cache.forgetByTag('users');

    // Check if tagged item exists
    if (await Khadem.cache.has('post:789')) {
      print('Post exists in cache');
    }
  }

  static Future userCacheManagement() async {
    // Cache user data with tags
    final user = await Khadem.cache.remember('user:\${userId}', Duration(hours: 1), () async {
      return await User.find(userId);
    });

    // Tag the cached user
    await Khadem.cache.tag('user:\${userId}', ['users', 'profile']);

    // Cache user's posts
    final posts = await Khadem.cache.remember('user:\${userId}:posts', Duration(minutes: 30), () async {
      return await User.find(userId).posts().get();
    });

    // Tag the cached posts
    await Khadem.cache.tag('user:\${userId}:posts', ['users', 'posts']);

    // When user updates profile, clear related cache
    await Khadem.cache.forgetByTag('users');

    // When user creates new post, clear posts cache
    await Khadem.cache.forgetByTag('posts');
  }

  static Future categoryBasedCaching() async {
    // Cache products by category
    final electronics = await Khadem.cache.remember(
      'products:category:electronics',
      Duration(hours: 2),
      () async => await Product.where('category_id', electronicsId).get()
    );

    // Tag the cached category
    await Khadem.cache.tag('products:category:electronics', ['products', 'category:electronics']);

    // Cache product details
    final product = await Khadem.cache.remember(
      'product:\${productId}',
      Duration(hours: 4),
      () async => await Product.with(['reviews', 'images']).find(productId)
    );

    // Tag the cached product
    await Khadem.cache.tag('product:\${productId}', ['products', 'details']);

    // Clear all product cache
    await Khadem.cache.forgetByTag('products');

    // Clear specific category
    await Khadem.cache.forgetByTag('category:electronics');
  }
}`

const queryCachingCode = `// Database query caching
class QueryCacheExample {
  static Future cachedQueries() async {
    // Cache expensive query results
    final popularPosts = await Khadem.cache.remember('popular_posts', Duration(hours: 1), () async {
      return await Post.query()
        .with(['user', 'tags'])
        .where('published', true)
        .orderBy('views', 'desc')
        .limit(10)
        .get();
    });

    // Cache user statistics
    final userStats = await Khadem.cache.remember('user_stats', Duration(minutes: 30), () async {
      return await Database.query()
        .selectRaw('COUNT(*) as total_users, AVG(posts_count) as avg_posts')
        .from('users')
        .first();
    });

    // Cache search results with tags
    final searchResults = await Khadem.cache.remember(
      'search:\${query}:\${page}',
      Duration(minutes: 15),
      () async {
        return await Post.where('title', 'LIKE', '%\$query%')
          .orWhere('content', 'LIKE', '%\$query%')
          .paginate(page, 20);
      }
    );

    // Tag the search results for group invalidation
    await Khadem.cache.tag('search:\${query}:\${page}', ['search']);
  }

  static Future smartCacheInvalidation() async {
    // Cache with automatic invalidation on model changes
    final posts = await Khadem.cache.remember('user_posts:\${userId}', Duration(hours: 1), () async {
      return await Post.where('user_id', userId).get();
    });

    // Tag the cached posts
    await Khadem.cache.tag('user_posts:\${userId}', ['posts']);

    // Invalidate cache when new post is created
    Event.listen('post.created', (post) async {
      await Khadem.cache.forget('user_posts:\${post.user_id}');
      await Khadem.cache.forgetByTag('posts');
    });

    // Invalidate cache when post is updated
    Event.listen('post.updated', (post) async {
      await Khadem.cache.forget('post:\${post.id}');
      await Khadem.cache.forget('user_posts:\${post.user_id}');
    });
  }

  static Future cacheWithDependencies() async {
    // Cache with dependency tracking
    final article = await Khadem.cache.remember('article:\${id}', Duration(hours: 2), () async {
      final article = await Article.find(id);

      // Cache related data
      await Khadem.cache.remember('article:\${id}:comments', Duration(minutes: 30), () async {
        return await article.comments().get();
      });

      await Khadem.cache.remember('article:\${id}:author', Duration(hours: 1), () async {
        return await article.author().first();
      });

      return article;
    });

    // Tag related caches
    await Khadem.cache.tag('article:\${id}', ['articles']);
    await Khadem.cache.tag('article:\${id}:comments', ['articles']);
    await Khadem.cache.tag('article:\${id}:author', ['articles']);

    // Clear all related cache when article is updated
    Event.listen('article.updated', (article) async {
      await Khadem.cache.forgetByTag('articles');
    });
  }
}`

const modelCachingCode = `// Model caching
class User extends Model {
  // Cache user instance
  static Future<User?> findCached(int id) async {
    return await Khadem.cache.remember('user:\$id', Duration(hours: 1), () async {
      return await User.find(id);
    });
  }

  // Cache user relationships
  Future<Collection<Post>> getCachedPosts() async {
    return await Khadem.cache.remember('user:\${id}:posts', Duration(minutes: 30), () async {
      return await posts().get();
    });
  }

  // Cache computed properties
  Future<int> getCachedPostCount() async {
    return await Khadem.cache.remember('user:\${id}:post_count', Duration(hours: 1), () async {
      return await posts().count();
    });
  }
}

class Post extends Model {
  // Cache with tags for easy invalidation
  static Future<Post?> findCached(int id) async {
    return await Khadem.cache.remember('post:\$id', Duration(hours: 2), () async {
      return await Post.with(['user', 'comments', 'tags']).find(id);
    });
  }

  // Cache popular posts
  static Future<Collection<Post>> getPopularCached() async {
    return await Khadem.cache.remember('posts:popular', Duration(hours: 1), () async {
      return await Post.query()
        .with(['user'])
        .where('published', true)
        .orderBy('views', 'desc')
        .limit(10)
        .get();
    });
  }

  // Invalidate cache when model changes
  @override
  Future<bool> save() async {
    final result = await super.save();

    if (result) {
      // Clear related caches
      await Khadem.cache.forget('post:\${id}');
      await Khadem.cache.forgetByTag('posts');
      await Khadem.cache.forget('posts:popular');
    }

    return result;
  }
}

// Cache warming for models
class CacheWarmer {
  static Future warmUserCache() async {
    final users = await User.where('active', true).get();

    for (final user in users) {
      await Khadem.cache.remember('user:\${user.id}', Duration(hours: 1), () async {
        return user;
      });
    }
  }

  static Future warmPostCache() async {
    // Warm popular posts
    await Post.getPopularCached();

    // Warm recent posts
    final recentPosts = await Khadem.cache.remember('posts:recent', Duration(minutes: 30), () async {
      return await Post.query()
        .with(['user'])
        .where('published', true)
        .orderBy('created_at', 'desc')
        .limit(20)
        .get();
    });
  }
}`

const responseCachingCode = `// HTTP response caching
class ResponseCacheMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    // Skip caching for non-GET requests
    if (req.method != 'GET') {
      await next();
      return;
    }

    // Generate cache key from request
    final cacheKey = generateCacheKey(req);

    // Check if response is cached
    final cachedResponse = await Khadem.cache.get('response:\$cacheKey');

    if (cachedResponse != null) {
      // Return cached response
      res.statusCode = cachedResponse['status_code'];
      res.headers.addAll(cachedResponse['headers']);
      res.send(cachedResponse['body']);
      return;
    }

    // Capture response for caching
    final originalSend = res.send;
    String? responseBody;
    int statusCode = 200;
    final Map<String, String> headers = {};

    // Override send method to capture response
    res.send = (dynamic body) {
      responseBody = body.toString();
      return originalSend(body);
    };

    // Override statusCode setter
    var _statusCode = res.statusCode;
    set statusCode(int code) {
      _statusCode = code;
      res.statusCode = code;
    }

    await next();

    // Cache response if successful
    if (_statusCode >= 200 && _statusCode < 300 && responseBody != null) {
      final cacheData = {
        'status_code': _statusCode,
        'headers': res.headers,
        'body': responseBody,
        'cached_at': DateTime.now().toIso8601String()
      };

      await Khadem.cache.put('response:\$cacheKey', cacheData, Duration(minutes: 5));
    }
  }
}

String generateCacheKey(Request req) {
  // Include relevant request data in cache key
  final keyData = {
    'path': req.path,
    'query': req.query.toString(),
    'accept': req.header('Accept'),
    'user_id': req.user?.id
  };

  // Create hash for consistent key
  final keyString = jsonEncode(keyData);
  final hash = sha256.convert(utf8.encode(keyString)).toString().substring(0, 16);

  return 'response:\$hash';
}

// Response caching in controllers
class ApiController {
  static Future getPosts(Request req, Response res) async {
    final page = int.tryParse(req.query['page'] ?? '1') ?? 1;
    final limit = int.tryParse(req.query['limit'] ?? '10') ?? 10;

    // Set cache headers
    res.header('Cache-Control', 'public, max-age=300'); // 5 minutes
    res.header('ETag', generateETag(page, limit));

    // Check conditional request
    final ifNoneMatch = req.header('If-None-Match');
    if (ifNoneMatch == generateETag(page, limit)) {
      return res.statusCode(304).empty();
    }

    final posts = await Post.query()
      .with(['user'])
      .paginate(page, limit);

    res.sendJson({
      'data': posts.map((post) => post.toJson()).toList(),
      'meta': {
        'page': page,
        'per_page': limit,
        'total': posts.total,
        'last_page': posts.lastPage,
      }
    });
  }

  static Future getUser(Request req, Response res) async {
    final userId = req.param('id');

    // Cache user data
    final user = await Khadem.cache.remember('api:user:\$userId', Duration(hours: 1), () async {
      return await User.find(userId);
    });

    if (user == null) {
      return res.notFound().sendJson({'error': 'User not found'});
    }

    // Set ETag for conditional requests
    final etag = generateETag(user.updated_at.toIso8601String());
    res.header('ETag', etag);

    // Check if client has current version
    if (req.header('If-None-Match') == etag) {
      return res.statusCode(304).empty();
    }

    res.sendJson({'user': user});
  }
}

String generateETag(String data) {
  return '"\${sha256.convert(utf8.encode(data)).toString().substring(0, 16)}"';
}

// Cache control helpers
class CacheControl {
  static void setPublic(Response res, Duration maxAge) {
    res.header('Cache-Control', 'public, max-age=\${maxAge.inSeconds}');
  }

  static void setPrivate(Response res, Duration maxAge) {
    res.header('Cache-Control', 'private, max-age=\${maxAge.inSeconds}');
  }

  static void setNoCache(Response res) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
  }

  static void setETag(Response res, String etag) {
    res.header('ETag', etag);
  }

  static bool isNotModified(Request req, String etag) {
    return req.header('If-None-Match') == etag;
  }
}`

const cacheWarmingCode = `// Cache warming strategies
class CacheWarmer {
  static Future warmCriticalData() async {
    print('Starting cache warming...');

    final startTime = DateTime.now();

    // Warm user data
    await warmUserData();

    // Warm application settings
    await warmSettings();

    // Warm reference data
    await warmReferenceData();

    // Warm popular content
    await warmPopularContent();

    final duration = DateTime.now().difference(startTime);
    print('Cache warming completed in \${duration.inSeconds} seconds');
  }

  static Future warmUserData() async {
    // Cache active users
    final activeUsers = await User.where('active', true).get();

    for (final user in activeUsers) {
      await Khadem.cache.remember('user:\${user.id}', Duration(hours: 2), () async {
        return user;
      });

      // Cache user's recent posts
      await Khadem.cache.remember('user:\${user.id}:recent_posts', Duration(minutes: 30), () async {
        return await user.posts().orderBy('created_at', 'desc').limit(5).get();
      });
    }

    print('Warmed \${activeUsers.length} user records');
  }

  static Future warmSettings() async {
    // Cache application settings
    final settings = await Setting.all();

    for (final setting in settings) {
      await Khadem.cache.remember('setting:\${setting.key}', Duration(hours: 24), () async {
        return setting.value;
      });
    }

    // Cache grouped settings
    await Khadem.cache.remember('settings:app', Duration(hours: 24), () async {
      return await Setting.where('group', 'app').pluck('value', 'key');
    });

    print('Warmed application settings');
  }

  static Future warmReferenceData() async {
    // Cache categories
    await Khadem.cache.remember('categories', Duration(hours: 6), () async {
      return await Category.orderBy('name').get();
    });

    // Cache tags
    await Khadem.cache.remember('tags', Duration(hours: 6), () async {
      return await Tag.orderBy('name').get();
    });

    // Cache countries/states
    await Khadem.cache.remember('countries', Duration(hours: 24), () async {
      return await Country.orderBy('name').get();
    });

    print('Warmed reference data');
  }

  static Future warmPopularContent() async {
    // Cache popular posts
    await Khadem.cache.remember('posts:popular', Duration(hours: 1), () async {
      return await Post.query()
        .with(['user'])
        .where('published', true)
        .orderBy('views', 'desc')
        .limit(20)
        .get();
    });

    // Cache trending topics
    await Khadem.cache.remember('trending:topics', Duration(minutes: 30), () async {
      return await Database.query()
        .selectRaw('tags.name, COUNT(post_tags.post_id) as count')
        .from('tags')
        .join('post_tags', 'tags.id', '=', 'post_tags.tag_id')
        .join('posts', 'posts.id', '=', 'post_tags.post_id')
        .where('posts.created_at', '>', DateTime.now().subtract(Duration(days: 7)))
        .groupBy('tags.id', 'tags.name')
        .orderBy('count', 'desc')
        .limit(10)
        .get();
    });

    print('Warmed popular content');
  }

  static Future warmOnDemand(String key) async {
    // Warm specific cache keys on demand
    switch (key) {
      case 'users':
        await warmUserData();
        break;
      case 'settings':
        await warmSettings();
        break;
      case 'reference':
        await warmReferenceData();
        break;
      case 'popular':
        await warmPopularContent();
        break;
      default:
        throw Exception('Unknown cache warming key: \$key');
    }
  }
}

// Scheduled cache warming
class ScheduledCacheWarmer {
  static Timer? _timer;

  static void start() {
    // Warm cache on startup
    CacheWarmer.warmCriticalData();

    // Schedule periodic warming
    _timer = Timer.periodic(Duration(hours: 6), (_) async {
      try {
        await CacheWarmer.warmCriticalData();
      } catch (e) {
        print('Cache warming failed: \$e');
      }
    });
  }

  static void stop() {
    _timer?.cancel();
  }
}

// Event-based cache warming
class EventBasedCacheWarmer {
  static void setupListeners() {
    // Warm user cache when user is created
    Event.listen('user.created', (user) async {
      await Khadem.cache.remember('user:\${user.id}', Duration(hours: 2), () async {
        return await User.find(user.id);
      });
    });

    // Warm post cache when post is published
    Event.listen('post.published', (post) async {
      await Khadem.cache.forget('posts:popular'); // Invalidate popular posts cache
      await CacheWarmer.warmPopularContent(); // Re-warm popular content
    });

    // Warm settings cache when setting is updated
    Event.listen('setting.updated', (setting) async {
      await Khadem.cache.forget('setting:\${setting.key}');
      await Khadem.cache.forget('settings:app');
    });
  }
}`

const distributedCachingCode = `// Distributed caching with Redis
class DistributedCache {
  static RedisClient? _redis;

  static Future initialize() async {
    _redis = RedisClient(
      host: env('REDIS_HOST', 'localhost'),
      port: int.parse(env('REDIS_PORT', '6379')),
      password: env('REDIS_PASSWORD'),
    );

    await _redis!.connect();
  }

  static Future set(String key, dynamic value, [Duration? ttl]) async {
    final serialized = jsonEncode(value);

    if (ttl != null) {
      await _redis!.set(key, serialized, ttl: ttl);
    } else {
      await _redis!.set(key, serialized);
    }
  }

  static Future<dynamic> get(String key) async {
    final value = await _redis!.get(key);

    if (value != null) {
      return jsonDecode(value);
    }

    return null;
  }

  static Future<bool> has(String key) async {
    return await _redis!.exists(key) > 0;
  }

  static Future delete(String key) async {
    await _redis!.del(key);
  }

  static Future flush() async {
    await _redis!.flushdb();
  }

  // Atomic operations
  static Future<int> increment(String key, [int amount = 1]) async {
    return await _redis!.incrby(key, amount);
  }

  static Future<int> decrement(String key, [int amount = 1]) async {
    return await _redis!.decrby(key, amount);
  }

  // Hash operations for structured data
  static Future setHash(String key, Map<String, dynamic> data) async {
    final hashData = data.map((k, v) => MapEntry(k, v.toString()));
    await _redis!.hset(key, hashData);
  }

  static Future<Map<String, dynamic>> getHash(String key) async {
    final data = await _redis!.hgetall(key);
    return data.map((k, v) => MapEntry(k, v));
  }

  // Pub/Sub for cache invalidation
  static Future publishInvalidation(String channel, String key) async {
    await _redis!.publish(channel, key);
  }

  static Future subscribeInvalidation(String channel, Function(String) callback) async {
    final subscription = await _redis!.subscribe(channel);
    subscription.listen((message) {
      callback(message);
    });
  }
}

// Cache synchronization across multiple instances
class CacheSynchronizer {
  static Future setupSynchronization() async {
    // Subscribe to cache invalidation events
    await DistributedCache.subscribeInvalidation('cache_invalidation', (key) async {
      // Remove local cache entry
      await Khadem.cache.forget(key);
      print('Invalidated cache key: \$key');
    });

    // Subscribe to cache warming events
    await DistributedCache.subscribeInvalidation('cache_warming', (command) async {
      if (command == 'warm_all') {
        await CacheWarmer.warmCriticalData();
      } else if (command.startsWith('warm:')) {
        final key = command.split(':')[1];
        await CacheWarmer.warmOnDemand(key);
      }
    });
  }

  static Future invalidateAcrossInstances(String key) async {
    // Publish invalidation event
    await DistributedCache.publishInvalidation('cache_invalidation', key);
  }

  static Future warmAcrossInstances(String command) async {
    // Publish warming event
    await DistributedCache.publishInvalidation('cache_warming', command);
  }
}

// Cache with automatic synchronization
class SynchronizedCache {
  static Future put(String key, dynamic value, [Duration? ttl]) async {
    // Store in local cache
    await Khadem.cache.put(key, value, ttl);

    // Store in distributed cache
    await DistributedCache.set(key, value, ttl);
  }

  static Future<dynamic> get(String key) async {
    // Try local cache first
    var value = await Khadem.cache.get(key);

    if (value == null) {
      // Try distributed cache
      value = await DistributedCache.get(key);

      if (value != null) {
        // Store in local cache for future requests
        await Khadem.cache.put(key, value, Duration(minutes: 5));
      }
    }

    return value;
  }

  static Future forget(String key) async {
    // Remove from local cache
    await Khadem.cache.forget(key);

    // Remove from distributed cache
    await DistributedCache.delete(key);

    // Notify other instances
    await CacheSynchronizer.invalidateAcrossInstances(key);
  }
}`

const cacheMonitoringCode = `// Cache performance monitoring
class CacheMonitor {
  static final Map<String, CacheMetrics> _metrics = {};

  static Future recordHit(String key) async {
    final metrics = _getMetrics(key);
    metrics.hits++;
    metrics.lastAccessed = DateTime.now();
  }

  static Future recordMiss(String key) async {
    final metrics = _getMetrics(key);
    metrics.misses++;
    metrics.lastAccessed = DateTime.now();
  }

  static Future recordSet(String key, int size) async {
    final metrics = _getMetrics(key);
    metrics.sets++;
    metrics.size = size;
    metrics.created = DateTime.now();
    metrics.lastAccessed = DateTime.now();
  }

  static Future recordDelete(String key) async {
    final metrics = _getMetrics(key);
    metrics.deletes++;
  }

  static CacheMetrics _getMetrics(String key) {
    return _metrics.putIfAbsent(key, () => CacheMetrics());
  }

  static Map<String, dynamic> getStats() {
    final totalHits = _metrics.values.fold(0, (sum, m) => sum + m.hits);
    final totalMisses = _metrics.values.fold(0, (sum, m) => sum + m.misses);
    final totalSets = _metrics.values.fold(0, (sum, m) => sum + m.sets);
    final totalDeletes = _metrics.values.fold(0, (sum, m) => sum + m.deletes);

    final hitRate = totalHits + totalMisses > 0
      ? (totalHits / (totalHits + totalMisses)) * 100
      : 0.0;

    final totalSize = _metrics.values.fold(0, (sum, m) => sum + m.size);

    return {
      'total_keys': _metrics.length,
      'total_hits': totalHits,
      'total_misses': totalMisses,
      'total_sets': totalSets,
      'total_deletes': totalDeletes,
      'hit_rate_percent': hitRate.toStringAsFixed(2),
      'total_size_bytes': totalSize,
      'avg_size_bytes': _metrics.isNotEmpty ? (totalSize / _metrics.length).round() : 0,
      'oldest_key': _findOldestKey(),
      'newest_key': _findNewestKey(),
    };
  }

  static String? _findOldestKey() {
    if (_metrics.isEmpty) return null;

    var oldestKey = _metrics.keys.first;
    var oldestTime = _metrics[oldestKey]!.created;

    for (final entry in _metrics.entries) {
      if (entry.value.created.isBefore(oldestTime)) {
        oldestKey = entry.key;
        oldestTime = entry.value.created;
      }
    }

    return oldestKey;
  }

  static String? _findNewestKey() {
    if (_metrics.isEmpty) return null;

    var newestKey = _metrics.keys.first;
    var newestTime = _metrics[newestKey]!.created;

    for (final entry in _metrics.entries) {
      if (entry.value.created.isAfter(newestTime)) {
        newestKey = entry.key;
        newestTime = entry.value.created;
      }
    }

    return newestKey;
  }

  static Future cleanupOldMetrics() async {
    final cutoff = DateTime.now().subtract(Duration(days: 7));
    _metrics.removeWhere((key, metrics) =>
      metrics.lastAccessed.isBefore(cutoff));
  }

  static List<Map<String, dynamic>> getTopKeys({int limit = 10}) {
    final sorted = _metrics.entries.toList()
      ..sort((a, b) => (b.value.hits + b.value.misses).compareTo(a.value.hits + a.value.misses));

    return sorted.take(limit).map((entry) => {
      'key': entry.key,
      'hits': entry.value.hits,
      'misses': entry.value.misses,
      'sets': entry.value.sets,
      'deletes': entry.value.deletes,
      'size': entry.value.size,
      'hit_rate': entry.value.hits + entry.value.misses > 0
        ? (entry.value.hits / (entry.value.hits + entry.value.misses) * 100).toStringAsFixed(2)
        : '0.00',
      'last_accessed': entry.value.lastAccessed.toIso8601String(),
    }).toList();
  }
}

class CacheMetrics {
  int hits = 0;
  int misses = 0;
  int sets = 0;
  int deletes = 0;
  int size = 0;
  DateTime created = DateTime.now();
  DateTime lastAccessed = DateTime.now();
}

// Monitored cache wrapper
class MonitoredCache {
  static Future put(String key, dynamic value, [Duration? ttl]) async {
    final size = _calculateSize(value);
    await CacheMonitor.recordSet(key, size);
    return await Khadem.cache.put(key, value, ttl);
  }

  static Future<dynamic> get(String key) async {
    final value = await Khadem.cache.get(key);

    if (value != null) {
      await CacheMonitor.recordHit(key);
    } else {
      await CacheMonitor.recordMiss(key);
    }

    return value;
  }

  static Future forget(String key) async {
    await CacheMonitor.recordDelete(key);
    return await Khadem.cache.forget(key);
  }

  static int _calculateSize(dynamic value) {
    if (value == null) return 0;

    final jsonString = jsonEncode(value);
    return utf8.encode(jsonString).length;
  }
}

// Cache monitoring middleware
class CacheMonitoringMiddleware implements Middleware {
  @override
  Future handle(Request req, Response res, next) async {
    final startTime = DateTime.now();

    await next();

    final duration = DateTime.now().difference(startTime);

    // Log cache performance
    if (duration.inMilliseconds > 100) {
      print('Slow request: \${req.path} took \${duration.inMilliseconds}ms');
    }
  }
}

// Periodic reporting
class CacheReporter {
  static Timer? _timer;

  static void startReporting() {
    _timer = Timer.periodic(Duration(minutes: 5), (_) async {
      final stats = CacheMonitor.getStats();
      final topKeys = CacheMonitor.getTopKeys(5);

      // Log stats
      print('Cache Stats: \${jsonEncode(stats)}');
      print('Top Keys: \${jsonEncode(topKeys)}');

      // Send to monitoring service
      await sendToMonitoringService(stats, topKeys);

      // Cleanup old metrics
      await CacheMonitor.cleanupOldMetrics();
    });
  }

  static void stopReporting() {
    _timer?.cancel();
  }

  static Future sendToMonitoringService(Map<String, dynamic> stats, List<Map<String, dynamic>> topKeys) async {
    // Send to monitoring service (DataDog, New Relic, etc.)
    try {
      final response = await HttpClient().post(
        Uri.parse(env('MONITORING_SERVICE_URL')),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer \${env('MONITORING_API_KEY')}'
        },
        body: jsonEncode({
          'cache_stats': stats,
          'top_keys': topKeys,
          'timestamp': DateTime.now().toIso8601String()
        })
      );

      if (response.statusCode != 200) {
        print('Failed to send cache metrics to monitoring service');
      }
    } catch (e) {
      print('Error sending cache metrics: \$e');
    }
  }
}`

const advancedPatternsCode = `// Advanced caching patterns
class CacheAsidePattern {
  static Future<User?> getUser(int id) async {
    // Check cache first
    final cached = await Khadem.cache.get('user:\$id');

    if (cached != null) {
      return User.fromJson(cached);
    }

    // Cache miss - fetch from database
    final user = await User.find(id);

    if (user != null) {
      // Store in cache for future requests
      await Khadem.cache.put('user:\$id', user.toJson(), Duration(hours: 1));
    }

    return user;
  }

  static Future updateUser(int id, Map<String, dynamic> data) async {
    // Update database first
    final user = await User.find(id);
    await user?.update(data);

    // Invalidate cache
    await Khadem.cache.forget('user:\$id');

    // Optionally update cache with new data
    if (user != null) {
      await Khadem.cache.put('user:\$id', user.toJson(), Duration(hours: 1));
    }
  }
}

class WriteThroughPattern {
  static Future createPost(Map<String, dynamic> data) async {
    // Create post in database
    final post = await Post.create(data);

    // Immediately cache the post
    await Khadem.cache.put('post:\${post.id}', post.toJson(), Duration(hours: 2));

    // Update related caches
    await Khadem.cache.forget('user:\${post.user_id}:posts');

    return post;
  }

  static Future updatePost(int id, Map<String, dynamic> data) async {
    // Update database
    final post = await Post.find(id);
    await post?.update(data);

    // Update cache immediately
    if (post != null) {
      await Khadem.cache.put('post:\${post.id}', post.toJson(), Duration(hours: 2));
    }

    return post;
  }
}

class WriteBehindPattern {
  static Future createPostAsync(Map<String, dynamic> data) async {
    // Store in cache first
    final tempId = 'temp_\${DateTime.now().millisecondsSinceEpoch}';
    await Khadem.cache.put('temp_post:\$tempId', data, Duration(minutes: 5));

    // Queue database write
    await Queue.dispatch(WritePostToDatabase(tempId, data));

    return tempId;
  }

  static Future<Collection<Post>> getUserPosts(int userId) async {
    final cacheKey = 'user:\$userId:posts';

    return await Khadem.cache.remember(cacheKey, Duration(minutes: 30), () async {
      // Check for pending writes
      final pendingWrites = await Khadem.cache.get('pending_writes:user:\$userId') ?? [];

      // Apply pending writes to result
      final posts = await Post.where('user_id', userId).get();

      for (final write in pendingWrites) {
        if (write['action'] == 'create') {
          posts.add(Post.fromJson(write['data']));
        }
      }

      return posts;
    });
  }
}

class CacheStampedePrevention {
  static final Map<String, Completer> _pendingRequests = {};

  static Future<T> rememberWithStampede<T>(
    String key,
    Duration ttl,
    Future<T> Function() callback
  ) async {
    // Check if request is already pending
    if (_pendingRequests.containsKey(key)) {
      return await _pendingRequests[key]!.future as T;
    }

    // Create completer for this request
    final completer = Completer<T>();
    _pendingRequests[key] = completer;

    try {
      // Execute callback
      final result = await callback();

      // Cache the result
      await Khadem.cache.put(key, result, ttl);

      // Complete the request
      completer.complete(result);

      return result;
    } catch (e) {
      completer.completeError(e);
      rethrow;
    } finally {
      // Clean up
      Future.delayed(Duration(seconds: 1), () {
        _pendingRequests.remove(key);
      });
    }
  }

  static Future<T> getWithStampede<T>(String key, Future<T> Function() callback) async {
    // Check cache first
    final cached = await Khadem.cache.get(key);
    if (cached != null) {
      return cached as T;
    }

    // Use stampede prevention
    return await rememberWithStampede(key, Duration(minutes: 5), callback);
  }
}

// Background cache refresh
class BackgroundCacheRefresh {
  static Future setupBackgroundRefresh() async {
    // Refresh critical caches in background
    Timer.periodic(Duration(minutes: 10), (_) async {
      try {
        await refreshCriticalCaches();
      } catch (e) {
        print('Background cache refresh failed: \$e');
      }
    });
  }

  static Future refreshCriticalCaches() async {
    // Refresh popular content
    await Khadem.cache.remember('posts:popular', Duration(hours: 1), () async {
      return await Post.query()
        .with(['user'])
        .where('published', true)
        .orderBy('views', 'desc')
        .limit(20)
        .get();
    });

    // Refresh user statistics
    await Khadem.cache.remember('user_stats', Duration(hours: 2), () async {
      return await Database.query()
        .selectRaw('COUNT(*) as total_users, AVG(posts_count) as avg_posts')
        .from('users')
        .first();
    });
  }
}

// Multi-level caching
class MultiLevelCache {
  static Future<T?> get<T>(String key) async {
    // Level 1: In-memory cache (fastest)
    var value = await MemoryCache.get(key);
    if (value != null) return value as T;

    // Level 2: Redis cache
    value = await RedisCache.get(key);
    if (value != null) {
      // Populate L1 cache
      await MemoryCache.put(key, value, Duration(minutes: 5));
      return value as T;
    }

    // Level 3: Database
    value = await DatabaseCache.get(key);
    if (value != null) {
      // Populate L1 and L2 caches
      await MemoryCache.put(key, value, Duration(minutes: 5));
      await RedisCache.put(key, value, Duration(hours: 1));
      return value as T;
    }

    return null;
  }

  static Future put(String key, dynamic value, Duration ttl) async {
    // Store in all levels
    await MemoryCache.put(key, value, Duration(minutes: 5));
    await RedisCache.put(key, value, ttl);
    await DatabaseCache.put(key, value, ttl * 2); // Longer TTL for DB
  }

  static Future forget(String key) async {
    // Remove from all levels
    await MemoryCache.forget(key);
    await RedisCache.forget(key);
    await DatabaseCache.forget(key);
  }
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
