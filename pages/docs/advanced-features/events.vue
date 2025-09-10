<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Listeners
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to use the event system for decoupling your application logic
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic Events -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Events
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Events allow you to decouple various parts of your application.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Events
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/events/user_registered.dart
class UserRegistered {
  final User user;
  final DateTime registeredAt;

  UserRegistered(this.user) : registeredAt = DateTime.now();
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Dispatching Events
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/auth_controller.dart
import 'package:khadem/src/core/events/event.dart';
import '../events/user_registered.dart';

class AuthController extends Controller {
  Future&lt;Response&gt; register(Request request) async {
    // ... validation and user creation ...

    final user = User(
      name: request.input('name'),
      email: request.input('email'),
      password: Hash.make(request.input('password')),
    );

    await user.save();

    // Dispatch event
    Event.dispatch(UserRegistered(user));

    return redirect('/dashboard');
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Listening to Events
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/listeners/send_welcome_email.dart
import 'package:khadem/src/core/events/listener.dart';
import '../events/user_registered.dart';
import '../mail/welcome_email.dart';

class SendWelcomeEmail implements Listener&lt;UserRegistered&gt; {
  @override
  Future&lt;void&gt; handle(UserRegistered event) async {
    final user = event.user;

    // Send welcome email
    await Mail.to(user.email).send(WelcomeEmail(user));

    // Log the event
    logger.info('Welcome email sent to \${user.email}');
  }
}

// Register listener
// app/providers/event_service_provider.dart
import 'package:khadem/src/core/events/event.dart';
import '../listeners/send_welcome_email.dart';

class EventServiceProvider extends ServiceProvider {
  @override
  void boot() {
    Event.listen(UserRegistered, SendWelcomeEmail());
  }
}</code></pre>
            </div>
          </div>

          <!-- Event Subscribers -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Event Subscribers
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Subscribers allow you to group multiple event listeners in one class.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Subscribers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/subscribers/user_event_subscriber.dart
import 'package:khadem/src/core/events/subscriber.dart';
import '../events/user_registered.dart';
import '../events/user_logged_in.dart';
import '../events/user_updated.dart';

class UserEventSubscriber extends Subscriber {
  @override
  Map&lt;Type, Function&gt; get listeners =&gt; {
    UserRegistered: handleUserRegistered,
    UserLoggedIn: handleUserLoggedIn,
    UserUpdated: handleUserUpdated,
  };

  Future&lt;void&gt; handleUserRegistered(UserRegistered event) async {
    // Send welcome email
    await Mail.to(event.user.email).send(WelcomeEmail(event.user));

    // Create user profile
    await Profile.create({'user_id': event.user.id});
  }

  Future&lt;void&gt; handleUserLoggedIn(UserLoggedIn event) async {
    // Update last login
    event.user.lastLoginAt = DateTime.now();
    await event.user.save();

    // Log activity
    await ActivityLog.create({
      'user_id': event.user.id,
      'action': 'login',
      'ip_address': request.ip(),
    });
  }

  Future&lt;void&gt; handleUserUpdated(UserUpdated event) async {
    // Clear user cache
    Cache.forget('user:\${event.user.id}');

    // Log the update
    logger.info('User \${event.user.id} was updated');
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Registering Subscribers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/event_service_provider.dart
import 'package:khadem/src/core/events/event.dart';
import '../subscribers/user_event_subscriber.dart';

class EventServiceProvider extends ServiceProvider {
  @override
  void boot() {
    // Register subscriber
    Event.subscribe(UserEventSubscriber());
  }
}</code></pre>
            </div>
          </div>

          <!-- Queued Events -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Queued Events
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Process events asynchronously using the queue system.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Queued Listeners
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/listeners/send_notification.dart
import 'package:khadem/src/core/events/queued_listener.dart';
import '../events/order_placed.dart';

class SendNotification extends QueuedListener&lt;OrderPlaced&gt; {
  @override
  Future&lt;void&gt; handle(OrderPlaced event) async {
    // This will be processed in the background
    await NotificationService.send(
      event.user.email,
      'Order Confirmation',
      'Your order #\${event.order.id} has been placed'
    );
  }

  @override
  String get queue =&gt; 'notifications'; // Optional: specify queue name

  @override
  int get delay =&gt; 60; // Optional: delay in seconds
}

// Register queued listener
// app/providers/event_service_provider.dart
class EventServiceProvider extends ServiceProvider {
  @override
  void boot() {
    Event.listen(OrderPlaced, SendNotification());
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Conditional Queuing
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/listeners/process_payment.dart
class ProcessPayment extends Listener&lt;OrderPlaced&gt; {
  @override
  Future&lt;void&gt; handle(OrderPlaced event) async {
    if (event.order.total &gt; 1000) {
      // Process high-value orders immediately
      await PaymentService.process(event.order);
    } else {
      // Queue low-value orders
      Queue.dispatch(
        ProcessPaymentJob(event.order),
        delay: Duration(minutes: 5)
      );
    }
  }
}</code></pre>
            </div>
          </div>

          <!-- Event Discovery -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Event Discovery
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Automatically discover and register events and listeners.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Directory Structure
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>app/
├── events/
│   ├── user_registered.dart
│   ├── order_placed.dart
│   └── payment_processed.dart
├── listeners/
│   ├── send_welcome_email.dart
│   ├── process_payment.dart
│   └── update_inventory.dart
└── subscribers/
    └── user_event_subscriber.dart</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Auto Discovery
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/event_service_provider.dart
import 'package:khadem/src/core/events/event.dart';

class EventServiceProvider extends ServiceProvider {
  @override
  void boot() {
    // Auto-discover events and listeners
    Event.discover([
      'app/events',
      'app/listeners',
      'app/subscribers',
    ]);
  }
}</code></pre>
            </div>
          </div>

          <!-- Broadcasting Events -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Broadcasting Events
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Broadcast events to WebSocket clients or external services.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Broadcastable Events
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/events/message_sent.dart
import 'package:khadem/src/core/events/broadcastable.dart';

class MessageSent implements Broadcastable {
  final Message message;
  final User sender;

  MessageSent(this.message, this.sender);

  @override
  String get broadcastOn =&gt; 'chat.\${message.roomId}';

  @override
  Map&lt;String, dynamic&gt; get broadcastData =&gt; {
    'message': message.toJson(),
    'sender': sender.name,
    'timestamp': DateTime.now().toIso8601String(),
  };

  @override
  List&lt;int&gt;? get broadcastTo =&gt; null; // Broadcast to all in channel
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Broadcasting Setup
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/broadcast_service_provider.dart
import 'package:khadem/src/core/broadcasting/broadcast_manager.dart';

class BroadcastServiceProvider extends ServiceProvider {
  @override
  void register() {
    app.singleton(BroadcastManager, () {
      return BroadcastManager()
        ..driver('redis') // or 'pusher', 'ably', etc.
        ..routes([
          'chat.*' =&gt; AuthenticatedChannel(),
        ]);
    });
  }
}

// Broadcasting an event
Event.dispatch(MessageSent(message, user));</code></pre>
            </div>
          </div>

          <!-- Event Testing -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing Events
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your events and listeners to ensure they work correctly.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// tests/unit/events/user_registered_test.dart
import 'package:test/test.dart';
import 'package:khadem/src/core/events/event.dart';
import 'package:khadem/src/testing/fakes/event_fake.dart';
import '../../app/events/user_registered.dart';
import '../../app/listeners/send_welcome_email.dart';

void main() {
  group('UserRegistered Event', () {
    test('dispatches welcome email', () async {
      // Fake the event system
      Event.fake();

      final user = User(name: 'John', email: 'john@example.com');
      final event = UserRegistered(user);

      // Dispatch the event
      await Event.dispatch(event);

      // Assert that the listener was called
      Event.assertDispatched(UserRegistered, (event) {
        return event.user.email == 'john@example.com';
      });

      // Assert that the welcome email was sent
      // (This would depend on your mail testing setup)
    });

    test('listener handles event correctly', () async {
      final listener = SendWelcomeEmail();
      final user = User(name: 'Jane', email: 'jane@example.com');
      final event = UserRegistered(user);

      // Mock the mail service
      Mail.fake();

      await listener.handle(event);

      // Assert that mail was sent
      Mail.assertSent(WelcomeEmail, (mail) {
        return mail.user.email == 'jane@example.com';
      });
    });
  });
}</code></pre>
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
