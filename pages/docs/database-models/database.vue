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

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg border border-blue-300 dark:border-blue-700">
          <div class="flex items-center mb-3">
            <div class="w-4 h-4 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <h3 class="font-bold text-lg">MySQL</h3>
            <span class="ml-auto px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">Fully Supported</span>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Production-ready relational database with full ORM support, migrations, and query builder.</p>
          <div class="flex items-center gap-2">
            <code class="text-xs bg-white dark:bg-gray-900 px-3 py-1 rounded border">mysql</code>
            <span class="text-xs text-gray-600 dark:text-gray-400">✨ Recommended</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 p-6 rounded-lg border border-gray-300 dark:border-gray-600 opacity-75">
          <div class="flex items-center mb-3">
            <div class="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
            <h3 class="font-bold text-lg text-gray-600 dark:text-gray-400">SQLite & PostgreSQL</h3>
            <span class="ml-auto px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">Coming Soon</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">SQLite and PostgreSQL drivers are planned for future releases.</p>
          <div class="flex items-center gap-2">
            <code class="text-xs bg-white dark:bg-gray-900 px-3 py-1 rounded border opacity-50">sqlite</code>
            <code class="text-xs bg-white dark:bg-gray-900 px-3 py-1 rounded border opacity-50">pgsql</code>
          </div>
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
import 'package:khadem/khadem.dart';

class DatabaseConfig {
  static Map<String, dynamic> get config => {
    'driver': 'mysql', // Currently only MySQL is supported
    'host': Khadem.env.getOrDefault('DB_HOST', 'localhost'),
    'port': Khadem.env.getInt('DB_PORT', 3306),
    'database': Khadem.env.get('DB_DATABASE'),
    'username': Khadem.env.get('DB_USERNAME'),
    'password': Khadem.env.get('DB_PASSWORD'),
    'charset': 'utf8mb4',
    'collation': 'utf8mb4_unicode_ci',
    'run_migrations': true,
    'run_seeders': false,
  };
}

// In your .env file:
// DB_HOST=localhost
// DB_PORT=3306
// DB_DATABASE=khadem_app
// DB_USERNAME=root
// DB_PASSWORD=secret`

// Migration Examples
const migrationCode = `// database/migrations/0_create_users_table.dart
import 'package:khadem/khadem.dart';

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
  table.id(); // Auto-incrementing BIGINT primary key
  table.id('custom_id'); // Custom primary key name

  // Strings
  table.string('name', length: 100); // VARCHAR(100)
  table.text('description'); // TEXT

  // Numbers
  table.integer('quantity'); // INT
  table.bigInteger('views'); // BIGINT
  table.float('price'); // FLOAT

  // Dates & Times
  table.date('birth_date'); // DATE
  table.timestamp('created_at'); // TIMESTAMP

  // Boolean & Enum
  table.boolean('is_active'); // BOOLEAN/TINYINT
  table.enumColumn('status', ['pending', 'approved', 'rejected']);

  // JSON
  table.json('metadata'); // JSON column

  // Special helper methods
  table.timestamps(); // Adds created_at and updated_at
  table.softDeletes(); // Adds deleted_at for soft deletes

  // Foreign Keys & Relations
  table.foreignId('user_id'); // BIGINT UNSIGNED for foreign keys
  table.morphs('commentable'); // Polymorphic relation columns
  // Creates: commentable_type (VARCHAR) and commentable_id (BIGINT)
});`

const migrationCommandsCode = `// Using the Migrator class
import 'package:khadem/khadem.dart';

final migrator = Migrator(Khadem.db);

// Run all pending migrations
await migrator.upAll();

// Rollback all migrations
await migrator.downAll();

// Reset and re-run all migrations
await migrator.reset();

// Refresh database (downAll + upAll)
await migrator.refresh();

// Show migration status
await migrator.status();

// Run specific migration
await migrator.up('create_users_table');

// Rollback specific migration
await migrator.down('create_users_table');`

// Model Examples
const modelDefinitionCode = `// app/models/user.dart
import 'package:khadem/khadem.dart';

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
  String get tableName => 'users';

  @override
  List<String> get fillable => ['name', 'email', 'password'];

  @override
  List<String> get hidden => ['password'];

  @override
  List<String> get protected => ['password']; // Never in JSON

  @override
  Map<String, dynamic> get casts => {
    'created_at': DateTime,
    'updated_at': DateTime,
  };

  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    ),
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
    switch (key) {
      case 'id': id = value; break;
      case 'name': name = value; break;
      case 'email': email = value; break;
      case 'password': password = value; break;
      case 'created_at': createdAt = value; break;
      case 'updated_at': updatedAt = value; break;
    }
  }

  @override
  User newFactory(Map<String, dynamic> data) {
    return User()..fromJson(data);
  }
}`

const modelCrudCode = `// Create a new user
final user = User(name: 'John Doe', email: 'john@example.com', password: 'secret');
await user.save();
print('User created with ID: \${user.id}');

// Find user by ID using query builder
final foundUser = await User().query.where('id', '=', 1).first();
if (foundUser != null) {
  print('Found: \${foundUser.name}');
}

// Find users by condition
final users = await User().query.where('email', '=', 'john@example.com').get();
print('Found \${users.length} users');

// Update user
user.name = 'John Smith';
await user.save();

// Delete user
await user.delete();

// Mass assignment with fillable protection
final newUser = User()..fromJson({
  'name': 'Jane Doe',
  'email': 'jane@example.com',
  'password': 'secret',
  'role': 'admin', // Ignored if not in fillable
});
await newUser.save();`

const modelRelationshipsCode = `// Load relationships
final user = await User().query.where('id', '=', 1).first();
await user?.load('posts');

// Eager load with query
final users = await User().query.withRelations(['posts']).get();

// Check if relation is loaded
if (user?.isRelationLoaded('posts') ?? false) {
  final posts = user!.getRelation('posts');
}

// Load missing relations only
await user?.loadMissing(['posts', 'profile']);

// Get only specific attributes
final userData = user?.only(['name', 'email']);

// Get all except specific attributes
final userData = user?.except(['password']);`

const relationshipDefinitionsCode = `// One-to-One relationship using HasRelationships mixin
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'profile': hasOne<Profile>(
      foreignKey: 'user_id',
      relatedTable: 'profiles',
      factory: () => Profile(),
    ),
  };
}

class Profile extends KhademModel<Profile> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User(),
    ),
  };
}

// One-to-Many relationship
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    ),
  };
}

class Post extends KhademModel<Post> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User(),
    ),
  };
}

// Many-to-Many relationship
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'roles': belongsToMany<Role>(
      pivotTable: 'user_roles',
      foreignPivotKey: 'user_id',
      relatedPivotKey: 'role_id',
      relatedTable: 'roles',
      localKey: 'id',
      factory: () => Role(),
    ),
  };
}`

// Query Builder Examples
const queryBuilderCode = `// Using query builder through models
import 'package:khadem/khadem.dart';

// Get all records
final users = await User().query.get();

// Get first record
final user = await User().query.first();

// Get specific columns
final users = await User().query.select(['name', 'email']).get();

// Where clauses
final activeUsers = await User().query
    .where('is_active', '=', true)
    .get();

// Multiple where conditions
final filteredUsers = await User().query
    .where('is_active', '=', true)
    .where('role', '=', 'admin')
    .get();

// Ordering
final latestUsers = await User().query
    .orderBy('created_at', direction: 'DESC')
    .limit(10)
    .get();

// Pagination
final result = await User().query.paginate(perPage: 15, page: 1);
print('Total: \${result.total}');
print('Current page: \${result.currentPage}');
print('Data: \${result.data.length} items');

// Count records
final count = await User().query.count();

// Check existence
final exists = await User().query
    .where('email', '=', 'john@example.com')
    .exists();

// Insert record using model
final user = User(
  name: 'John Doe',
  email: 'john@example.com',
);
await user.save();

// Update records using model
final user = await User().query.where('id', '=', 1).first();
if (user != null) {
  user.name = 'John Smith';
  await user.save();
}

// Delete records using model
final user = await User().query.where('id', '=', 1).first();
await user?.delete();`

const advancedQueriesCode = `// Complex where conditions
final users = await User().query
    .where('age', '>', 18)
    .where('city', '=', 'New York')
    .orWhere('city', '=', 'Los Angeles')
    .get();

// Ordering and pagination
final users = await User().query
    .orderBy('created_at', direction: 'DESC')
    .limit(10)
    .offset(20)
    .get();

// whereHas - Query based on relationships
final usersWithPosts = await User().query
    .whereHas('posts', (query) {
      query.where('status', '=', 'published');
    })
    .get();

// Grouping with having
final query = User().query
    .select(['role', 'COUNT(*) as count'])
    .groupBy('role')
    .having('count', '>', 5);

// Raw queries
final users = await User().query
    .whereRaw('created_at > ?', [DateTime.now().subtract(Duration(days: 30))])
    .get();

// JSON queries
final users = await User().query
    .whereJsonContains('settings->notifications', 'email')
    .get();`

const rawQueriesCode = `// Raw SQL queries using DatabaseManager
import 'package:khadem/khadem.dart';

final db = Khadem.db;
final connection = db.connection;

// Raw select
final results = await connection.query(
  'SELECT * FROM users WHERE id = ?',
  [1]
);

// Raw insert
await connection.execute(
  'INSERT INTO users (name, email, created_at, updated_at) VALUES (?, ?, ?, ?)',
  ['John Doe', 'john@example.com', DateTime.now(), DateTime.now()]
);

// Raw update
await connection.execute(
  'UPDATE users SET name = ?, updated_at = ? WHERE id = ?',
  ['John Smith', DateTime.now(), 1]
);

// Raw delete
await connection.execute('DELETE FROM users WHERE id = ?', [1]);

// Use whereRaw in query builder for safer raw queries
final users = await User().query
    .whereRaw('YEAR(created_at) = ?', [2024])
    .get();`

// Seeder Examples
const seederCode = `// database/seeders/database_seeder.dart
import 'package:khadem/khadem.dart';

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
    // Create test users using models
    final users = [
      User(name: 'John Doe', email: 'john@example.com', password: 'hashed_password'),
      User(name: 'Jane Smith', email: 'jane@example.com', password: 'hashed_password'),
    ];
    
    for (final user in users) {
      await user.save();
    }
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
class UserSeeder implements Seeder {
  @override
  String get name => 'user_seeder';

  @override
  Future<void> run() async {
    // Create 10 users using factory
    for (var i = 0; i < 10; i++) {
      final userData = UserFactory.makeWithOverrides({
        'name': 'User \$i',
        'email': 'user\$i@example.com',
      });
      
      final user = User()..fromJson(userData);
      await user.save();
    }
  }
}`

const seederCommandsCode = `// Using Seeder class
import 'package:khadem/khadem.dart';

// Create and run database seeder
final databaseSeeder = DatabaseSeeder();
await databaseSeeder.run();

// Run specific seeder
final userSeeder = UserSeeder();
await userSeeder.run();

// Or manually seed data
await User(name: 'Admin', email: 'admin@example.com', password: 'hashed').save();
await User(name: 'User', email: 'user@example.com', password: 'hashed').save();`

// Transaction Examples
const transactionCode = `// Using DatabaseManager transactions
import 'package:khadem/khadem.dart';

final connection = Khadem.db.connection;

await connection.transaction((trx) async {
  // Create user
  final user = User(name: 'John Doe', email: 'john@example.com');
  await user.save();
  
  // Create profile for the user
  final profile = Profile(userId: user.id, bio: 'Software developer');
  await profile.save();
  
  // If any operation fails, the entire transaction is rolled back
});

// Transaction with error handling
try {
  await connection.transaction((trx) async {
    final user = User(name: 'Jane Doe', email: 'jane@example.com');
    await user.save();
    
    // This might fail
    final order = Order(userId: user.id, total: 100.0);
    await order.save();
  });
  print('Transaction completed successfully');
} catch (e) {
  print('Transaction failed: \$e');
  // All changes are automatically rolled back
}`

const testingCode = `// tests/database/user_test.dart
import 'package:test/test.dart';
import 'package:khadem/khadem.dart';

void main() {
  group('User Model Tests', () {
    setUp(() async {
      // Initialize database for testing
      // Note: Configure test database connection first
      
      // Run migrations
      final migrator = Migrator(Khadem.db);
      await migrator.upAll();
    });

    tearDown(() async {
      // Clean up after tests
      final migrator = Migrator(Khadem.db);
      await migrator.reset();
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

      final users = await User().query
          .where('email', '=', 'test@example.com')
          .get();

      expect(users, isNotEmpty);
      expect(users.first.email, 'test@example.com');
    });

    test('loads relationships', () async {
      final user = User(name: 'Test', email: 'test@example.com', password: 'pass');
      await user.save();
      
      final post = Post(userId: user.id, title: 'Test Post');
      await post.save();

      await user.load('posts');
      final posts = user.getRelation('posts') as List<Post>;
      
      expect(posts.length, 1);
      expect(posts.first.title, 'Test Post');
    });
  });
}`
</script>
