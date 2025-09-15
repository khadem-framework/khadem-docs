<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Authorization</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Khadem provides a comprehensive authorization system with role-based access control,
        permissions, gates, and policies for securing your application resources.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Role-Based Access</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Flexible role and permission system</p>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">Gates & Policies</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Fine-grained authorization control</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Middleware Protection</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Route-level access control</p>
        </div>
      </div>
    </header>

    <!-- Gates and Policies -->
    <DocSection title="Gates and Policies">
      <template #description>
        Gates provide simple, closure-based authorization checks while Policies offer
        organized, class-based authorization for specific models.
      </template>
      <CodeBlock :code="gatesCode" language="dart" title="Defining Gates" />
      <CodeBlock :code="usingGates" language="dart" title="Using Gates in Controllers" />
    </DocSection>

    <!-- Policies -->
    <DocSection title="Authorization Policies">
      <template #description>
        Policies provide a clean, organized way to handle authorization logic for specific models.
        Each policy method corresponds to an action that can be performed on the model.
      </template>
      <CodeBlock :code="policyCode" language="dart" title="Creating a Policy" />
      <CodeBlock :code="registeringPolicies" language="dart" title="Registering Policies" />
    </DocSection>

    <!-- Roles and Permissions -->
    <DocSection title="Roles and Permissions">
      <template #description>
        Implement role-based access control with a flexible permission system.
        Users can have multiple roles, and roles can have multiple permissions.
      </template>
      <CodeBlock :code="roleModel" language="dart" title="Role Model" />
      <CodeBlock :code="permissionModel" language="dart" title="Permission Model" />
      <CodeBlock :code="userRoleRelationships" language="dart" title="User-Role Relationships" />
    </DocSection>

    <!-- Authorization Middleware -->
    <DocSection title="Authorization Middleware">
      <template #description>
        Use middleware to automatically check roles and permissions on protected routes.
        This provides route-level access control without cluttering your controllers.
      </template>
      <CodeBlock :code="roleMiddleware" language="dart" title="Role Middleware" />
      <CodeBlock :code="permissionMiddleware" language="dart" title="Permission Middleware" />
      <CodeBlock :code="middlewareUsage" language="dart" title="Using Authorization Middleware" />
    </DocSection>

    <!-- Helper Methods -->
    <DocSection title="Authorization Helper Methods">
      <template #description>
        Convenient methods for checking roles and permissions throughout your application.
        These methods can be used in controllers, services, and other parts of your application.
      </template>
      <CodeBlock :code="authHelpers" language="dart" title="Authorization Helpers" />
      <CodeBlock :code="controllerAuth" language="dart" title="Controller Authorization" />
    </DocSection>

    <!-- Blade-like Directives -->
    <DocSection title="Template Authorization">
      <template #description>
        Use authorization directives in your templates to conditionally render content
        based on user roles and permissions.
      </template>
      <CodeBlock :code="templateAuth" language="dart" title="Template Authorization" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Authorization',
  meta: [{ name: 'description', content: 'Role-based access control and authorization in Khadem' }]
});

const gatesCode = `
// app/providers/auth_service_provider.dart
import 'package:khadem/src/modules/auth/services/gate.dart';

class AuthServiceProvider {
  static void boot() {
    // Define gates for simple authorization checks
    Gate.define('update-post', (user, post) {
      return user['id'] == post['user_id'] || user['role'] == 'admin';
    });

    Gate.define('delete-post', (user, post) {
      return user['role'] == 'admin' ||
             (user['id'] == post['user_id'] &&
              DateTime.parse(post['created_at']).isAfter(
                DateTime.now().subtract(Duration(hours: 24))
              ));
    });

    Gate.define('view-admin-panel', (user) {
      return user['role'] == 'admin' || user['role'] == 'moderator';
    });
  }
}
`;

const usingGates = `
import 'package:khadem/src/modules/auth/services/gate.dart';

class PostController {
  static Future<Map<String, dynamic>> update(Request request, int postId) async {
    // Get the authenticated user
    final user = request.getAttribute('user') as Map<String, dynamic>;

    // Find the post
    final post = await Post.find(postId);
    if (post == null) {
      return {'error': 'Post not found'};
    }

    // Check authorization using Gate
    if (!Gate.allows('update-post', user, post)) {
      return {
        'error': 'Unauthorized',
        'message': 'You do not have permission to update this post'
      };
    }

    // Update post logic here
    final updatedData = {
      'title': request.input('title'),
      'content': request.input('content'),
      'updated_at': DateTime.now().toIso8601String(),
    };

    await post.update(updatedData);

    return {'success': true, 'post': post};
  }

  static Future<Map<String, dynamic>> delete(Request request, int postId) async {
    final user = request.getAttribute('user') as Map<String, dynamic>;
    final post = await Post.find(postId);

    if (post == null) {
      return {'error': 'Post not found'};
    }

    if (!Gate.allows('delete-post', user, post)) {
      return {'error': 'Unauthorized to delete this post'};
    }

    await post.delete();
    return {'success': true, 'message': 'Post deleted'};
  }
}
`;

const policyCode = `
import 'package:khadem/src/modules/auth/policies/policy.dart';

class PostPolicy extends Policy {
  @override
  bool viewAny(Map<String, dynamic> user) {
    return true; // Anyone can view posts
  }

  @override
  bool view(Map<String, dynamic> user, Map<String, dynamic> post) {
    return true; // Anyone can view a specific post
  }

  @override
  bool create(Map<String, dynamic> user) {
    return user.isNotEmpty; // Only authenticated users can create
  }

  @override
  bool update(Map<String, dynamic> user, Map<String, dynamic> post) {
    return user['id'] == post['user_id'] || user['role'] == 'admin';
  }

  @override
  bool delete(Map<String, dynamic> user, Map<String, dynamic> post) {
    return user['role'] == 'admin' ||
           (user['id'] == post['user_id'] &&
            DateTime.parse(post['created_at']).isAfter(
              DateTime.now().subtract(Duration(hours: 24))
            ));
  }

  // Custom policy methods
  bool publish(Map<String, dynamic> user, Map<String, dynamic> post) {
    return user['role'] == 'admin' || user['role'] == 'editor';
  }

  bool feature(Map<String, dynamic> user, Map<String, dynamic> post) {
    return user['role'] == 'admin';
  }
}
`;

const registeringPolicies = `
// app/providers/auth_service_provider.dart
import 'package:khadem/src/modules/auth/services/gate.dart';
import '../policies/post_policy.dart';
import '../policies/user_policy.dart';
import '../policies/comment_policy.dart';

class AuthServiceProvider {
  static void boot() {
    // Register policies for different models
    Gate.policy('Post', PostPolicy());
    Gate.policy('User', UserPolicy());
    Gate.policy('Comment', CommentPolicy());

    // You can also register policies with custom keys
    Gate.policy('posts', PostPolicy());
    Gate.policy('users', UserPolicy());
  }
}
`;

const roleModel = `
import 'package:khadem/src/core/database/model_base/khadem_model.dart';

class Role extends KhademModel<Role> {
  String? name;
  String? description;
  DateTime? createdAt;
  DateTime? updatedAt;

  Role({
    this.name,
    this.description,
    int? id,
  }) {
    this.id = id;
  }

  @override
  List<String> get fillable => [
    'name',
    'description',
  ];

  @override
  List<String> get hidden => [];

  @override
  Map<String, Type> get casts => {
    'created_at': DateTime,
    'updated_at': DateTime,
  };

  @override
  Map<String, dynamic> get relationships => {
    'users': {
      'type': 'belongsToMany',
      'model': 'User',
      'pivot_table': 'user_roles',
      'foreign_key': 'role_id',
      'related_key': 'user_id',
    },
    'permissions': {
      'type': 'belongsToMany',
      'model': 'Permission',
      'pivot_table': 'role_permissions',
      'foreign_key': 'role_id',
      'related_key': 'permission_id',
    },
  };

  @override
  Role newFactory(Map<String, dynamic> data) {
    return Role(
      id: data['id'],
      name: data['name'],
      description: data['description'],
    );
  }

  @override
  Object? getField(String key) {
    switch (key) {
      case 'id': return id;
      case 'name': return name;
      case 'description': return description;
      case 'created_at': return createdAt;
      case 'updated_at': return updatedAt;
      default: return null;
    }
  }

  @override
  void setField(String key, dynamic value) {
    switch (key) {
      case 'id': id = value; break;
      case 'name': name = value; break;
      case 'description': description = value; break;
      case 'created_at': createdAt = value; break;
      case 'updated_at': updatedAt = value; break;
    }
  }
}
`;

const permissionModel = `
import 'package:khadem/src/core/database/model_base/khadem_model.dart';

class Permission extends KhademModel<Permission> {
  String? name;
  String? description;
  DateTime? createdAt;
  DateTime? updatedAt;

  Permission({
    this.name,
    this.description,
    int? id,
  }) {
    this.id = id;
  }

  @override
  List<String> get fillable => [
    'name',
    'description',
  ];

  @override
  List<String> get hidden => [];

  @override
  Map<String, Type> get casts => {
    'created_at': DateTime,
    'updated_at': DateTime,
  };

  @override
  Map<String, dynamic> get relationships => {
    'roles': {
      'type': 'belongsToMany',
      'model': 'Role',
      'pivot_table': 'role_permissions',
      'foreign_key': 'permission_id',
      'related_key': 'role_id',
    },
  };

  @override
  Permission newFactory(Map<String, dynamic> data) {
    return Permission(
      id: data['id'],
      name: data['name'],
      description: data['description'],
    );
  }

  @override
  Object? getField(String key) {
    switch (key) {
      case 'id': return id;
      case 'name': return name;
      case 'description': return description;
      case 'created_at': return createdAt;
      case 'updated_at': return updatedAt;
      default: return null;
    }
  }

  @override
  void setField(String key, dynamic value) {
    switch (key) {
      case 'id': id = value; break;
      case 'name': name = value; break;
      case 'description': description = value; break;
      case 'created_at': createdAt = value; break;
      case 'updated_at': updatedAt = value; break;
    }
  }
}
`;

const userRoleRelationships = `
import 'package:khadem/src/core/database/model_base/khadem_model.dart';
import 'package:khadem/src/modules/auth/contracts/authenticatable.dart';

class User extends KhademModel<User> implements Authenticatable {
  String? name;
  String? email;
  String? password;
  DateTime? emailVerifiedAt;
  DateTime? createdAt;
  DateTime? updatedAt;

  User({
    this.name,
    this.email,
    this.password,
    this.emailVerifiedAt,
    int? id,
  }) {
    this.id = id;
  }

  @override
  List<String> get fillable => [
    'name',
    'email',
    'password',
    'email_verified_at',
  ];

  @override
  List<String> get hidden => [
    'password',
  ];

  @override
  Map<String, Type> get casts => {
    'email_verified_at': DateTime,
    'created_at': DateTime,
    'updated_at': DateTime,
  };

  @override
  Map<String, dynamic> get relationships => {
    'roles': {
      'type': 'belongsToMany',
      'model': 'Role',
      'pivot_table': 'user_roles',
      'foreign_key': 'user_id',
      'related_key': 'role_id',
    },
    'permissions': {
      'type': 'belongsToMany',
      'model': 'Permission',
      'pivot_table': 'user_permissions',
      'foreign_key': 'user_id',
      'related_key': 'permission_id',
    },
  };

  // Authenticatable interface implementation
  @override
  String getAuthIdentifierName() => 'id';

  @override
  dynamic getAuthIdentifier() => id;

  @override
  String getAuthPassword() => password ?? '';

  @override
  bool getRememberToken() => false;

  @override
  String? getRememberTokenName() => null;

  @override
  User newFactory(Map<String, dynamic> data) {
    return User(
      id: data['id'],
      name: data['name'],
      email: data['email'],
      password: data['password'],
      emailVerifiedAt: data['email_verified_at'],
    );
  }

  @override
  Object? getField(String key) {
    switch (key) {
      case 'id': return id;
      case 'name': return name;
      case 'email': return email;
      case 'password': return password;
      case 'email_verified_at': return emailVerifiedAt;
      case 'created_at': return createdAt;
      case 'updated_at': return updatedAt;
      default: return null;
    }
  }

  @override
  void setField(String key, dynamic value) {
    switch (key) {
      case 'id': id = value; break;
      case 'name': name = value; break;
      case 'email': email = value; break;
      case 'password': password = value; break;
      case 'email_verified_at': emailVerifiedAt = value; break;
      case 'created_at': createdAt = value; break;
      case 'updated_at': updatedAt = value; break;
    }
  }

  // Authorization helper methods
  Future<bool> hasRole(String roleName) async {
    final roles = await this.roles;
    return roles.any((role) => role.name == roleName);
  }

  Future<bool> hasPermission(String permissionName) async {
    final permissions = await this.permissions;
    return permissions.any((permission) => permission.name == permissionName);
  }

  Future<bool> hasAnyRole(List<String> roleNames) async {
    for (final roleName in roleNames) {
      if (await hasRole(roleName)) return true;
    }
    return false;
  }

  Future<bool> hasAllRoles(List<String> roleNames) async {
    for (final roleName in roleNames) {
      if (!await hasRole(roleName)) return false;
    }
    return true;
  }

  Future<bool> hasAnyPermission(List<String> permissionNames) async {
    for (final permissionName in permissionNames) {
      if (await hasPermission(permissionName)) return true;
    }
    return false;
  }
}
`;

const roleMiddleware = `
import 'package:khadem/src/core/http/middleware.dart';
import 'package:khadem/src/core/http/request.dart';
import 'package:khadem/src/core/http/response.dart';

class RoleMiddleware extends Middleware {
  final List<String> roles;

  RoleMiddleware(this.roles);

  @override
  Future<Response> handle(Request request, Function next) async {
    final user = request.getAttribute('user') as Map<String, dynamic>?;

    if (user == null) {
      return Response.unauthorized('Authentication required');
    }

    // Check if user has any of the required roles
    final userRoles = user['roles'] as List<dynamic>? ?? [];
    final hasRequiredRole = roles.any((role) =>
      userRoles.any((userRole) => userRole['name'] == role)
    );

    if (!hasRequiredRole) {
      return Response.forbidden('Insufficient permissions');
    }

    return await next(request);
  }
}
`;

const permissionMiddleware = `
import 'package:khadem/src/core/http/middleware.dart';
import 'package:khadem/src/core/http/request.dart';
import 'package:khadem/src/core/http/response.dart';

class PermissionMiddleware extends Middleware {
  final List<String> permissions;

  PermissionMiddleware(this.permissions);

  @override
  Future<Response> handle(Request request, Function next) async {
    final user = request.getAttribute('user') as Map<String, dynamic>?;

    if (user == null) {
      return Response.unauthorized('Authentication required');
    }

    // Check if user has any of the required permissions
    final userPermissions = user['permissions'] as List<dynamic>? ?? [];
    final hasRequiredPermission = permissions.any((permission) =>
      userPermissions.any((userPermission) => userPermission['name'] == permission)
    );

    if (!hasRequiredPermission) {
      return Response.forbidden('Insufficient permissions');
    }

    return await next(request);
  }
}
`;

const middlewareUsage = `
// routes/web.dart
import 'package:khadem/src/core/http/route.dart';
import 'package:khadem/src/modules/auth/middlewares/auth_middleware.dart';
import '../controllers/admin_controller.dart';
import '../controllers/user_controller.dart';
import '../controllers/editor_controller.dart';

// Admin routes - require admin role
Route.group(() {
  Route.get('/admin/dashboard', AdminController.dashboard);
  Route.get('/admin/users', AdminController.users);
  Route.post('/admin/users/{id}/ban', AdminController.banUser);
}, middleware: [AuthMiddleware(), RoleMiddleware(['admin'])]);

// Moderator routes - require admin or moderator role
Route.group(() {
  Route.get('/admin/moderation', AdminController.moderation);
  Route.post('/posts/{id}/moderate', AdminController.moderatePost);
}, middleware: [AuthMiddleware(), RoleMiddleware(['admin', 'moderator'])]);

// Editor routes - require editor permission
Route.group(() {
  Route.get('/editor/dashboard', EditorController.dashboard);
  Route.post('/posts/{id}/publish', EditorController.publishPost);
}, middleware: [AuthMiddleware(), PermissionMiddleware(['publish_posts'])]);

// User management - require specific permission
Route.group(() {
  Route.get('/users', UserController.index);
  Route.put('/users/{id}', UserController.update);
}, middleware: [AuthMiddleware(), PermissionMiddleware(['manage_users'])]);
`;

const authHelpers = `
import 'package:khadem/src/modules/auth/services/gate.dart';

class AuthHelpers {
  static Future<bool> canUser(Map<String, dynamic> user, String ability, [dynamic model]) async {
    return Gate.allows(ability, user, model);
  }

  static Future<bool> cannotUser(Map<String, dynamic> user, String ability, [dynamic model]) async {
    return Gate.denies(ability, user, model);
  }

  static Future<bool> hasRole(Map<String, dynamic> user, String roleName) async {
    final roles = user['roles'] as List<dynamic>? ?? [];
    return roles.any((role) => role['name'] == roleName);
  }

  static Future<bool> hasPermission(Map<String, dynamic> user, String permissionName) async {
    final permissions = user['permissions'] as List<dynamic>? ?? [];
    return permissions.any((permission) => permission['name'] == permissionName);
  }

  static Future<bool> hasAnyRole(Map<String, dynamic> user, List<String> roleNames) async {
    for (final roleName in roleNames) {
      if (await hasRole(user, roleName)) return true;
    }
    return false;
  }

  static Future<bool> hasAllPermissions(Map<String, dynamic> user, List<String> permissionNames) async {
    for (final permissionName in permissionNames) {
      if (!await hasPermission(user, permissionName)) return false;
    }
    return true;
  }
}
`;

const controllerAuth = `
import 'package:khadem/src/modules/auth/services/gate.dart';

class PostController {
  static Future<Map<String, dynamic>> update(Request request, int postId) async {
    final user = request.getAttribute('user') as Map<String, dynamic>;
    final post = await Post.find(postId);

    if (post == null) {
      return {'error': 'Post not found'};
    }

    // Check using Gate
    if (!Gate.allows('update-post', user, post)) {
      return {'error': 'Unauthorized'};
    }

    // Or check using policy
    final postPolicy = PostPolicy();
    if (!postPolicy.update(user, post)) {
      return {'error': 'Unauthorized'};
    }

    // Update logic here
    final updatedData = {
      'title': request.input('title'),
      'content': request.input('content'),
    };

    await post.update(updatedData);
    return {'success': true, 'post': post};
  }

  static Future<Map<String, dynamic>> publish(Request request, int postId) async {
    final user = request.getAttribute('user') as Map<String, dynamic>;
    final post = await Post.find(postId);

    if (post == null) {
      return {'error': 'Post not found'};
    }

    final postPolicy = PostPolicy();

    // Check if user can publish
    if (!postPolicy.publish(user, post)) {
      return {'error': 'Unauthorized to publish posts'};
    }

    await post.update({'published': true, 'published_at': DateTime.now()});
    return {'success': true, 'message': 'Post published'};
  }
}
`;

const templateAuth = `
// In your template rendering logic
class TemplateHelpers {
  static String renderAuthorizedContent(Map<String, dynamic> user, String template) {
    final buffer = StringBuffer();

    // Simple template authorization example
    if (user.isNotEmpty) {
      buffer.write('<h1>Welcome back, \${user['name']}!</h1>');

      // Check permissions for admin content
      if (_hasPermission(user, 'manage_users')) {
        buffer.write('<a href="/admin/users">Manage Users</a>');
      }

      // Check roles for editor content
      if (_hasRole(user, 'admin') || _hasRole(user, 'editor')) {
        buffer.write('<a href="/editor">Editor Panel</a>');
      }
    } else {
      buffer.write('<a href="/login">Login</a>');
      buffer.write('<a href="/register">Register</a>');
    }

    return buffer.toString();
  }

  static bool _hasRole(Map<String, dynamic> user, String roleName) {
    final roles = user['roles'] as List<dynamic>? ?? [];
    return roles.any((role) => role['name'] == roleName);
  }

  static bool _hasPermission(Map<String, dynamic> user, String permissionName) {
    final permissions = user['permissions'] as List<dynamic>? ?? [];
    return permissions.any((permission) => permission['name'] == permissionName);
  }
}
`;
</script>
