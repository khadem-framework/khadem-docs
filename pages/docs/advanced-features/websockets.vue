<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">WebSocket System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A powerful real-time communication system for building interactive applications with WebSocket support, middleware pipeline, and room-based messaging.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Real-time Communication</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Room-based Messaging</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Middleware Pipeline</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Event-driven Architecture</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">System Overview</h2>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">WebSocket Architecture</h3>
        <p class="text-blue-800 dark:text-blue-200 mb-4">
          Khadem's WebSocket system is built around a modular architecture with clear separation of concerns:
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Core Components</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li><strong>SocketServer:</strong> Main entry point for WebSocket connections</li>
              <li><strong>SocketManager:</strong> Manages clients, rooms, and event routing</li>
              <li><strong>SocketClient:</strong> Represents individual WebSocket connections</li>
              <li><strong>SocketHandler:</strong> Processes incoming messages and executes middleware</li>
              <li><strong>SocketMiddlewarePipeline:</strong> Executes middleware in priority order</li>
            </ul>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">Key Features</h4>
            <ul class="space-y-2 text-green-800 dark:text-green-200">
              <li><strong>Event-driven:</strong> Register handlers for specific events</li>
              <li><strong>Room-based:</strong> Group clients and broadcast to rooms</li>
              <li><strong>Middleware:</strong> Connection, message, room, and disconnect middleware</li>
              <li><strong>Authentication:</strong> Built-in auth callbacks and user context</li>
              <li><strong>Type-safe:</strong> Strongly typed event handlers and middleware</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Message Format</h4>
          <p class="text-yellow-800 dark:text-yellow-200 mb-2">
            All WebSocket messages use JSON format with <code>event</code> and <code>data</code> fields:
          </p>
          <pre class="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded text-sm"><code>{
  "event": "send_message",
  "data": {
    "message": "Hello World",
    "room": "general"
  }
}</code></pre>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Basic Server Setup</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">1. Create WebSocket Server</h4>
            <CodeBlock
              :code="basicServerSetupCode"
              language="dart"
              title="Basic WebSocket Server Setup"
            />
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">2. Handle Events</h4>
            <CodeBlock
              :code="basicEventHandlingCode"
              language="dart"
              title="Basic Event Handling"
            />
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">3. Start Server</h4>
            <CodeBlock
              :code="startServerCode"
              language="dart"
              title="Start WebSocket Server"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Room-based Messaging</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">Room Management</h3>
          <CodeBlock
            :code="roomManagementCode"
            language="dart"
            title="Room Management Examples"
          />
          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            Rooms allow you to group clients and broadcast messages to specific groups.
          </p>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-3">Broadcasting</h3>
          <CodeBlock
            :code="broadcastingCode"
            language="dart"
            title="Broadcasting Messages"
          />
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-2">
            Send messages to all clients in a room or to individual clients.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Subscription System</h2>

      <CodeBlock
        :code="eventSubscriptionCode"
        language="dart"
        title="Event Subscription System"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Event Subscription Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>Subscribe clients to specific events for targeted messaging</li>
          <li>Broadcast events to all subscribed clients</li>
          <li>Check subscription status and subscriber counts</li>
          <li>Automatic cleanup when clients disconnect</li>
          <li>Real-time subscription management</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Middleware Pipeline</h2>

      <div class="space-y-6">
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200 mb-3">Middleware Types</h3>
          <CodeBlock
            :code="middlewareTypesCode"
            language="dart"
            title="Different Middleware Types"
          />
        </div>

        <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
          <h3 class="text-lg font-medium text-pink-800 dark:text-pink-200 mb-3">Authentication Middleware</h3>
          <CodeBlock
            :code="authMiddlewareCode"
            language="dart"
            title="Authentication Middleware Example"
          />
        </div>

        <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
          <h3 class="text-lg font-medium text-teal-800 dark:text-teal-200 mb-3">Rate Limiting Middleware</h3>
          <CodeBlock
            :code="rateLimitMiddlewareCode"
            language="dart"
            title="Rate Limiting Middleware"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Client Management</h2>

      <CodeBlock
        :code="clientManagementCode"
        language="dart"
        title="Client Management Examples"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Client Context Features</h4>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Context Storage</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">set(key, value)</code> - Store data in client context</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">get(key)</code> - Retrieve data from context</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">isAuthorized</code> - Check authorization status</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">isAuthenticated</code> - Check authentication status</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Header Access</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">authToken</code> - Get authorization token</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">userAgent</code> - Get user agent string</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">getHeader(name)</code> - Get specific header</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">getHeaderValues(name)</code> - Get all header values</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling Examples"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Exception Handler Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li>Automatic error logging with stack traces</li>
          <li>Client-specific error responses</li>
          <li>Development vs production error details</li>
          <li>Middleware error handling</li>
          <li>Connection and disconnection error handling</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Usage</h2>

      <div class="space-y-6">
        <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <h3 class="text-lg font-medium text-cyan-800 dark:text-cyan-200 mb-3">Real-time Chat Application</h3>
          <CodeBlock
            :code="chatApplicationCode"
            language="dart"
            title="Real-time Chat Application"
          />
        </div>

        <div class="bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg border border-lime-200 dark:border-lime-800">
          <h3 class="text-lg font-medium text-lime-800 dark:text-lime-200 mb-3">Live Notifications</h3>
          <CodeBlock
            :code="notificationSystemCode"
            language="dart"
            title="Live Notification System"
          />
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <h3 class="text-lg font-medium text-amber-800 dark:text-amber-200 mb-3">Game Server</h3>
          <CodeBlock
            :code="gameServerCode"
            language="dart"
            title="Real-time Game Server"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Use rooms for organizing clients by context (chat rooms, game lobbies, etc.)</li>
            <li>Implement proper authentication and authorization middleware</li>
            <li>Use event subscriptions for targeted messaging</li>
            <li>Handle errors gracefully and provide meaningful error messages</li>
            <li>Use middleware for cross-cutting concerns like logging and rate limiting</li>
            <li>Implement proper cleanup when clients disconnect</li>
            <li>Use client context to store user-specific data</li>
            <li>Test your WebSocket handlers thoroughly</li>
            <li>Use meaningful event names and consistent message formats</li>
            <li>Monitor connection counts and message throughput</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't send sensitive data without proper authentication</li>
            <li>Don't block the event loop with long-running operations</li>
            <li>Don't rely on client-side validation alone</li>
            <li>Don't forget to handle client disconnections</li>
            <li>Don't use WebSocket for file uploads (use HTTP instead)</li>
            <li>Don't broadcast to all clients when you only need specific rooms</li>
            <li>Don't ignore middleware errors - they can break the connection</li>
            <li>Don't store large amounts of data in client context</li>
            <li>Don't use synchronous operations in async handlers</li>
            <li>Don't forget to implement rate limiting for production</li>
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

import CodeBlock from '~/components/CodeBlock.vue'

const basicServerSetupCode = `import 'package:khadem/khadem.dart';

void main() async {
  // Create standalone WebSocket server on port 3000
  final socketServer = SocketServer(3000);

  // Add authentication (runs during WebSocket upgrade)
  socketServer.useAuth((request) async {
    final token = request.header('Authorization')?.replaceFirst('Bearer ', '');
    if (token == null) return false;
    
    // Verify JWT token
    final payload = await verifyJWTToken(token);
    return payload != null;
  });

  // Add connection middleware
  socketServer.useMiddleware(
    SocketMiddleware.connection(
      (client, request, next) async {
        print('Client connecting: \${client.id}');
        await next();
      },
      name: 'connection-logger',
    ),
  );

  // Handle connection events
  socketServer.onConnect((client) async {
    print('✅ Client connected: \${client.id}');
    client.send('welcome', {'message': 'Connected to WebSocket server'});
  });

  socketServer.onDisconnect((client) async {
    print('❌ Client disconnected: \${client.id}');
  });

  // Setup event handlers
  socketServer.on('ping', (client, data) async {
    client.send('pong', {'timestamp': DateTime.now().toIso8601String()});
  });

  socketServer.on('echo', (client, data) async {
    client.send('echo', data);
  });

  // Start server
  await socketServer.start();
  print('🟢 WebSocket Server running on ws://localhost:3000');
}

// Helper function for JWT verification
Future<Map<String, dynamic>?> verifyJWTToken(String token) async {
  try {
    // Implement JWT verification logic
    return {'sub': 'user-id', 'email': 'user@example.com'};
  } catch (e) {
    return null;
  }
}`

const basicEventHandlingCode = `import 'package:khadem/khadem.dart';

void setupWebSocketEvents(SocketServer server) {
  // Setup event handlers
  server.on('ping', (client, data) async {
    print('Received ping from \${client.id}');
    client.send('pong', {'timestamp': DateTime.now().toIso8601String()});
  });

  server.on('echo', (client, data) async {
    final message = data['message'];
    print('Received echo from \${client.id}: \$message');
    client.send('echo_response', {
      'original_message': message,
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  server.on('join_room', (client, data) async {
    final roomName = data['room'];
    if (roomName != null) {
      client.joinRoom(roomName);
      client.send('room_joined', {'room': roomName});
      
      // Notify room members
      server.manager.broadcast(roomName, 'user_joined', {
        'client_id': client.id,
        'room': roomName
      });
    }
  });

  server.on('send_message', (client, data) async {
    final roomName = data['room'];
    final message = data['message'];
    
    if (roomName != null && message != null) {
      // Broadcast to all clients in the room
      server.manager.broadcast(roomName, 'message', {
        'client_id': client.id,
        'room': roomName,
        'message': message,
        'timestamp': DateTime.now().toIso8601String()
      });
    }
  });

  // Handle connection events
  server.onConnect((client) async {
    print('✅ Client connected: \${client.id}');
    client.send('connected', {
      'client_id': client.id,
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  server.onDisconnect((client) async {
    print('❌ Client disconnected: \${client.id}');
  });
}`

const startServerCode = `import 'package:khadem/khadem.dart';

void main() async {
  // Create WebSocket server on port 3000
  final socketServer = SocketServer(3000);

  // Setup authentication
  socketServer.useAuth((request) async {
    final token = request.header('Authorization')?.replaceFirst('Bearer ', '');
    if (token == null) return false;

    final payload = await verifyJWTToken(token);
    if (payload == null) return false;

    // Store user info in request context (accessible via client.get())
    request.setAttribute('user_id', payload['sub']);
    request.setAttribute('username', payload['username']);
    return true;
  });

  // Setup event handlers
  socketServer.on('ping', (client, data) async {
    client.send('pong', {'timestamp': DateTime.now().toIso8601String()});
  });

  socketServer.on('join_room', (client, data) async {
    final roomName = data['room'];
    if (roomName != null) {
      client.joinRoom(roomName);
      client.send('room_joined', {'room': roomName});

      // Notify room members
      socketServer.manager.broadcast(roomName, 'user_joined', {
        'client_id': client.id,
        'user_id': client.get('user_id'),
        'room': roomName
      });
    }
  });

  socketServer.on('send_message', (client, data) async {
    final roomName = data['room'];
    final message = data['message'];

    if (roomName != null && message != null) {
      socketServer.manager.broadcast(roomName, 'message', {
        'client_id': client.id,
        'user_id': client.get('user_id'),
        'username': client.get('username'),
        'message': message,
        'timestamp': DateTime.now().toIso8601String()
      });
    }
  });

  // Handle connections
  socketServer.onConnect((client) async {
    print('✅ Client connected: \${client.id}');
    client.send('connected', {
      'client_id': client.id,
      'user_id': client.get('user_id')
    });
  });

  socketServer.onDisconnect((client) async {
    print('❌ Client disconnected: \${client.id}');
    // Notify all rooms this client was in
    for (final room in client.rooms) {
      socketServer.manager.broadcast(room, 'user_left', {
        'client_id': client.id,
        'user_id': client.get('user_id'),
        'room': room
      });
    }
  });

  // Start server
  await socketServer.start();
  print('🟢 Server running on ws://localhost:3000');
}

// Helper function for JWT verification
Future<Map<String, dynamic>?> verifyJWTToken(String token) async {
  try {
    // Implement JWT verification logic
    return {
      'sub': 'user123',
      'username': 'john_doe'
    };
  } catch (e) {
    return null;
  }
}`

const roomManagementCode = `import 'package:khadem/khadem.dart';

void setupRoomManagement(SocketServer server) {
  // Handle room join
  server.on('join_room', (client, data) async {
    final roomName = data['room'];
    if (roomName == null) return;

    // Join the room
    client.joinRoom(roomName);

    // Send confirmation to client
    client.send('room_joined', {
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    });

    // Notify others in the room
    server.manager.broadcast(roomName, 'user_joined', {
      'client_id': client.id,
      'user_id': client.get('user_id'),
      'username': client.get('username'),
      'room': roomName
    });
  });

  // Handle room leave
  server.on('leave_room', (client, data) async {
    final roomName = data['room'];
    if (roomName == null) return;

    // Leave the room
    client.leaveRoom(roomName);

    // Send confirmation to client
    client.send('room_left', {
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    });

    // Notify others in the room
    server.manager.broadcast(roomName, 'user_left', {
      'client_id': client.id,
      'user_id': client.get('user_id'),
      'username': client.get('username'),
      'room': roomName
    });
  });

  // Handle room messages
  server.on('room_message', (client, data) async {
    final roomName = data['room'];
    final message = data['message'];

    if (roomName == null || message == null) return;

    // Check if client is in the room
    if (!client.isInRoom(roomName)) {
      client.send('error', {'message': 'You are not in this room'});
      return;
    }

    // Broadcast message to all room members
    server.manager.broadcast(roomName, 'message', {
      'client_id': client.id,
      'user_id': client.get('user_id'),
      'username': client.get('username'),
      'message': message,
      'room': roomName,
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  // Handle get room info
  server.on('get_room_info', (client, data) async {
    final roomName = data['room'];
    if (roomName == null) return;

    final hasRoom = server.manager.hasRoom(roomName);
    
    client.send('room_info', {
      'room': roomName,
      'exists': hasRoom,
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  // Handle disconnect - leave all rooms
  server.onDisconnect((client) async {
    for (final room in client.rooms.toList()) {
      server.manager.broadcast(room, 'user_left', {
        'client_id': client.id,
        'user_id': client.get('user_id'),
        'room': room
      });
    }
  });
}

// Usage
void main() async {
  final server = SocketServer(3000);
  setupRoomManagement(server);
  await server.start();
  print('🟢 WebSocket server with room management on ws://localhost:3000');
}`

const eventSubscriptionCode = `// Event subscription system using SocketServer
class EventSubscriptionService {
  final SocketServer server;
  final Map<String, Set<SocketClient>> _eventSubscribers = {};

  EventSubscriptionService(this.server) {
    setupEventHandlers();
  }

  void setupEventHandlers() {
    // Handle event subscription
    server.on('subscribe', (SocketClient client, Map<String, dynamic> data) async {
      final event = data['event'] as String?;
      if (event == null) return;

      _eventSubscribers.putIfAbsent(event, () => {}).add(client);

      client.sendJson({
        'event': 'subscribed',
        'subscription_event': event,
        'timestamp': DateTime.now().toIso8601String()
      });

      print('Client \${client.id} subscribed to event: \$event');
    });

    // Handle event unsubscription
    server.on('unsubscribe', (SocketClient client, Map<String, dynamic> data) async {
      final event = data['event'] as String?;
      if (event == null) return;

      final subscribers = _eventSubscribers[event];
      if (subscribers != null) {
        subscribers.remove(client);
        if (subscribers.isEmpty) {
          _eventSubscribers.remove(event);
        }
      }

      client.sendJson({
        'event': 'unsubscribed',
        'subscription_event': event,
        'timestamp': DateTime.now().toIso8601String()
      });

      print('Client \${client.id} unsubscribed from event: \$event');
    });

    // Handle event broadcasting
    server.on('broadcast_event', (SocketClient client, Map<String, dynamic> data) async {
      final event = data['event'] as String?;
      final eventData = data['data'];

      if (event == null) return;

      await broadcastToEvent(event, {
        'event': event,
        'data': eventData,
        'from_user': client.get('user_id'),
        'timestamp': DateTime.now().toIso8601String()
      }, exclude: client);
    });

    // Handle client disconnection
    server.onDisconnect((SocketClient client) async {
      // Remove client from all subscriptions
      for (final subscribers in _eventSubscribers.values) {
        subscribers.remove(client);
      }

      // Clean up empty subscription sets
      _eventSubscribers.removeWhere((event, subscribers) => subscribers.isEmpty);
    });
  }

  // Broadcast to all subscribers of an event
  Future<void> broadcastToEvent(String event, Map<String, dynamic> message, {
    SocketClient? exclude
  }) async {
    final subscribers = _eventSubscribers[event];
    if (subscribers == null) return;

    final disconnectedClients = <SocketClient>[];

    for (final subscriber in subscribers) {
      if (subscriber != exclude && subscriber.isConnected) {
        try {
          subscriber.sendJson(message);
        } catch (e) {
          print('Failed to send to subscriber: \$e');
          disconnectedClients.add(subscriber);
        }
      }
    }

    // Remove disconnected clients
    for (final client in disconnectedClients) {
      subscribers.remove(client);
    }

    if (subscribers.isEmpty) {
      _eventSubscribers.remove(event);
    }
  }

  // Get subscription statistics
  Map<String, dynamic> getSubscriptionStats() {
    return {
      'total_events': _eventSubscribers.length,
      'events': _eventSubscribers.map((event, subscribers) => MapEntry(event, {
        'subscriber_count': subscribers.length,
        'subscribers': subscribers.map((c) => c.get('user_id')).toList()
      }))
    };
  }

  // Check if client is subscribed to event
  bool isSubscribed(SocketClient client, String event) {
    final subscribers = _eventSubscribers[event];
    return subscribers?.contains(client) ?? false;
  }

  // Get all events client is subscribed to
  List<String> getClientSubscriptions(SocketClient client) {
    final subscriptions = <String>[];

    for (final entry in _eventSubscribers.entries) {
      if (entry.value.contains(client)) {
        subscriptions.add(entry.key);
      }
    }

    return subscriptions;
  }
}

// Usage example
void setupEventSubscription(SocketServer server) {
  final eventService = EventSubscriptionService(server);

  // Add some predefined events
  server.on('user_online', (SocketClient client, Map<String, dynamic> data) async {
    await eventService.broadcastToEvent('user_status', {
      'user_id': client.get('user_id'),
      'status': 'online',
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  server.on('user_offline', (SocketClient client, Map<String, dynamic> data) async {
    await eventService.broadcastToEvent('user_status', {
      'user_id': client.get('user_id'),
      'status': 'offline',
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  // Handle stats requests
  server.on('get_subscription_stats', (SocketClient client, Map<String, dynamic> data) async {
    final stats = eventService.getSubscriptionStats();
    client.sendJson({
      'event': 'subscription_stats',
      'data': stats
    });
  });
}`

const middlewareTypesCode = `import 'package:khadem/khadem.dart';

// Connection middleware - runs during WebSocket upgrade
final connectionLogger = SocketMiddleware.connection(
  (client, request, next) async {
    print('📥 Connection from: \${request.ip}');
    print('   User-Agent: \${request.header("User-Agent")}');
    await next(); // Continue to next middleware
  },
  priority: SocketMiddlewarePriority.connection,
  name: 'connection-logger',
);

// Message middleware - runs on every incoming message
final messageLogger = SocketMiddleware.message(
  (client, message, next) async {
    final event = message['event'];
    print('📨 Message from \${client.id}: \$event');
    await next(); // Continue to next middleware
  },
  priority: SocketMiddlewarePriority.message,
  name: 'message-logger',
);

// Room middleware - runs when joining/leaving rooms
final roomPermission = SocketMiddleware.room(
  (client, roomName, next) async {
    final userId = client.get('user_id');
    
    // Check permissions for private rooms
    if (roomName.startsWith('private:')) {
      if (roomName != 'private:\$userId') {
        throw Exception('Access denied to private room');
      }
    }
    
    // Check admin rooms
    if (roomName.startsWith('admin:')) {
      final isAdmin = client.get('is_admin') == true;
      if (!isAdmin) {
        throw Exception('Admin access required');
      }
    }
    
    await next(); // Continue to next middleware
  },
  priority: SocketMiddlewarePriority.auth,
  name: 'room-permission',
);

// Disconnect middleware - runs when client disconnects
final disconnectLogger = SocketMiddleware.disconnect(
  (client, next) async {
    final userId = client.get('user_id') ?? 'anonymous';
    final duration = DateTime.now().difference(client.request.startTime);
    print('👋 User \$userId disconnected after \${duration.inSeconds}s');
    await next(); // Continue to next middleware
  },
  priority: SocketMiddlewarePriority.disconnect,
  name: 'disconnect-logger',
);

// Rate limiting middleware
class RateLimitMiddleware {
  static final _requests = <String, List<DateTime>>{};
  
  static SocketMiddleware create({
    required int maxRequests,
    required Duration window,
  }) {
    return SocketMiddleware.message(
      (client, message, next) async {
        final key = client.id;
        final now = DateTime.now();
        
        // Clean old requests
        _requests[key]?.removeWhere((time) => 
          now.difference(time) > window
        );
        
        // Check rate limit
        final requests = _requests.putIfAbsent(key, () => []);
        if (requests.length >= maxRequests) {
          client.send('error', {
            'message': 'Rate limit exceeded. Try again later.',
            'retry_after': window.inSeconds
          });
          return; // Don't call next() - block the message
        }
        
        requests.add(now);
        await next();
      },
      priority: SocketMiddlewarePriority.preprocessing,
      name: 'rate-limiter',
    );
  }
}

// Usage with SocketServer
void main() async {
  final server = SocketServer(3000);
  
  // Add global middlewares
  server.useMiddleware(connectionLogger);
  server.useMiddleware(messageLogger);
  server.useMiddleware(roomPermission);
  server.useMiddleware(disconnectLogger);
  server.useMiddleware(RateLimitMiddleware.create(
    maxRequests: 10,
    window: Duration(seconds: 1),
  ));
  
  await server.start();
  print('🟢 Server with middleware on ws://localhost:3000');
}`

const authMiddlewareCode = `// Authentication middleware using server.useAuth()
class AuthMiddleware extends SocketMiddleware {
  @override
  Future<bool> handleConnection(SocketClient client, Request request) async {
    // Check for authentication token in query parameters or headers
    final token = request.query['token'] ?? request.headers['authorization'];

    if (token == null || token.isEmpty) {
      client.sendJson({
        'event': 'auth_required',
        'message': 'Authentication token required'
      });
      return false;
    }

    try {
      // Verify JWT token (implement your JWT verification logic)
      final payload = await verifyJWTToken(token);

      if (payload == null) {
        throw Exception('Invalid token');
      }

      // Store user information in client context
      client.set('user_id', payload['sub']);
      client.set('username', payload['username']);
      client.set('is_admin', payload['role'] == 'admin');
      client.set('authenticated', true);

      // Send authentication success
      client.sendJson({
        'event': 'authenticated',
        'user_id': payload['sub'],
        'username': payload['username']
      });

      return true;
    } catch (e) {
      client.sendJson({
        'event': 'auth_failed',
        'message': 'Authentication failed: \${e.toString()}'
      });
      return false;
    }
  }
}

// Usage with SocketServer
void setupWebSocketServer() {
  final server = SocketServer();

  // Add authentication middleware
  server.useAuth((SocketClient client, Request request) async {
    final token = request.query['token'];
    if (token == null) return null;

    // Return user ID if authenticated, null otherwise
    final payload = await verifyJWTToken(token);
    return payload?['sub'];
  });

  // Add other middleware
  server.use((SocketClient client, Request request) async {
    // Connection middleware logic
    return true;
  });

  // Setup event handlers
  server.on('join_room', (SocketClient client, Map<String, dynamic> data) async {
    final roomName = data['room'];
    if (roomName != null) {
      await client.joinRoom(roomName);
      client.sendJson({
        'event': 'room_joined',
        'room': roomName
      });
    }
  });

  server.on('send_message', (SocketClient client, Map<String, dynamic> data) async {
    final roomName = data['room'];
    final message = data['message'];

    if (roomName != null && message != null) {
      await server.broadcastToRoom(roomName, {
        'event': 'message',
        'user_id': client.get('user_id'),
        'username': client.get('username'),
        'message': message,
        'timestamp': DateTime.now().toIso8601String()
      }, exclude: client);
    }
  });
}

// Helper function for JWT verification
Future<Map<String, dynamic>?> verifyJWTToken(String token) async {
  try {
    // Implement your JWT verification logic here
    // This is a placeholder - use a proper JWT library
    return {
      'sub': 'user123',
      'username': 'john_doe',
      'role': 'user'
    };
  } catch (e) {
    return null;
  }
}`

const rateLimitMiddlewareCode = `// Rate limiting middleware for SocketClient
class RateLimitMiddleware extends SocketMiddleware {
  static final Map<String, RateLimiter> _rateLimiters = {};
  final Map<String, int> _limits = {
    'message': 60,      // 60 messages per minute
    'join_room': 10,    // 10 room joins per minute
    'leave_room': 10,   // 10 room leaves per minute
    'ping': 120,        // 120 pings per minute
  };

  @override
  Future<bool> handleMessage(SocketClient client, String message) async {
    try {
      final data = jsonDecode(message);
      final event = data['event'] as String?;

      if (event == null) return true;

      final userId = client.get('user_id') ?? client.id;
      final limit = _limits[event] ?? 30; // Default 30 requests per minute

      final key = '\$userId:\$event';
      final limiter = _rateLimiters.putIfAbsent(
        key,
        () => RateLimiter(maxRequests: limit, window: Duration(minutes: 1))
      );

      final result = await limiter.check(userId);

      if (!result.allowed) {
        client.sendJson({
          'event': 'rate_limited',
          'message': 'Too many \$event requests. Try again later.',
          'retry_after_seconds': result.retryAfter?.inSeconds ?? 60
        });
        return false;
      }

      return true;
    } catch (e) {
      // If message parsing fails, allow it through
      return true;
    }
  }
}

// Rate limiter implementation
class RateLimiter {
  final int maxRequests;
  final Duration window;
  final List<DateTime> _requests = [];

  RateLimiter({required this.maxRequests, required this.window});

  Future<RateLimitResult> check(String identifier) async {
    final now = DateTime.now();

    // Remove old requests outside the window
    _requests.removeWhere((time) => now.difference(time) > window);

    if (_requests.length >= maxRequests) {
      final oldestRequest = _requests.first;
      final resetTime = oldestRequest.add(window);
      final retryAfter = resetTime.difference(now);

      return RateLimitResult(
        allowed: false,
        retryAfter: retryAfter
      );
    }

    _requests.add(now);
    return RateLimitResult(allowed: true, retryAfter: null);
  }
}

class RateLimitResult {
  final bool allowed;
  final Duration? retryAfter;

  RateLimitResult({required this.allowed, this.retryAfter});
}

// Usage with SocketServer
void setupRateLimitedServer() {
  final server = SocketServer();

  // Add rate limiting middleware
  server.use((SocketClient client, Request request) async {
    // Rate limiting is handled per message in the middleware above
    return true;
  });

  // Add rate limiting specifically for connections
  final connectionLimiter = RateLimiter(maxRequests: 100, window: Duration(minutes: 1));

  server.use((SocketClient client, Request request) async {
    final ip = request.ip;
    final result = await connectionLimiter.check(ip);

    if (!result.allowed) {
      client.sendJson({
        'event': 'connection_rate_limited',
        'message': 'Too many connections from this IP'
      });
      return false;
    }

    return true;
  });
}`

const clientManagementCode = `// Client management using SocketClient and SocketManager
class ClientManager {
  final SocketManager manager;
  final Map<String, SocketClient> _clients = {};
  final Map<String, Map<String, dynamic>> _clientMetadata = {};

  ClientManager(this.manager);

  // Add client
  void addClient(SocketClient client) {
    final userId = client.get('user_id') ?? client.id;
    _clients[userId] = client;

    // Store metadata
    _clientMetadata[userId] = {
      'connected_at': DateTime.now().toIso8601String(),
      'ip': client.get('ip'),
      'user_agent': client.get('user_agent'),
      'rooms': <String>[],
      'last_activity': DateTime.now().toIso8601String()
    };

    print('Client added: \$userId');
  }

  // Remove client
  void removeClient(String userId) {
    final client = _clients.remove(userId);
    if (client != null) {
      // Leave all rooms
      final metadata = _clientMetadata[userId];
      if (metadata != null) {
        final rooms = List<String>.from(metadata['rooms'] ?? []);
        for (final room in rooms) {
          client.leaveRoom(room);
        }
      }

      _clientMetadata.remove(userId);
      print('Client removed: \$userId');
    }
  }

  // Get client by user ID
  SocketClient? getClient(String userId) {
    return _clients[userId];
  }

  // Get all clients
  List<SocketClient> getAllClients() {
    return _clients.values.toList();
  }

  // Update client metadata
  void updateClientMetadata(String userId, String key, dynamic value) {
    if (_clientMetadata.containsKey(userId)) {
      _clientMetadata[userId]![key] = value;
      _clientMetadata[userId]!['last_activity'] = DateTime.now().toIso8601String();
    }
  }

  // Get client metadata
  Map<String, dynamic>? getClientMetadata(String userId) {
    return _clientMetadata[userId];
  }

  // Broadcast to all clients
  Future<void> broadcastToAll(Map<String, dynamic> message) async {
    await manager.broadcast(message);
  }

  // Send message to specific client
  Future<void> sendToClient(String userId, Map<String, dynamic> message) async {
    final client = _clients[userId];
    if (client != null && client.isConnected) {
      client.sendJson(message);
    }
  }

  // Get client statistics
  Map<String, dynamic> getStats() {
    final now = DateTime.now();
    final activeClients = _clients.values.where((c) => c.isConnected).length;

    return {
      'total_clients': _clients.length,
      'active_clients': activeClients,
      'inactive_clients': _clients.length - activeClients,
      'clients': _clientMetadata.entries.map((entry) => {
        'user_id': entry.key,
        'connected_at': entry.value['connected_at'],
        'last_activity': entry.value['last_activity'],
        'rooms': entry.value['rooms'],
        'is_active': _clients[entry.key]?.isConnected ?? false
      }).toList()
    };
  }

  // Clean up inactive clients
  void cleanupInactiveClients() {
    final inactiveClients = <String>[];

    for (final entry in _clients.entries) {
      if (!entry.value.isConnected) {
        inactiveClients.add(entry.key);
      }
    }

    for (final userId in inactiveClients) {
      removeClient(userId);
    }
  }
}

// SocketClient extension methods
extension SocketClientExtensions on SocketClient {
  // Check if client is in a room
  bool isInRoom(String roomName) {
    // This would be implemented in the actual SocketClient class
    return get('rooms')?.contains(roomName) ?? false;
  }

  // Get client rooms
  List<String> getRooms() {
    return List<String>.from(get('rooms') ?? []);
  }

  // Join room with metadata update
  Future<void> joinRoom(String roomName) async {
    // Implementation would call the actual joinRoom method
    final rooms = getRooms();
    if (!rooms.contains(roomName)) {
      rooms.add(roomName);
      set('rooms', rooms);
    }
  }

  // Leave room with metadata update
  Future<void> leaveRoom(String roomName) async {
    // Implementation would call the actual leaveRoom method
    final rooms = getRooms();
    rooms.remove(roomName);
    set('rooms', rooms);
  }

  // Send JSON message
  void sendJson(Map<String, dynamic> data) {
    try {
      final message = jsonEncode(data);
      send(message);
    } catch (e) {
      print('Failed to send JSON message: \$e');
    }
  }
}

// Usage example
void setupClientManagement(SocketServer server, SocketManager manager) {
  final clientManager = ClientManager(manager);

  // Handle client connections
  server.onConnect((SocketClient client) async {
    clientManager.addClient(client);

    // Send welcome message
    client.sendJson({
      'event': 'welcome',
      'user_id': client.get('user_id'),
      'timestamp': DateTime.now().toIso8601String()
    });
  });

  // Handle client disconnections
  server.onDisconnect((SocketClient client) async {
    final userId = client.get('user_id') ?? client.id;
    clientManager.removeClient(userId);
  });

  // Handle client info requests
  server.on('get_client_info', (SocketClient client, Map<String, dynamic> data) async {
    final userId = data['user_id'] as String?;
    if (userId != null) {
      final metadata = clientManager.getClientMetadata(userId);
      if (metadata != null) {
        client.sendJson({
          'event': 'client_info',
          'user_id': userId,
          'data': metadata
        });
      }
    }
  });

  // Handle stats requests
  server.on('get_client_stats', (SocketClient client, Map<String, dynamic> data) async {
    final stats = clientManager.getStats();
    client.sendJson({
      'event': 'client_stats',
      'data': stats
    });
  });
}`

const errorHandlingCode = `class ErrorHandler {
  static void handle(WebSocket socket, dynamic error, StackTrace? stackTrace) {
    print('WebSocket error: \$error');
    if (stackTrace != null) {
      print('Stack trace: \$stackTrace');
    }

    // Send error to client
    try {
      socket.send(jsonEncode({
        'type': 'error',
        'message': 'An error occurred',
        'timestamp': DateTime.now().toIso8601String()
      }));
    } catch (e) {
      print('Failed to send error to client: \$e');
    }
  }

  static void handleConnectionError(WebSocket socket, dynamic error) {
    print('Connection error: \$error');

    try {
      socket.send(jsonEncode({
        'type': 'connection_error',
        'message': 'Connection failed',
        'error': error.toString()
      }));
    } catch (e) {
      // Socket might be closed, ignore
    }
  }

  static void handleMessageError(WebSocket socket, String message, dynamic error) {
    print('Message processing error: \$error');

    try {
      socket.send(jsonEncode({
        'type': 'message_error',
        'message': 'Failed to process message',
        'original_message': message,
        'error': error.toString()
      }));
    } catch (e) {
      print('Failed to send message error: \$e');
    }
  }
}`

const notificationSystemCode = `class NotificationManager {
  static final Map<String, Set<WebSocket>> _userSockets = {};

  // Register user socket
  static void registerUser(String userId, WebSocket socket) {
    _userSockets.putIfAbsent(userId, () => {}).add(socket);
  }

  // Unregister user socket
  static void unregisterUser(String userId, WebSocket socket) {
    final sockets = _userSockets[userId];
    if (sockets != null) {
      sockets.remove(socket);
      if (sockets.isEmpty) {
        _userSockets.remove(userId);
      }
    }
  }

  // Send notification to user
  static void sendNotification(String userId, String title, String message, {
    String type = 'info',
    Map<String, dynamic>? data
  }) {
    final sockets = _userSockets[userId];
    if (sockets != null) {
      final notification = {
        'type': 'notification',
        'title': title,
        'message': message,
        'notification_type': type,
        'data': data,
        'timestamp': DateTime.now().toIso8601String()
      };

      for (final socket in sockets) {
        socket.send(jsonEncode(notification));
      }
    }
  }

  // Broadcast notification to all users
  static void broadcastNotification(String title, String message, {
    String type = 'info',
    Map<String, dynamic>? data
  }) {
    final notification = {
      'type': 'notification',
      'title': title,
      'message': message,
      'notification_type': type,
      'data': data,
      'timestamp': DateTime.now().toIso8601String()
    };

    for (final sockets in _userSockets.values) {
      for (final socket in sockets) {
        socket.send(jsonEncode(notification));
      }
    }
  }
}`

const gameServerCode = `class GameServer {
  static final Map<String, GameRoom> _rooms = {};
  static final Map<String, Player> _players = {};

  // Create game room
  static String createRoom(String gameType, String hostId) {
    final roomId = generateRoomId();
    final room = GameRoom(roomId, gameType, hostId);
    _rooms[roomId] = room;
    return roomId;
  }

  // Join game room
  static bool joinRoom(String roomId, String playerId, WebSocket socket) {
    final room = _rooms[roomId];
    if (room == null) return false;

    final player = Player(playerId, socket);
    _players[playerId] = player;

    room.addPlayer(player);
    return true;
  }

  // Handle game message
  static void handleGameMessage(String roomId, String playerId, Map<String, dynamic> message) {
    final room = _rooms[roomId];
    final player = _players[playerId];

    if (room != null && player != null) {
      room.handleMessage(player, message);
    }
  }

  // Start game
  static void startGame(String roomId) {
    final room = _rooms[roomId];
    if (room != null) {
      room.startGame();
    }
  }
}

class GameRoom {
  final String id;
  final String gameType;
  final String hostId;
  final List<Player> players = [];
  bool gameStarted = false;

  GameRoom(this.id, this.gameType, this.hostId);

  void addPlayer(Player player) {
    players.add(player);
    broadcast({
      'type': 'player_joined',
      'player_id': player.id,
      'players_count': players.length
    });
  }

  void handleMessage(Player sender, Map<String, dynamic> message) {
    // Process game-specific messages
    switch (message['action']) {
      case 'move':
        handleMove(sender, message);
        break;
      case 'attack':
        handleAttack(sender, message);
        break;
      case 'chat':
        handleChat(sender, message);
        break;
    }
  }

  void handleMove(Player player, Map<String, dynamic> data) {
    broadcast({
      'type': 'player_moved',
      'player_id': player.id,
      'position': data['position']
    });
  }

  void handleAttack(Player attacker, Map<String, dynamic> data) {
    broadcast({
      'type': 'player_attacked',
      'attacker_id': attacker.id,
      'target_id': data['target_id'],
      'damage': data['damage']
    });
  }

  void handleChat(Player sender, Map<String, dynamic> data) {
    broadcast({
      'type': 'chat_message',
      'player_id': sender.id,
      'message': data['message']
    });
  }

  void broadcast(Map<String, dynamic> message) {
    final jsonMessage = jsonEncode(message);
    for (final player in players) {
      player.socket.send(jsonMessage);
    }
  }

  void startGame() {
    gameStarted = true;
    broadcast({
      'type': 'game_started',
      'players': players.map((p) => p.id).toList()
    });
  }
}

class Player {
  final String id;
  final WebSocket socket;

  Player(this.id, this.socket);

  void send(Map<String, dynamic> message) {
    socket.send(jsonEncode(message));
  }
}

String generateRoomId() {
  return 'room_\${DateTime.now().millisecondsSinceEpoch}';
}`

const socketServerApiCode = `class SocketServer {
  // Constructor
  SocketServer(int port, {String? host, SocketManager? manager});

  // Start server
  Future<void> start() async {}

  // Authentication - runs during WebSocket upgrade
  void useAuth(FutureOr<bool> Function(Request request) callback) {}

  // Middleware
  void useMiddleware(SocketMiddleware middleware) {}

  // Room-specific middleware
  void useRoom(String room, List<SocketMiddleware> middlewares) {}

  // Event handlers
  void on(
    String event,
    FutureOr<void> Function(SocketClient client, dynamic data) handler, {
    List<SocketMiddleware> middlewares = const [],
  }) {}

  // Connection lifecycle callbacks
  void onConnect(FutureOr<void> Function(SocketClient client) callback) {}
  void onDisconnect(FutureOr<void> Function(SocketClient client) callback) {}

  // Access to socket manager
  SocketManager get manager {}
}`

const socketManagerApiCode = `class SocketManager {
  // Client management
  void addClient(SocketClient client) {}
  void removeClient(SocketClient client) {}
  SocketClient? getClient(String clientId) {}

  // Event handlers
  void on(
    String event,
    SocketEventHandler handler, {
    List<SocketMiddleware> middlewares = const [],
  }) {}

  // Room management
  void join(String room, SocketClient client) {}
  void leave(String room, SocketClient client) {}
  bool hasRoom(String room) {}

  // Room middleware
  void useRoom(String room, List<SocketMiddleware> middlewares) {}
  List<SocketMiddleware> getRoomMiddlewares(Set<String> rooms) {}

  // Broadcasting
  void broadcast(String room, String event, dynamic data) {}
  void sendTo(String clientId, String event, dynamic data) {}
  void sendToUser(String userId, String event, dynamic data) {}

  // Event subscriptions
  void subscribeToEvent(String event, SocketClient client) {}
  void unsubscribeFromEvent(String event, SocketClient client) {}
  void broadcastToEventSubscribers(String event, dynamic data) {}
  void broadcastEvent(String event, dynamic data) {}
  int getEventSubscriberCount(String event) {}
  bool isClientSubscribedToEvent(String event, SocketClient client) {}
  Set<String> getClientSubscriptions(SocketClient client) {}
  bool hasEventSubscribers(String event) {}

  // Get event handler
  dynamic getEvent(String event) {}

  // Global middleware
  void setGlobalMiddleware(SocketMiddlewarePipeline middleware) {}
}`

const socketClientApiCode = `class SocketClient {
  final String id;
  final WebSocket socket;
  final SocketManager manager;
  final Set<String> rooms;
  final HttpHeaders? headers;
  final Request request;

  // Context management (uses request attributes)
  void set(String key, dynamic value) {}
  dynamic get(String key) {}

  // Messaging
  void send(String event, dynamic data) {}
  void close([int code = 1000, String reason = '']) {}

  // Room management
  void joinRoom(String room) {}
  void leaveRoom(String room) {}
  bool isInRoom(String room) {}

  // Authentication info
  bool get isAuthorized {}
  bool get isAuthenticated {}
  Authenticatable? get authenticatedUser {}
  Map<String, dynamic>? get user {}

  // Header access
  String? get authToken {}
  String? get userAgent {}
  String? getHeader(String name) {}
  List<String>? getHeaderValues(String name) {}
}`

const socketMiddlewareApiCode = `// Socket Middleware API
class SocketMiddleware {
  // Create a connection middleware (runs during WebSocket upgrade)
  SocketMiddleware.connection(
    SocketConnectionHandler handler, {
    SocketMiddlewarePriority priority = SocketMiddlewarePriority.connection,
    String? name,
  });

  // Create a message middleware (runs on every incoming message)
  SocketMiddleware.message(
    SocketMiddlewareHandler handler, {
    SocketMiddlewarePriority priority = SocketMiddlewarePriority.message,
    String? name,
  });

  // Create a room middleware (runs when joining/leaving rooms)
  SocketMiddleware.room(
    SocketRoomHandler handler, {
    SocketMiddlewarePriority priority = SocketMiddlewarePriority.room,
    String? name,
  });

  // Create a disconnect middleware (runs when client disconnects)
  SocketMiddleware.disconnect(
    SocketDisconnectHandler handler, {
    SocketMiddlewarePriority priority = SocketMiddlewarePriority.disconnect,
    String? name,
  });

  // Get middleware properties
  SocketMiddlewarePriority get priority {}
  SocketMiddlewareType get type {}
  String get name {}
  bool canHandle(SocketMiddlewareType type) {}
}

// Middleware handler types
typedef SocketMiddlewareHandler = FutureOr<void> Function(
  SocketClient client,
  dynamic message,
  SocketNextFunction next,
);

typedef SocketConnectionHandler = FutureOr<void> Function(
  SocketClient client,
  Request request,
  SocketNextFunction next,
);

typedef SocketDisconnectHandler = FutureOr<void> Function(
  SocketClient client,
  SocketNextFunction next,
);

typedef SocketRoomHandler = FutureOr<void> Function(
  SocketClient client,
  String room,
  SocketNextFunction next,
);

typedef SocketNextFunction = FutureOr<void> Function();

// Middleware priorities (determines execution order)
enum SocketMiddlewarePriority {
  global,        // Highest priority
  connection,
  auth,
  preprocessing,
  business,
  room,
  message,
  terminating,
  disconnect,    // Lowest priority
}

// Middleware types (determines when middleware runs)
enum SocketMiddlewareType {
  connection,  // Runs during WebSocket upgrade
  message,     // Runs on every incoming message
  room,        // Runs when joining/leaving rooms
  disconnect,  // Runs when client disconnects
  general,     // General purpose middleware
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

const broadcastingCode = `// Broadcasting using SocketManager
class BroadcastingService {
  final SocketManager manager;

  BroadcastingService(this.manager);

  // Broadcast to all connected clients
  Future<void> broadcastToAll(Map<String, dynamic> message) async {
    await manager.broadcast(message);
  }

  // Broadcast to specific room
  Future<void> broadcastToRoom(String roomName, Map<String, dynamic> message, {
    SocketClient? exclude
  }) async {
    await manager.broadcastToRoom(roomName, message, exclude: exclude);
  }

  // Broadcast to specific user
  Future<void> broadcastToUser(String userId, Map<String, dynamic> message) async {
    final client = manager.getClientByUserId(userId);
    if (client != null) {
      client.sendJson(message);
    }
  }

  // Broadcast to multiple users
  Future<void> broadcastToUsers(List<String> userIds, Map<String, dynamic> message) async {
    for (final userId in userIds) {
      await broadcastToUser(userId, message);
    }
  }

  // Broadcast except specific users
  Future<void> broadcastExcept(List<String> excludeUserIds, Map<String, dynamic> message) async {
    final allClients = manager.getAllClients();

    for (final client in allClients) {
      final userId = client.get('user_id');
      if (userId != null && !excludeUserIds.contains(userId)) {
        client.sendJson(message);
      }
    }
  }

  // Get room statistics
  Map<String, dynamic> getRoomStats(String roomName) {
    final clients = manager.getClientsInRoom(roomName);
    return {
      'room': roomName,
      'user_count': clients.length,
      'users': clients.map((c) => c.get('user_id')).toList()
    };
  }

  // Get server statistics
  Map<String, dynamic> getServerStats() {
    return {
      'total_clients': manager.getTotalClients(),
      'total_rooms': manager.getTotalRooms(),
      'rooms': manager.getAllRooms().map((roomName) => getRoomStats(roomName)).toList()
    };
  }
}

// Usage example
void setupBroadcasting(SocketServer server, SocketManager manager) {
  final broadcaster = BroadcastingService(manager);

  // Handle broadcast requests
  server.on('broadcast', (SocketClient client, Map<String, dynamic> data) async {
    final target = data['target'];
    final message = data['message'];

    if (target == null || message == null) return;

    try {
      switch (target['type']) {
        case 'all':
          await broadcaster.broadcastToAll({
            'event': 'broadcast',
            'from': client.get('user_id'),
            'message': message
          });
          break;

        case 'room':
          final roomName = target['room'];
          if (roomName != null) {
            await broadcaster.broadcastToRoom(roomName, {
              'event': 'room_broadcast',
              'from': client.get('user_id'),
              'message': message
            }, exclude: client);
          }
          break;

        case 'user':
          final userId = target['user_id'];
          if (userId != null) {
            await broadcaster.broadcastToUser(userId, {
              'event': 'direct_message',
              'from': client.get('user_id'),
              'message': message
            });
          }
          break;
      }
    } catch (e) {
      client.sendJson({
        'event': 'error',
        'message': 'Broadcast failed: \${e.toString()}'
      });
    }
  });

  // Handle stats requests
  server.on('get_stats', (SocketClient client, Map<String, dynamic> data) async {
    final stats = broadcaster.getServerStats();
    client.sendJson({
      'event': 'stats',
      'data': stats
    });
  });
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
