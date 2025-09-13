<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Queue System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Simple and efficient background job processing with multiple drivers and monitoring capabilities.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Background Jobs</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Multiple Drivers</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Monitoring</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Delayed Jobs</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Retry Logic</span>
        <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">File Persistence</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Job Processing</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Basic Queue Usage"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Jobs are processed asynchronously without complex serialization</p>
          <p><strong>⚡ Tip:</strong> Use delayed jobs for scheduled tasks and background processing</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Creating Jobs</h2>

      <CodeBlock
        :code="jobCreationCode"
        language="dart"
        title="Creating Queue Jobs"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Job Interface</h4>
        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• <code>handle()</code> - Main job execution method</li>
          <li>• <code>displayName</code> - Human-readable job name</li>
          <li>• <code>maxRetries</code> - Maximum retry attempts</li>
          <li>• <code>toJson()</code> - Optional serialization for complex jobs</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Queue Drivers</h2>

      <div class="space-y-4">
        <div>
          <h4 class="font-medium mb-2">Memory Driver</h4>
          <CodeBlock
            :code="memoryDriverCode"
            language="dart"
            title="In-Memory Queue (Development)"
          />
        </div>

        <div>
          <h4 class="font-medium mb-2">File Driver</h4>
          <CodeBlock
            :code="fileDriverCode"
            language="dart"
            title="File-Based Persistence"
          />
        </div>

        <div>
          <h4 class="font-medium mb-2">Sync Driver</h4>
          <CodeBlock
            :code="syncDriverCode"
            language="dart"
            title="Synchronous Processing"
          />
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Driver Comparison</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-purple-200 dark:border-purple-700">
                <th class="text-left py-2">Driver</th>
                <th class="text-left py-2">Persistence</th>
                <th class="text-left py-2">Performance</th>
                <th class="text-left py-2">Use Case</th>
              </tr>
            </thead>
            <tbody class="text-purple-700 dark:text-purple-300">
              <tr class="border-b border-purple-100 dark:border-purple-800">
                <td class="py-2 font-medium">Memory</td>
                <td class="py-2">❌ None</td>
                <td class="py-2">⚡ Fastest</td>
                <td class="py-2">Development/Testing</td>
              </tr>
              <tr class="border-b border-purple-100 dark:border-purple-800">
                <td class="py-2 font-medium">File</td>
                <td class="py-2">✅ Disk</td>
                <td class="py-2">🟡 Medium</td>
                <td class="py-2">Simple persistence</td>
              </tr>
              <tr class="border-b border-purple-100 dark:border-purple-800">
                <td class="py-2 font-medium">Sync</td>
                <td class="py-2">❌ None</td>
                <td class="py-2">⚡ Immediate</td>
                <td class="py-2">Synchronous processing</td>
              </tr>
              <tr>
                <td class="py-2 font-medium">Redis</td>
                <td class="py-2">✅ Redis</td>
                <td class="py-2">🟡 Fast</td>
                <td class="py-2">Production clusters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <CodeBlock
        :code="configUsageCode"
        language="dart"
        title="Queue Configuration"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Configuration Options</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• <code>driver</code> - Queue driver (memory, file, sync, redis)</li>
          <li>• <code>file.path</code> - File path for file driver</li>
          <li>• <code>redis.connection</code> - Redis connection for redis driver</li>
          <li>• <code>worker.delay</code> - Delay between job processing</li>
          <li>• <code>worker.max_jobs</code> - Maximum jobs per worker</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Delayed Jobs</h2>

      <CodeBlock
        :code="delayedJobsCode"
        language="dart"
        title="Scheduling Jobs with Delays"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Delay Examples</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• <code>Duration(seconds: 30)</code> - 30 seconds delay</li>
          <li>• <code>Duration(minutes: 5)</code> - 5 minutes delay</li>
          <li>• <code>Duration(hours: 1)</code> - 1 hour delay</li>
          <li>• <code>Duration(days: 1)</code> - 1 day delay</li>
          <li>• <code>null</code> - Immediate processing</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Queue Workers</h2>

      <CodeBlock
        :code="workerUsageCode"
        language="dart"
        title="Starting Queue Workers"
      />

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">Worker Configuration</h4>
        <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-1">
          <li>• <code>maxJobs</code> - Maximum jobs to process before stopping</li>
          <li>• <code>delay</code> - Delay between processing jobs</li>
          <li>• <code>timeout</code> - Maximum time to run</li>
          <li>• <code>runInBackground</code> - Run worker in background</li>
          <li>• <code>onError</code> - Error callback function</li>
          <li>• <code>onJobStart/Complete/Error</code> - Job lifecycle callbacks</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Batch Processing</h2>

      <CodeBlock
        :code="batchProcessingCode"
        language="dart"
        title="Processing Multiple Jobs"
      />

      <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
        <h4 class="font-medium text-pink-800 dark:text-pink-200 mb-2">Batch Benefits</h4>
        <ul class="text-sm text-pink-700 dark:text-pink-300 space-y-1">
          <li>• Efficient bulk operations</li>
          <li>• Reduced overhead for multiple jobs</li>
          <li>• Atomic batch processing</li>
          <li>• Better resource utilization</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Monitoring and Metrics</h2>

      <CodeBlock
        :code="monitoringCode"
        language="dart"
        title="Queue Monitoring and Metrics"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Available Metrics</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• <code>total_queued</code> - Total jobs queued</li>
          <li>• <code>total_completed</code> - Jobs successfully completed</li>
          <li>• <code>total_failed</code> - Jobs that failed</li>
          <li>• <code>currently_processing</code> - Jobs currently being processed</li>
          <li>• <code>success_rate</code> - Percentage of successful jobs</li>
          <li>• <code>average_processing_time</code> - Average job processing time</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling and Retries</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Job Error Handling and Retry Logic"
      />

      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
        <h4 class="font-medium text-cyan-800 dark:text-cyan-200 mb-2">Retry Behavior</h4>
        <ul class="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
          <li>• Jobs retry automatically on failure</li>
          <li>• Configurable maximum retry attempts</li>
          <li>• Exponential backoff for retries</li>
          <li>• Failed jobs are logged but don't crash workers</li>
          <li>• File driver persists retry state across restarts</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Real-World Examples</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Email Processing</h4>
          <CodeBlock
            :code="emailExampleCode"
            language="dart"
            title="Background Email Processing"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Data Processing</h4>
          <CodeBlock
            :code="dataProcessingCode"
            language="dart"
            title="Bulk Data Processing"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Scheduled Tasks</h4>
          <CodeBlock
            :code="scheduledTasksCode"
            language="dart"
            title="Scheduled Background Tasks"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Drivers</h2>

      <CodeBlock
        :code="customDriverCode"
        language="dart"
        title="Creating Custom Queue Drivers"
      />

      <div class="bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg border border-lime-200 dark:border-lime-800">
        <h4 class="font-medium text-lime-800 dark:text-lime-200 mb-2">Driver Interface</h4>
        <ul class="text-sm text-lime-700 dark:text-lime-300 space-y-1">
          <li>• <code>push(job, delay)</code> - Add job to queue</li>
          <li>• <code>process()</code> - Process next available job</li>
          <li>• Implement proper error handling</li>
          <li>• Support delayed job execution</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use appropriate drivers for your environment (memory for dev, file/redis for prod)</li>
            <li>• Set reasonable retry limits to prevent infinite retry loops</li>
            <li>• Monitor queue metrics and set up alerts for failures</li>
            <li>• Use delayed jobs for scheduled tasks and background processing</li>
            <li>• Handle errors gracefully in job implementations</li>
            <li>• Use batch processing for bulk operations</li>
            <li>• Configure worker timeouts to prevent hanging jobs</li>
            <li>• Log important job events for debugging</li>
            <li>• Test job implementations thoroughly</li>
            <li>• Use descriptive job names and proper error messages</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't perform long-running operations without proper timeouts</li>
            <li>• Don't rely on memory driver for production (jobs lost on restart)</li>
            <li>• Don't ignore job failures - always handle errors appropriately</li>
            <li>• Don't create jobs with side effects that can't be retried safely</li>
            <li>• Don't use synchronous driver for background processing</li>
            <li>• Don't forget to start queue workers in production</li>
            <li>• Don't use very short delays that could overwhelm the system</li>
            <li>• Don't log sensitive information in job error messages</li>
            <li>• Don't create jobs that depend on external state that may change</li>
            <li>• Don't forget to monitor queue health and performance</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Performance Considerations</h2>

      <div class="space-y-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Optimization Tips</h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Memory driver is fastest but loses jobs on restart</li>
            <li>• File driver provides persistence with reasonable performance</li>
            <li>• Use appropriate worker delays to balance throughput and resource usage</li>
            <li>• Configure proper timeouts to prevent hanging jobs</li>
            <li>• Monitor memory usage with large job payloads</li>
            <li>• Consider job size limits for very large payloads</li>
          </ul>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Resource Management</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• Set reasonable worker limits to prevent resource exhaustion</li>
            <li>• Use background workers for long-running applications</li>
            <li>• Configure proper error handling to prevent worker crashes</li>
            <li>• Monitor CPU and memory usage of queue workers</li>
            <li>• Use connection pooling for database/file operations</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Queue Jobs</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Testing Queue Functionality"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Testing Strategies</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Test job execution in isolation</li>
          <li>• Mock external dependencies</li>
          <li>• Test error handling and retry logic</li>
          <li>• Test delayed job scheduling</li>
          <li>• Test batch job processing</li>
          <li>• Verify job serialization/deserialization</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Troubleshooting</h2>

      <div class="space-y-4">
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Common Issues</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li><strong>Jobs not processing:</strong> Check if workers are running and driver is configured</li>
            <li><strong>Jobs lost on restart:</strong> Use persistent driver (file/redis) instead of memory</li>
            <li><strong>High memory usage:</strong> Monitor job payload sizes and worker limits</li>
            <li><strong>Jobs timing out:</strong> Increase timeout or optimize job execution</li>
            <li><strong>Worker crashes:</strong> Add proper error handling and logging</li>
            <li><strong>Delayed jobs not executing:</strong> Check system clock and delay calculations</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 class="font-medium mb-2">Debug Commands</h4>
          <CodeBlock
            :code="debugCommandsCode"
            language="dart"
            title="Debugging Queue Issues"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Queue System',
  meta: [
    { name: 'description', content: 'Comprehensive queue system documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Initialize queue manager
final config = Config(); // Your config implementation
final queueManager = QueueManager(config);
await queueManager.init();

// Create and dispatch a simple job
class WelcomeEmailJob extends QueueJob {
  final String userEmail;
  final String userName;

  WelcomeEmailJob(this.userEmail, this.userName);

  @override
  Future<void> handle() async {
    print('Sending welcome email to \$userName at \$userEmail');
    // Send email logic here
    await Future.delayed(Duration(seconds: 1)); // Simulate work
    print('✅ Welcome email sent!');
  }

  @override
  String get displayName => 'Send Welcome Email';

  @override
  int get maxRetries => 3;
}

// Dispatch the job
final job = WelcomeEmailJob('user@example.com', 'John Doe');
await queueManager.dispatch(job);

// Start a worker to process jobs
await queueManager.startWorker(
  delay: Duration(seconds: 2),
  onJobComplete: (job, result) => print('Job completed: \${job.displayName}'),
  onJobError: (job, error, stack) => print('Job failed: \${job.displayName} - \$error'),
);`

// Job Creation
const jobCreationCode = `// Simple job class
class ProcessPaymentJob extends QueueJob {
  final String orderId;
  final double amount;

  ProcessPaymentJob(this.orderId, this.amount);

  @override
  Future<void> handle() async {
    print('Processing payment for order \$orderId: \$\$\${amount}');

    // Simulate payment processing
    await Future.delayed(Duration(seconds: 2));

    if (Random().nextBool()) {
      throw Exception('Payment gateway timeout');
    }

    print('✅ Payment processed successfully');
  }

  @override
  String get displayName => 'Process Payment';

  @override
  int get maxRetries => 5;
}

// Job with custom serialization
class SendNotificationJob extends QueueJob {
  final int userId;
  final String message;
  final NotificationType type;

  SendNotificationJob(this.userId, this.message, this.type);

  @override
  Future<void> handle() async {
    print('Sending \$type notification to user \$userId: \$message');

    // Send notification logic
    await Future.delayed(Duration(milliseconds: 500));

    print('✅ Notification sent');
  }

  @override
  String get displayName => 'Send \${type.name} Notification';

  @override
  int get maxRetries => 3;

  // Custom serialization for complex objects
  @override
  Map<String, dynamic> toJson() => {
    'userId': userId,
    'message': message,
    'type': type.name,
  };

  static SendNotificationJob fromJson(Map<String, dynamic> json) {
    return SendNotificationJob(
      json['userId'],
      json['message'],
      NotificationType.values.firstWhere((e) => e.name == json['type']),
    );
  }
}

enum NotificationType { email, sms, push }`

// Queue Drivers
const memoryDriverCode = `// Memory driver - fast but loses jobs on restart
final config = {
  'queue': {
    'driver': 'memory',
  },
};

// Usage
final queueManager = QueueManager(config);
await queueManager.init();

// Jobs are stored in memory only
await queueManager.dispatch(WelcomeEmailJob('user@example.com', 'John'));

// ⚠️  Jobs will be lost if application restarts
// ✅ Perfect for development and testing
// ✅ Fastest performance`

const fileDriverCode = `// File driver - persists jobs to disk
final config = {
  'queue': {
    'driver': 'file',
    'file': {
      'path': 'storage/queue/jobs.json',
    },
  },
};

// Usage
final queueManager = QueueManager(config);
await queueManager.init();

// Jobs are saved to file and survive restarts
await queueManager.dispatch(ImportantJob());

// File structure:
// storage/queue/jobs.json
// {
//   "jobs": [
//     {
//       "id": "123456789",
//       "type": "ImportantJob",
//       "payload": {...},
//       "scheduledAt": "2024-01-15T10:30:00.000Z",
//       "attempts": 0,
//       "maxRetries": 3
//     }
//   ]
// }`

const syncDriverCode = `// Sync driver - processes jobs immediately
final config = {
  'queue': {
    'driver': 'sync',
  },
};

// Usage
final queueManager = QueueManager(config);
await queueManager.init();

// Jobs execute immediately (no queuing)
await queueManager.dispatch(QuickJob());
// Output: Job executed immediately!

// ✅ No background processing needed
// ✅ Perfect for simple synchronous operations
// ❌ No actual queuing - jobs run in main thread`

// Configuration
const configUsageCode = `// Basic configuration
final config = {
  'queue': {
    'driver': 'memory', // memory, file, sync, redis
  },
};

// File driver configuration
final fileConfig = {
  'queue': {
    'driver': 'file',
    'file': {
      'path': 'storage/queue/jobs.json',
      'max_file_size': 5242880, // 5MB
      'max_backups': 5,
    },
  },
};

// Redis driver configuration
final redisConfig = {
  'queue': {
    'driver': 'redis',
    'redis': {
      'connection': 'default',
      'queue': 'default',
      'retry_after': 90,
    },
  },
};

// Worker configuration
final workerConfig = {
  'queue': {
    'worker': {
      'delay': 1, // seconds between jobs
      'max_jobs': 1000,
      'timeout': 3600, // 1 hour
    },
  },
};

// Initialize with configuration
final queueManager = QueueManager(config);
await queueManager.init();

// Custom driver registration
QueueFactory.registerDriver('custom', CustomQueueDriver());`

// Delayed Jobs
const delayedJobsCode = `// Immediate job execution
await queueManager.dispatch(UrgentJob());

// Delayed job execution
await queueManager.dispatch(
  ScheduledJob(),
  delay: Duration(minutes: 5),
);

// Various delay examples
final delays = [
  Duration(seconds: 30),     // 30 seconds
  Duration(minutes: 5),      // 5 minutes
  Duration(hours: 1),        // 1 hour
  Duration(days: 1),         // 1 day
  Duration(hours: 24),       // 24 hours
];

// Schedule newsletter
await queueManager.dispatch(
  SendNewsletterJob(),
  delay: Duration(hours: 9), // Send at 9 AM tomorrow
);

// Retry with backoff
class RetryWithBackoffJob extends QueueJob {
  final int attempt;

  RetryWithBackoffJob([this.attempt = 0]);

  @override
  Future<void> handle() async {
    try {
      await riskyOperation();
      print('✅ Operation succeeded on attempt \${attempt + 1}');
    } catch (e) {
      if (attempt < maxRetries) {
        // Exponential backoff: 30s, 1m, 2m, 4m, 8m...
        final delay = Duration(seconds: 30 * (1 << attempt));
        await queueManager.dispatch(
          RetryWithBackoffJob(attempt + 1),
          delay: delay,
        );
        print('⏰ Retrying in \${delay.inSeconds} seconds...');
      } else {
        print('❌ Operation failed permanently after \${attempt + 1} attempts');
      }
    }
  }

  @override
  String get displayName => 'Retry Operation (Attempt \${attempt + 1})';

  @override
  int get maxRetries => 5;
}`

// Queue Workers
const workerUsageCode = `// Basic worker
await queueManager.startWorker();

// Worker with custom configuration
await queueManager.startWorker(
  maxJobs: 100,                    // Process max 100 jobs
  delay: Duration(seconds: 5),     // 5 second delay between jobs
  timeout: Duration(hours: 1),     // Stop after 1 hour
  runInBackground: true,           // Run in background
);

// Worker with event callbacks
await queueManager.startWorker(
  onJobStart: (job) {
    print('🚀 Starting job: \${job.displayName}');
  },
  onJobComplete: (job, result) {
    print('✅ Completed job: \${job.displayName}');
  },
  onJobError: (job, error, stack) {
    print('❌ Failed job: \${job.displayName} - \$error');
    // Send alert, log to external service, etc.
  },
  onError: (error, stack) {
    print('💥 Worker error: \$error');
    // Handle worker-level errors
  },
);

// Long-running worker for production
await queueManager.startWorker(
  delay: Duration(milliseconds: 500),  // Fast processing
  maxJobs: null,                       // Run indefinitely
  timeout: null,                       // No timeout
  runInBackground: true,
);

// Development worker with verbose logging
await queueManager.startWorker(
  delay: Duration(seconds: 2),
  onJobStart: (job) => print('[DEV] Processing: \${job.displayName}'),
  onJobComplete: (job, result) => print('[DEV] Completed: \${job.displayName}'),
  onJobError: (job, error, stack) => print('[DEV] Error in \${job.displayName}: \$error'),
);`

// Batch Processing
const batchProcessingCode = `// Process multiple jobs at once
final jobs = [
  SendEmailJob('user1@example.com', 'Welcome User 1'),
  SendEmailJob('user2@example.com', 'Welcome User 2'),
  SendEmailJob('user3@example.com', 'Welcome User 3'),
  ProcessPaymentJob('order_123', 99.99),
  UpdateInventoryJob('product_456', -5),
];

// Dispatch all at once
await queueManager.dispatchBatch(jobs);

// Dispatch with individual delays
await queueManager.dispatchBatch(jobs, delay: Duration(seconds: 10));

// Batch processing job
class BulkEmailJob extends QueueJob {
  final List<String> emails;
  final String subject;
  final String template;

  BulkEmailJob(this.emails, this.subject, this.template);

  @override
  Future<void> handle() async {
    print('Sending \${emails.length} emails...');

    for (final email in emails) {
      try {
        final personalizedContent = template.replaceAll('{{email}}', email);
        await sendEmail(email, subject, personalizedContent);
        print('✅ Sent to \$email');
      } catch (e) {
        print('❌ Failed to send to \$email: \$e');
        // Continue with other emails
      }
    }

    print('✅ Bulk email job completed');
  }

  @override
  String get displayName => 'Send Bulk Email (\${emails.length} recipients)';

  @override
  int get maxRetries => 2;
}

// Usage
await queueManager.dispatch(BulkEmailJob(
  ['user1@example.com', 'user2@example.com', 'user3@example.com'],
  'Monthly Newsletter',
  'Hello {{email}}, here is your newsletter...',
));`

// Monitoring and Metrics
const monitoringCode = `// Get current metrics
final metrics = queueManager.getMetrics();
print('Queue Metrics:');
print('  Total Queued: \${metrics['total_queued']}');
print('  Total Completed: \${metrics['total_completed']}');
print('  Total Failed: \${metrics['total_failed']}');
print('  Currently Processing: \${metrics['currently_processing']}');
print('  Success Rate: \${(metrics['success_rate'] * 100).toStringAsFixed(1)}%');
print('  Average Processing Time: \${metrics['average_processing_time_ms']}ms');

// Monitor specific job types
final completedByType = metrics['completed_by_type'] as Map<String, int>;
print('Jobs by Type:');
completedByType.forEach((type, count) {
  print('  \$type: \$count');
});

// Reset metrics (useful for testing)
queueManager.resetMetrics();

// Custom monitoring
class QueueMonitor {
  final QueueManager _queueManager;

  QueueMonitor(this._queueManager);

  void startMonitoring() {
    Timer.periodic(Duration(minutes: 5), (timer) {
      final metrics = _queueManager.getMetrics();

      // Check for issues
      if (metrics['failure_rate'] > 0.1) { // > 10% failure rate
        print('⚠️  High failure rate detected: \${(metrics['failure_rate'] * 100).toStringAsFixed(1)}%');
        // Send alert
      }

      if (metrics['currently_processing'] > 10) { // Too many jobs processing
        print('⚠️  High concurrent jobs: \${metrics['currently_processing']}');
        // Scale up workers
      }

      // Log metrics
      print('📊 Queue Health Check:');
      print('   Success Rate: \${(metrics['success_rate'] * 100).toStringAsFixed(1)}%');
      print('   Processing: \${metrics['currently_processing']} jobs');
      print('   Queue Size: \${metrics['total_queued']} jobs');
    });
  }
}`

// Error Handling
const errorHandlingCode = `// Job with error handling
class ProcessOrderJob extends QueueJob {
  final String orderId;

  ProcessOrderJob(this.orderId);

  @override
  Future<void> handle() async {
    try {
      // Step 1: Validate order
      final order = await Order.find(orderId);
      if (order == null) {
        throw Exception('Order not found: \$orderId');
      }

      // Step 2: Process payment
      await PaymentService.charge(order);

      // Step 3: Update inventory
      for (final item in order.items) {
        await Inventory.decrement(item.productId, item.quantity);
      }

      // Step 4: Send confirmation
      await EmailService.sendOrderConfirmation(order);

      print('✅ Order \$orderId processed successfully');

    } catch (e) {
      print('❌ Failed to process order \$orderId: \$e');

      // Log detailed error information
      await ErrorLogger.log('order_processing_failed', {
        'orderId': orderId,
        'error': e.toString(),
        'timestamp': DateTime.now().toIso8601String(),
        'attempt': attempt,
      });

      // Don't rethrow - let queue handle retry logic
      // The job will be retried based on maxRetries
    }
  }

  @override
  String get displayName => 'Process Order \$orderId';

  @override
  int get maxRetries => 3;
}

// Worker with error handling
await queueManager.startWorker(
  onJobError: (job, error, stack) async {
    // Log to external service
    await ExternalLogger.error('Queue job failed', {
      'job': job.displayName,
      'error': error.toString(),
      'stack': stack.toString(),
      'timestamp': DateTime.now().toIso8601String(),
    });

    // Send alert for critical jobs
    if (job.displayName.contains('Payment') || job.displayName.contains('Order')) {
      await AlertService.send('Critical job failed: \${job.displayName}');
    }
  },
  onError: (error, stack) async {
    // Worker-level error
    await ExternalLogger.critical('Queue worker error', {
      'error': error.toString(),
      'stack': stack.toString(),
    });

    // Restart worker or send alert
    await AlertService.send('Queue worker crashed - manual intervention required');
  },
);

// Graceful error recovery
class ResilientJob extends QueueJob {
  @override
  Future<void> handle() async {
    const maxRetries = 3;
    var attempt = 0;

    while (attempt < maxRetries) {
      try {
        await performRiskyOperation();
        print('✅ Operation succeeded');
        return;
      } catch (e) {
        attempt++;
        print('⚠️  Attempt \$attempt failed: \$e');

        if (attempt < maxRetries) {
          // Wait before retry
          await Future.delayed(Duration(seconds: attempt * 5));
        }
      }
    }

    throw Exception('Operation failed after \$maxRetries attempts');
  }

  @override
  String get displayName => 'Resilient Operation';

  @override
  int get maxRetries => 0; // Handle retries internally
}`

// Real-World Examples
const emailExampleCode = `// Email processing job
class SendWelcomeEmailJob extends QueueJob {
  final User user;

  SendWelcomeEmailJob(this.user);

  @override
  Future<void> handle() async {
    try {
      // Personalize email content
      final subject = 'Welcome to Our Platform, \${user.firstName}!';
      final body = '''
        Hi \${user.firstName},

        Welcome to our platform! We're excited to have you here.

        Your account details:
        - Email: \${user.email}
        - Registration Date: \${user.createdAt}

        Best regards,
        The Team
      ''';

      // Send email
      await EmailService.send(
        to: user.email,
        subject: subject,
        body: body,
        html: generateWelcomeHtml(user),
      );

      // Update user status
      await user.update({'welcome_email_sent': true});

      print('✅ Welcome email sent to \${user.email}');

    } catch (e) {
      print('❌ Failed to send welcome email to \${user.email}: \$e');
      throw e; // Let queue handle retry
    }
  }

  @override
  String get displayName => 'Send Welcome Email to \${user.email}';

  @override
  int get maxRetries => 3;
}

// Bulk email job
class SendNewsletterJob extends QueueJob {
  final List<User> subscribers;
  final Newsletter newsletter;

  SendNewsletterJob(this.subscribers, this.newsletter);

  @override
  Future<void> handle() async {
    var successCount = 0;
    var failureCount = 0;

    for (final user in subscribers) {
      try {
        await EmailService.sendNewsletter(user, newsletter);
        successCount++;
        print('✅ Newsletter sent to \${user.email}');
      } catch (e) {
        failureCount++;
        print('❌ Failed to send newsletter to \${user.email}: \$e');
      }

      // Small delay to avoid overwhelming email service
      await Future.delayed(Duration(milliseconds: 100));
    }

    print('📊 Newsletter sent: \$successCount success, \$failureCount failed');

    // Log completion
    await Analytics.track('newsletter_sent', {
      'newsletter_id': newsletter.id,
      'total_sent': successCount,
      'total_failed': failureCount,
    });
  }

  @override
  String get displayName => 'Send Newsletter: \${newsletter.title}';

  @override
  int get maxRetries => 2;
}`

const dataProcessingCode = `// Data import job
class ImportUsersJob extends QueueJob {
  final String csvFilePath;

  ImportUsersJob(this.csvFilePath);

  @override
  Future<void> handle() async {
    final file = File(csvFilePath);
    final lines = await file.readAsLines();

    var imported = 0;
    var skipped = 0;
    var errors = 0;

    // Skip header
    for (var i = 1; i < lines.length; i++) {
      final line = lines[i];
      try {
        final userData = parseCsvLine(line);

        // Validate data
        if (!isValidUserData(userData)) {
          skipped++;
          continue;
        }

        // Create user
        await User.create(userData);
        imported++;

        // Progress logging
        if (imported % 100 == 0) {
          print('📊 Imported \$imported users...');
        }

      } catch (e) {
        errors++;
        print('❌ Error importing line \${i + 1}: \$e');
      }
    }

    print('✅ Import completed: \$imported imported, \$skipped skipped, \$errors errors');

    // Cleanup
    await file.delete();

    // Send completion notification
    await NotificationService.send('Data import completed', {
      'file': csvFilePath,
      'imported': imported,
      'skipped': skipped,
      'errors': errors,
    });
  }

  @override
  String get displayName => 'Import Users from CSV';

  @override
  int get maxRetries => 1;
}

// Data cleanup job
class CleanupOldDataJob extends QueueJob {
  final Duration olderThan;

  CleanupOldDataJob(this.olderThan);

  @override
  Future<void> handle() async {
    final cutoffDate = DateTime.now().subtract(olderThan);

    // Clean up old logs
    final deletedLogs = await Database.table('logs')
      .where('created_at', '<', cutoffDate)
      .delete();

    // Clean up old sessions
    final deletedSessions = await Database.table('sessions')
      .where('last_activity', '<', cutoffDate)
      .delete();

    // Clean up old notifications
    final deletedNotifications = await Database.table('notifications')
      .where('created_at', '<', cutoffDate)
      .where('read', true)
      .delete();

    print('🧹 Cleanup completed:');
    print('   Logs deleted: \$deletedLogs');
    print('   Sessions deleted: \$deletedSessions');
    print('   Notifications deleted: \$deletedNotifications');

    // Log cleanup operation
    await AuditLogger.log('data_cleanup', {
      'older_than_days': olderThan.inDays,
      'logs_deleted': deletedLogs,
      'sessions_deleted': deletedSessions,
      'notifications_deleted': deletedNotifications,
    });
  }

  @override
  String get displayName => 'Cleanup Data Older Than \${olderThan.inDays} Days';

  @override
  int get maxRetries => 2;
}`

const scheduledTasksCode = `// Daily report job
class GenerateDailyReportJob extends QueueJob {
  @override
  Future<void> handle() async {
    final yesterday = DateTime.now().subtract(Duration(days: 1));
    final reportData = await generateReport(yesterday);

    // Save report to database
    final report = await Report.create({
      'date': yesterday,
      'data': reportData,
      'generated_at': DateTime.now(),
    });

    // Send report via email
    await EmailService.sendReport(report);

    // Archive old reports (older than 30 days)
    await Report.where('date', '<', DateTime.now().subtract(Duration(days: 30)))
      .update({'archived': true});

    print('✅ Daily report generated for \${yesterday.toDateString()}');
  }

  @override
  String get displayName => 'Generate Daily Report';

  @override
  int get maxRetries => 3;
}

// Schedule daily reports
class ReportScheduler {
  final QueueManager _queueManager;

  ReportScheduler(this._queueManager);

  void scheduleDailyReports() {
    // Schedule first report for tomorrow at 9 AM
    final tomorrow9AM = DateTime.now()
      .add(Duration(days: 1))
      .copyWith(hour: 9, minute: 0, second: 0);

    final initialDelay = tomorrow9AM.difference(DateTime.now());

    _queueManager.dispatch(
      GenerateDailyReportJob(),
      delay: initialDelay,
    );

    // Schedule recurring reports (this would be handled by a cron-like system)
    // For now, each report schedules the next one
  }
}

// Maintenance job
class DatabaseMaintenanceJob extends QueueJob {
  @override
  Future<void> handle() async {
    print('🔧 Starting database maintenance...');

    // Optimize tables
    await Database.optimizeTables();

    // Update statistics
    await Database.analyzeTables();

    // Clean up orphaned records
    await Database.cleanupOrphanedRecords();

    // Rebuild indexes
    await Database.rebuildIndexes();

    print('✅ Database maintenance completed');

    // Log maintenance completion
    await SystemLogger.info('Database maintenance completed', {
      'timestamp': DateTime.now().toIso8601String(),
      'duration': 'completed',
    });
  }

  @override
  String get displayName => 'Database Maintenance';

  @override
  int get maxRetries => 2;
}

// Schedule maintenance weekly
final maintenanceDelay = Duration(days: 7);
await queueManager.dispatch(
  DatabaseMaintenanceJob(),
  delay: maintenanceDelay,
);`

// Custom Drivers
const customDriverCode = `// Custom database queue driver
class DatabaseQueueDriver implements QueueDriver {
  final DatabaseConnection _db;

  DatabaseQueueDriver(this._db);

  @override
  Future<void> push(QueueJob job, {Duration? delay}) async {
    final scheduledAt = DateTime.now().add(delay ?? Duration.zero);

    await _db.table('jobs').insert({
      'id': DateTime.now().millisecondsSinceEpoch.toString(),
      'type': job.runtimeType.toString(),
      'payload': jsonEncode(job.toJson()),
      'scheduled_at': scheduledAt.toIso8601String(),
      'created_at': DateTime.now().toIso8601String(),
      'attempts': 0,
      'max_retries': job.maxRetries,
      'status': 'pending',
    });

    print('🗄️ Job queued to database: \${job.displayName}');
  }

  @override
  Future<void> process() async {
    // Find next pending job
    final jobRecord = await _db.table('jobs')
      .where('status', 'pending')
      .where('scheduled_at', '<=', DateTime.now().toIso8601String())
      .orderBy('created_at')
      .first();

    if (jobRecord == null) return;

    // Mark as processing
    await _db.table('jobs')
      .where('id', jobRecord['id'])
      .update({'status': 'processing'});

    try {
      // Create job instance and execute
      final job = _createJobFromRecord(jobRecord);
      await job.handle();

      // Mark as completed
      await _db.table('jobs')
        .where('id', jobRecord['id'])
        .update({'status': 'completed'});

      print('🗄️ Job completed: \${job.displayName}');

    } catch (e) {
      // Handle failure and retry logic
      final attempts = jobRecord['attempts'] + 1;
      final maxRetries = jobRecord['max_retries'];

      if (attempts >= maxRetries) {
        await _db.table('jobs')
          .where('id', jobRecord['id'])
          .update({
            'status': 'failed',
            'error': e.toString(),
          });
        print('🗄️ Job failed permanently: \${jobRecord['type']}');
      } else {
        // Schedule retry
        final retryDelay = Duration(seconds: 30 * attempts);
        final nextAttempt = DateTime.now().add(retryDelay);

        await _db.table('jobs')
          .where('id', jobRecord['id'])
          .update({
            'status': 'pending',
            'attempts': attempts,
            'scheduled_at': nextAttempt.toIso8601String(),
          });
        print('🗄️ Job retry scheduled: \${jobRecord['type']}');
      }
    }
  }

  QueueJob _createJobFromRecord(Map<String, dynamic> record) {
    // This would need a job registry/factory
    // Simplified version for demonstration
    final payload = jsonDecode(record['payload']);
    return GenericQueueJob.fromPayload(record['type'], payload);
  }
}

// Register custom driver
QueueFactory.registerDriver('database', DatabaseQueueDriver(database));

// Use custom driver
final config = {
  'queue': {
    'driver': 'database',
  },
};
final queueManager = QueueManager(config);`

// Testing
const testingCode = `// Unit tests for queue jobs
void main() {
  group('QueueJob Tests', () {
    late QueueManager queueManager;

    setUp(() async {
      // Use memory driver for testing
      final config = {'queue': {'driver': 'memory'}};
      queueManager = QueueManager(config);
      await queueManager.init();
    });

    test('Simple job executes successfully', () async {
      final job = TestJob();
      await queueManager.dispatch(job);

      // Process the job
      await queueManager.process();

      expect(job.executed, isTrue);
      expect(job.executionCount, equals(1));
    });

    test('Job with retry logic', () async {
      final job = FailingJob(maxFailures: 2);
      await queueManager.dispatch(job);

      // Process multiple times to test retries
      await queueManager.process(); // Fail 1
      await queueManager.process(); // Fail 2
      await queueManager.process(); // Success

      expect(job.executionCount, equals(3));
      expect(job.succeeded, isTrue);
    });

    test('Delayed job execution', () async {
      final job = TestJob();
      final delay = Duration(seconds: 1);

      await queueManager.dispatch(job, delay: delay);

      // Job should not execute immediately
      await queueManager.process();
      expect(job.executed, isFalse);

      // Wait for delay and process again
      await Future.delayed(delay + Duration(milliseconds: 100));
      await queueManager.process();
      expect(job.executed, isTrue);
    });

    test('Batch job processing', () async {
      final jobs = [
        TestJob(),
        TestJob(),
        TestJob(),
      ];

      await queueManager.dispatchBatch(jobs);

      // Process all jobs
      for (var i = 0; i < jobs.length; i++) {
        await queueManager.process();
      }

      for (final job in jobs) {
        expect(job.executed, isTrue);
      }
    });

    test('Worker processes jobs correctly', () async {
      final jobs = List.generate(5, (_) => TestJob());
      for (final job in jobs) {
        await queueManager.dispatch(job);
      }

      // Start worker with short delay
      await queueManager.startWorker(
        maxJobs: 5,
        delay: Duration(milliseconds: 10),
      );

      // Wait for all jobs to complete
      await Future.delayed(Duration(milliseconds: 100));

      for (final job in jobs) {
        expect(job.executed, isTrue);
      }
    });

    test('Error handling in jobs', () async {
      final job = AlwaysFailingJob();
      await queueManager.dispatch(job);

      // Process and expect failure
      await queueManager.process();

      expect(job.executionCount, equals(1));
      expect(job.failed, isTrue);
    });
  });
}

// Test job implementations
class TestJob extends QueueJob {
  bool executed = false;
  int executionCount = 0;

  @override
  Future<void> handle() async {
    executed = true;
    executionCount++;
    await Future.delayed(Duration(milliseconds: 10)); // Simulate work
  }

  @override
  String get displayName => 'Test Job';

  @override
  int get maxRetries => 3;
}

class FailingJob extends QueueJob {
  final int maxFailures;
  int executionCount = 0;
  bool succeeded = false;

  FailingJob({this.maxFailures = 2});

  @override
  Future<void> handle() async {
    executionCount++;

    if (executionCount <= maxFailures) {
      throw Exception('Simulated failure #\$executionCount');
    }

    succeeded = true;
  }

  @override
  String get displayName => 'Failing Job';

  @override
  int get maxRetries => 5;
}

class AlwaysFailingJob extends QueueJob {
  int executionCount = 0;
  bool failed = false;

  @override
  Future<void> handle() async {
    executionCount++;
    failed = true;
    throw Exception('This job always fails');
  }

  @override
  String get displayName => 'Always Failing Job';

  @override
  int get maxRetries => 0;
}`

// Debug Commands
const debugCommandsCode = `// Debug queue status
void debugQueueStatus(QueueManager queueManager) {
  final metrics = queueManager.getMetrics();

  print('🔍 Queue Debug Information:');
  print('Driver: \${queueManager.defaultDriverName}');
  print('Total Queued: \${metrics['total_queued']}');
  print('Currently Processing: \${metrics['currently_processing']}');
  print('Completed: \${metrics['total_completed']}');
  print('Failed: \${metrics['total_failed']}');
  print('Success Rate: \${(metrics['success_rate'] * 100).toStringAsFixed(1)}%');

  if (metrics['queued_by_type'] != null) {
    print('Jobs by Type:');
    (metrics['queued_by_type'] as Map<String, dynamic>).forEach((type, count) {
      print('  \$type: \$count');
    });
  }
}

// Inspect file queue contents
void inspectFileQueue(String queuePath) {
  final file = File(queuePath);

  if (!file.existsSync()) {
    print('❌ Queue file does not exist: \$queuePath');
    return;
  }

  try {
    final content = file.readAsStringSync();
    final data = jsonDecode(content) as List<dynamic>;

    print('📁 File Queue Contents (\${data.length} jobs):');

    for (var i = 0; i < data.length && i < 10; i++) {
      final job = data[i] as Map<String, dynamic>;
      final scheduledAt = DateTime.parse(job['scheduledAt']);
      final isDue = scheduledAt.isBefore(DateTime.now());

      print('\${i + 1}. \${job['type']}');
      print('   ID: \${job['id']}');
      print('   Scheduled: \${scheduledAt}');
      print('   Due: \${isDue ? '✅' : '⏰'}');
      print('   Attempts: \${job['attempts']}/\${job['maxRetries']}');
      print('');
    }

    if (data.length > 10) {
      print('... and \${data.length - 10} more jobs');
    }

  } catch (e) {
    print('❌ Failed to read queue file: \$e');
  }
}

// Clear stuck jobs
Future<void> clearStuckJobs(QueueManager queueManager) async {
  // This would depend on the driver implementation
  // For file driver:
  final file = File('storage/queue/jobs.json');

  if (file.existsSync()) {
    final content = file.readAsStringSync();
    final jobs = jsonDecode(content) as List<dynamic>;

    // Remove jobs that have been processing for too long
    final now = DateTime.now();
    final maxProcessingTime = Duration(minutes: 30);

    jobs.removeWhere((job) {
      if (job['status'] == 'processing') {
        final scheduledAt = DateTime.parse(job['scheduledAt']);
        return now.difference(scheduledAt) > maxProcessingTime;
      }
      return false;
    });

    await file.writeAsStringSync(jsonEncode(jobs));
    print('🧹 Cleared stuck jobs from file queue');
  }
}

// Monitor queue health
class QueueHealthMonitor {
  final QueueManager _queueManager;

  QueueHealthMonitor(this._queueManager);

  void startMonitoring() {
    Timer.periodic(Duration(minutes: 1), (timer) {
      final metrics = _queueManager.getMetrics();

      // Check for warning conditions
      if (metrics['failure_rate'] > 0.05) { // > 5% failure rate
        print('⚠️  WARNING: High failure rate \${(metrics['failure_rate'] * 100).toStringAsFixed(1)}%');
      }

      if (metrics['currently_processing'] > 20) {
        print('⚠️  WARNING: High concurrent processing: \${metrics['currently_processing']}');
      }

      if (metrics['total_queued'] > 1000) {
        print('⚠️  WARNING: Large queue backlog: \${metrics['total_queued']} jobs');
      }

      // Log periodic health check
      print('💚 Queue Health: \${metrics['total_completed']} completed, \${metrics['total_failed']} failed');
    });
  }
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
