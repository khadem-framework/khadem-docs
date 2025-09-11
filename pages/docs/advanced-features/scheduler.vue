<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Task Scheduler</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Powerful task scheduling system for running background jobs, cron jobs, and automated tasks in your Khadem application.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Background Jobs</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Cron Scheduling</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Queue Management</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Monitoring</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">System Overview</h2>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Scheduler Architecture</h3>
        <p class="text-blue-800 dark:text-blue-200 mb-4">
          The Khadem Task Scheduler provides a robust system for scheduling and executing background tasks, cron jobs, and automated processes with built-in monitoring and error handling.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Core Features</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Cron expression support
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Background job processing
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Queue-based task execution
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Task monitoring and logging
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Graceful error handling
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Advanced Capabilities</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Distributed task execution
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Task chaining and dependencies
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Priority-based scheduling
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Real-time task monitoring
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Automatic retry mechanisms
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="ml-3">
            <h4 class="text-sm font-medium text-yellow-800 dark:text-yellow-200">Important Note</h4>
            <p class="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
              Scheduled tasks should be designed to be idempotent and handle failures gracefully to ensure system reliability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Getting Started</h2>

      <CodeBlock
        :code="schedulerSetupCode"
        language="dart"
        title="Scheduler Setup"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Basic Usage</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">1. Define a Task</h4>
            <CodeBlock
              :code="taskDefinitionCode"
              language="dart"
              title="Task Definition"
            />
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">2. Schedule the Task</h4>
            <CodeBlock
              :code="taskSchedulingCode"
              language="dart"
              title="Task Scheduling"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cron Expressions</h2>

      <CodeBlock
        :code="cronExamplesCode"
        language="dart"
        title="Cron Expression Examples"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Cron Expression Format</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="text-left py-2 px-3">Field</th>
                <th class="text-left py-2 px-3">Values</th>
                <th class="text-left py-2 px-3">Special Characters</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="py-2 px-3 font-medium">Minute</td>
                <td class="py-2 px-3">0-59</td>
                <td class="py-2 px-3">, - * /</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Hour</td>
                <td class="py-2 px-3">0-23</td>
                <td class="py-2 px-3">, - * /</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Day of Month</td>
                <td class="py-2 px-3">1-31</td>
                <td class="py-2 px-3">, - * / ? L W</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Month</td>
                <td class="py-2 px-3">1-12 or JAN-DEC</td>
                <td class="py-2 px-3">, - * /</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Day of Week</td>
                <td class="py-2 px-3">0-7 or SUN-SAT</td>
                <td class="py-2 px-3">, - * / ? L #</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Task Types</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">Scheduled Tasks</h3>
          <CodeBlock
            :code="scheduledTaskCode"
            language="dart"
            title="Scheduled Task Example"
          />
          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            Tasks that run at specific times or intervals using cron expressions.
          </p>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-3">Background Jobs</h3>
          <CodeBlock
            :code="backgroundJobCode"
            language="dart"
            title="Background Job Example"
          />
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-2">
            Asynchronous tasks that run in the background without blocking the main application.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Queue Management</h2>

      <CodeBlock
        :code="queueManagementCode"
        language="dart"
        title="Queue Management"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Queue Priorities</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>high</code> - Critical tasks</li>
            <li><code>default</code> - Standard tasks</li>
            <li><code>low</code> - Non-urgent tasks</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Queue Workers</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Multiple worker processes</li>
            <li>Automatic load balancing</li>
            <li>Graceful shutdown handling</li>
            <li>Memory usage monitoring</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling & Monitoring</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling & Retry Logic"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Monitoring Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>Task execution logs</li>
          <li>Performance metrics</li>
          <li>Failure notifications</li>
          <li>Queue status monitoring</li>
          <li>Automatic retry mechanisms</li>
          <li>Dead letter queue handling</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Design tasks to be idempotent</li>
            <li>Use appropriate queue priorities</li>
            <li>Implement proper error handling</li>
            <li>Monitor task performance</li>
            <li>Use descriptive task names</li>
            <li>Test tasks in development</li>
            <li>Handle task timeouts gracefully</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't perform long-running operations without timeouts</li>
            <li>Don't rely on task execution order</li>
            <li>Don't store large amounts of data in task payloads</li>
            <li>Don't forget to handle task failures</li>
            <li>Don't use blocking operations in tasks</li>
            <li>Don't schedule too many tasks simultaneously</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Task Scheduler',
  meta: [
    { name: 'description', content: 'Comprehensive task scheduling system documentation for Khadem' }
  ]
})

const schedulerSetupCode = `// Scheduler setup in config/scheduler.dart
return {
  'default': env('QUEUE_CONNECTION', 'database'),

  'connections': {
    'database': {
      'driver': 'database',
      'table': 'jobs',
      'queue': 'default',
      'retry_after': 90,
    },

    'redis': {
      'driver': 'redis',
      'connection': 'default',
      'queue': 'default',
      'retry_after': 90,
    },
  },

  'failed': {
    'driver': 'database-uuids',
    'database': env('DB_CONNECTION', 'mysql'),
    'table': 'failed_jobs',
  }
};

// Kernel registration in app/Kernel.dart
class Kernel {
  void schedule(Schedule schedule) {
    // Define scheduled tasks here
    schedule.call(() => new CleanUpOldData()).daily();
    schedule.command('emails:send').everyMinute();
    schedule.job(new ProcessPayments()).everyFiveMinutes();
  }
}`

const taskDefinitionCode = `// Define a custom task
class SendWelcomeEmail implements ShouldQueue {
  final User user;

  SendWelcomeEmail(this.user);

  @override
  String get queue => 'emails';

  @override
  Future handle() async {
    // Send welcome email logic
    await Mail.to(user.email).send(new WelcomeEmail(user));

    print('Welcome email sent to \${user.email}');
  }
}

// Define a scheduled task
class CleanUpOldData {
  @override
  Future handle() async {
    // Clean up old data
    final cutoff = DateTime.now().subtract(Duration(days: 30));

    await Database.table('logs')
      .where('created_at', '<', cutoff)
      .delete();

    print('Old data cleaned up');
  }
}`

const taskSchedulingCode = `// Schedule tasks in Kernel.dart
class Kernel {
  void schedule(Schedule schedule) {
    // Run every minute
    schedule.call(() => new SendWelcomeEmail(user)).everyMinute();

    // Run daily at 2 AM
    schedule.call(() => new CleanUpOldData()).dailyAt('02:00');

    // Run on specific days
    schedule.call(() => new GenerateReports()).weeklyOn(1, '08:00'); // Monday 8 AM

    // Run with cron expression
    schedule.call(() => new ProcessPayments()).cron('0 */2 * * *'); // Every 2 hours

    // Run only when condition is met
    schedule.call(() => new SendNotifications())
      .everyFiveMinutes()
      .when(() => Config.get('notifications.enabled'));

    // Run with delay
    schedule.call(() => new UpdateCache()).everyMinute().delay(Duration(seconds: 30));
  }
}`

const cronExamplesCode = `// Common cron expression examples
class CronExamples {
  static void examples() {
    // Run every minute
    '* * * * *'

    // Run every 5 minutes
    '*/5 * * * *'

    // Run every hour at minute 30
    '30 * * * *'

    // Run daily at 2 AM
    '0 2 * * *'

    // Run every Monday at 8 AM
    '0 8 * * 1'

    // Run on the first day of every month
    '0 0 1 * *'

    // Run every weekday at 9 AM
    '0 9 * * 1-5'

    // Run every 15 minutes between 9 AM and 5 PM on weekdays
    '*/15 9-17 * * 1-5'

    // Run at 10 AM, 2 PM, and 6 PM every day
    '0 10,14,18 * * *'

    // Run every hour from 9 AM to 5 PM on weekdays
    '0 9-17 * * 1-5'
  }
}

// Advanced scheduling
class AdvancedScheduling {
  static void advancedExamples(Schedule schedule) {
    // Skip if condition is false
    schedule.call(() => new BackupDatabase())
      .daily()
      .skipIf(() => Storage.disk('backup').isFull());

    // Run only on production
    schedule.call(() => new SendReports())
      .weekly()
      .environments(['production']);

    // Run with custom timezone
    schedule.call(() => new ProcessQueue())
      .everyMinute()
      .timezone('America/New_York');

    // Chain multiple tasks
    schedule.call(() => new Task1()).everyMinute()
      .then(() => new Task2())
      .then(() => new Task3());
  }
}`

const scheduledTaskCode = `// Scheduled task example
class DatabaseBackup implements ShouldQueue {
  @override
  String get queue => 'maintenance';

  @override
  Future handle() async {
    try {
      final timestamp = DateTime.now().toIso8601String();
      final filename = 'backup_\${timestamp}.sql';

      // Create database backup
      await Process.run('mysqldump', [
        '-u', env('DB_USERNAME'),
        '-p\${env('DB_PASSWORD')}',
        env('DB_DATABASE'),
        '>', Storage.path('backups/\$filename')
      ]);

      // Compress the backup
      await Process.run('gzip', [Storage.path('backups/\$filename')]);

      // Clean up old backups (keep last 7 days)
      final cutoff = DateTime.now().subtract(Duration(days: 7));
      final oldBackups = await Storage.files('backups')
        .where((file) => file.lastModified.isBefore(cutoff))
        .toList();

      for (final backup in oldBackups) {
        await backup.delete();
      }

      Log.info('Database backup completed: \$filename');
    } catch (e) {
      Log.error('Database backup failed: \$e');
      throw e; // Re-throw to mark task as failed
    }
  }
}`

const backgroundJobCode = `// Background job example
class ProcessPayment implements ShouldQueue {
  final Order order;
  final PaymentMethod paymentMethod;

  ProcessPayment(this.order, this.paymentMethod);

  @override
  String get queue => 'payments';

  @override
  int get priority => 10; // High priority

  @override
  Future handle() async {
    try {
      // Process payment
      final payment = await PaymentProcessor.process(
        amount: order.total,
        method: paymentMethod,
        orderId: order.id
      );

      if (payment.success) {
        // Update order status
        await order.update({'status': 'paid', 'payment_id': payment.id});

        // Send confirmation email
        await Mail.to(order.customer.email)
          .send(new PaymentConfirmationEmail(order, payment));

        // Update inventory
        for (final item in order.items) {
          await item.product.decrement('stock_quantity', item.quantity);
        }

        Log.info('Payment processed successfully for order \${order.id}');
      } else {
        // Handle payment failure
        await order.update({'status': 'payment_failed'});
        await Mail.to(order.customer.email)
          .send(new PaymentFailedEmail(order, payment.error));

        Log.warning('Payment failed for order \${order.id}: \${payment.error}');
      }
    } catch (e) {
      Log.error('Payment processing failed for order \${order.id}: \$e');

      // Retry logic
      if (attempts < maxAttempts) {
        await this.delay(Duration(minutes: 5));
        throw new RetryException('Payment processing failed, will retry');
      } else {
        await order.update({'status': 'processing_failed'});
      }
    }
  }
}`

const queueManagementCode = `// Queue management and worker configuration
class QueueManager {
  static Future configureQueues() async {
    // Define queue connections
    Queue.addConnection('database', {
      'driver': 'database',
      'table': 'jobs',
      'queue': 'default',
    });

    Queue.addConnection('redis', {
      'driver': 'redis',
      'connection': 'default',
      'queue': 'default',
    });
  }

  static Future startWorkers() async {
    // Start queue workers
    await Queue.work('high', {
      'sleep': 3,
      'tries': 3,
      'timeout': 90,
    });

    await Queue.work('default', {
      'sleep': 3,
      'tries': 3,
      'timeout': 90,
    });

    await Queue.work('low', {
      'sleep': 3,
      'tries': 3,
      'timeout': 90,
    });
  }
}

// Job dispatching
class JobDispatcher {
  static Future dispatchJobs() async {
    // Dispatch to specific queue
    await Queue.dispatch(
      new ProcessPayment(order, paymentMethod),
      'payments'
    );

    // Dispatch with delay
    await Queue.dispatch(
      new SendWelcomeEmail(user),
      'emails'
    ).delay(Duration(minutes: 5));

    // Dispatch to high priority queue
    await Queue.dispatch(
      new ProcessUrgentOrder(order),
      'high'
    );

    // Chain jobs
    await Queue.dispatch(new Job1())
      .then(() => Queue.dispatch(new Job2()))
      .then(() => Queue.dispatch(new Job3()));
  }
}

// Custom queue worker
class CustomWorker {
  static Future processQueue() async {
    while (true) {
      try {
        final job = await Queue.pop('default');

        if (job != null) {
          await job.fire();

          // Mark job as completed
          await job.delete();
        } else {
          // No jobs available, sleep
          await Future.delayed(Duration(seconds: 3));
        }
      } catch (e) {
        Log.error('Queue processing error: \$e');

        // Handle failed job
        if (job != null) {
          if (job.attempts < job.maxAttempts) {
            // Retry job
            await job.release(Duration(minutes: 5));
          } else {
            // Move to failed jobs
            await job.fail();
          }
        }
      }
    }
  }
}`

const errorHandlingCode = `// Error handling and monitoring
class TaskErrorHandler {
  static Future handleTaskFailure(Task task, Exception error) async {
    // Log the error
    Log.error('Task \${task.name} failed: \$error');

    // Send notification
    await Notification.send(
      new TaskFailedNotification(task, error)
    );

    // Store failure details
    await Database.table('task_failures').insert({
      'task_name': task.name,
      'error_message': error.toString(),
      'stack_trace': error.stackTrace.toString(),
      'occurred_at': DateTime.now(),
    });
  }
}

// Task with retry logic
class RetryableTask implements ShouldQueue {
  @override
  int get tries => 3;

  @override
  Duration get retryDelay => Duration(minutes: 5);

  @override
  Future handle() async {
    try {
      // Task implementation
      await performTask();
    } catch (e) {
      if (attempts < tries) {
        Log.warning('Task failed, retrying... (attempt \${attempts + 1}/\$tries)');
        throw e; // Re-throw to trigger retry
      } else {
        Log.error('Task failed permanently after \$tries attempts');
        await TaskErrorHandler.handleTaskFailure(this, e);
        throw e;
      }
    }
  }
}

// Task monitoring
class TaskMonitor {
  static final Map<String, TaskMetrics> _metrics = {};

  static Future recordTaskStart(String taskName) async {
    final metrics = _getMetrics(taskName);
    metrics.startedAt = DateTime.now();
    metrics.status = 'running';
  }

  static Future recordTaskComplete(String taskName) async {
    final metrics = _getMetrics(taskName);
    metrics.completedAt = DateTime.now();
    metrics.status = 'completed';
    metrics.executionTime = metrics.completedAt!.difference(metrics.startedAt!);
  }

  static Future recordTaskFailure(String taskName, Exception error) async {
    final metrics = _getMetrics(taskName);
    metrics.failedAt = DateTime.now();
    metrics.status = 'failed';
    metrics.error = error.toString();
    metrics.failureCount++;
  }

  static TaskMetrics _getMetrics(String taskName) {
    return _metrics.putIfAbsent(taskName, () => TaskMetrics());
  }

  static Map<String, dynamic> getStats() {
    return {
      'total_tasks': _metrics.length,
      'running_tasks': _metrics.values.where((m) => m.status == 'running').length,
      'completed_tasks': _metrics.values.where((m) => m.status == 'completed').length,
      'failed_tasks': _metrics.values.where((m) => m.status == 'failed').length,
      'average_execution_time': _calculateAverageExecutionTime(),
    };
  }

  static Duration _calculateAverageExecutionTime() {
    final completedTasks = _metrics.values.where((m) => m.executionTime != null);
    if (completedTasks.isEmpty) return Duration.zero;

    final totalTime = completedTasks.fold<Duration>(
      Duration.zero,
      (sum, task) => sum + task.executionTime!
    );

    return Duration(milliseconds: totalTime.inMilliseconds ~/ completedTasks.length);
  }
}

class TaskMetrics {
  DateTime? startedAt;
  DateTime? completedAt;
  DateTime? failedAt;
  Duration? executionTime;
  String status = 'pending';
  String? error;
  int failureCount = 0;
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
