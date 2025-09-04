<template>
    <div class="space-y-8">
      <header class="mb-10">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Khadem ORM</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The Khadem Object-Relational Mapping (ORM) system provides a fluent, type-safe interface for interacting with MySQL databases, including schema management, query building, relationship handling, and model management.
        </p>
      </header>
  
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold border-b pb-2">MySQLSchemaBuilder</h2>
        <p>The <code>MySQLSchemaBuilder</code> class provides methods for creating and managing database schemas, including table creation and modification.</p>
  
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
        <h2 class="text-2xl font-semibold border-b pb-2">MySQLQueryBuilder</h2>
        <p>The <code>MySQLQueryBuilder</code> class provides a fluent interface for building and executing SQL queries, supporting operations like select, insert, update, and delete.</p>
  
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
        <h2 class="text-2xl font-semibold border-b pb-2">EagerLoader</h2>
        <p>The <code>EagerLoader</code> class handles eager loading of relationships for models, supporting various relation types like hasOne, hasMany, belongsTo, and belongsToMany.</p>
  
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-medium">loadRelations()</h3>
            <p>Loads specified relationships for a list of models.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="loadRelationsCode" 
                language="dart"
                title="Loading Relations"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>Parameters:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                  <li><code>models</code>: List of <code>KhademModel</code> instances</li>
                  <li><code>relations</code>: List of relation names or configurations</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-medium">parseRelations()</h3>
            <p>Parses raw relation inputs into <code>RelationMeta</code> objects for processing.</p>
            <div class="mt-4">
              <CodeBlock 
                :code="parseRelationsCode" 
                language="dart"
                title="Parsing Relations"
              />
              <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Supports string-based relation definitions (e.g., <code>comments:paginated:page=1:perPage=10</code>) and map-based configurations.</p>
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
    title: 'Khadem ORM',
    meta: [
      { name: 'description', content: 'Complete reference for the Khadem ORM system, including schema management, query building, and relationship handling' }
    ]
  });
  
  const createCode = `
  // Creating a users table
  Khadem.db.schema.create('users', (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps();
  });
  `;
  
  const createIfNotExistsCode = `
  // Creating a table if it doesn't exist
  Khadem.db.schema.createIfNotExists('posts', (table) {
    table.increments('id');
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('user_id').unsigned().references('id').on('users');
  });
  `;
  
  const dropCode = `
  // Dropping a table
  Khadem.db.schema.drop('users');
  `;
  
  const dropIfExistsCode = `
  // Dropping a table if it exists
  Khadem.db.schema.dropIfExists('posts');
  `;
  
  const selectCode = `
  // Selecting specific columns
  final users = await User().query.select(['id', 'name', 'email']).get();
  `;
  
  const whereCode = `
  // Adding a WHERE clause
  final user = await User().query.where('email', '=', 'test@example.com').first();
  `;
  
  const getCode = `
  // Fetching all users
  final users = await User().query.get();
  
  // Fetching with conditions
  final activeUsers = await User().query.where('status', '=', 'active').get();
  `;
  
  const insertCode = `
  // Inserting a new user
  final id = await User().query.insert({
    'name': 'John Doe',
    'email': 'john@example.com',
    'password': HashHelper.make('password123'),
  });
  `;
  
  const paginateCode = `
  // Paginating users
  final result = await User().query.paginate(perPage: 10, page: 2);
  print('Total: \${result.total}, Page: \${result.currentPage}');
  `;
  
  const withRelationsCode = `
  // Eager loading user and comments
  final post = await Post().query.withRelations(['user', 'comments']).first();
  `;
  
  const loadRelationsCode = `
  // Loading relations for models
  final users = await User().query.get();
  await EagerLoader.loadRelations(users, ['posts', 'comments']);
  `;
  
  const parseRelationsCode = `
  // Parsing relation strings
  final relations = EagerLoader().parseRelations([
    'comments:paginated:page=1:perPage=10',
    {'user': {'paginate': false}}
  ]);
  `;
  
  const modelDefinitionCode = `
  class User extends KhademModel<User> with Timestamps, HasRelationships {
    String? name;
    String? email;
    String? password;
  
    @override
    List<String> get fillable => ['name', 'email', 'password', 'created_at', 'updated_at'];
  
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
  
  const modelQueryCode = `
  // Querying users
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
      final users = await User().query.paginate(perPage: perPage, page: page);
      res.sendJson({'users': users});
    }
  }
  `;
  
  const relationshipExampleCode = `
  // Defining and using relationships
  final post = await Post()
      .query
      .where('id', '=', 1)
      .withRelations(['user', 'comments:paginated:page=1:perPage=5'])
      .first();
  print(post?.relation.get('user')?.name);
  print(post?.relation.get('comments')?.data);
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