<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Query Builder</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        The <code>MySQLQueryBuilder</code> in Khadem offers a fluent, expressive, and type-safe interface for querying your database. It supports common operations like <code>select</code>, <code>insert</code>, <code>update</code>, <code>delete</code>, pagination, and aggregation, all while supporting model hydration and eager loading.
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
final users = await User().query
  .select(['id', 'name'])
  .where('status', '=', 'active')
  .orderBy('name')
  .get();
`;

const whereCode = `
final results = await User().query
  .where('role', '=', 'admin')
  .orWhere('email', 'like', '%@example.com')
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

const updateCode = `
await User().query
  .where('id', '=', 5)
  .update({
    'name': 'Updated Name'
  });
`;

const deleteCode = `
await User().query
  .where('id', '=', 10)
  .delete();
`;

const eagerLoadCode = `
final user = await User().query
  .withRelations(['posts', 'profile'])
  .where('id', '=', 1)
  .first();

print(user?.relation.get('posts')); // List<Post>
`;

const aggregateCode = `
final total = await User().query.count();
final avgAge = await User().query.avg('age');
final maxAge = await User().query.max('age');
final minAge = await User().query.min('age');
`;

const whenCode = `
final query = User().query.when(isAdmin, (q) => q.where('role', '=', 'admin'));
final users = await query.get();
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
