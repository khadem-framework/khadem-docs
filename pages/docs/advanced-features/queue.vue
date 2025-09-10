<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Queue System
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to use background jobs and queues for better performance
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic Jobs -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Creating Jobs
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Jobs are classes that can be queued and executed asynchronously.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Job Class
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/jobs/send_email.dart
import 'package:khadem/src/core/queue/job.dart';

class SendEmail extends Job {
  final String to;
  final String subject;
  final String body;

  SendEmail({
    required this.to,
    required this.subject,
    required this.body,
  });

  @override
  String get queue =&gt; 'emails'; // Optional: specify queue name

  @override
  Future&lt;void&gt; handle() async {
    // Send the email
    await Mail.to(to).send(Email(subject: subject, body: body));

    logger.info('Email sent to $to');
  }

  @override
  int get maxAttempts =&gt; 3; // Retry up to 3 times on failure

  @override
  Duration get timeout =&gt; Duration(seconds: 30); // Timeout after 30 seconds
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Dispatching Jobs
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/user_controller.dart
import 'package:khadem/src/core/queue/queue.dart';
import '../jobs/send_email.dart';

class UserController extends Controller {
  Future&lt;Response&gt; sendWelcomeEmail(Request request) async {
    final user = await User.find(request.input('user_id'));

    // Dispatch job immediately
    Queue.dispatch(SendEmail(
      to: user.email,
      subject: 'Welcome!',
      body: 'Welcome to our platform, \${user.name}!'
    ));

    return response.json({'message': 'Email queued successfully'});
  }

  Future&lt;Response&gt; sendNewsletter(Request request) async {
    final users = await User.where('subscribed', true).get();

    // Dispatch job with delay
    Queue.dispatch(
      SendNewsletter(users),
      delay: Duration(hours: 1)
    );

    return response.json({'message': 'Newsletter queued for tomorrow'});
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Job Serialization
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/jobs/process_order.dart
class ProcessOrder extends Job {
  final Order order;

  ProcessOrder(this.order);

  @override
  Future&lt;void&gt; handle() async {
    // Process payment
    await PaymentService.charge(order);

    // Update inventory
    for (final item in order.items) {
      await Inventory.decrement(item.productId, item.quantity);
    }

    // Send confirmation
    await Mail.to(order.customer.email).send(OrderConfirmation(order));
  }

  // Custom serialization for complex objects
  @override
  Map&lt;String, dynamic&gt; toJson() =&gt; {
    'order_id': order.id,
    'customer_id': order.customer.id,
    // Include only necessary data
  };

  static ProcessOrder fromJson(Map&lt;String, dynamic&gt; json) {
    return ProcessOrder(
      Order.find(json['order_id']),
    );
  }
}</code></pre>
            </div>
          </div>

          <!-- Queue Configuration -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Queue Configuration
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Configure different queue drivers and connections.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Queue Config
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// config/queue.dart
import 'package:khadem/src/core/queue/queue_config.dart';

class QueueConfig extends Config {
  @override
  Map&lt;String, dynamic&gt; get config =&gt; {
    'default': env('QUEUE_DRIVER', 'sync'),

    'connections': {
      'sync': {
        'driver': 'sync',
      },

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
        'block_for': null,
      },

      'sqs': {
        'driver': 'sqs',
        'key': env('AWS_ACCESS_KEY_ID'),
        'secret': env('AWS_SECRET_ACCESS_KEY'),
        'prefix': env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account-id'),
        'queue': env('SQS_QUEUE', 'your-queue-name'),
        'region': env('AWS_DEFAULT_REGION', 'us-east-1'),
      },
    },

    'failed': {
      'database': env('DB_CONNECTION', 'mysql'),
      'table': 'failed_jobs',
    },
  };
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Queue Service Provider
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/queue_service_provider.dart
import 'package:khadem/src/core/queue/queue_manager.dart';

class QueueServiceProvider extends ServiceProvider {
  @override
  void register() {
    app.singleton(QueueManager, () {
      return QueueManager(config('queue'));
    });
  }

  @override
  void boot() {
    // Register queue workers
    if (app.environment != 'testing') {
      Queue.work('emails', 2); // 2 workers for email queue
      Queue.work('default', 4); // 4 workers for default queue
    }
  }
}</code></pre>
            </div>
          </div>

          <!-- Advanced Job Features -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Advanced Job Features
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use advanced features like chaining, batching, and middleware.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Job Chaining
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/jobs/process_video.dart
class ProcessVideo extends Job {
  final Video video;

  ProcessVideo(this.video);

  @override
  Future&lt;void&gt; handle() async {
    // Process the video
    await VideoProcessor.convert(video, 'mp4');

    // Chain next job
    Queue.dispatch(
      GenerateThumbnail(video),
      delay: Duration(seconds: 10)
    ).then((_) {
      // After thumbnail is generated
      Queue.dispatch(SendNotification(video.user, 'Video processed'));
    });
  }
}

// Alternative: Using job chains
class VideoProcessingChain extends Job {
  final Video video;

  VideoProcessingChain(this.video);

  @override
  Future&lt;void&gt; handle() async {
    await VideoProcessor.convert(video, 'mp4');

    // Dispatch chain of jobs
    Queue.chain([
      GenerateThumbnail(video),
      SendNotification(video.user, 'Video processed'),
      UpdateVideoStatus(video, 'processed'),
    ]);
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Job Batching
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/jobs/send_bulk_emails.dart
class SendBulkEmails extends Job {
  final List&lt;User&gt; users;
  final String subject;
  final String template;

  SendBulkEmails(this.users, this.subject, this.template);

  @override
  Future&lt;void&gt; handle() async {
    final batch = Queue.batch();

    for (final user in users) {
      batch.add(SendEmail(
        to: user.email,
        subject: subject,
        body: template.replaceAll('{{name}}', user.name),
      ));
    }

    // Dispatch all emails as a batch
    await batch.dispatch();

    // Handle batch completion
    batch.then((results) {
      final successCount = results.where((r) =&gt; r.success).length;
      logger.info('Sent \$successCount/\${users.length} emails successfully');
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Job Middleware
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/middleware/rate_limit_middleware.dart
import 'package:khadem/src/core/queue/job_middleware.dart';

class RateLimitMiddleware implements JobMiddleware {
  final int maxAttempts;
  final Duration window;

  RateLimitMiddleware(this.maxAttempts, this.window);

  @override
  Future&lt;bool&gt; handle(Job job) async {
    final key = 'rate_limit:\${job.runtimeType}';

    final attempts = await Cache.get(key, 0);

    if (attempts &gt;= maxAttempts) {
      // Rate limit exceeded, retry later
      job.release(window);
      return false;
    }

    await Cache.put(key, attempts + 1, window);
    return true;
  }
}

// app/jobs/send_sms.dart
class SendSms extends Job {
  @override
  List&lt;JobMiddleware&gt; get middleware =&gt; [
    RateLimitMiddleware(10, Duration(minutes: 1)), // 10 SMS per minute
  ];

  @override
  Future&lt;void&gt; handle() async {
    await SmsService.send(phone, message);
  }
}</code></pre>
            </div>
          </div>

          <!-- Queue Workers -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Running Queue Workers
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Start workers to process queued jobs.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Starting Workers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Start a worker for the default queue
php artisan queue:work

// Start worker for specific queue
php artisan queue:work --queue=emails

// Start multiple workers
php artisan queue:work --queue=emails,notifications

// Start worker with custom options
php artisan queue:work --sleep=3 --tries=3 --timeout=90</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Worker Options
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>--queue=emails           # Process specific queue
--delay=3                 # Delay between jobs (seconds)
--memory=128              # Memory limit (MB)
--sleep=3                 # Sleep when no jobs available
--tries=3                 # Max attempts per job
--timeout=90              # Job timeout (seconds)
--max-jobs=1000           # Max jobs to process before restart
--max-time=3600           # Max time to run (seconds)</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Supervisor Configuration
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// supervisor config for queue workers
[program:khadem-queue-worker]
process_name=%(program_name)s_%(process_num)02d
command=php artisan queue:work --sleep=3 --tries=3
directory=/path/to/khadem
autostart=true
autorestart=true
numprocs=4
user=www-data
redirect_stderr=true
stdout_logfile=/var/log/khadem/worker.log</code></pre>
            </div>
          </div>

          <!-- Failed Jobs -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Handling Failed Jobs
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Manage and retry jobs that have failed.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Failed Job Table
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// database/migrations/create_failed_jobs_table.dart
import 'package:khadem/src/database/migrations/migration.dart';

class CreateFailedJobsTable extends Migration {
  @override
  void up() {
    schema.create('failed_jobs', (table) {
      table.id();
      table.string('uuid').unique();
      table.text('connection');
      table.text('queue');
      table.longText('payload');
      table.longText('exception');
      table.timestamp('failed_at').useCurrent();
    });
  }

  @override
  void down() {
    schema.dropIfExists('failed_jobs');
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Retrying Failed Jobs
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Retry all failed jobs
php artisan queue:retry all

// Retry specific job
php artisan queue:retry 5

// Retry jobs in specific queue
php artisan queue:retry --queue=emails

// Retry jobs that failed within last hour
php artisan queue:retry --range=1-10</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200 mb-2">
                Cleaning Failed Jobs
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Delete all failed jobs
php artisan queue:forget all

// Delete specific failed job
php artisan queue:forget 5

// List failed jobs
php artisan queue:failed

// Clear old failed jobs (older than 7 days)
php artisan queue:failed --prune=7</code></pre>
            </div>
          </div>

          <!-- Testing Queues -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing Queues
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your queued jobs and workers.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// tests/unit/jobs/send_email_test.dart
import 'package:test/test.dart';
import 'package:khadem/src/core/queue/queue.dart';
import 'package:khadem/src/testing/fakes/queue_fake.dart';
import '../../app/jobs/send_email.dart';

void main() {
  group('SendEmail Job', () {
    setUp(() {
      // Fake the queue system
      Queue.fake();
    });

    tearDown(() {
      Queue.restore();
    });

    test('dispatches email job', () async {
      // Dispatch the job
      Queue.dispatch(SendEmail(
        to: 'user@example.com',
        subject: 'Test',
        body: 'Test message'
      ));

      // Assert that the job was pushed to queue
      Queue.assertPushed(SendEmail, (job) {
        return job.to == 'user@example.com' &amp;&amp;
               job.subject == 'Test';
      });
    });

    test('job handles correctly', () async {
      final job = SendEmail(
        to: 'user@example.com',
        subject: 'Test',
        body: 'Test message'
      );

      // Mock the mail service
      Mail.fake();

      await job.handle();

      // Assert that mail was sent
      Mail.assertSent(Email, (mail) {
        return mail.to == 'user@example.com';
      });
    });

    test('job retries on failure', () async {
      final job = SendEmail(
        to: 'user@example.com',
        subject: 'Test',
        body: 'Test message'
      );

      // Mock mail service to always fail
      Mail.shouldFail();

      // This should throw and be retried
      expect(() async =&gt; await job.handle(), throwsException);

      // Assert job will be retried
      expect(job.attempts, lessThan(job.maxAttempts));
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
