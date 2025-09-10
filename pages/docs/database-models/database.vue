<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Database & Migrations
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to work with databases, run migrations, and manage your data
          </p>
        </div>

        <div class="space-y-8">
          <!-- Database Configuration -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Database Configuration
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Configure database connections and settings.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Database Config
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// config/database.dart
import 'package:khadem/src/database/database_config.dart';

class DatabaseConfig extends Config {
  @override
  Map&lt;String, dynamic&gt; get config =&gt; {
    'default': env('DB_CONNECTION', 'mysql'),

    'connections': {
      'sqlite': {
        'driver': 'sqlite',
        'url': env('DATABASE_URL'),
        'database': env('DB_DATABASE', database_path('database.sqlite')),
        'prefix': '',
        'foreign_key_constraints': env('DB_FOREIGN_KEYS', true),
      },

      'mysql': {
        'driver': 'mysql',
        'url': env('DATABASE_URL'),
        'host': env('DB_HOST', '127.0.0.1'),
        'port': env('DB_PORT', '3306'),
        'database': env('DB_DATABASE', 'khadem'),
        'username': env('DB_USERNAME', 'root'),
        'password': env('DB_PASSWORD', ''),
        'unix_socket': env('DB_SOCKET', ''),
        'charset': 'utf8mb4',
        'collation': 'utf8mb4_unicode_ci',
        'prefix': '',
        'prefix_indexes': true,
        'strict': true,
        'engine': null,
        'options': {},
      },

      'pgsql': {
        'driver': 'pgsql',
        'url': env('DATABASE_URL'),
        'host': env('DB_HOST', '127.0.0.1'),
        'port': env('DB_PORT', '5432'),
        'database': env('DB_DATABASE', 'khadem'),
        'username': env('DB_USERNAME', 'postgres'),
        'password': env('DB_PASSWORD', ''),
        'charset': 'utf8',
        'prefix': '',
        'prefix_indexes': true,
        'schema': 'public',
        'sslmode': 'prefer',
      },

      'sqlsrv': {
        'driver': 'sqlsrv',
        'url': env('DATABASE_URL'),
        'host': env('DB_HOST', 'localhost'),
        'port': env('DB_PORT', '1433'),
        'database': env('DB_DATABASE', 'khadem'),
        'username': env('DB_USERNAME', 'sa'),
        'password': env('DB_PASSWORD', ''),
        'charset': 'utf8',
        'prefix': '',
        'prefix_indexes': true,
      },

      'mongodb': {
        'driver': 'mongodb',
        'host': env('DB_HOST', '127.0.0.1'),
        'port': env('DB_PORT', '27017'),
        'database': env('DB_DATABASE', 'khadem'),
        'username': env('DB_USERNAME'),
        'password': env('DB_PASSWORD'),
        'options': {
          'replicaSet': env('DB_REPLICA_SET'),
          'ssl': env('DB_SSL', false),
          'authSource': env('DB_AUTH_SOURCE', 'admin'),
        },
      },
    },

    'migrations': 'migrations',

    'redis': {
      'client': env('REDIS_CLIENT', 'phpredis'),
      'options': {
        'cluster': env('REDIS_CLUSTER', 'redis'),
        'prefix': env('REDIS_PREFIX', Str.slug(env('APP_NAME', 'khadem'), '_').value + '_database_'),
      },

      'default': {
        'url': env('REDIS_URL'),
        'host': env('REDIS_HOST', '127.0.0.1'),
        'password': env('REDIS_PASSWORD'),
        'port': env('REDIS_PORT', '6379'),
        'database': env('REDIS_DB', '0'),
      },

      'cache': {
        'url': env('REDIS_URL'),
        'host': env('REDIS_HOST', '127.0.0.1'),
        'password': env('REDIS_PASSWORD'),
        'port': env('REDIS_PORT', '6379'),
        'database': env('REDIS_CACHE_DB', '1'),
      },
    },
  };
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Database Service Provider
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/database_service_provider.dart
import 'package:khadem/src/database/database_manager.dart';

class DatabaseServiceProvider extends ServiceProvider {
  @override
  void register() {
    app.singleton(DatabaseManager, () {
      return DatabaseManager(config('database'));
    });

    app.bind('db', () {
      return app.make(DatabaseManager).connection();
    });
  }

  @override
  void boot() {
    // Register custom database types
    DB.addTypes({
      'json': JsonType(),
      'uuid': UuidType(),
      'enum': EnumType(),
    });
  }
}</code></pre>
            </div>
          </div>

          <!-- Migrations -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Database Migrations
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create and manage database schema changes.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Migrations
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Create a new migration
php artisan make:migration create_users_table

// Create migration for specific table
php artisan make:migration add_email_to_users_table --table=users

// Create migration with custom name
php artisan make:migration create_posts_table --create=posts</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Migration Structure
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// database/migrations/2024_01_01_000001_create_users_table.dart
import 'package:khadem/src/database/migrations/migration.dart';

class CreateUsersTable extends Migration {
  @override
  void up() {
    schema.create('users', (table) {
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
  void down() {
    schema.dropIfExists('users');
  }
}

// database/migrations/2024_01_02_000002_create_posts_table.dart
class CreatePostsTable extends Migration {
  @override
  void up() {
    schema.create('posts', (table) {
      table.id();
      table.string('title');
      table.text('content');
      table.foreignId('user_id').constrained().onDelete('cascade');
      table.timestamps();
    });
  }

  @override
  void down() {
    schema.dropIfExists('posts');
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Running Migrations
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Run all pending migrations
php artisan migrate

// Run migrations for specific path
php artisan migrate --path=database/migrations/tenant

// Run migrations without prompting
php artisan migrate --force

// Rollback last migration
php artisan migrate:rollback

// Rollback specific number of migrations
php artisan migrate:rollback --step=5

// Rollback all migrations
php artisan migrate:reset

// Rollback and re-run all migrations
php artisan migrate:fresh

// Show migration status
php artisan migrate:status</code></pre>
            </div>
          </div>

          <!-- Schema Builder -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Schema Builder
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create and modify database tables with the schema builder.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Column Types
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// database/migrations/create_products_table.dart
class CreateProductsTable extends Migration {
  @override
  void up() {
    schema.create('products', (table) {
      // Primary Keys
      table.id(); // Auto-incrementing primary key
      table.uuid('uuid'); // UUID primary key
      table.ulid('ulid'); // ULID primary key

      // Strings
      table.string('name', 100); // VARCHAR with length
      table.text('description'); // TEXT
      table.mediumText('content'); // MEDIUMTEXT
      table.longText('article'); // LONGTEXT

      // Numbers
      table.integer('quantity'); // INTEGER
      table.bigInteger('views'); // BIGINT
      table.smallInteger('rating'); // SMALLINT
      table.tinyInteger('status'); // TINYINT
      table.decimal('price', 8, 2); // DECIMAL(8,2)
      table.float('weight', 8, 2); // FLOAT
      table.double('height', 8, 2); // DOUBLE

      // Dates & Times
      table.date('birth_date'); // DATE
      table.dateTime('created_at'); // DATETIME
      table.timestamp('updated_at'); // TIMESTAMP
      table.time('start_time'); // TIME
      table.year('year'); // YEAR

      // Boolean & Enum
      table.boolean('is_active'); // BOOLEAN/TINYINT(1)
      table.enum('status', ['pending', 'approved', 'rejected']); // ENUM

      // JSON & Arrays
      table.json('metadata'); // JSON
      table.jsonb('settings'); // JSONB (PostgreSQL)

      // Binary
      table.binary('data'); // BLOB
      table.mediumBlob('image'); // MEDIUMBLOB
      table.longBlob('video'); // LONGBLOB

      // Special
      table.rememberToken(); // VARCHAR(100) NULL for remember tokens
      table.timestamps(); // created_at and updated_at TIMESTAMP
      table.softDeletes(); // deleted_at TIMESTAMP NULL

      // Indexes
      table.index('email'); // Regular index
      table.unique('email'); // Unique index
      table.index(['first_name', 'last_name']); // Composite index
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Foreign Keys
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// database/migrations/add_foreign_keys.dart
class AddForeignKeys extends Migration {
  @override
  void up() {
    schema.table('posts', (table) {
      // Basic foreign key
      table.foreign('user_id').references('id').on('users');

      // Foreign key with cascade delete
      table.foreign('category_id').references('id').on('categories')
           .onDelete('cascade');

      // Foreign key with set null
      table.foreign('parent_id').references('id').on('posts')
           .onDelete('set null');

      // Named foreign key constraint
      table.foreign('author_id', 'posts_author_id_foreign')
           .references('id').on('users');
    });
  }

  @override
  void down() {
    schema.table('posts', (table) {
      table.dropForeign('posts_user_id_foreign');
      table.dropForeign('posts_category_id_foreign');
      table.dropForeign('posts_parent_id_foreign');
      table.dropForeign('posts_author_id_foreign');
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Modifying Tables
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// database/migrations/modify_users_table.dart
class ModifyUsersTable extends Migration {
  @override
  void up() {
    schema.table('users', (table) {
      // Add columns
      table.string('phone').nullable();
      table.boolean('is_verified').default(false);
      table.timestamp('last_login_at').nullable();

      // Modify columns
      table.string('name', 150).change(); // Change length
      table.integer('age').unsigned().change(); // Make unsigned

      // Rename columns
      table.renameColumn('created_at', 'registered_at');

      // Drop columns
      table.dropColumn('old_field');
      table.dropColumn(['field1', 'field2']);

      // Add indexes
      table.index('phone');
      table.unique('email');

      // Drop indexes
      table.dropIndex('users_email_index');
      table.dropUnique('users_email_unique');
    });
  }

  @override
  void down() {
    schema.table('users', (table) {
      table.dropColumn(['phone', 'is_verified', 'last_login_at']);
      table.string('name', 255).change();
      table.integer('age').change();
      table.renameColumn('registered_at', 'created_at');
      table.dropIndex('users_phone_index');
      table.dropUnique('users_email_unique');
    });
  }
}</code></pre>
            </div>
          </div>

          <!-- Seeders -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Database Seeders
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Populate your database with test data.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Seeders
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Create a seeder
php artisan make:seeder UsersTableSeeder

// database/seeders/UsersTableSeeder.dart
import 'package:khadem/src/database/seeders/seeder.dart';
import 'package:khadem/src/support/faker.dart';

class UsersTableSeeder extends Seeder {
  @override
  Future&lt;void&gt; run() async {
    // Create specific users
    await DB.table('users').insert({
      'name': 'John Doe',
      'email': 'john@example.com',
      'password': Hash.make('password'),
      'created_at': DateTime.now(),
      'updated_at': DateTime.now(),
    });

    // Create multiple users using Faker
    for (var i = 0; i &lt; 10; i++) {
      await DB.table('users').insert({
        'name': Faker.name(),
        'email': Faker.email(),
        'password': Hash.make('password'),
        'created_at': DateTime.now(),
        'updated_at': DateTime.now(),
      });
    }
  }
}

// database/seeders/DatabaseSeeder.dart
class DatabaseSeeder extends Seeder {
  @override
  Future&lt;void&gt; run() async {
    // Run seeders in order
    await this.call(UsersTableSeeder);
    await this.call(PostsTableSeeder);
    await this.call(CategoriesTableSeeder);
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Running Seeders
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Run all seeders
php artisan db:seed

// Run specific seeder
php artisan db:seed --class=UsersTableSeeder

// Run seeders with migrations
php artisan migrate:fresh --seed

// Run seeders without confirmation
php artisan db:seed --force</code></pre>
            </div>
          </div>

          <!-- Query Builder -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Query Builder
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Build complex database queries with the fluent query builder.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Queries
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Get all records
final users = await DB.table('users').get();

// Get first record
final user = await DB.table('users').first();

// Get specific columns
final names = await DB.table('users').select('name', 'email').get();

// Get single record by ID
final user = await DB.table('users').where('id', 1).first();

// Get records with conditions
final activeUsers = await DB.table('users')
    .where('is_active', true)
    .get();

// Count records
final count = await DB.table('users').where('is_active', true).count();

// Check if records exist
final exists = await DB.table('users').where('email', 'john@example.com').exists();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Advanced Queries
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Where clauses
final users = await DB.table('users')
    .where('age', '&gt;', 18)
    .where('city', 'New York')
    .orWhere('city', 'Los Angeles')
    .get();

// Where with array
final users = await DB.table('users')
    .whereIn('id', [1, 2, 3, 4, 5])
    .get();

// Where between
final users = await DB.table('users')
    .whereBetween('age', [18, 65])
    .get();

// Where null
final users = await DB.table('users')
    .whereNull('deleted_at')
    .get();

// Ordering and limiting
final users = await DB.table('users')
    .orderBy('created_at', 'desc')
    .limit(10)
    .offset(20)
    .get();

// Grouping
final stats = await DB.table('orders')
    .select('status', DB.raw('COUNT(*) as count'))
    .groupBy('status')
    .get();

// Joins
final users = await DB.table('users')
    .join('posts', 'users.id', '=', 'posts.user_id')
    .select('users.name', 'posts.title')
    .get();

// Left join
final users = await DB.table('users')
    .leftJoin('profiles', 'users.id', '=', 'profiles.user_id')
    .select('users.*', 'profiles.bio')
    .get();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Insert, Update, Delete
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Insert single record
final id = await DB.table('users').insertGetId({
  'name': 'John Doe',
  'email': 'john@example.com',
  'created_at': DateTime.now(),
  'updated_at': DateTime.now(),
});

// Insert multiple records
await DB.table('users').insert([
  {'name': 'Jane Doe', 'email': 'jane@example.com'},
  {'name': 'Bob Smith', 'email': 'bob@example.com'},
]);

// Update records
await DB.table('users')
    .where('id', 1)
    .update({
      'name': 'John Smith',
      'updated_at': DateTime.now(),
    });

// Update with increment/decrement
await DB.table('users')
    .where('id', 1)
    .increment('login_count');

await DB.table('users')
    .where('id', 1)
    .decrement('credits', 5);

// Delete records
await DB.table('users')
    .where('id', 1)
    .delete();

// Delete all records
await DB.table('users').delete();</code></pre>
            </div>
          </div>

          <!-- Database Transactions -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Database Transactions
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Ensure data consistency with database transactions.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Transactions
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Using transaction method
await DB.transaction((trx) async {
  final userId = await trx.table('users').insertGetId({
    'name': 'John Doe',
    'email': 'john@example.com',
  });

  await trx.table('profiles').insert({
    'user_id': userId,
    'bio': 'Software developer',
  });
});

// Manual transaction
final trx = await DB.beginTransaction();

try {
  final userId = await trx.table('users').insertGetId({
    'name': 'John Doe',
    'email': 'john@example.com',
  });

  await trx.table('profiles').insert({
    'user_id': userId,
    'bio': 'Software developer',
  });

  await trx.commit();
} catch (e) {
  await trx.rollback();
  rethrow;
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Transaction in Models
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  Future&lt;bool&gt; createWithProfile(Map&lt;String, dynamic&gt; data) async {
    return await DB.transaction((trx) async {
      final user = await this.create(data, trx);

      await Profile.create({
        'user_id': user.id,
        'bio': data['bio'],
      }, trx);

      return true;
    });
  }
}

// Usage
final user = User();
await user.createWithProfile({
  'name': 'John Doe',
  'email': 'john@example.com',
  'bio': 'Developer',
});</code></pre>
            </div>
          </div>

          <!-- Testing Database -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing Database
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your database operations and migrations.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// tests/unit/database/user_repository_test.dart
import 'package:test/test.dart';
import 'package:khadem/src/database/database_manager.dart';
import 'package:khadem/src/testing/database/migrations.dart';
import '../../app/repositories/user_repository.dart';

void main() {
  group('UserRepository', () {
    setUp(() async {
      // Run migrations for testing
      await TestMigrations.run();

      // Seed test data
      await DatabaseSeeder().run();
    });

    tearDown(() async {
      // Clean up after tests
      await TestMigrations.rollback();
    });

    test('creates user successfully', () async {
      final repository = UserRepository();

      final user = await repository.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      expect(user.id, isNotNull);
      expect(user.name, 'Test User');
      expect(user.email, 'test@example.com');
    });

    test('finds user by email', () async {
      final repository = UserRepository();

      await repository.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      final user = await repository.findByEmail('test@example.com');

      expect(user, isNotNull);
      expect(user.email, 'test@example.com');
    });

    test('throws exception for duplicate email', () async {
      final repository = UserRepository();

      await repository.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      expect(
        () async =&gt; await repository.create({
          'name': 'Another User',
          'email': 'test@example.com',
          'password': 'password',
        }),
        throwsA(isA&lt;DatabaseException&gt;())
      );
    });
  });
}

// tests/TestCase.dart
import 'package:khadem/src/testing/test_case.dart';

class TestCase extends BaseTestCase {
  @override
  Future&lt;void&gt; setUp() async {
    await super.setUp();

    // Set up database for testing
    await this.setUpDatabase();
  }

  @override
  Future&lt;void&gt; tearDown() async {
    // Clean up database
    await this.tearDownDatabase();

    await super.tearDown();
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})
</script>
