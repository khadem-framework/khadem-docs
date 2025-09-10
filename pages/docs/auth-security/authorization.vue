<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Authorization
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to implement role-based and permission-based authorization
          </p>
        </div>

        <div class="space-y-8">
          <!-- Gates and Policies -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Gates and Policies
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem provides a flexible authorization system using Gates and Policies.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Defining Gates
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/auth_service_provider.dart
import 'package:khadem/src/modules/auth/gate.dart';

class AuthServiceProvider extends ServiceProvider {
  @override
  void boot() {
    // Define gates
    Gate.define('update-post', (user, post) {
      return user.id == post.userId || user.hasRole('admin');
    });

    Gate.define('delete-post', (user, post) {
      return user.hasRole('admin') || (user.id == post.userId && post.createdAt.isAfter(DateTime.now().subtract(Duration(hours: 24))));
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Using Gates
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/modules/auth/gate.dart';

class PostController extends Controller {
  Future&lt;Response&gt; update(Request request, int id) async {
    final post = Post.find(id);

    if (!Gate.allows('update-post', post)) {
      return abort(403, 'Unauthorized');
    }

    // Update post logic
    return redirect('/posts');
  }
}</code></pre>
            </div>
          </div>

          <!-- Policies -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Policies
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Policies provide a more organized way to handle authorization for specific models.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating a Policy
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/policies/post_policy.dart
import 'package:khadem/src/modules/auth/policy.dart';
import '../models/post.dart';
import '../models/user.dart';

class PostPolicy extends Policy {
  bool viewAny(User user) {
    return true; // Anyone can view posts
  }

  bool view(User user, Post post) {
    return true; // Anyone can view a specific post
  }

  bool create(User user) {
    return Auth.check(); // Only authenticated users can create
  }

  bool update(User user, Post post) {
    return user.id == post.userId || user.hasRole('admin');
  }

  bool delete(User user, Post post) {
    return user.hasRole('admin') ||
           (user.id == post.userId && post.createdAt.isAfter(DateTime.now().subtract(Duration(hours: 24))));
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Registering Policies
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/auth_service_provider.dart
import 'package:khadem/src/modules/auth/gate.dart';
import '../policies/post_policy.dart';

class AuthServiceProvider extends ServiceProvider {
  @override
  void boot() {
    // Register policies
    Gate.policy(Post, PostPolicy());
  }
}</code></pre>
            </div>
          </div>

          <!-- Roles and Permissions -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Roles and Permissions
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Implement role-based access control with permissions.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Role Model
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/role.dart
class Role extends KhademModel&lt;Role&gt; {
  String? name;
  String? description;

  @override
  List&lt;String&gt; get fillable =&gt; ['name', 'description'];

  @override
  Role newFactory(Map&lt;String, dynamic&gt; data) {
    return Role(
      name: data['name'],
      description: data['description'],
    );
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Permission Model
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/permission.dart
class Permission extends KhademModel&lt;Permission&gt; {
  String? name;
  String? description;

  @override
  List&lt;String&gt; get fillable =&gt; ['name', 'description'];

  @override
  Permission newFactory(Map&lt;String, dynamic&gt; data) {
    return Permission(
      name: data['name'],
      description: data['description'],
    );
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                User-Role Relationships
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/models/user.dart
class User extends KhademModel&lt;User&gt; implements Authenticatable {
  // ... existing code ...

  // Relationships
  Future&lt;List&lt;Role&gt;&gt; get roles =&gt; relation.hasMany(Role);
  Future&lt;List&lt;Permission&gt;&gt; get permissions =&gt; relation.hasManyThrough(Permission, Role);

  // Helper methods
  bool hasRole(String roleName) {
    return roles.any((role) =&gt; role.name == roleName);
  }

  bool hasPermission(String permissionName) {
    return permissions.any((permission) =&gt; permission.name == permissionName);
  }

  bool hasAnyRole(List&lt;String&gt; roleNames) {
    return roleNames.any(hasRole);
  }

  bool hasAllRoles(List&lt;String&gt; roleNames) {
    return roleNames.every(hasRole);
  }
}</code></pre>
            </div>
          </div>

          <!-- Middleware -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Authorization Middleware
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use middleware to check roles and permissions on routes.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Role Middleware
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/middleware/role_middleware.dart
class RoleMiddleware extends Middleware {
  final List&lt;String&gt; roles;

  RoleMiddleware(this.roles);

  @override
  Future&lt;Response&gt; handle(Request request, next) async {
    final user = Auth.user();

    if (!user.hasAnyRole(roles)) {
      return abort(403, 'Insufficient permissions');
    }

    return await next(request);
  }
}

// Register middleware
app.middleware.register('role', (roles) =&gt; RoleMiddleware(roles.split('|')));</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Using Role Middleware
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// routes/web.dart
Route.group(() {
  Route.get('/admin', AdminController.index);
  Route.get('/users', UserController.index);
}, middleware: ['auth', 'role:admin|moderator']);

Route.group(() {
  Route.get('/editor', EditorController.index);
}, middleware: ['auth', 'role:editor']);</code></pre>
            </div>
          </div>

          <!-- Blade-like Directives -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Template Authorization
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use authorization directives in your templates.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>&lt;!-- resources/views/admin/dashboard.khdm.html --&gt;
@auth
  &lt;h1&gt;Welcome back, {{ auth().user.name }}!&lt;/h1&gt;

  @can('manage-users')
    &lt;a href="/admin/users"&gt;Manage Users&lt;/a&gt;
  @endcan

  @hasrole('admin')
    &lt;a href="/admin/settings"&gt;System Settings&lt;/a&gt;
  @endhasrole
@endauth

@guest
  &lt;a href="/login"&gt;Login&lt;/a&gt;
  &lt;a href="/register"&gt;Register&lt;/a&gt;
@endguest</code></pre>
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
