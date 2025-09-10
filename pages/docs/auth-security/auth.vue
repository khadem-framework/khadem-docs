<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Authentication
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to implement authentication in your Khadem applications
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic Setup -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Setup
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem provides a comprehensive authentication system inspired by Laravel's authentication.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Install Authentication Module
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>dart pub add khadem_auth</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Register Auth Service Provider
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// config/app.dart
import 'package:khadem/src/modules/auth/auth_service_provider.dart';

void main() {
  // Register auth service provider
  app.register(AuthServiceProvider());
}</code></pre>
            </div>
          </div>

          <!-- User Model -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              User Model
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create a User model that implements the Authenticatable interface.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/database/model_base/khadem_model.dart';
import 'package:khadem/src/modules/auth/authenticatable.dart';

class User extends KhademModel&lt;User&gt; implements Authenticatable {
  String? name;
  String? email;
  String? password;
  DateTime? emailVerifiedAt;

  User({
    this.name,
    this.email,
    this.password,
    this.emailVerifiedAt,
  });

  @override
  List&lt;String&gt; get fillable =&gt; ['name', 'email', 'password'];

  @override
  List&lt;String&gt; get hidden =&gt; ['password'];

  @override
  Map&lt;String, Type&gt; get casts =&gt; {
    'email_verified_at': DateTime,
  };

  @override
  String getAuthIdentifierName() =&gt; 'id';

  @override
  dynamic getAuthIdentifier() =&gt; id;

  @override
  String getAuthPassword() =&gt; password!;

  @override
  bool getRememberToken() =&gt; false;

  @override
  String? getRememberTokenName() =&gt; null;

  @override
  User newFactory(Map&lt;String, dynamic&gt; data) {
    return User(
      name: data['name'],
      email: data['email'],
      password: data['password'],
      emailVerifiedAt: data['email_verified_at'],
    );
  }
}</code></pre>
            </div>
          </div>

          <!-- Authentication Routes -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Authentication Routes
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Set up authentication routes for login, registration, and logout.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// routes/web.dart
import 'package:khadem/src/core/http/route.dart';
import '../app/http/controllers/auth_controller.dart';

void defineRoutes() {
  // Authentication routes
  Route.get('/login', AuthController.showLoginForm);
  Route.post('/login', AuthController.login);
  Route.post('/logout', AuthController.logout);
  Route.get('/register', AuthController.showRegistrationForm);
  Route.post('/register', AuthController.register);

  // Protected routes
  Route.group(() {
    Route.get('/dashboard', DashboardController.index);
    Route.get('/profile', ProfileController.show);
  }, middleware: ['auth']);
}</code></pre>
            </div>
          </div>

          <!-- Auth Controller -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Auth Controller
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create an authentication controller to handle login, registration, and logout.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/http/controller.dart';
import 'package:khadem/src/core/http/request.dart';
import 'package:khadem/src/core/http/response.dart';
import 'package:khadem/src/modules/auth/auth.dart';
import '../models/user.dart';

class AuthController extends Controller {
  Future&lt;Response&gt; showLoginForm(Request request) async {
    return view('auth.login');
  }

  Future&lt;Response&gt; login(Request request) async {
    final credentials = request.validate({
      'email': 'required|email',
      'password': 'required',
    });

    if (Auth.attempt(credentials['email'], credentials['password'])) {
      return redirect('/dashboard');
    }

    return back().withErrors({'email': 'Invalid credentials'});
  }

  Future&lt;Response&gt; logout(Request request) async {
    Auth.logout();
    return redirect('/');
  }

  Future&lt;Response&gt; showRegistrationForm(Request request) async {
    return view('auth.register');
  }

  Future&lt;Response&gt; register(Request request) async {
    final data = request.validate({
      'name': 'required',
      'email': 'required|email|unique:users',
      'password': 'required|min:8|confirmed',
    });

    final user = User(
      name: data['name'],
      email: data['email'],
      password: Hash.make(data['password']),
    );

    await user.save();

    Auth.login(user);

    return redirect('/dashboard');
  }
}</code></pre>
            </div>
          </div>

          <!-- Middleware -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Authentication Middleware
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Protect your routes with authentication middleware.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/middleware/auth_middleware.dart
import 'package:khadem/src/core/http/middleware.dart';
import 'package:khadem/src/core/http/request.dart';
import 'package:khadem/src/core/http/response.dart';
import 'package:khadem/src/modules/auth/auth.dart';

class AuthMiddleware extends Middleware {
  @override
  Future&lt;Response&gt; handle(Request request, next) async {
    if (!Auth.check()) {
      return redirect('/login');
    }

    return await next(request);
  }
}

// Register middleware
// config/app.dart
app.middleware.register('auth', AuthMiddleware);</code></pre>
            </div>
          </div>

          <!-- Guards -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Guards
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use guards to protect routes and check permissions.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Using guards in controllers
class PostController extends Controller {
  Future&lt;Response&gt; update(Request request, int id) async {
    // Check if user can update this post
    if (!Auth.user().can('update-post', Post.find(id))) {
      return abort(403, 'Unauthorized');
    }

    // Update post logic here
    return redirect('/posts');
  }
}

// Or use middleware for route protection
Route.group(() {
  Route.get('/admin', AdminController.index);
}, middleware: ['auth', 'role:admin']);</code></pre>
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
