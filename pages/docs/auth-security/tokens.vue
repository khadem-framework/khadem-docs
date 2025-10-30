<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Token Management</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive guide to JWT tokens, refresh tokens, token rotation, and secure token
        management in Khadem applications.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">JWT Tokens</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">Stateless authentication with JSON Web Tokens</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Refresh Tokens</h3>
          <p class="text-sm text-green-700 dark:text-green-300">Long-lived tokens for session extension</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Token Security</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">Best practices and security measures</p>
        </div>
      </div>
    </header>

    <!-- JWT Basics -->
    <DocSection title="Understanding JWT Tokens">
      <template #description>
        JSON Web Tokens (JWT) are self-contained tokens that carry user information and claims.
        They consist of three parts: header, payload, and signature.
      </template>
      <CodeBlock :code="jwtStructure" language="dart" title="JWT Token Structure" />
      <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h4 class="font-semibold mb-2">JWT Components:</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Header:</strong> Algorithm and token type (e.g., {"alg": "HS256", "typ": "JWT"})</li>
          <li><strong>Payload:</strong> User data and claims (user ID, email, expiration, etc.)</li>
          <li><strong>Signature:</strong> Cryptographic signature for verification</li>
        </ul>
      </div>
    </DocSection>

    <!-- Generating Tokens -->
    <DocSection title="Generating Access and Refresh Tokens">
      <template #description>
        When a user logs in, Khadem generates both an access token (short-lived) and a
        refresh token (long-lived) for secure authentication.
      </template>
      <CodeBlock :code="generatingTokens" language="dart" title="Token Generation" />
      <div class="mt-4 grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Access Token</h4>
          <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
            <li>Short-lived (15 min - 1 hour)</li>
            <li>Used for API requests</li>
            <li>Sent in Authorization header</li>
            <li>Contains user claims</li>
          </ul>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">Refresh Token</h4>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Long-lived (1 week - 1 month)</li>
            <li>Used to get new access tokens</li>
            <li>Stored securely (httpOnly cookie)</li>
            <li>Single-use or rotates on use</li>
          </ul>
        </div>
      </div>
    </DocSection>

    <!-- Token Refresh -->
    <DocSection title="Refreshing Access Tokens">
      <template #description>
        When an access token expires, use the refresh token to obtain a new access token
        without requiring the user to log in again.
      </template>
      <CodeBlock :code="refreshingTokens" language="dart" title="Token Refresh Flow" />
      <CodeBlock :code="clientRefresh" language="dart" title="Client-Side Refresh Implementation" />
    </DocSection>

    <!-- Token Rotation -->
    <DocSection title="Refresh Token Rotation">
      <template #description>
        Token rotation enhances security by issuing a new refresh token each time it's used,
        invalidating the old one. This prevents token reuse attacks.
      </template>
      <CodeBlock :code="tokenRotation" language="dart" title="Token Rotation Implementation" />
      <div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔒 Security Benefits:</h4>
        <ul class="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>Detects token theft - reused tokens trigger security alerts</li>
          <li>Limits damage from compromised tokens</li>
          <li>Automatic revocation of suspicious sessions</li>
          <li>Improved audit trail</li>
        </ul>
      </div>
    </DocSection>

    <!-- Token Verification -->
    <DocSection title="Verifying and Validating Tokens">
      <template #description>
        Always verify tokens before trusting their contents. Check signature, expiration,
        and token blacklist status.
      </template>
      <CodeBlock :code="tokenVerification" language="dart" title="Token Verification" />
    </DocSection>

    <!-- Token Invalidation -->
    <DocSection title="Token Invalidation and Blacklisting">
      <template #description>
        Implement token blacklisting to invalidate tokens before their natural expiration.
        Essential for logout and security incidents.
      </template>
      <CodeBlock :code="tokenBlacklist" language="dart" title="Token Blacklisting" />
      <CodeBlock :code="logoutStrategies" language="dart" title="Logout Strategies" />
    </DocSection>

    <!-- Token Storage -->
    <DocSection title="Secure Token Storage">
      <template #description>
        Choose the right storage method based on your application type. Each method has
        different security implications.
      </template>
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Storage Method</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Security Level</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Use Case</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Vulnerabilities</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono">httpOnly Cookie</td>
              <td class="px-6 py-4 text-sm text-green-600">High</td>
              <td class="px-6 py-4 text-sm">Web apps</td>
              <td class="px-6 py-4 text-sm">CSRF (mitigated with tokens)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">Memory (JS variable)</td>
              <td class="px-6 py-4 text-sm text-green-600">High</td>
              <td class="px-6 py-4 text-sm">SPAs</td>
              <td class="px-6 py-4 text-sm">Lost on refresh</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">sessionStorage</td>
              <td class="px-6 py-4 text-sm text-yellow-600">Medium</td>
              <td class="px-6 py-4 text-sm">SPAs (single tab)</td>
              <td class="px-6 py-4 text-sm">XSS</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">localStorage</td>
              <td class="px-6 py-4 text-sm text-red-600">Low</td>
              <td class="px-6 py-4 text-sm">Not recommended</td>
              <td class="px-6 py-4 text-sm">XSS, persists across tabs</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono">Secure Enclave</td>
              <td class="px-6 py-4 text-sm text-green-600">Very High</td>
              <td class="px-6 py-4 text-sm">Mobile apps</td>
              <td class="px-6 py-4 text-sm">Limited availability</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeBlock :code="tokenStorage" language="dart" title="Recommended Storage Patterns" class="mt-4" />
    </DocSection>

    <!-- Token Claims -->
    <DocSection title="Custom Token Claims">
      <template #description>
        Add custom claims to tokens to include additional user information, permissions,
        or application-specific data.
      </template>
      <CodeBlock :code="customClaims" language="dart" title="Adding Custom Claims" />
    </DocSection>

    <!-- Multiple Devices -->
    <DocSection title="Managing Tokens Across Multiple Devices">
      <template #description>
        Handle user sessions across multiple devices with device tracking and selective logout.
      </template>
      <CodeBlock :code="multipleDevices" language="dart" title="Multi-Device Token Management" />
    </DocSection>

    <!-- Token Configuration -->
    <DocSection title="Token Configuration">
      <template #description>
        Configure token lifetimes, algorithms, and security settings in your auth configuration.
      </template>
      <CodeBlock :code="tokenConfig" language="dart" title="Token Configuration" />
    </DocSection>

    <!-- Security Best Practices -->
    <DocSection title="Token Security Best Practices">
      <template #description>
        Follow these security guidelines to protect your tokens and users.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>Use HTTPS in production</li>
              <li>Set short access token lifetimes</li>
              <li>Implement token rotation</li>
              <li>Validate tokens on every request</li>
              <li>Use strong secret keys (256+ bits)</li>
              <li>Store refresh tokens in httpOnly cookies</li>
              <li>Implement token blacklisting</li>
              <li>Log security events</li>
            </ul>
          </div>
        </div>
        <div class="space-y-4">
          <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
            <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
              <li>Store tokens in localStorage</li>
              <li>Include sensitive data in payload</li>
              <li>Use weak algorithms (None, HS256 with weak keys)</li>
              <li>Allow infinite token lifetimes</li>
              <li>Ignore token expiration</li>
              <li>Send tokens in URL parameters</li>
              <li>Hard-code secret keys</li>
              <li>Skip signature verification</li>
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
  title: 'Token Management',
  meta: [{ name: 'description', content: 'JWT and refresh token management in Khadem' }]
});

const jwtStructure = `
import 'package:khadem/khadem.dart';

/// JWT Token Structure
///
/// A JWT consists of three Base64-encoded parts separated by dots:
/// header.payload.signature
///
/// Example JWT:
/// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
/// eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJleHAiOjE3MDk4MjQyMDB9.
/// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

class JWTTokenExample {
  static void demonstrateStructure() {
    // Header (algorithm and type)
    final header = {
      'alg': 'HS256',  // HMAC with SHA-256
      'typ': 'JWT',    // Token type
    };

    // Payload (claims)
    final payload = {
      'user_id': 1,
      'email': 'user@example.com',
      'name': 'John Doe',
      'role': 'user',
      'iat': DateTime.now().millisecondsSinceEpoch ~/ 1000, // Issued at
      'exp': DateTime.now().add(Duration(hours: 1)).millisecondsSinceEpoch ~/ 1000, // Expires
    };

    // Signature
    // HMACSHA256(
    //   base64UrlEncode(header) + "." + base64UrlEncode(payload),
    //   secret_key
    // )

    print('JWT Header: \$header');
    print('JWT Payload: \$payload');
    print('JWT is signed with secret key and cannot be tampered with');
  }

  // Standard JWT claims
  static const standardClaims = {
    'iss': 'Issuer',           // Who issued the token
    'sub': 'Subject',          // Subject identifier (user ID)
    'aud': 'Audience',         // Intended recipient
    'exp': 'Expiration',       // Expiration time
    'nbf': 'Not Before',       // Not valid before this time
    'iat': 'Issued At',        // When token was issued
    'jti': 'JWT ID',           // Unique token identifier
  };
}
`;

const generatingTokens = `
import 'package:khadem/khadem.dart';

class AuthController {
  /// Login and generate tokens
  static Future<void> login(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    // Authenticate user
    final auth = AuthManager(guard: 'api');
    final authResponse = await auth.attempt(data);

    // AuthResponse contains:
    // - accessToken: Short-lived JWT for API requests
    // - refreshToken: Long-lived token for getting new access tokens
    // - tokenType: 'Bearer'
    // - expiresIn: Access token lifetime in seconds
    // - user: User data

    res.sendJson({
      'success': true,
      'data': {
        'access_token': authResponse.accessToken,
        'refresh_token': authResponse.refreshToken,
        'token_type': authResponse.tokenType,
        'expires_in': authResponse.expiresIn, // e.g., 3600 (1 hour)
        'user': authResponse.user,
      }
    });
  }

  /// Example response:
  /// {
  ///   "success": true,
  ///   "data": {
  ///     "access_token": "eyJhbGci...", // Valid for 1 hour
  ///     "refresh_token": "eyJhbGci...", // Valid for 2 weeks
  ///     "token_type": "Bearer",
  ///     "expires_in": 3600,
  ///     "user": {
  ///       "id": 1,
  ///       "email": "user@example.com",
  ///       "name": "John Doe"
  ///     }
  ///   }
  /// }
}

// Token configuration
const authConfig = {
  'jwt': {
    'secret': env('JWT_SECRET'), // Strong secret key
    'algo': 'HS256',             // Algorithm
    'ttl': 3600,                 // Access token: 1 hour
    'refresh_ttl': 1209600,      // Refresh token: 2 weeks
  },
};
`;

const refreshingTokens = `
import 'package:khadem/khadem.dart';

class TokenController {
  /// Refresh access token endpoint
  static Future<void> refresh(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null || refreshToken.isEmpty) {
      return res.status(400).sendJson({
        'error': 'Refresh token required',
      });
    }

    try {
      final auth = AuthManager();
      final authResponse = await auth.refresh(refreshToken);

      // Returns new access token and optionally new refresh token
      res.sendJson({
        'success': true,
        'data': {
          'access_token': authResponse.accessToken,
          'refresh_token': authResponse.refreshToken, // New rotated refresh token
          'token_type': authResponse.tokenType,
          'expires_in': authResponse.expiresIn,
        }
      });
    } on AuthException catch (e) {
      // Refresh token invalid or expired
      res.status(401).sendJson({
        'error': 'Invalid refresh token',
        'message': e.message,
      });
    }
  }

  /// Check if access token is about to expire
  static Future<void> checkExpiration(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    // Decode token payload (without verification for expiration check)
    final payload = _decodePayload(token);
    final exp = payload['exp'] as int;
    final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;
    final timeLeft = exp - now;

    res.sendJson({
      'expires_in': timeLeft,
      'expires_at': DateTime.fromMillisecondsSinceEpoch(exp * 1000).toIso8601String(),
      'should_refresh': timeLeft < 300, // Less than 5 minutes left
    });
  }

  static Map<String, dynamic> _decodePayload(String token) {
    // Decode JWT payload (implementation depends on your JWT library)
    final parts = token.split('.');
    if (parts.length != 3) throw AuthException('Invalid token format');

    final payload = base64Url.decode(base64Url.normalize(parts[1]));
    return jsonDecode(utf8.decode(payload));
  }
}
`;

const clientRefresh = `
// JavaScript/TypeScript client-side refresh implementation

class AuthClient {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private refreshPromise: Promise<string> | null = null;

  async login(email: string, password: string) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    this.accessToken = data.data.access_token;
    this.refreshToken = data.data.refresh_token;

    // Store refresh token in httpOnly cookie (set by server)
    // Access token in memory only (most secure)

    return data;
  }

  async refreshAccessToken() {
    // Prevent multiple concurrent refresh requests
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: this.refreshToken }),
      });

      if (!response.ok) {
        // Refresh failed, redirect to login
        window.location.href = '/login';
        throw new Error('Refresh failed');
      }

      const data = await response.json();

      this.accessToken = data.data.access_token;
      this.refreshToken = data.data.refresh_token; // Rotated token

      return this.accessToken!;
    })();

    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  async fetch(url: string, options: RequestInit = {}) {
    // Add access token to request
    const headers = new Headers(options.headers);
    headers.set('Authorization', \`Bearer \${this.accessToken}\`);

    let response = await fetch(url, { ...options, headers });

    // If 401, try to refresh token and retry
    if (response.status === 401) {
      await this.refreshAccessToken();

      // Retry with new token
      headers.set('Authorization', \`Bearer \${this.accessToken}\`);
      response = await fetch(url, { ...options, headers });
    }

    return response;
  }
}

// Usage
const authClient = new AuthClient();

await authClient.login('user@example.com', 'password');

// Automatically handles token refresh
const response = await authClient.fetch('/api/profile');
const profile = await response.json();
`;

const tokenRotation = `
import 'package:khadem/khadem.dart';

/// Token rotation for enhanced security
class TokenRotationService {
  /// Refresh endpoint with automatic rotation
  static Future<void> refresh(Request req, Response res) async {
    final refreshToken = req.input('refresh_token');

    if (refreshToken == null) {
      return res.status(400).sendJson({'error': 'Refresh token required'});
    }

    try {
      final auth = AuthManager();

      // This generates:
      // 1. New access token
      // 2. NEW refresh token (rotation)
      // 3. Invalidates old refresh token
      final authResponse = await auth.refresh(refreshToken);

      // Log rotation for security audit
      await _logTokenRotation(refreshToken, authResponse.refreshToken);

      res.sendJson({
        'success': true,
        'data': authResponse.toMap(),
      });
    } on AuthException catch (e) {
      // If someone tries to reuse an old refresh token
      await _handleTokenReuse(refreshToken, e);

      res.status(401).sendJson({
        'error': 'Invalid refresh token',
        'message': 'Token may have been compromised',
      });
    }
  }

  /// Detect and handle token reuse (possible theft)
  static Future<void> _handleTokenReuse(
    String token,
    AuthException error,
  ) async {
    // Check if this token was previously used
    final tokenRecord = await TokenBlacklist().query
      .where('token', '=', token)
      .first();

    if (tokenRecord != null) {
      // Token reuse detected! Possible theft
      final userId = tokenRecord.userId;

      // Security incident: Invalidate ALL tokens for this user
      final auth = AuthManager();
      await auth.logoutAll(userId);

      // Log security incident
      await SecurityLog().query.insert({
        'user_id': userId,
        'event': 'token_reuse_detected',
        'ip_address': RequestContext.request.ip,
        'user_agent': RequestContext.request.userAgent,
        'severity': 'high',
        'created_at': DateTime.now().toIso8601String(),
      });

      // Send alert to user
      await _sendSecurityAlert(userId);
    }
  }

  static Future<void> _logTokenRotation(
    String? oldToken,
    String? newToken,
  ) async {
    // Log for audit trail
    print('Token rotated: \${oldToken?.substring(0, 10)}... -> \${newToken?.substring(0, 10)}...');
  }

  static Future<void> _sendSecurityAlert(dynamic userId) async {
    // Send email/notification to user about suspicious activity
    print('Security alert sent to user \$userId');
  }
}
`;

const tokenVerification = `
import 'package:khadem/khadem.dart';

class TokenVerificationService {
  /// Verify access token
  static Future<bool> verifyToken(String token) async {
    try {
      final auth = AuthManager();

      // This checks:
      // 1. Token signature is valid
      // 2. Token hasn't expired
      // 3. Token isn't blacklisted
      final isValid = await auth.check(token);

      return isValid;
    } catch (e) {
      return false;
    }
  }

  /// Verify and get user
  static Future<Map<String, dynamic>?> verifyAndGetUser(String token) async {
    try {
      final auth = AuthManager();
      final user = await auth.user(token);

      return user.toAuthArray();
    } on AuthException catch (e) {
      print('Token verification failed: \${e.message}');
      return null;
    }
  }

  /// Manual token verification with detailed checks
  static Future<TokenVerificationResult> verifyDetailed(String token) async {
    final result = TokenVerificationResult();

    try {
      // 1. Check format
      if (!_isValidJwtFormat(token)) {
        result.valid = false;
        result.error = 'Invalid token format';
        return result;
      }

      // 2. Decode payload
      final payload = _decodePayload(token);

      // 3. Check expiration
      final exp = payload['exp'] as int;
      final now = DateTime.now().millisecondsSinceEpoch ~/ 1000;

      if (now >= exp) {
        result.valid = false;
        result.error = 'Token expired';
        result.expiredAt = DateTime.fromMillisecondsSinceEpoch(exp * 1000);
        return result;
      }

      // 4. Check signature
      final auth = AuthManager();
      final user = await auth.user(token);

      result.valid = true;
      result.payload = payload;
      result.user = user.toAuthArray();

      return result;
    } catch (e) {
      result.valid = false;
      result.error = e.toString();
      return result;
    }
  }

  static bool _isValidJwtFormat(String token) {
    final parts = token.split('.');
    return parts.length == 3;
  }

  static Map<String, dynamic> _decodePayload(String token) {
    final parts = token.split('.');
    final payload = base64Url.decode(base64Url.normalize(parts[1]));
    return jsonDecode(utf8.decode(payload));
  }
}

class TokenVerificationResult {
  bool valid = false;
  String? error;
  Map<String, dynamic>? payload;
  Map<String, dynamic>? user;
  DateTime? expiredAt;
}
`;

const tokenBlacklist = `
import 'package:khadem/khadem.dart';

/// Token blacklist for invalidation
class TokenBlacklistService {
  /// Blacklist a token (logout)
  static Future<void> blacklistToken(String token) async {
    // Decode token to get expiration
    final payload = _decodePayload(token);
    final exp = payload['exp'] as int;
    final expiresAt = DateTime.fromMillisecondsSinceEpoch(exp * 1000);
    final userId = payload['user_id'];

    // Store in blacklist
    await TokenBlacklist().query.insert({
      'token': token,
      'user_id': userId,
      'expires_at': expiresAt.toIso8601String(),
      'blacklisted_at': DateTime.now().toIso8601String(),
    });

    // Optionally store in Redis for faster lookup
    // await redis.set('blacklist:\$token', '1', ex: expiresAt.difference(DateTime.now()).inSeconds);
  }

  /// Check if token is blacklisted
  static Future<bool> isBlacklisted(String token) async {
    // Check Redis first (faster)
    // final redisResult = await redis.get('blacklist:\$token');
    // if (redisResult != null) return true;

    // Check database
    final record = await TokenBlacklist().query
      .where('token', '=', token)
      .first();

    return record != null;
  }

  /// Blacklist all tokens for a user
  static Future<void> blacklistAllUserTokens(dynamic userId) async {
    // This would require storing all active tokens
    // Or use a simpler approach: store user_id with timestamp
    await UserTokenInvalidation().query.insert({
      'user_id': userId,
      'invalidated_at': DateTime.now().toIso8601String(),
    });

    // During verification, check if token was issued before this timestamp
  }

  /// Cleanup expired blacklist entries
  static Future<void> cleanupExpiredTokens() async {
    await TokenBlacklist().query
      .where('expires_at', '<', DateTime.now().toIso8601String())
      .delete();
  }

  static Map<String, dynamic> _decodePayload(String token) {
    final parts = token.split('.');
    final payload = base64Url.decode(base64Url.normalize(parts[1]));
    return jsonDecode(utf8.decode(payload));
  }
}

// Database migration for token blacklist
class CreateTokenBlacklistTable extends Migration {
  @override
  Future<void> up() async {
    await createTable('token_blacklist', (table) {
      table.id();
      table.text('token').unique();
      table.bigInteger('user_id').index();
      table.timestamp('expires_at');
      table.timestamp('blacklisted_at');
      table.timestamps();
    });
  }

  @override
  Future<void> down() async {
    await dropTable('token_blacklist');
  }
}
`;

const logoutStrategies = `
import 'package:khadem/khadem.dart';

class LogoutController {
  /// Logout from current device only
  static Future<void> logout(Request req, Response res) async {
    final token = req.header('authorization')?.replaceFirst('Bearer ', '');

    if (token == null) {
      return res.status(401).sendJson({'error': 'Token required'});
    }

    // Blacklist current token
    final auth = AuthManager();
    await auth.logout(token);

    res.sendJson({
      'message': 'Logged out successfully',
    });
  }

  /// Logout from all devices
  static Future<void> logoutAll(Request req, Response res) async {
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();

    // Invalidate all tokens for this user
    final auth = AuthManager();
    await auth.logoutAll(userId);

    res.sendJson({
      'message': 'Logged out from all devices',
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

    // Invalidate all tokens except current
    final auth = AuthManager();
    await auth.logoutOthers(userId, currentToken);

    res.sendJson({
      'message': 'Logged out from other devices',
    });
  }

  /// Revoke specific device/token
  static Future<void> revokeDevice(Request req, Response res) async {
    final deviceToken = req.input('device_token');
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    if (deviceToken == null) {
      return res.status(400).sendJson({'error': 'Device token required'});
    }

    // Verify user owns this token before revoking
    final userId = authenticatable.getAuthIdentifier();

    // Revoke specific token
    await TokenBlacklistService.blacklistToken(deviceToken);

    res.sendJson({
      'message': 'Device revoked successfully',
    });
  }
}
`;

const tokenStorage = `
// ===== SERVER-SIDE (Khadem/Dart) =====

import 'package:khadem/khadem.dart';

class SecureTokenController {
  /// Set tokens in secure httpOnly cookies
  static Future<void> loginWithCookies(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    final auth = AuthManager(guard: 'web');
    final authResponse = await auth.attempt(data);

    // Set access token in httpOnly cookie (15 min)
    res.cookieHandler.set(
      'access_token',
      authResponse.accessToken!,
      maxAge: Duration(minutes: 15),
      httpOnly: true,
      secure: true, // HTTPS only
      sameSite: 'strict', // CSRF protection
    );

    // Set refresh token in httpOnly cookie (2 weeks)
    if (authResponse.refreshToken != null) {
      res.cookieHandler.set(
        'refresh_token',
        authResponse.refreshToken!,
        maxAge: Duration(days: 14),
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      );
    }

    res.sendJson({
      'message': 'Login successful',
      'user': authResponse.user,
    });
  }
}

// ===== CLIENT-SIDE (JavaScript/TypeScript) =====

class SecureTokenClient {
  // RECOMMENDED: Store in memory (most secure)
  private accessToken: string | null = null;

  async login(email: string, password: string) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include', // Send cookies
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Store access token in memory
    this.accessToken = data.data.access_token;

    // Refresh token is in httpOnly cookie (can't be accessed by JS)

    return data;
  }

  async apiRequest(url: string, options: RequestInit = {}) {
    const headers = new Headers(options.headers);

    // Add access token to header
    if (this.accessToken) {
      headers.set('Authorization', \`Bearer \${this.accessToken}\`);
    }

    return fetch(url, {
      ...options,
      headers,
      credentials: 'include', // Send cookies
    });
  }
}

// ACCEPTABLE: sessionStorage for SPAs (lost on tab close)
class SessionStorageClient {
  login(accessToken: string) {
    sessionStorage.setItem('access_token', accessToken);
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }
}

// NOT RECOMMENDED: localStorage (vulnerable to XSS)
// Don't use this unless absolutely necessary
class LocalStorageClient {
  login(accessToken: string) {
    localStorage.setItem('access_token', accessToken); // ⚠️ XSS risk
  }
}
`;

const customClaims = `
import 'package:khadem/khadem.dart';

/// Add custom claims to JWT tokens
class CustomClaimsController {
  static Future<void> loginWithCustomClaims(Request req, Response res) async {
    final data = await req.validate({
      'email': 'required|email',
      'password': 'required|min:6',
    });

    // Get user
    final user = await User().query
      .where('email', '=', data['email'])
      .first();

    if (user == null) {
      return res.status(401).sendJson({'error': 'Invalid credentials'});
    }

    // Verify password
    if (!HashHelper.verify(data['password'], user.password ?? '')) {
      return res.status(401).sendJson({'error': 'Invalid credentials'});
    }

    // Create token with custom claims
    final tokenPayload = {
      // Standard claims
      'user_id': user.id,
      'email': user.email,

      // Custom claims
      'role': user.role, // User role
      'permissions': user.permissions ?? [], // User permissions
      'account_type': user.accountType, // Free/Premium/Enterprise
      'subscription_expires': user.subscriptionExpires?.toIso8601String(),
      'features': user.enabledFeatures ?? [], // Enabled features

      // Timestamps
      'iat': DateTime.now().millisecondsSinceEpoch ~/ 1000,
      'exp': DateTime.now().add(Duration(hours: 1)).millisecondsSinceEpoch ~/ 1000,
    };

    // Generate token (this would use your JWT library)
    final accessToken = await _generateToken(tokenPayload);

    res.sendJson({
      'success': true,
      'data': {
        'access_token': accessToken,
        'token_type': 'Bearer',
        'expires_in': 3600,
        'user': user.toJson(),
      }
    });
  }

  /// Verify custom claims in middleware
  static Future<void> checkSubscription(Request req, Response res, NextFunction next) async {
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final user = authenticatable.toAuthArray();

    // Check subscription expiration from token claims
    final subscriptionExpires = user['subscription_expires'];

    if (subscriptionExpires != null) {
      final expiresAt = DateTime.parse(subscriptionExpires);

      if (DateTime.now().isAfter(expiresAt)) {
        return res.status(403).sendJson({
          'error': 'Subscription expired',
          'expires_at': subscriptionExpires,
        });
      }
    }

    await next();
  }

  /// Check if user has specific feature
  static Future<void> requireFeature(String feature) async {
    return Middleware((req, res, next) async {
      final user = req.authenticatable?.toAuthArray();

      if (user == null) {
        return res.status(401).sendJson({'error': 'Unauthenticated'});
      }

      final features = (user['features'] as List?)?.cast<String>() ?? [];

      if (!features.contains(feature)) {
        return res.status(403).sendJson({
          'error': 'Feature not available',
          'required_feature': feature,
        });
      }

      await next();
    });
  }

  static Future<String> _generateToken(Map<String, dynamic> payload) async {
    // Use your JWT library to generate token
    throw UnimplementedError();
  }
}

// Usage
void defineRoutes() {
  // Require premium subscription
  Route.get('/api/premium/content', PremiumController.content)
    .middleware([
      AuthMiddleware.bearer(),
      CustomClaimsController.checkSubscription,
    ]);

  // Require specific feature
  Route.get('/api/analytics', AnalyticsController.index)
    .middleware([
      AuthMiddleware.bearer(),
      await CustomClaimsController.requireFeature('analytics'),
    ]);
}
`;

const multipleDevices = `
import 'package:khadem/khadem.dart';

/// Track user sessions across multiple devices
class DeviceSession {
  int? id;
  int? userId;
  String? deviceName;
  String? deviceType; // mobile, web, tablet
  String? ipAddress;
  String? userAgent;
  String? refreshToken;
  DateTime? lastActivity;
  DateTime? createdAt;

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'device_name': deviceName,
      'device_type': deviceType,
      'ip_address': ipAddress,
      'last_activity': lastActivity?.toIso8601String(),
      'created_at': createdAt?.toIso8601String(),
    };
  }
}

class DeviceSessionController {
  /// Get all active sessions for current user
  static Future<void> listSessions(Request req, Response res) async {
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();

    final sessions = await DeviceSession().query
      .where('user_id', '=', userId)
      .orderBy('last_activity', 'desc')
      .get();

    res.sendJson({
      'sessions': sessions.map((s) => s.toJson()).toList(),
    });
  }

  /// Revoke specific session
  static Future<void> revokeSession(Request req, Response res) async {
    final sessionId = req.param('id');
    final authenticatable = req.authenticatable;

    if (authenticatable == null) {
      return res.status(401).sendJson({'error': 'Unauthenticated'});
    }

    final userId = authenticatable.getAuthIdentifier();

    // Find session
    final session = await DeviceSession().query
      .where('id', '=', sessionId)
      .where('user_id', '=', userId)
      .first();

    if (session == null) {
      return res.status(404).sendJson({'error': 'Session not found'});
    }

    // Blacklist the refresh token
    if (session.refreshToken != null) {
      await TokenBlacklistService.blacklistToken(session.refreshToken!);
    }

    // Delete session
    await session.delete();

    res.sendJson({
      'message': 'Session revoked',
    });
  }

  /// Store new device session on login
  static Future<void> createSession(
    int userId,
    String refreshToken,
    Request req,
  ) async {
    // Parse user agent for device info
    final userAgent = req.userAgent ?? 'Unknown';
    final deviceInfo = _parseUserAgent(userAgent);

    await DeviceSession().query.insert({
      'user_id': userId,
      'device_name': deviceInfo['name'],
      'device_type': deviceInfo['type'],
      'ip_address': req.ip,
      'user_agent': userAgent,
      'refresh_token': refreshToken,
      'last_activity': DateTime.now().toIso8601String(),
      'created_at': DateTime.now().toIso8601String(),
    });
  }

  /// Update session activity
  static Future<void> updateActivity(String refreshToken) async {
    await DeviceSession().query
      .where('refresh_token', '=', refreshToken)
      .update({'last_activity': DateTime.now().toIso8601String()});
  }

  static Map<String, String> _parseUserAgent(String userAgent) {
    // Simple parsing (use a library for production)
    if (userAgent.contains('Mobile')) {
      return {'name': 'Mobile Device', 'type': 'mobile'};
    } else if (userAgent.contains('Tablet')) {
      return {'name': 'Tablet', 'type': 'tablet'};
    } else {
      return {'name': 'Desktop', 'type': 'web'};
    }
  }
}

// Example response from /api/sessions:
// {
//   "sessions": [
//     {
//       "id": 1,
//       "device_name": "Mobile Device",
//       "device_type": "mobile",
//       "ip_address": "192.168.1.100",
//       "last_activity": "2024-01-15T10:30:00Z",
//       "created_at": "2024-01-14T08:00:00Z"
//     },
//     {
//       "id": 2,
//       "device_name": "Desktop",
//       "device_type": "web",
//       "ip_address": "192.168.1.101",
//       "last_activity": "2024-01-15T09:15:00Z",
//       "created_at": "2024-01-10T12:00:00Z"
//     }
//   ]
// }
`;

const tokenConfig = `
// config/auth.dart
const authConfig = {
  'jwt': {
    // Secret key (use strong random string)
    'secret': env('JWT_SECRET', 'your-256-bit-secret'),

    // Algorithm (HS256, HS384, HS512, RS256, etc.)
    'algo': 'HS256',

    // Access token lifetime (seconds)
    'ttl': env('JWT_TTL', 3600), // 1 hour

    // Refresh token lifetime (seconds)
    'refresh_ttl': env('JWT_REFRESH_TTL', 1209600), // 2 weeks

    // Token issuer
    'issuer': 'khadem-app',

    // Token audience
    'audience': 'khadem-api',

    // Enable token rotation
    'rotate_refresh_tokens': true,

    // Blacklist check
    'blacklist_enabled': true,

    // Leeway for clock skew (seconds)
    'leeway': 60,
  },

  // Token storage
  'token_storage': {
    'driver': 'database', // database, redis, memory
    'table': 'token_blacklist',
    'cleanup_interval': 3600, // Clean expired tokens every hour
  },

  // Device tracking
  'track_devices': true,
  'max_devices': 5, // Maximum concurrent devices per user
};

// Environment variables (.env)
// JWT_SECRET=your-super-secret-256-bit-key
// JWT_TTL=3600
// JWT_REFRESH_TTL=1209600
`;
</script>
