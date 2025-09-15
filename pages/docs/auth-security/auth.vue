<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Authentication</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Khadem provides a comprehensive authentication system with support for JWT and token-based authentication.
        The system is built with security, flexibility, and ease of use in mind.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">Multi-Driver Support</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">JWT, Token, and extensible custom drivers</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Secure by Default</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Built-in security features and best practices</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Flexible Configuration</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Guard-based authentication with multiple providers</p>
        </div>
      </div>
    </header>

    <!-- Setup -->
    <!-- <DocSection title="Setup and Configuration">
      <template #description>
        Setting up authentication in your Khadem application involves registering the AuthServiceProvider
        and configuring your authentication guards and providers.
      </template>
      <CodeBlock :code="setupCode" language="dart" title="Basic Setup" />
      <CodeBlock :code="configCode" language="dart" title="Configuration" />
    </DocSection> -->

    <!-- Auth Manager -->
    <DocSection title="AuthManager - Main Authentication Interface">
      <template #description>
        The AuthManager provides a unified interface for all authentication operations.
        It supports multiple guards and drivers for flexible authentication scenarios.
      </template>
      <CodeBlock :code="authManagerCode" language="dart" title="Using AuthManager" />
      <CodeBlock :code="loginExample" language="dart" title="Login Example" />
    </DocSection>

    <!-- Web Authentication -->
    <DocSection title="Web Authentication">
      <template #description>
        For web applications, Khadem provides session-based authentication with WebAuthService
        and WebAuthMiddleware for protecting routes and managing user sessions.
      </template>
      <CodeBlock :code="webAuthController" language="dart" title="WebAuthController" />
      <CodeBlock :code="webAuthMiddleware" language="dart" title="WebAuthMiddleware" />
    </DocSection>

    <!-- User Model -->
    <!-- <DocSection title="User Model with Authentication">
      <template #description>
        Your user model should implement the Authenticatable interface to work with Khadem's
        authentication system. This provides methods for authentication and user data management.
      </template>
      <CodeBlock :code="userModelCode" language="dart" title="User Model Implementation" />
    </DocSection> -->

    <!-- Middleware -->
    <DocSection title="Authentication Middleware">
      <template #description>
        Protect your routes with authentication middleware. The AuthMiddleware automatically
        validates Bearer tokens and attaches user data to requests.
      </template>
      <CodeBlock :code="middlewareCode" language="dart" title="AuthMiddleware Usage" />
      <CodeBlock :code="routeProtection" language="dart" title="Route Protection" />
    </DocSection>

    <!-- Guards and Drivers -->
    <DocSection title="Guards and Authentication Drivers">
      <template #description>
        Khadem supports multiple authentication guards and drivers. Guards define authentication
        contexts, while drivers handle the actual authentication logic.
      </template>
      <CodeBlock :code="guardsCode" language="dart" title="Multiple Guards" />
      <CodeBlock :code="jwtDriver" language="dart" title="JWT Driver" />
    </DocSection>

    <!-- Token Management -->
    <DocSection title="Token Management">
      <template #description>
        Khadem provides comprehensive token management including refresh tokens,
        token verification, and secure token generation.
      </template>
      <CodeBlock :code="tokenRefresh" language="dart" title="Token Refresh" />
      <CodeBlock :code="tokenVerification" language="dart" title="Token Verification" />
    </DocSection>

    <!-- Error Handling -->
    <DocSection title="Error Handling">
      <template #description>
        Proper error handling is crucial for authentication. Khadem provides specific
        exceptions and comprehensive error responses.
      </template>
      <CodeBlock :code="errorHandling" language="dart" title="Authentication Errors" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Authentication',
  meta: [{ name: 'description', content: 'Authentication system and user management in Khadem' }]
});

const setupCode = `
// main.dart or app bootstrap
import 'package:khadem/khadem_dart.dart';

void main() async {
  // Initialize Khadem application
  await Khadem.initialize();

  // Register Auth Service Provider
  Khadem.container.register(AuthServiceProvider());

  // Boot the application
  await Khadem.boot();

  print('Khadem app with authentication ready!');
}
`;

const configCode = `
// config/auth.dart
const authConfig = {
  'default': 'users',
  'guards': {
    'users': {'driver': 'token', 'provider': 'users'},
    'admins': {'driver': 'token', 'provider': 'admins'},
  },
  'providers': {
    'users': {
      'table': 'users',
      'primary_key': 'id',
      'fields': ['email'],
    },
    'admins': {
      'table': 'admins',
      'primary_key': 'id',
      'fields': ['email'],
    },
  },
};
`;

const authManagerCode = `
import 'package:khadem/khadem_dart.dart';

class AuthController {
  final AuthManager auth;

  AuthController.singleton({String? guard})
      : auth = AuthManager(guard: guard);

  static AuthController instance = AuthController.singleton();
  factory AuthController() => instance;

  Future<Map<String, dynamic>> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final payload = await auth.login(data);

    return {
      'message': 'Login successful',
      'data': {
        'token': payload['token'],
        'user': payload['user'],
      }
    };
  }

  Future<Map<String, dynamic>> register(Request req, Response res) async {
    final data = await req.validate({
      'name': 'required',
      'email': 'required|email',
      'password': 'required|min:6|confirmed',
    });

    data['password'] = HashHelper.hash(data['password']);

    final user = User()..fromJson(data);
    await user.save();

    final payload = await auth.login({
      'email': data['email'],
      'password': req.input('password'),
    });

    return {
      'message': 'User registered successfully',
      'data': {
        'token': payload['token'],
        'user': user,
      }
    };
  }
}
`;

const loginExample = `
import 'package:khadem/khadem_dart.dart';

class AuthController {
  static Future<Map<String, dynamic>> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final auth = AuthManager();
    final payload = await auth.login(data);

    res.sendJson({
      'message': 'Login successful',
      'data': {
        'token': payload['token'],
        'user': User()..fromJson(payload['user']),
      }
    });
  }
}
`;

const webAuthController = `
import 'package:khadem/khadem_dart.dart';

class WebAuthController {
  WebAuthController.singleton();
  static WebAuthController instance = WebAuthController.singleton();
  factory WebAuthController() => instance;

  Future<void> showLogin(Request req, Response res) async {
    await res.view('login');
  }

  Future<void> showRegister(Request req, Response res) async {
    await res.view('register');
  }

  Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
      'remember': 'nullable|boolean',
    });

    final webAuth = WebAuthService();
    await webAuth.attemptLogin({
      'email': data['email'],
      'password': data['password'],
    }, remember: data['remember'] == true);

    final intended = req.input('intended') ?? '/dashboard';
    await res.redirect(intended);
  }

  Future<void> register(Request req, Response res) async {
    final data = await req.validate({
      'name': 'required',
      'email': 'required|email',
      'password': 'required|min:6|confirmed',
    });

    data['password'] = HashHelper.hash(data['password']);
    final user = User()..fromJson(data);
    await user.save();

    final webAuth = WebAuthService();
    await webAuth.attemptLogin({
      'email': data['email'],
      'password': req.input('password'),
    }, remember: false);

    await res.redirect('/dashboard');
  }

  Future<void> dashboard(Request req, Response res) async {
    final webAuth = WebAuthService();
    final isAuthenticated = await webAuth.isAuthenticated(req);

    if (!isAuthenticated) {
      return res.redirect('/login');
    }

    final user = User()..fromJson((await webAuth.getCurrentUser(req)) ?? {});
    await res.view('dashboard', data: {'user': user.toJson()});
  }

  Future<void> logout(Request req, Response res) async {
    final webAuth = WebAuthService();
    await webAuth.logout(req, res);
    await res.redirect('/login');
  }
}
`;

const webAuthMiddleware = `
import 'package:khadem/khadem_dart.dart';

class WebAuthMiddleware {
  static Middleware auth({
    String redirectTo = '/login',
    List<String> except = const [],
  }) {
    final authService = WebAuthService();

    return Middleware((Request req, Response res, NextFunction next) async {
      if (_isExcluded(req.path, except)) {
        return next();
      }

      if (!authService.isAuthenticated(req)) {
        req.session.set('url.intended', req.uri.toString());
        req.session.flash('message', 'Please log in to continue');
        res.redirect(redirectTo);
        return;
      }

      await _ensureUserContext(req, authService, redirectTo);
      return next();
    });
  }

  static Middleware guest({
    String redirectTo = '/dashboard',
    List<String> except = const [],
  }) {
    final authService = WebAuthService();

    return Middleware((Request req, Response res, NextFunction next) async {
      if (_isExcluded(req.path, except)) {
        return next();
      }

      if (authService.isAuthenticated(req)) {
        res.redirect(redirectTo);
        return;
      }

      return next();
    });
  }

  static bool _isExcluded(String path, List<String> except) {
    return except.any((route) => path.startsWith(route));
  }

  static Future<void> _ensureUserContext(
    Request req,
    WebAuthService authService,
    String redirectTo,
  ) async {
    if (req.user == null) {
      final user = await authService.getCurrentUser(req);
      if (user != null) {
        req.setUser(user);
      }
    }
  }
}
`;

const userModelCode = `
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

  // Helper methods
  bool get isEmailVerified => emailVerifiedAt != null;

  Future<void> markEmailAsVerified() async {
    emailVerifiedAt = DateTime.now();
    await save();
  }

  Map<String, dynamic> toAuthArray() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'email_verified_at': emailVerifiedAt?.toIso8601String(),
      'created_at': createdAt?.toIso8601String(),
    };
  }
}
`;

const middlewareCode = `
import 'package:khadem/khadem_dart.dart';

class AuthMiddleware extends Middleware {
  AuthMiddleware() : super(_handleAuth);

  static Future<void> _handleAuth(Request req, Response res, NextFunction next) async {
    try {
      final authHeader = _extractAuthHeader(req);
      final token = _extractBearerToken(authHeader);
      final user = await _verifyToken(token);
      _attachUserToRequest(req, user);
      await next();
    } catch (e) {
      throw AuthException('Authentication failed: ${e.toString()}');
    }
  }

  static String _extractAuthHeader(Request request) {
    final authHeader = request.header('authorization');
    if (authHeader == null || authHeader.isEmpty) {
      throw AuthException('Missing authorization header');
    }
    return authHeader;
  }

  static String _extractBearerToken(String authHeader) {
    if (!authHeader.startsWith('Bearer ')) {
      throw AuthException('Invalid authorization header format');
    }
    final token = authHeader.replaceFirst('Bearer ', '').trim();
    if (token.isEmpty) {
      throw AuthException('Empty token provided');
    }
    return token;
  }

  static Future<Map<String, dynamic>> _verifyToken(String token) async {
    final authManager = Khadem.container.resolve<AuthManager>();
    return authManager.verify(token);
  }

  static void _attachUserToRequest(Request request, Map<String, dynamic> user) {
    request.setAttribute('user', user);
    request.setAttribute('userId', user['id']);
    request.setAttribute('isAuthenticated', true);
  }
}
`;

const routeProtection = `
// routes/web.dart
import 'package:khadem/khadem_dart.dart';

void defineRoutes() {
  // Public routes
  Route.get('/login', AuthController.showLoginForm);
  Route.post('/login', AuthController.login);
  Route.get('/register', AuthController.showRegister);
  Route.post('/register', AuthController.register);

  // API routes with AuthMiddleware
  Route.group(() {
    Route.get('/api/profile', AuthController.profile);
    Route.put('/api/profile', AuthController.updateProfile);
    Route.post('/api/logout', AuthController.logout);
  }, middleware: [AuthMiddleware()]);

  // Web routes with WebAuthMiddleware
  Route.group(() {
    Route.get('/dashboard', WebAuthController.dashboard);
    Route.get('/chat', WebAuthController.chat);
  }, middleware: [WebAuthMiddleware.auth()]);
}
`;

const guardsCode = `
import 'package:khadem/khadem_dart.dart';

// Using different guards
class MultiGuardController {
  static Future<Map<String, dynamic>> adminLogin(Request req, Response res) async {
    final adminAuth = AuthManager(guard: 'admins');
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final result = await adminAuth.login(data);

    res.sendJson({
      'message': 'Admin login successful',
      'data': {
        'token': result['token'],
        'user': result['user'],
        'guard': 'admins',
      }
    });
  }

  static Future<Map<String, dynamic>> userLogin(Request req, Response res) async {
    final userAuth = AuthManager(guard: 'users');
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final result = await userAuth.login(data);

    res.sendJson({
      'message': 'User login successful',
      'data': {
        'token': result['token'],
        'user': result['user'],
        'guard': 'users',
      }
    });
  }
}
`;

const jwtDriver = `
import 'package:khadem/khadem_dart.dart';

class JWTAuthController {
  static Future<Map<String, dynamic>> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final jwtService = JWTAuthService.create('users');
    final result = await jwtService.attemptLogin(data);

    res.sendJson({
      'message': 'JWT login successful',
      'data': {
        'token': result['access_token'],
        'user': result['user'],
        'expires_in': result['expires_in'],
      }
    });
  }
}
`;

const tokenRefresh = `
import 'package:khadem/khadem_dart.dart';

class TokenController {
  static Future<Map<String, dynamic>> refreshToken(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null || refreshToken.isEmpty) {
      return res.status(400).sendJson({
        'error': 'Refresh token is required'
      });
    }

    final auth = AuthManager();
    final result = await auth.refreshAccessToken(refreshToken);

    res.sendJson({
      'message': 'Token refreshed successfully',
      'data': {
        'access_token': result['access_token'],
        'refresh_token': result['refresh_token'],
        'token_type': result['token_type'],
        'expires_in': result['expires_in'],
      }
    });
  }
}
`;

const tokenVerification = `
import 'package:khadem/khadem_dart.dart';

class AuthVerificationController {
  static Future<Map<String, dynamic>> verifyToken(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null || token.isEmpty) {
      return res.status(401).sendJson({
        'error': 'Token is required'
      });
    }

    final auth = AuthManager();
    final user = await auth.verify(token);

    res.sendJson({
      'message': 'Token is valid',
      'data': {
        'user': user,
        'valid': true,
      }
    });
  }
}
`;

const errorHandling = `
import 'package:khadem/khadem_dart.dart';

class AuthErrorHandler {
  static Future<Map<String, dynamic>> handleAuthError(Request req, dynamic error) async {
    if (error is AuthException) {
      final statusCode = error.statusCode ?? 401;
      return {
        'success': false,
        'error': error.message,
        'code': error.code ?? 'AUTH_ERROR',
        'status_code': statusCode,
      };
    }

    // Handle other authentication-related errors
    if (error.toString().contains('token')) {
      return {
        'success': false,
        'error': 'Authentication token error',
        'code': 'TOKEN_ERROR',
        'status_code': 401,
      };
    }

    if (error.toString().contains('credentials')) {
      return {
        'success': false,
        'error': 'Invalid credentials',
        'code': 'INVALID_CREDENTIALS',
        'status_code': 401,
      };
    }

    return {
      'success': false,
      'error': 'Authentication failed',
      'code': 'AUTH_FAILED',
      'status_code': 500,
    };
  }
}

// Usage in controller
class AuthController {
  static Future<Map<String, dynamic>> login(Request req, Response res) async {
    try {
      final data = await req.validate({
        'email': 'required|email',
        'password': 'required|min:6',
      });

      final auth = AuthManager();
      final result = await auth.login(data);

      res.sendJson({
        'success': true,
        'data': result,
      });
    } catch (e) {
      final errorResponse = await AuthErrorHandler.handleAuthError(req, e);
      res.status(errorResponse['status_code']).sendJson(errorResponse);
    }
  }
}
`;
</script>
