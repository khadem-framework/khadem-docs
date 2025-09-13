<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Database & ORM</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Powerful database abstraction with migrations, query builder, and ORM capabilities for Khadem Dart.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">DatabaseManager</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">KhademModel</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">QueryBuilder</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Migrations</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Seeders</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Configuration</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Database Manager Setup</h3>

        <CodeBlock
          :code="databaseConfigCode"
          language="dart"
          title="Database Configuration"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Configuration is loaded from <code>config/database.dart</code></p>
          <p><strong>⚡ Tip:</strong> Use environment variables for sensitive connection details</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <h3 class="font-medium">SQLite</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">File-based, no server</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">sqlite</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <h3 class="font-medium">MySQL</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Production-ready RDBMS</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">mysql</code>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div class="flex items-center mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <h3 class="font-medium">PostgreSQL</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Advanced features, JSON</p>
          <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">pgsql</code>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Migrations</h2>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-4">Creating Migrations</h3>

        <CodeBlock
          :code="migrationCode"
          language="dart"
          title="Migration Structure"
        />

        <div class="mt-4 space-y-2 text-sm text-green-700 dark:text-green-300">
          <p><strong>📁 Location:</strong> <code>database/migrations/</code></p>
          <p><strong>🔄 Naming:</strong> <code>timestamp_description.dart</code></p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="schemaBuilderCode"
            language="dart"
            title="Schema Builder"
          />
        </div>

        <div>
          <CodeBlock
            :code="migrationCommandsCode"
            language="dart"
            title="Migration Commands"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Khadem Model (ORM)</h2>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-4">Model Definition</h3>

        <CodeBlock
          :code="modelDefinitionCode"
          language="dart"
          title="Basic Model Structure"
        />

        <div class="mt-4 space-y-2 text-sm text-purple-700 dark:text-purple-300">
          <p><strong>📁 Location:</strong> <code>app/models/</code></p>
          <p><strong>🔗 Extends:</strong> <code>KhademModel</code></p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="modelCrudCode"
            language="dart"
            title="CRUD Operations"
          />
        </div>

        <div>
          <CodeBlock
            :code="modelRelationshipsCode"
            language="dart"
            title="Model Relationships"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Query Builder</h2>

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200 mb-4">Fluent Query Interface</h3>

        <CodeBlock
          :code="queryBuilderCode"
          language="dart"
          title="Query Builder Usage"
        />

        <div class="mt-4 space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
          <p><strong>🔧 Interface:</strong> <code>QueryBuilderInterface</code></p>
          <p><strong>📊 Supports:</strong> Complex queries, joins, aggregations</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="advancedQueriesCode"
            language="dart"
            title="Advanced Queries"
          />
        </div>

        <div>
          <CodeBlock
            :code="rawQueriesCode"
            language="dart"
            title="Raw SQL Queries"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Seeders</h2>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200 mb-4">Database Seeding</h3>

        <CodeBlock
          :code="seederCode"
          language="dart"
          title="Seeder Implementation"
        />

        <div class="mt-4 space-y-2 text-sm text-orange-700 dark:text-orange-300">
          <p><strong>📁 Location:</strong> <code>database/seeders/</code></p>
          <p><strong>🎯 Purpose:</strong> Populate database with test data</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="factorySeederCode"
            language="dart"
            title="Factory Pattern"
          />
        </div>

        <div>
          <CodeBlock
            :code="seederCommandsCode"
            language="dart"
            title="Seeder Commands"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Transactions</h2>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-4">Transaction Management</h3>

        <CodeBlock
          :code="transactionCode"
          language="dart"
          title="Transaction Usage"
        />

        <div class="mt-4 space-y-2 text-sm text-red-700 dark:text-red-300">
          <p><strong>🔒 Ensures:</strong> Data consistency and integrity</p>
          <p><strong>⚡ Performance:</strong> Batch operations efficiently</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Database & ORM',
  meta: [
    { name: 'description', content: 'Comprehensive database and ORM documentation for Khadem Dart' }
  ]
})

// Database Configuration Examples
const databaseConfigCode = `// config/database.dart
import 'package:khadem/khadem_dart.dart';

class DatabaseConfig {
  static Map<String, dynamic> get config => {
    'driver': Khadem.env.getOrDefault('DB_CONNECTION', 'mysql'),
    'host': Khadem.env.getOrDefault('DB_HOST', 'localhost'),
    'port': Khadem.env.getInt('DB_PORT'),
    'database': Khadem.env.get('DB_DATABASE'),
    'username': Khadem.env.get('DB_USERNAME'),
    'password': Khadem.env.get('DB_PASSWORD'),
    'run_migrations': true,
    'run_seeders': false,
  };
}`

// Migration Examples
const migrationCode = `// database/migrations/0_create_users_table.dart
import 'package:khadem/khadem_dart.dart';

class CreateUsersTable implements MigrationFile {
  @override
  String get name => 'create_users_table';

  @override
  Future<void> up(SchemaBuilder schema) async {
    schema.create('users', (Blueprint table) {
      table.id();
      table.string('name');
      table.string('email').unique();
      table.timestamp('email_verified_at').nullable();
      table.string('password');
      table.rememberToken();
      table.timestamps();
    });
  }

  @override
  Future<void> down(SchemaBuilder schema) async {
    schema.dropIfExists('users');
  }
}`

const schemaBuilderCode = `// Available column types in Blueprint
schema.create('products', (Blueprint table) {
  // Primary Keys
  table.id(); // Auto-incrementing primary key
  table.id('custom_id'); // Custom primary key name

  // Strings
  table.string('name', length: 100); // VARCHAR with length
  table.text('description'); // TEXT

  // Numbers
  table.integer('quantity'); // INT
  table.bigInteger('views'); // BIGINT
  table.float('weight'); // FLOAT

  // Dates & Times
  table.date('birth_date'); // DATE
  table.timestamp('created_at'); // TIMESTAMP

  // Boolean & Enum
  table.boolean('is_active'); // BOOLEAN
  table.enumColumn('status', ['pending', 'approved', 'rejected']);

  // JSON & Arrays
  table.json('metadata'); // JSON
  table.array('tags'); // ARRAY

  // Special
  table.timestamps(); // created_at and updated_at
  table.softDeletes(); // deleted_at for soft deletes

  // Foreign Keys
  table.foreignId('user_id'); // Foreign key column
  table.morphs('commentable'); // Polymorphic relation columns
});`

const migrationCommandsCode = `// Using the Migrator class
import 'package:khadem/khadem_dart.dart';

final migrator = Migrator(Khadem.db);

// Run all pending migrations
await migrator.upAll();

// Rollback last migration
await migrator.downAll();

// Rollback all migrations
await migrator.reset();

// Refresh database (rollback + migrate)
await migrator.refresh();

// Show migration status
await migrator.status();

// Run specific migration
await migrator.up('create_users_table');

// Rollback specific migration
await migrator.down('create_users_table');`

// Model Examples
const modelDefinitionCode = `// app/models/user.dart
import 'package:khadem/khadem_dart.dart';

class User extends KhademModel<User> with Timestamps, HasRelationships {
  User({
    this.name,
    this.email,
    this.password,
    int? id,
  }) {
    this.id = id;
  }

  String? name;
  String? email;
  String? password;

  @override
  List<String> get fillable => [
    'name',
    'email',
    'password',
    'created_at',
    'updated_at'
  ];

  @override
  List<String> get hidden => ['password'];

  @override
  List<String> get appends => [];

  @override
  Map<String, RelationDefinition> get relations => {
    // 'posts': hasMany<Post>(
    //   foreignKey: 'user_id',
    //   relatedTable: 'posts',
    //   factory: () => Post(),
    // )
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
  User newFactory(Map<String, dynamic> data) {
    return User()..fromJson(data);
  }
}`

const modelCrudCode = `// Create a new user
final user = User(name: 'John Doe', email: 'john@example.com');
await user.save();

// Find user by ID
final user = await User().findById(1);

// Find users by condition
final users = await User().findWhere('email', '=', 'john@example.com');

// Update user
user.name = 'John Smith';
await user.save();

// Delete user
await user.delete();

// Query with relationships
final userWithPosts = await User().load(['posts']);

// Check if relation is loaded
if (user.isRelationLoaded('posts')) {
  final posts = user.getRelation('posts');
}

// Append computed attributes
user.append(['full_name']);
user.appendAttribute('display_name');

// Get only specific attributes
final userData = user.only(['name', 'email']);

// Get all except specific attributes
final userData = user.except(['password']);`

const modelRelationshipsCode = `// One-to-One relationship
class User extends KhademModel<User> {
  @override
  Map<String, RelationDefinition> get relations => {
    'profile': RelationDefinition<Profile>(
      type: RelationType.hasOne,
      relatedTable: 'profiles',
      localKey: 'id',
      foreignKey: 'user_id',
      factory: () => Profile(),
    ),
  };
}

class Profile extends KhademModel<Profile> {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': RelationDefinition<User>(
      type: RelationType.belongsTo,
      relatedTable: 'users',
      localKey: 'user_id',
      foreignKey: 'id',
      factory: () => User(),
    ),
  };
}

// One-to-Many relationship
class User extends KhademModel<User> {
  @override
  Map<String, RelationDefinition> get relations => {
    'posts': RelationDefinition<Post>(
      type: RelationType.hasMany,
      relatedTable: 'posts',
      localKey: 'id',
      foreignKey: 'user_id',
      factory: () => Post(),
    ),
  };
}

class Post extends KhademModel<Post> {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': RelationDefinition<User>(
      type: RelationType.belongsTo,
      relatedTable: 'users',
      localKey: 'user_id',
      foreignKey: 'id',
      factory: () => User(),
    ),
  };
}

// Many-to-Many relationship (simplified)
class User extends KhademModel<User> {
  @override
  Map<String, RelationDefinition> get relations => {
    'roles': RelationDefinition<Role>(
      type: RelationType.belongsToMany,
      relatedTable: 'roles',
      localKey: 'id',
      foreignKey: 'user_id',
      factory: () => Role(),
    ),
  };
}`

// Query Builder Examples
const queryBuilderCode = `// Using DatabaseManager
import 'package:khadem/khadem_dart.dart';

final db = Khadem.db;

// Get all records
final users = await db.table('users').get();

// Get first record
final user = await db.table('users').first();

// Get specific columns
final names = await db.table('users').select(['name', 'email']).get();

// Where clauses
final activeUsers = await db.table('users')
    .where('is_active', '=', true)
    .get();

// Count records
final count = await db.table('users').count();

// Check existence
final exists = await db.table('users')
    .where('email', '=', 'john@example.com')
    .exists();

// Insert record
final userId = await db.table('users').insert({
  'name': 'John Doe',
  'email': 'john@example.com',
  'created_at': DateTime.now(),
  'updated_at': DateTime.now(),
});

// Update records
await db.table('users')
    .where('id', '=', 1)
    .update({
      'name': 'John Smith',
      'updated_at': DateTime.now(),
    });

// Delete records
await db.table('users')
    .where('id', '=', 1)
    .delete();`

const advancedQueriesCode = `// Complex where conditions
final users = await db.table('users')
    .where('age', '>', 18)
    .where('city', '=', 'New York')
    .orWhere('city', '=', 'Los Angeles')
    .get();

// Ordering and pagination
final users = await db.table('users')
    .orderBy('created_at', direction: 'DESC')
    .limit(10)
    .offset(20)
    .get();

// Joins
final users = await db.table('users')
    .join('posts', 'users.id', '=', 'posts.user_id')
    .select(['users.name', 'posts.title'])
    .get();

// Grouping and aggregation
final stats = await db.table('posts')
    .select(['user_id'])
    .groupBy('user_id')
    .having('COUNT(*)', '>', 5)
    .get();

// Raw queries
final users = await db.table('users')
    .whereRaw('created_at > ?', [DateTime.now().subtract(Duration(days: 30))])
    .get();`

const rawQueriesCode = `// Raw SQL queries using connection
final connection = db.connection;

// Raw select
final users = await connection.query('SELECT * FROM users WHERE id = ?', [1]);

// Raw insert
final result = await connection.execute(
  'INSERT INTO users (name, email) VALUES (?, ?)',
  ['John Doe', 'john@example.com']
);

// Raw update
await connection.execute(
  'UPDATE users SET name = ? WHERE id = ?',
  ['John Smith', 1]
);

// Raw delete
await connection.execute('DELETE FROM users WHERE id = ?', [1]);`

// Seeder Examples
const seederCode = `// database/seeders/database_seeder.dart
import 'package:khadem/khadem_dart.dart';

class DatabaseSeeder implements Seeder {
  @override
  String get name => 'database_seeder';

  @override
  Future<void> run() async {
    // Call other seeders
    await UserSeeder().run();
    await PostSeeder().run();
    await CategorySeeder().run();
  }
}

// database/seeders/user_seeder.dart
class UserSeeder implements Seeder {
  @override
  String get name => 'user_seeder';

  @override
  Future<void> run() async {
    // Create test users
    await Khadem.db.table('users').insert([
      {
        'name': 'John Doe',
        'email': 'john@example.com',
        'password': 'hashed_password',
        'created_at': DateTime.now(),
        'updated_at': DateTime.now(),
      },
      {
        'name': 'Jane Smith',
        'email': 'jane@example.com',
        'password': 'hashed_password',
        'created_at': DateTime.now(),
        'updated_at': DateTime.now(),
      },
    ]);
  }
}`

const factorySeederCode = `// Using factories for seeding
class UserFactory {
  static Map<String, dynamic> make() {
    return {
      'name': 'Test User',
      'email': 'test@example.com',
      'password': 'hashed_password',
      'created_at': DateTime.now(),
      'updated_at': DateTime.now(),
    };
  }

  static Map<String, dynamic> makeWithOverrides(Map<String, dynamic> overrides) {
    return {...make(), ...overrides};
  }
}

// In seeder
class UserSeeder extends Seeder {
  @override
  void run() {
    // Create 10 users using factory
    for (var i = 0; i < 10; i++) {
      db.table('users').insert(UserFactory.makeWithOverrides({
        'name': 'User \$i',
        'email': 'user\$i@example.com',
      }));
    }
  }
}`

const seederCommandsCode = `// Using SeederManager
import 'package:khadem/khadem_dart.dart';

final seederManager = SeederManager();

// Register seeders
seederManager.register(DatabaseSeeder());
seederManager.register(UserSeeder());

// Run all seeders
await seederManager.runAll();

// Run specific seeder
await seederManager.run('user_seeder');`

// Transaction Examples
const transactionCode = `// Using DatabaseManager transactions
await Khadem.db.connection.transaction((trx) async {
  final userId = await trx.table('users').insert({
    'name': 'John Doe',
    'email': 'john@example.com',
  });

  await trx.table('profiles').insert({
    'user_id': userId,
    'bio': 'Software developer',
  });
});

// Manual transaction using connection
final connection = Khadem.db.connection;
await connection.transaction((trx) async {
  final userId = await trx.table('users').insert({
    'name': 'John Doe',
    'email': 'john@example.com',
  });

  await trx.table('profiles').insert({
    'user_id': userId,
    'bio': 'Software developer',
  });
});`

// Testing Examples
const testingCode = `// tests/database/user_test.dart
import 'package:test/test.dart';
import 'package:khadem/khadem_dart.dart';

void main() {
  group('User Model Tests', () {
    setUp(() async {
      // Initialize database for testing
      await Khadem.db.init();
      
      // Run migrations
      final migrator = Migrator(Khadem.db);
      await migrator.upAll();
    });

    tearDown(() async {
      // Clean up after tests
      final migrator = Migrator(Khadem.db);
      await migrator.reset();
      await Khadem.db.close();
    });

    test('creates user successfully', () async {
      final user = User(
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      );

      await user.save();

      expect(user.id, isNotNull);
      expect(user.name, 'Test User');
      expect(user.email, 'test@example.com');
    });

    test('finds user by email', () async {
      final user = User(
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      );
      await user.save();

      final foundUser = await User().findWhere('email', '=', 'test@example.com');

      expect(foundUser, isNotEmpty);
      expect(foundUser.first.email, 'test@example.com');
    });

    test('validates required fields', () async {
      final user = User(); // Empty user
      
      expect(
        () async => await user.save(),
        throwsA(isA<Exception>())
      );
    });
  });
}`
</script>
