<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Models & Relationships
        </h1>
        <p class="text-xl text-blue-100 mb-8">
          Learn how to create models and define relationships between them in Khadem Dart
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-sm font-medium">Eloquent-like ORM</span>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-sm font-medium">Relationship Management</span>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-sm font-medium">Query Building</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div>
          <CodeBlock
            :code="basicModelCode"
            language="dart"
            title="Basic Model"
          />
        </div>

        <div>
          <CodeBlock
            :code="modelUsageCode"
            language="dart"
            title="Model Usage"
          />
        </div>

        <div>
          <CodeBlock
            :code="queryScopesCode"
            language="dart"
            title="Query Scopes"
          />
        </div>
      </div>

      <!-- Creating Models Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Creating Models
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Models represent database tables and provide an easy way to interact with your data.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="modelAttributesCode"
              language="dart"
              title="Model Attributes"
            />
          </div>

          <div>
            <CodeBlock
              :code="accessorsMutatorsCode"
              language="dart"
              title="Accessors & Mutators"
            />
          </div>
        </div>
      </section>

      <!-- Relationships Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Model Relationships
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Define relationships between your models to easily access related data.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <CodeBlock
              :code="oneToOneCode"
              language="dart"
              title="One to One"
            />
          </div>

          <div>
            <CodeBlock
              :code="oneToManyCode"
              language="dart"
              title="One to Many"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <CodeBlock
              :code="manyToManyCode"
              language="dart"
              title="Many to Many"
            />
          </div>

          <div>
            <CodeBlock
              :code="polymorphicCode"
              language="dart"
              title="Polymorphic"
            />
          </div>
        </div>

        <CodeBlock
          :code="hasManyThroughCode"
          language="dart"
          title="Has Many Through"
        />
      </section>

      <!-- Eager Loading Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Eager Loading
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Load relationships efficiently to avoid N+1 query problems.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <CodeBlock
              :code="basicEagerLoadingCode"
              language="dart"
              title="Basic Eager Loading"
            />
          </div>

          <div>
            <CodeBlock
              :code="lazyEagerLoadingCode"
              language="dart"
              title="Lazy Eager Loading"
            />
          </div>
        </div>

        <CodeBlock
          :code="constrainingEagerLoadsCode"
          language="dart"
          title="Constraining Eager Loads"
        />
      </section>

      <!-- Model Events Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Model Events
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Hook into model lifecycle events to perform additional actions.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="eventListenersCode"
              language="dart"
              title="Event Listeners"
            />
          </div>

          <div>
            <CodeBlock
              :code="observersCode"
              language="dart"
              title="Observers"
            />
          </div>
        </div>
      </section>

      <!-- Serialization Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Model Serialization
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Convert models to JSON and arrays for API responses.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <CodeBlock
              :code="basicSerializationCode"
              language="dart"
              title="Basic Serialization"
            />
          </div>

          <div>
            <CodeBlock
              :code="apiResourcesCode"
              language="dart"
              title="API Resources"
            />
          </div>
        </div>

        <CodeBlock
          :code="conditionalAttributesCode"
          language="dart"
          title="Conditional Attributes"
        />
      </section>

      <!-- Testing Section -->
      <!-- <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Testing Models
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Test your models and their relationships.
        </p>

        <CodeBlock
          :code="modelTestingCode"
          language="dart"
          title="Model Testing"
        />
      </section> -->
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })

useHead({
  title: 'Models & Relationships',
  meta: [
    { name: 'description', content: 'Comprehensive guide to creating models and defining relationships in Khadem Dart' }
  ]
})

// Basic Model Code Examples
const basicModelCode = `// app/models/User.dart
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
  ];

  @override
  List<String> get initialHidden => [
    'password',
    'remember_token',
  ];

  @override
  Map<String, Type> get casts => {
    'email_verified_at': DateTime,
    'is_active': bool,
    'settings': Map,
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
  Object? getField(String key) {
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

const modelUsageCode = `// Create a new user
final user = User();
user.name = 'John Doe';
user.email = 'john@example.com';
user.password = 'password'; // Note: Hashing should be done separately
await user.save();

// Find user by ID
final user = await User().query.where('id', '=', 1).first();

// Find by attributes
final user = await User().query.where('email', '=', 'john@example.com').first();

// Get all users
final users = await User().query.get();

// Get users with conditions
final activeUsers = await User().query.where('is_active', '=', true).get();

// Update user
user.name = 'Updated Name';
await user.save();

// Delete user
await user.delete();

// Refresh from database
await user.refresh();`

const queryScopesCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Local query methods
  QueryBuilderInterface<User> active() {
    return query.where('is_active', '=', true);
  }

  QueryBuilderInterface<User> verified() {
    return query.whereNotNull('email_verified_at');
  }

  QueryBuilderInterface<User> recent() {
    return query.where('created_at', '>', DateTime.now().subtract(Duration(days: 7)));
  }
}

// Usage
final activeUsers = await User().active().get();
final verifiedUsers = await User().verified().get();
final recentUsers = await User().recent().get();

// Combine scopes
final activeVerifiedUsers = await User().active().verified().get();

// Chain with other query methods
final recentActiveUsers = await User()
    .recent()
    .active()
    .orderBy('created_at', direction: 'desc')
    .limit(10)
    .get();`

// Model Attributes Code Examples
const modelAttributesCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // CRUD operations
  Future<void> updateProfile(Map<String, dynamic> data) async {
    fromJson(data);
    await save();
  }

  Future<void> deleteAccount() async {
    await delete();
  }

  // Check if model exists
  bool get exists => id != null;

  // Check if model was recently created
  bool get wasRecentlyCreated => createdAt != null &&
    createdAt!.difference(DateTime.now()).inMinutes < 1;

  // Get specific field value
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

  // Set specific field value
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
}`

const accessorsMutatorsCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Accessors
  String get fullName => '\${name?.split(' ').first ?? ''} \${name?.split(' ').last ?? ''}';

  String get avatarUrl => 'https://ui-avatars.com/api/?name=\${Uri.encodeComponent(name ?? '')}';

  bool get isAdmin => role == 'admin';

  // Mutators
  set fullName(String value) {
    name = value;
  }

  set password(String value) {
    // Note: Hashing should be done before setting
    this.password = value;
  }

  // Custom methods
  Future<bool> sendPasswordReset() async {
    // Send password reset email logic
    return true;
  }

  Future<List<Post>> getPublishedPosts() async {
    return await loadRelation('posts').then((_) {
      final posts = getRelation('posts') as List<Post>? ?? [];
      return posts.where((post) => post.published == true).toList();
    });
  }
}`

// Relationship Code Examples
const oneToOneCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'profile': hasOne<Profile>(
      foreignKey: 'user_id',
      relatedTable: 'profiles',
      factory: () => Profile(),
    ),
  };
}

// app/models/Profile.dart
class Profile extends KhademModel<Profile> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User(),
    ),
  };
}

// Usage
final user = await User().query.where('id', '=', 1).first();
await user.load('profile');
final profile = user.getRelation('profile');

// Reverse relationship
final profile = await Profile().query.where('id', '=', 1).first();
await profile.load('user');
final user = profile.getRelation('user');`

const oneToManyCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    ),
  };
}

// app/models/Post.dart
class Post extends KhademModel<Post> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User(),
    ),
  };
}

// Usage
final user = await User().query.where('id', '=', 1).first();
await user.load('posts');
final posts = user.getRelation('posts') as List<Post>;

// Get posts count
final postsCount = await user.query
    .where('user_id', '=', user.id)
    .count();

// Create post for user
final post = Post();
post.userId = user.id;
post.title = 'New Post';
post.content = 'Post content';
await post.save();

// Get user from post
final post = await Post().query.where('id', '=', 1).first();
await post.load('user');
final user = post.getRelation('user') as User;`

const manyToManyCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
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
}

// app/models/Role.dart
class Role extends KhademModel<Role> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'users': belongsToMany<User>(
      pivotTable: 'user_roles',
      foreignPivotKey: 'role_id',
      relatedPivotKey: 'user_id',
      relatedTable: 'users',
      localKey: 'id',
      factory: () => User(),
    ),
  };
}

// Usage
final user = await User().query.where('id', '=', 1).first();
await user.load('roles');
final roles = user.getRelation('roles') as List<Role>;

// Note: Attach/detach operations would need to be implemented
// as custom methods since the framework doesn't provide them directly`

const hasManyThroughCode = `// app/models/Country.dart
class Country extends Model {
  Collection<Post> posts() {
    return hasManyThrough(Post, User);
  }
}

// app/models/User.dart
class User extends Model {
  Country country() {
    return belongsTo<Country>(
      localKey: 'country_id',
      relatedTable: 'countries',
      factory: () => Country()
    );
  }

  Collection<Post> posts() {
    return hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post()
    );
  }
}

// app/models/Post.dart
class Post extends Model {
  User user() {
    return belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    );
  }
}

// Usage
final country = await Country.find(1);
final posts = await country.posts; // Posts through users`

const polymorphicCode = `// app/models/Post.dart
class Post extends KhademModel<Post> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'comments': morphMany<Comment>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: 'comments',
      factory: () => Comment(),
    ),
    'images': morphMany<Image>(
      morphTypeField: 'imageable_type',
      morphIdField: 'imageable_id',
      relatedTable: 'images',
      factory: () => Image(),
    ),
  };
}

// app/models/Comment.dart
class Comment extends KhademModel<Comment> with Timestamps, HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'commentable': morphTo<Comment>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: '', // Will be determined dynamically
      factory: () => Comment(), // This would need to be dynamic
    ),
  };
}

// Database migrations
// comments table
table.integer('commentable_id');
table.string('commentable_type'); // Post, Video, etc.

// Usage
final post = await Post().query.where('id', '=', 1).first();
await post.load('comments');
final comments = post.getRelation('comments') as List<Comment>;

// Note: morphTo implementation would need custom logic
// to determine the correct model type based on commentable_type`

// Eager Loading Code Examples
const basicEagerLoadingCode = `// Lazy loading (N+1 problem)
final users = await User().query.get();
for (final user in users) {
  await user.load('posts'); // N queries
}

// Eager loading (2 queries)
final users = await User().query.withRelations(['posts']).get();
for (final user in users) {
  final posts = user.getRelation('posts'); // Already loaded
}

// Multiple relationships
final users = await User().query.withRelations(['posts', 'profile']).get();

// Nested relationships
final users = await User().query.withRelations([
  'posts',
  // Note: Nested relations would need custom implementation
]).get();

// Conditional eager loading
final users = await User().query
    .withRelations(['posts'])
    .where('is_active', '=', true)
    .get();`

const lazyEagerLoadingCode = `// Load relationships after model retrieval
final user = await User().query.where('id', '=', 1).first();

// Load single relationship
await user.load('posts');

// Load multiple relationships
await user.load(['posts', 'profile']);

// Check if relationship is loaded
if (user.isRelationLoaded('posts')) {
  final posts = user.getRelation('posts');
}

// Load missing relationships only
await user.loadMissing(['posts', 'profile']);

// Load with constraints (would need custom implementation)
await user.load('posts');
// Then filter manually
final posts = user.getRelation('posts') as List<Post>;
final publishedPosts = posts.where((post) => post.published == true).toList();`

const constrainingEagerLoadsCode = `// Limit related records
final users = await User().query
    .withRelations(['posts'])
    .get();

// Then manually limit posts for each user
for (final user in users) {
  final posts = user.getRelation('posts') as List<Post>;
  final limitedPosts = posts.take(5).toList();
  user.setRelation('posts', limitedPosts);
}

// Order related records (would need custom query)
final users = await User().query
    .withRelations(['posts'])
    .get();

// Filter related records manually
for (final user in users) {
  final posts = user.getRelation('posts') as List<Post>;
  final publishedPosts = posts.where((post) => post.published == true).toList();
  user.setRelation('posts', publishedPosts);
}

// Count related records
final users = await User().query.get();
for (final user in users) {
  await user.load('posts');
  final postsCount = (user.getRelation('posts') as List).length;
  user.setAppended('posts_count', postsCount);
}

// Note: Advanced constraining would need custom query builder extensions`

// Model Events Code Examples
const eventListenersCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Note: Event system would need to be implemented
  // The current framework doesn't have built-in events like Laravel

  // You could implement custom event handling
  @override
  Future<void> save() async {
    // Custom pre-save logic
    if (password != null && password!.isNotEmpty) {
      // Hash password before saving
      password = 'hashed_' + password!;
    }

    touchUpdated();
    if (id == null) {
      touchCreated();
    }

    await super.save();

    // Custom post-save logic
    // Send welcome email, etc.
  }

  @override
  Future<void> delete() async {
    // Custom pre-delete logic
    // Delete related records, etc.

    await super.delete();

    // Custom post-delete logic
  }
}

// Available operations that can be overridden:
// - save() - called on both create and update
// - delete() - called on delete
// - refresh() - called when refreshing from database`

const observersCode = `// Note: Observer pattern is not built into the current Khadem framework
// You can implement a similar pattern manually

// app/observers/UserObserver.dart
class UserObserver {
  void beforeCreate(User user) {
    // Generate UUID or other pre-create logic
    print('Creating user: \${user.name}');
  }

  void afterCreate(User user) {
    // Send welcome email, etc.
    print('User created: \${user.name}');
  }

  void beforeUpdate(User user) {
    print('Updating user: \${user.name}');
  }

  void afterUpdate(User user) {
    print('User updated: \${user.name}');
  }

  void beforeDelete(User user) {
    print('Deleting user: \${user.name}');
  }

  void afterDelete(User user) {
    print('User deleted: \${user.name}');
  }
}

// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  UserObserver? observer;

  @override
  Future<void> save() async {
    if (observer != null) {
      if (id == null) {
        observer!.beforeCreate(this);
      } else {
        observer!.beforeUpdate(this);
      }
    }

    await super.save();

    if (observer != null) {
      if (id != null && createdAt == updatedAt) {
        observer!.afterCreate(this);
      } else {
        observer!.afterUpdate(this);
      }
    }
  }

  @override
  Future<void> delete() async {
    if (observer != null) {
      observer!.beforeDelete(this);
    }

    await super.delete();

    if (observer != null) {
      observer!.afterDelete(this);
    }
  }
}

// Usage
final user = User();
user.observer = UserObserver();
user.name = 'John Doe';
await user.save(); // Will trigger observer methods`

// Serialization Code Examples
const basicSerializationCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  @override
  List<String> get initialHidden => ['password'];

  @override
  Map<String, Type> get casts => {
    'created_at': DateTime,
    'is_active': bool,
  };

  // Custom toJson method
  @override
  Map<String, dynamic> toJson() {
    final json = super.toJson();

    // Add computed properties
    json['full_name'] = name;
    json['avatar_url'] = 'https://example.com/avatar/\${id}';
    json['is_admin'] = false; // Add custom logic

    return json;
  }
}

// Usage
final user = await User().query.where('id', '=', 1).first();
final json = user.toJson();

// Serialize collection
final users = await User().query.get();
final usersJson = users.map((user) => user.toJson()).toList();

// Get only specific attributes
final userData = user.only(['id', 'name', 'email']);

// Get all except specific attributes
final userData = user.except(['password', 'remember_token']);

// Make attributes visible/hidden dynamically
user.makeVisible(['phone']);
user.makeHidden(['created_at', 'updated_at']);`

const apiResourcesCode = `// app/resources/UserResource.dart
class UserResource {
  final User user;

  UserResource(this.user);

  Map<String, dynamic> toArray() {
    return {
      'id': user.id,
      'name': user.name,
      'email': user.email,
      'avatar_url': 'https://example.com/avatar/\${user.id}',
      'is_admin': false, // Add custom logic
      'created_at': user.createdAt,
      'updated_at': user.updatedAt,
      'posts_count': user.getAppended('posts_count') ?? 0,
      'profile': user.getRelation('profile') != null
          ? ProfileResource(user.getRelation('profile')).toArray()
          : null,
    };
  }

  static List<Map<String, dynamic>> collection(List<User> users) {
    return users.map((user) => UserResource(user).toArray()).toList();
  }
}

// Usage in controller
final users = await User().query.get();
for (final user in users) {
  await user.load('posts');
  user.setAppended('posts_count', (user.getRelation('posts') as List).length);
}
return UserResource.collection(users);`

const conditionalAttributesCode = `// app/resources/UserResource.dart
class UserResource {
  final User user;
  final bool isAdmin;

  UserResource(this.user, {this.isAdmin = false});

  Map<String, dynamic> toArray() {
    final result = {
      'id': user.id,
      'name': user.name,
      'email': user.email,
    };

    // Only include for admin users
    if (isAdmin) {
      result['email_verified_at'] = user.emailVerifiedAt;
      result['role'] = 'user'; // Add custom logic
      result['permissions'] = ['read']; // Add custom logic
    }

    // Only include if user owns the resource
    if (user.id == 1) { // Add ownership check logic
      result['phone'] = user.phone;
    }

    return result;
  }
}

// Helper methods
Map<String, dynamic> mergeWhen(bool condition, Map<String, dynamic> attributes) {
  return condition ? attributes : {};
}

// Usage
final user = await User().query.where('id', '=', 1).first();
final resource = UserResource(user, isAdmin: true);
final data = resource.toArray();`

// Model Testing Code Examples
const modelTestingCode = `// tests/unit/models/UserTest.dart
void main() {
  group('User Model', () {
    setUp(() async {
      // Set up test database
      // Note: Test database setup would depend on your testing framework
    });

    tearDown(() async {
      // Clean up test database
    });

    test('can create user', () async {
      final user = User();
      user.name = 'Test User';
      user.email = 'test@example.com';
      user.password = 'password';

      await user.save();
      expect(user.id, isNotNull);
      expect(user.name, 'Test User');
    });

    test('can find user by email', () async {
      final user = User();
      user.name = 'Test User';
      user.email = 'test@example.com';
      user.password = 'password';
      await user.save();

      final foundUser = await User().query
          .where('email', '=', 'test@example.com')
          .first();
      expect(foundUser, isNotNull);
      expect(foundUser!.email, 'test@example.com');
    });

    test('user has many posts relationship', () async {
      final user = User();
      user.name = 'Test User';
      user.email = 'test@example.com';
      user.password = 'password';
      await user.save();

      final post = Post();
      post.userId = user.id;
      post.title = 'Test Post';
      post.content = 'Test content';
      await post.save();

      await user.load('posts');
      final posts = user.getRelation('posts') as List<Post>;
      expect(posts.length, 1);
      expect(posts.first.title, 'Test Post');
    });

    test('validates required fields', () async {
      final user = User();

      // Note: Validation would need to be implemented separately
      // The framework doesn't have built-in validation
      expect(user.name, isNull);
    });

    test('serializes correctly', () async {
      final user = User();
      user.name = 'Test User';
      user.email = 'test@example.com';
      user.password = 'secret';

      final json = user.toJson();
      expect(json['name'], 'Test User');
      expect(json['email'], 'test@example.com');
      expect(json.containsKey('password'), false); // Should be hidden
    });
  });
}`
</script>
