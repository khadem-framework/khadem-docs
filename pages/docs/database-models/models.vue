<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Models & Relationships
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to create models and define relationships between them
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic Models -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Creating Models
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Models represent database tables and provide an easy way to interact with your data.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Model
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
import 'package:khadem/src/database/models/model.dart';

class User extends Model {
  @override
  String get table =&gt; 'users';

  // Fillable attributes
  @override
  List&lt;String&gt; get fillable =&gt; [
    'name',
    'email',
    'password',
  ];

  // Hidden attributes (not included in JSON)
  @override
  List&lt;String&gt; get hidden =&gt; [
    'password',
    'remember_token',
  ];

  // Cast attributes to specific types
  @override
  Map&lt;String, String&gt; get casts =&gt; {
    'email_verified_at': 'datetime',
    'is_active': 'boolean',
    'settings': 'json',
  };

  // Date attributes
  @override
  List&lt;String&gt; get dates =&gt; [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  // Accessors and Mutators
  String get fullName =&gt; '\${first_name} \${last_name}';

  set fullName(String value) {
    final parts = value.split(' ');
    first_name = parts[0];
    last_name = parts.length &gt; 1 ? parts[1] : '';
  }

  // Check if user is admin
  bool get isAdmin =&gt; role == 'admin';

  // Get user's avatar URL
  String get avatarUrl =&gt; avatar != null
      ? Storage.url(avatar)
      : 'https://ui-avatars.com/api/?name=\${Uri.encodeComponent(name)}';
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Model Usage
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Create a new user
final user = User();
user.name = 'John Doe';
user.email = 'john@example.com';
user.password = Hash.make('password');
await user.save();

// Create using mass assignment
final user = await User.create({
  'name': 'Jane Doe',
  'email': 'jane@example.com',
  'password': Hash.make('password'),
});

// Find user by ID
final user = await User.find(1);

// Find or fail (throws exception if not found)
final user = await User.findOrFail(1);

// Find by attributes
final user = await User.where('email', 'john@example.com').first();

// Get all users
final users = await User.all();

// Get users with conditions
final activeUsers = await User.where('is_active', true).get();

// Update user
user.name = 'John Smith';
await user.save();

// Update using mass assignment
await user.update({
  'name': 'John Smith',
  'updated_at': DateTime.now(),
});

// Delete user
await user.delete();

// Soft delete (if using soft deletes)
await user.delete(); // Sets deleted_at

// Force delete
await user.forceDelete();

// Restore soft deleted
await user.restore();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Query Scopes
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  // Global scope
  @override
  void applyGlobalScopes() {
    query.whereNull('deleted_at');
  }

  // Local scopes
  QueryBuilder scopeActive(QueryBuilder query) {
    return query.where('is_active', true);
  }

  QueryBuilder scopeVerified(QueryBuilder query) {
    return query.whereNotNull('email_verified_at');
  }

  QueryBuilder scopeRecent(QueryBuilder query) {
    return query.where('created_at', '&gt;', DateTime.now().subtract(Duration(days: 7)));
  }
}

// Usage
final activeUsers = await User.active().get();
final verifiedUsers = await User.verified().get();
final recentUsers = await User.recent().get();

// Combine scopes
final activeVerifiedUsers = await User.active().verified().get();</code></pre>
            </div>
          </div>

          <!-- Relationships -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Model Relationships
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Define relationships between your models to easily access related data.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                One to One
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  Profile profile() {
    return hasOne(Profile);
  }
}

// app/models/Profile.dart
class Profile extends Model {
  User user() {
    return belongsTo(User);
  }
}

// Usage
final user = await User.find(1);
final profile = await user.profile;

// Or with eager loading
final user = await User.with('profile').find(1);
final profile = user.profile;

// Reverse relationship
final profile = await Profile.find(1);
final user = await profile.user;</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                One to Many
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  Collection&lt;Post&gt; posts() {
    return hasMany(Post);
  }
}

// app/models/Post.dart
class Post extends Model {
  User user() {
    return belongsTo(User);
  }
}

// Usage
final user = await User.find(1);
final posts = await user.posts;

// Get posts count
final postsCount = await user.posts().count();

// Create post for user
final post = await user.posts().create({
  'title': 'New Post',
  'content': 'Post content',
});

// Get user from post
final post = await Post.find(1);
final user = await post.user;</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Many to Many
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  Collection&lt;Role&gt; roles() {
    return belongsToMany(Role);
  }
}

// app/models/Role.dart
class Role extends Model {
  Collection&lt;User&gt; users() {
    return belongsToMany(User);
  }
}

// Usage
final user = await User.find(1);
final roles = await user.roles;

// Attach role to user
await user.roles().attach(1); // Role ID
await user.roles().attach([1, 2, 3]); // Multiple roles

// Attach with pivot data
await user.roles().attach({
  1: {'expires_at': DateTime.now().add(Duration(days: 30))},
  2: {'expires_at': null},
});

// Detach role
await user.roles().detach(1);
await user.roles().detach(); // Detach all

// Sync roles (removes old, adds new)
await user.roles().sync([1, 2, 3]);

// Check if user has role
final hasRole = await user.roles().where('name', 'admin').exists();

// Get users with specific role
final admins = await Role.where('name', 'admin').first().users;</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Has Many Through
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/Country.dart
class Country extends Model {
  Collection&lt;Post&gt; posts() {
    return hasManyThrough(Post, User);
  }
}

// app/models/User.dart
class User extends Model {
  Country country() {
    return belongsTo(Country);
  }

  Collection&lt;Post&gt; posts() {
    return hasMany(Post);
  }
}

// app/models/Post.dart
class Post extends Model {
  User user() {
    return belongsTo(User);
  }
}

// Usage
final country = await Country.find(1);
final posts = await country.posts; // Posts through users</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Polymorphic Relationships
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/Post.dart
class Post extends Model {
  Collection&lt;Comment&gt; comments() {
    return morphMany(Comment, 'commentable');
  }

  Collection&lt;Image&gt; images() {
    return morphMany(Image, 'imageable');
  }
}

// app/models/Video.dart
class Video extends Model {
  Collection&lt;Comment&gt; comments() {
    return morphMany(Comment, 'commentable');
  }

  Collection&lt;Image&gt; images() {
    return morphMany(Image, 'imageable');
  }
}

// app/models/Comment.dart
class Comment extends Model {
  Model commentable() {
    return morphTo('commentable');
  }
}

// app/models/Image.dart
class Image extends Model {
  Model imageable() {
    return morphTo('imageable');
  }
}

// Database migrations
// comments table
table.integer('commentable_id');
table.string('commentable_type'); // App\Models\Post or App\Models\Video

// images table
table.integer('imageable_id');
table.string('imageable_type');

// Usage
final post = await Post.find(1);
final comments = await post.comments;
final images = await post.images;

// Get the parent model
final comment = await Comment.find(1);
final parent = await comment.commentable; // Could be Post or Video</code></pre>
            </div>
          </div>

          <!-- Eager Loading -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Eager Loading
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Load relationships efficiently to avoid N+1 query problems.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Eager Loading
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Lazy loading (N+1 problem)
final users = await User.all();
for (final user in users) {
  final posts = await user.posts; // Executes N queries
}

// Eager loading (2 queries total)
final users = await User.with('posts').get();
for (final user in users) {
  final posts = user.posts; // Already loaded
}

// Multiple relationships
final users = await User.with(['posts', 'profile']).get();

// Nested relationships
final users = await User.with([
  'posts',
  'posts.comments',
  'posts.comments.user'
]).get();

// Conditional eager loading
final users = await User.with([
  'posts' =&gt; (query) =&gt; query.where('published', true),
  'profile'
]).get();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Lazy Eager Loading
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Load relationships after the model is retrieved
final user = await User.find(1);

// Load single relationship
await user.load('posts');

// Load multiple relationships
await user.load(['posts', 'profile']);

// Load with conditions
await user.load([
  'posts' =&gt; (query) =&gt; query.where('published', true).limit(5),
]);

// Check if relationship is loaded
if (user.postsLoaded) {
  // Relationship is loaded
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Constraining Eager Loads
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Limit related records
final users = await User.with([
  'posts' =&gt; (query) =&gt; query.limit(5),
]).get();

// Order related records
final users = await User.with([
  'posts' =&gt; (query) =&gt; query.orderBy('created_at', 'desc'),
]).get();

// Filter related records
final users = await User.with([
  'posts' =&gt; (query) =&gt; query.where('published', true),
]).get();

// Count related records
final users = await User.withCount('posts').get();
for (final user in users) {
  print('\${user.name} has \${user.posts_count} posts');
}

// Count with conditions
final users = await User.withCount([
  'posts',
  'posts as published_posts_count' =&gt; (query) =&gt; query.where('published', true),
]).get();</code></pre>
            </div>
          </div>

          <!-- Model Events -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Model Events
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Hook into model lifecycle events to perform additional actions.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Event Listeners
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  @override
  void boot() {
    // Register event listeners
    onCreating((user) {
      user.uuid = Uuid().v4();
    });

    onCreated((user) {
      // Send welcome email
      Queue.dispatch(SendWelcomeEmail(user));
    });

    onUpdating((user) {
      user.updated_at = DateTime.now();
    });

    onSaving((user) {
      // Hash password if changed
      if (user.isDirty('password')) {
        user.password = Hash.make(user.password);
      }
    });

    onDeleting((user) {
      // Soft delete related records
      await user.posts().update({'deleted_at': DateTime.now()});
    });
  }
}

// Available events:
// - creating, created
// - updating, updated
// - saving, saved
// - deleting, deleted
// - restoring, restored</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Observers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/observers/UserObserver.dart
import 'package:khadem/src/database/models/observer.dart';

class UserObserver extends Observer {
  @override
  void creating(User user) {
    user.uuid = Uuid().v4();
  }

  @override
  void created(User user) {
    Queue.dispatch(SendWelcomeEmail(user));
  }

  @override
  void updating(User user) {
    user.updated_at = DateTime.now();
  }

  @override
  void saving(User user) {
    if (user.isDirty('password')) {
      user.password = Hash.make(user.password);
    }
  }

  @override
  void deleting(User user) {
    // Clean up related data
    await user.posts().delete();
    await Storage.delete(user.avatar);
  }
}

// Register observer
// app/providers/AppServiceProvider.dart
class AppServiceProvider extends ServiceProvider {
  @override
  void boot() {
    User.observe(UserObserver());
  }
}</code></pre>
            </div>
          </div>

          <!-- Model Serialization -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Model Serialization
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Convert models to JSON and arrays for API responses.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Serialization
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/User.dart
class User extends Model {
  @override
  List&lt;String&gt; get hidden =&gt; ['password', 'remember_token'];

  @override
  Map&lt;String, String&gt; get casts =&gt; {
    'created_at': 'datetime',
    'is_active': 'boolean',
  };

  // Custom accessor for JSON
  Map&lt;String, dynamic&gt; toJson() {
    final json = super.toJson();

    // Add computed properties
    json['full_name'] = fullName;
    json['avatar_url'] = avatarUrl;
    json['is_admin'] = isAdmin;

    // Remove sensitive data
    json.remove('password');

    return json;
  }
}

// Usage
final user = await User.find(1);
final json = user.toJson();
final jsonString = jsonEncode(json);

// Serialize collection
final users = await User.all();
final usersJson = users.toJson();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                API Resources
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/resources/UserResource.dart
import 'package:khadem/src/http/resources/resource.dart';

class UserResource extends Resource {
  @override
  Map&lt;String, dynamic&gt; toArray(request) {
    final user = resource;

    return {
      'id': user.id,
      'name': user.name,
      'email': user.email,
      'avatar_url': user.avatarUrl,
      'is_admin': user.isAdmin,
      'created_at': user.created_at,
      'updated_at': user.updated_at,
      'posts_count': user.posts_count ?? 0,
      'profile': user.profile != null ? UserProfileResource(user.profile) : null,
    };
  }
}

// app/http/resources/UserProfileResource.dart
class UserProfileResource extends Resource {
  @override
  Map&lt;String, dynamic&gt; toArray(request) {
    final profile = resource;

    return {
      'bio': profile.bio,
      'website': profile.website,
      'location': profile.location,
    };
  }
}

// Usage in controller
final users = await User.with(['profile']).withCount('posts').get();
return response.json(UserResource.collection(users));</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Conditional Attributes
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/resources/UserResource.dart
class UserResource extends Resource {
  @override
  Map&lt;String, dynamic&gt; toArray(request) {
    final user = resource;

    return {
      'id': user.id,
      'name': user.name,
      'email': user.email,
      // Only include for admin users
      'email_verified_at': when(user.isAdmin, user.email_verified_at),
      // Only include if user owns the resource
      'phone': when(request.user().id == user.id, user.phone),
      // Merge conditional attributes
      ...mergeWhen(user.isAdmin, {
        'role': user.role,
        'permissions': user.permissions,
      }),
    };
  }
}

// Helper methods
Map&lt;String, dynamic&gt; when(bool condition, dynamic value) {
  return condition ? {'value': value} : {};
}

Map&lt;String, dynamic&gt; mergeWhen(bool condition, Map&lt;String, dynamic&gt; attributes) {
  return condition ? attributes : {};
}</code></pre>
            </div>
          </div>

          <!-- Model Testing -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing Models
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your models and their relationships.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// tests/unit/models/UserTest.dart
import 'package:test/test.dart';
import 'package:khadem/src/database/models/model.dart';
import '../../app/models/User.dart';
import '../../app/models/Post.dart';

void main() {
  group('User Model', () {
    setUp(() async {
      // Set up database
      await TestMigrations.run();
    });

    tearDown(() async {
      await TestMigrations.rollback();
    });

    test('can create user', () async {
      final user = User();
      user.name = 'Test User';
      user.email = 'test@example.com';
      user.password = 'password';

      final saved = await user.save();

      expect(saved, true);
      expect(user.id, isNotNull);
    });

    test('can find user by email', () async {
      await User.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      final user = await User.where('email', 'test@example.com').first();

      expect(user, isNotNull);
      expect(user.email, 'test@example.com');
    });

    test('user has many posts relationship', () async {
      final user = await User.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      await Post.create({
        'user_id': user.id,
        'title': 'Test Post',
        'content': 'Test content',
      });

      final posts = await user.posts;

      expect(posts.length, 1);
      expect(posts.first.title, 'Test Post');
    });

    test('can update user', () async {
      final user = await User.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      user.name = 'Updated Name';
      await user.save();

      final updatedUser = await User.find(user.id);
      expect(updatedUser.name, 'Updated Name');
    });

    test('can delete user', () async {
      final user = await User.create({
        'name': 'Test User',
        'email': 'test@example.com',
        'password': 'password',
      });

      await user.delete();

      final deletedUser = await User.find(user.id);
      expect(deletedUser, isNull);
    });

    test('validates required fields', () async {
      final user = User();

      expect(
        () async =&gt; await user.save(),
        throwsA(isA&lt;ValidationException&gt;())
      );
    });
  });
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
