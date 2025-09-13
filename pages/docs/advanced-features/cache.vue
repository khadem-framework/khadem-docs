<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Cache System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        High-performance caching with multiple drivers and smart invalidation strategies.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Memory</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">File</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Redis</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Tags</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Statistics</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Usage</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Store and Retrieve Data"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Cache is automatically configured via service provider</p>
          <p><strong>⚡ Tip:</strong> Use descriptive keys like <code>'user:123'</code> or <code>'posts:recent'</code></p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Drivers</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h3 class="font-medium">Memory</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Fastest, process-specific</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cache</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <h3 class="font-medium">File</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Persistent, no external deps</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cache.driver('file')</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <h3 class="font-medium">Redis</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Distributed, high performance</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cache.driver('redis')</code>
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Driver Selection Guide</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2 px-3">Use Case</th>
                <th class="text-left py-2 px-3">Recommended</th>
                <th class="text-left py-2 px-3">Why</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr>
                <td class="py-2 px-3">Development</td>
                <td class="py-2 px-3 font-medium text-green-600">Memory</td>
                <td class="py-2 px-3">Fast, no setup</td>
              </tr>
              <tr>
                <td class="py-2 px-3">Production (single server)</td>
                <td class="py-2 px-3 font-medium text-blue-600">File</td>
                <td class="py-2 px-3">Persistent, simple</td>
              </tr>
              <tr>
                <td class="py-2 px-3">Distributed system</td>
                <td class="py-2 px-3 font-medium text-red-600">Redis</td>
                <td class="py-2 px-3">Shared across instances</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Core Operations</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="coreOperationsCode"
            language="dart"
            title="Basic Operations"
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

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Cache is not a replacement for proper database design</li>
          <li>• Always handle cache misses gracefully</li>
          <li>• Use appropriate TTL values based on data freshness needs</li>
          <li>• Monitor cache hit rates and adjust strategies as needed</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Tags</h2>

      <CodeBlock
        :code="cacheTagsCode"
        language="dart"
        title="Group Cache Invalidation"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">When to Use Tags</h4>
        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• Clear related cache entries together</li>
          <li>• Invalidate user-specific data on logout</li>
          <li>• Clear category/product caches on updates</li>
          <li>• Group cache by feature or module</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Query Caching</h2>

      <CodeBlock
        :code="queryCachingCode"
        language="dart"
        title="Cache Expensive Queries"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Best Practices</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Cache results of complex JOINs and aggregations</li>
          <li>• Use appropriate TTL based on data update frequency</li>
          <li>• Include query parameters in cache key</li>
          <li>• Invalidate cache when underlying data changes</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Model Caching</h2>

      <CodeBlock
        :code="modelCachingCode"
        language="dart"
        title="Cache Model Data"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Model Cache Patterns</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• Cache frequently accessed model instances</li>
          <li>• Cache relationships and computed properties</li>
          <li>• Invalidate cache in model save/update methods</li>
          <li>• Use tags for related model data</li>
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

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">HTTP Headers</h4>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Cache-Control: public</strong>
            <p class="text-indigo-700 dark:text-indigo-300">Cacheable by browsers/CDNs</p>
          </div>
          <div>
            <strong>ETag</strong>
            <p class="text-indigo-700 dark:text-indigo-300">Conditional requests (304)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cache Statistics</h2>

      <CodeBlock
        :code="cacheStatsCode"
        language="dart"
        title="Monitor Cache Performance"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Key Metrics</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• Hit rate percentage</li>
          <li>• Total operations count</li>
          <li>• Memory usage</li>
          <li>• Cache key count</li>
          <li>• Average response time</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use descriptive, namespaced cache keys</li>
            <li>• Set appropriate TTL values</li>
            <li>• Handle cache misses gracefully</li>
            <li>• Monitor cache performance regularly</li>
            <li>• Use tags for logical grouping</li>
            <li>• Invalidate cache when data changes</li>
            <li>• Cache expensive operations only</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't cache sensitive user data</li>
            <li>• Don't rely on cache for critical business logic</li>
            <li>• Don't use cache as primary data store</li>
            <li>• Don't forget to handle cache failures</li>
            <li>• Don't use overly broad cache invalidation</li>
            <li>• Don't cache frequently changing data</li>
            <li>• Don't ignore memory limits</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Common Patterns</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Cache-Aside Pattern</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Check cache first, then database</p>
          <CodeBlock
            :code="cacheAsideCode"
            language="dart"
            title="Cache-Aside Implementation"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Write-Through Pattern</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Update cache and database together</p>
          <CodeBlock
            :code="writeThroughCode"
            language="dart"
            title="Write-Through Implementation"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Cache Warming</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Pre-populate cache for better performance</p>
          <CodeBlock
            :code="cacheWarmingCode"
            language="dart"
            title="Cache Warming Strategy"
          />
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

// Quick Start Examples
const basicUsageCode = `// Basic caching
await Khadem.cache.put('key', 'value', Duration(hours: 1));
final value = await Khadem.cache.get('key');

// Remember pattern
final data = await Khadem.cache.remember('user:123', Duration(hours: 1), () async {
  return await User().find(123);
});`

// Core Operations Examples
const coreOperationsCode = `// Store with TTL
await Khadem.cache.put('temp_data', data, Duration(minutes: 30));

// Retrieve
final data = await Khadem.cache.get('my_key');

// Check existence
if (await Khadem.cache.has('my_key')) {
  print('Key exists');
}

// Remove
await Khadem.cache.forget('my_key');

// Clear all
await Khadem.cache.clear();

// Store permanently
await Khadem.cache.forever('app_config', config);`

// Advanced Operations Examples
const advancedOperationsCode = `// Get with default value
final settings = await Khadem.cache.get('settings') ?? defaultSettings;

// Remember pattern with complex computation
final result = await Khadem.cache.remember('complex_calc', Duration(hours: 2), () async {
  // Expensive computation here
  return await performComplexCalculation();
});

// Check multiple keys
final userExists = await Khadem.cache.has('user:123');
final profileExists = await Khadem.cache.has('user:123:profile');

// Batch operations (if supported by driver)
await Khadem.cache.put('key1', 'value1', Duration(hours: 1));
await Khadem.cache.put('key2', 'value2', Duration(hours: 1));`

// Cache Tags Examples
const cacheTagsCode = `// Tag items for group operations
await Khadem.cache.tag('user:123', ['users', 'active']);
await Khadem.cache.tag('user:456', ['users', 'active']);

// Clear by tag
await Khadem.cache.forgetByTag('users'); // Clears both users

// Multiple tags per key
await Khadem.cache.tag('post:789', ['posts', 'published', 'featured']);

// Clear specific tag group
await Khadem.cache.forgetByTag('posts'); // Clears all posts`

// Query Caching Examples
const queryCachingCode = `// Cache database queries
final posts = await Khadem.cache.remember('popular_posts', Duration(hours: 1), () async {
  return await Post().query()
    .with(['user', 'tags'])
    .where('published', true)
    .orderBy('views', 'desc')
    .limit(10)
    .get();
});

// Cache with automatic invalidation
Event.listen('post.created', (post) async {
  await Khadem.cache.forget('popular_posts');
});`

// Model Caching Examples
const modelCachingCode = `class User extends KhademModel<User> {
  static Future<User?> findCached(int id) async {
    return await Khadem.cache.remember('user:\$id', Duration(hours: 1), () async {
      return await User().find(id);
    });
  }

  @override
  Future<bool> save() async {
    final result = await super.save();
    if (result) {
      await Khadem.cache.forget('user:\${id}'); // Invalidate cache
    }
    return result;
  }
}

// Usage
final user = await User.findCached(123);
final users = await Khadem.cache.remember('users:active', Duration(hours: 2), () async {
  return await User().query().where('active', true).get();
});`

// Response Caching Examples
const responseCachingCode = `class ApiController {
  static Future getPosts(Request req, Response res) async {
    final posts = await Khadem.cache.remember('api:posts', Duration(minutes: 5), () async {
      return await Post().query().with(['user']).paginate(1, 20);
    });

    res.header('Cache-Control', 'public, max-age=300');
    res.sendJson({'data': posts});
  }
}`

// Statistics Examples
const cacheStatsCode = `// Get cache statistics
final stats = Khadem.cache.stats;
print('Hit rate: \${stats.hitRate}%');
print('Total operations: \${stats.totalOperations}');
print('Hits: \${stats.hits}, Misses: \${stats.misses}');

// Monitor specific operations
await Khadem.cache.put('monitored_key', data, Duration(hours: 1));
// Stats are automatically updated

// Check cache health
if (stats.hitRate < 50.0) {
  print('Warning: Low cache hit rate detected');
}

// Get detailed metrics
print('Read operations: \${stats.readOperations}');
print('Write operations: \${stats.writeOperations}');
print('Cache sets: \${stats.sets}');
print('Cache deletions: \${stats.deletions}');`

// Best Practices Examples
const bestPracticesCode = `// Use descriptive keys
await Khadem.cache.put('user:123:profile', userData, Duration(hours: 1));
await Khadem.cache.put('posts:user:123:recent', posts, Duration(minutes: 30));

// Set appropriate TTL
await Khadem.cache.put('user_session', session, Duration(hours: 24)); // Long-lived
await Khadem.cache.put('search_results', results, Duration(minutes: 5)); // Short-lived

// Handle cache misses gracefully
final data = await Khadem.cache.get('key') ?? await fetchFromDatabase();

// Use tags for related data
await Khadem.cache.tag('user:123', ['users']);
await Khadem.cache.tag('user:123:posts', ['users', 'posts']);`

// Common Patterns Examples
const cacheAsideCode = `// Cache-aside pattern
Future<User?> getUser(int id) async {
  final cached = await Khadem.cache.get('user:\$id');
  if (cached != null) return User().fromJson(cached);

  final user = await User().find(id);
  if (user != null) {
    await Khadem.cache.put('user:\$id', user.toJson(), Duration(hours: 1));
  }
  return user;
}`

const writeThroughCode = `// Write-through pattern
Future createPost(Map<String, dynamic> data) async {
  final post = await Post().create(data);
  await Khadem.cache.put('post:\${post.id}', post.toJson(), Duration(hours: 2));
  return post;
}`

const cacheWarmingCode = `// Cache warming
class CacheWarmer {
  static Future warmPopularContent() async {
    await Khadem.cache.remember('posts:popular', Duration(hours: 1), () async {
      return await Post().query()
        .orderBy('views', 'desc')
        .limit(20)
        .get();
    });
  }
}

// Background refresh
Timer.periodic(Duration(minutes: 10), (_) async {
  await CacheWarmer.warmPopularContent();
});`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
