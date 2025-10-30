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
    <DocSection title="Setup and Configuration">
      <template #description>
        Setting up authentication in your Khadem application involves registering the AuthServiceProvider
        and configuring your authentication guards and providers.
      </template>
      <CodeBlock :code="setupCode" language="dart" title="Basic Setup" />
      <CodeBlock :code="configCode" language="dart" title="Configuration" />
    </DocSection>

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
    <DocSection title="User Model with Authentication">
      <template #description>
        Your user model should implement the Authenticatable interface to work with Khadem's
        authentication system. This provides methods for authentication and user data management.
      </template>
      <CodeBlock :code="userModelCode" language="dart" title="User Model Implementation" />
    </DocSection>

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
import 'package:khadem/khadem.dart';

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
import 'package:khadem/khadem.dart';

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

    // AuthManager.attempt() returns AuthResponse
    final authResponse = await auth.attempt(data);

    return {
      'message': 'Login successful',
      'data': authResponse.toMap(), // Contains user, access_token, refresh_token, etc.
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

    // Authenticate after registration
    final authResponse = await auth.attempt({
      'email': data['email'],
      'password': req.input('password'),
    });

    return {
      'message': 'User registered successfully',
      'data': authResponse.toMap(),
    };
  }

  Future<Map<String, dynamic>> profile(Request req, Response res) async {
    // Get authenticated user from request
    final authenticatable = req.authenticatable;
    if (authenticatable == null) {
      throw AuthException('User not authenticated');
    }

    return {
      'message': 'Profile retrieved',
      'data': {'user': authenticatable.toAuthArray()},
    };
  }
}
`;

const loginExample = `
import 'package:khadem/khadem.dart';

class AuthController {
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final auth = AuthManager();
    final authResponse = await auth.attempt(data);

    res.sendJson({
      'message': 'Login successful',
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': authResponse.tokenType,
        'expires_in': authResponse.expiresIn,
        'user': authResponse.user,
      }
    });
  }

  static Future<void> verifyToken(Request req, Response res) async {
    // Get token from Authorization header
    final authHeader = req.header('authorization');
    final token = authHeader?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    final auth = AuthManager();
    final user = await auth.user(token);

    res.sendJson({
      'message': 'Token is valid',
      'data': {'user': user.toAuthArray()},
    });
  }
}
`;

const webAuthController = `
import 'package:khadem/khadem.dart';

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

    // Use AuthManager with 'web' guard for session-based auth
    final auth = AuthManager(guard: 'web');
    final authResponse = await auth.attempt({
      'email': data['email'],
      'password': data['password'],
    });

    // Store user and tokens in session
    req.session.set('user_id', authResponse.user['id']);
    req.session.set('access_token', authResponse.accessToken);
    
    if (authResponse.refreshToken != null) {
      req.session.set('refresh_token', authResponse.refreshToken);
    }

    // Handle remember me
    if (data['remember'] == true && authResponse.refreshToken != null) {
      res.cookieHandler.set(
        'remember_token',
        authResponse.refreshToken!,
        maxAge: const Duration(days: 30),
        httpOnly: true,
        secure: true,
      );
    }

    final intended = req.session.get('url.intended') ?? '/dashboard';
    req.session.remove('url.intended');
    res.redirect(intended.toString());
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

    // Auto-login after registration
    final auth = AuthManager(guard: 'web');
    final authResponse = await auth.attempt({
      'email': data['email'],
      'password': req.input('password'),
    });

    req.session.set('user_id', authResponse.user['id']);
    req.session.set('access_token', authResponse.accessToken);

    res.redirect('/dashboard');
  }

  Future<void> dashboard(Request req, Response res) async {
    // User is already authenticated by WebAuthMiddleware
    final authenticatable = req.authenticatable;
    
    if (authenticatable == null) {
      return res.redirect('/login');
    }

    final user = authenticatable.toAuthArray();
    await res.view('dashboard', data: {'user': user});
  }

  Future<void> logout(Request req, Response res) async {
    // Get current token to invalidate
    final token = req.session.get('access_token') as String?;
    
    if (token != null) {
      try {
        final auth = AuthManager(guard: 'web');
        await auth.logout(token);
      } catch (e) {
        // Log error but continue logout
      }
    }

    // Clear session and cookies
    req.session.remove('user_id');
    req.session.remove('access_token');
    req.session.remove('refresh_token');
    res.cookieHandler.delete('remember_token');
    
    req.session.flash('message', 'Successfully logged out');
    res.redirect('/login');
  }
}
`;

const webAuthMiddleware = `
import 'package:khadem/khadem.dart';

// Use the built-in WebAuthMiddleware from Khadem
class WebAuthMiddleware {
  /// Middleware for authenticated routes
  static Middleware auth({
    String redirectTo = '/login',
    List<String> except = const [],
    String guard = 'web',
  }) {
    return WebAuthMiddleware.create(
      redirectTo: redirectTo,
      except: except,
      guard: guard,
    );
  }

  /// Middleware for guest-only routes (redirects authenticated users)
  static Middleware guest({
    String redirectTo = '/dashboard',
    List<String> except = const [],
    String guard = 'web',
  }) {
    return WebAuthMiddleware.guest(
      redirectTo: redirectTo,
      except: except,
      guard: guard,
    );
  }

  /// Middleware for admin-only routes
  static Middleware admin({
    String redirectTo = '/login',
    List<String> except = const [],
    String guard = 'web',
  }) {
    return WebAuthMiddleware.admin(
      redirectTo: redirectTo,
      except: except,
      guard: guard,
    );
  }

  /// Custom middleware example with role checking
  static Middleware requireRole(String role, {
    String redirectTo = '/dashboard',
  }) {
    return Middleware((Request req, Response res, NextFunction next) async {
      final user = req.authenticatable;
      
      if (user == null) {
        return res.redirect('/login');
      }

      final userData = user.toAuthArray();
      final userRole = userData['role'] as String?;
      
      if (userRole != role) {
        req.session.flash('error', 'Access denied');
        return res.redirect(redirectTo);
      }

      return next();
    });
  }
}
`;

const userModelCode = `
import 'package:khadem/khadem.dart';

class User extends KhademModel<User> implements Authenticatable {
  String? name;
  String? email;
  String? password;
  String? role;
  DateTime? emailVerifiedAt;
  DateTime? createdAt;
  DateTime? updatedAt;

  User({
    this.name,
    this.email,
    this.password,
    this.role,
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
    'role',
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
  String? getAuthPassword() => password;

  @override
  Map<String, dynamic> toAuthArray() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'role': role,
      'email_verified_at': emailVerifiedAt?.toIso8601String(),
      'created_at': createdAt?.toIso8601String(),
      'updated_at': updatedAt?.toIso8601String(),
    };
  }

  @override
  User newFactory(Map<String, dynamic> data) {
    return User(
      id: data['id'],
      name: data['name'],
      email: data['email'],
      password: data['password'],
      role: data['role'],
      emailVerifiedAt: data['email_verified_at'] is DateTime
          ? data['email_verified_at']
          : (data['email_verified_at'] is String
              ? DateTime.tryParse(data['email_verified_at'])
              : null),
    );
  }

  @override
  Object? getField(String key) {
    switch (key) {
      case 'id': return id;
      case 'name': return name;
      case 'email': return email;
      case 'password': return password;
      case 'role': return role;
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
      case 'role': role = value; break;
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

  bool hasRole(String roleToCheck) => role == roleToCheck;
}
`;

const middlewareCode = `
import 'package:khadem/khadem.dart';

// Use the built-in AuthMiddleware from Khadem
class ApiAuthExample {
  /// Bearer token authentication (default)
  static final bearerAuth = AuthMiddleware.bearer();

  /// Bearer token with role requirement
  static final adminAuth = AuthMiddleware.bearer()
    .withRoles(['admin']);

  /// Bearer token with permissions
  static final userManagement = AuthMiddleware.bearer()
    .withPermissions(['user.create', 'user.update']);

  /// API key authentication
  static final apiKeyAuth = AuthMiddleware.apiKey('X-API-Key');

  /// Basic authentication
  static final basicAuth = AuthMiddleware.basic(realm: 'My API');

  /// Custom authentication
  static final customAuth = AuthMiddleware.custom(
    AuthType.bearer,
    authenticator: (request) async {
      // Custom authentication logic
      final token = request.header('x-custom-token');
      if (token == null) return null;
      
      // Verify token and return user
      final auth = AuthManager();
      return await auth.user(token);
    },
  );
}

// Accessing authenticated user in controller
class UserController {
  static Future<void> getProfile(Request req, Response res) async {
    // Get authenticated user (set by AuthMiddleware)
    final authenticatable = req.authenticatable;
    
    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final user = authenticatable.toAuthArray();
    
    res.sendJson({
      'message': 'Profile retrieved',
      'data': {'user': user},
    });
  }
}
`;

const routeProtection = `
// routes/web.dart
import 'package:khadem/khadem.dart';

void defineRoutes() {
  // Public routes
  Route.get('/login', WebAuthController.showLogin);
  Route.post('/login', WebAuthController.login);
  Route.get('/register', WebAuthController.showRegister);
  Route.post('/register', WebAuthController.register);

  // API routes with Bearer token authentication
  Route.group(() {
    Route.get('/api/profile', ApiController.profile);
    Route.put('/api/profile', ApiController.updateProfile);
    Route.post('/api/logout', ApiController.logout);
    Route.get('/api/users', ApiController.listUsers);
  }, middleware: [AuthMiddleware.bearer()]);

  // Admin API routes with role requirement
  Route.group(() {
    Route.post('/api/admin/users', AdminController.createUser);
    Route.delete('/api/admin/users/:id', AdminController.deleteUser);
  }, middleware: [
    AuthMiddleware.bearer().withRoles(['admin'])
  ]);

  // Web routes with session-based authentication
  Route.group(() {
    Route.get('/dashboard', WebAuthController.dashboard);
    Route.get('/profile', WebAuthController.profile);
    Route.get('/settings', WebAuthController.settings);
  }, middleware: [WebAuthMiddleware.auth()]);

  // Guest-only routes (redirect if authenticated)
  Route.group(() {
    Route.get('/welcome', WebAuthController.welcome);
  }, middleware: [WebAuthMiddleware.guest()]);
}
`;

const guardsCode = `
import 'package:khadem/khadem.dart';

// Using different guards and providers
class MultiGuardController {
  /// Admin login with 'api' guard and 'admins' provider
  static Future<void> adminLogin(Request req, Response res) async {
    final adminAuth = AuthManager(guard: 'api', provider: 'admins');
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final authResponse = await adminAuth.attempt(data);

    res.sendJson({
      'message': 'Admin login successful',
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': authResponse.tokenType,
        'expires_in': authResponse.expiresIn,
        'user': authResponse.user,
        'guard': 'api',
        'provider': 'admins',
      }
    });
  }

  /// User login with default 'api' guard and 'users' provider
  static Future<void> userLogin(Request req, Response res) async {
    final userAuth = AuthManager(guard: 'api', provider: 'users');
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final authResponse = await userAuth.attempt(data);

    res.sendJson({
      'message': 'User login successful',
      'data': authResponse.toMap(),
    });
  }

  /// Web login with 'web' guard
  static Future<void> webLogin(Request req, Response res) async {
    final webAuth = AuthManager(guard: 'web', provider: 'users');
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final authResponse = await webAuth.attempt(data);

    // Store in session for web auth
    req.session.set('user_id', authResponse.user['id']);
    req.session.set('access_token', authResponse.accessToken);

    res.redirect('/dashboard');
  }
}
`;

const jwtDriver = `
import 'package:khadem/khadem.dart';

class JWTAuthController {
  /// Login with JWT driver (default API guard uses JWT)
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    // AuthManager with 'api' guard uses JWT driver by default
    final auth = AuthManager(guard: 'api');
    final authResponse = await auth.attempt(data);

    res.sendJson({
      'message': 'JWT login successful',
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': authResponse.tokenType,
        'expires_in': authResponse.expiresIn,
        'user': authResponse.user,
      }
    });
  }

  /// Refresh access token using refresh token
  static Future<void> refresh(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null) {
      return res.status(400).sendJson({'error': 'Refresh token required'});
    }

    final auth = AuthManager(guard: 'api');
    final authResponse = await auth.refresh(refreshToken);

    res.sendJson({
      'message': 'Token refreshed',
      'data': authResponse.toMap(),
    });
  }

  /// Verify JWT token
  static Future<void> verify(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    final auth = AuthManager(guard: 'api');
    final isValid = await auth.check(token);

    if (!isValid) {
      return res.status(401).sendJson({'error': 'Invalid token'});
    }

    final user = await auth.user(token);

    res.sendJson({
      'message': 'Token is valid',
      'data': {'user': user.toAuthArray()},
    });
  }
}
`;

const tokenRefresh = `
import 'package:khadem/khadem.dart';

class TokenController {
  /// Refresh access token using refresh token
  static Future<void> refreshToken(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null || refreshToken.isEmpty) {
      return res.status(400).sendJson({
        'error': 'Refresh token is required'
      });
    }

    final auth = AuthManager();
    final authResponse = await auth.refresh(refreshToken);

    res.sendJson({
      'message': 'Token refreshed successfully',
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': authResponse.tokenType,
        'expires_in': authResponse.expiresIn,
        'refresh_expires_in': authResponse.refreshExpiresIn,
      }
    });
  }

  /// Logout and invalidate token
  static Future<void> logout(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    final auth = AuthManager();
    await auth.logout(token);

    res.sendJson({
      'message': 'Logged out successfully'
    });
  }

  /// Logout from all devices
  static Future<void> logoutAll(Request req, Response res) async {
    final authenticatable = req.authenticatable;
    
    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();
    final auth = AuthManager();
    await auth.logoutAll(userId);

    res.sendJson({
      'message': 'Logged out from all devices'
    });
  }

  /// Logout from other devices (keep current session)
  static Future<void> logoutOthers(Request req, Response res) async {
    final authenticatable = req.authenticatable;
    final currentToken = req.header('authorization')?.replaceFirst('Bearer ', '');
    
    if (authenticatable == null || currentToken == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();
    final auth = AuthManager();
    await auth.logoutOthers(userId, currentToken);

    res.sendJson({
      'message': 'Logged out from other devices'
    });
  }
}
`;

const tokenVerification = `
import 'package:khadem/khadem.dart';

class AuthVerificationController {
  /// Verify token and return user data
  static Future<void> verifyToken(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null || token.isEmpty) {
      return res.status(401).sendJson({
        'error': 'Token is required'
      });
    }

    try {
      final auth = AuthManager();
      
      // Check if token is valid
      final isValid = await auth.check(token);
      
      if (!isValid) {
        return res.status(401).sendJson({
          'error': 'Invalid or expired token',
          'valid': false,
        });
      }

      // Get user from token
      final user = await auth.user(token);

      res.sendJson({
        'message': 'Token is valid',
        'data': {
          'user': user.toAuthArray(),
          'valid': true,
        }
      });
    } catch (e) {
      res.status(401).sendJson({
        'error': 'Token verification failed',
        'message': e.toString(),
        'valid': false,
      });
    }
  }

  /// Get current authenticated user
  static Future<void> me(Request req, Response res) async {
    // User is already authenticated by AuthMiddleware
    final authenticatable = req.authenticatable;
    
    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    res.sendJson({
      'message': 'Current user',
      'data': {'user': authenticatable.toAuthArray()},
    });
  }
}
`;

const errorHandling = `
import 'package:khadem/khadem.dart';

class AuthErrorHandler {
  /// Handle authentication errors with proper HTTP status codes
  static Map<String, dynamic> handleAuthError(dynamic error) {
    if (error is AuthException) {
      return {
        'success': false,
        'error': error.message,
        'code': 'AUTH_ERROR',
        'status_code': error.statusCode,
      };
    }

    // Handle validation errors
    if (error is ValidationException) {
      return {
        'success': false,
        'error': 'Validation failed',
        'errors': error.errors,
        'code': 'VALIDATION_ERROR',
        'status_code': 422,
      };
    }

    // Handle other errors
    return {
      'success': false,
      'error': 'Authentication failed',
      'message': error.toString(),
      'code': 'AUTH_FAILED',
      'status_code': 500,
    };
  }
}

// Usage in controller
class AuthController {
  static Future<void> login(Request req, Response res) async {
    try {
      final data = await req.validate({
        'email': 'required|email',
        'password': 'required|min:6',
      });

      final auth = AuthManager();
      final authResponse = await auth.attempt(data);

      res.sendJson({
        'success': true,
        'message': 'Login successful',
        'data': authResponse.toMap(),
      });
    } on AuthException catch (e) {
      res.status(e.statusCode).sendJson({
        'success': false,
        'error': e.message,
        'code': 'AUTH_ERROR',
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'success': false,
        'error': 'Validation failed',
        'errors': e.errors,
      });
    } catch (e) {
      res.status(500).sendJson({
        'success': false,
        'error': 'Internal server error',
        'message': e.toString(),
      });
    }
  }

  /// Example with custom error handling
  static Future<void> protectedRoute(Request req, Response res) async {
    try {
      final authenticatable = req.authenticatable;
      
      if (authenticatable == null) {
        throw AuthException('Unauthenticated', statusCode: 401);
      }

      final user = authenticatable.toAuthArray();
      
      // Check permissions
      if (!_hasPermission(user, 'admin')) {
        throw AuthException('Insufficient permissions', statusCode: 403);
      }

      res.sendJson({
        'success': true,
        'message': 'Access granted',
        'data': {'user': user},
      });
    } catch (e) {
      final errorResponse = AuthErrorHandler.handleAuthError(e);
      res.status(errorResponse['status_code']).sendJson(errorResponse);
    }
  }

  static bool _hasPermission(Map<String, dynamic> user, String permission) {
    final permissions = (user['permissions'] as List?)?.cast<String>() ?? [];
    return permissions.contains(permission);
  }
}
`;
</script>
