<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Relationships</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Khadem's powerful relationship system enables you to express complex database relationships
        with elegant code. From simple one-to-one connections to complex polymorphic
        relationships, Khadem makes working with related data intuitive and efficient.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">Type Safety</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Full type safety with generic relationships</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Performance</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Efficient eager loading and query optimization</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Flexibility</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Support for all relationship types and constraints</p>
        </div>
      </div>
    </header>

    <!-- One-to-One -->
    <DocSection title="hasOne - One-to-One Relationships">
      <template #description>
        Perfect for relationships where one record is associated with exactly one other record.
        Common examples: User → Profile, Company → Address, Person → Passport.
      </template>
      <CodeBlock :code="hasOneCode" language="dart" title="User Profile Relationship" />
      <CodeBlock :code="hasOneUsage" language="dart" title="Usage Examples" />
    </DocSection>

    <!-- One-to-Many -->
    <DocSection title="hasMany - One-to-Many Relationships">
      <template #description>
        Ideal for relationships where one record can have multiple associated records.
        Perfect for: User → Posts, Category → Products, Author → Books.
      </template>
      <CodeBlock :code="hasManyCode" language="dart" title="Blog System Relationships" />
      <CodeBlock :code="hasManyUsage" language="dart" title="Advanced Usage Patterns" />
    </DocSection>

    <!-- Belongs To -->
    <DocSection title="belongsTo - Inverse Relationships">
      <template #description>
        The inverse of hasOne/hasMany relationships. Essential for accessing parent records
        from child records. Perfect for: Post → User, Order → Customer, Comment → Author.
      </template>
      <CodeBlock :code="belongsToCode" language="dart" title="Complete Blog System" />
      <CodeBlock :code="belongsToUsage" language="dart" title="Practical Usage" />
    </DocSection>

    <!-- Belongs to Many -->
    <DocSection title="belongsToMany - Many-to-Many Relationships">
      <template #description>
        Handle complex many-to-many relationships using pivot tables. Perfect for:
        User ↔ Roles, Product ↔ Categories, Student ↔ Courses.
      </template>
      <CodeBlock :code="belongsToManyCode" language="dart" title="User-Role System" />
      <CodeBlock :code="belongsToManyUsage" language="dart" title="Advanced Many-to-Many Patterns" />
    </DocSection>

    <!-- Polymorphic -->
    <DocSection title="Polymorphic Relationships - Ultimate Flexibility">
      <template #description>
        Polymorphic relationships allow a model to belong to more than one other model using a single association.
        Perfect for: Comments on Posts/Articles, Images on Users/Products, Likes on any content.
      </template>
      <CodeBlock :code="polymorphicCode" language="dart" title="Content Management System" />
      <CodeBlock :code="polymorphicUsage" language="dart" title="Powerful Polymorphic Patterns" />
    </DocSection>

    <!-- morphTo -->
    <DocSection title="morphTo">
      <template #description>
        The inverse of a morphOne/morphMany. Used on the polymorphic model itself.
      </template>
      <CodeBlock :code="morphToCode" language="dart" title="morphTo Example" />
    </DocSection>

    <!-- Loading Relations -->
    <DocSection title="Loading Relationships">
      <template #description>
        Use <code>withRelations()</code> to eagerly load defined relationships in your queries.
      </template>
      <CodeBlock :code="loadingRelationsCode" language="dart" title="Eager Loading" />
    </DocSection>

    <!-- Advanced Loading Relations -->
    <DocSection title="Advanced Relationship Loading - The Real Power">
      <template #description>
        Khadem's relationship loading system provides incredible flexibility and performance.
        Load exactly what you need, when you need it, with powerful constraints and optimizations.
      </template>
      <CodeBlock :code="advancedLoadingCode" language="dart" title="Advanced Loading Patterns" />
      <CodeBlock :code="performanceCode" language="dart" title="Performance Optimization" />
    </DocSection>

    <!-- Pagination with Relations -->
    <DocSection title="Pagination with Relationships">
      <template #description>
        Paginate related data efficiently with built-in support for both object and string formats.
      </template>
      <CodeBlock :code="paginationCode" language="dart" title="Object Format Pagination" />
      <CodeBlock :code="paginationStringCode" language="dart" title="String Format Pagination" />
    </DocSection>

    <!-- Real World Examples -->
    <DocSection title="Real-World Relationship Scenarios">
      <template #description>
        See how Khadem's relationships shine in complex, real-world applications.
      </template>
      <CodeBlock :code="realWorldCode" language="dart" title="E-commerce Platform" />
      <CodeBlock :code="socialMediaCode" language="dart" title="Social Media Platform" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Relationships',
  meta: [{ name: 'description', content: 'Relationship definitions and usage in Khadem ORM' }]
});

const hasOneCode = `
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'profile': hasOne<Profile>(
      foreignKey: 'user_id',
      relatedTable: 'profiles',
      factory: () => Profile()
    ),
    'settings': hasOne<UserSettings>(
      foreignKey: 'user_id',
      relatedTable: 'user_settings',
      factory: () => UserSettings()
    )
  };
}

class Profile extends KhademModel<Profile> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    )
  };
}
`;

const hasOneUsage = `
// Eager load profile with user
final user = await User().query
  .withRelations(['profile'])
  .where('id', '=', 1)
  .first();

// Access the relationship
final profile = user?.relation.get('profile') as Profile?;
print('Bio: \${profile?.bio}');

// Lazy load if needed
await user.load('settings');
final settings = user.relation.get('settings') as UserSettings?;

// Check if relationship exists
if (user.isRelationLoaded('profile')) {
  // Profile is already loaded
}

// Create related model
final newProfile = Profile();
newProfile.userId = user.id;
newProfile.bio = 'Software Developer';
await newProfile.save();
`;

const hasManyCode = `
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'posts': hasMany<Post>(
      foreignKey: 'user_id',
      relatedTable: 'posts',
      factory: () => Post()
    ),
    'comments': hasMany<Comment>(
      foreignKey: 'user_id',
      relatedTable: 'comments',
      factory: () => Comment()
    ),
    'orders': hasMany<Order>(
      foreignKey: 'customer_id',
      relatedTable: 'orders',
      factory: () => Order()
    )
  };
}

class Category extends KhademModel<Category> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'products': hasMany<Product>(
      foreignKey: 'category_id',
      relatedTable: 'products',
      factory: () => Product()
    ),
    'subcategories': hasMany<Category>(
      foreignKey: 'parent_id',
      relatedTable: 'categories',
      factory: () => Category()
    )
  };
}
`;

const hasManyUsage = `
// Load user with all their posts
final user = await User().query
  .withRelations(['posts'])
  .where('id', '=', 1)
  .first();

final posts = user?.relation.get('posts') as List<Post>?;

// Get published posts only
final publishedPosts = posts?.where((post) => post.published == true);

// Load with constraints
final userWithRecentPosts = await User().query
  .withRelations(['posts' => (query) => query
    .where('published', '=', true)
    .orderBy('created_at', direction: 'desc')
    .limit(5)
  ])
  .find(1);

// Count relationships
final postCount = await User().query
  .where('id', '=', 1)
  .withRelations(['posts'])
  .then((user) => (user.relation.get('posts') as List).length);

// Create related records
final newPost = Post();
newPost.userId = user.id;
newPost.title = 'New Article';
newPost.content = 'Article content...';
await newPost.save();

// Get user's latest order
final latestOrder = await user.relation.get('orders') as List<Order>;
latestOrder.sort((a, b) => b.createdAt.compareTo(a.createdAt));
final mostRecentOrder = latestOrder.first;
`;

const belongsToCode = `
class Post extends KhademModel<Post> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'author': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    ),
    'category': belongsTo<Category>(
      localKey: 'category_id',
      relatedTable: 'categories',
      factory: () => Category()
    )
  };
}

class Comment extends KhademModel<Comment> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    ),
    'post': belongsTo<Post>(
      localKey: 'post_id',
      relatedTable: 'posts',
      factory: () => Post()
    )
  };
}

class Order extends KhademModel<Order> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'customer': belongsTo<User>(
      localKey: 'customer_id',
      relatedTable: 'users',
      factory: () => User()
    ),
    'shippingAddress': belongsTo<Address>(
      localKey: 'shipping_address_id',
      relatedTable: 'addresses',
      factory: () => Address()
    )
  };
}
`;

const belongsToUsage = `
// Load post with its author
final post = await Post().query
  .withRelations(['author'])
  .where('id', '=', 1)
  .first();

// Access the author
final author = post?.relation.get('author') as User?;
print('Author: \${author?.name}');

// Load comment with user and post
final comment = await Comment().query
  .withRelations(['user', 'post'])
  .where('id', '=', 1)
  .first();

// Get author's other posts
final authorPosts = await Post().query
  .where('user_id', '=', author?.id)
  .where('published', '=', true)
  .get();

// Update relationship
comment.userId = newUserId;
await comment.save();

// Check relationship existence
if (post?.isRelationLoaded('author') ?? false) {
  final author = post.relation.get('author');
  // Author is loaded
} else {
  await post.load('author');
}

// Get related data with constraints
final recentPostsByAuthor = await Post().query
  .withRelations(['author'])
  .where('published', '=', true)
  .orderBy('created_at', direction: 'desc')
  .limit(10)
  .get();
`;

const belongsToManyCode = `
class User extends KhademModel<User> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'roles': belongsToMany<Role>(
      pivotTable: 'user_roles',
      foreignPivotKey: 'user_id',
      relatedPivotKey: 'role_id',
      relatedTable: 'roles',
      localKey: 'id',
      factory: () => Role()
    ),
    'teams': belongsToMany<Team>(
      pivotTable: 'team_members',
      foreignPivotKey: 'user_id',
      relatedPivotKey: 'team_id',
      relatedTable: 'teams',
      localKey: 'id',
      factory: () => Team()
    )
  };
}

class Role extends KhademModel<Role> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'users': belongsToMany<User>(
      pivotTable: 'user_roles',
      foreignPivotKey: 'role_id',
      relatedPivotKey: 'user_id',
      relatedTable: 'users',
      localKey: 'id',
      factory: () => User()
    ),
    'permissions': belongsToMany<Permission>(
      pivotTable: 'role_permissions',
      foreignPivotKey: 'role_id',
      relatedPivotKey: 'permission_id',
      relatedTable: 'permissions',
      localKey: 'id',
      factory: () => Permission()
    )
  };
}

// Pivot table structure: user_roles
// - user_id (foreign key to users)
// - role_id (foreign key to roles)
// - created_at, updated_at (timestamps)
`;

const belongsToManyUsage = `
// Load user with roles
final user = await User().query
  .withRelations(['roles'])
  .where('id', '=', 1)
  .first();

final roles = user?.relation.get('roles') as List<Role>?;

// Check if user has specific role
final isAdmin = roles?.any((role) => role.name == 'admin') ?? false;

// Load role with users
final role = await Role().query
  .withRelations(['users'])
  .where('name', '=', 'admin')
  .first();

final adminUsers = role?.relation.get('users') as List<User>?;

// Complex many-to-many queries
final usersWithRoles = await User().query
  .withRelations(['roles.permissions'])
  .where('active', '=', true)
  .get();

// Get users by role
final editors = await User().query
  .withRelations(['roles'])
  .whereHas('roles', (query) => query.where('name', '=', 'editor'))
  .get();

// Count relationships
final userRoleCount = await User().query
  .withRelations(['roles'])
  .then((users) => users
    .map((user) => (user.relation.get('roles') as List).length)
    .reduce((a, b) => a + b));

// Note: Khadem's belongsToMany focuses on data retrieval
// Attach/detach operations would need custom pivot table management
`;

const polymorphicCode = `
class Post extends KhademModel<Post> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'comments': morphMany<Comment>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: 'comments',
      factory: () => Comment()
    ),
    'images': morphMany<Image>(
      morphTypeField: 'imageable_type',
      morphIdField: 'imageable_id',
      relatedTable: 'images',
      factory: () => Image()
    ),
    'likes': morphMany<Like>(
      morphTypeField: 'likeable_type',
      morphIdField: 'likeable_id',
      relatedTable: 'likes',
      factory: () => Like()
    )
  };
}

class Video extends KhademModel<Video> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'comments': morphMany<Comment>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: 'comments',
      factory: () => Comment()
    ),
    'images': morphMany<Image>(
      morphTypeField: 'imageable_type',
      morphIdField: 'imageable_id',
      relatedTable: 'images',
      factory: () => Image()
    )
  };
}

class Comment extends KhademModel<Comment> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'commentable': morphTo<KhadamModel>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: '', // Determined dynamically
      factory: () => throw UnimplementedError() // Would need dynamic factory
    ),
    'user': belongsTo<User>(
      localKey: 'user_id',
      relatedTable: 'users',
      factory: () => User()
    )
  };
}

// Database structure:
// comments table:
// - id, user_id, commentable_type, commentable_id, content, created_at
// images table:
// - id, imageable_type, imageable_id, path, alt_text, created_at
// likes table:
// - id, user_id, likeable_type, likeable_id, created_at
`;

const polymorphicUsage = `
// Load post with all its polymorphic relationships
final post = await Post().query
  .withRelations(['comments', 'images', 'likes'])
  .where('id', '=', 1)
  .first();

// Access polymorphic data
final comments = post?.relation.get('comments') as List<Comment>;
final images = post?.relation.get('images') as List<Image>;
final likes = post?.relation.get('likes') as List<Like>;

// Get all comments for different content types
final allComments = await Comment().query
  .withRelations(['commentable', 'user'])
  .orderBy('created_at', direction: 'desc')
  .limit(50)
  .get();

// Filter comments by type
final postComments = allComments
  .where((comment) => comment.commentableType == 'Post');

final videoComments = allComments
  .where((comment) => comment.commentableType == 'Video');

// Add comment to any content
final newComment = Comment();
newComment.userId = currentUserId;
newComment.commentableType = 'Post'; // or 'Video'
newComment.commentableId = postId;
newComment.content = 'Great post!';
await newComment.save();

// Get content with most comments
final popularContent = await Post().query
  .withRelations(['comments'])
  .withCount('comments')
  .orderBy('comments_count', direction: 'desc')
  .limit(10)
  .get();

// Polymorphic search across content types
final searchResults = await Comment().query
  .withRelations(['commentable'])
  .where('content', 'like', '%search term%')
  .get();

// Group comments by content type
final commentsByType = allComments.fold<Map<String, List<Comment>>>(
  {},
  (map, comment) {
    final type = comment.commentableType;
    map[type] ??= [];
    map[type]!.add(comment);
    return map;
  },
);
`;

const morphToCode = `
class Comment extends KhademModel<Comment> with HasRelationships {
  @override
  Map<String, RelationDefinition> get relations => {
    'commentable': morphTo<KhadamModel>(
      morphTypeField: 'commentable_type',
      morphIdField: 'commentable_id',
      relatedTable: '', // not needed here
      factory: () => throw UnimplementedError()
    )
  };
}
`;

const loadingRelationsCode = `
// Load posts with their user and paginated comments (and nested user inside each comment)
final post = await Post().query
  .where('id', '=', 1)
  .withRelations(['user', 'comments:paginated:page=1:perPage=10.user'])
  .first();

final user = post?.relation.get('user');
final comments = post?.relation.get('comments');
`;

const advancedLoadingCode = `
import 'package:khadem_dart/khadem_dart.dart';

// Advanced loading with constraints and nested relations
class User extends KhademModel {
  @override
  String get table => 'users';

  // Define relationships
  HasMany<Post> posts() => hasMany(Post);
  HasMany<Comment> comments() => hasMany(Comment);
  BelongsTo<Profile> profile() => belongsTo(Profile);
}

// Load with constraints and nested relationships
final users = await User.query()
  .withRelations([
    'posts' => (query) => query.where('status', 'published').limit(5),
    'posts.comments' => (query) => query.where('approved', true),
    'profile'
  ])
  .where('active', true)
  .get();

// Load specific columns only
final usersWithSpecificColumns = await User.query()
  .withRelations([
    'posts' => (query) => query.select(['id', 'title', 'created_at']),
    'profile' => (query) => query.select(['id', 'avatar', 'bio'])
  ])
  .get();

// Conditional loading
final usersWithConditionalRelations = await User.query()
  .when(someCondition, (query) => query.withRelations(['posts']))
  .when(anotherCondition, (query) => query.withRelations(['comments']))
  .get();

// Complex nested relationships with query constraints
final chatRooms = await ChatRoom.query()
  .withRelations([
    'latestMessage.sender',
    {
      'latestMessage': {
        'query': (query) => query.orderBy('created_at', direction: 'desc').limit(1),
        'with': ['sender']
      }
    },
    {
      'messages': {
        'paginate': true,
        'page': 1,
        'perPage': 10,
        'with': ['sender']
      }
    }
  ])
  .get();

// Alternative string format for pagination
final roomsWithPagination = await ChatRoom.query()
  .withRelations([
    'latestMessage.sender',
    'messages:paginated:page=1:perPage=10.sender'
  ])
  .get();

// hasOne with query constraints for latest records
class ChatRoom extends KhademModel {
  @override
  String get table => 'chat_rooms';

  HasMany<ChatMessage> messages() => hasMany(ChatMessage);
  HasOne<ChatMessage> latestMessage() => hasOne(ChatMessage)
    .whereRaw('created_at = (SELECT MAX(created_at) FROM chat_messages WHERE room_id = chat_rooms.id)');
}

// Load with complex relationship patterns
final complexData = await User.query()
  .withRelations([
    // Simple nested relation
    'posts.author',
    
    // Relation with constraints
    'posts' => (query) => query
      .where('published', true)
      .orderBy('created_at', 'desc')
      .limit(3),
    
    // Nested relation with constraints
    'posts.comments' => (query) => query
      .where('approved', true)
      .with('user'),
    
    // Object format with pagination
    {
      'followers': {
        'paginate': true,
        'page': 1,
        'perPage': 20,
        'query': (query) => query.orderBy('created_at', 'desc')
      }
    }
  ])
  .find(userId);
`;

const performanceCode = `
import 'package:khadem_dart/khadem_dart.dart';

// Performance optimization patterns
class Post extends KhademModel {
  @override
  String get table => 'posts';

  HasMany<Comment> comments() => hasMany(Comment);
  BelongsTo<User> author() => belongsTo(User);
}

// Batch loading for better performance
final posts = await Post.query()
  .withRelations(['author', 'comments'])
  .whereIn('id', postIds)
  .get();

// Lazy loading when needed
final post = await Post.find(1);
if (needsComments) {
  await post.load('comments');
}

// Preload commonly used relations
final cachedUsers = await User.query()
  .withRelations(['profile'])
  .remember(3600) // Cache for 1 hour
  .get();

// Chunked loading for large datasets
await Post.query()
  .withRelations(['comments'])
  .chunk(100, (posts) async {
    // Process 100 posts at a time
    for (final post in posts) {
      await processPost(post);
    }
  });
`;

const realWorldCode = `
import 'package:khadem_dart/khadem_dart.dart';

// E-commerce platform relationships
class Order extends KhademModel {
  @override
  String get table => 'orders';

  BelongsTo<User> customer() => belongsTo(User);
  HasMany<OrderItem> items() => hasMany(OrderItem);
  BelongsTo<Address> shippingAddress() => belongsTo(Address);
  HasOne<Payment> payment() => hasOne(Payment);
}

class OrderItem extends KhademModel {
  @override
  String get table => 'order_items';

  BelongsTo<Order> order() => belongsTo(Order);
  BelongsTo<Product> product() => belongsTo(Product);
}

// Load complete order with all related data
final order = await Order.query()
  .withRelations([
    'customer',
    'items.product',
    'shippingAddress',
    'payment'
  ])
  .find(orderId);

// Calculate order total with relationships
double calculateTotal(Order order) {
  return order.items.fold(0.0, (total, item) {
    return total + (item.product.price * item.quantity);
  });
}
`;

const paginationCode = `
import 'package:khadem_dart/khadem_dart.dart';

// Object format pagination with relationships
class ChatRoom extends KhademModel {
  @override
  String get table => 'chat_rooms';

  HasMany<ChatMessage> messages() => hasMany(ChatMessage);
  HasOne<ChatMessage> latestMessage() => hasOne(ChatMessage);
}

// Paginate messages with nested sender relationship
final chatRooms = await ChatRoom.query()
  .withRelations([
    {
      'messages': {
        'paginate': true,
        'page': 1,
        'perPage': 20,
        'query': (query) => query.orderBy('created_at', 'desc'),
        'with': ['sender']
      }
    },
    {
      'latestMessage': {
        'query': (query) => query.orderBy('created_at', 'desc').limit(1),
        'with': ['sender']
      }
    }
  ])
  .get();

// Access paginated data
for (final room in chatRooms) {
  final messagesData = room.relation.get('messages') as Map<String, dynamic>;
  final messages = messagesData['data'] as List<ChatMessage>;
  final paginationMeta = messagesData['meta'] as Map<String, dynamic>;
  
  print('Page: \${paginationMeta['page']}');
  print('Total: \${paginationMeta['total']}');
  print('Messages: \${messages.length}');
}

// Paginate followers with constraints
final users = await User.query()
  .withRelations([
    {
      'followers': {
        'paginate': true,
        'page': 2,
        'perPage': 10,
        'query': (query) => query
          .where('active', true)
          .orderBy('created_at', 'desc')
      }
    }
  ])
  .get();
`;

const paginationStringCode = `
import 'package:khadem_dart/khadem_dart.dart';

// String format pagination - more concise
final chatRooms = await ChatRoom.query()
  .withRelations([
    'messages:paginated:page=1:perPage=20.sender',
    'latestMessage.sender'
  ])
  .get();

// Complex pagination with multiple relationships
final posts = await Post.query()
  .withRelations([
    'author',
    'comments:paginated:page=1:perPage=5.user',
    'likes:paginated:page=1:perPage=10'
  ])
  .where('published', true)
  .get();

// Pagination with nested constraints
final orders = await Order.query()
  .withRelations([
    'customer',
    'items:paginated:page=1:perPage=10.product:price>100'
  ])
  .get();

// Access paginated nested data
for (final order in orders) {
  final itemsData = order.relation.get('items') as Map<String, dynamic>;
  final items = itemsData['data'] as List<OrderItem>;
  final meta = itemsData['meta'] as Map<String, dynamic>;
  
  print('Order \${order.id} has \${meta['total']} items');
  print('Showing page \${meta['page']} of \${meta['lastPage']}');
}
`;
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
</style>
