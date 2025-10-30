<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">ORM Features & Traits</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Advanced ORM features including Model Observers, Timestamps, Soft Deletes, Slugs,
        UUID Primary Keys, Query Scopes, and more.
      </p>
    </header>

    <!-- Model Observers -->
    <DocSection title="Model Observers">
      <template #description>
        Observers provide a clean way to separate event handling logic from your models.
        Listen to model lifecycle events and execute code before/after operations.
      </template>
      <CodeBlock :code="observerBasic" language="dart" title="Creating an Observer" />
      <CodeBlock :code="observerRegistration" language="dart" title="Registering an Observer" class="mt-4" />
      
      <div class="mt-4 overflow-x-auto">
        <h4 class="font-semibold mb-2">Observer Lifecycle Methods:</h4>
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Method</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">When Called</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Can Cancel?</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono">creating()</td>
              <td class="px-6 py-4 text-sm">Before INSERT query</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">created()</td>
              <td class="px-6 py-4 text-sm">After INSERT succeeds</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">updating()</td>
              <td class="px-6 py-4 text-sm">Before UPDATE query</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">updated()</td>
              <td class="px-6 py-4 text-sm">After UPDATE succeeds</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">saving()</td>
              <td class="px-6 py-4 text-sm">Before INSERT or UPDATE</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">saved()</td>
              <td class="px-6 py-4 text-sm">After INSERT or UPDATE</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">deleting()</td>
              <td class="px-6 py-4 text-sm">Before DELETE query</td>
              <td class="px-6 py-4 text-sm text-green-600">Yes (return false)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">deleted()</td>
              <td class="px-6 py-4 text-sm">After DELETE succeeds</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">retrieving()</td>
              <td class="px-6 py-4 text-sm">Before SELECT query</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">retrieved()</td>
              <td class="px-6 py-4 text-sm">After SELECT succeeds</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">restoring()</td>
              <td class="px-6 py-4 text-sm">Before soft delete restore</td>
              <td class="px-6 py-4 text-sm text-green-600">Yes (return false)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">restored()</td>
              <td class="px-6 py-4 text-sm">After restore succeeds</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">forceDeleting()</td>
              <td class="px-6 py-4 text-sm">Before permanent delete</td>
              <td class="px-6 py-4 text-sm text-green-600">Yes (return false)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">forceDeleted()</td>
              <td class="px-6 py-4 text-sm">After permanent delete</td>
              <td class="px-6 py-4 text-sm">No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeBlock :code="observerAdvanced" language="dart" title="Advanced Observer Example" class="mt-6" />
    </DocSection>

    <!-- Timestamps Trait -->
    <DocSection title="Timestamps Trait">
      <template #description>
        Automatically manage `created_at` and `updated_at` timestamps when creating or updating models.
      </template>
      <CodeBlock :code="timestampsBasic" language="dart" title="Using Timestamps" />
      <CodeBlock :code="timestampsCustom" language="dart" title="Customizing Timestamps" class="mt-4" />
      <CodeBlock :code="timestampsHelpers" language="dart" title="Timestamp Helper Methods" class="mt-4" />
    </DocSection>

    <!-- Soft Deletes Trait -->
    <DocSection title="Soft Deletes Trait">
      <template #description>
        Soft delete records by setting a `deleted_at` timestamp instead of permanently removing them.
      </template>
      <CodeBlock :code="softDeletesBasic" language="dart" title="Using Soft Deletes" />
      <CodeBlock :code="softDeletesQuery" language="dart" title="Querying Soft Deleted Records" class="mt-4" />
      <CodeBlock :code="softDeletesRestore" language="dart" title="Restoring and Force Deleting" class="mt-4" />
    </DocSection>

    <!-- HasSlug Trait -->
    <DocSection title="HasSlug Trait">
      <template #description>
        Automatically generate URL-friendly slugs from text fields (e.g., titles).
      </template>
      <CodeBlock :code="slugBasic" language="dart" title="Using HasSlug" />
      <CodeBlock :code="slugAdvanced" language="dart" title="Advanced Slug Usage" class="mt-4" />
    </DocSection>

    <!-- UuidPrimaryKey Trait -->
    <DocSection title="UuidPrimaryKey Trait">
      <template #description>
        Use UUIDs as primary keys instead of auto-incrementing integers.
      </template>
      <CodeBlock :code="uuidBasic" language="dart" title="Using UUID Primary Keys" />
      <CodeBlock :code="uuidAdvanced" language="dart" title="UUID with Observer" class="mt-4" />
    </DocSection>

    <!-- Query Scopes -->
    <DocSection title="Query Scopes">
      <template #description>
        Define reusable query constraints that can be chained for cleaner, more maintainable code.
      </template>
      <CodeBlock :code="scopesBasic" language="dart" title="Defining Query Scopes" />
      <CodeBlock :code="scopesAdvanced" language="dart" title="Advanced Scope Usage" class="mt-4" />
      <CodeBlock :code="scopesConditional" language="dart" title="Conditional Scopes" class="mt-4" />
    </DocSection>

    <!-- Combining Traits -->
    <DocSection title="Combining Multiple Traits">
      <template #description>
        Models can use multiple traits together for powerful functionality.
      </template>
      <CodeBlock :code="combinedTraits" language="dart" title="Using Multiple Traits" />
    </DocSection>

    <!-- Best Practices -->
    <DocSection title="Best Practices">
      <template #description>
        Follow these guidelines when using ORM features and traits.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use observers for cross-cutting concerns</li>
            <li>Keep observer logic focused and single-purpose</li>
            <li>Use soft deletes for audit trails</li>
            <li>Generate slugs in observers for consistency</li>
            <li>Use query scopes for reusable queries</li>
            <li>Combine traits for rich model functionality</li>
            <li>Document custom timestamp columns</li>
            <li>Use UUIDs for distributed systems</li>
          </ul>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Put heavy logic in observers (use jobs)</li>
            <li>Create circular observer dependencies</li>
            <li>Force delete unless necessary</li>
            <li>Forget to add deleted_at index</li>
            <li>Regenerate slugs after publication</li>
            <li>Use too many traits on one model</li>
            <li>Disable timestamps without good reason</li>
            <li>Mix UUID and integer primary keys</li>
          </ul>
        </div>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'ORM Features & Traits',
  meta: [{ name: 'description', content: 'Advanced ORM features in Khadem framework' }]
});

const observerBasic = `
import 'package:khadem/khadem.dart';

class UserObserver extends ModelObserver<User> {
  @override
  void creating(User user) {
    // Set UUID before creating
    user.ensureUuidGenerated();
    user.createdBy = getCurrentUserId();
    
    print('Creating user: \${user.email}');
  }

  @override
  void created(User user) {
    // Send welcome email after creation
    print('User created: \${user.email}');
    sendWelcomeEmail(user);
  }

  @override
  void updating(User user) {
    print('Updating user: \${user.id}');
    user.updatedBy = getCurrentUserId();
  }

  @override
  void updated(User user) {
    print('User updated: \${user.id}');
    clearUserCache(user.id);
  }

  @override
  bool deleting(User user) {
    // Prevent deletion if user has active posts
    if (user.postsCount > 0) {
      print('Cannot delete user with active posts');
      return false; // Cancel deletion
    }
    return true; // Allow deletion
  }

  @override
  void deleted(User user) {
    print('User deleted: \${user.id}');
    logUserDeletion(user);
  }
}`;

const observerRegistration = `
// Register observer globally (in service provider or bootstrap)
User.observe(UserObserver());

// Or register in model
class User extends KhademModel<User> {
  static void boot() {
    observe(UserObserver());
  }
}

// Now all User operations will trigger observer methods
final user = User()
  ..name = 'John Doe'
  ..email = 'john@example.com';

await user.save(); // Triggers creating() and created()

user.name = 'Jane Doe';
await user.save(); // Triggers updating() and updated()

await user.delete(); // Triggers deleting() (can be cancelled)
`;

const observerAdvanced = `
class PostObserver extends ModelObserver<Post> {
  @override
  void creating(Post post) {
    // Generate slug from title
    post.ensureSlugGenerated();
    
    // Set defaults
    post.viewCount ??= 0;
    post.status ??= 'draft';
  }

  @override
  void created(Post post) {
    // Dispatch event
    Event.dispatch(PostCreatedEvent(post));
    
    // Cache invalidation
    Cache.forget('posts:recent');
  }

  @override
  void updating(Post post) {
    // Track changes
    if (post.isDirty('status')) {
      print('Status changed: \${post.getOriginal('status')} -> \${post.status}');
    }
  }

  @override
  bool deleting(Post post) {
    // Move to archive instead of deleting
    if (post.status == 'published') {
      post.status = 'archived';
      post.save();
      return false; // Cancel actual deletion
    }
    return true;
  }

  @override
  void retrieved(Post post) {
    // Increment view count (consider using queues for better performance)
    post.increment('view_count');
  }
}`;

const timestampsBasic = `
import 'package:khadem/khadem.dart';

class Post extends KhademModel<Post> with Timestamps {
  int? id;
  String? title;
  String? content;
  
  // created_at and updated_at are automatically managed
}

// Creating a record
final post = Post()
  ..title = 'Hello World'
  ..content = 'First post';

await post.save();
// created_at and updated_at are set automatically

print(post.createdAt); // DateTime
print(post.updatedAt); // DateTime

// Updating a record
post.title = 'Updated Title';
await post.save();
// updated_at is updated automatically, created_at stays the same

// Accessing timestamp info
print('Age: \${post.age?.inDays} days');
print('Was recently created: \${post.wasRecentlyCreated(hours: 24)}');
print('Was recently updated: \${post.wasRecentlyUpdated(minutes: 30)}');
`;

const timestampsCustom = `
// Disable timestamps
class Session extends KhademModel<Session> with Timestamps {
  @override
  bool get timestamps => false; // No timestamp management
}

// Custom column names
class Article extends KhademModel<Article> with Timestamps {
  @override
  String get createdAtColumn => 'published_at';
  
  @override
  String get updatedAtColumn => 'modified_at';
}

// Manual timestamp manipulation
final post = Post();
post.setTimestamps(
  createdAt: DateTime(2024, 1, 1),
  updatedAt: DateTime(2024, 1, 15),
);
`;

const timestampsHelpers = `
// Touch - update only updated_at without changing data
await post.touch();

// Get age of record
final age = post.age;
print('Post is \${age?.inDays} days old');

// Get time since last update
final timeSinceUpdate = post.timeSinceUpdate;
print('Last updated \${timeSinceUpdate?.inHours} hours ago');

// Check if recently created/updated
if (post.wasRecentlyCreated(hours: 24)) {
  print('New post!');
}

if (post.wasRecentlyUpdated(minutes: 30)) {
  print('Recently modified');
}
`;

const softDeletesBasic = `
import 'package:khadem/khadem.dart';

class Post extends KhademModel<Post> with SoftDeletes {
  int? id;
  String? title;
  String? content;
  
  // deleted_at is managed automatically
}

// Database migration - add deleted_at column
await createTable('posts', (table) {
  table.id();
  table.string('title');
  table.text('content');
  table.timestamp('deleted_at').nullable();
  table.timestamps();
});

// Soft delete (sets deleted_at)
final post = await Post().query.find(1);
await post.delete(); // Soft delete

// Check if deleted
print(post.trashed); // true
print(post.isTrashed); // true
print(post.deletedAt); // DateTime
`;

const softDeletesQuery = `
// Default query excludes soft-deleted records
final posts = await Post().query.get(); // Only active posts

// Include soft-deleted records
final allPosts = await Post().query.withTrashed().get();

// Only soft-deleted records
final trashedPosts = await Post().query.onlyTrashed().get();

// Explicitly exclude soft-deleted (default behavior)
final activePosts = await Post().query.withoutTrashed().get();
`;

const softDeletesRestore = `
// Restore a soft-deleted record
final post = await Post().query.onlyTrashed().find(1);
await post.restore(); // Sets deleted_at to null

print(post.trashed); // false

// Force delete (permanently remove)
await post.forceDelete(); // Actually deletes from database

// With observer control
class PostObserver extends ModelObserver<Post> {
  @override
  bool restoring(Post post) {
    // Check if restoration is allowed
    if (!canRestorePost(post)) {
      return false; // Cancel restoration
    }
    return true;
  }

  @override
  bool forceDeleting(Post post) {
    // Warn before permanent deletion
    logPermanentDeletion(post);
    return true;
  }
}
`;

const slugBasic = `
import 'package:khadem/khadem.dart';

class Post extends KhademModel<Post> with HasSlug {
  String? title;
  
  @override
  String get slugSource => title ?? '';
}

// Use with observer for auto-generation
class PostObserver extends ModelObserver<Post> {
  @override
  void creating(Post post) {
    post.ensureSlugGenerated();
  }
}

// Manual generation
final post = Post()..title = 'Hello World!';
post.generateSlug();
print(post.slug); // "hello-world"

// Custom source
post.generateSlugFrom('Custom Title 123');
print(post.slug); // "custom-title-123"
`;

const slugAdvanced = `
// Check if slug exists
if (!post.hasSlug) {
  post.generateSlug();
}

// Ensure slug is generated (doesn't overwrite)
post.ensureSlugGenerated();

// Force regenerate
post.regenerateSlug();

// Add suffix for uniqueness
final uniqueSlug = post.getSlugWithSuffix(2);
print(uniqueSlug); // "my-post-2"

// Find by slug
final post = await Post().query
    .where('slug', '=', 'hello-world')
    .first();

// URL routing
Route.get('/blog/{slug}', (req, res) async {
  final slug = req.param('slug');
  final post = await Post().query
      .where('slug', '=', slug)
      .first();
      
  if (post == null) {
    return res.status(404).sendJson({'error': 'Post not found'});
  }
  
  res.sendJson(post.toJson());
});
`;

const uuidBasic = `
import 'package:khadem/khadem.dart';

class User extends KhademModel<User> with UuidPrimaryKey {
  String? name;
  String? email;
  
  // uuid is managed automatically
}

// Manual generation
final user = User();
user.generateUuid();
print(user.uuid); // "550e8400-e29b-41d4-a716-446655440000"

// Ensure UUID exists
user.ensureUuidGenerated();

// Get or generate
final uuid = user.getOrGenerateUuid();
`;

const uuidAdvanced = `
// Use with observer
class UserObserver extends ModelObserver<User> {
  @override
  void creating(User user) {
    user.ensureUuidGenerated();
  }
}

// Database migration - use uuid as primary key
await createTable('users', (table) {
  table.uuid('uuid').primary();
  table.string('name');
  table.string('email').unique();
  table.timestamps();
});

// Or as secondary identifier
await createTable('users', (table) {
  table.id(); // Integer primary key
  table.uuid('uuid').unique().index();
  table.string('name');
  table.timestamps();
});

// Find by UUID
final user = await User().query
    .where('uuid', '=', '550e8400-e29b-41d4-a716-446655440000')
    .first();
`;

const scopesBasic = `
import 'package:khadem/khadem.dart';

class User extends KhademModel<User> with QueryScopes {
  // Simple scope
  QueryBuilderInterface<User> scopeActive(QueryBuilderInterface<User> query) {
    return query.where('active', '=', true);
  }
  
  // Scope with parameter
  QueryBuilderInterface<User> scopeRole(
    QueryBuilderInterface<User> query,
    String role,
  ) {
    return query.where('role', '=', role);
  }
  
  // Scope with multiple conditions
  QueryBuilderInterface<User> scopeVerified(QueryBuilderInterface<User> query) {
    return query
        .whereNotNull('email_verified_at')
        .where('status', '=', 'active');
  }
}

// Usage - chain scopes manually
final user = User();
final activeUsers = await user.scopeActive(user.query).get();

final admins = await user.scopeRole(user.query, 'admin').get();

// Combine scopes
final verifiedAdmins = await user
    .scopeVerified(
      user.scopeRole(user.query, 'admin')
    )
    .get();
`;

const scopesAdvanced = `
class User extends KhademModel<User> with QueryScopes {
  // Helper to combine multiple scopes
  QueryBuilderInterface<User> activeVerifiedAdmins() {
    return applyScopes([
      (q) => scopeActive(q),
      (q) => scopeVerified(q),
      (q) => scopeRole(q, 'admin'),
    ]);
  }
  
  // Date range scope
  QueryBuilderInterface<User> scopeCreatedBetween(
    QueryBuilderInterface<User> query,
    DateTime start,
    DateTime end,
  ) {
    return query
        .where('created_at', '>=', start)
        .where('created_at', '<=', end);
  }
  
  // Search scope
  QueryBuilderInterface<User> scopeSearch(
    QueryBuilderInterface<User> query,
    String term,
  ) {
    return query.where((q) {
      return q
          .where('name', 'LIKE', '%\$term%')
          .orWhere('email', 'LIKE', '%\$term%');
    });
  }
}

// Usage
final users = await User().activeVerifiedAdmins().get();

final recentUsers = await User()
    .scopeCreatedBetween(
      User().query,
      DateTime.now().subtract(Duration(days: 7)),
      DateTime.now(),
    )
    .get();
`;

const scopesConditional = `
class User extends KhademModel<User> with QueryScopes {
  // Dynamic filtering with conditional scopes
  QueryBuilderInterface<User> filteredUsers({
    String? role,
    bool? active,
    String? searchTerm,
  }) {
    var q = query;
    
    // Apply scope only if condition is met
    q = when(active != null, q, (q) => scopeActive(q));
    
    // Apply scope only if value is not null
    q = whenNotNull(role, q, (q, value) => scopeRole(q, value));
    q = whenNotNull(searchTerm, q, (q, value) => scopeSearch(q, value));
    
    return q;
  }
  
  // Using pipe for functional style
  QueryBuilderInterface<User> complexQuery(Map<String, dynamic> filters) {
    return pipe([
      (q) => filters['active'] == true ? scopeActive(q) : q,
      (q) => filters.containsKey('role') ? scopeRole(q, filters['role']) : q,
      (q) => q.orderBy('created_at', direction: 'DESC'),
      (q) => filters.containsKey('limit') ? q.limit(filters['limit']) : q,
    ]);
  }
  
  // Tap for debugging
  QueryBuilderInterface<User> debugQuery() {
    return tap(query, (q) => print('Current query: \$q'));
  }
}

// Usage
final users = await User()
    .filteredUsers(
      role: 'admin',
      active: true,
      searchTerm: 'john',
    )
    .get();

final filtered = await User()
    .complexQuery({
      'active': true,
      'role': 'user',
      'limit': 10,
    })
    .get();
`;

const combinedTraits = `
import 'package:khadem/khadem.dart';

class Post extends KhademModel<Post> 
    with Timestamps, SoftDeletes, HasSlug, QueryScopes {
  int? id;
  String? title;
  String? content;
  String? status;
  
  @override
  String get slugSource => title ?? '';
  
  // Query scopes
  QueryBuilderInterface<Post> scopePublished(QueryBuilderInterface<Post> query) {
    return query.where('status', '=', 'published');
  }
  
  QueryBuilderInterface<Post> scopeRecent(QueryBuilderInterface<Post> query) {
    return query
        .orderBy('created_at', direction: 'DESC')
        .limit(10);
  }
}

class PostObserver extends ModelObserver<Post> {
  @override
  void creating(Post post) {
    // Generate slug from title
    post.ensureSlugGenerated();
    
    // Set default status
    post.status ??= 'draft';
  }
  
  @override
  void created(Post post) {
    // Log creation
    print('Post created: \${post.title} (\${post.slug})');
    
    // Send notification
    Event.dispatch(PostCreatedEvent(post));
  }
  
  @override
  bool deleting(Post post) {
    // Archive published posts instead of deleting
    if (post.status == 'published') {
      post.status = 'archived';
      post.save();
      return false; // Cancel deletion
    }
    return true;
  }
}

// Register observer
Post.observe(PostObserver());

// Usage
final post = Post()
  ..title = 'Advanced ORM Features'
  ..content = 'Learn about traits...';

await post.save();
// Triggers: creating(), sets slug, sets created_at/updated_at, triggers created()

print(post.slug); // "advanced-orm-features"
print(post.createdAt); // DateTime
print(post.age?.inDays); // Days since creation

// Query with scopes
final recentPublished = await Post()
    .scopePublished(Post().query)
    .scopeRecent(Post().query)
    .get();

// Soft delete
await post.delete(); // Sets deleted_at
print(post.trashed); // true

// Restore
await post.restore(); // Clears deleted_at

// Force delete (permanent)
await post.forceDelete();
`;
</script>
