<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Query Builder</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        The <code>QueryBuilderInterface</code> in Khadem offers a fluent, expressive, and type-safe interface for querying your database. It supports common operations like <code>select</code>, <code>insert</code>, <code>update</code>, <code>delete</code>, pagination, and aggregation, all while supporting model hydration and eager loading.
      </p>
    </header>

    <!-- SELECT -->
    <DocSection title="Selecting Records">
      <template #description>
        Use <code>select</code> and <code>where</code> to fetch records.
      </template>
      <CodeBlock :code="selectCode" language="dart" title="Basic Select Query" />
    </DocSection>

    <!-- WHERE + OR -->
    <DocSection title="Filtering with WHERE and OR">
      <template #description>
        Chain <code>where</code>, <code>orWhere</code>, and <code>whereRaw</code> conditions fluently.
      </template>
      <CodeBlock :code="whereCode" language="dart" />
    </DocSection>

    <!-- Ordering and Limiting -->
    <DocSection title="Ordering and Limiting">
      <template #description>
        Sort results with <code>orderBy</code> and limit the number of records.
      </template>
      <CodeBlock :code="orderLimitCode" language="dart" />
    </DocSection>

    <!-- PAGINATION -->
    <DocSection title="Pagination">
      <template #description>
        Paginate your results using <code>paginate</code>. Returns a <code>PaginatedResult</code> object.
      </template>
      <CodeBlock :code="paginateCode" language="dart" />
    </DocSection>

    <!-- INSERT -->
    <DocSection title="Inserting Records">
      <template #description>
        Insert new records using <code>insert</code>. Returns the inserted ID.
      </template>
      <CodeBlock :code="insertCode" language="dart" />
    </DocSection>

    <!-- Bulk Operations -->
    <DocSection title="Bulk Operations">
      <template #description>
        Perform bulk insert, update, and delete operations efficiently.
      </template>
      <CodeBlock :code="bulkCode" language="dart" />
    </DocSection>

    <!-- UPDATE -->
    <DocSection title="Updating Records">
      <template #description>
        Perform updates only when a <code>where</code> condition exists.
      </template>
      <CodeBlock :code="updateCode" language="dart" />
    </DocSection>

    <!-- DELETE -->
    <DocSection title="Deleting Records">
      <template #description>
        Use <code>delete</code> carefully—it requires a <code>where</code> clause.
      </template>
      <CodeBlock :code="deleteCode" language="dart" />
    </DocSection>

    <!-- EAGER LOADING -->
    <DocSection title="Eager Loading Relations">
      <template #description>
        Use <code>withRelations</code> to load related data.
      </template>
      <CodeBlock :code="eagerLoadCode" language="dart" />
    </DocSection>

    <!-- Aggregates -->
    <DocSection title="Aggregates (count, sum, avg, min, max)">
      <template #description>
        Easily calculate aggregates like count, sum, avg, min, and max.
      </template>
      <CodeBlock :code="aggregateCode" language="dart" />
    </DocSection>

    <!-- Exists and Pluck -->
    <DocSection title="Exists and Pluck">
      <template #description>
        Check if records exist or extract single column values.
      </template>
      <CodeBlock :code="existsPluckCode" language="dart" />
    </DocSection>

    <!-- Streaming Results -->
    <DocSection title="Streaming Results">
      <template #description>
        Use <code>asStream()</code> for memory-efficient processing of large datasets.
      </template>
      <CodeBlock :code="streamCode" language="dart" />
    </DocSection>

    <!-- Advanced Queries -->
    <DocSection title="Advanced Query Features">
      <template #description>
        Combine multiple conditions, use raw SQL, and chain complex queries.
      </template>
      <CodeBlock :code="advancedCode" language="dart" />
    </DocSection>

    <!-- Conditional Logic -->
    <DocSection title="Conditional Queries">
      <template #description>
        Use <code>when</code> to conditionally add clauses to your query.
      </template>
      <CodeBlock :code="whenCode" language="dart" />
    </DocSection>

    <!-- Raw SQL -->
    <DocSection title="Raw SQL Output">
      <template #description>
        Use <code>toSql()</code> to preview the raw SQL query string.
      </template>
      <CodeBlock :code="sqlCode" language="dart" />
    </DocSection>

    <!-- whereHas - Relationship Queries -->
    <DocSection title="whereHas - Querying Relationships">
      <template #description>
        Filter models based on their relationships using <code>whereHas</code> and <code>whereDoesntHave</code>. Perfect for finding users with posts, products without reviews, etc.
      </template>
      <CodeBlock :code="whereHasCode" language="dart" title="Basic Relationship Queries" />
      <CodeBlock :code="whereHasNestedCode" language="dart" title="Nested Relationship Queries" />
    </DocSection>

    <!-- Chunking Results -->
    <DocSection title="Chunking Large Result Sets">
      <template #description>
        Process large datasets in chunks to avoid memory issues using <code>chunk</code>, <code>chunkById</code>, or <code>lazy</code>.
      </template>
      <CodeBlock :code="chunkCode" language="dart" title="Chunk Processing" />
      <CodeBlock :code="lazyCode" language="dart" title="Lazy Streaming" />
    </DocSection>

    <!-- Increment/Decrement -->
    <DocSection title="Increment & Decrement">
      <template #description>
        Efficiently update numeric columns with <code>increment</code>, <code>decrement</code>, and <code>incrementEach</code>.
      </template>
      <CodeBlock :code="incrementCode" language="dart" />
    </DocSection>

    <!-- Upsert -->
    <DocSection title="Upsert (Insert or Update)">
      <template #description>
        Insert records or update them if they already exist using <code>upsert</code>.
      </template>
      <CodeBlock :code="upsertCode" language="dart" />
    </DocSection>

    <!-- JSON Queries -->
    <DocSection title="JSON Column Queries">
      <template #description>
        Query JSON columns with <code>whereJsonContains</code>, <code>whereJsonLength</code>, and <code>whereJsonContainsKey</code>.
      </template>
      <CodeBlock :code="jsonQueryCode" language="dart" />
    </DocSection>

    <!-- Pessimistic Locking -->
    <DocSection title="Pessimistic Locking">
      <template #description>
        Lock rows during queries using <code>lockForUpdate</code> or <code>sharedLock</code> for concurrency control.
      </template>
      <CodeBlock :code="lockingCode" language="dart" />
    </DocSection>

    <!-- Subqueries -->
    <DocSection title="Subqueries">
      <template #description>
        Use subqueries with <code>whereInSubquery</code>, <code>whereExists</code>, and <code>selectSub</code>.
      </template>
      <CodeBlock :code="subqueryCode" language="dart" />
    </DocSection>

    <!-- Date Queries -->
    <DocSection title="Date & Time Queries">
      <template #description>
        Query date columns with specialized methods like <code>whereDate</code>, <code>whereYear</code>, <code>whereToday</code>, <code>wherePast</code>, etc.
      </template>
      <CodeBlock :code="dateQueryCode" language="dart" />
    </DocSection>

    <!-- Advanced WHERE -->
    <DocSection title="Advanced WHERE Clauses">
      <template #description>
        Use advanced where methods: <code>whereIn</code>, <code>whereNull</code>, <code>whereBetween</code>, <code>whereLike</code>, <code>whereColumn</code>, and more.
      </template>
      <CodeBlock :code="advancedWhereCode" language="dart" />
    </DocSection>

    <!-- Unions -->
    <DocSection title="Query Unions">
      <template #description>
        Combine multiple queries with <code>union</code> and <code>unionAll</code>.
      </template>
      <CodeBlock :code="unionCode" language="dart" />
    </DocSection>

    <!-- Joins -->
    <DocSection title="Table Joins">
      <template #description>
        Join tables using <code>join</code>, <code>leftJoin</code>, <code>rightJoin</code>, and <code>crossJoin</code>.
      </template>
      <CodeBlock :code="joinCode" language="dart" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Query Builder',
  meta: [
    { name: 'description', content: 'Khadem ORM Query Builder documentation and usage examples' }
  ]
});

const selectCode = `
// Select specific columns
final users = await User().query
  .select(['id', 'name', 'email'])
  .where('status', '=', 'active')
  .orderBy('name')
  .get();

// Select all columns (default)
final users = await User().query
  .where('status', '=', 'active')
  .get();

// Get first record
final user = await User().query
  .where('email', '=', 'john@example.com')
  .first();

// Get single record or null
final user = await User().query
  .where('id', '=', 1)
  .first();
`;

const whereCode = `
final results = await User().query
  .where('role', '=', 'admin')
  .orWhere('email', 'like', '%@example.com')
  .get();
`;

const orderLimitCode = `
// Order by single column
final users = await User().query
  .orderBy('name')
  .get();

// Order by multiple columns
final users = await User().query
  .orderBy('created_at', direction: 'desc')
  .orderBy('name')
  .get();

// Limit and offset
final users = await User().query
  .orderBy('created_at', direction: 'desc')
  .limit(10)
  .get();

// Skip records with offset
final users = await User().query
  .orderBy('created_at', direction: 'desc')
  .limit(10)
  .offset(20) // Skip first 20 records
  .get();
`;

const paginateCode = `
final paginated = await User().query
  .where('status', '=', 'active')
  .paginate(perPage: 10, page: 1);

print(paginated.data); // List<User>
print(paginated.total); // Total records
`;

const insertCode = `
final id = await User().query.insert({
  'name': 'John Doe',
  'email': 'john@example.com'
});
`;

const bulkCode = `
// Bulk insert multiple records
final userIds = [];
for (final userData in userDataList) {
  final id = await User().query.insert(userData);
  userIds.add(id);
}

// Bulk update multiple records
await User().query
  .where('status', '=', 'inactive')
  .update({'status': 'active'});

// Bulk delete with conditions
await User().query
  .where('last_login', '<', DateTime.now().subtract(Duration(days: 365)))
  .delete();

// Conditional bulk operations
await User().query
  .where('subscription_status', '=', 'expired')
  .where('created_at', '<', DateTime.now().subtract(Duration(days: 30)))
  .update({'status': 'suspended'});
`;

const updateCode = `
await User().query
  .where('id', '=', 5)
  .update({
    'name': 'Updated Name'
  });

// Update multiple fields
await User().query
  .where('email', '=', 'old@example.com')
  .update({
    'email': 'new@example.com',
    'email_verified_at': DateTime.now(),
  });

// Update with complex conditions
await User().query
  .where('status', '=', 'pending')
  .where('created_at', '<', DateTime.now().subtract(Duration(days: 7)))
  .update({
    'status': 'expired',
    'updated_at': DateTime.now(),
  });
`;

const deleteCode = `
await User().query
  .where('id', '=', 10)
  .delete();

// Delete with multiple conditions
await User().query
  .where('status', '=', 'inactive')
  .where('last_login', '<', DateTime.now().subtract(Duration(days: 365)))
  .delete();

// Soft delete (if implemented in your model)
await User().query
  .where('id', '=', 10)
  .update({
    'deleted_at': DateTime.now(),
  });
`;

const eagerLoadCode = `
// Basic eager loading
final user = await User().query
  .withRelations(['posts', 'profile'])
  .where('id', '=', 1)
  .first();

// Access loaded relations
final posts = user?.relation.get('posts'); // List<Post>
final profile = user?.relation.get('profile'); // Profile

// Multiple relations with conditions
final users = await User().query
  .withRelations(['posts', 'comments'])
  .where('status', '=', 'active')
  .get();

// Nested eager loading (if supported)
final users = await User().query
  .withRelations(['posts.comments'])
  .get();

// Eager loading with query constraints
final users = await User().query
  .withRelations(['posts' => (query) => query.where('published', '=', true).limit(5)])
  .get();
`;

const aggregateCode = `
final total = await User().query.count();
final avgAge = await User().query.avg('age');
final maxAge = await User().query.max('age');
final minAge = await User().query.min('age');
`;

const existsPluckCode = `
// Check if any records exist
final hasUsers = await User().query
  .where('status', '=', 'active')
  .exists();

// Extract single column values
final emails = await User().query
  .where('status', '=', 'active')
  .pluck('email');

final ids = await User().query.pluck('id');
`;

const streamCode = `
// Process large datasets efficiently
final userStream = User().query
  .where('created_at', '>', DateTime.now().subtract(Duration(days: 30)))
  .asStream();

await for (final user in userStream) {
  // Process each user
  print('Processing user: \${user.name}');
  // Send email, export data, etc.
}
`;

const advancedCode = `
// Complex where conditions
final users = await User().query
  .where('age', '>', 18)
  .where((q) => q
    .where('role', '=', 'admin')
    .orWhere('role', '=', 'moderator')
  )
  .whereNotNull('email_verified_at')
  .get();

// Raw SQL where clause
final users = await User().query
  .whereRaw('DATE(created_at) = CURDATE()')
  .get();

// Group by and having
final stats = await User().query
  .select(['role', 'COUNT(*) as count'])
  .groupBy('role')
  .having('count', '>', 5)
  .get();

// Clone queries for reuse
final baseQuery = User().query.where('status', '=', 'active');
final admins = await baseQuery.clone().where('role', '=', 'admin').get();
final moderators = await baseQuery.clone().where('role', '=', 'moderator').get();
`;

const whenCode = `
// Basic conditional query
final query = User().query.when(isAdmin, (q) => q.where('role', '=', 'admin'));
final users = await query.get();

// Multiple conditions
final users = await User().query
  .when(searchTerm != null, (q) => q.where('name', 'like', '%\$searchTerm%'))
  .when(status != null, (q) => q.where('status', '=', status))
  .when(sortBy != null, (q) => q.orderBy(sortBy!))
  .get();

// Complex conditional logic
final users = await User().query
  .when(includeInactive, (q) => q.where('status', '=', 'active'))
  .when(!includeInactive, (q) => q.whereIn('status', ['active', 'pending']))
  .get();

// Conditional eager loading
final users = await User().query
  .when(loadPosts, (q) => q.withRelations(['posts']))
  .when(loadProfile, (q) => q.withRelations(['profile']))
  .get();
`;

const sqlCode = `
final sql = User().query
  .where('id', '=', 1)
  .toSql();

print(sql); // Raw SQL query string
`;

// whereHas - Relationship Queries
const whereHasCode = `
import 'package:khadem/khadem.dart';

// Find users who have at least one post
final usersWithPosts = await User().query
  .whereHas('posts')
  .get();

// Find users with published posts
final usersWithPublishedPosts = await User().query
  .whereHas('posts', (query) {
    query.where('status', '=', 'published');
  })
  .get();

// Find users with at least 5 posts
final productiveUsers = await User().query
  .has('posts', '>=', 5)
  .get();

// Find users WITHOUT posts
final usersWithoutPosts = await User().query
  .whereDoesntHave('posts')
  .get();

// Find users without published posts
final usersWithoutPublishedPosts = await User().query
  .whereDoesntHave('posts', (query) {
    query.where('status', '=', 'published');
  })
  .get();

// Combine with OR
final users = await User().query
  .whereHas('posts', (query) {
    query.where('status', '=', 'published');
  })
  .orWhereHas('comments', (query) {
    query.where('approved', '=', true);
  })
  .get();
`;

const whereHasNestedCode = `
// Find users with posts that have comments
final users = await User().query
  .whereHas('posts.comments')
  .get();

// Find users with posts that have approved comments
final users = await User().query
  .whereHas('posts.comments', (query) {
    query.where('approved', '=', true);
  })
  .get();

// Find users with posts in specific category that have comments
final users = await User().query
  .whereHas('posts', (postsQuery) {
    postsQuery
      .where('category_id', '=', 1)
      .whereHas('comments', (commentsQuery) {
        commentsQuery.where('approved', '=', true);
      });
  })
  .get();

// Complex nested queries
final users = await User().query
  .whereHas('posts.comments.replies', (query) {
    query.where('created_at', '>', DateTime.now().subtract(Duration(days: 7)));
  })
  .get();
`;

// Chunking Results
const chunkCode = `
import 'package:khadem/khadem.dart';

// Process records in chunks of 100
await User().query.chunk(100, (users) async {
  for (final user in users) {
    // Process each user
    await sendEmail(user);
  }
});

// Chunk with query constraints
await User().query
  .where('status', '=', 'active')
  .orderBy('created_at')
  .chunk(50, (users) async {
    for (final user in users) {
      await processUser(user);
    }
  });

// ChunkById for large datasets (better performance)
await User().query.chunkById(100, (users) async {
  for (final user in users) {
    await exportUserData(user);
  }
}, column: 'id');

// Early termination
await User().query.chunk(100, (users) async {
  for (final user in users) {
    if (shouldStop) {
      return; // Stop processing
    }
    await processUser(user);
  }
});
`;

const lazyCode = `
// Lazy loading with streams (memory efficient)
final userStream = User().query
  .where('created_at', '>', DateTime.now().subtract(Duration(days: 30)))
  .lazy(chunkSize: 100);

await for (final user in userStream) {
  // Process one user at a time
  print('Processing: \${user.name}');
  await sendNotification(user);
}

// Lazy with filters
final activeUserStream = User().query
  .where('status', '=', 'active')
  .where('email_verified_at', 'IS NOT', null)
  .lazy(chunkSize: 50);

await for (final user in activeUserStream) {
  await updateUserStats(user);
}
`;

// Increment/Decrement
const incrementCode = `
import 'package:khadem/khadem.dart';

// Increment a single column
await User().query
  .where('id', '=', 1)
  .increment('login_count');

// Increment by specific amount
await User().query
  .where('id', '=', 1)
  .increment('points', 10);

// Decrement
await User().query
  .where('id', '=', 1)
  .decrement('credits', 5);

// Increment multiple columns at once
await User().query
  .where('id', '=', 1)
  .incrementEach({
    'login_count': 1,
    'points': 10,
    'views': 1,
  });

// Bulk increment
await Product().query
  .where('category_id', '=', 5)
  .increment('view_count');
`;

// Upsert
const upsertCode = `
import 'package:khadem/khadem.dart';

// Insert or update based on unique constraint
final affectedRows = await User().query.upsert(
  [
    {'email': 'john@example.com', 'name': 'John Doe', 'role': 'admin'},
    {'email': 'jane@example.com', 'name': 'Jane Smith', 'role': 'user'},
  ],
  uniqueBy: ['email'], // Columns that determine uniqueness
  update: ['name', 'role'], // Columns to update if exists
);

// Upsert with all columns updateable
final count = await Product().query.upsert(
  [
    {'sku': 'ABC123', 'name': 'Widget', 'price': 99.99},
    {'sku': 'XYZ789', 'name': 'Gadget', 'price': 49.99},
  ],
  uniqueBy: ['sku'],
  update: ['name', 'price'],
);

print('Affected rows: \$count');
`;

// JSON Queries
const jsonQueryCode = `
import 'package:khadem/khadem.dart';

// Query JSON column - contains value
final users = await User().query
  .whereJsonContains('settings->notifications', 'email')
  .get();

// JSON doesn't contain
final users = await User().query
  .whereJsonDoesntContain('preferences->disabled_features', 'chat')
  .get();

// JSON length
final users = await User().query
  .whereJsonLength('permissions', '>', 3)
  .get();

// JSON contains key
final users = await User().query
  .whereJsonContainsKey('metadata', 'last_login')
  .get();

// Complex JSON queries
final users = await User().query
  .whereJsonContains('settings->theme', 'dark')
  .whereJsonLength('roles', '>=', 2)
  .whereJsonContainsKey('profile', 'verified')
  .get();

// Query nested JSON
final products = await Product().query
  .whereJsonContains('attributes->specifications->color', 'blue')
  .get();
`;

// Pessimistic Locking
const lockingCode = `
import 'package:khadem/khadem.dart';

// Shared lock (FOR SHARE) - allows reads but blocks writes
final user = await User().query
  .where('id', '=', 1)
  .sharedLock()
  .first();

// Exclusive lock (FOR UPDATE) - blocks all access
final user = await User().query
  .where('id', '=', 1)
  .lockForUpdate()
  .first();

// Use in transactions for concurrency control
await db.transaction((connection) async {
  // Lock the user row
  final user = await User().query
    .where('id', '=', userId)
    .lockForUpdate()
    .first();
  
  if (user == null) throw Exception('User not found');
  
  // Safely update
  user.balance = user.balance - amount;
  await user.save();
});

// Lock for update with NOWAIT (fails immediately if locked)
final user = await User().query
  .where('id', '=', 1)
  .lockForUpdate()
  .first();
`;

// Subqueries
const subqueryCode = `
import 'package:khadem/khadem.dart';

// WHERE IN subquery
final users = await User().query
  .whereInSubquery('id', 
    Post().query
      .select(['user_id'])
      .where('status', '=', 'published')
  )
  .get();

// WHERE EXISTS
final users = await User().query
  .whereExists((query) {
    query
      .table('posts')
      .whereRaw('posts.user_id = users.id')
      .where('status', '=', 'published');
  })
  .get();

// WHERE NOT EXISTS
final users = await User().query
  .whereNotExists((query) {
    query
      .table('posts')
      .whereRaw('posts.user_id = users.id');
  })
  .get();

// SELECT with subquery
final users = await User().query
  .selectSub(
    Post().query
      .whereRaw('posts.user_id = users.id')
      .count(),
    'posts_count'
  )
  .get();

// Complex subquery
final highValueCustomers = await User().query
  .whereInSubquery('id',
    Order().query
      .select(['customer_id'])
      .whereRaw('total > ?', [1000])
      .groupBy('customer_id')
      .havingRaw('SUM(total) > ?', [10000])
  )
  .get();
`;

// Date Queries
const dateQueryCode = `
import 'package:khadem/khadem.dart';

// Query by date
final users = await User().query
  .whereDate('created_at', '2024-01-15')
  .get();

// Query by year
final users = await User().query
  .whereYear('created_at', 2024)
  .get();

// Query by month
final users = await User().query
  .whereMonth('created_at', 12)
  .get();

// Query by day
final users = await User().query
  .whereDay('created_at', 25)
  .get();

// Query by time
final logs = await Log().query
  .whereTime('created_at', '14:30:00')
  .get();

// Convenience methods
final todayUsers = await User().query.whereToday('created_at').get();
final pastUsers = await User().query.wherePast('last_login').get();
final futureEvents = await Event().query.whereFuture('scheduled_at').get();
final beforeToday = await User().query.whereBeforeToday('expires_at').get();
final afterToday = await Event().query.whereAfterToday('starts_at').get();

// Combine date queries
final recentActiveUsers = await User().query
  .whereYear('created_at', 2024)
  .whereMonth('last_login', DateTime.now().month)
  .wherePast('last_active_at')
  .get();
`;

// Advanced WHERE
const advancedWhereCode = `
import 'package:khadem/khadem.dart';

// WHERE IN
final users = await User().query
  .whereIn('role', ['admin', 'moderator', 'editor'])
  .get();

// WHERE NOT IN
final users = await User().query
  .whereNotIn('status', ['banned', 'suspended'])
  .get();

// WHERE NULL
final users = await User().query.whereNull('deleted_at').get();

// WHERE NOT NULL
final users = await User().query.whereNotNull('email_verified_at').get();

// WHERE BETWEEN
final users = await User().query
  .whereBetween('age', 18, 65)
  .get();

// WHERE NOT BETWEEN
final products = await Product().query
  .whereNotBetween('price', 100, 500)
  .get();

// WHERE LIKE
final users = await User().query
  .whereLike('name', '%john%')
  .get();

// WHERE NOT LIKE
final users = await User().query
  .whereNotLike('email', '%spam.com')
  .get();

// WHERE COLUMN (compare two columns)
final users = await User().query
  .whereColumn('updated_at', '>', 'created_at')
  .get();

// WHERE BETWEEN COLUMNS
final promotions = await Promotion().query
  .whereBetweenColumns('created_at', 'start_date', 'end_date')
  .get();

// Multiple advanced conditions
final users = await User().query
  .whereIn('role', ['admin', 'moderator'])
  .whereNotNull('email_verified_at')
  .whereBetween('created_at', startDate, endDate)
  .whereLike('name', '%smith%')
  .whereColumn('last_login', '>', 'created_at')
  .get();

// whereAny and whereAll
final users = await User().query
  .whereAny({
    'status': 'active',
    'role': 'admin',
    'verified': true,
  })
  .get();

final users = await User().query
  .whereAll({
    'status': 'active',
    'email_verified': true,
    'phone_verified': true,
  })
  .get();

// whereNone
final users = await User().query
  .whereNone({
    'banned': true,
    'suspended': true,
    'deleted': true,
  })
  .get();
`;

// Unions
const unionCode = `
import 'package:khadem/khadem.dart';

// Basic UNION
final query1 = User().query.where('role', '=', 'admin').select(['id', 'name', 'email']);
final query2 = User().query.where('role', '=', 'moderator').select(['id', 'name', 'email']);

final users = await query1.union(query2).get();

// UNION ALL (includes duplicates)
final allUsers = await query1.unionAll(query2).get();

// Multiple unions
final admins = User().query.where('role', '=', 'admin');
final mods = User().query.where('role', '=', 'moderator');
final editors = User().query.where('role', '=', 'editor');

final allStaff = await admins
  .union(mods)
  .union(editors)
  .orderBy('name')
  .get();
`;

// Joins
const joinCode = `
import 'package:khadem/khadem.dart';

// INNER JOIN
final results = await User().query
  .join('posts', 'users.id', '=', 'posts.user_id')
  .select(['users.*', 'posts.title'])
  .get();

// LEFT JOIN
final users = await User().query
  .leftJoin('posts', 'users.id', '=', 'posts.user_id')
  .select(['users.*', 'COUNT(posts.id) as posts_count'])
  .groupBy('users.id')
  .get();

// RIGHT JOIN
final posts = await Post().query
  .rightJoin('users', 'posts.user_id', '=', 'users.id')
  .select(['posts.*', 'users.name as author_name'])
  .get();

// CROSS JOIN
final combinations = await Product().query
  .crossJoin('colors')
  .get();

// Multiple joins
final results = await User().query
  .join('posts', 'users.id', '=', 'posts.user_id')
  .leftJoin('comments', 'posts.id', '=', 'comments.post_id')
  .select([
    'users.name',
    'posts.title',
    'COUNT(comments.id) as comments_count'
  ])
  .groupBy(['users.id', 'posts.id'])
  .get();
`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
</style>

