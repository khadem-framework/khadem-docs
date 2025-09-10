<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">WebSockets</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Real-time communication with WebSockets for building interactive applications.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">WebSocket Basics</h2>

      <CodeBlock
        :code="websocketBasicsCode"
        language="dart"
        title="Basic WebSocket Server Setup"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Connection States</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>connecting</code> - Establishing connection</li>
            <li><code>open</code> - Connection established</li>
            <li><code>closing</code> - Connection closing</li>
            <li><code>closed</code> - Connection closed</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Message Types</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>text</code> - UTF-8 text messages</li>
            <li><code>binary</code> - Binary data</li>
            <li><code>ping/pong</code> - Heartbeat messages</li>
            <li><code>close</code> - Connection close</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">WebSocket Channels</h2>

      <CodeBlock
        :code="websocketChannelsCode"
        language="dart"
        title="Channel-based Communication"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Channel Types</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li><strong>Public Channels:</strong> Anyone can subscribe</li>
          <li><strong>Private Channels:</strong> Authentication required</li>
          <li><strong>Presence Channels:</strong> Show online users</li>
          <li><strong>Direct Messages:</strong> User-to-user communication</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Authentication & Authorization</h2>

      <CodeBlock
        :code="websocketAuthCode"
        language="dart"
        title="WebSocket Authentication"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Auth Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Token-based authentication</li>
            <li>Session-based auth</li>
            <li>API key authentication</li>
            <li>Custom auth middleware</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Security Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Origin validation</li>
            <li>Rate limiting</li>
            <li>Connection limits</li>
            <li>Message size limits</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Real-time Chat Application</h2>

      <CodeBlock
        :code="chatApplicationCode"
        language="dart"
        title="Real-time Chat Implementation"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Chat Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>Real-time messaging</li>
          <li>Typing indicators</li>
          <li>Online status</li>
          <li>Message history</li>
          <li>Private messaging</li>
          <li>Group chats</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Broadcasting Events</h2>

      <CodeBlock
        :code="broadcastingCode"
        language="dart"
        title="Event Broadcasting System"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Broadcast Types</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>To all connected clients</li>
            <li>To specific users</li>
            <li>To channel subscribers</li>
            <li>Except specific users</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Use Cases</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>System notifications</li>
            <li>Live updates</li>
            <li>Game state sync</li>
            <li>Collaborative editing</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Presence Channels</h2>

      <CodeBlock
        :code="presenceChannelsCode"
        language="dart"
        title="Presence Channel Implementation"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Presence Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Track online users</li>
          <li>User join/leave events</li>
          <li>Real-time user lists</li>
          <li>User information sharing</li>
          <li>Presence state management</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Client-side Integration</h2>

      <CodeBlock
        :code="clientIntegrationCode"
        language="dart"
        title="JavaScript Client Integration"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Client Libraries</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Native WebSocket API</li>
            <li>Socket.IO client</li>
            <li>Custom client libraries</li>
            <li>Framework integrations</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Connection Handling</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Automatic reconnection</li>
            <li>Connection pooling</li>
            <li>Error handling</li>
            <li>Message queuing</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Scaling WebSockets</h2>

      <CodeBlock
        :code="scalingCode"
        language="dart"
        title="WebSocket Scaling Strategies"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Scaling Techniques</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li>Load balancing with sticky sessions</li>
          <li>Redis adapter for cross-server communication</li>
          <li>Horizontal scaling with message queues</li>
          <li>Connection limits and resource management</li>
          <li>Database optimization for presence data</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling & Debugging</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling and Debugging"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Common Issues</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Connection drops</li>
            <li>Message loss</li>
            <li>Memory leaks</li>
            <li>Rate limiting</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Debugging Tools</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Connection logging</li>
            <li>Message tracing</li>
            <li>Performance monitoring</li>
            <li>Client debugging</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Complete Example</h2>

      <CodeBlock
        :code="completeExampleCode"
        language="dart"
        title="Complete WebSocket Application"
      />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use secure WebSocket connections (WSS)</li>
            <li>Implement proper authentication and authorization</li>
            <li>Handle connection errors gracefully</li>
            <li>Use channels for organized communication</li>
            <li>Implement heartbeat/ping-pong for connection health</li>
            <li>Validate and sanitize all messages</li>
            <li>Use connection pooling for scalability</li>
            <li>Monitor connection counts and performance</li>
            <li>Implement rate limiting to prevent abuse</li>
            <li>Use message queuing for reliability</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't send sensitive data without encryption</li>
            <li>Don't trust client-side validation alone</li>
            <li>Don't forget to handle connection cleanup</li>
            <li>Don't use WebSockets for one-way communication when HTTP suffices</li>
            <li>Don't ignore connection limits</li>
            <li>Don't block the event loop with heavy operations</li>
            <li>Don't forget to implement reconnection logic on the client</li>
            <li>Don't use WebSockets for file transfers</li>
            <li>Don't expose internal system information</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'WebSockets',
  meta: [
    { name: 'description', content: 'Real-time communication with WebSockets in Khadem' }
  ]
})

const websocketBasicsCode = `// Basic WebSocket server setup
import 'package:khadem/khadem_dart.dart';

class WebSocketController {
  static Future handleConnection(WebSocket socket, Request request) async {
    print('New WebSocket connection: \${request.ip}');

    // Handle incoming messages
    socket.onMessage.listen((message) {
      print('Received: \$message');

      // Echo the message back
      socket.send('Echo: \$message');
    });

    // Handle connection close
    socket.onClose.listen((closeEvent) {
      print('Connection closed: \${closeEvent.code} - \${closeEvent.reason}');
    });

    // Handle errors
    socket.onError.listen((error) {
      print('WebSocket error: \$error');
    });

    // Send welcome message
    socket.send('Welcome to Khadem WebSocket server!');
  }
}

// Setup WebSocket route
void setupWebSocketRoutes(Server server) {
  server.websocket('/ws', WebSocketController.handleConnection);
}

// Advanced WebSocket handling
class AdvancedWebSocketHandler {
  static final Map<String, WebSocket> _connections = {};
  static int _connectionCount = 0;

  static Future handleConnection(WebSocket socket, Request request) async {
    final connectionId = 'conn_\${++_connectionCount}';
    _connections[connectionId] = socket;

    print('Connection \$connectionId established from \${request.ip}');

    // Send connection info
    socket.send(jsonEncode({
      'type': 'connection_established',
      'connection_id': connectionId,
      'timestamp': DateTime.now().toIso8601String()
    }));

    // Handle messages with JSON parsing
    socket.onMessage.listen((message) async {
      try {
        final data = jsonDecode(message);

        switch (data['type']) {
          case 'ping':
            socket.send(jsonEncode({
              'type': 'pong',
              'timestamp': DateTime.now().toIso8601String()
            }));
            break;

          case 'broadcast':
            await broadcastToAll(data['message'], exclude: connectionId);
            break;

          case 'private_message':
            await sendToConnection(data['target_id'], data['message']);
            break;

          default:
            socket.send(jsonEncode({
              'type': 'error',
              'message': 'Unknown message type: \${data['type']}'
            }));
        }
      } catch (e) {
        socket.send(jsonEncode({
          'type': 'error',
          'message': 'Invalid JSON message',
          'error': e.toString()
        }));
      }
    });

    // Handle disconnection
    socket.onClose.listen((closeEvent) {
      _connections.remove(connectionId);
      print('Connection \$connectionId closed');

      // Notify other clients
      broadcastToAll('\$connectionId disconnected', system: true);
    });

    // Handle errors
    socket.onError.listen((error) {
      print('Connection \$connectionId error: \$error');
      _connections.remove(connectionId);
    });

    // Notify other clients about new connection
    broadcastToAll('\$connectionId connected', system: true, exclude: connectionId);
  }

  static Future broadcastToAll(String message, {
    bool system = false,
    String? exclude
  }) async {
    final messageData = {
      'type': system ? 'system_message' : 'broadcast',
      'message': message,
      'timestamp': DateTime.now().toIso8601String()
    };

    for (final entry in _connections.entries) {
      if (entry.key != exclude) {
        try {
          entry.value.send(jsonEncode(messageData));
        } catch (e) {
          print('Failed to send to \${entry.key}: \$e');
          _connections.remove(entry.key);
        }
      }
    }
  }

  static Future sendToConnection(String connectionId, String message) async {
    final socket = _connections[connectionId];

    if (socket != null) {
      try {
        socket.send(jsonEncode({
          'type': 'private_message',
          'message': message,
          'from': connectionId,
          'timestamp': DateTime.now().toIso8601String()
        }));
      } catch (e) {
        print('Failed to send private message: \$e');
        _connections.remove(connectionId);
      }
    }
  }

  static Future getConnectionCount() async {
    return _connections.length;
  }

  static Future closeAllConnections() async {
    for (final socket in _connections.values) {
      try {
        await socket.close();
      } catch (e) {
        print('Error closing connection: \$e');
      }
    }
    _connections.clear();
  }
}`

const websocketChannelsCode = `// Channel-based WebSocket communication
class ChannelManager {
  static final Map<String, Set<WebSocket>> _channels = {};
  static final Map<String, Map<String, dynamic>> _channelUsers = {};

  // Join a channel
  static Future joinChannel(String channelName, WebSocket socket, String userId) async {
    _channels.putIfAbsent(channelName, () => {}).add(socket);
    _channelUsers.putIfAbsent(channelName, () => {})[userId] = {
      'joined_at': DateTime.now().toIso8601String(),
      'socket': socket
    };

    print('User \$userId joined channel \$channelName');

    // Notify channel members
    await broadcastToChannel(channelName, {
      'type': 'user_joined',
      'user_id': userId,
      'channel': channelName,
      'timestamp': DateTime.now().toIso8601String()
    }, exclude: socket);
  }

  // Leave a channel
  static Future leaveChannel(String channelName, WebSocket socket, String userId) async {
    final channel = _channels[channelName];
    if (channel != null) {
      channel.remove(socket);
      if (channel.isEmpty) {
        _channels.remove(channelName);
        _channelUsers.remove(channelName);
      } else {
        _channelUsers[channelName]?.remove(userId);
      }

      print('User \$userId left channel \$channelName');

      // Notify remaining members
      await broadcastToChannel(channelName, {
        'type': 'user_left',
        'user_id': userId,
        'channel': channelName,
        'timestamp': DateTime.now().toIso8601String()
      });
    }
  }

  // Broadcast to channel
  static Future broadcastToChannel(String channelName, dynamic message, {
    WebSocket? exclude
  }) async {
    final channel = _channels[channelName];
    if (channel != null) {
      final messageStr = message is String ? message : jsonEncode(message);

      for (final socket in channel) {
        if (socket != exclude) {
          try {
            socket.send(messageStr);
          } catch (e) {
            print('Failed to broadcast to channel \$channelName: \$e');
            // Remove dead connections
            channel.remove(socket);
          }
        }
      }
    }
  }

  // Send to specific user in channel
  static Future sendToUserInChannel(String channelName, String userId, dynamic message) async {
    final channelUsers = _channelUsers[channelName];
    if (channelUsers != null) {
      final userInfo = channelUsers[userId];
      if (userInfo != null) {
        final socket = userInfo['socket'] as WebSocket;
        try {
          socket.send(message is String ? message : jsonEncode(message));
        } catch (e) {
          print('Failed to send to user \$userId: \$e');
          channelUsers.remove(userId);
        }
      }
    }
  }

  // Get channel info
  static Map<String, dynamic> getChannelInfo(String channelName) {
    final channel = _channels[channelName];
    final users = _channelUsers[channelName];

    return {
      'name': channelName,
      'connection_count': channel?.length ?? 0,
      'user_count': users?.length ?? 0,
      'users': users?.keys.toList() ?? []
    };
  }

  // List all channels
  static List<String> getChannels() {
    return _channels.keys.toList();
  }

  // Clean up empty channels
  static void cleanup() {
    _channels.removeWhere((name, sockets) => sockets.isEmpty);
    _channelUsers.removeWhere((name, users) => users.isEmpty);
  }
}

// Channel-based message handler
class ChannelMessageHandler {
  static Future handleMessage(WebSocket socket, String message, String userId) async {
    try {
      final data = jsonDecode(message);

      switch (data['type']) {
        case 'join_channel':
          final channelName = data['channel'];
          if (channelName != null) {
            await ChannelManager.joinChannel(channelName, socket, userId);

            // Send channel info
            socket.send(jsonEncode({
              'type': 'channel_joined',
              'channel': channelName,
              'info': ChannelManager.getChannelInfo(channelName)
            }));
          }
          break;

        case 'leave_channel':
          final channelName = data['channel'];
          if (channelName != null) {
            await ChannelManager.leaveChannel(channelName, socket, userId);
          }
          break;

        case 'channel_message':
          final channelName = data['channel'];
          final messageText = data['message'];
          if (channelName != null && messageText != null) {
            await ChannelManager.broadcastToChannel(channelName, {
              'type': 'channel_message',
              'user_id': userId,
              'message': messageText,
              'channel': channelName,
              'timestamp': DateTime.now().toIso8601String()
            }, exclude: socket);
          }
          break;

        case 'private_message':
          final targetUserId = data['target_user'];
          final channelName = data['channel'];
          final messageText = data['message'];
          if (targetUserId != null && channelName != null && messageText != null) {
            await ChannelManager.sendToUserInChannel(channelName, targetUserId, {
              'type': 'private_message',
              'from_user': userId,
              'message': messageText,
              'channel': channelName,
              'timestamp': DateTime.now().toIso8601String()
            });
          }
          break;

        case 'get_channel_info':
          final channelName = data['channel'];
          if (channelName != null) {
            socket.send(jsonEncode({
              'type': 'channel_info',
              'channel': channelName,
              'info': ChannelManager.getChannelInfo(channelName)
            }));
          }
          break;

        default:
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Unknown message type: \${data['type']}'
          }));
      }
    } catch (e) {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'Invalid message format',
        'error': e.toString()
      }));
    }
  }
}`

const websocketAuthCode = `// WebSocket authentication and authorization
class WebSocketAuth {
  static final Map<String, String> _authenticatedSockets = {};
  static final Map<String, Set<String>> _userChannels = {};

  // Authenticate WebSocket connection
  static Future<bool> authenticate(WebSocket socket, Request request) async {
    // Check for authentication token in query parameters
    final token = request.query['token'];

    if (token == null) {
      socket.send(jsonEncode({
        'type': 'auth_error',
        'message': 'Authentication token required'
      }));
      await socket.close();
      return false;
    }

    try {
      // Verify JWT token
      final payload = await JWT.verify(token);

      if (payload == null) {
        throw Exception('Invalid token');
      }

      final userId = payload['sub'];
      final connectionId = 'conn_\${DateTime.now().millisecondsSinceEpoch}';

      _authenticatedSockets[socket.hashCode.toString()] = userId;
      _userChannels.putIfAbsent(userId, () => {});

      // Send authentication success
      socket.send(jsonEncode({
        'type': 'auth_success',
        'user_id': userId,
        'connection_id': connectionId
      }));

      return true;

    } catch (e) {
      socket.send(jsonEncode({
        'type': 'auth_error',
        'message': 'Authentication failed: \${e.toString()}'
      }));
      await socket.close();
      return false;
    }
  }

  // Authorize channel access
  static Future<bool> authorizeChannel(String userId, String channelName) async {
    // Check if user has permission to access channel
    final user = await User.find(userId);

    if (user == null) {
      return false;
    }

    // Public channels (no authorization required)
    if (channelName.startsWith('public:')) {
      return true;
    }

    // Private channels (user-specific)
    if (channelName.startsWith('private:')) {
      return channelName == 'private:\$userId';
    }

    // Group channels (check membership)
    if (channelName.startsWith('group:')) {
      final groupId = channelName.split(':')[1];
      return await user.isMemberOfGroup(groupId);
    }

    // Admin channels
    if (channelName.startsWith('admin:')) {
      return user.hasRole('admin');
    }

    return false;
  }

  // Get authenticated user ID for socket
  static String? getUserId(WebSocket socket) {
    return _authenticatedSockets[socket.hashCode.toString()];
  }

  // Check if socket is authenticated
  static bool isAuthenticated(WebSocket socket) {
    return _authenticatedSockets.containsKey(socket.hashCode.toString());
  }

  // Remove authentication on disconnect
  static void removeAuthentication(WebSocket socket) {
    final socketKey = socket.hashCode.toString();
    final userId = _authenticatedSockets[socketKey];

    if (userId != null) {
      _authenticatedSockets.remove(socketKey);
      _userChannels[userId]?.clear();
    }
  }

  // Rate limiting for WebSocket messages
  static final Map<String, RateLimiter> _rateLimiters = {};

  static Future<bool> checkRateLimit(WebSocket socket, String action) async {
    final userId = getUserId(socket);
    if (userId == null) return false;

    final key = '\$userId:\$action';
    final limiter = _rateLimiters.putIfAbsent(key, () =>
      RateLimiter(maxRequests: getRateLimitForAction(action), window: Duration(minutes: 1))
    );

    final result = await limiter.check(userId);
    return result.allowed;
  }

  static int getRateLimitForAction(String action) {
    switch (action) {
      case 'message': return 60; // 60 messages per minute
      case 'join_channel': return 10; // 10 channel joins per minute
      case 'file_upload': return 5; // 5 file uploads per minute
      default: return 30; // 30 actions per minute
    }
  }
}

// Authenticated WebSocket handler
class AuthenticatedWebSocketHandler {
  static Future handleConnection(WebSocket socket, Request request) async {
    // Authenticate connection
    final authenticated = await WebSocketAuth.authenticate(socket, request);

    if (!authenticated) {
      return;
    }

    final userId = WebSocketAuth.getUserId(socket)!;

    // Handle messages
    socket.onMessage.listen((message) async {
      try {
        final data = jsonDecode(message);

        // Check rate limit
        if (!await WebSocketAuth.checkRateLimit(socket, data['type'] ?? 'unknown')) {
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Rate limit exceeded'
          }));
          return;
        }

        // Handle different message types
        switch (data['type']) {
          case 'join_channel':
            final channelName = data['channel'];
            if (channelName != null) {
              final authorized = await WebSocketAuth.authorizeChannel(userId, channelName);
              if (authorized) {
                await ChannelManager.joinChannel(channelName, socket, userId);
              } else {
                socket.send(jsonEncode({
                  'type': 'error',
                  'message': 'Unauthorized to join channel: \$channelName'
                }));
              }
            }
            break;

          case 'channel_message':
            final channelName = data['channel'];
            if (channelName != null) {
              final authorized = await WebSocketAuth.authorizeChannel(userId, channelName);
              if (authorized) {
                await ChannelManager.broadcastToChannel(channelName, {
                  'type': 'channel_message',
                  'user_id': userId,
                  'message': data['message'],
                  'timestamp': DateTime.now().toIso8601String()
                }, exclude: socket);
              }
            }
            break;

          default:
            socket.send(jsonEncode({
              'type': 'error',
              'message': 'Unknown message type: \${data['type']}'
            }));
        }
      } catch (e) {
        socket.send(jsonEncode({
          'type': 'error',
          'message': 'Invalid message format'
        }));
      }
    });

    // Handle disconnection
    socket.onClose.listen((closeEvent) {
      WebSocketAuth.removeAuthentication(socket);
      print('User \$userId disconnected');
    });

    // Handle errors
    socket.onError.listen((error) {
      WebSocketAuth.removeAuthentication(socket);
      print('WebSocket error for user \$userId: \$error');
    });
  }
}`

const chatApplicationCode = `// Real-time chat application
class ChatRoom {
  static final Map<String, Set<WebSocket>> _rooms = {};
  static final Map<String, Map<String, dynamic>> _roomUsers = {};
  static final Map<String, List<Map<String, dynamic>>> _messageHistory = {};

  // Join chat room
  static Future joinRoom(String roomName, WebSocket socket, String userId, String username) async {
    _rooms.putIfAbsent(roomName, () => {}).add(socket);
    _roomUsers.putIfAbsent(roomName, () => {})[userId] = {
      'username': username,
      'joined_at': DateTime.now().toIso8601String(),
      'socket': socket
    };

    // Send recent message history
    final history = _messageHistory[roomName] ?? [];
    if (history.isNotEmpty) {
      socket.send(jsonEncode({
        'type': 'message_history',
        'room': roomName,
        'messages': history.take(50).toList() // Last 50 messages
      }));
    }

    // Notify room members
    await broadcastToRoom(roomName, {
      'type': 'user_joined',
      'user_id': userId,
      'username': username,
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    }, exclude: socket);

    // Send room info
    socket.send(jsonEncode({
      'type': 'room_joined',
      'room': roomName,
      'user_count': _rooms[roomName]?.length ?? 0,
      'users': _roomUsers[roomName]?.values.map((u) => {
        'user_id': u.keys.firstWhere((k) => k != 'socket'),
        'username': u['username'],
        'joined_at': u['joined_at']
      }).toList()
    }));
  }

  // Leave chat room
  static Future leaveRoom(String roomName, WebSocket socket, String userId) async {
    final room = _rooms[roomName];
    final roomUsers = _roomUsers[roomName];

    if (room != null && roomUsers != null) {
      room.remove(socket);
      final userInfo = roomUsers[userId];

      if (userInfo != null) {
        final username = userInfo['username'];

        // Notify remaining members
        await broadcastToRoom(roomName, {
          'type': 'user_left',
          'user_id': userId,
          'username': username,
          'room': roomName,
          'timestamp': DateTime.now().toIso8601String()
        });

        roomUsers.remove(userId);
      }

      // Clean up empty rooms
      if (room.isEmpty) {
        _rooms.remove(roomName);
        _roomUsers.remove(roomName);
        _messageHistory.remove(roomName);
      }
    }
  }

  // Send message to room
  static Future sendMessage(String roomName, String userId, String username, String message) async {
    final messageData = {
      'id': generateMessageId(),
      'user_id': userId,
      'username': username,
      'message': message,
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    };

    // Store in history
    _messageHistory.putIfAbsent(roomName, () => []).add(messageData);

    // Keep only last 1000 messages
    if (_messageHistory[roomName]!.length > 1000) {
      _messageHistory[roomName] = _messageHistory[roomName]!.sublist(500);
    }

    // Broadcast to room
    await broadcastToRoom(roomName, {
      'type': 'message',
      ...messageData
    });

    // Save to database asynchronously
    unawaited(saveMessageToDatabase(messageData));
  }

  // Handle typing indicators
  static Future handleTyping(String roomName, String userId, String username, bool isTyping) async {
    await broadcastToRoom(roomName, {
      'type': 'typing',
      'user_id': userId,
      'username': username,
      'is_typing': isTyping,
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    }, excludeUserId: userId);
  }

  // Private messaging
  static Future sendPrivateMessage(String fromUserId, String fromUsername,
                                   String toUserId, String message) async {
    final messageData = {
      'id': generateMessageId(),
      'from_user_id': fromUserId,
      'from_username': fromUsername,
      'to_user_id': toUserId,
      'message': message,
      'timestamp': DateTime.now().toIso8601String()
    };

    // Find recipient's socket
    for (final room in _rooms.values) {
      for (final socket in room) {
        final socketUserId = getUserIdForSocket(socket);
        if (socketUserId == toUserId) {
          socket.send(jsonEncode({
            'type': 'private_message',
            ...messageData
          }));
          break;
        }
      }
    }

    // Save to database
    unawaited(savePrivateMessageToDatabase(messageData));
  }

  // Broadcast to room
  static Future broadcastToRoom(String roomName, dynamic message, {
    WebSocket? exclude,
    String? excludeUserId
  }) async {
    final room = _rooms[roomName];
    if (room != null) {
      final messageStr = message is String ? message : jsonEncode(message);

      for (final socket in room) {
        if (socket != exclude) {
          if (excludeUserId != null) {
            final socketUserId = getUserIdForSocket(socket);
            if (socketUserId == excludeUserId) continue;
          }

          try {
            socket.send(messageStr);
          } catch (e) {
            print('Failed to broadcast to room \$roomName: \$e');
            room.remove(socket);
          }
        }
      }
    }
  }

  // Get room information
  static Map<String, dynamic> getRoomInfo(String roomName) {
    final room = _rooms[roomName];
    final users = _roomUsers[roomName];

    return {
      'name': roomName,
      'user_count': room?.length ?? 0,
      'users': users?.entries.map((entry) => {
        'user_id': entry.key,
        'username': entry.value['username'],
        'joined_at': entry.value['joined_at']
      }).toList() ?? [],
      'message_count': _messageHistory[roomName]?.length ?? 0
    };
  }

  // Helper functions
  static String generateMessageId() {
    return 'msg_\${DateTime.now().millisecondsSinceEpoch}_\${Random().nextInt(1000)}';
  }

  static String? getUserIdForSocket(WebSocket socket) {
    for (final roomUsers in _roomUsers.values) {
      for (final entry in roomUsers.entries) {
        if (entry.value['socket'] == socket) {
          return entry.key;
        }
      }
    }
    return null;
  }

  static Future saveMessageToDatabase(Map<String, dynamic> message) async {
    try {
      await Database.table('chat_messages').insert({
        'id': message['id'],
        'user_id': message['user_id'],
        'room': message['room'],
        'message': message['message'],
        'created_at': message['timestamp']
      });
    } catch (e) {
      print('Failed to save message to database: \$e');
    }
  }

  static Future savePrivateMessageToDatabase(Map<String, dynamic> message) async {
    try {
      await Database.table('private_messages').insert({
        'id': message['id'],
        'from_user_id': message['from_user_id'],
        'to_user_id': message['to_user_id'],
        'message': message['message'],
        'created_at': message['timestamp']
      });
    } catch (e) {
      print('Failed to save private message to database: \$e');
    }
  }
}

// Chat message handler
class ChatMessageHandler {
  static Future handleMessage(WebSocket socket, String message, String userId, String username) async {
    try {
      final data = jsonDecode(message);

      switch (data['type']) {
        case 'join_room':
          final roomName = data['room'];
          if (roomName != null) {
            await ChatRoom.joinRoom(roomName, socket, userId, username);
          }
          break;

        case 'leave_room':
          final roomName = data['room'];
          if (roomName != null) {
            await ChatRoom.leaveRoom(roomName, socket, userId);
          }
          break;

        case 'send_message':
          final roomName = data['room'];
          final messageText = data['message'];
          if (roomName != null && messageText != null) {
            await ChatRoom.sendMessage(roomName, userId, username, messageText);
          }
          break;

        case 'typing':
          final roomName = data['room'];
          final isTyping = data['is_typing'] ?? false;
          if (roomName != null) {
            await ChatRoom.handleTyping(roomName, userId, username, isTyping);
          }
          break;

        case 'private_message':
          final toUserId = data['to_user'];
          final messageText = data['message'];
          if (toUserId != null && messageText != null) {
            await ChatRoom.sendPrivateMessage(userId, username, toUserId, messageText);
          }
          break;

        case 'get_room_info':
          final roomName = data['room'];
          if (roomName != null) {
            socket.send(jsonEncode({
              'type': 'room_info',
              'room': roomName,
              'info': ChatRoom.getRoomInfo(roomName)
            }));
          }
          break;

        default:
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Unknown message type: \${data['type']}'
          }));
      }
    } catch (e) {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'Invalid message format'
      }));
    }
  }
}`

const broadcastingCode = `// Event broadcasting system
class Broadcaster {
  static final Map<String, Set<WebSocket>> _subscribers = {};
  static final Map<String, Map<String, dynamic>> _userInfo = {};

  // Subscribe to events
  static Future subscribe(String event, WebSocket socket, String userId) async {
    _subscribers.putIfAbsent(event, () => {}).add(socket);
    _userInfo.putIfAbsent(userId, () => {})['socket'] = socket;

    print('User \$userId subscribed to event: \$event');
  }

  // Unsubscribe from events
  static Future unsubscribe(String event, WebSocket socket, String userId) async {
    final subscribers = _subscribers[event];
    if (subscribers != null) {
      subscribers.remove(socket);
      if (subscribers.isEmpty) {
        _subscribers.remove(event);
      }
    }
  }

  // Broadcast event to all subscribers
  static Future broadcast(String event, dynamic data) async {
    final subscribers = _subscribers[event];
    if (subscribers != null) {
      final message = jsonEncode({
        'event': event,
        'data': data,
        'timestamp': DateTime.now().toIso8601String()
      });

      for (final socket in subscribers) {
        try {
          socket.send(message);
        } catch (e) {
          print('Failed to broadcast event \$event: \$e');
          subscribers.remove(socket);
        }
      }
    }
  }

  // Broadcast to specific users
  static Future broadcastToUsers(String event, dynamic data, List<String> userIds) async {
    final message = jsonEncode({
      'event': event,
      'data': data,
      'timestamp': DateTime.now().toIso8601String()
    });

    for (final userId in userIds) {
      final socket = _userInfo[userId]?['socket'];
      if (socket != null) {
        try {
          socket.send(message);
        } catch (e) {
          print('Failed to broadcast to user \$userId: \$e');
          _userInfo.remove(userId);
        }
      }
    }
  }

  // Broadcast except specific users
  static Future broadcastExcept(String event, dynamic data, List<String> excludeUserIds) async {
    final subscribers = _subscribers[event];
    if (subscribers != null) {
      final message = jsonEncode({
        'event': event,
        'data': data,
        'timestamp': DateTime.now().toIso8601String()
      });

      for (final socket in subscribers) {
        final userId = getUserIdForSocket(socket);
        if (userId != null && !excludeUserIds.contains(userId)) {
          try {
            socket.send(message);
          } catch (e) {
            print('Failed to broadcast event \$event: \$e');
            subscribers.remove(socket);
          }
        }
      }
    }
  }

  // Broadcast with conditions
  static Future broadcastWhere(String event, dynamic data, bool Function(String userId) condition) async {
    final subscribers = _subscribers[event];
    if (subscribers != null) {
      final message = jsonEncode({
        'event': event,
        'data': data,
        'timestamp': DateTime.now().toIso8601String()
      });

      for (final socket in subscribers) {
        final userId = getUserIdForSocket(socket);
        if (userId != null && condition(userId)) {
          try {
            socket.send(message);
          } catch (e) {
            print('Failed to broadcast event \$event: \$e');
            subscribers.remove(socket);
          }
        }
      }
    }
  }

  // Helper function to get user ID for socket
  static String? getUserIdForSocket(WebSocket socket) {
    for (final entry in _userInfo.entries) {
      if (entry.value['socket'] == socket) {
        return entry.key;
      }
    }
    return null;
  }

  // Clean up disconnected sockets
  static void cleanup() {
    for (final subscribers in _subscribers.values) {
      subscribers.removeWhere((socket) {
        // Check if socket is still connected
        try {
          socket.send('ping');
          return false;
        } catch (e) {
          return true;
        }
      });
    }

    _userInfo.removeWhere((userId, info) {
      final socket = info['socket'];
      try {
        socket.send('ping');
        return false;
      } catch (e) {
        return true;
      }
    });
  }
}

// Event broadcasting handler
class BroadcastingHandler {
  static Future handleMessage(WebSocket socket, String message, String userId) async {
    try {
      final data = jsonDecode(message);

      switch (data['type']) {
        case 'subscribe':
          final event = data['event'];
          if (event != null) {
            await Broadcaster.subscribe(event, socket, userId);
            socket.send(jsonEncode({
              'type': 'subscribed',
              'event': event
            }));
          }
          break;

        case 'unsubscribe':
          final event = data['event'];
          if (event != null) {
            await Broadcaster.unsubscribe(event, socket, userId);
            socket.send(jsonEncode({
              'type': 'unsubscribed',
              'event': event
            }));
          }
          break;

        case 'broadcast':
          final event = data['event'];
          final eventData = data['data'];
          if (event != null && eventData != null) {
            await Broadcaster.broadcast(event, eventData);
          }
          break;

        default:
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Unknown message type: \${data['type']}'
          }));
      }
    } catch (e) {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'Invalid message format'
      }));
    }
  }
}

// Integration with application events
class EventBroadcaster {
  static void setupEventListeners() {
    // Broadcast user registration
    Event.listen('user.registered', (user) async {
      await Broadcaster.broadcast('user.registered', {
        'user_id': user.id,
        'username': user.name,
        'registered_at': user.created_at.toIso8601String()
      });
    });

    // Broadcast new post
    Event.listen('post.created', (post) async {
      await Broadcaster.broadcast('post.created', {
        'post_id': post.id,
        'title': post.title,
        'author_id': post.user_id,
        'created_at': post.created_at.toIso8601String()
      });
    });

    // Broadcast user-specific events
    Event.listen('notification.sent', (notification) async {
      await Broadcaster.broadcastToUsers('notification', {
        'notification_id': notification.id,
        'message': notification.message,
        'type': notification.type
      }, [notification.user_id]);
    });

    // Broadcast system announcements
    Event.listen('system.announcement', (announcement) async {
      await Broadcaster.broadcast('system.announcement', {
        'title': announcement.title,
        'message': announcement.message,
        'level': announcement.level,
        'timestamp': DateTime.now().toIso8601String()
      });
    });
  }
}`

const presenceChannelsCode = `// Presence channel implementation
class PresenceChannel {
  static final Map<String, Map<String, Map<String, dynamic>>> _channels = {};
  static final Map<String, WebSocket> _userSockets = {};

  // Join presence channel
  static Future joinChannel(String channelName, WebSocket socket, String userId, Map<String, dynamic> userInfo) async {
    _channels.putIfAbsent(channelName, () => {});
    _userSockets[userId] = socket;

    // Add user to channel
    _channels[channelName]![userId] = {
      'user_info': userInfo,
      'joined_at': DateTime.now().toIso8601String(),
      'socket': socket
    };

    // Notify existing members about new member
    await broadcastToChannel(channelName, {
      'type': 'member_joined',
      'user_id': userId,
      'user_info': userInfo,
      'channel': channelName,
      'members_count': _channels[channelName]!.length,
      'timestamp': DateTime.now().toIso8601String()
    }, exclude: socket);

    // Send current members list to new member
    final members = _channels[channelName]!.entries.map((entry) => {
      'user_id': entry.key,
      'user_info': entry.value['user_info'],
      'joined_at': entry.value['joined_at']
    }).toList();

    socket.send(jsonEncode({
      'type': 'presence_joined',
      'channel': channelName,
      'members': members,
      'members_count': members.length
    }));

    print('User \$userId joined presence channel \$channelName');
  }

  // Leave presence channel
  static Future leaveChannel(String channelName, WebSocket socket, String userId) async {
    final channel = _channels[channelName];
    if (channel != null) {
      final userInfo = channel.remove(userId);

      if (userInfo != null) {
        // Notify remaining members
        await broadcastToChannel(channelName, {
          'type': 'member_left',
          'user_id': userId,
          'channel': channelName,
          'members_count': channel.length,
          'timestamp': DateTime.now().toIso8601String()
        });

        print('User \$userId left presence channel \$channelName');
      }

      // Clean up empty channels
      if (channel.isEmpty) {
        _channels.remove(channelName);
      }
    }

    _userSockets.remove(userId);
  }

  // Update user presence info
  static Future updatePresence(String channelName, String userId, Map<String, dynamic> userInfo) async {
    final channel = _channels[channelName];
    if (channel != null && channel.containsKey(userId)) {
      channel[userId]!['user_info'] = userInfo;

      // Broadcast presence update
      await broadcastToChannel(channelName, {
        'type': 'presence_updated',
        'user_id': userId,
        'user_info': userInfo,
        'channel': channelName,
        'timestamp': DateTime.now().toIso8601String()
      });
    }
  }

  // Get channel members
  static List<Map<String, dynamic>> getChannelMembers(String channelName) {
    final channel = _channels[channelName];
    if (channel == null) return [];

    return channel.entries.map((entry) => {
      'user_id': entry.key,
      'user_info': entry.value['user_info'],
      'joined_at': entry.value['joined_at']
    }).toList();
  }

  // Check if user is in channel
  static bool isUserInChannel(String channelName, String userId) {
    return _channels[channelName]?.containsKey(userId) ?? false;
  }

  // Get user's presence info
  static Map<String, dynamic>? getUserPresence(String channelName, String userId) {
    final channel = _channels[channelName];
    if (channel == null) return null;

    final userData = channel[userId];
    if (userData == null) return null;

    return {
      'user_id': userId,
      'user_info': userData['user_info'],
      'joined_at': userData['joined_at']
    };
  }

  // Broadcast to channel
  static Future broadcastToChannel(String channelName, dynamic message, {WebSocket? exclude}) async {
    final channel = _channels[channelName];
    if (channel == null) return;

    final messageStr = message is String ? message : jsonEncode(message);

    for (final userData in channel.values) {
      final socket = userData['socket'] as WebSocket;
      if (socket != exclude) {
        try {
          socket.send(messageStr);
        } catch (e) {
          print('Failed to broadcast to presence channel \$channelName: \$e');
          // Remove dead connections
          final userId = channel.entries.firstWhere((entry) => entry.value['socket'] == socket).key;
          channel.remove(userId);
        }
      }
    }
  }

  // Send message to specific user in channel
  static Future sendToUser(String channelName, String userId, dynamic message) async {
    final channel = _channels[channelName];
    if (channel == null) return;

    final userData = channel[userId];
    if (userData != null) {
      final socket = userData['socket'] as WebSocket;
      try {
        socket.send(message is String ? message : jsonEncode(message));
      } catch (e) {
        print('Failed to send to user \$userId in channel \$channelName: \$e');
        channel.remove(userId);
      }
    }
  }

  // Get channel statistics
  static Map<String, dynamic> getChannelStats(String channelName) {
    final channel = _channels[channelName];
    if (channel == null) {
      return {'name': channelName, 'members_count': 0, 'members': []};
    }

    final members = channel.entries.map((entry) => {
      'user_id': entry.key,
      'user_info': entry.value['user_info'],
      'joined_at': entry.value['joined_at']
    }).toList();

    return {
      'name': channelName,
      'members_count': channel.length,
      'members': members
    };
  }

  // Clean up disconnected users
  static void cleanup() {
    for (final channelEntry in _channels.entries) {
      final channelName = channelEntry.key;
      final channel = channelEntry.value;

      channel.removeWhere((userId, userData) {
        final socket = userData['socket'] as WebSocket;
        try {
          socket.send('ping');
          return false;
        } catch (e) {
          print('Removing disconnected user \$userId from channel \$channelName');
          return true;
        }
      });

      if (channel.isEmpty) {
        _channels.remove(channelName);
      }
    }

    // Clean up user sockets
    _userSockets.removeWhere((userId, socket) {
      try {
        socket.send('ping');
        return false;
      } catch (e) {
        return true;
      }
    });
  }
}

// Presence channel handler
class PresenceChannelHandler {
  static Future handleMessage(WebSocket socket, String message, String userId) async {
    try {
      final data = jsonDecode(message);

      switch (data['type']) {
        case 'join_presence':
          final channelName = data['channel'];
          final userInfo = data['user_info'] ?? {};
          if (channelName != null) {
            await PresenceChannel.joinChannel(channelName, socket, userId, userInfo);
          }
          break;

        case 'leave_presence':
          final channelName = data['channel'];
          if (channelName != null) {
            await PresenceChannel.leaveChannel(channelName, socket, userId);
          }
          break;

        case 'update_presence':
          final channelName = data['channel'];
          final userInfo = data['user_info'];
          if (channelName != null && userInfo != null) {
            await PresenceChannel.updatePresence(channelName, userId, userInfo);
          }
          break;

        case 'get_members':
          final channelName = data['channel'];
          if (channelName != null) {
            final members = PresenceChannel.getChannelMembers(channelName);
            socket.send(jsonEncode({
              'type': 'members_list',
              'channel': channelName,
              'members': members,
              'count': members.length
            }));
          }
          break;

        case 'presence_message':
          final channelName = data['channel'];
          final messageText = data['message'];
          if (channelName != null && messageText != null) {
            await PresenceChannel.broadcastToChannel(channelName, {
              'type': 'presence_message',
              'user_id': userId,
              'message': messageText,
              'channel': channelName,
              'timestamp': DateTime.now().toIso8601String()
            }, exclude: socket);
          }
          break;

        default:
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Unknown message type: \${data['type']}'
          }));
      }
    } catch (e) {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'Invalid message format'
      }));
    }
  }
}`

const clientIntegrationCode = `// JavaScript client for WebSocket integration
const KhademWebSocket = {
  socket: null,
  reconnectAttempts: 0,
  maxReconnectAttempts: 5,
  reconnectInterval: 1000,
  heartbeatInterval: null,
  messageHandlers: {},
  channels: new Set(),

  // Connect to WebSocket server
  connect(url, options = {}) {
    const wsUrl = this.buildUrl(url, options);

    try {
      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = (event) => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
        this.startHeartbeat();
        this.emit('connected', event);

        // Rejoin channels after reconnection
        this.rejoinChannels();
      };

      this.socket.onmessage = (event) => {
        this.handleMessage(event.data);
      };

      this.socket.onclose = (event) => {
        console.log('WebSocket disconnected:', event.code, event.reason);
        this.stopHeartbeat();
        this.emit('disconnected', event);

        if (!event.wasClean && this.reconnectAttempts < this.maxReconnectAttempts) {
          this.scheduleReconnect();
        }
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.emit('error', error);
      };

    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
      this.emit('error', error);
    }
  },

  // Build WebSocket URL with authentication
  buildUrl(baseUrl, options) {
    const url = new URL(baseUrl);

    // Add authentication token
    if (options.token) {
      url.searchParams.set('token', options.token);
    }

    // Add user info
    if (options.userId) {
      url.searchParams.set('user_id', options.userId);
    }

    // Add additional parameters
    Object.keys(options).forEach(key => {
      if (!['token', 'userId'].includes(key)) {
        url.searchParams.set(key, options[key]);
      }
    });

    return url.toString();
  },

  // Disconnect from WebSocket
  disconnect() {
    if (this.socket) {
      this.stopHeartbeat();
      this.socket.close(1000, 'Client disconnect');
      this.socket = null;
    }
  },

  // Send message
  send(type, data = {}) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const message = {
        type: type,
        ...data,
        timestamp: new Date().toISOString()
      };

      this.socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected');
    }
  },

  // Handle incoming messages
  handleMessage(data) {
    try {
      const message = JSON.parse(data);
      this.emit(message.type, message);
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  },

  // Event system
  on(event, callback) {
    if (!this.messageHandlers[event]) {
      this.messageHandlers[event] = [];
    }
    this.messageHandlers[event].push(callback);
  },

  off(event, callback) {
    if (this.messageHandlers[event]) {
      const index = this.messageHandlers[event].indexOf(callback);
      if (index > -1) {
        this.messageHandlers[event].splice(index, 1);
      }
    }
  },

  emit(event, data) {
    if (this.messageHandlers[event]) {
      this.messageHandlers[event].forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error in event handler:', error);
        }
      });
    }

    // Emit wildcard event
    if (this.messageHandlers['*']) {
      this.messageHandlers['*'].forEach(callback => {
        try {
          callback(event, data);
        } catch (error) {
          console.error('Error in wildcard event handler:', error);
        }
      });
    }
  },

  // Heartbeat for connection health
  startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send('ping');
      }
    }, 30000); // 30 seconds
  },

  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  },

  // Reconnection logic
  scheduleReconnect() {
    this.reconnectAttempts++;
    const delay = Math.min(this.reconnectInterval * Math.pow(2, this.reconnectAttempts), 30000);

    console.log(\`Reconnecting in \${delay}ms (attempt \${this.reconnectAttempts})\`);

    setTimeout(() => {
      // Reconnect with same parameters
      // This assumes the original connection parameters are stored
      this.connect(this.lastUrl, this.lastOptions);
    }, delay);
  },

  // Channel management
  joinChannel(channelName) {
    this.channels.add(channelName);
    this.send('join_channel', { channel: channelName });
  },

  leaveChannel(channelName) {
    this.channels.delete(channelName);
    this.send('leave_channel', { channel: channelName });
  },

  rejoinChannels() {
    this.channels.forEach(channelName => {
      this.send('join_channel', { channel: channelName });
    });
  },

  // Utility methods
  isConnected() {
    return this.socket && this.socket.readyState === WebSocket.OPEN;
  },

  getConnectionState() {
    if (!this.socket) return 'disconnected';

    switch (this.socket.readyState) {
      case WebSocket.CONNECTING: return 'connecting';
      case WebSocket.OPEN: return 'open';
      case WebSocket.CLOSING: return 'closing';
      case WebSocket.CLOSED: return 'closed';
      default: return 'unknown';
    }
  }
};

// Usage example
const ws = Object.create(KhademWebSocket);

// Connect with authentication
ws.connect('ws://localhost:3000/ws', {
  token: localStorage.getItem('auth_token'),
  userId: localStorage.getItem('user_id')
});

// Handle connection events
ws.on('connected', () => {
  console.log('Connected to WebSocket server');
  ws.joinChannel('general');
  ws.joinChannel('notifications');
});

ws.on('disconnected', () => {
  console.log('Disconnected from WebSocket server');
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});

// Handle chat messages
ws.on('message', (message) => {
  displayMessage(message);
});

ws.on('user_joined', (data) => {
  updateUserList(data);
});

ws.on('user_left', (data) => {
  updateUserList(data);
});

// Send messages
function sendMessage(message) {
  ws.send('send_message', {
    room: 'general',
    message: message
  });
}

function joinRoom(roomName) {
  ws.send('join_room', { room: roomName });
}

// Handle presence
ws.on('presence_joined', (data) => {
  console.log('Joined presence channel:', data.channel);
  console.log('Members:', data.members);
});

ws.on('member_joined', (data) => {
  console.log('Member joined:', data.user_id);
  updatePresenceList(data);
});

ws.on('member_left', (data) => {
  console.log('Member left:', data.user_id);
  updatePresenceList(data);
});`

const scalingCode = `// WebSocket scaling strategies
class WebSocketScaler {
  static final Map<String, List<WebSocket>> _serverConnections = {};
  static final Map<String, String> _userServerMap = {};
  static RedisClient? _redis;

  static Future initialize() async {
    _redis = RedisClient(
      host: env('REDIS_HOST', 'localhost'),
      port: int.parse(env('REDIS_PORT', '6379')),
      password: env('REDIS_PASSWORD'),
    );

    await _redis!.connect();

    // Subscribe to cross-server messages
    await _redis!.subscribe('websocket:*');
    _redis!.listen((message) {
      handleCrossServerMessage(message);
    });
  }

  // Register server instance
  static Future registerServer(String serverId, List<String> connectedUsers) async {
    _serverConnections[serverId] = [];
    await _redis!.set('server:\$serverId:users', jsonEncode(connectedUsers));
    await _redis!.sadd('active_servers', serverId);
  }

  // Track user connections across servers
  static Future trackUserConnection(String userId, String serverId, WebSocket socket) async {
    _userServerMap[userId] = serverId;
    _serverConnections[serverId]!.add(socket);

    // Store in Redis for cross-server communication
    await _redis!.set('user:\$userId:server', serverId);
    await _redis!.sadd('server:\$serverId:users', userId);
  }

  // Broadcast to user across servers
  static Future broadcastToUser(String userId, dynamic message) async {
    final serverId = await _redis!.get('user:\$userId:server');

    if (serverId != null) {
      if (serverId == getCurrentServerId()) {
        // User is on this server
        final socket = findUserSocket(userId);
        if (socket != null) {
          socket.send(jsonEncode(message));
        }
      } else {
        // User is on different server
        await _redis!.publish('websocket:direct_message', jsonEncode({
          'target_server': serverId,
          'user_id': userId,
          'message': message
        }));
      }
    }
  }

  // Broadcast to channel across servers
  static Future broadcastToChannel(String channelName, dynamic message, {String? excludeUserId}) async {
    final messageData = {
      'channel': channelName,
      'message': message,
      'exclude_user': excludeUserId,
      'from_server': getCurrentServerId()
    };

    await _redis!.publish('websocket:channel_message', jsonEncode(messageData));
  }

  // Handle cross-server messages
  static Future handleCrossServerMessage(String message) async {
    try {
      final data = jsonDecode(message);

      switch (data['type']) {
        case 'direct_message':
          if (data['target_server'] == getCurrentServerId()) {
            final socket = findUserSocket(data['user_id']);
            if (socket != null) {
              socket.send(jsonEncode(data['message']));
            }
          }
          break;

        case 'channel_message':
          if (data['from_server'] != getCurrentServerId()) {
            // Broadcast to local channel subscribers
            await ChannelManager.broadcastToChannel(
              data['channel'],
              data['message'],
              excludeUserId: data['exclude_user']
            );
          }
          break;

        case 'presence_update':
          // Handle presence updates across servers
          await PresenceChannel.handleCrossServerPresence(data);
          break;
      }
    } catch (e) {
      print('Error handling cross-server message: \$e');
    }
  }

  // Load balancing helpers
  static Future<String> getOptimalServer() async {
    // Get server with least connections
    final servers = await _redis!.smembers('active_servers');
    String optimalServer = servers.first;
    int minConnections = await getServerConnectionCount(servers.first);

    for (final server in servers.skip(1)) {
      final count = await getServerConnectionCount(server);
      if (count < minConnections) {
        minConnections = count;
        optimalServer = server;
      }
    }

    return optimalServer;
  }

  static Future<int> getServerConnectionCount(String serverId) async {
    final users = await _redis!.smembers('server:\$serverId:users');
    return users.length;
  }

  // Sticky session management
  static Future<String?> getUserServer(String userId) async {
    return await _redis!.get('user:\$userId:server');
  }

  static Future setUserServer(String userId, String serverId) async {
    await _redis!.set('user:\$userId:server', serverId);
  }

  // Helper functions
  static String getCurrentServerId() {
    return env('SERVER_ID', 'server_1');
  }

  static WebSocket? findUserSocket(String userId) {
    // Find user's socket in local connections
    for (final connections in _serverConnections.values) {
      for (final socket in connections) {
        if (getUserIdForSocket(socket) == userId) {
          return socket;
        }
      }
    }
    return null;
  }

  static String? getUserIdForSocket(WebSocket socket) {
    // Implementation to get user ID from socket
    // This would depend on how you track socket-to-user mapping
    return null;
  }
}

// Redis adapter for Socket.IO style scaling
class RedisAdapter {
  static RedisClient? _redis;
  static final Map<String, Set<String>> _channelUsers = {};
  static final Map<String, Set<WebSocket>> _userSockets = {};

  static Future initialize() async {
    _redis = RedisClient(
      host: env('REDIS_HOST', 'localhost'),
      port: int.parse(env('REDIS_PORT', '6379')),
      password: env('REDIS_PASSWORD'),
    );

    await _redis!.connect();

    // Subscribe to all WebSocket events
    await _redis!.psubscribe('websocket:*');
    _redis!.listen((message) {
      handleRedisMessage(message);
    });
  }

  // Add user to channel
  static Future addToChannel(String channelName, String userId, WebSocket socket) async {
    _channelUsers.putIfAbsent(channelName, () => {}).add(userId);
    _userSockets.putIfAbsent(userId, () => {}).add(socket);

    // Publish to Redis
    await _redis!.publish('websocket:channel:add', jsonEncode({
      'channel': channelName,
      'user_id': userId,
      'server_id': getCurrentServerId()
    }));

    // Add to Redis set
    await _redis!.sadd('channel:\$channelName', userId);
  }

  // Remove user from channel
  static Future removeFromChannel(String channelName, String userId, WebSocket socket) async {
    _channelUsers[channelName]?.remove(userId);
    _userSockets[userId]?.remove(socket);

    // Publish to Redis
    await _redis!.publish('websocket:channel:remove', jsonEncode({
      'channel': channelName,
      'user_id': userId,
      'server_id': getCurrentServerId()
    }));

    // Remove from Redis set
    await _redis!.srem('channel:\$channelName', userId);
  }

  // Broadcast to channel
  static Future broadcastToChannel(String channelName, dynamic message, {String? excludeUserId}) async {
    // Get all users in channel from Redis
    final users = await _redis!.smembers('channel:\$channelName');

    for (final userId in users) {
      if (userId != excludeUserId) {
        // Check if user is on this server
        final localSockets = _userSockets[userId];
        if (localSockets != null && localSockets.isNotEmpty) {
          // User is on this server
          for (final socket in localSockets) {
            try {
              socket.send(jsonEncode(message));
            } catch (e) {
              print('Failed to send to local user \$userId: \$e');
              localSockets.remove(socket);
            }
          }
        } else {
          // User is on different server
          await _redis!.publish('websocket:direct_message', jsonEncode({
            'user_id': userId,
            'message': message,
            'from_server': getCurrentServerId()
          }));
        }
      }
    }
  }

  // Handle Redis messages
  static Future handleRedisMessage(String message) async {
    try {
      final data = jsonDecode(message);

      if (data['server_id'] == getCurrentServerId()) {
        return; // Ignore messages from self
      }

      switch (data['type']) {
        case 'channel:add':
          // User joined channel on different server
          _channelUsers.putIfAbsent(data['channel'], () => {}).add(data['user_id']);
          break;

        case 'channel:remove':
          // User left channel on different server
          _channelUsers[data['channel']]?.remove(data['user_id']);
          break;

        case 'direct_message':
          // Send message to local user
          final localSockets = _userSockets[data['user_id']];
          if (localSockets != null) {
            for (final socket in localSockets) {
              try {
                socket.send(jsonEncode(data['message']));
              } catch (e) {
                print('Failed to send direct message: \$e');
                localSockets.remove(socket);
              }
            }
          }
          break;
      }
    } catch (e) {
      print('Error handling Redis message: \$e');
    }
  }

  static String getCurrentServerId() {
    return env('SERVER_ID', 'server_1');
  }
}`

const errorHandlingCode = `// Error handling and debugging for WebSockets
class WebSocketErrorHandler {
  static final Map<String, int> _errorCounts = {};
  static final Map<String, DateTime> _lastErrors = {};

  // Handle WebSocket errors
  static Future handleError(WebSocket socket, dynamic error, String context) async {
    final errorKey = '\$context:\${error.runtimeType}';
    _errorCounts[errorKey] = (_errorCounts[errorKey] ?? 0) + 1;
    _lastErrors[errorKey] = DateTime.now();

    // Log error
    await Logger.error('WebSocket error in \$context', error, StackTrace.current);

    // Send error to client if possible
    try {
      socket.send(jsonEncode({
        'type': 'error',
        'message': getClientErrorMessage(error),
        'context': context,
        'timestamp': DateTime.now().toIso8601String()
      }));
    } catch (e) {
      // Socket might be closed
      print('Failed to send error to client: \$e');
    }

    // Check for error patterns
    await checkErrorPatterns(errorKey);

    // Cleanup if too many errors
    if (_errorCounts[errorKey]! > 10) {
      await handleExcessiveErrors(socket, errorKey);
    }
  }

  // Handle connection errors
  static Future handleConnectionError(WebSocket socket, String userId, dynamic error) async {
    await Logger.warning('WebSocket connection error for user \$userId', error);

    // Track connection failures
    final key = 'connection_error:\$userId';
    final count = await Cache.get(key, 0) + 1;
    await Cache.put(key, count, Duration(hours: 1));

    if (count > 5) {
      // Too many connection failures, might be abusive
      await handlePotentialAbuse(socket, userId);
    }

    // Attempt cleanup
    await cleanupFailedConnection(socket, userId);
  }

  // Handle message parsing errors
  static Future handleMessageError(WebSocket socket, String rawMessage, dynamic error) async {
    await Logger.error('Failed to parse WebSocket message', error);

    // Log the problematic message (truncated for security)
    final truncatedMessage = rawMessage.length > 100
      ? rawMessage.substring(0, 100) + '...'
      : rawMessage;

    await Logger.info('Problematic message', {'message': truncatedMessage});

    // Send error response
    socket.send(jsonEncode({
      'type': 'parse_error',
      'message': 'Invalid message format',
      'timestamp': DateTime.now().toIso8601String()
    }));
  }

  // Handle rate limiting violations
  static Future handleRateLimitViolation(WebSocket socket, String userId, String action) async {
    await Logger.warning('Rate limit violation for user \$userId on action \$action');

    socket.send(jsonEncode({
      'type': 'rate_limit_exceeded',
      'action': action,
      'message': 'Too many requests. Please slow down.',
      'retry_after': 60, // seconds
      'timestamp': DateTime.now().toIso8601String()
    }));

    // Track violations
    final key = 'rate_limit_violations:\$userId';
    final violations = await Cache.get(key, 0) + 1;
    await Cache.put(key, violations, Duration(hours: 1));

    if (violations > 10) {
      await handleExcessiveViolations(socket, userId);
    }
  }

  // Handle authentication failures
  static Future handleAuthFailure(WebSocket socket, String reason) async {
    await Logger.warning('WebSocket authentication failure: \$reason');

    socket.send(jsonEncode({
      'type': 'auth_failed',
      'message': 'Authentication failed',
      'reason': reason,
      'timestamp': DateTime.now().toIso8601String()
    }));

    // Close connection after short delay
    Future.delayed(Duration(seconds: 2), () async {
      try {
        await socket.close(1008, 'Authentication failed');
      } catch (e) {
        // Socket might already be closed
      }
    });
  }

  // Check for error patterns
  static Future checkErrorPatterns(String errorKey) async {
    final count = _errorCounts[errorKey] ?? 0;
    final lastError = _lastErrors[errorKey];

    if (lastError != null) {
      final timeSinceLastError = DateTime.now().difference(lastError);

      // Check for rapid error bursts
      if (count > 5 && timeSinceLastError.inMinutes < 5) {
        await Logger.alert('Error burst detected', {
          'error_key': errorKey,
          'count': count,
          'time_span': timeSinceLastError.inMinutes
        });

        // Could trigger alerts or automatic mitigation
      }
    }
  }

  // Handle excessive errors
  static Future handleExcessiveErrors(WebSocket socket, String errorKey) async {
    await Logger.alert('Excessive errors detected', {'error_key': errorKey});

    // Close connection to prevent further issues
    try {
      await socket.close(1011, 'Too many errors');
    } catch (e) {
      // Socket might already be closed
    }
  }

  // Handle potential abuse
  static Future handlePotentialAbuse(WebSocket socket, String userId) async {
    await Logger.alert('Potential WebSocket abuse detected', {'user_id': userId});

    // Could implement temporary bans, notifications, etc.
    await Cache.put('websocket_banned:\$userId', true, Duration(hours: 1));

    try {
      await socket.close(1008, 'Connection blocked due to suspicious activity');
    } catch (e) {
      // Socket might already be closed
    }
  }

  // Handle excessive rate limit violations
  static Future handleExcessiveViolations(WebSocket socket, String userId) async {
    await Logger.alert('Excessive rate limit violations', {'user_id': userId});

    // Temporary ban
    await Cache.put('rate_limit_banned:\$userId', true, Duration(minutes: 15));

    socket.send(jsonEncode({
      'type': 'banned',
      'message': 'Temporarily banned due to excessive violations',
      'ban_duration': 15 * 60, // seconds
      'timestamp': DateTime.now().toIso8601String()
    }));

    Future.delayed(Duration(seconds: 5), () async {
      try {
        await socket.close(1008, 'Temporarily banned');
      } catch (e) {
        // Socket might already be closed
      }
    });
  }

  // Cleanup failed connections
  static Future cleanupFailedConnection(WebSocket socket, String userId) async {
    // Remove from channels
    await ChannelManager.removeUserFromAllChannels(userId);

    // Remove from presence channels
    await PresenceChannel.removeUserFromAllChannels(userId);

    // Clean up any user-specific data
    await cleanupUserData(userId);

    // Log cleanup
    await Logger.info('Cleaned up failed connection', {'user_id': userId});
  }

  // Get client-friendly error messages
  static String getClientErrorMessage(dynamic error) {
    // Don't expose internal error details to clients
    if (error is FormatException) {
      return 'Invalid data format';
    } else if (error is TimeoutException) {
      return 'Request timed out';
    } else if (error is SocketException) {
      return 'Connection error';
    } else {
      return 'An error occurred';
    }
  }

  // Get error statistics
  static Map<String, dynamic> getErrorStats() {
    return {
      'error_counts': Map.from(_errorCounts),
      'last_errors': _lastErrors.map((key, value) =>
        MapEntry(key, value.toIso8601String())),
      'total_errors': _errorCounts.values.fold(0, (sum, count) => sum + count)
    };
  }

  // Reset error tracking
  static void resetErrorStats() {
    _errorCounts.clear();
    _lastErrors.clear();
  }
}

// WebSocket debugging utilities
class WebSocketDebugger {
  static bool _debugEnabled = false;
  static final List<Map<String, dynamic>> _messageLog = [];

  static void enableDebug() {
    _debugEnabled = true;
  }

  static void disableDebug() {
    _debugEnabled = false;
  }

  // Log WebSocket message
  static void logMessage(String direction, String type, dynamic data, {String? userId, String? channel}) {
    if (!_debugEnabled) return;

    final logEntry = {
      'timestamp': DateTime.now().toIso8601String(),
      'direction': direction, // 'incoming' or 'outgoing'
      'type': type,
      'data': data,
      'user_id': userId,
      'channel': channel,
      'data_size': data.toString().length
    };

    _messageLog.add(logEntry);

    // Keep only last 1000 messages
    if (_messageLog.length > 1000) {
      _messageLog.removeRange(0, _messageLog.length - 1000);
    }

    print('[WS DEBUG] \$direction \$type: \${data.toString().substring(0, min(100, data.toString().length))}');
  }

  // Log connection event
  static void logConnection(String event, String userId, {String? channel, dynamic data}) {
    if (!_debugEnabled) return;

    print('[WS DEBUG] Connection \$event for user \$userId\${channel != null ? ' in channel \$channel' : ''}');

    if (data != null) {
      logMessage('system', event, data, userId: userId, channel: channel);
    }
  }

  // Get message log
  static List<Map<String, dynamic>> getMessageLog({int limit = 100}) {
    return _messageLog.reversed.take(limit).toList();
  }

  // Get messages for specific user
  static List<Map<String, dynamic>> getUserMessages(String userId, {int limit = 50}) {
    return _messageLog
      .where((log) => log['user_id'] == userId)
      .take(limit)
      .toList();
  }

  // Get messages for specific channel
  static List<Map<String, dynamic>> getChannelMessages(String channel, {int limit = 50}) {
    return _messageLog
      .where((log) => log['channel'] == channel)
      .take(limit)
      .toList();
  }

  // Export debug data
  static Future<String> exportDebugData() async {
    final debugData = {
      'timestamp': DateTime.now().toIso8601String(),
      'message_log': _messageLog,
      'stats': {
        'total_messages': _messageLog.length,
        'users': _messageLog.map((log) => log['user_id']).where((id) => id != null).toSet().length,
        'channels': _messageLog.map((log) => log['channel']).where((ch) => ch != null).toSet().length
      }
    };

    return jsonEncode(debugData);
  }
}`

const completeExampleCode = `// Complete WebSocket application example
import 'package:khadem/khadem_dart.dart';

class RealTimeChatApp {
  static final Map<String, ChatRoom> _rooms = {};
  static final Map<String, User> _connectedUsers = {};
  static final Map<String, WebSocket> _userSockets = {};

  static Future initialize() async {
    // Setup Redis for scaling (optional)
    if (env('REDIS_HOST') != null) {
      await RedisAdapter.initialize();
    }

    // Setup event broadcasting
    EventBroadcaster.setupEventListeners();

    // Start cleanup timer
    Timer.periodic(Duration(minutes: 5), (_) => cleanup());
  }

  static Future handleConnection(WebSocket socket, Request request) async {
    String? userId;
    String? username;

    try {
      // Authenticate user
      final authenticated = await WebSocketAuth.authenticate(socket, request);
      if (!authenticated) return;

      userId = WebSocketAuth.getUserId(socket)!;
      final user = await User.find(userId);
      username = user?.name ?? 'Anonymous';

      _connectedUsers[userId] = user!;
      _userSockets[userId] = socket;

      // Track connection
      await WebSocketScaler.trackUserConnection(userId, getCurrentServerId(), socket);

      print('User \$username (\$userId) connected');

      // Handle incoming messages
      socket.onMessage.listen((message) async {
        try {
          await handleMessage(socket, message, userId!, username!);
        } catch (e, stackTrace) {
          await WebSocketErrorHandler.handleError(socket, e, 'message_handling');
        }
      });

      // Handle disconnection
      socket.onClose.listen((closeEvent) async {
        await handleDisconnection(userId!, username!);
      });

      // Handle errors
      socket.onError.listen((error) async {
        await WebSocketErrorHandler.handleConnectionError(socket, userId!, error);
      });

      // Send welcome message
      socket.send(jsonEncode({
        'type': 'welcome',
        'user_id': userId,
        'username': username,
        'timestamp': DateTime.now().toIso8601String(),
        'features': ['chat', 'presence', 'notifications']
      }));

    } catch (e) {
      await WebSocketErrorHandler.handleError(socket, e, 'connection_setup');
    }
  }

  static Future handleMessage(WebSocket socket, String message, String userId, String username) async {
    WebSocketDebugger.logMessage('incoming', 'raw', message, userId: userId);

    try {
      final data = jsonDecode(message);
      final messageType = data['type'];

      // Rate limiting check
      if (!await WebSocketAuth.checkRateLimit(socket, messageType)) {
        await WebSocketErrorHandler.handleRateLimitViolation(socket, userId, messageType);
        return;
      }

      WebSocketDebugger.logMessage('incoming', messageType, data, userId: userId);

      switch (messageType) {
        case 'join_room':
          await handleJoinRoom(socket, data, userId, username);
          break;

        case 'leave_room':
          await handleLeaveRoom(socket, data, userId);
          break;

        case 'send_message':
          await handleSendMessage(socket, data, userId, username);
          break;

        case 'typing_start':
          await handleTyping(socket, data, userId, username, true);
          break;

        case 'typing_stop':
          await handleTyping(socket, data, userId, username, false);
          break;

        case 'private_message':
          await handlePrivateMessage(socket, data, userId, username);
          break;

        case 'get_online_users':
          await handleGetOnlineUsers(socket);
          break;

        case 'update_presence':
          await handleUpdatePresence(socket, data, userId);
          break;

        default:
          socket.send(jsonEncode({
            'type': 'error',
            'message': 'Unknown message type: \$messageType'
          }));
      }

    } catch (e) {
      await WebSocketErrorHandler.handleMessageError(socket, message, e);
    }
  }

  static Future handleJoinRoom(WebSocket socket, Map<String, dynamic> data, String userId, String username) async {
    final roomName = data['room'];
    if (roomName == null) return;

    final room = _rooms.putIfAbsent(roomName, () => ChatRoom(roomName));
    await room.addUser(userId, username, socket);

    socket.send(jsonEncode({
      'type': 'room_joined',
      'room': roomName,
      'users': room.getUsers(),
      'message_history': room.getRecentMessages(20)
    }));

    // Broadcast to other users in room
    await room.broadcast({
      'type': 'user_joined',
      'user_id': userId,
      'username': username,
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    }, excludeUserId: userId);
  }

  static Future handleLeaveRoom(WebSocket socket, Map<String, dynamic> data, String userId) async {
    final roomName = data['room'];
    if (roomName == null) return;

    final room = _rooms[roomName];
    if (room != null) {
      await room.removeUser(userId);

      await room.broadcast({
        'type': 'user_left',
        'user_id': userId,
        'room': roomName,
        'timestamp': DateTime.now().toIso8601String()
      });

      if (room.isEmpty()) {
        _rooms.remove(roomName);
      }
    }
  }

  static Future handleSendMessage(WebSocket socket, Map<String, dynamic> data, String userId, String username) async {
    final roomName = data['room'];
    final messageText = data['message'];

    if (roomName == null || messageText == null) return;

    final room = _rooms[roomName];
    if (room == null) return;

    // Validate message
    if (messageText.trim().isEmpty || messageText.length > 1000) {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'Invalid message'
      }));
      return;
    }

    final message = await room.addMessage(userId, username, messageText);

    // Broadcast to room
    await room.broadcast({
      'type': 'new_message',
      'message': message,
      'room': roomName
    });

    // Save to database
    unawaited(saveMessageToDatabase(message));
  }

  static Future handleTyping(WebSocket socket, Map<String, dynamic> data, String userId, String username, bool isTyping) async {
    final roomName = data['room'];
    if (roomName == null) return;

    final room = _rooms[roomName];
    if (room != null) {
      await room.broadcast({
        'type': isTyping ? 'typing_start' : 'typing_stop',
        'user_id': userId,
        'username': username,
        'room': roomName,
        'timestamp': DateTime.now().toIso8601String()
      }, excludeUserId: userId);
    }
  }

  static Future handlePrivateMessage(WebSocket socket, Map<String, dynamic> data, String userId, String username) async {
    final targetUserId = data['target_user'];
    final messageText = data['message'];

    if (targetUserId == null || messageText == null) return;

    final targetSocket = _userSockets[targetUserId];
    if (targetSocket != null) {
      targetSocket.send(jsonEncode({
        'type': 'private_message',
        'from_user': userId,
        'from_username': username,
        'message': messageText,
        'timestamp': DateTime.now().toIso8601String()
      }));

      // Send confirmation to sender
      socket.send(jsonEncode({
        'type': 'private_message_sent',
        'to_user': targetUserId,
        'message': messageText,
        'timestamp': DateTime.now().toIso8601String()
      }));
    } else {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'User is not online'
      }));
    }
  }

  static Future handleGetOnlineUsers(WebSocket socket) async {
    final onlineUsers = _connectedUsers.values.map((user) => {
      'id': user.id,
      'name': user.name,
      'status': 'online'
    }).toList();

    socket.send(jsonEncode({
      'type': 'online_users',
      'users': onlineUsers,
      'count': onlineUsers.length
    }));
  }

  static Future handleUpdatePresence(WebSocket socket, Map<String, dynamic> data, String userId) async {
    final status = data['status'] ?? 'online';
    final customStatus = data['custom_status'];

    // Update user presence
    final user = _connectedUsers[userId];
    if (user != null) {
      // Broadcast presence update to all user's connections
      await WebSocketScaler.broadcastToUser(userId, {
        'type': 'presence_update',
        'user_id': userId,
        'status': status,
        'custom_status': customStatus,
        'timestamp': DateTime.now().toIso8601String()
      });
    }
  }

  static Future handleDisconnection(String userId, String username) async {
    print('User \$username (\$userId) disconnected');

    // Remove from all rooms
    for (final room in _rooms.values) {
      await room.removeUser(userId);
    }

    // Clean up
    _connectedUsers.remove(userId);
    _userSockets.remove(userId);

    // Broadcast offline status
    await WebSocketScaler.broadcastToUser(userId, {
      'type': 'user_offline',
      'user_id': userId,
      'timestamp': DateTime.now().toIso8601String()
    });
  }

  static Future saveMessageToDatabase(Map<String, dynamic> message) async {
    try {
      await Database.table('chat_messages').insert({
        'id': message['id'],
        'user_id': message['user_id'],
        'room': message['room'],
        'message': message['message'],
        'created_at': message['timestamp']
      });
    } catch (e) {
      print('Failed to save message: \$e');
    }
  }

  static void cleanup() {
    // Remove empty rooms
    _rooms.removeWhere((name, room) => room.isEmpty());

    // Clean up disconnected users
    final disconnectedUsers = <String>[];
    _userSockets.forEach((userId, socket) {
      if (socket.readyState != WebSocket.OPEN) {
        disconnectedUsers.add(userId);
      }
    });

    for (final userId in disconnectedUsers) {
      _connectedUsers.remove(userId);
      _userSockets.remove(userId);
    }
  }

  static String getCurrentServerId() {
    return env('SERVER_ID', 'server_1');
  }

  static Future getStats() async {
    return {
      'total_rooms': _rooms.length,
      'total_users': _connectedUsers.length,
      'rooms': _rooms.map((name, room) => MapEntry(name, {
        'user_count': room.getUserCount(),
        'message_count': room.getMessageCount()
      }))
    };
  }
}

class ChatRoom {
  final String name;
  final Map<String, UserSession> _users = {};
  final List<Map<String, dynamic>> _messages = [];

  ChatRoom(this.name);

  Future addUser(String userId, String username, WebSocket socket) async {
    _users[userId] = UserSession(userId, username, socket);
  }

  Future removeUser(String userId) async {
    _users.remove(userId);
  }

  Future<Map<String, dynamic>> addMessage(String userId, String username, String message) async {
    final messageData = {
      'id': generateMessageId(),
      'user_id': userId,
      'username': username,
      'message': message,
      'room': name,
      'timestamp': DateTime.now().toIso8601String()
    };

    _messages.add(messageData);

    // Keep only last 100 messages in memory
    if (_messages.length > 100) {
      _messages.removeAt(0);
    }

    return messageData;
  }

  Future broadcast(dynamic message, {String? excludeUserId}) async {
    final messageStr = message is String ? message : jsonEncode(message);

    for (final user in _users.values) {
      if (user.id != excludeUserId) {
        try {
          user.socket.send(messageStr);
        } catch (e) {
          print('Failed to broadcast to user \${user.id}: \$e');
          _users.remove(user.id);
        }
      }
    }
  }

  List<Map<String, dynamic>> getUsers() {
    return _users.values.map((user) => {
      'id': user.id,
      'name': user.username
    }).toList();
  }

  List<Map<String, dynamic>> getRecentMessages(int count) {
    return _messages.reversed.take(count).toList().reversed.toList();
  }

  int getUserCount() => _users.length;
  int getMessageCount() => _messages.length;
  bool isEmpty() => _users.isEmpty;
}

class UserSession {
  final String id;
  final String username;
  final WebSocket socket;

  UserSession(this.id, this.username, this.socket);
}

String generateMessageId() {
  return 'msg_\${DateTime.now().millisecondsSinceEpoch}_\${Random().nextInt(10000)}';
}

// Setup WebSocket routes
void setupWebSocketRoutes(Server server) {
  server.websocket('/chat', RealTimeChatApp.handleConnection);

  // Initialize the chat app
  RealTimeChatApp.initialize();
}`
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>
