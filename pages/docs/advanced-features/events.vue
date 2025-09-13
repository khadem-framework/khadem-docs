<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Event System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Priority-based event system with subscriber management, groups, and async execution.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Pub-Sub</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Priority</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Async</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Groups</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Subscribers</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Event Handling</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Basic Event Registration and Emission"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Events are automatically available via <code>Khadem.eventBus</code></p>
          <p><strong>⚡ Tip:</strong> Use descriptive event names like <code>'user.created'</code> or <code>'order.placed'</code></p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Priorities</h2>

      <CodeBlock
        :code="priorityUsageCode"
        language="dart"
        title="Priority-Based Event Execution"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Priority Levels</h4>
        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• <code>EventPriority.low</code> - Background tasks, cleanup</li>
          <li>• <code>EventPriority.normal</code> - Standard event handling</li>
          <li>• <code>EventPriority.high</code> - Important business logic</li>
          <li>• <code>EventPriority.critical</code> - Security, logging, monitoring</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">One-Time Listeners</h2>

      <CodeBlock
        :code="onceUsageCode"
        language="dart"
        title="One-Time Event Listeners"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Use Cases</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Application initialization</li>
          <li>• Resource cleanup after first use</li>
          <li>• Setup tasks that should run only once</li>
          <li>• Migration or upgrade handlers</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Groups</h2>

      <CodeBlock
        :code="groupUsageCode"
        language="dart"
        title="Event Groups for Batch Operations"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Group Benefits</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• Batch emit related events together</li>
          <li>• Organize events by domain or feature</li>
          <li>• Simplify event management</li>
          <li>• Enable/disable entire feature sets</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Async Event Execution</h2>

      <CodeBlock
        :code="asyncUsageCode"
        language="dart"
        title="Asynchronous Event Processing"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">When to Use Async</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• I/O operations (database, network calls)</li>
          <li>• Heavy computations</li>
          <li>• Multiple independent operations</li>
          <li>• Non-blocking event processing</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Subscribers</h2>

      <CodeBlock
        :code="subscriberUsageCode"
        language="dart"
        title="Event Subscriber Pattern"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Subscriber Benefits</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• Group related event handlers in one class</li>
          <li>• Automatic cleanup when subscriber is destroyed</li>
          <li>• Better code organization</li>
          <li>• Easier testing and debugging</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Broadcasting</h2>

      <CodeBlock
        :code="broadcastUsageCode"
        language="dart"
        title="Socket Broadcasting Events"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Broadcast Use Cases</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• Real-time notifications</li>
          <li>• Live updates across clients</li>
          <li>• Distributed system coordination</li>
          <li>• Multi-instance synchronization</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Management</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="managementUsageCode"
            language="dart"
            title="Listener Management"
          />
        </div>

        <div>
          <CodeBlock
            :code="inspectionUsageCode"
            language="dart"
            title="Event Inspection"
          />
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 class="font-medium mb-2">Management Operations</h4>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• <code>off(event, listener)</code> - Remove specific listener</li>
          <li>• <code>offEvent(event)</code> - Remove all listeners for event</li>
          <li>• <code>offSubscriber(subscriber)</code> - Remove subscriber's events</li>
          <li>• <code>clear()</code> - Remove all listeners and groups</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Event Listener Error Handling"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Error Handling Best Practices</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• Always wrap listener logic in try-catch blocks</li>
          <li>• Log errors but don't rethrow to avoid disrupting other listeners</li>
          <li>• Use async error handling for complex operations</li>
          <li>• Consider using error events for centralized error handling</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use descriptive, namespaced event names</li>
            <li>• Handle errors gracefully in listeners</li>
            <li>• Use appropriate priorities for critical operations</li>
            <li>• Clean up listeners when components are destroyed</li>
            <li>• Use event groups for related operations</li>
            <li>• Document custom events and their payloads</li>
            <li>• Use subscribers for complex event handling</li>
            <li>• Test event interactions thoroughly</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't perform heavy operations in sync listeners</li>
            <li>• Don't rely on event execution order (except priorities)</li>
            <li>• Don't forget to clean up listeners in long-lived objects</li>
            <li>• Don't use events for simple method calls</li>
            <li>• Don't emit events in event listeners (can cause loops)</li>
            <li>• Don't ignore errors in event listeners</li>
            <li>• Don't use anonymous functions if you need to remove them</li>
            <li>• Don't block the event loop with sync operations</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Common Patterns</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Domain Event Pattern</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Organize events by business domain</p>
          <CodeBlock
            :code="domainPatternCode"
            language="dart"
            title="Domain Event Organization"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Observer Pattern</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Decouple components with events</p>
          <CodeBlock
            :code="observerPatternCode"
            language="dart"
            title="Observer Pattern Implementation"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Event Middleware</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Add cross-cutting concerns</p>
          <CodeBlock
            :code="middlewarePatternCode"
            language="dart"
            title="Event Middleware Pattern"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Event Sourcing</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Track state changes through events</p>
          <CodeBlock
            :code="eventSourcingCode"
            language="dart"
            title="Event Sourcing Pattern"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Performance Considerations</h2>

      <div class="space-y-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Optimization Tips</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Use async execution for I/O operations</li>
            <li>• Limit the number of listeners per event</li>
            <li>• Use event groups for batch operations</li>
            <li>• Clean up unused listeners regularly</li>
            <li>• Consider memory usage with long-lived listeners</li>
            <li>• Use priorities to optimize execution order</li>
          </ul>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Memory Management</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Always remove listeners when components are destroyed</li>
            <li>• Use subscribers for automatic cleanup</li>
            <li>• Avoid circular references in event payloads</li>
            <li>• Monitor listener count for memory leaks</li>
            <li>• Use weak references for long-lived objects</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Event System',
  meta: [
    { name: 'description', content: 'Comprehensive event system documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Register an event listener
Khadem.eventBus.on('user.created', (user) async {
  print('New user created: \${user['name']}');
  await sendWelcomeEmail(user);
});

// Emit an event with payload
await Khadem.eventBus.emit('user.created', {
  'id': 123,
  'name': 'John Doe',
  'email': 'john@example.com'
});`

// Priority-Based Event Execution
const priorityUsageCode = `// Register listeners with different priorities
Khadem.eventBus.on('order.processed', (order) async {
  // Critical: Security logging
  await logSecurityEvent('Order processed', order);
}, priority: EventPriority.critical);

Khadem.eventBus.on('order.processed', (order) async {
  // High: Business logic
  await updateInventory(order);
}, priority: EventPriority.high);

Khadem.eventBus.on('order.processed', (order) async {
  // Normal: Notifications
  await sendOrderConfirmation(order);
}, priority: EventPriority.normal);

Khadem.eventBus.on('order.processed', (order) async {
  // Low: Analytics
  await trackAnalytics('order_processed', order);
}, priority: EventPriority.low);

// Emit event - listeners execute in priority order
await Khadem.eventBus.emit('order.processed', orderData);`

// One-Time Listeners
const onceUsageCode = `// Register one-time listeners
Khadem.eventBus.once('app.initialized', () async {
  print('App initialized for the first time!');
  await performInitialSetup();
});

Khadem.eventBus.once('database.migrated', (version) async {
  print('Database migrated to version: \$version');
  await updateMigrationStatus(version);
});

// Or use the once() convenience method
Khadem.eventBus.once('cache.warmed', () async {
  print('Cache warmed up successfully');
});

// These listeners will be automatically removed after first execution
await Khadem.eventBus.emit('app.initialized');
await Khadem.eventBus.emit('database.migrated', '1.2.0');`

// Event Groups
const groupUsageCode = `// Create event groups for related operations
Khadem.eventBus.addToGroup('user.lifecycle', 'user.created');
Khadem.eventBus.addToGroup('user.lifecycle', 'user.updated');
Khadem.eventBus.addToGroup('user.lifecycle', 'user.deleted');

Khadem.eventBus.addToGroup('order.workflow', 'order.placed');
Khadem.eventBus.addToGroup('order.workflow', 'order.confirmed');
Khadem.eventBus.addToGroup('order.workflow', 'order.shipped');

// Register listeners for group events
Khadem.eventBus.on('user.created', (user) async => await logUserActivity(user, 'created'));
Khadem.eventBus.on('user.updated', (user) async => await logUserActivity(user, 'updated'));
Khadem.eventBus.on('user.deleted', (user) async => await logUserActivity(user, 'deleted'));

// Emit entire group at once
await Khadem.eventBus.emitGroup('user.lifecycle', userData);

// Remove events from groups
Khadem.eventBus.removeFromGroup('user.lifecycle', 'user.updated');`

// Async Event Execution
const asyncUsageCode = `// Synchronous execution (default)
Khadem.eventBus.on('file.uploaded', (file) async {
  // This blocks other listeners
  await processFile(file);
  await generateThumbnail(file);
});

// Asynchronous execution (recommended for I/O)
await Khadem.eventBus.emit('file.uploaded', fileData, queue: true);

// Multiple async operations
Khadem.eventBus.on('user.registered', (user) async {
  // These run in parallel when queue: true
  final emailTask = sendWelcomeEmail(user);
  final profileTask = createUserProfile(user);
  final analyticsTask = trackRegistration(user);

  await Future.wait([emailTask, profileTask, analyticsTask]);
});

// Emit with async processing
await Khadem.eventBus.emit('user.registered', userData, queue: true);`

// Event Subscribers
const subscriberUsageCode = `// Create an event subscriber class
class UserEventSubscriber implements EventSubscriberInterface {
  @override
  List<EventMethod> getEventHandlers() => [
    EventMethod(
      eventName: 'user.created',
      handler: _onUserCreated,
      priority: EventPriority.high,
    ),
    EventMethod(
      eventName: 'user.updated',
      handler: _onUserUpdated,
      priority: EventPriority.normal,
    ),
    EventMethod(
      eventName: 'user.deleted',
      handler: _onUserDeleted,
      priority: EventPriority.normal,
      once: true, // Only handle first deletion
    ),
  ];

  Future<void> _onUserCreated(dynamic user) async {
    await sendWelcomeEmail(user);
    await createUserProfile(user);
  }

  Future<void> _onUserUpdated(dynamic user) async {
    await updateUserCache(user);
    await logUserChange(user);
  }

  Future<void> _onUserDeleted(dynamic user) async {
    await cleanupUserData(user);
    await logUserDeletion(user);
  }
}

// Register the subscriber
final subscriber = UserEventSubscriber();
registerSubscribers([subscriber]);

// All cleanup happens automatically when subscriber is destroyed
Khadem.eventBus.offSubscriber(subscriber);`

// Socket Broadcasting
const broadcastUsageCode = `// Broadcast events to all connected clients
Khadem.eventBus.on('notification.sent', (notification) async {
  // Local processing
  await saveNotification(notification);
});

// Emit and broadcast to WebSocket clients
await Khadem.eventBus.emit('notification.sent', notificationData, broadcast: true);

// Real-time features
Khadem.eventBus.on('live.update', (update) async {
  // Process live update
  await applyLiveUpdate(update);
});

// Broadcast live updates to all clients
await Khadem.eventBus.emit('live.update', updateData, broadcast: true);

// Group broadcasting
await Khadem.eventBus.emitGroup('user.updates', userData, broadcast: true);`

// Listener Management
const managementUsageCode = `// Remove specific listener
void removeListener() {
  Khadem.eventBus.off('user.created', myHandler);
}

// Remove all listeners for an event
void clearEventListeners() {
  Khadem.eventBus.offEvent('user.created');
}

// Remove all listeners for a subscriber
void cleanupSubscriber() {
  Khadem.eventBus.offSubscriber(this);
}

// Clear everything (use with caution)
void resetEventSystem() {
  Khadem.eventBus.clear();
}

// Check if event has listeners
if (Khadem.eventBus.hasListeners('user.created')) {
  print('Event has active listeners');
}

// Get listener count
final count = Khadem.eventBus.listenerCount('user.created');
print('Listeners for user.created: \$count');`

// Event Inspection
const inspectionUsageCode = `// Inspect registered listeners
final listeners = Khadem.eventBus.listeners;
for (final entry in listeners.entries) {
  print('Event: \${entry.key}');
  print('Listeners: \${entry.value.length}');
}

// Inspect event groups
final groups = Khadem.eventBus.eventGroups;
for (final entry in groups.entries) {
  print('Group: \${entry.key}');
  print('Events: \${entry.value.join(', ')}');
}

// Inspect subscriber events
final subscriberEvents = Khadem.eventBus.subscriberEvents;
for (final entry in subscriberEvents.entries) {
  print('Subscriber: \${entry.key}');
  print('Events: \${entry.value.join(', ')}');
}

// Debug event system state
void debugEventSystem() {
  print('=== Event System Debug ===');
  print('Total events: \${listeners.length}');
  print('Total groups: \${groups.length}');
  print('Total subscribers: \${subscriberEvents.length}');

  for (final entry in listeners.entries) {
    print('\${entry.key}: \${entry.value.length} listeners');
  }
}`

// Error Handling
const errorHandlingCode = `// Proper error handling in listeners
Khadem.eventBus.on('user.created', (user) async {
  try {
    await sendWelcomeEmail(user);
    await createUserProfile(user);
    await logUserCreation(user);
  } catch (e, stackTrace) {
    // Log error but don't rethrow
    Khadem.logger.error('Failed to process user creation', error: e, stackTrace: stackTrace);

    // Optionally emit error event
    await Khadem.eventBus.emit('user.creation.failed', {
      'user': user,
      'error': e.toString(),
      'timestamp': DateTime.now(),
    });
  }
});

// Error event handler
Khadem.eventBus.on('user.creation.failed', (errorData) async {
  // Handle failed user creation
  await notifyAdmin(errorData);
  await cleanupPartialData(errorData['user']);
});

// Async error handling
Khadem.eventBus.on('file.processed', (file) async {
  try {
    final result = await processFileAsync(file);
    await Khadem.eventBus.emit('file.processing.success', result);
  } on FileProcessingException catch (e) {
    await Khadem.eventBus.emit('file.processing.error', {
      'file': file,
      'error': e.message,
    });
  } catch (e) {
    await Khadem.eventBus.emit('file.processing.unexpected_error', {
      'file': file,
      'error': e.toString(),
    });
  }
});`

// Common Patterns
const domainPatternCode = `// Domain-driven event organization
class UserDomainEvents {
  static const String created = 'user.domain.created';
  static const String updated = 'user.domain.updated';
  static const String deleted = 'user.domain.deleted';
  static const String passwordChanged = 'user.domain.password_changed';
  static const String emailVerified = 'user.domain.email_verified';
}

class OrderDomainEvents {
  static const String placed = 'order.domain.placed';
  static const String confirmed = 'order.domain.confirmed';
  static const String shipped = 'order.domain.shipped';
  static const String delivered = 'order.domain.delivered';
  static const String cancelled = 'order.domain.cancelled';
}

// Usage with domain events
Khadem.eventBus.on(UserDomainEvents.created, (user) async {
  await sendWelcomeEmail(user);
  await createUserProfile(user);
});

Khadem.eventBus.on(OrderDomainEvents.placed, (order) async {
  await reserveInventory(order);
  await processPayment(order);
});

// Group domain events
Khadem.eventBus.addToGroup('user.domain', UserDomainEvents.created);
Khadem.eventBus.addToGroup('user.domain', UserDomainEvents.updated);
Khadem.eventBus.addToGroup('user.domain', UserDomainEvents.deleted);

Khadem.eventBus.addToGroup('order.lifecycle', OrderDomainEvents.placed);
Khadem.eventBus.addToGroup('order.lifecycle', OrderDomainEvents.confirmed);
Khadem.eventBus.addToGroup('order.lifecycle', OrderDomainEvents.shipped);`

const observerPatternCode = `// Observer pattern with events
class UserService {
  Future<void> createUser(Map<String, dynamic> userData) async {
    final user = await _saveUserToDatabase(userData);
    await Khadem.eventBus.emit('user.created', user);
  }

  Future<void> updateUser(int userId, Map<String, dynamic> updates) async {
    final user = await _updateUserInDatabase(userId, updates);
    await Khadem.eventBus.emit('user.updated', user);
  }
}

class EmailService {
  EmailService() {
    // Subscribe to user events
    Khadem.eventBus.on('user.created', _sendWelcomeEmail);
    Khadem.eventBus.on('user.updated', _sendUpdateNotification);
  }

  Future<void> _sendWelcomeEmail(dynamic user) async {
    await sendEmail(user['email'], 'Welcome!', 'Welcome to our platform');
  }

  Future<void> _sendUpdateNotification(dynamic user) async {
    await sendEmail(user['email'], 'Profile Updated', 'Your profile has been updated');
  }
}

class AnalyticsService {
  AnalyticsService() {
    Khadem.eventBus.on('user.created', _trackRegistration);
    Khadem.eventBus.on('user.updated', _trackProfileUpdate);
  }

  Future<void> _trackRegistration(dynamic user) async {
    await trackEvent('user_registration', {'user_id': user['id']});
  }

  Future<void> _trackProfileUpdate(dynamic user) async {
    await trackEvent('profile_update', {'user_id': user['id']});
  }
}

// Usage
final userService = UserService();
final emailService = EmailService(); // Automatically subscribes
final analyticsService = AnalyticsService(); // Automatically subscribes

await userService.createUser(userData); // Triggers both services`

const middlewarePatternCode = `// Event middleware for cross-cutting concerns
class EventMiddleware {
  static Future<void> loggingMiddleware(String event, dynamic payload) async {
    Khadem.logger.info('Event emitted: \$event', extra: {'payload': payload});
    await Khadem.eventBus.emit(event, payload);
    Khadem.logger.info('Event completed: \$event');
  }

  static Future<void> errorHandlingMiddleware(String event, dynamic payload) async {
    try {
      await Khadem.eventBus.emit(event, payload);
    } catch (e, stackTrace) {
      Khadem.logger.error('Event failed: \$event', error: e, stackTrace: stackTrace);
      await Khadem.eventBus.emit('event.error', {
        'event': event,
        'payload': payload,
        'error': e.toString(),
        'timestamp': DateTime.now(),
      });
    }
  }

  static Future<void> performanceMiddleware(String event, dynamic payload) async {
    final start = DateTime.now();
    await Khadem.eventBus.emit(event, payload);
    final duration = DateTime.now().difference(start);

    if (duration > Duration(milliseconds: 100)) {
      Khadem.logger.warn('Slow event: \$event took \${duration.inMilliseconds}ms');
    }
  }
}

// Usage with middleware
Future<void> emitWithMiddleware(String event, dynamic payload) async {
  await EventMiddleware.loggingMiddleware(event, payload);
  await EventMiddleware.errorHandlingMiddleware(event, payload);
  await EventMiddleware.performanceMiddleware(event, payload);
}

// Or create a middleware pipeline
class EventPipeline {
  final List<Future<void> Function(String, dynamic)> _middlewares = [];

  void addMiddleware(Future<void> Function(String, dynamic) middleware) {
    _middlewares.add(middleware);
  }

  Future<void> emit(String event, dynamic payload) async {
    for (final middleware in _middlewares) {
      await middleware(event, payload);
    }
  }
}`

const eventSourcingCode = `// Event sourcing pattern
class EventStore {
  final List<Map<String, dynamic>> _events = [];

  Future<void> saveEvent(String eventType, dynamic payload) async {
    final event = {
      'id': Uuid().v4(),
      'type': eventType,
      'payload': payload,
      'timestamp': DateTime.now(),
      'version': _events.length + 1,
    };

    _events.add(event);
    await Khadem.eventBus.emit('event.stored', event);
  }

  List<Map<String, dynamic>> getEventsForAggregate(String aggregateId) {
    return _events.where((event) =>
      event['payload']['aggregateId'] == aggregateId
    ).toList();
  }

  Future<void> replayEvents() async {
    for (final event in _events) {
      await Khadem.eventBus.emit(event['type'], event['payload']);
    }
  }
}

// Event-sourced aggregate
class UserAggregate {
  final String id;
  String name;
  String email;
  bool emailVerified = false;

  UserAggregate(this.id, this.name, this.email);

  Future<void> updateName(String newName) async {
    await Khadem.eventBus.emit('user.name_updated', {
      'aggregateId': id,
      'oldName': name,
      'newName': newName,
      'timestamp': DateTime.now(),
    });
    name = newName;
  }

  Future<void> verifyEmail() async {
    await Khadem.eventBus.emit('user.email_verified', {
      'aggregateId': id,
      'email': email,
      'timestamp': DateTime.now(),
    });
    emailVerified = true;
  }
}

// Event handlers for state reconstruction
class UserEventHandlers {
  final Map<String, UserAggregate> _users = {};

  UserEventHandlers() {
    Khadem.eventBus.on('user.name_updated', _onNameUpdated);
    Khadem.eventBus.on('user.email_verified', _onEmailVerified);
  }

  Future<void> _onNameUpdated(dynamic event) async {
    final user = _users[event['aggregateId']];
    if (user != null) {
      user.name = event['newName'];
    }
  }

  Future<void> _onEmailVerified(dynamic event) async {
    final user = _users[event['aggregateId']];
    if (user != null) {
      user.emailVerified = true;
    }
  }

  UserAggregate? getUser(String id) => _users[id];
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
