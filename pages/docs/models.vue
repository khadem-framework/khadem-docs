<template>
  <div class="space-y-12">
    <!-- Header -->
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Models</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Models in <code>Khadem</code> provide a robust abstraction for interacting with database records using a clean object-oriented API. Powered by <code>KhademModel</code>, they support validation, relationships, serialization, and more.
      </p>
    </header>

    <!-- Model Definition -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Model Definition</h2>
      <p class="mt-2">Define a model by extending <code>KhademModel</code> and using optional mixins like <code>Timestamps</code> and <code>HasRelationships</code>.</p>
      <CodeBlock :code="modelDefinitionCode" language="dart" title="Defining a User Model" />
      <div class="text-sm text-gray-600 dark:text-gray-400 mt-3">
        <strong>Key Properties:</strong>
        <ul class="list-disc pl-5 space-y-1">
          <li><code>fillable</code>: Fields allowed for mass-assignment</li>
          <li><code>hidden</code>: Fields excluded from JSON</li>
          <li><code>relations</code>: Related models (e.g. posts, roles)</li>
          <li><code>newFactory</code>: Factory method for serialization</li>
        </ul>
      </div>
    </section>

    <!-- Accessors -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Field Accessors</h2>
      <p>Models should implement <code>getField</code> and <code>setField</code> to access properties dynamically.</p>
      <CodeBlock :code="fieldAccessorsCode" language="dart" title="Field Accessors" />
    </section>

    <!-- Persistence -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Persistence</h2>
      <div class="space-y-8 mt-4">
        <div>
          <h3 class="text-xl font-medium">Saving a Model</h3>
          <p>Creates or updates a record in the database.</p>
          <CodeBlock :code="saveCode" language="dart" />
        </div>
        <div>
          <h3 class="text-xl font-medium">Deleting a Model</h3>
          <p>Removes the model from the database.</p>
          <CodeBlock :code="deleteCode" language="dart" />
        </div>
      </div>
    </section>

    <!-- Serialization -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Serialization</h2>
      <div class="space-y-8 mt-4">
        <div>
          <h3 class="text-xl font-medium">toJson()</h3>
          <p>Convert the model to a JSON-friendly map.</p>
          <CodeBlock :code="toJsonCode" language="dart" />
        </div>
        <div>
          <h3 class="text-xl font-medium">fromJson()</h3>
          <p>Populate the model from a JSON map.</p>
          <CodeBlock :code="fromJsonCode" language="dart" />
        </div>
      </div>
    </section>

    <!-- Relationships -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Relationships</h2>
      <p>Declare relations in the <code>relations</code> property using helper functions like <code>hasMany</code>, <code>belongsTo</code>, etc.</p>
      <CodeBlock :code="hasManyCode" language="dart" title="hasMany Relationship" />
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">You can use <code>.query.withRelations([...])</code> to eager-load related models.</p>
    </section>

    <!-- Advanced Querying -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Querying</h2>
      <p>Use the fluent query builder to perform filters, ordering, limits, and more.</p>
      <CodeBlock :code="queryExamples" language="dart" title="Query Examples" />
    </section>

    <!-- Usage Patterns -->
    <section class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-3">Usage Patterns</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <h3 class="font-medium text-blue-700 dark:text-blue-300">Basic Model Usage</h3>
          <CodeBlock :code="basicModelCode" language="dart" compact />
        </div>
        <div>
          <h3 class="font-medium text-blue-700 dark:text-blue-300">Model with Relations</h3>
          <CodeBlock :code="modelWithRelationsCode" language="dart" compact />
        </div>
      </div>
    </section>

    <!-- Common Mistakes -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Common Mistakes</h2>
      <ul class="list-disc pl-5 text-red-700 dark:text-red-300 text-sm space-y-1 mt-2">
        <li>Not implementing <code>getField</code> / <code>setField</code></li>
        <li>Missing <code>fillable</code>: no data gets inserted</li>
        <li>Forgetting <code>fromJson</code> call in <code>newFactory</code></li>
        <li>Wrong column types like <code>bool</code> instead of <code>int</code></li>
      </ul>
    </section>

    <!-- Best Practices -->
    <section>
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>
      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1 mt-2">
        <li>Always define <code>newFactory</code></li>
        <li>Use mixins like <code>Timestamps</code> and <code>HasRelationships</code></li>
        <li>Use <code>foreignId</code> naming convention: <code>user_id</code>, etc.</li>
        <li>Define <code>hidden</code> fields to protect sensitive data</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Models',
  meta: [{ name: 'description', content: 'Complete guide to working with models in Khadem ORM.' }]
});

const modelDefinitionCode = `
class User extends KhademModel<User> with Timestamps, HasRelationships {
  String? name;
  String? email;
  String? password;

  @override
  List<String> get fillable => ['name', 'email', 'password'];

  @override
  List<String> get hidden => ['password'];

  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    )
  };

  @override
  User newFactory(Map<String, dynamic> data) => User()..fromJson(data);
}
`;

const fieldAccessorsCode = `
@override
getField(String key) {
  return switch (key) {
    'id' => id,
    'name' => name,
    'email' => email,
    _ => null
  };
}

@override
void setField(String key, dynamic value) {
  switch (key) {
    case 'id': id = value; break;
    case 'name': name = value; break;
    case 'email': email = value; break;
  }
}
`;

const saveCode = `
final user = User(name: 'John Doe', email: 'john@example.com');
await user.save();
`;

const deleteCode = `
final user = await User().query.where('id', '=', 1).first();
await user?.delete();
`;

const toJsonCode = `
final user = await User().query.where('id', '=', 1).first();
final json = user?.toJson();
print(json);
`;

const fromJsonCode = `
final user = User();
user.fromJson({
  'id': 1,
  'name': 'John Doe',
  'email': 'john@example.com',
});
`;

const hasManyCode = `
@override
Map<String, RelationDefinition> get relations => {
  'posts': hasMany<Post>(
    foreignKey: 'user_id',
    relatedTable: 'posts',
    factory: () => Post(),
  )
};
`;

const queryExamples = `
final activeUsers = await User()
  .query
  .where('is_active', '=', true)
  .orderBy('created_at', 'desc')
  .paginate(limit: 10, page: 1);

final userWithPosts = await User()
  .query
  .withRelations(['posts'])
  .where('email', '=', 'user@example.com')
  .first();
`;

const basicModelCode = `
final user = User(name: 'Jane Doe', email: 'jane@example.com');
await user.save();
print(user.id);
`;

const modelWithRelationsCode = `
final user = await User().query.withRelations(['posts']).first();
print(user?.relation.get('posts'));
`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
