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
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
</style>
