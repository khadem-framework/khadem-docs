<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Event System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Build decoupled, maintainable applications with Khadem's powerful event-driven architecture. The event system enables components to communicate without tight coupling, using a publish-subscribe pattern with advanced features like priorities, groups, and subscriber management.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Pub-Sub Pattern</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Priority-Based</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Async Execution</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Event Groups</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Type-Safe</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Introduction</h2>
      
      <div class="prose dark:prose-invert max-w-none">
        <p>
          The event system in Khadem provides a robust mechanism for implementing the Observer pattern in your applications. 
          It allows different parts of your application to communicate without knowing about each other, promoting loose coupling 
          and better separation of concerns.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Key Features</h3>
        <ul class="space-y-2">
          <li><strong>Priority-Based Execution:</strong> Control the order in which listeners execute using four priority levels (low, normal, high, critical)</li>
          <li><strong>Async Support:</strong> Execute listeners asynchronously with the <code>queue</code> parameter for non-blocking operations</li>
          <li><strong>Event Groups:</strong> Organize related events and emit them together for batch operations</li>
          <li><strong>Subscriber Pattern:</strong> Group related event handlers in classes for better organization and automatic cleanup</li>
          <li><strong>One-Time Listeners:</strong> Register listeners that automatically remove themselves after first execution</li>
          <li><strong>Error Isolation:</strong> Errors in one listener don't affect other listeners - each executes independently</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Basic Usage</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          At its core, the event system uses a simple publish-subscribe pattern. You register listeners using <code>on()</code> 
          and trigger them using <code>emit()</code>. All events are accessed through the global <code>Khadem.eventBus</code> instance.
        </p>
      </div>

      <CodeBlock
        :code="basicUsageCode"
        language="dart"
        title="Registering and Emitting Events"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Event Naming Conventions</h4>
        <div class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <p>Use dot notation to namespace your events by domain or feature:</p>
          <ul class="list-disc list-inside space-y-1 ml-4">
            <li><code>user.created</code>, <code>user.updated</code>, <code>user.deleted</code> - User lifecycle events</li>
            <li><code>order.placed</code>, <code>order.confirmed</code>, <code>order.shipped</code> - Order workflow events</li>
            <li><code>auth.login</code>, <code>auth.logout</code>, <code>auth.failed</code> - Authentication events</li>
          </ul>
          <p class="mt-2">This convention makes events easier to understand, organize, and filter.</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Priority-Based Execution</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          When multiple listeners are registered for the same event, you can control their execution order using priorities. 
          Listeners with higher priority execute first, ensuring critical operations complete before less important ones. 
          This is particularly useful for security logging, validation, or cleanup operations that must happen in a specific order.
        </p>
      </div>

      <CodeBlock
        :code="priorityUsageCode"
        language="dart"
        title="Using Priority Levels"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Understanding Priority Levels</h4>
        <div class="text-sm text-green-700 dark:text-green-300 space-y-3">
          <div>
            <strong>🔴 EventPriority.critical (1000):</strong>
            <p class="ml-4 mt-1">Reserved for security, audit logging, and critical monitoring. These listeners execute first and should never fail.</p>
          </div>
          <div>
            <strong>🟠 EventPriority.high (750):</strong>
            <p class="ml-4 mt-1">Core business logic that must execute before side effects. Examples: inventory updates, payment processing, data validation.</p>
          </div>
          <div>
            <strong>🟡 EventPriority.normal (500) - Default:</strong>
            <p class="ml-4 mt-1">Standard application logic like sending notifications, updating caches, or triggering related workflows.</p>
          </div>
          <div>
            <strong>🟢 EventPriority.low (250):</strong>
            <p class="ml-4 mt-1">Non-critical operations like analytics tracking, cleanup tasks, or logging that won't affect user experience if delayed.</p>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Priorities only control execution order, not whether a listener executes</li>
          <li>• All listeners of the same priority execute in registration order (undefined which goes first)</li>
          <li>• Don't rely on priorities for critical business logic dependencies - use explicit sequencing instead</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">One-Time Listeners</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Sometimes you need a listener to execute only once and then automatically remove itself. This is perfect for 
          initialization tasks, one-time setup operations, or responding to events that should only trigger an action the first time they occur.
          The <code>once()</code> method is a convenience wrapper that registers a listener with the <code>once: true</code> flag.
        </p>
      </div>

      <CodeBlock
        :code="onceUsageCode"
        language="dart"
        title="Self-Removing Listeners"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Common Use Cases</h4>
        <div class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
          <ul class="list-disc list-inside space-y-1 ml-2">
            <li><strong>Application Initialization:</strong> Run setup code when the app first starts</li>
            <li><strong>Database Migrations:</strong> Execute migration logic only once per version</li>
            <li><strong>Cache Warming:</strong> Warm up caches on first request only</li>
            <li><strong>Feature Introductions:</strong> Show a welcome message or tutorial on first use</li>
            <li><strong>Resource Cleanup:</strong> Clean up resources the first time they're no longer needed</li>
          </ul>
          <p class="mt-3">
            <strong>💡 Pro Tip:</strong> One-time listeners work with priorities too! You can create a critical one-time listener 
            that executes before other listeners but only once: <code>once('event', handler, priority: EventPriority.critical)</code>
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Groups</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Event groups allow you to organize related events under a common name and trigger them all at once. This is useful 
          when you have multiple events that represent different aspects of the same operation or lifecycle. Instead of emitting 
          each event individually, you can emit the entire group with a single call to <code>emitGroup()</code>.
        </p>
        <p class="mt-2">
          Groups are particularly powerful for domain-driven design, where you can group all events related to a specific 
          aggregate or entity (like all user-related events, or all order workflow events).
        </p>
      </div>

      <CodeBlock
        :code="groupUsageCode"
        language="dart"
        title="Organizing Events with Groups"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 mt-4">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">When to Use Groups</h4>
        <div class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
          <ul class="list-disc list-inside space-y-1 ml-2">
            <li><strong>Lifecycle Events:</strong> Group all events for an entity's lifecycle (created, updated, deleted)</li>
            <li><strong>Workflow Stages:</strong> Group events representing different stages of a process</li>
            <li><strong>Feature Toggles:</strong> Enable/disable entire feature sets by managing groups</li>
            <li><strong>Batch Notifications:</strong> Send multiple related notifications at once</li>
            <li><strong>Audit Logging:</strong> Log all events in a category together</li>
          </ul>
          <p class="mt-3">
            <strong>📝 Note:</strong> Events can belong to multiple groups. The same event can be in both 'user.lifecycle' 
            and 'audit.all' groups, giving you flexible organization options.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Asynchronous Execution</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          By default, event listeners execute synchronously in priority order - each listener completes before the next one starts. 
          While listeners can be async functions, they still execute sequentially. This ensures predictable behavior but can be slow 
          when listeners perform I/O operations.
        </p>
        <p class="mt-2">
          Setting <code>queue: true</code> changes this behavior. All listeners execute concurrently in separate futures, and the 
          emit call waits for all of them to complete using <code>Future.wait()</code>. This dramatically improves performance 
          when listeners perform independent operations like sending emails, calling APIs, or updating multiple databases.
        </p>
      </div>

      <CodeBlock
        :code="asyncUsageCode"
        language="dart"
        title="Concurrent vs Sequential Execution"
      />

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800 mt-4">
        <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">Synchronous vs Asynchronous</h4>
        <div class="text-sm text-teal-700 dark:text-teal-300 space-y-3">
          <div>
            <strong>Synchronous (queue: false - default):</strong>
            <ul class="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Listeners execute in priority order, one after another</li>
              <li>Predictable execution sequence</li>
              <li>Good for operations that depend on each other</li>
              <li>Slower when listeners perform I/O operations</li>
            </ul>
          </div>
          <div>
            <strong>Asynchronous (queue: true):</strong>
            <ul class="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>All listeners start concurrently in separate futures</li>
              <li>Much faster for I/O-bound operations</li>
              <li>Perfect when listeners are independent</li>
              <li>Priority order still determines start time, but execution overlaps</li>
              <li>The emit call waits for ALL listeners to complete</li>
            </ul>
          </div>
          <p class="mt-3">
            <strong>⚡ Performance Tip:</strong> If you have 3 listeners that each take 1 second, synchronous execution takes 3 seconds, 
            but asynchronous execution takes only ~1 second (assuming they're independent operations).
          </p>
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800 mt-4">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">⚠️ When NOT to Use queue: true</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1 ml-2">
          <li>• When listeners must execute in a specific order and depend on each other</li>
          <li>• When later listeners need results from earlier ones</li>
          <li>• For CPU-bound operations (won't gain performance benefits)</li>
          <li>• When you need to guarantee that listener A completes before listener B starts</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Event Subscribers</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          When you have multiple related event handlers, scattering them across your codebase with individual <code>on()</code> calls 
          can become messy and hard to maintain. Event subscribers solve this by letting you group all related handlers in a single class 
          that implements the <code>EventSubscriberInterface</code>.
        </p>
        <p class="mt-2">
          Subscribers are particularly powerful because they enable automatic cleanup. When you call <code>offSubscriber()</code>, 
          all listeners registered by that subscriber are removed at once. This prevents memory leaks and makes component lifecycle 
          management much simpler.
        </p>
      </div>

      <CodeBlock
        :code="subscriberUsageCode"
        language="dart"
        title="Organizing Handlers with Subscribers"
      />

      <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800 mt-4">
        <h4 class="font-medium text-pink-800 dark:text-pink-200 mb-2">Why Use Subscribers?</h4>
        <div class="text-sm text-pink-700 dark:text-pink-300 space-y-3">
          <div>
            <strong>🎯 Better Organization:</strong>
            <p class="ml-4 mt-1">All event handlers for a feature or domain are in one place, making code easier to find and maintain.</p>
          </div>
          <div>
            <strong>🧹 Automatic Cleanup:</strong>
            <p class="ml-4 mt-1">One call to <code>offSubscriber(subscriber)</code> removes all listeners registered by that subscriber, preventing memory leaks.</p>
          </div>
          <div>
            <strong>🧪 Easier Testing:</strong>
            <p class="ml-4 mt-1">You can test the entire subscriber class in isolation, and each handler method can be tested individually.</p>
          </div>
          <div>
            <strong>📦 Encapsulation:</strong>
            <p class="ml-4 mt-1">Private handler methods keep implementation details hidden while the public interface remains clean.</p>
          </div>
          <div>
            <strong>⚙️ Flexible Configuration:</strong>
            <p class="ml-4 mt-1">Each handler in the subscriber can have its own priority and once flag, giving you fine-grained control.</p>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Subscriber Best Practices</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1 ml-2">
          <li>• Create one subscriber per domain or feature (e.g., UserEventSubscriber, OrderEventSubscriber)</li>
          <li>• Keep handlers focused - each should do one thing well</li>
          <li>• Use dependency injection to pass services into the subscriber constructor</li>
          <li>• Always clean up subscribers in your application's shutdown logic</li>
          <li>• Consider using the <code>subscriber</code> parameter even with manual <code>on()</code> calls for consistency</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Listener Management</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Properly managing listeners is crucial to prevent memory leaks and ensure your application stays performant. 
          The event system provides several methods to remove listeners at different granularities - from removing a specific 
          listener function to clearing the entire event system.
        </p>
      </div>

      <CodeBlock
        :code="managementUsageCode"
        language="dart"
        title="Removing Listeners"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 class="font-medium mb-3">Available Management Methods</h4>
        <div class="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <code class="text-blue-600 dark:text-blue-400">off(event, listener)</code>
            <p class="ml-4 mt-1">Removes a specific listener function from an event. Requires the exact function reference, so avoid anonymous functions if you need to remove them later.</p>
          </div>
          <div>
            <code class="text-blue-600 dark:text-blue-400">offEvent(event)</code>
            <p class="ml-4 mt-1">Removes ALL listeners for a specific event, and removes that event from all groups and subscriber tracking. Use when you want to completely disable an event.</p>
          </div>
          <div>
            <code class="text-blue-600 dark:text-blue-400">offSubscriber(subscriber)</code>
            <p class="ml-4 mt-1">Removes all listeners registered by a specific subscriber object. This is the recommended cleanup method when using the subscriber pattern.</p>
          </div>
          <div>
            <code class="text-blue-600 dark:text-blue-400">clear()</code>
            <p class="ml-4 mt-1">Nuclear option: removes ALL listeners, groups, and subscriber tracking. Use with extreme caution - typically only in tests or complete application resets.</p>
          </div>
          <div>
            <code class="text-blue-600 dark:text-blue-400">hasListeners(event)</code>
            <p class="ml-4 mt-1">Check if an event has any registered listeners before emitting (useful for performance optimization).</p>
          </div>
          <div>
            <code class="text-blue-600 dark:text-blue-400">listenerCount(event)</code>
            <p class="ml-4 mt-1">Get the number of listeners for an event (useful for debugging and monitoring).</p>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">🔒 Memory Leak Prevention</h4>
        <div class="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
          <p><strong>Common mistake:</strong> Registering event listeners in long-lived objects (like services or singletons) without ever removing them.</p>
          <p><strong>Solution strategies:</strong></p>
          <ul class="list-disc list-inside ml-2 space-y-1">
            <li>Use the <code>subscriber</code> parameter when calling <code>on()</code> to track listener ownership</li>
            <li>Always call <code>offSubscriber(this)</code> in dispose/cleanup methods</li>
            <li>Store function references if you need to remove them later (avoid anonymous functions)</li>
            <li>Use one-time listeners with <code>once()</code> when appropriate to avoid manual cleanup</li>
            <li>Periodically audit listener counts in production using <code>listenerCount()</code></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          A critical design principle of the event system is <strong>error isolation</strong>: if one listener throws an error, 
          it should not prevent other listeners from executing. The event system catches errors in each listener and logs them 
          (when queue: true), but you should still implement proper error handling in your listeners.
        </p>
        <p class="mt-2">
          When <code>queue: false</code> (the default), errors are silently caught to prevent disrupting subsequent listeners. 
          When <code>queue: true</code>, errors are caught and logged via <code>Khadem.logger.error()</code>. Always wrap your 
          listener code in try-catch blocks for explicit error handling.
        </p>
      </div>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Robust Error Handling Patterns"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mt-4">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Error Handling Strategy</h4>
        <div class="text-sm text-red-700 dark:text-red-300 space-y-3">
          <div>
            <strong>1. Always Catch Errors in Listeners:</strong>
            <p class="ml-4 mt-1">Don't rely on the event system's error catching. Wrap your logic in try-catch for explicit control over error handling.</p>
          </div>
          <div>
            <strong>2. Log Errors, Don't Rethrow:</strong>
            <p class="ml-4 mt-1">Rethrowing errors can break other listeners. Log the error and handle it gracefully instead.</p>
          </div>
          <div>
            <strong>3. Use Error Events:</strong>
            <p class="ml-4 mt-1">Emit error-specific events (like 'user.creation.failed') to centralize error handling and enable error recovery mechanisms.</p>
          </div>
          <div>
            <strong>4. Specific Exception Types:</strong>
            <p class="ml-4 mt-1">Catch specific exception types with <code>on ExceptionType catch (e)</code> for targeted error handling.</p>
          </div>
          <div>
            <strong>5. Include Context:</strong>
            <p class="ml-4 mt-1">When logging errors, include the event name, payload data, and any relevant context to aid debugging.</p>
          </div>
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800 mt-4">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">⚠️ Error Event Pattern</h4>
        <p class="text-sm text-orange-700 dark:text-orange-300 mb-2">
          Creating error events for failed operations enables powerful error recovery patterns:
        </p>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1 ml-2">
          <li>• <strong>Centralized Error Logging:</strong> One listener handles all error events for comprehensive logging</li>
          <li>• <strong>Retry Mechanisms:</strong> Error listeners can implement retry logic for transient failures</li>
          <li>• <strong>User Notifications:</strong> Automatically notify users or admins when critical operations fail</li>
          <li>• <strong>Cleanup Operations:</strong> Remove partial data or rollback changes when operations fail partway through</li>
          <li>• <strong>Circuit Breakers:</strong> Track failure rates and temporarily disable problematic operations</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Following these best practices will help you build maintainable, performant event-driven applications. These guidelines 
          are based on common patterns and pitfalls discovered through production use.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-3">✅ Recommended Practices</h4>
          <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <div>
              <strong>• Use Namespaced Event Names</strong>
              <p class="ml-4 text-xs mt-1">Follow dot notation: <code>domain.action</code> (e.g., <code>user.created</code>, <code>order.shipped</code>)</p>
            </div>
            <div>
              <strong>• Always Handle Errors</strong>
              <p class="ml-4 text-xs mt-1">Wrap listener logic in try-catch blocks and log errors appropriately</p>
            </div>
            <div>
              <strong>• Set Appropriate Priorities</strong>
              <p class="ml-4 text-xs mt-1">Use critical for security/audit, high for business logic, normal for notifications, low for analytics</p>
            </div>
            <div>
              <strong>• Clean Up Listeners</strong>
              <p class="ml-4 text-xs mt-1">Remove listeners in dispose methods using <code>offSubscriber()</code> or <code>off()</code></p>
            </div>
            <div>
              <strong>• Use Subscribers for Organization</strong>
              <p class="ml-4 text-xs mt-1">Group related handlers in subscriber classes for better maintainability</p>
            </div>
            <div>
              <strong>• Document Event Contracts</strong>
              <p class="ml-4 text-xs mt-1">Document expected payload structure for each event type</p>
            </div>
            <div>
              <strong>• Use queue: true for I/O</strong>
              <p class="ml-4 text-xs mt-1">Enable async execution for database, API, or file operations</p>
            </div>
            <div>
              <strong>• Test Event Flows</strong>
              <p class="ml-4 text-xs mt-1">Write tests that verify listeners execute and emit calls trigger expected behavior</p>
            </div>
          </div>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-3">❌ Common Pitfalls</h4>
          <div class="text-sm text-red-700 dark:text-red-300 space-y-2">
            <div>
              <strong>• Heavy Sync Operations</strong>
              <p class="ml-4 text-xs mt-1">Don't perform expensive computations in synchronous listeners - use queue: true</p>
            </div>
            <div>
              <strong>• Assuming Execution Order</strong>
              <p class="ml-4 text-xs mt-1">Don't rely on order except for priorities; listeners of same priority may run in any order</p>
            </div>
            <div>
              <strong>• Forgetting Cleanup</strong>
              <p class="ml-4 text-xs mt-1">Always remove listeners to prevent memory leaks, especially in services and widgets</p>
            </div>
            <div>
              <strong>• Using Events for Direct Calls</strong>
              <p class="ml-4 text-xs mt-1">Don't use events when a simple method call would work - events add overhead</p>
            </div>
            <div>
              <strong>• Circular Event Emissions</strong>
              <p class="ml-4 text-xs mt-1">Avoid emitting events within listeners that could trigger the same listener again</p>
            </div>
            <div>
              <strong>• Ignoring Errors</strong>
              <p class="ml-4 text-xs mt-1">Never let errors fail silently - always log them with context</p>
            </div>
            <div>
              <strong>• Anonymous Functions</strong>
              <p class="ml-4 text-xs mt-1">Avoid anonymous functions if you need to remove listeners later - store references</p>
            </div>
            <div>
              <strong>• Blocking Operations</strong>
              <p class="ml-4 text-xs mt-1">Don't use synchronous blocking code - always use async/await for I/O</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 When to Use Events vs Direct Calls</h4>
        <div class="text-sm text-blue-700 dark:text-blue-300">
          <p class="mb-2"><strong>Use Events When:</strong></p>
          <ul class="list-disc list-inside ml-2 space-y-1">
            <li>Multiple components need to react to the same action</li>
            <li>You want to decouple components (sender doesn't know about receivers)</li>
            <li>The number of reactions may change over time</li>
            <li>You need to enable/disable reactions dynamically</li>
          </ul>
          <p class="mt-3 mb-2"><strong>Use Direct Method Calls When:</strong></p>
          <ul class="list-disc list-inside ml-2 space-y-1">
            <li>You need a return value from the operation</li>
            <li>The operation must complete before continuing</li>
            <li>There's only one receiver and it won't change</li>
            <li>The caller needs to handle errors from the receiver</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Patterns</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          These advanced patterns demonstrate how to leverage the event system for sophisticated architectural approaches. 
          Each pattern solves specific problems and can be combined for maximum effectiveness.
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-2">🏛️ Domain Events Pattern</h3>
          <p class="text-sm text-purple-800 dark:text-purple-300 mb-3">
            Organize events by business domain using constant classes. This provides type safety, discoverability through IDE autocomplete, 
            and prevents typos in event names. Perfect for domain-driven design where events represent significant business occurrences.
          </p>
          <CodeBlock
            :code="domainPatternCode"
            language="dart"
            title="Domain-Driven Event Organization"
          />
          <div class="mt-3 text-sm text-purple-700 dark:text-purple-300">
            <strong>Benefits:</strong> Refactoring support, IDE autocomplete, documentation, preventing typos, clear domain boundaries
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">👁️ Observer Pattern</h3>
          <p class="text-sm text-blue-800 dark:text-blue-300 mb-3">
            Implement the classic Observer pattern where services register themselves as observers of domain entities. 
            Services react to entity changes without the entity knowing about the services. This achieves true decoupling - 
            you can add new observers without modifying existing code.
          </p>
          <CodeBlock
            :code="observerPatternCode"
            language="dart"
            title="Decoupled Service Architecture"
          />
          <div class="mt-3 text-sm text-blue-700 dark:text-blue-300">
            <strong>Use Case:</strong> Perfect when multiple services need to react to the same domain events (emails, analytics, notifications, etc.)
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">🔧 Event Middleware Pattern</h3>
          <p class="text-sm text-green-800 dark:text-green-300 mb-3">
            Add cross-cutting concerns like logging, error handling, performance monitoring, or security checks that apply to all or many events. 
            Middleware wraps event emission to add behavior without modifying individual listeners. You can chain multiple middlewares to create 
            a processing pipeline.
          </p>
          <CodeBlock
            :code="middlewarePatternCode"
            language="dart"
            title="Cross-Cutting Concerns with Middleware"
          />
          <div class="mt-3 text-sm text-green-700 dark:text-green-300">
            <strong>Common Uses:</strong> Logging, performance tracking, error recovery, authentication checks, rate limiting, audit trails
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-2">📜 Event Sourcing Pattern</h3>
          <p class="text-sm text-orange-800 dark:text-orange-300 mb-3">
            Store every state change as an immutable event instead of storing just current state. This creates a complete audit trail, 
            enables time travel debugging, and allows you to reconstruct any past state by replaying events. The EventStore saves all events, 
            and you can rebuild aggregate state by replaying their events in order.
          </p>
          <CodeBlock
            :code="eventSourcingCode"
            language="dart"
            title="Event Sourcing for State Management"
          />
          <div class="mt-3 text-sm text-orange-700 dark:text-orange-300">
            <strong>Benefits:</strong> Complete audit trail, time travel debugging, state reconstruction, event replay for testing, compliance support
          </div>
        </div>
      </div>

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 mt-6">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">🎯 Choosing the Right Pattern</h4>
        <div class="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
          <p><strong>Start with Domain Events</strong> if you're building a complex application with clear domain boundaries.</p>
          <p><strong>Use Observer Pattern</strong> when you have multiple services that need to react to the same domain events.</p>
          <p><strong>Add Middleware</strong> when you find yourself duplicating cross-cutting logic across listeners.</p>
          <p><strong>Adopt Event Sourcing</strong> when you need comprehensive audit trails, time travel, or complex state reconstruction.</p>
          <p class="mt-3"><strong>💡 Pro Tip:</strong> These patterns work great together! Combine domain events + observers + middleware for a robust architecture.</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Debugging and Inspection</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          The event system provides introspection methods to help you debug event flows, identify memory leaks, and understand 
          the current state of your event system. These are particularly useful during development and troubleshooting.
        </p>
      </div>

      <CodeBlock
        :code="inspectionUsageCode"
        language="dart"
        title="Inspecting the Event System"
      />

      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800 mt-4">
        <h4 class="font-medium text-cyan-800 dark:text-cyan-200 mb-2">Available Inspection Methods</h4>
        <div class="text-sm text-cyan-700 dark:text-cyan-300 space-y-2">
          <div>
            <strong>listeners</strong> - Get all registered event listeners
            <p class="ml-4 text-xs mt-1">Returns Map&lt;String, List&lt;EventRegistration&gt;&gt; showing all events and their listeners</p>
          </div>
          <div>
            <strong>eventGroups</strong> - Get all event groups
            <p class="ml-4 text-xs mt-1">Returns Map&lt;String, Set&lt;String&gt;&gt; showing groups and their member events</p>
          </div>
          <div>
            <strong>subscriberEvents</strong> - Get subscriber event mappings
            <p class="ml-4 text-xs mt-1">Returns Map&lt;Object, Set&lt;String&gt;&gt; showing which subscribers are listening to which events</p>
          </div>
          <div>
            <strong>hasListeners(event)</strong> - Check if event has listeners
            <p class="ml-4 text-xs mt-1">Returns bool, useful for avoiding unnecessary work when emitting</p>
          </div>
          <div>
            <strong>listenerCount(event)</strong> - Count listeners for an event
            <p class="ml-4 text-xs mt-1">Returns int, useful for detecting memory leaks (ever-increasing counts)</p>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">🐛 Debugging Tips</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-2">
          <li>
            <strong>Finding Memory Leaks:</strong> Call <code>listenerCount()</code> for your events periodically. 
            If counts keep growing, you have a leak - listeners aren't being removed properly.
          </li>
          <li>
            <strong>Event Not Firing:</strong> Use <code>hasListeners(event)</code> to verify listeners are registered. 
            Check for typos in event names (domain events pattern helps prevent this).
          </li>
          <li>
            <strong>Unexpected Execution Order:</strong> Check listener priorities. Remember: listeners with the same priority 
            execute in registration order (which is undefined across multiple files).
          </li>
          <li>
            <strong>Performance Issues:</strong> Use <code>listeners</code> to see how many handlers each event has. 
            Too many listeners on frequently-emitted events can cause performance problems.
          </li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Performance Optimization</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          While the event system is designed to be performant, understanding these optimization strategies will help you build 
          faster applications, especially when dealing with high-frequency events or many listeners.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-3">⚡ Execution Performance</h4>
          <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <div>
              <strong>Use queue: true for I/O Operations</strong>
              <p class="text-xs ml-4 mt-1">Database queries, API calls, and file operations should run concurrently, not sequentially.</p>
            </div>
            <div>
              <strong>Limit Listeners Per Event</strong>
              <p class="text-xs ml-4 mt-1">More than 10-15 listeners on a single event often indicates architectural problems.</p>
            </div>
            <div>
              <strong>Check hasListeners() Before Emitting</strong>
              <p class="text-xs ml-4 mt-1">Skip emission entirely if no listeners exist: <code>if (Khadem.eventBus.hasListeners('event')) { ... }</code></p>
            </div>
            <div>
              <strong>Use Event Groups Wisely</strong>
              <p class="text-xs ml-4 mt-1">emitGroup() is great for batch operations but slower than individual emit() calls for few events.</p>
            </div>
            <div>
              <strong>Optimize Critical Path Listeners</strong>
              <p class="text-xs ml-4 mt-1">Listeners with EventPriority.critical should be extremely fast since they block all other listeners.</p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-3">💾 Memory Management</h4>
          <div class="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
            <div>
              <strong>Always Clean Up Listeners</strong>
              <p class="text-xs ml-4 mt-1">Call offSubscriber() in dispose/cleanup methods. Forgotten listeners cause memory leaks.</p>
            </div>
            <div>
              <strong>Use Subscribers for Automatic Cleanup</strong>
              <p class="text-xs ml-4 mt-1">Subscriber pattern makes cleanup easier: one call removes all related listeners.</p>
            </div>
            <div>
              <strong>Avoid Large Payloads</strong>
              <p class="text-xs ml-4 mt-1">Pass IDs or references instead of entire objects, especially for frequently-emitted events.</p>
            </div>
            <div>
              <strong>Monitor Listener Counts</strong>
              <p class="text-xs ml-4 mt-1">Use listenerCount() in monitoring tools to detect leaks early in development.</p>
            </div>
            <div>
              <strong>Be Careful with Circular References</strong>
              <p class="text-xs ml-4 mt-1">Event payloads with circular object references can prevent garbage collection.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mt-4">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">🚨 Performance Anti-Patterns</h4>
        <div class="text-sm text-red-700 dark:text-red-300 space-y-2">
          <ul class="list-disc list-inside space-y-1 ml-2">
            <li><strong>Emitting in Loops:</strong> Don't emit events inside loops. Collect data and emit once after the loop.</li>
            <li><strong>Synchronous Heavy Computation:</strong> Never perform CPU-intensive work in sync listeners - use isolates or queue: true.</li>
            <li><strong>Nested Event Emissions:</strong> Emitting events within listeners that trigger more events creates cascades and poor performance.</li>
            <li><strong>Over-Using Events:</strong> Not everything should be an event. Direct method calls are faster for simple operations.</li>
            <li><strong>Ignoring Listener Counts:</strong> Hundreds of listeners on a single event indicates poor design - refactor into groups or use different events.</li>
          </ul>
        </div>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">📊 Performance Metrics to Monitor</h4>
        <div class="text-sm text-blue-700 dark:text-blue-300">
          <ul class="list-disc list-inside space-y-1 ml-2">
            <li>Total number of registered events (from <code>listeners.length</code>)</li>
            <li>Average listeners per event (should be < 10 for most events)</li>
            <li>Number of event groups (should be manageable, < 50 typically)</li>
            <li>Subscriber count (from <code>subscriberEvents.length</code>)</li>
            <li>Memory usage trends (watch for gradual increases indicating leaks)</li>
            <li>Event emission frequency (identify hot paths for optimization)</li>
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
