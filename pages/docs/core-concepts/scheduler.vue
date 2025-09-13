<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {{ $t('scheduler.title') || 'Scheduler System' }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
        {{ $t('scheduler.description') || 'A powerful and flexible task scheduling system for Dart applications. Schedule jobs to run at specific intervals, handle retries, and monitor execution statistics.' }}
      </p>
    </div>

    <!-- Quick Start -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.quickStart.title') || 'Quick Start' }}
      </h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          {{ $t('scheduler.quickStart.installation') || 'Installation & Setup' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code>// In your main.dart or bootstrap file
import 'package:khadem/src/core/scheduler/scheduler_bootstrap.dart';

void main() async {
  // Initialize scheduler system
  startSchedulers();

  // Your app logic here...

  // Graceful shutdown
  ProcessSignal.sigint.watch().listen((_) {
    stopSchedulers();
    exit(0);
  });
}</code></pre>
        </div>
      </div>
    </section>

    <!-- Core Concepts -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.coreConcepts.title') || 'Core Concepts' }}
      </h2>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            {{ $t('scheduler.coreConcepts.scheduledTask') || 'ScheduledTask' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('scheduler.coreConcepts.scheduledTaskDesc') || 'Represents a single scheduled task with its configuration, execution logic, and state management.' }}
          </p>
          <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• {{ $t('scheduler.coreConcepts.taskName') || 'Unique task name for identification' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.executionInterval') || 'Time interval between executions' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.jobImplementation') || 'Job implementation to execute' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.retryLogic') || 'Automatic retry on failure' }}</li>
          </ul>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            {{ $t('scheduler.coreConcepts.scheduledJob') || 'ScheduledJob' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('scheduler.coreConcepts.scheduledJobDesc') || 'Interface for implementing the actual work that gets executed by scheduled tasks.' }}
          </p>
          <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• {{ $t('scheduler.coreConcepts.jobName') || 'Unique job identifier' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.executeMethod') || 'execute() method with business logic' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.asyncSupport') || 'Full async/await support' }}</li>
            <li>• {{ $t('scheduler.coreConcepts.errorHandling') || 'Built-in error handling' }}</li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 class="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          {{ $t('scheduler.coreConcepts.lifecycle') || 'Task Lifecycle' }}
        </h3>
        <div class="grid md:grid-cols-4 gap-4 text-sm">
          <div class="text-center">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <span class="text-green-600 dark:text-green-400 font-bold">1</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ $t('scheduler.coreConcepts.created') || 'Created' }}</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <span class="text-blue-600 dark:text-blue-400 font-bold">2</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ $t('scheduler.coreConcepts.scheduled') || 'Scheduled' }}</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <span class="text-purple-600 dark:text-purple-400 font-bold">3</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ $t('scheduler.coreConcepts.executing') || 'Executing' }}</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <span class="text-orange-600 dark:text-orange-400 font-bold">4</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ $t('scheduler.coreConcepts.completed') || 'Completed' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.api.title') || 'API Reference' }}
      </h2>

      <!-- SchedulerEngine -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.api.schedulerEngine') || 'SchedulerEngine' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>class SchedulerEngine implements SchedulerEngineContract {
  // Core methods
  void add(ScheduledTask task)
  void stop(String name)
  void stopAll()
  bool isRunning(String name)
  List&lt;String&gt; activeTasks()
  void pause(String name)
  void resume(String name)
  Map&lt;String, TaskStats&gt; getStats()

  // Utility methods
  ScheduledTask? getTask(String name)
  List&lt;String&gt; getTaskNames()
  bool hasTask(String name)
  int get taskCount
  void remove(String name)
  void clear()
}</code></pre>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ $t('scheduler.api.coreMethods') || 'Core Methods' }}</h4>
            <ul class="space-y-2 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">add(task)</code> - {{ $t('scheduler.api.addDesc') || 'Add a new scheduled task' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">stop(name)</code> - {{ $t('scheduler.api.stopDesc') || 'Stop a specific task' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">stopAll()</code> - {{ $t('scheduler.api.stopAllDesc') || 'Stop all running tasks' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">isRunning(name)</code> - {{ $t('scheduler.api.isRunningDesc') || 'Check if task is running' }}</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ $t('scheduler.api.controlMethods') || 'Control Methods' }}</h4>
            <ul class="space-y-2 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">pause(name)</code> - {{ $t('scheduler.api.pauseDesc') || 'Pause a task temporarily' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">resume(name)</code> - {{ $t('scheduler.api.resumeDesc') || 'Resume a paused task' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">getStats()</code> - {{ $t('scheduler.api.getStatsDesc') || 'Get execution statistics' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">activeTasks()</code> - {{ $t('scheduler.api.activeTasksDesc') || 'List active task names' }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ScheduledTask -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.api.scheduledTask') || 'ScheduledTask' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>class ScheduledTask {
  // Constructor
  ScheduledTask({
    required String name,
    required Duration interval,
    required ScheduledJob job,
    String timeZone = 'UTC',
    bool retryOnFail = false,
    bool runOnce = false,
    int maxRetries = 3,
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
  void start(Function(Duration) scheduleNext)
  void pause()
  void resume(Function(Duration) scheduleNext)
  Future&lt;void&gt; run(Function(Duration) scheduleNext)
  void stop()
  TaskStats get stats
}</code></pre>
        </div>
      </div>

      <!-- ScheduledJob -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.api.scheduledJob') || 'ScheduledJob' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>abstract class ScheduledJob {
  String get name;
  Future&lt;void&gt; execute();
}</code></pre>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ $t('scheduler.api.scheduledJobDesc') || 'Abstract base class for implementing scheduled jobs. Override the execute() method with your business logic.' }}
        </p>
      </div>

      <!-- TaskStats -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.api.taskStats') || 'TaskStats' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>class TaskStats {
  final String name;
  final DateTime? lastRun;
  final DateTime? nextRun;
  final int successCount;
  final int failureCount;
  final double averageExecutionTime;
  final TaskStatus status;

  TaskStats copyWith({...})
}</code></pre>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ $t('scheduler.api.taskStatsProperties') || 'Properties' }}</h4>
            <ul class="space-y-2 text-sm">
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">name</code> - {{ $t('scheduler.api.nameDesc') || 'Task name' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">lastRun</code> - {{ $t('scheduler.api.lastRunDesc') || 'Last execution time' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">nextRun</code> - {{ $t('scheduler.api.nextRunDesc') || 'Next scheduled run' }}</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">successCount</code> - {{ $t('scheduler.api.successCountDesc') || 'Successful executions' }}</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-3">{{ $t('scheduler.api.taskStatus') || 'TaskStatus Enum' }}</h4>
            <ul class="space-y-2 text-sm">
              <li><code class="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-green-800 dark:text-green-200">idle</code> - {{ $t('scheduler.api.idleDesc') || 'Task is not running' }}</li>
              <li><code class="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded text-blue-800 dark:text-blue-200">running</code> - {{ $t('scheduler.api.runningDesc') || 'Task is executing' }}</li>
              <li><code class="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200">paused</code> - {{ $t('scheduler.api.pausedDesc') || 'Task is paused' }}</li>
              <li><code class="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-red-800 dark:text-red-200">failed</code> - {{ $t('scheduler.api.failedDesc') || 'Task has failed' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Examples -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.examples.title') || 'Usage Examples' }}
      </h2>

      <!-- Basic Job Implementation -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.examples.basicJob') || '1. Basic Job Implementation' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>import 'package:khadem/khadem.dart';

class EmailNotificationJob extends ScheduledJob {
  @override
  String get name => 'email_notifications';

  @override
  Future&lt;void&gt; execute() async {
    try {
      // Your email sending logic here
      final pendingEmails = await Database.table('pending_emails')
          .where('sent', false)
          .get();

      for (final email in pendingEmails) {
        await sendEmail(email['to'], email['subject'], email['body']);
        await Database.table('pending_emails')
            .where('id', email['id'])
            .update({'sent': true, 'sent_at': DateTime.now()});
      }

      Khadem.logger.info('✅ Sent ${pendingEmails.length} emails');
    } catch (e) {
      Khadem.logger.error('❌ Email job failed: $e');
      rethrow; // Let scheduler handle retry logic
    }
  }
}</code></pre>
        </div>
      </div>

      <!-- Task Creation and Scheduling -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.examples.taskCreation') || '2. Task Creation and Scheduling' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>import 'package:khadem/khadem.dart';
import 'package:khadem/src/core/scheduler/core/scheduled_task.dart';

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

  // Create a cleanup task that runs daily
  final cleanupTask = ScheduledTask(
    name: 'cleanup_temp_files',
    interval: Duration(hours: 24),
    job: TempFileCleanupJob(),
    retryOnFail: false,
  );

  // Add tasks to scheduler
  scheduler.add(emailTask);
  scheduler.add(cleanupTask);

  // Start all tasks
  Khadem.logger.info('🚀 All scheduled tasks started');
}</code></pre>
        </div>
      </div>

      <!-- Configuration-based Tasks -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.examples.configTasks') || '3. Configuration-based Tasks' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>// config/app.json
{
  "scheduler": {
    "tasks": [
      {
        "name": "database_backup",
        "interval": 3600,
        "job": "backup",
        "retryOnFail": true,
        "maxRetries": 5,
        "runOnce": false
      },
      {
        "name": "cache_cleanup",
        "interval": 1800,
        "job": "ttl_cleaner",
        "cachePath": "storage/cache"
      }
    ]
  }
}

// In your bootstrap code
void main() {
  // This will automatically load and start tasks from config
  startSchedulers();
}</code></pre>
        </div>
      </div>

      <!-- Task Monitoring -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.examples.monitoring') || '4. Task Monitoring and Control' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
          <pre><code>import 'package:khadem/khadem.dart';

class TaskMonitor {
  final SchedulerEngine _scheduler;

  TaskMonitor(this._scheduler);

  void printTaskStatus() {
    final stats = _scheduler.getStats();

    print('\\n📊 Task Status Report:');
    print('=' * 50);

    for (final entry in stats.entries) {
      final taskStats = entry.value;
      print('\\n📋 Task: ${taskStats.name}');
      print('   Status: ${taskStats.status}');
      print('   Last Run: ${taskStats.lastRun ?? 'Never'}');
      print('   Next Run: ${taskStats.nextRun ?? 'Not scheduled'}');
      print('   Success Count: ${taskStats.successCount}');
      print('   Failure Count: ${taskStats.failureCount}');
      print('   Avg Execution Time: ${taskStats.averageExecutionTime.toStringAsFixed(2)}ms');
    }
  }

  void handleTaskFailure(String taskName) {
    final stats = _scheduler.getStats()[taskName];
    if (stats != null && stats.failureCount > 5) {
      Khadem.logger.warning('⚠️ Task $taskName has failed ${stats.failureCount} times');

      // Pause the task if it fails too many times
      _scheduler.pause(taskName);
      Khadem.logger.info('⏸️ Task $taskName paused due to excessive failures');
    }
  }
}</code></pre>
        </div>
      </div>
    </section>

    <!-- Built-in Jobs -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.builtIn.title') || 'Built-in Jobs' }}
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Ping Job -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            {{ $t('scheduler.builtIn.ping') || 'Ping Job' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('scheduler.builtIn.pingDesc') || 'A simple job that logs a ping message. Useful for testing the scheduler or keeping services alive.' }}
          </p>
          <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-3">
            <code>job: 'ping'</code>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ $t('scheduler.builtIn.pingUsage') || 'Use this job to verify scheduler is working or for heartbeat monitoring.' }}
          </p>
        </div>

        <!-- TTL Cache Cleaner -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            {{ $t('scheduler.builtIn.ttlCleaner') || 'TTL Cache Cleaner' }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('scheduler.builtIn.ttlCleanerDesc') || 'Automatically removes expired cache files based on TTL (Time To Live) values.' }}
          </p>
          <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-3">
            <code>job: 'ttl_cleaner'</code>
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <strong>{{ $t('scheduler.builtIn.config') || 'Configuration:' }}</strong>
            <ul class="mt-2 space-y-1">
              <li>• <code>cachePath</code>: {{ $t('scheduler.builtIn.cachePath') || 'Path to cache directory' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Configuration -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.config.title') || 'Configuration' }}
      </h2>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('scheduler.config.file') || 'Configuration File (config/app.json)' }}
        </h3>
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre><code>{
  "scheduler": {
    "tasks": [
      {
        "name": "example_task",
        "interval": 300,
        "job": "ping",
        "retryOnFail": true,
        "maxRetries": 3,
        "runOnce": false,
        "timezone": "UTC"
      }
    ]
  }
}</code></pre>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            {{ $t('scheduler.config.taskProperties') || 'Task Properties' }}
          </h3>
          <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li><strong>name:</strong> {{ $t('scheduler.config.nameDesc') || 'Unique identifier for the task' }}</li>
            <li><strong>interval:</strong> {{ $t('scheduler.config.intervalDesc') || 'Execution interval in seconds' }}</li>
            <li><strong>job:</strong> {{ $t('scheduler.config.jobDesc') || 'Name of the job to execute' }}</li>
            <li><strong>retryOnFail:</strong> {{ $t('scheduler.config.retryDesc') || 'Retry on failure (default: false)' }}</li>
            <li><strong>maxRetries:</strong> {{ $t('scheduler.config.maxRetriesDesc') || 'Maximum retry attempts (default: 3)' }}</li>
            <li><strong>runOnce:</strong> {{ $t('scheduler.config.runOnceDesc') || 'Run only once (default: false)' }}</li>
            <li><strong>timezone:</strong> {{ $t('scheduler.config.timezoneDesc') || 'Timezone for execution (default: UTC)' }}</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
            {{ $t('scheduler.config.customJobs') || 'Custom Job Registration' }}
          </h3>
          <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-3">
            <pre><code>// Register custom job
SchedulerJobRegistry.register(
  JobDefinition(
    name: 'my_custom_job',
    factory: (config) => MyCustomJob(config),
  ),
);</code></pre>
          </div>
          <p class="text-sm text-green-800 dark:text-green-200">
            {{ $t('scheduler.config.customJobsDesc') || 'Register custom jobs before calling startSchedulers()' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.bestPractices.title') || 'Best Practices' }}
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-6">
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
              ✅ {{ $t('scheduler.bestPractices.do') || 'Do' }}
            </h3>
            <ul class="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>• {{ $t('scheduler.bestPractices.useDescriptiveNames') || 'Use descriptive task names' }}</li>
              <li>• {{ $t('scheduler.bestPractices.handleErrors') || 'Handle errors gracefully in jobs' }}</li>
              <li>• {{ $t('scheduler.bestPractices.monitorTasks') || 'Monitor task execution and failures' }}</li>
              <li>• {{ $t('scheduler.bestPractices.useConfig') || 'Use configuration files for task definitions' }}</li>
              <li>• {{ $t('scheduler.bestPractices.keepJobsSimple') || 'Keep job logic simple and focused' }}</li>
              <li>• {{ $t('scheduler.bestPractices.logImportant') || 'Log important events and errors' }}</li>
            </ul>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              ℹ️ {{ $t('scheduler.bestPractices.considerations') || 'Performance Considerations' }}
            </h3>
            <ul class="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• {{ $t('scheduler.bestPractices.intervalChoice') || 'Choose appropriate intervals' }}</li>
              <li>• {{ $t('scheduler.bestPractices.resourceUsage') || 'Consider resource usage of jobs' }}</li>
              <li>• {{ $t('scheduler.bestPractices.concurrentTasks') || 'Be aware of concurrent task execution' }}</li>
              <li>• {{ $t('scheduler.bestPractices.memoryLeaks') || 'Avoid memory leaks in long-running jobs' }}</li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
              ❌ {{ $t('scheduler.bestPractices.dont') || "Don't" }}
            </h3>
            <ul class="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>• {{ $t('scheduler.bestPractices.blockingOperations') || "Don't perform blocking operations" }}</li>
              <li>• {{ $t('scheduler.bestPractices.infiniteLoops') || "Don't create infinite loops" }}</li>
              <li>• {{ $t('scheduler.bestPractices.hardcodedValues') || "Don't hardcode configuration values" }}</li>
              <li>• {{ $t('scheduler.bestPractices.ignoreErrors') || "Don't ignore errors silently" }}</li>
              <li>• {{ $t('scheduler.bestPractices.longRunning') || "Don't make jobs unnecessarily long" }}</li>
              <li>• {{ $t('scheduler.bestPractices.sharedState') || "Don't rely on shared mutable state" }}</li>
            </ul>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              ⚠️ {{ $t('scheduler.bestPractices.errorHandling') || 'Error Handling' }}
            </h3>
            <ul class="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
              <li>• {{ $t('scheduler.bestPractices.retryLogic') || 'Implement proper retry logic' }}</li>
              <li>• {{ $t('scheduler.bestPractices.failureThresholds') || 'Set reasonable failure thresholds' }}</li>
              <li>• {{ $t('scheduler.bestPractices.gracefulDegradation') || 'Plan for graceful degradation' }}</li>
              <li>• {{ $t('scheduler.bestPractices.alerts') || 'Set up alerts for critical failures' }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        {{ $t('scheduler.troubleshooting.title') || 'Troubleshooting' }}
      </h2>

      <div class="space-y-6">
        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
            {{ $t('scheduler.troubleshooting.commonIssues') || 'Common Issues' }}
          </h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-red-800 dark:text-red-200">{{ $t('scheduler.troubleshooting.taskNotRunning') || 'Task Not Running' }}</h4>
              <ul class="text-sm text-red-700 dark:text-red-300 mt-2 space-y-1">
                <li>• {{ $t('scheduler.troubleshooting.checkTaskName') || 'Check if task name is unique' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.verifyJob') || 'Verify job is properly registered' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.checkLogs') || 'Check application logs for errors' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.validateConfig') || 'Validate configuration syntax' }}</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-red-800 dark:text-red-200">{{ $t('scheduler.troubleshooting.memoryIssues') || 'Memory Issues' }}</h4>
              <ul class="text-sm text-red-700 dark:text-red-300 mt-2 space-y-1">
                <li>• {{ $t('scheduler.troubleshooting.monitorResources') || 'Monitor resource usage' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.limitConcurrency') || 'Limit concurrent task execution' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.cleanupResources') || 'Ensure proper resource cleanup' }}</li>
                <li>• {{ $t('scheduler.troubleshooting.profileMemory') || 'Profile memory usage patterns' }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            {{ $t('scheduler.troubleshooting.debugging') || 'Debugging Tips' }}
          </h3>
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
            <pre><code>// Enable detailed logging
Khadem.logger.level = Level.DEBUG;

// Check task status
final stats = scheduler.getStats();
stats.forEach((name, stat) {
  print('Task: $name, Status: ${stat.status}, Last Run: ${stat.lastRun}');
});

// Monitor active tasks
print('Active tasks: ${scheduler.activeTasks()}');

// Test job execution manually
final job = MyJob();
await job.execute();</code></pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Scheduler System - Khadem Framework',
  meta: [
    {
      name: 'description',
      content: 'Learn how to use Khadem\'s powerful task scheduling system for background jobs, cron-like functionality, and automated task execution.'
    }
  ]
})

// Table of contents for the page
const tableOfContents = [
  { text: 'Quick Start', id: 'quick-start', level: 2 },
  { text: 'Core Concepts', id: 'core-concepts', level: 2 },
  { text: 'API Reference', id: 'api-reference', level: 2 },
  { text: 'Usage Examples', id: 'usage-examples', level: 2 },
  { text: 'Built-in Jobs', id: 'built-in-jobs', level: 2 },
  { text: 'Configuration', id: 'configuration', level: 2 },
  { text: 'Best Practices', id: 'best-practices', level: 2 },
  { text: 'Troubleshooting', id: 'troubleshooting', level: 2 }
]
</script>
