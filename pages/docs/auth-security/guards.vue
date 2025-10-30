<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Authentication Guards</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Guards define how users are authenticated for each request. Khadem provides multiple built-in
        guards (API, Web) and allows you to create custom guards for specific authentication needs.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">API Guard</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Token-based authentication for APIs</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Web Guard</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Session-based authentication for web apps</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Custom Guards</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Build your own authentication logic</p>
        </div>
      </div>
    </header>

    <!-- What are Guards -->
    <DocSection title="Understanding Guards">
      <template #description>
        Guards are responsible for determining how users are authenticated. Each guard uses a driver
        (JWT, Token, Session) and a provider (users table, admins table) to authenticate requests.
      </template>
      <CodeBlock :code="guardConcept" language="dart" title="Guard Architecture" />
      <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h4 class="font-semibold mb-2">Guard Components:</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Driver:</strong> How authentication is performed (JWT, Token, Session)</li>
          <li><strong>Provider:</strong> Where user data comes from (users table, API, etc.)</li>
          <li><strong>Strategy:</strong> Authentication logic and token management</li>
        </ul>
      </div>
    </DocSection>

    <!-- API Guard -->
    <DocSection title="API Guard - Token Authentication">
      <template #description>
        The API Guard uses JWT or bearer tokens for stateless authentication. Perfect for REST APIs,
        mobile apps, and single-page applications.
      </template>
      <CodeBlock :code="apiGuardConfig" language="dart" title="API Guard Configuration" />
      <CodeBlock :code="apiGuardUsage" language="dart" title="Using API Guard" />
      <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">API Guard Features:</h4>
        <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
          <li>JWT token generation and validation</li>
          <li>Automatic token refresh</li>
          <li>Token revocation and blacklisting</li>
          <li>Stateless authentication</li>
          <li>Perfect for microservices</li>
        </ul>
      </div>
    </DocSection>

    <!-- Web Guard -->
    <DocSection title="Web Guard - Session Authentication">
      <template #description>
        The Web Guard uses server-side sessions for traditional web applications. Sessions are stored
        server-side with only a session ID in the client cookie.
      </template>
      <CodeBlock :code="webGuardConfig" language="dart" title="Web Guard Configuration" />
      <CodeBlock :code="webGuardUsage" language="dart" title="Using Web Guard" />
      <div class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">Web Guard Features:</h4>
        <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
          <li>Server-side session storage</li>
          <li>CSRF protection</li>
          <li>Remember me functionality</li>
          <li>Session timeout and regeneration</li>
          <li>Perfect for traditional web apps</li>
        </ul>
      </div>
    </DocSection>

    <!-- Multiple Guards -->
    <DocSection title="Using Multiple Guards">
      <template #description>
        Your application can use multiple guards simultaneously. For example, use the API guard for
        mobile apps and the Web guard for your admin panel.
      </template>
      <CodeBlock :code="multipleGuards" language="dart" title="Multi-Guard Configuration" />
      <CodeBlock :code="multipleGuardsUsage" language="dart" title="Using Different Guards" />
    </DocSection>

    <!-- Guard Providers -->
    <DocSection title="Authentication Providers">
      <template #description>
        Providers define where and how to retrieve user data. Configure different providers for
        different user types (users, admins, customers).
      </template>
      <CodeBlock :code="providerConfig" language="dart" title="Provider Configuration" />
      <CodeBlock :code="providerUsage" language="dart" title="Using Different Providers" />
    </DocSection>

    <!-- Custom Guards -->
    <DocSection title="Creating Custom Guards">
      <template #description>
        Create custom guards for specific authentication requirements like OAuth, LDAP, or
        third-party authentication services.
      </template>
      <CodeBlock :code="customGuard" language="dart" title="Custom Guard Implementation" />
      <CodeBlock :code="registerCustomGuard" language="dart" title="Registering Custom Guard" />
    </DocSection>

    <!-- Guard Methods -->
    <DocSection title="Guard Methods Reference">
      <template #description>
        All guards implement a common interface with these methods for authentication operations.
      </template>
      <CodeBlock :code="guardMethods" language="dart" title="Guard Interface Methods" />
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Method</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Returns</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono">attempt(credentials)</td>
              <td class="px-6 py-4 text-sm">Authenticate with credentials</td>
              <td class="px-6 py-4 text-sm font-mono">AuthResponse</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">user(token)</td>
              <td class="px-6 py-4 text-sm">Get user from token</td>
              <td class="px-6 py-4 text-sm font-mono">Authenticatable</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">check(token)</td>
              <td class="px-6 py-4 text-sm">Verify token validity</td>
              <td class="px-6 py-4 text-sm font-mono">bool</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">refresh(refreshToken)</td>
              <td class="px-6 py-4 text-sm">Refresh access token</td>
              <td class="px-6 py-4 text-sm font-mono">AuthResponse</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">logout(token)</td>
              <td class="px-6 py-4 text-sm">Invalidate single token</td>
              <td class="px-6 py-4 text-sm font-mono">void</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">logoutAll(userId)</td>
              <td class="px-6 py-4 text-sm">Invalidate all user tokens</td>
              <td class="px-6 py-4 text-sm font-mono">void</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">logoutOthers(userId, token)</td>
              <td class="px-6 py-4 text-sm">Invalidate other tokens</td>
              <td class="px-6 py-4 text-sm font-mono">void</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocSection>

    <!-- Best Practices -->
    <DocSection title="Guard Best Practices">
      <template #description>
        Follow these best practices when working with authentication guards in your application.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use API Guard for REST APIs and mobile apps</li>
              <li>Use Web Guard for traditional web applications</li>
              <li>Implement token refresh to extend sessions</li>
              <li>Set appropriate token expiration times</li>
              <li>Use different guards for different user types</li>
              <li>Implement proper logout mechanisms</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Mix session and token auth in same guard</li>
              <li>Store tokens in localStorage (XSS risk)</li>
              <li>Use short-lived tokens without refresh</li>
              <li>Forget to invalidate tokens on logout</li>
              <li>Hard-code guard names in controllers</li>
              <li>Skip token expiration validation</li>
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
  title: 'Authentication Guards',
  meta: [{ name: 'description', content: 'Understanding and using authentication guards in Khadem' }]
});

const guardConcept = `
import 'package:khadem/khadem.dart';

/// Guard Architecture in Khadem
///
/// Guard -> Driver -> Provider -> User
///   |         |          |          |
///   |         |          |          └─> Authenticatable User Model
///   |         |          └─> Database/API/LDAP
///   |         └─> JWT/Token/Session Strategy
///   └─> API/Web/Custom Guard

// Example: How a guard works
class GuardFlow {
  static Future<void> authenticate() async {
    // 1. AuthManager creates or gets guard
    final auth = AuthManager(guard: 'api', provider: 'users');

    // 2. Guard uses driver (JWT) to authenticate
    // 3. Driver queries provider (users table)
    // 4. Provider returns Authenticatable user
    // 5. Driver creates tokens
    // 6. AuthResponse returned to client

    final response = await auth.attempt({
      'email': 'user@example.com',
      'password': 'password123',
    });

    print('Token: \${response.accessToken}');
    print('User: \${response.user}');
  }
}
`;

const apiGuardConfig = `
// config/auth.dart
const authConfig = {
  'default': 'api', // Default guard for AuthManager()
  'guards': {
    'api': {
      'driver': 'jwt', // Use JWT driver
      'provider': 'users', // Use users provider
    },
  },
  'providers': {
    'users': {
      'table': 'users',
      'primary_key': 'id',
      'fields': ['email'], // Authentication field
    },
  },
  'jwt': {
    'secret': env('JWT_SECRET'),
    'algo': 'HS256',
    'ttl': 3600, // 1 hour
    'refresh_ttl': 1209600, // 2 weeks
  },
};
`;

const apiGuardUsage = `
import 'package:khadem/khadem.dart';

class ApiAuthController {
  /// Login with API guard (JWT tokens)
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    // Use API guard (default)
    final auth = AuthManager(guard: 'api');
    final authResponse = await auth.attempt(data);

    res.sendJson({
      'success': true,
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': 'Bearer',
        'expires_in': authResponse.expiresIn,
        'user': authResponse.user,
      }
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
      'valid': true,
      'user': user.toAuthArray(),
    });
  }

  /// Refresh JWT token
  static Future<void> refresh(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null) {
      return res.status(400).sendJson({'error': 'Refresh token required'});
    }

    final auth = AuthManager(guard: 'api');
    final authResponse = await auth.refresh(refreshToken);

    res.sendJson({
      'success': true,
      'data': authResponse.toMap(),
    });
  }
}
`;

const webGuardConfig = `
// config/auth.dart
const authConfig = {
  'default': 'web',
  'guards': {
    'web': {
      'driver': 'session', // Use session driver
      'provider': 'users',
    },
  },
  'providers': {
    'users': {
      'table': 'users',
      'primary_key': 'id',
      'fields': ['email'],
    },
  },
  'session': {
    'lifetime': 120, // 120 minutes
    'expire_on_close': false,
    'encrypt': true,
    'cookie_name': 'khadem_session',
  },
};
`;

const webGuardUsage = `
import 'package:khadem/khadem.dart';

class WebAuthController {
  /// Login with web guard (sessions)
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
      'remember': 'nullable|boolean',
    });

    // Use web guard for session-based auth
    final auth = AuthManager(guard: 'web');
    final authResponse = await auth.attempt({
      'email': data['email'],
      'password': data['password'],
    });

    // Store user ID in session
    req.session.set('user_id', authResponse.user['id']);
    req.session.set('authenticated', true);

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

    // Regenerate session ID for security
    req.session.regenerateId();

    final intended = req.session.pull('url.intended') ?? '/dashboard';
    res.redirect(intended.toString());
  }

  /// Check if user is authenticated
  static Future<void> checkAuth(Request req, Response res) async {
    final userId = req.session.get('user_id');

    if (userId == null) {
      return res.redirect('/login');
    }

    // Get user from database
    final user = await User().query.where('id', '=', userId).first();

    if (user == null) {
      req.session.clear();
      return res.redirect('/login');
    }

    res.view('dashboard', data: {'user': user.toJson()});
  }

  /// Logout
  static Future<void> logout(Request req, Response res) async {
    // Clear session
    req.session.remove('user_id');
    req.session.remove('authenticated');

    // Clear remember token
    res.cookieHandler.delete('remember_token');

    // Regenerate session ID
    req.session.regenerateId();

    res.redirect('/login');
  }
}
`;

const multipleGuards = `
// config/auth.dart
const authConfig = {
  'default': 'api',
  'guards': {
    // API guard for mobile/SPA
    'api': {
      'driver': 'jwt',
      'provider': 'users',
    },
    // Web guard for admin panel
    'web': {
      'driver': 'session',
      'provider': 'admins',
    },
    // Admin API guard
    'admin-api': {
      'driver': 'jwt',
      'provider': 'admins',
    },
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
      'fields': ['email', 'username'],
    },
  },
};
`;

const multipleGuardsUsage = `
import 'package:khadem/khadem.dart';

class MultiGuardController {
  /// User login via API
  static Future<void> userApiLogin(Request req, Response res) async {
    final auth = AuthManager(guard: 'api', provider: 'users');
    final authResponse = await auth.attempt(req.all());

    res.sendJson({
      'message': 'User authenticated via API',
      'data': authResponse.toMap(),
    });
  }

  /// Admin login via web
  static Future<void> adminWebLogin(Request req, Response res) async {
    final auth = AuthManager(guard: 'web', provider: 'admins');
    final authResponse = await auth.attempt(req.all());

    req.session.set('admin_id', authResponse.user['id']);
    res.redirect('/admin/dashboard');
  }

  /// Admin login via API
  static Future<void> adminApiLogin(Request req, Response res) async {
    final auth = AuthManager(guard: 'admin-api', provider: 'admins');
    final authResponse = await auth.attempt(req.all());

    res.sendJson({
      'message': 'Admin authenticated via API',
      'data': authResponse.toMap(),
    });
  }

  /// Get authenticated user from specific guard
  static Future<void> getUser(Request req, Response res) async {
    final guardName = req.input('guard') ?? 'api';
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    final auth = AuthManager(guard: guardName);
    final user = await auth.user(token);

    res.sendJson({
      'guard': guardName,
      'user': user.toAuthArray(),
    });
  }
}
`;

const providerConfig = `
// config/auth.dart
const authConfig = {
  'guards': {
    'api': {'driver': 'jwt', 'provider': 'users'},
    'admin': {'driver': 'jwt', 'provider': 'admins'},
    'customer': {'driver': 'jwt', 'provider': 'customers'},
  },
  'providers': {
    'users': {
      'table': 'users',
      'primary_key': 'id',
      'fields': ['email'], // Can login with email
    },
    'admins': {
      'table': 'admins',
      'primary_key': 'id',
      'fields': ['email', 'username'], // Can login with email or username
    },
    'customers': {
      'table': 'customers',
      'primary_key': 'customer_id', // Custom primary key
      'fields': ['email', 'phone'], // Can login with email or phone
    },
  },
};
`;

const providerUsage = `
import 'package:khadem/khadem.dart';

class ProviderAuthController {
  /// Login with email (users provider)
  static Future<void> userLogin(Request req, Response res) async {
    final auth = AuthManager(provider: 'users');
    final authResponse = await auth.attempt({
      'email': req.input('email'),
      'password': req.input('password'),
    });

    res.sendJson(authResponse.toMap());
  }

  /// Login with email or username (admins provider)
  static Future<void> adminLogin(Request req, Response res) async {
    final auth = AuthManager(provider: 'admins');

    // Can use email OR username
    final identifier = req.input('identifier'); // email or username
    final authResponse = await auth.attempt({
      'identifier': identifier,
      'password': req.input('password'),
    });

    res.sendJson(authResponse.toMap());
  }

  /// Login with email or phone (customers provider)
  static Future<void> customerLogin(Request req, Response res) async {
    final auth = AuthManager(provider: 'customers');

    // Can use email OR phone
    final authResponse = await auth.attempt({
      'identifier': req.input('identifier'), // email or phone
      'password': req.input('password'),
    });

    res.sendJson(authResponse.toMap());
  }
}
`;

const customGuard = `
import 'package:khadem/khadem.dart';

/// Custom OAuth Guard Example
class OAuthGuard extends Guard {
  final AuthConfig authConfig;
  final String guardName;
  final String providerKey;

  OAuthGuard({
    required this.authConfig,
    required this.guardName,
    required this.providerKey,
  });

  @override
  Future<AuthResponse> attempt(Map<String, dynamic> credentials) async {
    // OAuth flow implementation
    final oauthProvider = credentials['provider']; // google, github, etc.
    final oauthToken = credentials['oauth_token'];

    // Verify OAuth token with provider
    final userInfo = await _verifyOAuthToken(oauthProvider, oauthToken);

    // Find or create user
    final user = await _findOrCreateUser(userInfo);

    // Generate app tokens
    final accessToken = await _generateAccessToken(user);
    final refreshToken = await _generateRefreshToken(user);

    return AuthResponse(
      user: user.toAuthArray(),
      accessToken: accessToken,
      refreshToken: refreshToken,
      tokenType: 'Bearer',
      expiresIn: 3600,
    );
  }

  @override
  Future<Authenticatable> user(String token) async {
    // Verify and return user from token
    final payload = await _verifyToken(token);
    final userId = payload['user_id'];

    final user = await User().query.where('id', '=', userId).first();
    if (user == null) {
      throw AuthException('User not found');
    }

    return user;
  }

  @override
  Future<bool> check(String token) async {
    try {
      await _verifyToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  @override
  Future<AuthResponse> refresh(String refreshToken) async {
    final payload = await _verifyRefreshToken(refreshToken);
    final user = await user(payload['user_id']);

    final newAccessToken = await _generateAccessToken(user);

    return AuthResponse(
      user: user.toAuthArray(),
      accessToken: newAccessToken,
      tokenType: 'Bearer',
      expiresIn: 3600,
    );
  }

  @override
  Future<void> logout(String token) async {
    // Invalidate token
    await _invalidateToken(token);
  }

  @override
  Future<void> logoutAll(dynamic userId) async {
    // Invalidate all tokens for user
    await _invalidateAllTokens(userId);
  }

  @override
  Future<void> logoutOthers(dynamic userId, String currentToken) async {
    // Invalidate all tokens except current
    await _invalidateOtherTokens(userId, currentToken);
  }

  // Helper methods
  Future<Map<String, dynamic>> _verifyOAuthToken(String provider, String token) async {
    // Implement OAuth verification
    throw UnimplementedError();
  }

  Future<User> _findOrCreateUser(Map<String, dynamic> userInfo) async {
    throw UnimplementedError();
  }

  Future<String> _generateAccessToken(User user) async {
    throw UnimplementedError();
  }

  Future<String> _generateRefreshToken(User user) async {
    throw UnimplementedError();
  }

  Future<Map<String, dynamic>> _verifyToken(String token) async {
    throw UnimplementedError();
  }

  Future<Map<String, dynamic>> _verifyRefreshToken(String token) async {
    throw UnimplementedError();
  }

  Future<void> _invalidateToken(String token) async {
    throw UnimplementedError();
  }

  Future<void> _invalidateAllTokens(dynamic userId) async {
    throw UnimplementedError();
  }

  Future<void> _invalidateOtherTokens(dynamic userId, String currentToken) async {
    throw UnimplementedError();
  }
}
`;

const registerCustomGuard = `
import 'package:khadem/khadem.dart';

class AuthServiceProvider {
  static void boot() {
    // Register custom guard factory
    AuthManager.registerGuardFactory('oauth', (config, guardName) {
      return OAuthGuard(
        authConfig: config,
        guardName: guardName,
        providerKey: 'users',
      );
    });
  }
}

// Usage
class OAuthController {
  static Future<void> login(Request req, Response res) async {
    final auth = AuthManager(guard: 'oauth');

    final authResponse = await auth.attempt({
      'provider': 'google',
      'oauth_token': req.input('oauth_token'),
    });

    res.sendJson({
      'success': true,
      'data': authResponse.toMap(),
    });
  }
}
`;

const guardMethods = `
import 'package:khadem/khadem.dart';

/// Complete Guard Interface Reference
abstract class Guard {
  /// Attempt to authenticate with credentials
  Future<AuthResponse> attempt(Map<String, dynamic> credentials);

  /// Get authenticated user from token
  Future<Authenticatable> user(String token);

  /// Check if token is valid
  Future<bool> check(String token);

  /// Refresh access token using refresh token
  Future<AuthResponse> refresh(String refreshToken);

  /// Logout (invalidate single token)
  Future<void> logout(String token);

  /// Logout from all devices (invalidate all tokens for user)
  Future<void> logoutAll(dynamic userId);

  /// Logout from other devices (keep current token)
  Future<void> logoutOthers(dynamic userId, String currentToken);
}

// Example: Using all guard methods
class GuardMethodsExample {
  static Future<void> demonstrateAll() async {
    final auth = AuthManager(guard: 'api');

    // 1. Attempt authentication
    final authResponse = await auth.attempt({
      'email': 'user@example.com',
      'password': 'password123',
    });
    print('Logged in: \${authResponse.accessToken}');

    // 2. Get user from token
    final user = await auth.user(authResponse.accessToken!);
    print('User: \${user.toAuthArray()}');

    // 3. Check token validity
    final isValid = await auth.check(authResponse.accessToken!);
    print('Token valid: \$isValid');

    // 4. Refresh token
    final refreshed = await auth.refresh(authResponse.refreshToken!);
    print('New access token: \${refreshed.accessToken}');

    // 5. Logout current device
    await auth.logout(authResponse.accessToken!);
    print('Logged out from this device');

    // 6. Logout from all devices
    await auth.logoutAll(user.getAuthIdentifier());
    print('Logged out from all devices');

    // 7. Logout from other devices (keep current)
    await auth.logoutOthers(
      user.getAuthIdentifier(),
      authResponse.accessToken!,
    );
    print('Logged out from other devices');
  }
}
`;
</script>
