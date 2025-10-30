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

      <!-- Mass Assignment Protection Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Mass Assignment Protection
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Control which attributes can be mass-assigned to protect against security vulnerabilities.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="fillableGuardedCode"
              language="dart"
              title="Fillable & Guarded"
            />
          </div>

          <div>
            <CodeBlock
              :code="protectedAttributesCode"
              language="dart"
              title="Protected Attributes"
            />
          </div>
        </div>
      </section>

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

            <!-- Computed Properties & Appends Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Computed Properties & Appends
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Define computed properties and automatically append them to JSON output.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="computedPropertiesCode"
              language="dart"
              title="Computed Properties"
            />
          </div>

          <div>
            <CodeBlock
              :code="appendsCode"
              language="dart"
              title="Appends"
            />
          </div>
        </div>
      </section>

      <!-- Default Relations Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Default Relations & Counts
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Automatically load relationships and counts when retrieving models.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="defaultRelationsCode"
              language="dart"
              title="Default Relations"
            />
          </div>

          <div>
            <CodeBlock
              :code="withCountsCode"
              language="dart"
              title="Relation Counts"
            />
          </div>
        </div>
      </section>

      <!-- Model Relationships Section -->
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

      <!-- Attribute Casting Section -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Attribute Casting
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Automatically cast attributes to specific types when retrieving from database.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <CodeBlock
              :code="basicCastingCode"
              language="dart"
              title="Basic Casting (Legacy)"
            />
          </div>

          <div>
            <CodeBlock
              :code="attributeCasterCode"
              language="dart"
              title="AttributeCaster (New)"
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

// Mass Assignment Protection Code Examples
const fillableGuardedCode = `// app/models/User.dart
import 'package:khadem/khadem.dart';

class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Fillable - whitelist approach (recommended)
  @override
  List<String> get fillable => [
    'name',
    'email',
    'password',
    'phone',
    'avatar',
  ];

  // Alternative: Guarded - blacklist approach
  // Use this when you want to allow most attributes
  @override
  List<String> get guarded => [
    'id',
    'is_admin',
    'remember_token',
    'email_verified_at',
  ];

  // Usage with mass assignment
  Future<User> createUser(Map<String, dynamic> data) async {
    final user = User();
    user.fromJson(data); // Only fillable attributes will be set
    await user.save();
    return user;
  }
}

// Example usage
final userData = {
  'name': 'John Doe',
  'email': 'john@example.com',
  'password': 'hashed_password',
  'is_admin': true, // Will be ignored if in guarded list
};

final user = User();
user.fromJson(userData);
await user.save(); // is_admin won't be set due to guarded`

const protectedAttributesCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Protected - never allow mass assignment (highest security)
  @override
  List<String> get protected => [
    'id',              // Primary key should always be protected
    'remember_token',  // Security tokens
    'password_reset_token',
  ];

  // Hidden - exclude from JSON output
  @override
  List<String> get initialHidden => [
    'password',
    'remember_token',
    'password_reset_token',
  ];

  // Fillable - allow these for mass assignment
  @override
  List<String> get fillable => [
    'name',
    'email',
    'phone',
  ];

  // Manual assignment for protected attributes
  void setAdminStatus(bool isAdmin) {
    // Protected attribute, can only be set programmatically
    setField('is_admin', isAdmin);
  }

  void setRememberToken(String token) {
    // Protected attribute
    setField('remember_token', token);
  }
}

// Usage
final user = User();
user.fromJson({
  'name': 'John',
  'id': 999,  // Will be ignored (protected)
  'remember_token': 'hack',  // Will be ignored (protected)
});
await user.save();

// Set protected attributes manually
user.setAdminStatus(true);
user.setRememberToken('new_token');
await user.save();`

// Computed Properties Code Examples
const computedPropertiesCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  String? firstName;
  String? lastName;
  String? email;

  // Computed properties (getters)
  String get fullName => '\${firstName ?? ''} \${lastName ?? ''}'.trim();

  String get initials {
    final first = firstName?.isNotEmpty == true ? firstName![0] : '';
    final last = lastName?.isNotEmpty == true ? lastName![0] : '';
    return '\$first\$last'.toUpperCase();
  }

  String get avatarUrl => 
    'https://ui-avatars.com/api/?name=\${Uri.encodeComponent(fullName)}';

  bool get isVerified => getAttribute('email_verified_at') != null;

  int get age {
    final birthDate = getAttribute('birth_date') as DateTime?;
    if (birthDate == null) return 0;
    return DateTime.now().difference(birthDate).inDays ~/ 365;
  }

  // Computed from relations
  int get postsCount {
    if (!isRelationLoaded('posts')) return 0;
    return (getRelation('posts') as List?)?.length ?? 0;
  }

  // Override getField to include computed properties
  @override
  Object? getField(String key) {
    return switch (key) {
      'full_name' => fullName,
      'initials' => initials,
      'avatar_url' => avatarUrl,
      'is_verified' => isVerified,
      'age' => age,
      'posts_count' => postsCount,
      _ => super.getField(key)
    };
  }
}

// Usage
final user = await User().query.where('id', '=', 1).first();
print(user.fullName);  // John Doe
print(user.initials);  // JD
print(user.avatarUrl); // https://ui-avatars.com/api/?name=John%20Doe`

const appendsCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Define which computed properties to append to JSON
  @override
  List<String> get appends => [
    'full_name',
    'initials',
    'avatar_url',
    'is_verified',
  ];

  String get fullName => '\${firstName ?? ''} \${lastName ?? ''}'.trim();
  String get initials => /* ... */;
  String get avatarUrl => /* ... */;
  bool get isVerified => getAttribute('email_verified_at') != null;

  // Override toJson to include appended attributes
  @override
  Map<String, dynamic> toJson() {
    final json = super.toJson();
    
    // Add appended attributes
    for (final attr in appends) {
      json[attr] = getField(attr);
    }
    
    return json;
  }

  // Dynamically append attributes
  void appendAttribute(String attribute) {
    setAppended(attribute, getField(attribute));
  }
}

// Usage
final user = await User().query.where('id', '=', 1).first();
final json = user.toJson();
// {
//   "id": 1,
//   "first_name": "John",
//   "last_name": "Doe",
//   "email": "john@example.com",
//   "full_name": "John Doe",  // Appended
//   "initials": "JD",         // Appended
//   "avatar_url": "https://...", // Appended
//   "is_verified": true       // Appended
// }

// Dynamically append for single instance
user.appendAttribute('posts_count');
await user.load('posts');
user.setAppended('posts_count', user.postsCount);`

// Default Relations Code Examples
const defaultRelationsCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Auto-load these relations when retrieving models
  @override
  List<String> get defaultRelations => [
    'profile',
    'roles',
  ];

  @override
  Map<String, RelationDefinition> get relations => {
    'profile': hasOne<Profile>(
      foreignKey: 'user_id',
      relatedTable: 'profiles',
      factory: () => Profile(),
    ),
    'roles': belongsToMany<Role>(
      pivotTable: 'user_roles',
      foreignPivotKey: 'user_id',
      relatedPivotKey: 'role_id',
      relatedTable: 'roles',
      localKey: 'id',
      factory: () => Role(),
    ),
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    ),
  };
}

// Usage - defaultRelations are automatically loaded
final user = await User().query.where('id', '=', 1).first();
// profile and roles are already loaded
final profile = user.getRelation('profile');
final roles = user.getRelation('roles');

// Exclude default relations
final user = await User()
    .query
    .without(['profile'])  // Don't load profile
    .where('id', '=', 1)
    .first();

// Load only specific relations (ignores defaults)
final user = await User()
    .query
    .withOnly(['posts'])  // Only load posts, ignore defaults
    .where('id', '=', 1)
    .first();`

const withCountsCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Auto-include these relation counts
  @override
  List<String> get withCounts => [
    'posts',
    'comments',
  ];

  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post(),
    ),
    'comments': hasMany<Comment>(
      foreignKey: 'user_id',
      relatedTable: 'comments',
      factory: () => Comment(),
    ),
  };

  // Access counts
  int get postsCount => getAppended('posts_count') as int? ?? 0;
  int get commentsCount => getAppended('comments_count') as int? ?? 0;
}

// Usage - counts are automatically loaded
final user = await User().query.where('id', '=', 1).first();
print('Posts: \${user.postsCount}');
print('Comments: \${user.commentsCount}');

// Manual count loading
final user = await User().query.where('id', '=', 1).first();
await user.load('posts');
final postsCount = (user.getRelation('posts') as List).length;
user.setAppended('posts_count', postsCount);

// Include in JSON
final json = user.toJson();
// {
//   "id": 1,
//   "name": "John",
//   "posts_count": 5,     // Auto-included
//   "comments_count": 12  // Auto-included
// }`

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

// Attribute Casting Code Examples
const basicCastingCode = `// app/models/User.dart
import 'package:khadem/khadem.dart';

class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Legacy casting using casts map
  @override
  Map<String, Type> get casts => {
    'email_verified_at': DateTime,
    'is_active': bool,
    'is_admin': bool,
    'settings': Map,
    'preferences': Map,
    'metadata': Map,
    'age': int,
    'score': double,
  };

  // Attributes will be automatically cast when retrieved
  bool? isActive;
  bool? isAdmin;
  DateTime? emailVerifiedAt;
  Map<String, dynamic>? settings;
  Map<String, dynamic>? preferences;
  int? age;
  double? score;

  @override
  Object? getField(String key) {
    return switch (key) {
      'is_active' => isActive,
      'is_admin' => isAdmin,
      'email_verified_at' => emailVerifiedAt,
      'settings' => settings,
      'preferences' => preferences,
      'age' => age,
      'score' => score,
      _ => super.getField(key)
    };
  }

  @override
  void setField(String key, dynamic value) {
    switch (key) {
      case 'is_active':
        isActive = value is bool ? value : (value == 1 || value == '1' || value == 'true');
      case 'is_admin':
        isAdmin = value is bool ? value : (value == 1 || value == '1' || value == 'true');
      case 'email_verified_at':
        emailVerifiedAt = value is DateTime ? value : DateTime.tryParse(value?.toString() ?? '');
      case 'settings':
        settings = value is Map<String, dynamic> ? value : {};
      case 'preferences':
        preferences = value is Map<String, dynamic> ? value : {};
      case 'age':
        age = value is int ? value : int.tryParse(value?.toString() ?? '');
      case 'score':
        score = value is double ? value : double.tryParse(value?.toString() ?? '');
      default:
        super.setField(key, value);
    }
  }
}

// Usage
final user = await User().query.where('id', '=', 1).first();
print(user.isActive);  // bool (not int or string)
print(user.emailVerifiedAt);  // DateTime (not string)
print(user.settings);  // Map<String, dynamic> (not string)`

const attributeCasterCode = `// app/casters/JsonCaster.dart
import 'package:khadem/khadem.dart';
import 'dart:convert';

class JsonCaster extends AttributeCaster {
  @override
  dynamic get(String key, dynamic value) {
    if (value == null) return null;
    if (value is String) {
      try {
        return jsonDecode(value);
      } catch (e) {
        return null;
      }
    }
    return value;
  }

  @override
  dynamic set(String key, dynamic value) {
    if (value == null) return null;
    if (value is Map || value is List) {
      return jsonEncode(value);
    }
    return value;
  }
}

// app/casters/EncryptedCaster.dart
class EncryptedCaster extends AttributeCaster {
  final String encryptionKey;

  EncryptedCaster(this.encryptionKey);

  @override
  dynamic get(String key, dynamic value) {
    if (value == null) return null;
    // Implement decryption logic
    return decrypt(value.toString(), encryptionKey);
  }

  @override
  dynamic set(String key, dynamic value) {
    if (value == null) return null;
    // Implement encryption logic
    return encrypt(value.toString(), encryptionKey);
  }

  String encrypt(String value, String key) {
    // Your encryption implementation
    return value; // Placeholder
  }

  String decrypt(String value, String key) {
    // Your decryption implementation
    return value; // Placeholder
  }
}

// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  // Use AttributeCaster for custom casting
  @override
  Map<String, AttributeCaster> get attributeCasters => {
    'settings': JsonCaster(),
    'metadata': JsonCaster(),
    'secret_data': EncryptedCaster('my-secret-key'),
  };

  Map<String, dynamic>? settings;
  Map<String, dynamic>? metadata;
  String? secretData;
}

// Usage
final user = await User().query.where('id', '=', 1).first();
// settings are automatically decoded from JSON string
user.settings = {'theme': 'dark', 'notifications': true};
await user.save(); // Automatically encoded to JSON string

// secretData is automatically encrypted/decrypted
user.secretData = 'sensitive information';
await user.save(); // Stored encrypted in database`

// Serialization Code Examples
const basicSerializationCode = `// app/models/User.dart
class User extends KhademModel<User> with Timestamps, HasRelationships {
  @override
  List<String> get initialHidden => ['password', 'remember_token'];

  @override
  Map<String, Type> get casts => {
    'created_at': DateTime,
    'is_active': bool,
  };

  // Synchronous toJson() - for simple serialization
  @override
  Map<String, dynamic> toJson() {
    final json = super.toJson();

    // Add computed properties
    json['full_name'] = '\${firstName ?? ''} \${lastName ?? ''}'.trim();
    json['avatar_url'] = 'https://example.com/avatar/\${id}';
    json['is_admin'] = false; // Add custom logic

    return json;
  }

  // Asynchronous toJsonAsync() - for loading relations
  @override
  Future<Map<String, dynamic>> toJsonAsync() async {
    // Load relations before serializing
    await loadMissing(['profile', 'roles']);
    
    final json = super.toJson();

    // Add computed properties
    json['full_name'] = '\${firstName ?? ''} \${lastName ?? ''}'.trim();
    json['avatar_url'] = 'https://example.com/avatar/\${id}';
    
    // Add loaded relations
    if (isRelationLoaded('profile')) {
      final profile = getRelation('profile') as Profile?;
      json['profile'] = profile?.toJson();
    }
    
    if (isRelationLoaded('roles')) {
      final roles = getRelation('roles') as List<Role>? ?? [];
      json['roles'] = roles.map((role) => role.toJson()).toList();
    }

    return json;
  }
}

// Usage
final user = await User().query.where('id', '=', 1).first();

// Simple JSON (no relations)
final json = user.toJson();

// JSON with relations (async)
final jsonWithRelations = await user.toJsonAsync();

// Serialize collection
final users = await User().query.get();
final usersJson = users.map((user) => user.toJson()).toList();

// Async collection serialization
final asyncUsersJson = await Future.wait(
  users.map((user) => user.toJsonAsync())
);

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
