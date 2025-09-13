<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem ORM & Schema</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Complete guide to the Khadem Object-Relational Mapping system, Schema Builder, Query Builder, and relationship management for Dart applications.
        </p>
      </header>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">SchemaBuilder</h2>
        <p>The <code>SchemaBuilder</code> class provides methods for creating and managing database schemas using the <code>Blueprint</code> class for table definitions.</p>
  
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">create()</h3>
            <p>Creates a new table with the specified structure using a <code>Blueprint</code> callback.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="createCode" 
                language="dart"
                title="Creating a Table"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>tableName</code>: The name of the table to create</li>
                  <li><code>callback</code>: A function that defines the table structure using a <code>Blueprint</code></li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">createIfNotExists()</h3>
            <p>Creates a table only if it does not already exist.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="createIfNotExistsCode" 
                language="dart"
                title="Conditional Table Creation"
              />
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">drop()</h3>
            <p>Drops a specified table from the database.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="dropCode" 
                language="dart"
                title="Dropping a Table"
              />
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">dropIfExists()</h3>
            <p>Drops a table if it exists.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="dropIfExistsCode" 
                language="dart"
                title="Conditional Table Drop"
              />
            </div>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">QueryBuilder</h2>
        <p>The <code>QueryBuilderInterface</code> provides a fluent interface for building and executing SQL queries, supporting operations like select, insert, update, and delete.</p>
  
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">select()</h3>
            <p>Specifies columns to retrieve in the query.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="selectCode" 
                language="dart"
                title="Selecting Columns"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>columns</code>: List of column names to select</li>
                </ul>
                <p><strong>Returns:</strong> <code>QueryBuilderInterface</code> for method chaining</p>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">where()</h3>
            <p>Adds a WHERE clause to the query.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="whereCode" 
                language="dart"
                title="Adding WHERE Clause"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>column</code>: Column name</li>
                  <li><code>operator</code>: Comparison operator (e.g., '=', '>', '<')</li>
                  <li><code>value</code>: Value to compare against</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">get()</h3>
            <p>Executes the query and returns all matching results as a list of type <code>T</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="getCode" 
                language="dart"
                title="Fetching Results"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <!-- <p><strong>Returns:</strong> <code>Future<List<T>></code></p> -->
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">insert()</h3>
            <p>Inserts a new record into the table.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="insertCode" 
                language="dart"
                title="Inserting a Record"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>data</code>: Map of column names to values</li>
                </ul>
                <!-- <p><strong>Returns:</strong> <code>Future<int></code> (the insert ID)</p> -->
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">paginate()</h3>
            <p>Fetches a paginated list of results.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="paginateCode" 
                language="dart"
                title="Paginating Results"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>perPage</code>: Number of items per page (default: 10)</li>
                  <li><code>page</code>: Page number to fetch (default: 1)</li>
                </ul>
                <!-- <p><strong>Returns:</strong> <code>Future<PaginatedResult<T>></code></p> -->
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">withRelations()</h3>
            <p>Loads related models eagerly.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="withRelationsCode" 
                language="dart"
                title="Eager Loading Relations"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>relations</code>: List of relation names or configurations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">Relationships & Eager Loading</h2>
        <p>The framework supports eager loading of relationships through the <code>withRelations()</code> method in the query builder, supporting various relation types like hasOne, hasMany, belongsTo, and belongsToMany.</p>
  
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">withRelations()</h3>
            <p>Loads specified relationships eagerly when executing queries.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="loadRelationsCode" 
                language="dart"
                title="Eager Loading Relations"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>relations</code>: List of relation names to load</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-medium">Relation Types</h3>
            <p>The framework supports different relationship types through <code>RelationDefinition</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="parseRelationsCode" 
                language="dart"
                title="Relationship Types"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Supported relation types: <code>hasOne</code>, <code>hasMany</code>, <code>belongsTo</code>, <code>belongsToMany</code></p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">KhademModel</h2>
        <p>The <code>KhademModel</code> class is the base class for all models, providing serialization, relationship management, and database operations.</p>
  
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">Defining a Model</h3>
            <p>Extend <code>KhademModel</code> to create a model with fields, relations, and database interaction.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="modelDefinitionCode" 
                language="dart"
                title="Defining a User Model"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Key Properties:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>fillable</code>: Fields that can be mass-assigned</li>
                  <li><code>hidden</code>: Fields to exclude from serialization</li>
                  <li><code>relations</code>: Map of relationship definitions</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">Querying</h3>
            <p>Use the <code>query</code> property to build queries for the model.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="modelQueryCode" 
                language="dart"
                title="Querying Models"
              />
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">Saving and Deleting</h3>
            <p>Persist or remove models using <code>save()</code> and <code>delete()</code>.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="saveDeleteCode" 
                language="dart"
                title="Persisting Models"
              />
            </div>
          </div>
        </div>
      </section>
  
      <section class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-3">Usage Patterns</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-medium text-blue-700 dark:text-blue-300">Controller Example</h3>
            <CodeBlock 
              :code="controllerExampleCode" 
              language="dart"
              compact
            />
          </div>
          <div>
            <h3 class="font-medium text-blue-700 dark:text-blue-300">Relationship Example</h3>
            <CodeBlock 
              :code="relationshipExampleCode" 
              language="dart"
              compact
            />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  definePageMeta({ layout: 'docs' });
  useHead({ 
    title: 'Khadem ORM & Schema',
    meta: [
      { name: 'description', content: 'Complete reference for the Khadem ORM system, Schema Builder, Query Builder, and relationship handling' }
    ]
  });
  
  const createCode = `
  // Creating a users table
  Khadem.db.schemaBuilder.create('users', (Blueprint table) {
    table.id();
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamps();
  });
  `;
  
  const createIfNotExistsCode = `
  // Creating a table if it doesn't exist
  Khadem.db.schemaBuilder.createIfNotExists('posts', (Blueprint table) {
    table.id();
    table.string('title');
    table.text('content');
    table.bigInteger('user_id');
    table.timestamps();
  });
  `;
  
  const dropCode = `
  // Dropping a table
  Khadem.db.schemaBuilder.drop('users');
  `;
  
  const dropIfExistsCode = `
  // Dropping a table if it exists
  Khadem.db.schemaBuilder.dropIfExists('posts');
  `;
  
  const selectCode = `
  // Selecting specific columns
  final users = await Khadem.db.table('users').select(['id', 'name', 'email']).get();
  `;
  
  const whereCode = `
  // Adding a WHERE clause
  final user = await Khadem.db.table('users').where('email', '=', 'test@example.com').first();
  `;
  
  const getCode = `
  // Fetching all users
  final users = await Khadem.db.table('users').get();
  
  // Fetching with conditions
  final activeUsers = await Khadem.db.table('users').where('status', '=', 'active').get();
  `;
  
  const insertCode = `
  // Inserting a new user
  final id = await Khadem.db.table('users').insert({
    'name': 'John Doe',
    'email': 'john@example.com',
    'password': 'hashed_password',
  });
  `;
  
  const paginateCode = `
  // Paginating users
  final result = await Khadem.db.table('users').paginate(perPage: 10, page: 2);
  print('Total: \${result.total}, Page: \${result.currentPage}');
  `;
  
  const withRelationsCode = `
  // Eager loading user and comments
  final post = await Khadem.db.table('posts').withRelations(['user', 'comments']).first();
  `;
  
  const loadRelationsCode = `
  // Loading relations for models using query builder
  final posts = await Khadem.db.table('posts').withRelations(['user', 'comments']).get();
  `;
  
  const parseRelationsCode = `
  // Using relations in query builder
  final posts = await Khadem.db.table('posts')
      .withRelations(['user', 'comments'])
      .where('published', '=', true)
      .get();
  `;
  
  const modelDefinitionCode = `
  class User extends KhademModel<User> with Timestamps, HasRelationships {
    String? name;
    String? email;
    String? password;
  
    User({this.name, this.email, this.password, int? id}) {
      this.id = id;
    }
  
    @override
    List<String> get fillable => ['name', 'email', 'password', 'created_at', 'updated_at'];
  
    @override
    List<String> get hidden => ['password'];
  
    @override
    Map<String, RelationDefinition> get relations => {
      'posts': RelationDefinition<Post>(
        type: RelationType.hasMany,
        relatedTable: 'posts',
        localKey: 'id',
        foreignKey: 'user_id',
        factory: () => Post(),
      )
    };
  
    @override
    dynamic getField(String key) {
      return switch (key) {
        'id' => id,
        'name' => name,
        'email' => email,
        'password' => password,
        'created_at' => createdAt,
        'updated_at' => updatedAt,
        _ => null
      };
    }
  
    @override
    void setField(String key, dynamic value) {
      return switch (key) {
        'id' => id = value,
        'name' => name = value,
        'email' => email = value,
        'password' => password = value,
        'created_at' => createdAt = value,
        'updated_at' => updatedAt = value,
        _ => null
      };
    }
  
    @override
    User newFactory(Map<String, dynamic> data) => User()..fromJson(data);
  }
  `;
  
  const modelQueryCode = `
  // Querying users using the model's query property
  final users = await User().query.where('status', '=', 'active').orderBy('name').get();
  `;
  
  const saveDeleteCode = `
  // Saving a model
  final user = User(name: 'John', email: 'john@example.com');
  await user.save();
  
  // Deleting a model
  await user.delete();
  `;
  
  const controllerExampleCode = `
  class UserController {
    void getUsers(Request req, Response res) async {
      int page = int.tryParse(req.query['page'] ?? '') ?? 1;
      int perPage = int.tryParse(req.query['perPage'] ?? '') ?? 10;
      final result = await Khadem.db.table('users').paginate(perPage: perPage, page: page);
      res.sendJson({'users': result.data, 'total': result.total});
    }
  }
  `;
  
  const relationshipExampleCode = `
  // Using relationships with query builder
  final post = await Khadem.db.table('posts')
      .withRelations(['user', 'comments'])
      .where('id', '=', 1)
      .first();
  
  // Accessing loaded relations
  print(post?['user']?['name']);
  print(post?['comments']?.length);
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