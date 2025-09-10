<template>
  <div class="space-y-12">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Eager Loading</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Eager loading is a database optimization technique that allows you to preload related data in a single query, 
        preventing the infamous N+1 query problem and dramatically improving your application's performance.
      </p>
    </header>

    <!-- The Problem Section -->
    <DocSection title="The N+1 Query Problem">
      <template #description>
        <p class="mb-4">
          Before understanding eager loading, let's see the problem it solves. Consider this scenario:
          you want to display a list of blog posts with their authors' names.
        </p>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">❌ The Wrong Way (N+1 Problem)</h4>
          <p class="text-sm text-red-700 dark:text-red-300">
            This approach executes 1 query to get posts + N queries to get each post's author = N+1 total queries!
          </p>
        </div>
      </template>
      <CodeBlock :code="problemExample" language="dart" title="N+1 Query Problem" />
    </DocSection>

    <!-- The Solution Section -->
    <DocSection title="The Solution: Eager Loading">
      <template #description>
        <p class="mb-4">
          Eager loading solves this by fetching all related data upfront with just 2 queries total, 
          regardless of how many records you're working with.
        </p>
        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">✅ The Right Way (Eager Loading)</h4>
          <p class="text-sm text-green-700 dark:text-green-300">
            Only 2 queries: 1 for posts + 1 for all authors. Much faster!
          </p>
        </div>
      </template>
      <CodeBlock :code="solutionExample" language="dart" title="Eager Loading Solution" />
    </DocSection>

    <!-- Basic Usage -->
    <DocSection title="Basic Usage">
      <template #description>
        <p class="mb-4">
          Use the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">withRelations()</code> method 
          to specify which relationships to load. Pass an array of relationship names as strings.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Important</h4>
          <p class="text-sm text-blue-700 dark:text-blue-300">
            Relationships must be defined in your model using <code>hasMany()</code>, <code>belongsTo()</code>, etc.
          </p>
        </div>
      </template>
      <CodeBlock :code="basicUsageExample" language="dart" title="Basic Eager Loading" />
    </DocSection>

    <!-- Multiple Relations -->
    <DocSection title="Loading Multiple Relations">
      <template #description>
        <p class="mb-4">
          You can load multiple relationships at once by passing multiple strings to the array.
          Each relationship will be loaded efficiently.
        </p>
      </template>
      <CodeBlock :code="multipleRelationsExample" language="dart" title="Multiple Relations" />
    </DocSection>

    <!-- Nested Relations -->
    <DocSection title="Nested Relations">
      <template #description>
        <p class="mb-4">
          Load relationships of relationships using dot notation. For example, load posts with their comments, 
          and each comment's author in a single query chain.
        </p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">🔍 How it works</h4>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">
            <code>'comments.user'</code> means: load comments, then for each comment, load its user.
          </p>
        </div>
      </template>
      <CodeBlock :code="nestedRelationsExample" language="dart" title="Nested Relations" />
    </DocSection>

    <!-- Accessing Loaded Data -->
    <DocSection title="Accessing Loaded Relations">
      <template #description>
        <p class="mb-4">
          Once relations are loaded, access them using the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.relation.get()</code> 
          method. The data is already in memory, so no additional database queries are made.
        </p>
      </template>
      <CodeBlock :code="accessingDataExample" language="dart" title="Accessing Loaded Data" />
    </DocSection>

    <!-- Paginated Relations -->
    <DocSection title="Paginated Relations">
      <template #description>
        <p class="mb-4">
          For relationships with many records (like comments on a popular post), you can paginate 
          the related data to control memory usage and improve performance.
        </p>
        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-4">
          <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔧 Pagination Syntax</h4>
          <p class="text-sm text-purple-700 dark:text-purple-300">
            Use <code>:paginated:page=X:perPage=Y</code> after the relation name to paginate.
          </p>
        </div>
      </template>
      <CodeBlock :code="paginatedRelationsExample" language="dart" title="Paginated Relations" />
    </DocSection>

    <!-- Advanced Object Syntax -->
    <DocSection title="Advanced Configuration (Object Syntax)">
  <template #description>
    <p class="mb-4">
      For complex scenarios, use object syntax instead of strings. This gives you fine-grained 
      control over pagination and nested relationships.
    </p>
    <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-4">
      <h4 class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">⚙️ Available Options</h4>
      <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
        <li><code>paginate</code>: Enable/disable pagination (boolean)</li>
        <li><code>page</code>: Which page to load (integer)</li>
        <li><code>perPage</code>: Records per page (integer)</li>
        <li><code>with</code>: Nested relations to load (array)</li>
      </ul>
    </div>
  </template>

  <CodeBlock :code="objectSyntaxExample" language="dart" title="Object Syntax Configuration" />
</DocSection>


    <!-- Real-World Example -->
    <DocSection title="Real-World Example">
      <template #description>
        <p class="mb-4">
          Here's a complete example showing how to build a blog post page with eager loading.
          Notice how we load everything we need in a single query chain.
        </p>
      </template>
      <CodeBlock :code="realWorldExample" language="dart" title="Complete Blog Example" />
    </DocSection>

    <!-- Performance Tips -->
    <DocSection title="Performance Tips & Best Practices">
      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">🚀 Performance Guidelines</h4>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Always use eager loading</strong> when you know you'll need related data</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Paginate large relations</strong> (comments, notifications, etc.)</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span><strong>Load only what you need</strong> - don't over-eager load</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2">✗</span>
              <span><strong>Don't load</strong> relations you won't use in the current request</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-500 mr-2">✗</span>
              <span><strong>Avoid</strong> deeply nested relations (more than 3 levels) without pagination</span>
            </li>
          </ul>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-3">⚠️ Common Pitfalls</h4>
          <ul class="space-y-2 text-amber-700 dark:text-amber-300 text-sm">
            <li><strong>Typos in relation names:</strong> Double-check your relationship method names</li>
            <li><strong>Missing relationship definitions:</strong> Ensure relations are defined in your model</li>
            <li><strong>Over-loading:</strong> Loading too many relations can slow down queries</li>
            <li><strong>Memory issues:</strong> Large unpaginated relations can consume lots of memory</li>
          </ul>
        </div>
      </div>
    </DocSection>

    <!-- Troubleshooting -->
    <DocSection title="Troubleshooting">
      <template #description>
        <p class="mb-4">Having issues with eager loading? Here are common problems and solutions:</p>
      </template>
      <CodeBlock :code="troubleshootingExample" language="dart" title="Debugging Eager Loading" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Eager Loading - Complete Guide',
  meta: [{ 
    name: 'description', 
    content: 'Master eager loading in Khadem ORM. Learn to eliminate N+1 queries and optimize database performance with practical examples.' 
  }]
});

// Problem example - N+1 queries
const problemExample = `
// ❌ This creates N+1 queries (1 + 100 = 101 total queries!)
final posts = await Post().query.get(); // 1 query to get posts

for (final post in posts) {
  final user = await post.user(); // 1 query PER post (100 queries!)
  print('Post by: \${user?.name}');
}

// If you have 100 posts, this executes 101 database queries!
// Query 1: SELECT * FROM posts
// Query 2: SELECT * FROM users WHERE id = 1
// Query 3: SELECT * FROM users WHERE id = 2
// ... 100 more queries!
`;

// Solution example
const solutionExample = `
// ✅ This creates only 2 queries total!
final posts = await Post()
  .query
  .withRelations(['user'])  // Preload user relationship
  .get();

for (final post in posts) {
  final user = post.relation.get('user'); // No database query!
  print('Post by: \${user?.name}');
}

// Only 2 database queries total:
// Query 1: SELECT * FROM posts
// Query 2: SELECT * FROM users WHERE id IN (1,2,3,4,5...)
`;

// Basic usage
const basicUsageExample = `
// Load posts with their authors
final posts = await Post()
  .query
  .withRelations(['user'])
  .get();

// Access the loaded user data
for (final post in posts) {
  final author = post.relation.get('user');
  print('Title: \${post.title}');
  print('Author: \${author?.name}');
}

// Load a single post with its category
final post = await Post()
  .query
  .withRelations(['category'])
  .where('id', 1)
  .first();

final category = post?.relation.get('category');
print('Category: \${category?.name}');
`;

// Multiple relations
const multipleRelationsExample = `
// Load multiple relationships at once
final posts = await Post()
  .query
  .withRelations([
    'user',      // Post author
    'category',  // Post category  
    'tags'       // Post tags
  ])
  .get();

// Access all loaded relations
for (final post in posts) {
  final author = post.relation.get('user');
  final category = post.relation.get('category');
  final tags = post.relation.get('tags');
  
  print('Post: \${post.title}');
  print('Author: \${author?.name}');
  print('Category: \${category?.name}');
  print('Tags: \${tags?.length ?? 0} tags');
}
`;

// Nested relations
const nestedRelationsExample = `
// Load posts with comments, and each comment's author
final posts = await Post()
  .query
  .withRelations([
    'user',           // Post author
    'comments.user'   // Comments + each comment's author
  ])
  .get();

// Access nested data
for (final post in posts) {
  final author = post.relation.get('user');
  final comments = post.relation.get('comments');
  
  print('Post: \${post.title} by \${author?.name}');
  print('Comments: \${comments?.length ?? 0}');
  
  if (comments != null) {
    for (final comment in comments) {
      final commentAuthor = comment.relation.get('user');
      print('  - \${comment.content} by \${commentAuthor?.name}');
    }
  }
}

// Even deeper nesting is possible
final posts = await Post()
  .query
  .withRelations([
    'comments.user.profile',  // Comment author's profile
    'category.posts.user'     // Category's other posts and their authors
  ])
  .get();
`;

// Accessing data
const accessingDataExample = `
final post = await Post()
  .query
  .withRelations(['user', 'comments.user'])
  .first();

// Single relation (belongsTo, hasOne)
final author = post?.relation.get('user');
print('Author: \${author?.name}');

// Multiple relations (hasMany)
final comments = post?.relation.get('comments') as List?;
print('Comment count: \${comments?.length ?? 0}');

// Check if relation was loaded
if (post?.relation.isLoaded('user') == true) {
  print('User relation is loaded');
}

// Access nested relations
if (comments != null) {
  for (final comment in comments) {
    final commentUser = comment.relation.get('user');
    print('Comment by: \${commentUser?.name}');
  }
}
`;

// Paginated relations
const paginatedRelationsExample = `
// Paginate comments (load 10 comments per post)
final posts = await Post()
  .query
  .withRelations([
    'user',
    'comments:paginated:page=1:perPage=10'
  ])
  .get();

// Access paginated data
for (final post in posts) {
  final paginatedComments = post.relation.get('comments');
  
  if (paginatedComments != null) {
    final comments = paginatedComments['data'] as List;
    final meta = paginatedComments['meta'] as Map;
    
    print('Comments (page \${meta['current_page']}): \${comments.length}');
    print('Total comments: \${meta['total']}');
  }
}

// Load specific page of comments with their authors
final post = await Post()
  .query
  .withRelations([
    'comments:paginated:page=2:perPage=5.user'
  ])
  .first();
`;

// Object syntax
const objectSyntaxExample = `
// Advanced configuration using object syntax
final posts = await Post()
  .query
  .withRelations([
    'user',  // Simple string syntax
    {
      'comments': {
        'paginate': true,
        'page': 1,
        'perPage': 5,
        'with': ['user', 'likes']  // Nested relations
      }
    },
    {
      'tags': {
        'paginate': false,
        'with': ['category']
      }
    }
  ])
  .get();

// Mix string and object syntax
final post = await Post()
  .query
  .withRelations([
    'user',  // String syntax
    {        // Object syntax
      'comments': {
        'paginate': true,
        'page': 1,
        'perPage': 10,
        'with': ['user.profile']
      }
    }
  ])
  .first();
`;

// Real world example
const realWorldExample = `
// Complete blog post page with eager loading
class BlogService {
  
  // Get post with all related data for display
  static Future<Map<String, dynamic>> getPostForPage(int postId) async {
    final post = await Post()
      .query
      .withRelations([
        'user.profile',                    // Author with profile
        'category',                        // Post category
        'tags',                           // Post tags
        'comments:paginated:page=1:perPage=10.user.profile',  // Recent comments
        'relatedPosts:paginated:page=1:perPage=5.user',       // Related posts
      ])
      .where('id', postId)
      .where('published', true)
      .first();

    if (post == null) {
      throw Exception('Post not found');
    }

    // All data is loaded, no more queries needed!
    final author = post.relation.get('user');
    final authorProfile = author?.relation.get('profile');
    final category = post.relation.get('category');
    final tags = post.relation.get('tags') as List?;
    final paginatedComments = post.relation.get('comments');
    final relatedPosts = post.relation.get('relatedPosts');

    return {
      'post': post,
      'author': {
        'name': author?.name,
        'email': author?.email,
        'avatar': authorProfile?.avatar,
        'bio': authorProfile?.bio,
      },
      'category': category?.name,
      'tags': tags?.map((tag) => tag.name).toList() ?? [],
      'comments': {
        'data': paginatedComments?['data'] ?? [],
        'total': paginatedComments?['meta']?['total'] ?? 0,
        'hasMore': (paginatedComments?['meta']?['current_page'] ?? 0) < 
                   (paginatedComments?['meta']?['last_page'] ?? 0),
      },
      'relatedPosts': relatedPosts?['data'] ?? [],
    };
  }
}

// Usage in your controller/widget
final blogData = await BlogService.getPostForPage(123);
print('Post: \${blogData['post'].title}');
print('Author: \${blogData['author']['name']}');
print('Comments: \${blogData['comments']['total']}');
`;

// Troubleshooting
const troubleshootingExample = `
// ❌ Common mistakes and their solutions

// Problem: Relation returns null
final post = await Post().query.withRelations(['user']).first();
final user = post?.relation.get('user'); // Returns null

// ✅ Solutions:
// 1. Check if the relationship is defined in your Post model
class Post extends Model {
  // Make sure you have this method
  Future<User?> user() async {
    return await belongsTo(User(), 'user_id');
  }
}

// 2. Check foreign key exists and has correct data
final post = await Post().query.select(['*', 'user_id']).first();
print('User ID: \${post?.user_id}'); // Should not be null

// 3. Check if relation was actually loaded
if (post?.relation.isLoaded('user') == true) {
  print('User relation loaded successfully');
} else {
  print('User relation was not loaded');
}

// Problem: Typo in relation name
final posts = await Post()
  .query
  .withRelations(['usr'])  // ❌ Typo: should be 'user'
  .get();

// ✅ Solution: Use exact relation method name
final posts = await Post()
  .query
  .withRelations(['user'])  // ✅ Correct
  .get();

// Problem: Performance issues with large relations
final posts = await Post()
  .query
  .withRelations(['comments'])  // ❌ Could load thousands of comments
  .get();

// ✅ Solution: Use pagination
final posts = await Post()
  .query
  .withRelations([
    'comments:paginated:page=1:perPage=10'
  ])
  .get();

// Debug: Enable query logging to see what queries are executed
// (Check your ORM documentation for how to enable query logging)
`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}

.prose code {
  background-color: rgba(156, 163, 175, 0.1);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.dark .prose code {
  background-color: rgba(75, 85, 99, 0.3);
}
</style>