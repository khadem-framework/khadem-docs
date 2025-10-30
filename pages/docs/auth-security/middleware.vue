<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Authentication Middleware</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Middleware provides automatic authentication for routes. Khadem offers flexible middleware
        for both API and web authentication with support for roles, permissions, and custom logic.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">AuthMiddleware</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Bearer, Basic, API Key authentication</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">WebAuthMiddleware</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Session-based web authentication</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Custom Middleware</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Build your own auth logic</p>
        </div>
      </div>
    </header>

    <!-- AuthMiddleware for APIs -->
    <DocSection title="AuthMiddleware - API Authentication">
      <template #description>
        AuthMiddleware authenticates API requests using Bearer tokens, Basic auth, or API keys.
        It automatically extracts credentials, verifies them, and attaches user data to requests.
      </template>
      <CodeBlock :code="authMiddlewareBasic" language="dart" title="Bearer Token Authentication" />
      <CodeBlock :code="authMiddlewareTypes" language="dart" title="Different Authentication Types" />
    </DocSection>

    <!-- Route Protection -->
    <DocSection title="Protecting Routes with Middleware">
      <template #description>
        Apply middleware to routes to automatically require authentication. Use route groups
        to apply middleware to multiple routes at once.
      </template>
      <CodeBlock :code="routeProtection" language="dart" title="Route Protection Examples" />
    </DocSection>

    <!-- Role-Based Access -->
    <DocSection title="Role-Based Access Control">
      <template #description>
        Restrict routes to specific roles using the withRoles() method. Users without
        the required role will receive a 403 Forbidden response.
      </template>
      <CodeBlock :code="roleMiddleware" language="dart" title="Role-Based Middleware" />
      <div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Important:</h4>
        <p class="text-yellow-700 dark:text-yellow-300">
          The user model must include a 'role' field in the toAuthArray() method for role checking to work.
        </p>
      </div>
    </DocSection>

    <!-- Permission-Based Access -->
    <DocSection title="Permission-Based Access Control">
      <template #description>
        Restrict routes based on fine-grained permissions. Users must have ALL specified
        permissions to access the route.
      </template>
      <CodeBlock :code="permissionMiddleware" language="dart" title="Permission-Based Middleware" />
    </DocSection>

    <!-- WebAuthMiddleware -->
    <DocSection title="WebAuthMiddleware - Session Authentication">
      <template #description>
        WebAuthMiddleware handles session-based authentication for traditional web applications.
        It checks session validity and redirects unauthenticated users to the login page.
      </template>
      <CodeBlock :code="webAuthMiddleware" language="dart" title="Web Authentication Middleware" />
      <CodeBlock :code="webAuthRoutes" language="dart" title="Web Route Protection" />
    </DocSection>

    <!-- Guest Middleware -->
    <DocSection title="Guest Middleware - Redirecting Authenticated Users">
      <template #description>
        Use guest middleware on pages like login and register to redirect already
        authenticated users away from these pages.
      </template>
      <CodeBlock :code="guestMiddleware" language="dart" title="Guest Middleware" />
    </DocSection>

    <!-- API Key Authentication -->
    <DocSection title="API Key Authentication">
      <template #description>
        Authenticate requests using API keys in custom headers. Perfect for server-to-server
        communication and webhook endpoints.
      </template>
      <CodeBlock :code="apiKeyMiddleware" language="dart" title="API Key Middleware" />
    </DocSection>

    <!-- Basic Authentication -->
    <DocSection title="Basic Authentication">
      <template #description>
        HTTP Basic authentication sends credentials in the Authorization header.
        Useful for simple APIs and legacy system integration.
      </template>
      <CodeBlock :code="basicAuthMiddleware" language="dart" title="Basic Auth Middleware" />
    </DocSection>

    <!-- Custom Middleware -->
    <DocSection title="Creating Custom Authentication Middleware">
      <template #description>
        Build custom middleware for specific authentication requirements like OAuth,
        two-factor authentication, or custom token formats.
      </template>
      <CodeBlock :code="customMiddleware" language="dart" title="Custom Middleware Example" />
    </DocSection>

    <!-- Middleware Chain -->
    <DocSection title="Chaining Multiple Middleware">
      <template #description>
        Combine multiple middleware to create complex authorization rules. Middleware
        runs in the order specified.
      </template>
      <CodeBlock :code="middlewareChain" language="dart" title="Middleware Chaining" />
    </DocSection>

    <!-- Accessing User Data -->
    <DocSection title="Accessing Authenticated User in Controllers">
      <template #description>
        After authentication middleware runs, user data is available in controllers
        through the request object.
      </template>
      <CodeBlock :code="accessingUser" language="dart" title="Accessing User Data" />
    </DocSection>

    <!-- Middleware Priority -->
    <DocSection title="Middleware Priority and Order">
      <template #description>
        Middleware can have priorities that determine execution order. Authentication
        middleware typically has high priority to run early in the request lifecycle.
      </template>
      <CodeBlock :code="middlewarePriority" language="dart" title="Setting Middleware Priority" />
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Priority</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Value</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Typical Use</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono">highest</td>
              <td class="px-6 py-4 text-sm">1000</td>
              <td class="px-6 py-4 text-sm">CORS, security headers</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">high</td>
              <td class="px-6 py-4 text-sm">750</td>
              <td class="px-6 py-4 text-sm">Session initialization</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">auth</td>
              <td class="px-6 py-4 text-sm">500</td>
              <td class="px-6 py-4 text-sm">Authentication</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">normal</td>
              <td class="px-6 py-4 text-sm">250</td>
              <td class="px-6 py-4 text-sm">Most middleware</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">low</td>
              <td class="px-6 py-4 text-sm">100</td>
              <td class="px-6 py-4 text-sm">Logging, analytics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocSection>

    <!-- Error Handling -->
    <DocSection title="Error Handling in Middleware">
      <template #description>
        Handle authentication errors gracefully with appropriate HTTP status codes
        and helpful error messages.
      </template>
      <CodeBlock :code="errorHandling" language="dart" title="Middleware Error Handling" />
    </DocSection>

    <!-- Best Practices -->
    <DocSection title="Middleware Best Practices">
      <template #description>
        Follow these guidelines for secure and maintainable authentication middleware.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use AuthMiddleware for APIs</li>
              <li>Use WebAuthMiddleware for web apps</li>
              <li>Chain middleware for complex rules</li>
              <li>Return proper HTTP status codes</li>
              <li>Log authentication failures</li>
              <li>Use middleware groups for organization</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Mix session and token auth in same route</li>
              <li>Expose sensitive errors to clients</li>
              <li>Skip authentication on sensitive routes</li>
              <li>Hard-code roles/permissions in middleware</li>
              <li>Forget to handle edge cases</li>
              <li>Use middleware without proper testing</li>
            </ul>
          </div>
        </div>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Authentication Middleware',
  meta: [{ name: 'description', content: 'Authentication middleware for route protection in Khadem' }]
});

const authMiddlewareBasic = `
import 'package:khadem/khadem.dart';

// Basic Bearer token authentication
class ApiController {
  static final authMiddleware = AuthMiddleware.bearer();

  static Future<void> profile(Request req, Response res) async {
    // User is already authenticated by middleware
    final user = req.authenticatable;

    if (user == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    res.sendJson({
      'user': user.toAuthArray(),
    });
  }
}

// Apply middleware to routes
void defineRoutes() {
  // Single route
  Route.get('/api/profile', ApiController.profile)
    .middleware([AuthMiddleware.bearer()]);

  // Route group
  Route.group(() {
    Route.get('/profile', ApiController.profile);
    Route.get('/settings', ApiController.settings);
    Route.post('/update', ApiController.update);
  }, middleware: [AuthMiddleware.bearer()]);
}
`;

const authMiddlewareTypes = `
import 'package:khadem/khadem.dart';

class AuthMiddlewareTypes {
  // Bearer token authentication (most common for APIs)
  static final bearer = AuthMiddleware.bearer();

  // Basic authentication (username:password in header)
  static final basic = AuthMiddleware.basic(realm: 'My API');

  // API key authentication (custom header)
  static final apiKey = AuthMiddleware.apiKey('X-API-Key');

  // Custom authentication
  static final custom = AuthMiddleware.custom(
    AuthType.bearer,
    authenticator: (request) async {
      final token = request.header('x-custom-token');
      if (token == null) return null;

      // Custom authentication logic
      final auth = AuthManager();
      return await auth.user(token);
    },
  );
}

// Usage examples
void defineRoutes() {
  // Bearer token
  Route.get('/api/v1/users', UserController.index)
    .middleware([AuthMiddlewareTypes.bearer]);

  // Basic auth
  Route.get('/api/legacy/data', LegacyController.data)
    .middleware([AuthMiddlewareTypes.basic]);

  // API key
  Route.post('/webhooks/stripe', WebhookController.stripe)
    .middleware([AuthMiddlewareTypes.apiKey]);

  // Custom auth
  Route.get('/api/special', SpecialController.data)
    .middleware([AuthMiddlewareTypes.custom]);
}
`;

const routeProtection = `
import 'package:khadem/khadem.dart';

void defineRoutes() {
  // Public routes (no middleware)
  Route.get('/', HomeController.index);
  Route.get('/about', HomeController.about);

  // API routes with authentication
  Route.group(() {
    Route.get('/profile', UserController.profile);
    Route.put('/profile', UserController.updateProfile);
    Route.post('/avatar', UserController.uploadAvatar);
    Route.delete('/account', UserController.deleteAccount);
  }, middleware: [AuthMiddleware.bearer()], prefix: '/api');

  // Admin routes with authentication
  Route.group(() {
    Route.get('/dashboard', AdminController.dashboard);
    Route.get('/users', AdminController.users);
    Route.post('/users/:id/ban', AdminController.banUser);
  }, middleware: [AuthMiddleware.bearer()], prefix: '/api/admin');

  // Mixed auth on different routes
  Route.get('/api/public/posts', PostController.index); // No auth
  Route.post('/api/posts', PostController.create) // Auth required
    .middleware([AuthMiddleware.bearer()]);
}
`;

const roleMiddleware = `
import 'package:khadem/khadem.dart';

class RoleProtectedRoutes {
  // Admin-only middleware
  static final adminAuth = AuthMiddleware.bearer()
    .withRoles(['admin']);

  // Admin or moderator
  static final moderatorAuth = AuthMiddleware.bearer()
    .withRoles(['admin', 'moderator']);

  // Editor only
  static final editorAuth = AuthMiddleware.bearer()
    .withRoles(['editor']);
}

void defineRoutes() {
  // Admin-only routes
  Route.group(() {
    Route.get('/users', AdminController.users);
    Route.delete('/users/:id', AdminController.deleteUser);
    Route.get('/logs', AdminController.logs);
  }, middleware: [RoleProtectedRoutes.adminAuth], prefix: '/api/admin');

  // Moderator routes (admin or moderator can access)
  Route.group(() {
    Route.get('/posts/flagged', ModerationController.flaggedPosts);
    Route.post('/posts/:id/approve', ModerationController.approve);
    Route.post('/posts/:id/reject', ModerationController.reject);
  }, middleware: [RoleProtectedRoutes.moderatorAuth], prefix: '/api/moderation');

  // Editor routes
  Route.group(() {
    Route.post('/posts/:id/publish', EditorController.publish);
    Route.post('/posts/:id/feature', EditorController.feature);
  }, middleware: [RoleProtectedRoutes.editorAuth], prefix: '/api/editor');
}

// Manual role checking in controller
class AdminController {
  static Future<void> users(Request req, Response res) async {
    final user = req.authenticatable?.toAuthArray();

    // Additional role check
    if (user?['role'] != 'admin') {
      return res.status(403).sendJson({
        'error': 'Insufficient privileges',
        'required_role': 'admin',
      });
    }

    // Admin logic here
    res.sendJson({'users': []});
  }
}
`;

const permissionMiddleware = `
import 'package:khadem/khadem.dart';

class PermissionProtectedRoutes {
  // User management permissions
  static final userManagement = AuthMiddleware.bearer()
    .withPermissions(['user.create', 'user.update', 'user.delete']);

  // Post publishing permission
  static final postPublish = AuthMiddleware.bearer()
    .withPermissions(['post.publish']);

  // Multiple permissions required
  static final contentManagement = AuthMiddleware.bearer()
    .withPermissions(['post.create', 'post.update', 'post.delete', 'post.publish']);
}

void defineRoutes() {
  // User management (requires all 3 permissions)
  Route.group(() {
    Route.post('/users', UserController.create);
    Route.put('/users/:id', UserController.update);
    Route.delete('/users/:id', UserController.delete);
  }, middleware: [PermissionProtectedRoutes.userManagement], prefix: '/api/admin');

  // Publishing (requires post.publish permission)
  Route.post('/api/posts/:id/publish', PostController.publish)
    .middleware([PermissionProtectedRoutes.postPublish]);

  // Content management (requires all 4 permissions)
  Route.group(() {
    Route.get('/posts', PostController.index);
    Route.post('/posts', PostController.create);
    Route.put('/posts/:id', PostController.update);
    Route.delete('/posts/:id', PostController.delete);
  }, middleware: [PermissionProtectedRoutes.contentManagement], prefix: '/api/content');
}

// Combining roles and permissions
class CombinedAuthRoutes {
  static final adminWithPermissions = AuthMiddleware.bearer()
    .withRoles(['admin'])
    .withPermissions(['user.manage', 'system.config']);
}

void defineAdminRoutes() {
  Route.group(() {
    Route.get('/settings', SystemController.settings);
    Route.put('/settings', SystemController.updateSettings);
  }, middleware: [CombinedAuthRoutes.adminWithPermissions], prefix: '/api/system');
}
`;

const webAuthMiddleware = `
import 'package:khadem/khadem.dart';

// Web authentication middleware for session-based auth
class WebAuthExamples {
  // Basic web auth - redirects to /login
  static final webAuth = WebAuthMiddleware.auth();

  // Custom redirect
  static final customAuth = WebAuthMiddleware.auth(
    redirectTo: '/signin',
  );

  // With excluded routes
  static final webAuthWithExcept = WebAuthMiddleware.auth(
    redirectTo: '/login',
    except: ['/profile/public', '/profile/avatar'],
  );

  // Using specific guard
  static final adminWebAuth = WebAuthMiddleware.auth(
    guard: 'admin-web',
    redirectTo: '/admin/login',
  );
}

void defineWebRoutes() {
  // Public routes
  Route.get('/login', AuthController.showLogin);
  Route.post('/login', AuthController.login);
  Route.get('/register', AuthController.showRegister);
  Route.post('/register', AuthController.register);

  // Protected web routes
  Route.group(() {
    Route.get('/dashboard', DashboardController.index);
    Route.get('/profile', ProfileController.show);
    Route.post('/profile/update', ProfileController.update);
    Route.get('/settings', SettingsController.show);
  }, middleware: [WebAuthExamples.webAuth]);

  // Admin web routes
  Route.group(() {
    Route.get('/dashboard', AdminController.dashboard);
    Route.get('/users', AdminController.users);
  }, middleware: [WebAuthExamples.adminWebAuth], prefix: '/admin');
}
`;

const webAuthRoutes = `
import 'package:khadem/khadem.dart';

class WebController {
  static Future<void> dashboard(Request req, Response res) async {
    // User is already authenticated by WebAuthMiddleware
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      // This shouldn't happen if middleware is working
      return res.redirect('/login');
    }

    final user = authenticatable.toAuthArray();

    await res.view('dashboard', data: {
      'user': user,
      'pageTitle': 'Dashboard',
    });
  }

  static Future<void> profile(Request req, Response res) async {
    final user = req.authenticatable?.toAuthArray();

    await res.view('profile', data: {
      'user': user,
      'pageTitle': 'My Profile',
    });
  }
}

// Storing intended URL before login
class LoginController {
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final auth = AuthManager(guard: 'web');
    final authResponse = await auth.attempt(data);

    // Store in session
    req.session.set('user_id', authResponse.user['id']);

    // Redirect to intended URL or dashboard
    final intended = req.session.pull('url.intended') ?? '/dashboard';
    res.redirect(intended.toString());
  }
}
`;

const guestMiddleware = `
import 'package:khadem/khadem.dart';

// Guest middleware - redirects authenticated users away
class GuestMiddlewareExamples {
  // Basic guest middleware
  static final guest = WebAuthMiddleware.guest();

  // Custom redirect for authenticated users
  static final guestWithRedirect = WebAuthMiddleware.guest(
    redirectTo: '/home',
  );

  // With exceptions
  static final guestWithExcept = WebAuthMiddleware.guest(
    redirectTo: '/dashboard',
    except: ['/login/reset-password'],
  );
}

void defineGuestRoutes() {
  // Guest-only routes (login, register)
  Route.group(() {
    Route.get('/login', AuthController.showLogin);
    Route.post('/login', AuthController.login);
    Route.get('/register', AuthController.showRegister);
    Route.post('/register', AuthController.register);
    Route.get('/forgot-password', AuthController.showForgotPassword);
  }, middleware: [GuestMiddlewareExamples.guest]);

  // If authenticated user tries to visit /login, they get redirected to /dashboard
}

// Example: Showing different content for guest vs authenticated
class HomeController {
  static Future<void> index(Request req, Response res) async {
    final isAuthenticated = req.authenticatable != null;

    await res.view('home', data: {
      'isAuthenticated': isAuthenticated,
      'user': isAuthenticated ? req.authenticatable?.toAuthArray() : null,
    });
  }
}
`;

const apiKeyMiddleware = `
import 'package:khadem/khadem.dart';

// API Key authentication examples
class ApiKeyExamples {
  // X-API-Key header
  static final apiKey = AuthMiddleware.apiKey('X-API-Key');

  // Custom header
  static final customHeader = AuthMiddleware.apiKey('X-Custom-API-Key');

  // Multiple API key middleware for different services
  static final stripeWebhook = AuthMiddleware.apiKey('X-Stripe-Signature');
  static final githubWebhook = AuthMiddleware.apiKey('X-Hub-Signature');
}

void defineWebhookRoutes() {
  // Stripe webhook with API key validation
  Route.post('/webhooks/stripe', WebhookController.stripe)
    .middleware([ApiKeyExamples.stripeWebhook]);

  // GitHub webhook
  Route.post('/webhooks/github', WebhookController.github)
    .middleware([ApiKeyExamples.githubWebhook]);

  // General API with API key
  Route.group(() {
    Route.get('/data', ApiController.getData);
    Route.post('/data', ApiController.postData);
  }, middleware: [ApiKeyExamples.apiKey], prefix: '/api/external');
}

// API key validation in custom middleware
class CustomApiKeyMiddleware extends Middleware {
  CustomApiKeyMiddleware() : super(_handle);

  static Future<void> _handle(Request req, Response res, NextFunction next) async {
    final apiKey = req.header('x-api-key');

    if (apiKey == null) {
      return res.status(401).sendJson({'error': 'API key required'});
    }

    // Validate API key against database
    final validKey = await ApiKey().query
      .where('key', '=', apiKey)
      .where('active', '=', true)
      .first();

    if (validKey == null) {
      return res.status(401).sendJson({'error': 'Invalid API key'});
    }

    // Attach API key info to request
    req.setAttribute('api_key', validKey.toJson());
    req.setAttribute('api_key_id', validKey.id);

    await next();
  }
}
`;

const basicAuthMiddleware = `
import 'package:khadem/khadem.dart';

// Basic authentication examples
class BasicAuthExamples {
  // Default basic auth
  static final basic = AuthMiddleware.basic();

  // Custom realm
  static final customRealm = AuthMiddleware.basic(realm: 'Admin Area');

  // With roles
  static final adminBasic = AuthMiddleware.basic(realm: 'Admin')
    .withRoles(['admin']);
}

void defineBasicAuthRoutes() {
  // Protected with basic auth
  Route.get('/api/legacy/users', LegacyController.users)
    .middleware([BasicAuthExamples.basic]);

  // Admin panel with basic auth
  Route.group(() {
    Route.get('/dashboard', AdminController.dashboard);
    Route.get('/users', AdminController.users);
  }, middleware: [BasicAuthExamples.adminBasic], prefix: '/admin');
}

// Client sends credentials like this:
// Authorization: Basic base64(username:password)
// Example: Authorization: Basic YWRtaW46cGFzc3dvcmQ=

// How to test basic auth with curl:
// curl -u username:password http://localhost:3000/api/legacy/users
`;

const customMiddleware = `
import 'package:khadem/khadem.dart';

/// Custom OAuth middleware example
class OAuthMiddleware extends Middleware {
  OAuthMiddleware() : super(_handle, priority: MiddlewarePriority.auth);

  static Future<void> _handle(Request req, Response res, NextFunction next) async {
    try {
      // Extract OAuth token
      final oauthToken = req.header('x-oauth-token');

      if (oauthToken == null) {
        return res.status(401).sendJson({'error': 'OAuth token required'});
      }

      // Verify with OAuth provider
      final userInfo = await _verifyOAuthToken(oauthToken);

      // Find or create user
      final user = await _findOrCreateUser(userInfo);

      // Attach to request
      req.setAuthenticatable(user);

      await next();
    } catch (e) {
      res.status(401).sendJson({
        'error': 'OAuth authentication failed',
        'message': e.toString(),
      });
    }
  }

  static Future<Map<String, dynamic>> _verifyOAuthToken(String token) async {
    // Verify token with OAuth provider (Google, GitHub, etc.)
    // This is a placeholder
    return {'email': 'user@example.com', 'name': 'User'};
  }

  static Future<User> _findOrCreateUser(Map<String, dynamic> userInfo) async {
    // Find existing user or create new one
    final user = await User().query
      .where('email', '=', userInfo['email'])
      .first();

    if (user != null) {
      return user;
    }

    // Create new user
    final newUser = User()
      ..fromJson({
        'email': userInfo['email'],
        'name': userInfo['name'],
        'email_verified_at': DateTime.now().toIso8601String(),
      });

    await newUser.save();
    return newUser;
  }
}

// Two-factor authentication middleware
class TwoFactorMiddleware extends Middleware {
  TwoFactorMiddleware() : super(_handle, priority: MiddlewarePriority.auth);

  static Future<void> _handle(Request req, Response res, NextFunction next) async {
    // User must be authenticated first
    final user = req.authenticatable;

    if (user == null) {
      return res.status(401).sendJson({'error': 'Authentication required'});
    }

    final userData = user.toAuthArray();

    // Check if 2FA is enabled for this user
    if (userData['two_factor_enabled'] != true) {
      return next(); // 2FA not enabled, proceed
    }

    // Check if 2FA is verified for this session
    final twoFactorVerified = req.session.get('two_factor_verified');

    if (twoFactorVerified == true) {
      return next(); // Already verified
    }

    // Require 2FA verification
    return res.status(403).sendJson({
      'error': 'Two-factor authentication required',
      'two_factor_required': true,
    });
  }
}

// Usage
void defineCustomAuthRoutes() {
  // OAuth protected routes
  Route.group(() {
    Route.get('/profile', UserController.profile);
  }, middleware: [OAuthMiddleware()]);

  // 2FA protected routes
  Route.group(() {
    Route.get('/sensitive-data', UserController.sensitiveData);
    Route.post('/transfer', UserController.transfer);
  }, middleware: [
    AuthMiddleware.bearer(),
    TwoFactorMiddleware(),
  ]);
}
`;

const middlewareChain = `
import 'package:khadem/khadem.dart';

// Chaining multiple middleware
void defineChainedRoutes() {
  // Multiple middleware in sequence
  Route.group(() {
    Route.get('/admin/users', AdminController.users);
    Route.post('/admin/users/:id/ban', AdminController.banUser);
  }, middleware: [
    AuthMiddleware.bearer(),              // 1. Authenticate
    RoleMiddleware(['admin']),            // 2. Check role
    PermissionMiddleware(['user.manage']), // 3. Check permission
    AuditMiddleware(),                    // 4. Log action
  ]);

  // Different middleware for different routes in same group
  Route.group(() {
    // Public in group
    Route.get('/posts', PostController.index);

    // Authenticated required
    Route.post('/posts', PostController.create)
      .middleware([AuthMiddleware.bearer()]);

    // Admin only
    Route.delete('/posts/:id', PostController.delete)
      .middleware([
        AuthMiddleware.bearer().withRoles(['admin'])
      ]);
  }, prefix: '/api');
}

// Custom middleware chain
class MiddlewareChains {
  // Admin with audit logging
  static final adminWithAudit = [
    AuthMiddleware.bearer().withRoles(['admin']),
    AuditMiddleware(),
  ];

  // User with rate limiting
  static final userWithRateLimit = [
    AuthMiddleware.bearer(),
    RateLimitMiddleware(maxRequests: 100, windowMinutes: 1),
  ];

  // Public with CORS
  static final publicApi = [
    CorsMiddleware(),
    RateLimitMiddleware(maxRequests: 1000, windowMinutes: 1),
  ];
}

// Usage
void defineMiddlewareChainRoutes() {
  Route.group(() {
    Route.get('/users', AdminController.users);
  }, middleware: MiddlewareChains.adminWithAudit);

  Route.group(() {
    Route.get('/profile', UserController.profile);
  }, middleware: MiddlewareChains.userWithRateLimit);
}
`;

const accessingUser = `
import 'package:khadem/khadem.dart';

class UserController {
  /// Accessing authenticated user from request
  static Future<void> profile(Request req, Response res) async {
    // Method 1: Using authenticatable (recommended)
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final user = authenticatable.toAuthArray();

    res.sendJson({
      'id': user['id'],
      'name': user['name'],
      'email': user['email'],
      'role': user['role'],
    });
  }

  /// Accessing user ID directly
  static Future<void> getUserPosts(Request req, Response res) async {
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();

    // Fetch user's posts
    final posts = await Post().query
      .where('user_id', '=', userId)
      .orderBy('created_at', 'desc')
      .get();

    res.sendJson({
      'posts': posts.map((p) => p.toJson()).toList(),
    });
  }

  /// Type-safe user access with model
  static Future<void> updateProfile(Request req, Response res) async {
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    // Get full user model from database
    final userId = authenticatable.getAuthIdentifier();
    final user = await User().query.where('id', '=', userId).first();

    if (user == null) {
      return res.status(404).sendJson({'error': 'User not found'});
    }

    // Update user
    final data = await req.validate({
      'name': 'required',
      'bio': 'nullable',
    });

    user.fromJson(data);
    await user.save();

    res.sendJson({
      'message': 'Profile updated',
      'user': user.toJson(),
    });
  }

  /// Checking user permissions
  static Future<void> deletePost(Request req, Response res) async {
    final postId = req.param('id');
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final user = authenticatable.toAuthArray();
    final post = await Post().query.where('id', '=', postId).first();

    if (post == null) {
      return res.status(404).sendJson({'error': 'Post not found'});
    }

    // Check if user owns the post or is admin
    if (post.userId != user['id'] && user['role'] != 'admin') {
      return res.status(403).sendJson({'error': 'Forbidden'});
    }

    await post.delete();

    res.sendJson({'message': 'Post deleted'});
  }
}
`;

const middlewarePriority = `
import 'package:khadem/khadem.dart';

// Middleware with different priorities
class PriorityMiddleware {
  // High priority - runs first
  static final cors = Middleware(
    (req, res, next) async {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      await next();
    },
    priority: MiddlewarePriority.highest,
    name: 'cors',
  );

  // Authentication priority
  static final auth = AuthMiddleware.bearer(); // Default priority: auth (500)

  // Normal priority - runs after auth
  static final logging = Middleware(
    (req, res, next) async {
      print('Request: \${req.method} \${req.path}');
      await next();
    },
    priority: MiddlewarePriority.normal,
    name: 'logging',
  );

  // Low priority - runs last
  static final analytics = Middleware(
    (req, res, next) async {
      // Track analytics
      await next();
    },
    priority: MiddlewarePriority.low,
    name: 'analytics',
  );
}

// Execution order: cors -> auth -> logging -> analytics
void defineRoutes() {
  Route.group(() {
    Route.get('/users', UserController.index);
  }, middleware: [
    PriorityMiddleware.analytics,  // Will run last (priority: 100)
    PriorityMiddleware.auth,       // Will run second (priority: 500)
    PriorityMiddleware.logging,    // Will run third (priority: 250)
    PriorityMiddleware.cors,       // Will run first (priority: 1000)
  ]);
}

// Custom priority values
class CustomPriorityMiddleware extends Middleware {
  CustomPriorityMiddleware()
      : super(
          _handle,
          priority: const MiddlewarePriority(600), // Custom value
          name: 'custom-auth',
        );

  static Future<void> _handle(Request req, Response res, NextFunction next) async {
    // Custom logic
    await next();
  }
}
`;

const errorHandling = `
import 'package:khadem/khadem.dart';

class AuthErrorMiddleware extends Middleware {
  AuthErrorMiddleware() : super(_handle);

  static Future<void> _handle(Request req, Response res, NextFunction next) async {
    try {
      final token = req.header('authorization')?.replaceFirst('Bearer ', '');

      if (token == null) {
        throw AuthException('Token required', statusCode: 401);
      }

      final auth = AuthManager();
      final user = await auth.user(token);

      req.setAuthenticatable(user);
      await next();
    } on AuthException catch (e) {
      // Handle authentication exceptions
      _handleAuthError(res, e);
    } on ValidationException catch (e) {
      // Handle validation errors
      res.status(422).sendJson({
        'error': 'Validation failed',
        'errors': e.errors,
      });
    } catch (e) {
      // Handle unexpected errors
      res.status(500).sendJson({
        'error': 'Internal server error',
        'message': env('APP_DEBUG') == 'true' ? e.toString() : 'An error occurred',
      });
    }
  }

  static void _handleAuthError(Response res, AuthException error) {
    final statusCode = error.statusCode;

    res.status(statusCode).sendJson({
      'error': _getErrorType(statusCode),
      'message': error.message,
      'code': statusCode,
    });
  }

  static String _getErrorType(int statusCode) {
    switch (statusCode) {
      case 401:
        return 'Unauthenticated';
      case 403:
        return 'Forbidden';
      case 422:
        return 'Validation Error';
      default:
        return 'Authentication Error';
    }
  }
}

// Graceful error responses
class ApiErrorResponses {
  static Map<String, dynamic> unauthenticated({String? message}) {
    return {
      'error': 'Unauthenticated',
      'message': message ?? 'Authentication required',
      'code': 401,
    };
  }

  static Map<String, dynamic> forbidden({String? message}) {
    return {
      'error': 'Forbidden',
      'message': message ?? 'You do not have permission to access this resource',
      'code': 403,
    };
  }

  static Map<String, dynamic> invalidToken({String? message}) {
    return {
      'error': 'Invalid Token',
      'message': message ?? 'The provided token is invalid or expired',
      'code': 401,
    };
  }
}
`;
</script>
