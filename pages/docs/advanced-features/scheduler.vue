<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Task Scheduler</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A lightweight and efficient task scheduling system for running background jobs and automated tasks in your Khadem application.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Background Jobs</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Interval Scheduling</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Task Monitoring</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Retry Logic</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">System Overview</h2>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Scheduler Architecture</h3>
        <p class="text-blue-800 dark:text-blue-200 mb-4">
          The Khadem Task Scheduler provides a simple yet powerful system for scheduling and executing background tasks with built-in monitoring, retry logic, and error handling.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Core Features</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Duration-based task scheduling
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Built-in retry mechanism
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Task state management
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Real-time task monitoring
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Graceful error handling
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Components</h4>
            <ul class="space-y-2 text-blue-800 dark:text-blue-200">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                SchedulerEngine - Main scheduler
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                ScheduledTask - Task representation
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                ScheduledJob - Job interface
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Job Registry - Job management
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Task Statistics - Monitoring
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
              The Khadem scheduler uses Duration-based intervals, not cron expressions. Tasks should be designed to be idempotent and handle failures gracefully.
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
        title="Basic Scheduler Setup"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Quick Start</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">1. Create a Job</h4>
            <CodeBlock
              :code="createJobCode"
              language="dart"
              title="Create a Scheduled Job"
            />
          </div>

          <div>
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">2. Create and Schedule a Task</h4>
            <CodeBlock
              :code="createTaskCode"
              language="dart"
              title="Create and Schedule Task"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Task Intervals</h2>

      <CodeBlock
        :code="intervalExamplesCode"
        language="dart"
        title="Duration-based Intervals"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Common Duration Patterns</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="text-left py-2 px-3">Use Case</th>
                <th class="text-left py-2 px-3">Duration</th>
                <th class="text-left py-2 px-3">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="py-2 px-3 font-medium">Health Check</td>
                <td class="py-2 px-3">30 seconds</td>
                <td class="py-2 px-3"><code>Duration(seconds: 30)</code></td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Cache Cleanup</td>
                <td class="py-2 px-3">5 minutes</td>
                <td class="py-2 px-3"><code>Duration(minutes: 5)</code></td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Database Backup</td>
                <td class="py-2 px-3">1 hour</td>
                <td class="py-2 px-3"><code>Duration(hours: 1)</code></td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Weekly Report</td>
                <td class="py-2 px-3">7 days</td>
                <td class="py-2 px-3"><code>Duration(days: 7)</code></td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">Monthly Cleanup</td>
                <td class="py-2 px-3">30 days</td>
                <td class="py-2 px-3"><code>Duration(days: 30)</code></td>
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
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">Recurring Tasks</h3>
          <CodeBlock
            :code="recurringTaskCode"
            language="dart"
            title="Recurring Task Example"
          />
          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            Tasks that run repeatedly at specified intervals until stopped.
          </p>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200 mb-3">One-time Tasks</h3>
          <CodeBlock
            :code="oneTimeTaskCode"
            language="dart"
            title="One-time Task Example"
          />
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-2">
            Tasks that execute only once and then automatically stop.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Built-in Jobs</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-3">Ping Job</h3>
          <CodeBlock
            :code="pingJobCode"
            language="dart"
            title="Ping Job Implementation"
          />
          <p class="text-sm text-blue-700 dark:text-blue-300 mt-2">
            A simple job that logs a ping message. Useful for testing the scheduler or keeping services alive.
          </p>
          <div class="mt-3">
            <strong class="text-blue-800 dark:text-blue-200">Usage:</strong>
            <code class="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded text-sm ml-2">job: 'ping'</code>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-3">TTL Cache Cleaner</h3>
          <CodeBlock
            :code="ttlCleanerJobCode"
            language="dart"
            title="TTL Cache Cleaner Implementation"
          />
          <p class="text-sm text-green-700 dark:text-green-300 mt-2">
            Automatically removes expired cache files based on TTL values.
          </p>
          <div class="mt-3">
            <strong class="text-green-800 dark:text-green-200">Usage:</strong>
            <code class="bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded text-sm ml-2">job: 'ttl_cleaner'</code>
          </div>
          <div class="mt-2">
            <strong class="text-green-800 dark:text-green-200">Config:</strong>
            <code class="bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded text-sm ml-2">cachePath: 'storage/cache'</code>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <CodeBlock
        :code="configExampleCode"
        language="dart"
        title="Configuration-based Tasks"
      />

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Task Configuration Options</h4>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Required</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">name</code> - Unique task identifier</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">interval</code> - Execution interval in seconds</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">job</code> - Job name to execute</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Optional</h5>
            <ul class="space-y-1 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">timezone</code> - Timezone (default: UTC)</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">retryOnFail</code> - Retry on failure</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">runOnce</code> - Run only once</li>
              <li><code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">maxRetries</code> - Max retry attempts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Task Monitoring</h2>

      <CodeBlock
        :code="monitoringCode"
        language="dart"
        title="Task Monitoring and Control"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Task Statistics</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>Execution count (success/failure)</li>
          <li>Last execution time</li>
          <li>Next scheduled run</li>
          <li>Average execution time</li>
          <li>Current task status</li>
          <li>Retry count and history</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling & Retry</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Error Handling with Retry Logic"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Retry Behavior</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li>Exponential backoff: 5s, 10s, 15s (configurable)</li>
          <li>Maximum retry attempts (default: 3)</li>
          <li>Automatic failure logging</li>
          <li>Task status updates on failure</li>
          <li>Graceful handling of permanent failures</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h3>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Design jobs to be idempotent (safe to run multiple times)</li>
            <li>Use descriptive task names for easy identification</li>
            <li>Implement proper error handling in job execute() methods</li>
            <li>Monitor task execution and handle failures appropriately</li>
            <li>Use configuration files for task definitions in production</li>
            <li>Test jobs thoroughly before deploying to production</li>
            <li>Log important events and errors within jobs</li>
            <li>Use appropriate intervals based on task requirements</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h3>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Don't perform long-running operations without proper timeouts</li>
            <li>Don't rely on task execution order or timing precision</li>
            <li>Don't store large amounts of data in task configurations</li>
            <li>Don't ignore errors or use empty catch blocks</li>
            <li>Don't create tasks with very short intervals unnecessarily</li>
            <li>Don't use blocking operations in job implementations</li>
            <li>Don't forget to handle job cleanup and resource disposal</li>
            <li>Don't use the scheduler for real-time or time-critical operations</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">API Reference</h2>

      <div class="space-y-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">SchedulerEngine</h3>
          <CodeBlock
            :code="schedulerEngineApiCode"
            language="dart"
            title="SchedulerEngine API"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ScheduledTask</h3>
          <CodeBlock
            :code="scheduledTaskApiCode"
            language="dart"
            title="ScheduledTask API"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium mb-3">ScheduledJob Interface</h3>
          <CodeBlock
            :code="scheduledJobApiCode"
            language="dart"
            title="ScheduledJob Interface"
          />
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

const schedulerSetupCode = `// In your main.dart or bootstrap file
import 'package:khadem/khadem.dart';
import 'package:khadem/src/core/scheduler/scheduler_bootstrap.dart';

void main() async {
  // Initialize Khadem
  await Khadem.initialize();

  // Start the scheduler system
  startSchedulers();

  print('🚀 Application started with scheduler');

  // Graceful shutdown
  ProcessSignal.sigint.watch().listen((_) {
    print('🛑 Shutting down...');
    stopSchedulers();
    exit(0);
  });
}`

const createJobCode = `import 'package:khadem/khadem.dart';
import 'package:khadem/src/contracts/scheduler/scheduled_job.dart';

class EmailNotificationJob extends ScheduledJob {
  @override
  String get name => 'email_notifications';

  @override
  Future<void> execute() async {
    try {
      // Your email sending logic here
      final pendingEmails = await Database.table('pending_emails')
          .where('sent', false)
          .limit(10) // Process in batches
          .get();

      for (final email in pendingEmails) {
        await sendEmail(
          email['recipient'],
          email['subject'],
          email['body']
        );

        // Mark as sent
        await Database.table('pending_emails')
            .where('id', email['id'])
            .update({'sent': true, 'sent_at': DateTime.now()});
      }

      Khadem.logger.info('✅ Processed \${pendingEmails.length} emails');
    } catch (e) {
      Khadem.logger.error('❌ Email job failed: \$e');
      rethrow; // Let scheduler handle retry
    }
  }
}`

const createTaskCode = `import 'package:khadem/src/core/scheduler/core/scheduled_task.dart';
import 'package:khadem/src/core/scheduler/scheduler.dart';

void setupScheduledTasks() {
  final scheduler = SchedulerEngine();

  // Create a task that runs every 5 minutes
  final emailTask = ScheduledTask(
    name: 'send_pending_emails',
    interval: Duration(minutes: 5),
    job: EmailNotificationJob(),
    retryOnFail: true,
    maxRetries: 3,
  );

  // Create a cleanup task that runs every hour
  final cleanupTask = ScheduledTask(
    name: 'cleanup_temp_files',
    interval: Duration(hours: 1),
    job: TempFileCleanupJob(),
    retryOnFail: false,
  );

  // Add tasks to scheduler
  scheduler.add(emailTask);
  scheduler.add(cleanupTask);

  Khadem.logger.info('✅ Scheduled tasks initialized');
}`

const intervalExamplesCode = `// Duration-based scheduling examples
class DurationExamples {
  static void examples() {
    // Run every 30 seconds
    final healthCheck = ScheduledTask(
      name: 'health_check',
      interval: Duration(seconds: 30),
      job: PingJob(),
    );

    // Run every 5 minutes
    final cacheCleanup = ScheduledTask(
      name: 'cache_cleanup',
      interval: Duration(minutes: 5),
      job: CacheCleanupJob(),
    );

    // Run every hour
    final backupTask = ScheduledTask(
      name: 'database_backup',
      interval: Duration(hours: 1),
      job: DatabaseBackupJob(),
    );

    // Run daily (24 hours)
    final dailyReport = ScheduledTask(
      name: 'daily_report',
      interval: Duration(hours: 24),
      job: DailyReportJob(),
    );

    // Run weekly (7 days)
    final weeklyCleanup = ScheduledTask(
      name: 'weekly_cleanup',
      interval: Duration(days: 7),
      job: WeeklyCleanupJob(),
    );

    // Custom duration
    final customTask = ScheduledTask(
      name: 'custom_task',
      interval: Duration(hours: 2, minutes: 30), // 2.5 hours
      job: CustomJob(),
    );
  }
}`

const recurringTaskCode = `// Recurring task example
class DatabaseMaintenanceJob extends ScheduledJob {
  @override
  String get name => 'database_maintenance';

  @override
  Future<void> execute() async {
    // Perform database maintenance tasks
    await Database.raw('OPTIMIZE TABLE users, posts, comments');

    // Clean up old logs
    await Database.table('audit_logs')
        .where('created_at', '<', DateTime.now().subtract(Duration(days: 30)))
        .delete();

    // Update statistics
    await Database.raw('ANALYZE TABLE users, posts');

    Khadem.logger.info('✅ Database maintenance completed');
  }
}

// Create recurring task
final maintenanceTask = ScheduledTask(
  name: 'db_maintenance',
  interval: Duration(hours: 6), // Every 6 hours
  job: DatabaseMaintenanceJob(),
  retryOnFail: true,
  maxRetries: 2,
);

scheduler.add(maintenanceTask);`

const oneTimeTaskCode = `// One-time task example
class DataMigrationJob extends ScheduledJob {
  @override
  String get name => 'data_migration';

  @override
  Future<void> execute() async {
    // Perform one-time data migration
    final users = await Database.table('old_users').get();

    for (final user in users) {
      await Database.table('users').insert({
        'name': user['full_name'],
        'email': user['email_address'],
        'created_at': user['registration_date'],
        'migrated_at': DateTime.now(),
      });
    }

    // Mark migration as complete
    await Database.table('migrations').insert({
      'name': 'migrate_old_users',
      'completed_at': DateTime.now(),
    });

    Khadem.logger.info('✅ Data migration completed');
  }
}

// Create one-time task
final migrationTask = ScheduledTask(
  name: 'user_migration',
  interval: Duration(seconds: 1), // Run immediately
  job: DataMigrationJob(),
  runOnce: true, // Stop after first execution
);

scheduler.add(migrationTask);`

const pingJobCode = `import 'package:khadem/khadem.dart';
import 'package:khadem/src/contracts/scheduler/scheduled_job.dart';

class PingJob extends ScheduledJob {
  @override
  String get name => 'ping';

  @override
  Future<void> execute() async {
    Khadem.logger.debug('📡 Ping at \${DateTime.now()}');
    // Add your custom ping logic here
  }
}`

const ttlCleanerJobCode = `import 'dart:io';
import 'package:khadem/khadem.dart';
import 'package:khadem/src/contracts/scheduler/scheduled_job.dart';

class TTLFileCleanerJob extends ScheduledJob {
  @override
  String get name => 'ttl_cache_cleaner';

  final String cachePath;

  TTLFileCleanerJob({this.cachePath = 'storage/cache'});

  @override
  Future<void> execute() async {
    final dir = Directory(cachePath);
    if (!dir.existsSync()) return;

    final files = dir.listSync();
    int cleanedCount = 0;

    for (final file in files) {
      if (file is File) {
        try {
          final content = await file.readAsString();
          final data = jsonDecode(content);

          final ttl = data['ttl'];
          final createdAt = DateTime.parse(data['created_at'] ?? DateTime.now().toIso8601String());

          if (ttl != null && DateTime.now().isAfter(createdAt.add(Duration(seconds: ttl)))) {
            await file.delete();
            cleanedCount++;
          }
        } catch (e) {
          // Skip invalid files
          Khadem.logger.warning('⚠️ Could not process cache file \${file.path}: \$e');
        }
      }
    }

    if (cleanedCount > 0) {
      Khadem.logger.info('🧹 Cleaned \$cleanedCount expired cache files');
    }
  }
}`

const configExampleCode = `// config/app.json
{
  "scheduler": {
    "tasks": [
      {
        "name": "health_check",
        "interval": 30,
        "job": "ping",
        "retryOnFail": false
      },
      {
        "name": "cache_cleanup",
        "interval": 300,
        "job": "ttl_cleaner",
        "cachePath": "storage/cache",
        "retryOnFail": true,
        "maxRetries": 3
      },
      {
        "name": "email_notifications",
        "interval": 60,
        "job": "email_notifications",
        "retryOnFail": true,
        "maxRetries": 5
      },
      {
        "name": "database_backup",
        "interval": 3600,
        "job": "database_backup",
        "retryOnFail": true,
        "maxRetries": 2
      }
    ]
  }
}

// Tasks will be automatically loaded when calling startSchedulers()`

const monitoringCode = `// Task monitoring and control
class TaskMonitor {
  final SchedulerEngine _scheduler;

  TaskMonitor(this._scheduler);

  void printTaskStatus() {
    final stats = _scheduler.getStats();

    print('\\n📊 Task Status Report:');
    print('=' * 50);

    for (final entry in stats.entries) {
      final taskStats = entry.value;
      print('\\n📋 Task: \${taskStats.name}');
      print('   Status: \${taskStats.status}');
      print('   Last Run: \${taskStats.lastRun ?? 'Never'}');
      print('   Next Run: \${taskStats.nextRun ?? 'Not scheduled'}');
      print('   Success Count: \${taskStats.successCount}');
      print('   Failure Count: \${taskStats.failureCount}');
      print('   Avg Execution Time: \${taskStats.averageExecutionTime.toStringAsFixed(2)}ms');
    }
  }

  void pauseFailingTasks() {
    final stats = _scheduler.getStats();

    for (final entry in stats.entries) {
      final taskStats = entry.value;
      if (taskStats.failureCount > 3) {
        _scheduler.pause(taskStats.name);
        Khadem.logger.warning('⏸️ Paused failing task: \${taskStats.name}');
      }
    }
  }

  List<String> getActiveTasks() {
    return _scheduler.activeTasks();
  }

  bool isTaskRunning(String taskName) {
    return _scheduler.isRunning(taskName);
  }
}

// Usage
final monitor = TaskMonitor(scheduler);

// Check status every 5 minutes
final statusTask = ScheduledTask(
  name: 'status_monitor',
  interval: Duration(minutes: 5),
  job: StatusMonitorJob(monitor),
);

scheduler.add(statusTask);`

const errorHandlingCode = `// Error handling with retry logic
class RetryableJob extends ScheduledJob {
  @override
  String get name => 'retryable_job';

  @override
  Future<void> execute() async {
    try {
      // Your business logic here
      await performUnreliableOperation();

      Khadem.logger.info('✅ Job completed successfully');
    } catch (e) {
      Khadem.logger.error('❌ Job failed: \$e');

      // The scheduler will automatically handle retries
      // based on the task's retryOnFail and maxRetries settings
      rethrow;
    }
  }
}

// Create task with retry configuration
final retryableTask = ScheduledTask(
  name: 'unreliable_task',
  interval: Duration(minutes: 10),
  job: RetryableJob(),
  retryOnFail: true,      // Enable retries
  maxRetries: 3,          // Maximum 3 retry attempts
);

// Exponential backoff is automatic:
// Attempt 1: immediate retry
// Attempt 2: 5 seconds delay
// Attempt 3: 10 seconds delay
// Attempt 4: 15 seconds delay

scheduler.add(retryableTask);

// Custom error handling job
class ErrorHandlingJob extends ScheduledJob {
  @override
  String get name => 'error_handler';

  @override
  Future<void> execute() async {
    try {
      await riskyOperation();
    } on NetworkException catch (e) {
      // Handle network errors specifically
      Khadem.logger.warning('Network error, will retry: \$e');
      rethrow;
    } on DatabaseException catch (e) {
      // Handle database errors
      Khadem.logger.error('Database error: \$e');
      // Don't retry for database errors
      throw PermanentFailureException('Database unavailable');
    } catch (e) {
      // Handle other errors
      Khadem.logger.error('Unexpected error: \$e');
      rethrow;
    }
  }
}`

const schedulerEngineApiCode = `class SchedulerEngine implements SchedulerEngineContract {
  // Core methods
  void add(ScheduledTask task)           // Add a new task
  void stop(String name)                 // Stop a specific task
  void stopAll()                         // Stop all tasks
  bool isRunning(String name)            // Check if task is running
  List<String> activeTasks()             // Get active task names
  void pause(String name)                // Pause a task
  void resume(String name)               // Resume a paused task
  Map<String, TaskStats> getStats()      // Get all task statistics

  // Utility methods
  ScheduledTask? getTask(String name)    // Get task by name
  List<String> getTaskNames()            // Get all task names
  bool hasTask(String name)              // Check if task exists
  int get taskCount                      // Get total task count
  void remove(String name)               // Remove a task
  void clear()                           // Remove all tasks
}`

const scheduledTaskApiCode = `class ScheduledTask {
  // Constructor
  ScheduledTask({
    required String name,              // Unique task name
    required Duration interval,        // Execution interval
    required ScheduledJob job,         // Job to execute
    String timeZone = 'UTC',           // Timezone (currently not used)
    bool retryOnFail = false,          // Retry on failure
    bool runOnce = false,              // Run only once
    int maxRetries = 3,                // Maximum retry attempts
  })

  // Properties
  final String name
  final Duration interval
  final ScheduledJob job
  final String timeZone
  final bool retryOnFail
  final bool runOnce
  final int maxRetries

  // Methods
  void start(Function(Duration) scheduleNext)    // Start the task
  void pause()                                   // Pause execution
  void resume(Function(Duration) scheduleNext)   // Resume execution
  Future<void> run(Function(Duration) scheduleNext) // Execute job
  void stop()                                    // Stop permanently
  TaskStats get stats                           // Get current statistics

  // Factory constructor
  factory ScheduledTask.fromConfig(Map<String, dynamic> config)
}`

const scheduledJobApiCode = `abstract class ScheduledJob {
  // Required property
  String get name;                    // Unique job identifier

  // Required method
  Future<void> execute();             // Business logic implementation
}

// Example implementation
class MyCustomJob extends ScheduledJob {
  @override
  String get name => 'my_custom_job';

  @override
  Future<void> execute() async {
    // Your custom logic here
    print('Custom job executed at \${DateTime.now()}');
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
