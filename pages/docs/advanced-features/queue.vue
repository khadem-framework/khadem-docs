<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Queue System</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Process time-consuming tasks asynchronously in the background with Khadem's flexible queue system. 
        Support for multiple storage backends, automatic retries, delayed execution, and comprehensive monitoring 
        keeps your application responsive while handling heavy workloads reliably.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Background Processing</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Multiple Drivers</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Auto-Retry</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Job Monitoring</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">Delayed Execution</span>
        <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">Scalable</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Introduction</h2>
      
      <div class="prose dark:prose-invert max-w-none">
        <p>
          The queue system allows you to defer time-consuming tasks—like sending emails, processing uploads, generating reports, 
          or calling external APIs—to be executed later in the background. This keeps your application responsive and improves 
          user experience by not making them wait for slow operations to complete.
        </p>
        
        <h3 class="text-xl font-semibold mt-6 mb-3">Why Use Queues?</h3>
        <ul class="space-y-2">
          <li><strong>Improved Response Times:</strong> Return responses immediately while processing work in the background</li>
          <li><strong>Better Resource Management:</strong> Control concurrency and prevent overwhelming your system</li>
          <li><strong>Reliability:</strong> Automatic retry logic handles transient failures (network issues, rate limits, etc.)</li>
          <li><strong>Scheduling:</strong> Delay job execution to a specific time or after a duration</li>
          <li><strong>Isolation:</strong> Failed jobs don't affect other jobs or your main application</li>
          <li><strong>Scalability:</strong> Easily scale by adding more worker processes</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">How It Works</h3>
        <ol class="space-y-2">
          <li><strong>Create a Job:</strong> Extend <code>QueueJob</code> and implement the <code>handle()</code> method</li>
          <li><strong>Dispatch the Job:</strong> Call <code>queueManager.dispatch(job)</code> to add it to the queue</li>
          <li><strong>Worker Processes Jobs:</strong> A worker continuously fetches and executes jobs from the queue</li>
          <li><strong>Job Execution:</strong> The job's <code>handle()</code> method runs with automatic retry on failure</li>
        </ol>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Getting started with queues is simple: create a job class, dispatch it, and start a worker. 
          The queue manager handles all the complexity of job storage, retrieval, and execution. No job registration required!
        </p>
      </div>

      <CodeBlock
        :code="basicUsageCode"
        language="dart"
        title="Complete Queue Example"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Understanding the Flow</h4>
        <div class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <ol class="list-decimal list-inside space-y-2 ml-2">
            <li><strong>Initialize:</strong> Create a <code>QueueManager</code> and optionally call <code>loadFromConfig()</code> to load drivers from configuration</li>
            <li><strong>Define Jobs:</strong> Create job classes that extend <code>QueueJob</code> - no registration needed!</li>
            <li><strong>Dispatch:</strong> Call <code>queueManager.dispatch(job)</code> to add jobs to the queue</li>
            <li><strong>Start Worker:</strong> Call <code>startWorker()</code> to begin processing jobs in the background</li>
          </ol>
          <p class="mt-3">
            <strong>Key Difference from Events:</strong> Queues are <em>persistent</em> and guarantee execution. Jobs survive application restarts 
            (with file, database, or Redis drivers) and are executed exactly once, even if the worker crashes mid-execution.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Creating Jobs</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Jobs are simple classes that extend <code>QueueJob</code> and implement the <code>handle()</code> method. 
          The <code>handle()</code> method contains your job's logic—sending an email, processing a file, updating records, etc. 
          You can override various properties to customize retry behavior, timeouts, and display names.
        </p>
      </div>

      <CodeBlock
        :code="jobCreationCode"
        language="dart"
        title="Job Class Examples"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">QueueJob Properties</h4>
        <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
          <div>
            <strong>handle()</strong> - Required
            <p class="ml-4 text-xs mt-1">The main method that contains your job logic. This is called when the worker processes the job.</p>
          </div>
          <div>
            <strong>displayName</strong> - Optional (defaults to class name)
            <p class="ml-4 text-xs mt-1">Human-readable name for logging and debugging. Shown in worker callbacks and metrics.</p>
          </div>
          <div>
            <strong>maxRetries</strong> - Optional (defaults to 3)
            <p class="ml-4 text-xs mt-1">Number of times to retry the job if it fails. Set to 0 to disable retries.</p>
          </div>
          <div>
            <strong>retryDelay</strong> - Optional (defaults to 30 seconds)
            <p class="ml-4 text-xs mt-1">How long to wait before retrying a failed job. Useful for implementing exponential backoff.</p>
          </div>
          <div>
            <strong>shouldRetry</strong> - Optional (defaults to true)
            <p class="ml-4 text-xs mt-1">Whether this job should be retried on failure. Set to false for one-shot jobs.</p>
          </div>
          <div>
            <strong>timeout</strong> - Optional (defaults to null/no timeout)
            <p class="ml-4 text-xs mt-1">Maximum execution time. Job will be killed if it exceeds this duration.</p>
          </div>
          <div>
            <strong>queue</strong> - Optional (defaults to 'default')
            <p class="ml-4 text-xs mt-1">Queue name for this job. Use different queues to prioritize different job types.</p>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important: Job Design Principles</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 ml-2">
          <li>• <strong>Idempotent:</strong> Jobs should produce the same result if run multiple times (in case of retry)</li>
          <li>• <strong>Self-Contained:</strong> Jobs should have all the data they need passed to the constructor</li>
          <li>• <strong>Fast Failing:</strong> Detect errors early and throw exceptions to trigger retries</li>
          <li>• <strong>Atomic:</strong> Either complete fully or fail fully - avoid partial states</li>
          <li>• <strong>Logged:</strong> Include logging to track progress and diagnose failures</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Queue Drivers</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Khadem supports multiple queue drivers, each optimized for different use cases. The driver determines how and where 
          jobs are stored. You can easily switch drivers by changing configuration—your job code stays exactly the same.
        </p>
      </div>

      <div class="space-y-4">
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">💾 Memory Driver</h3>
          <p class="text-sm text-blue-800 dark:text-blue-300 mb-3">
            Stores jobs in memory for blazing-fast performance. Perfect for development and testing, but jobs are lost on application restart. 
            Use this when you don't need persistence or are developing locally.
          </p>
          <CodeBlock
            :code="memoryDriverCode"
            language="dart"
            title="Memory Queue Configuration"
          />
          <div class="mt-3 text-sm text-blue-700 dark:text-blue-300">
            <strong>Use When:</strong> Development, testing, temporary jobs, high-performance scenarios where persistence isn't required
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">📁 File Driver</h3>
          <p class="text-sm text-green-800 dark:text-green-300 mb-3">
            Persists jobs to disk in JSON format. Jobs survive application restarts, making this suitable for production use on single servers. 
            The driver handles file locking and atomic writes to prevent corruption.
          </p>
          <CodeBlock
            :code="fileDriverCode"
            language="dart"
            title="File Queue Configuration"
          />
          <div class="mt-3 text-sm text-green-700 dark:text-green-300">
            <strong>Use When:</strong> Production (single server), reliable persistence needed, simple deployments without external dependencies
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-2">⚡ Sync Driver</h3>
          <p class="text-sm text-purple-800 dark:text-purple-300 mb-3">
            Executes jobs immediately in the current process without any queuing. Useful for testing or when you want queue-like APIs 
            but need synchronous execution. This is essentially a no-op driver that just calls <code>handle()</code> immediately.
          </p>
          <CodeBlock
            :code="syncDriverCode"
            language="dart"
            title="Sync Queue Configuration"
          />
          <div class="mt-3 text-sm text-purple-700 dark:text-purple-300">
            <strong>Use When:</strong> Testing, debugging, simple synchronous operations, or temporarily disabling background processing
          </div>
        </div>

        <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-5 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">🚀 Redis Driver</h3>
          <p class="text-sm text-red-800 dark:text-red-300 mb-3">
            High-performance Redis-backed queue driver perfect for production environments with multiple workers 
            or servers. Provides persistence, atomic operations, and excellent scalability. Requires Redis server 
            (version 5.0+) running locally or remotely.
          </p>
          <CodeBlock
            :code="redisDriverCode"
            language="dart"
            title="Redis Queue Configuration"
          />
          <div class="mt-3 text-sm text-red-700 dark:text-red-300">
            <strong>Use When:</strong> High-scale production, multiple workers, distributed systems, need for persistence with high performance
          </div>
        </div>
      </div>

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800 mt-6">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-3">📊 Driver Comparison</h4>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b-2 border-indigo-300 dark:border-indigo-700">
                <th class="text-left py-2 px-3 font-semibold">Driver</th>
                <th class="text-left py-2 px-3">Persistence</th>
                <th class="text-left py-2 px-3">Performance</th>
                <th class="text-left py-2 px-3">Scalability</th>
                <th class="text-left py-2 px-3">Use Case</th>
              </tr>
            </thead>
            <tbody class="text-indigo-700 dark:text-indigo-300">
              <tr class="border-b border-indigo-200 dark:border-indigo-800">
                <td class="py-2 px-3"><strong>Memory</strong></td>
                <td class="py-2 px-3">❌ None</td>
                <td class="py-2 px-3">⚡ Fastest</td>
                <td class="py-2 px-3">Single Process</td>
                <td class="py-2 px-3">Development, Testing</td>
              </tr>
              <tr class="border-b border-indigo-200 dark:border-indigo-800">
                <td class="py-2 px-3"><strong>File</strong></td>
                <td class="py-2 px-3">✅ Disk</td>
                <td class="py-2 px-3">🟢 Fast</td>
                <td class="py-2 px-3">Single Server</td>
                <td class="py-2 px-3">Production (Small-Medium)</td>
              </tr>
              <tr class="border-b border-indigo-200 dark:border-indigo-800">
                <td class="py-2 px-3"><strong>Sync</strong></td>
                <td class="py-2 px-3">N/A</td>
                <td class="py-2 px-3">⚡ Immediate</td>
                <td class="py-2 px-3">N/A</td>
                <td class="py-2 px-3">Testing, Debugging</td>
              </tr>
              <tr>
                <td class="py-2 px-3"><strong>Redis</strong></td>
                <td class="py-2 px-3">✅ In-Memory DB</td>
                <td class="py-2 px-3">🚀 Very Fast</td>
                <td class="py-2 px-3">Multi-Server</td>
                <td class="py-2 px-3">Production (High Scale)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 mt-3">
          <strong>💡 Recommendation:</strong> Start with <strong>Memory</strong> for development and testing. 
          Use <strong>File</strong> driver for production on single servers with moderate load. 
          Switch to <strong>Redis</strong> when you need to scale horizontally with multiple worker servers 
          or require high-performance persistent queuing with atomic operations.
        </p>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Configuration</h2>

      <div class="prose dark:prose-invert max-w-none mb-4">
        <p>
          Queue configuration is flexible and supports multiple approaches. You can configure drivers programmatically by registering them, 
          or use configuration files (JSON/YAML) that are loaded automatically. The <code>QueueManager</code> constructor accepts a 
          <code>ConfigInterface</code> implementation that defines your queue settings.
        </p>
      </div>

      <CodeBlock
        :code="configUsageCode"
        language="dart"
        title="Queue Configuration Options"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Configuration Options</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• <code>default</code> - Default driver name</li>
          <li>• <code>drivers</code> - Map of driver configurations</li>
          <li>• <code>driver</code> - Driver type (memory, file, sync, redis)</li>
          <li>• <code>path</code> - Storage path for file driver</li>
          <li>• <code>host</code> - Redis host for redis driver</li>
          <li>• <code>port</code> - Redis port for redis driver</li>
          <li>• <code>track_metrics</code> - Enable metrics tracking (default: true)</li>
          <li>• <code>use_dlq</code> - Enable dead letter queue (default: true)</li>
          <li>• <code>max_retries</code> - Maximum retry attempts (default: 3)</li>
          <li>• <code>timeout</code> - Job timeout in seconds (optional)</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Delayed Jobs</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Sometimes you need to schedule jobs for future execution rather than processing them immediately. 
          Delayed jobs allow you to defer execution by a specific duration, making them perfect for scheduling 
          tasks like sending reminder emails, processing scheduled reports, or implementing retry strategies 
          with exponential backoff.
        </p>
      </div>

      <CodeBlock
        :code="delayedJobsCode"
        language="dart"
        title="Scheduling Jobs with Delays"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">⏰ Common Delay Patterns</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• <code>Duration(seconds: 30)</code> - Quick retry delays</li>
            <li>• <code>Duration(minutes: 5)</code> - Short-term scheduling</li>
            <li>• <code>Duration(hours: 1)</code> - Hourly tasks</li>
            <li>• <code>Duration(days: 1)</code> - Daily reports/cleanup</li>
            <li>• <code>null</code> - Immediate processing (default)</li>
          </ul>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">💡 Use Cases</h4>
          <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
            <li>• <strong>Reminder Emails</strong>: Send 24h before event</li>
            <li>• <strong>Retry Logic</strong>: Exponential backoff delays</li>
            <li>• <strong>Scheduled Reports</strong>: Generate at specific times</li>
            <li>• <strong>Rate Limiting</strong>: Spread API calls over time</li>
            <li>• <strong>Trial Expiry</strong>: Check status after trial period</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>How Delays Work:</strong> When you dispatch a job with a delay, the queue stores the job 
          along with its scheduled execution time. Workers check for jobs that are ready to execute (where 
          the scheduled time has passed) before processing them. This ensures jobs run at the right time 
          even if workers restart.
        </p>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Queue Workers</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Workers are background processes that continuously poll the queue and execute jobs. They run 
          in a loop, checking for pending jobs, executing them, handling errors, and managing retries. 
          A well-configured worker is essential for a healthy queue system, balancing throughput with 
          resource usage while providing visibility into job execution.
        </p>
      </div>

      <CodeBlock
        :code="workerUsageCode"
        language="dart"
        title="Starting Queue Workers"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
          <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">⚙️ Configuration Options</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-1">
            <li>• <code>maxJobs</code> - Limit jobs before stopping (null = infinite)</li>
            <li>• <code>delay</code> - Pause between jobs (prevents CPU overload)</li>
            <li>• <code>timeout</code> - Maximum worker runtime (null = no limit)</li>
            <li>• <code>runInBackground</code> - Non-blocking execution</li>
            <li>• <code>onJobStart</code> - Called when job begins</li>
            <li>• <code>onJobComplete</code> - Called on successful completion</li>
            <li>• <code>onJobError</code> - Called when job fails</li>
            <li>• <code>onError</code> - Called for worker-level errors</li>
          </ul>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-medium text-emerald-800 dark:text-emerald-200 mb-2">🎯 Worker Strategies</h4>
          <ul class="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
            <li>• <strong>Development</strong>: 2s delay, verbose callbacks</li>
            <li>• <strong>Production</strong>: 500ms delay, monitoring hooks</li>
            <li>• <strong>Batch Processing</strong>: No delay, max jobs limit</li>
            <li>• <strong>Long-Running</strong>: Background, no timeout</li>
            <li>• <strong>Testing</strong>: Sync execution, immediate feedback</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>Worker Lifecycle:</strong> Workers continuously check the queue → fetch next job → 
          execute job's <code>handle()</code> method → handle success/failure → apply delay → repeat. 
          If a job fails and has remaining retries, the worker automatically requeues it. Workers gracefully 
          shut down when reaching <code>maxJobs</code>, hitting the <code>timeout</code>, or encountering 
          critical errors.
        </p>
      </div>

      <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
        <h4 class="font-medium text-amber-800 dark:text-amber-200 mb-2">⚠️ Important Notes</h4>
        <ul class="text-sm text-amber-700 dark:text-amber-300 space-y-1">
          <li>• Always run at least one worker in production, or jobs will never execute</li>
          <li>• Use <code>runInBackground: true</code> for production to avoid blocking</li>
          <li>• Set appropriate <code>delay</code> to balance throughput and CPU usage</li>
          <li>• Implement <code>onJobError</code> for monitoring and alerting</li>
          <li>• For critical jobs, consider running multiple workers for redundancy</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Batch Processing</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Batch processing allows you to queue multiple jobs at once or create single jobs that process 
          multiple items. This approach is more efficient than creating individual jobs for each item, 
          reducing overhead and improving throughput. You can either dispatch multiple jobs in one operation 
          or design jobs that handle multiple items internally.
        </p>
      </div>

      <CodeBlock
        :code="batchProcessingCode"
        language="dart"
        title="Processing Multiple Jobs"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
          <h4 class="font-medium text-pink-800 dark:text-pink-200 mb-2">✨ Batch Benefits</h4>
          <ul class="text-sm text-pink-700 dark:text-pink-300 space-y-1">
            <li>• <strong>Efficiency</strong>: Fewer queue operations</li>
            <li>• <strong>Resource Sharing</strong>: Reuse connections/contexts</li>
            <li>• <strong>Reduced Overhead</strong>: Less serialization/deserialization</li>
            <li>• <strong>Better Throughput</strong>: Process more items faster</li>
            <li>• <strong>Atomicity</strong>: Related operations stay together</li>
          </ul>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border border-rose-200 dark:border-rose-800">
          <h4 class="font-medium text-rose-800 dark:text-rose-200 mb-2">📋 When to Use Batching</h4>
          <ul class="text-sm text-rose-700 dark:text-rose-300 space-y-1">
            <li>• Sending emails to multiple recipients</li>
            <li>• Importing data from CSV/Excel files</li>
            <li>• Bulk updating database records</li>
            <li>• Processing multiple payment transactions</li>
            <li>• Generating multiple reports at once</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>Choosing an Approach:</strong> Use <code>dispatchBatch()</code> when you have multiple 
          independent jobs of different types. Use a single bulk job (like <code>BulkEmailJob</code>) 
          when processing many similar items that can share resources (database connections, API clients). 
          Both approaches work, but bulk jobs are generally more efficient for large datasets.
        </p>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Best Practices</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <li>
            <strong>Chunk Large Batches</strong>: Split 10,000 emails into 10 jobs of 1,000 emails each 
            rather than one massive job
          </li>
          <li>
            <strong>Handle Partial Failures</strong>: Use try-catch within loops so one failure doesn't 
            stop the entire batch
          </li>
          <li>
            <strong>Progress Tracking</strong>: Log progress regularly in batch jobs for visibility
          </li>
          <li>
            <strong>Resource Limits</strong>: Be mindful of memory when processing large batches
          </li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Monitoring and Metrics</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Understanding your queue's health and performance is crucial for production systems. The queue 
          system tracks comprehensive metrics about job execution, success rates, and processing times. 
          These metrics help you identify bottlenecks, detect failures, and optimize performance. Regular 
          monitoring ensures your background jobs run smoothly and alerts you to problems before they 
          impact users.
        </p>
      </div>

      <CodeBlock
        :code="monitoringCode"
        language="dart"
        title="Queue Monitoring and Metrics"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">📊 Available Metrics</h4>
          <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
            <li>• <code>driver_name</code> - Name of the queue driver</li>
            <li>• <code>queue_depth</code> - Total jobs in queue</li>
            <li>• <code>processing_count</code> - Jobs currently being processed</li>
            <li>• <code>pending_count</code> - Jobs waiting to be processed</li>
            <li>• <code>ready_jobs</code> - Jobs ready for immediate execution</li>
            <li>• <code>delayed_jobs</code> - Jobs scheduled for later</li>
            <li>• <code>jobs_queued</code> - Total jobs ever queued</li>
            <li>• <code>jobs_completed</code> - Total successful jobs</li>
            <li>• <code>jobs_failed</code> - Total failed jobs</li>
            <li>• <code>success_rate</code> - Success percentage (0.0-1.0)</li>
            <li>• <code>jobs_by_type</code> - Map of job counts by type</li>
          </ul>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <h4 class="font-medium text-amber-800 dark:text-amber-200 mb-2">🚨 What to Monitor</h4>
          <ul class="text-sm text-amber-700 dark:text-amber-300 space-y-1">
            <li>• <strong>Low Success Rate</strong>: &lt; 90% indicates issues</li>
            <li>• <strong>Growing Queue</strong>: Jobs queuing faster than processing</li>
            <li>• <strong>Large Queue Depth</strong>: Over 100 jobs backed up</li>
            <li>• <strong>Stuck Jobs</strong>: <code>processing_count</code> not changing</li>
            <li>• <strong>No Activity</strong>: Zero completed jobs (worker down?)</li>
            <li>• <strong>Dead Letter Queue</strong>: Check for permanently failed jobs</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>Monitoring Strategy:</strong> Set up periodic checks (every 5-15 minutes) to review 
          statistics from <code>driver.getStats()</code>. Look for anomalies like sudden spikes in failures, 
          increasing queue depth, or low success rates. Integrate with alerting systems (email, Slack, PagerDuty) 
          to notify you of critical issues. Track trends over time to identify patterns and plan capacity upgrades.
        </p>
      </div>

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 mt-4">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">💡 Monitoring Tips</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Use <code>Timer.periodic</code> for automated health checks</li>
          <li>• Access metrics via <code>await queueManager.driver.getStats()</code></li>
          <li>• Set up alerts for success rates below acceptable thresholds</li>
          <li>• Export metrics to external systems (Prometheus, Datadog, CloudWatch)</li>
          <li>• Create dashboards visualizing key metrics over time</li>
          <li>• Enable <code>track_metrics</code> in driver configuration</li>
          <li>• Monitor dead letter queue for permanently failed jobs</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling and Retries</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Jobs can fail for many reasons: network timeouts, external service outages, temporary resource 
          constraints, or unexpected data. A robust queue system must handle failures gracefully, retry 
          when appropriate, and prevent cascading failures. Khadem's queue provides automatic retry logic 
          with configurable limits, comprehensive error tracking, and multiple levels of error handling 
          to keep your system resilient.
        </p>
      </div>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Job Error Handling and Retry Logic"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-medium text-cyan-800 dark:text-cyan-200 mb-2">🔄 Automatic Retry Behavior</h4>
          <ul class="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
            <li>• Jobs retry automatically when they throw exceptions</li>
            <li>• Each job defines <code>maxRetries</code> (default: 3)</li>
            <li>• Retry count tracked across worker restarts (persistent drivers)</li>
            <li>• Failed jobs logged but don't crash the worker</li>
            <li>• After max retries, job moves to failed state</li>
            <li>• Exponential backoff recommended for retries</li>
          </ul>
        </div>

        <div class="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg border border-sky-200 dark:border-sky-800">
          <h4 class="font-medium text-sky-800 dark:text-sky-200 mb-2">🎯 Error Handling Levels</h4>
          <ul class="text-sm text-sky-700 dark:text-sky-300 space-y-1">
            <li>
              <strong>Job Level</strong>: Try-catch in <code>handle()</code> method
            </li>
            <li>
              <strong>Worker Level</strong>: <code>onJobError</code> callback
            </li>
            <li>
              <strong>System Level</strong>: <code>onError</code> for worker crashes
            </li>
            <li>
              <strong>Monitoring</strong>: External logging/alerting systems
            </li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>Error Handling Flow:</strong> When a job throws an exception during <code>handle()</code>, 
          the worker catches it, increments the retry counter, and checks if retries remain. If yes, the 
          job is requeued for another attempt. If <code>maxRetries</code> is exhausted, the job enters the 
          failed state and the <code>onJobError</code> callback is invoked. The worker continues processing 
          other jobs—one failed job doesn't stop the entire queue.
        </p>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mt-4">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">⚠️ Error Handling Best Practices</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-2">
          <li>
            <strong>Idempotent Jobs</strong>: Design jobs that can be safely retried without side effects
          </li>
          <li>
            <strong>Explicit Logging</strong>: Log errors with context (job ID, attempt number, payload)
          </li>
          <li>
            <strong>Graceful Degradation</strong>: Catch exceptions and handle them appropriately
          </li>
          <li>
            <strong>External Monitoring</strong>: Send critical failures to alerting systems
          </li>
          <li>
            <strong>Set Appropriate Limits</strong>: Don't retry forever—know when to give up
          </li>
          <li>
            <strong>Distinguish Errors</strong>: Permanent failures (bad data) vs temporary (network timeout)
          </li>
        </ul>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ When to Retry vs When to Fail</h4>
        <div class="text-sm text-green-700 dark:text-green-300 space-y-2">
          <p><strong>✅ Safe to Retry:</strong></p>
          <ul class="ml-4 space-y-1">
            <li>• Network timeouts or connection errors</li>
            <li>• External service temporarily unavailable (503 errors)</li>
            <li>• Rate limit exceeded (429 errors)</li>
            <li>• Database deadlocks or lock timeouts</li>
            <li>• Temporary resource constraints (memory, file handles)</li>
          </ul>
          <p class="mt-3"><strong>❌ Don't Retry:</strong></p>
          <ul class="ml-4 space-y-1">
            <li>• Invalid data or validation errors (400, 422)</li>
            <li>• Authentication failures (401, 403)</li>
            <li>• Resource not found (404)</li>
            <li>• Business logic violations</li>
            <li>• Permanent external service errors (410 Gone)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Real-World Examples</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Let's explore practical examples of how to use the queue system in real applications. These 
          examples demonstrate common patterns like email processing, data imports, scheduled tasks, 
          and more. Each example shows complete job implementation with proper error handling, logging, 
          and best practices.
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <div class="flex items-center mb-3">
            <span class="text-2xl mr-2">📧</span>
            <h4 class="font-semibold text-lg">Email Processing</h4>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Send welcome emails to new users and newsletters to subscribers. Emails are processed in the 
            background, so user registration is fast. Failed emails are retried automatically, and the 
            system tracks delivery status.
          </p>
          <CodeBlock
            :code="emailExampleCode"
            language="dart"
            title="Background Email Processing"
          />
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <div class="flex items-center mb-3">
            <span class="text-2xl mr-2">📊</span>
            <h4 class="font-semibold text-lg">Data Processing</h4>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Import large CSV files or process bulk data updates. These operations can take minutes or hours, 
            so running them in the background prevents blocking the main application. Progress is tracked 
            and logged, with partial failure handling to ensure maximum data is processed.
          </p>
          <CodeBlock
            :code="dataProcessingCode"
            language="dart"
            title="Bulk Data Processing"
          />
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <div class="flex items-center mb-3">
            <span class="text-2xl mr-2">⏰</span>
            <h4 class="font-semibold text-lg">Scheduled Tasks</h4>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Schedule tasks for future execution like reminder emails, report generation, or cleanup operations. 
            Use delayed jobs to run tasks at specific times. These examples show how to handle recurring tasks 
            and time-based operations.
          </p>
          <CodeBlock
            :code="scheduledTasksCode"
            language="dart"
            title="Scheduled Background Tasks"
          />
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">💡 Key Patterns in These Examples</h4>
        <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• <strong>Progress Tracking</strong>: Log progress throughout long-running jobs</li>
          <li>• <strong>Partial Failure Handling</strong>: One failure doesn't stop the entire batch</li>
          <li>• <strong>Resource Cleanup</strong>: Properly close connections and free resources</li>
          <li>• <strong>State Updates</strong>: Update database records to track job completion</li>
          <li>• <strong>Error Context</strong>: Log enough information to debug failures later</li>
          <li>• <strong>Retry Safety</strong>: Jobs are idempotent and can be retried safely</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Drivers</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          While Khadem provides built-in drivers for most use cases, you can create custom queue drivers 
          for specialized requirements. Custom drivers are useful for integrating with proprietary queue 
          systems, implementing unique storage strategies, or adding specialized features like priority 
          queues, job deduplication, or custom scheduling logic.
        </p>
      </div>

      <CodeBlock
        :code="customDriverCode"
        language="dart"
        title="Creating Custom Queue Drivers"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-lime-50 dark:bg-lime-900/20 p-4 rounded-lg border border-lime-200 dark:border-lime-800">
          <h4 class="font-medium text-lime-800 dark:text-lime-200 mb-2">🔧 Required Methods</h4>
          <ul class="text-sm text-lime-700 dark:text-lime-300 space-y-1">
            <li>• <code>push(QueueJob job, Duration? delay)</code> - Add job to queue</li>
            <li>• <code>process()</code> - Process next available job</li>
            <li>• <code>clear()</code> - Remove all jobs (optional)</li>
            <li>• <code>size()</code> - Get queue size (optional)</li>
          </ul>
        </div>

        <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
          <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">✅ Implementation Checklist</h4>
          <ul class="text-sm text-teal-700 dark:text-teal-300 space-y-1">
            <li>• Handle delayed job execution correctly</li>
            <li>• Implement proper error handling</li>
            <li>• Support job serialization (if persistent)</li>
            <li>• Track retry counts and max retries</li>
            <li>• Ensure thread safety (if needed)</li>
            <li>• Add metrics and monitoring hooks</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>When to Create a Custom Driver:</strong> Consider a custom driver if you need to integrate 
          with Amazon SQS, RabbitMQ, or other message queue systems, implement custom storage (like 
          PostgreSQL's LISTEN/NOTIFY), add advanced features like priority levels or job dependencies, 
          or optimize for specific performance requirements. For most applications, the built-in drivers 
          are sufficient.
        </p>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Custom Driver Considerations</h4>
        <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>• Thoroughly test edge cases (empty queue, delayed jobs, failures)</li>
          <li>• Document any limitations or special requirements</li>
          <li>• Consider job serialization carefully for persistent drivers</li>
          <li>• Implement proper cleanup in <code>dispose()</code> method</li>
          <li>• Add comprehensive logging for debugging</li>
          <li>• Register your driver with <code>QueueFactory.registerDriver()</code></li>
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

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Testing queue jobs is crucial for ensuring reliability in production. Unlike synchronous code, 
          queue jobs run asynchronously, handle retries, and interact with external systems. Effective 
          testing verifies job logic, error handling, retry behavior, and integration with the queue system. 
          Use the sync driver for testing to get immediate feedback without background workers.
        </p>
      </div>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Testing Queue Functionality"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">🧪 Testing Strategies</h4>
          <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• <strong>Unit Tests</strong>: Test <code>handle()</code> in isolation</li>
            <li>• <strong>Integration Tests</strong>: Test with real queue drivers</li>
            <li>• <strong>Mock Dependencies</strong>: Mock external APIs/services</li>
            <li>• <strong>Test Failures</strong>: Verify error handling paths</li>
            <li>• <strong>Test Retries</strong>: Ensure retry logic works</li>
            <li>• <strong>Test Serialization</strong>: For persistent drivers</li>
          </ul>
        </div>

        <div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-lg border border-violet-200 dark:border-violet-800">
          <h4 class="font-medium text-violet-800 dark:text-violet-200 mb-2">✅ What to Test</h4>
          <ul class="text-sm text-violet-700 dark:text-violet-300 space-y-1">
            <li>• Job executes successfully with valid input</li>
            <li>• Job handles invalid/missing data gracefully</li>
            <li>• External service failures trigger retries</li>
            <li>• Job reaches max retries and fails permanently</li>
            <li>• Job serialization roundtrip works correctly</li>
            <li>• Delayed jobs execute at the right time</li>
            <li>• Batch jobs handle partial failures</li>
          </ul>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none mt-4">
        <p>
          <strong>Testing with Sync Driver:</strong> For tests, use the sync driver which executes jobs 
          immediately in the current thread. This makes tests deterministic and fast. Set up a test 
          configuration with <code>'driver': 'sync'</code>, then dispatch jobs and assert on the results 
          immediately. No need to start workers or wait for async execution.
        </p>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 Testing Best Practices</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-2">
          <li>
            <strong>Use Sync Driver</strong>: Configure queue with sync driver for immediate execution
          </li>
          <li>
            <strong>Mock External Services</strong>: Don't call real APIs, email services, or payment gateways in tests
          </li>
          <li>
            <strong>Test Idempotency</strong>: Run jobs multiple times to ensure they're retry-safe
          </li>
          <li>
            <strong>Verify Side Effects</strong>: Check database changes, file creation, etc.
          </li>
          <li>
            <strong>Test Edge Cases</strong>: Null values, empty lists, network timeouts, etc.
          </li>
          <li>
            <strong>Measure Coverage</strong>: Aim for high coverage of job logic paths
          </li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Troubleshooting</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p>
          Queue systems can experience various issues from configuration problems to resource constraints. 
          This section covers common problems you might encounter and how to diagnose and fix them. Most 
          issues fall into a few categories: worker configuration, driver setup, job design, or resource 
          limits.
        </p>
      </div>

      <div class="space-y-4">
        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-3">🚨 Critical Issues</h4>
          <div class="space-y-3 text-sm text-red-700 dark:text-red-300">
            <div>
              <strong>Jobs not processing at all:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Check if workers are running: No worker = no job execution</li>
                <li>• Verify driver configuration is correct</li>
                <li>• Ensure <code>await queueManager.startWorker()</code> is called</li>
                <li>• Check logs for worker startup errors</li>
              </ul>
            </div>
            <div>
              <strong>Jobs lost after application restart:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Memory driver loses all jobs on restart</li>
                <li>• Solution: Switch to file or Redis driver for persistence</li>
                <li>• Update config: <code>'driver': 'file'</code></li>
              </ul>
            </div>
            <div>
              <strong>Worker crashes repeatedly:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Add try-catch in job <code>handle()</code> methods</li>
                <li>• Implement <code>onError</code> callback to catch worker-level errors</li>
                <li>• Check for unhandled exceptions in job code</li>
                <li>• Review system resources (memory, disk space)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-3">⚠️ Common Issues</h4>
          <div class="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
            <div>
              <strong>High memory usage:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Monitor job payload sizes - keep them small</li>
                <li>• Set <code>maxJobs</code> limit to prevent unbounded growth</li>
                <li>• Avoid storing large objects in job properties</li>
                <li>• Use IDs and load data in <code>handle()</code> instead</li>
              </ul>
            </div>
            <div>
              <strong>Jobs timing out:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Increase worker <code>timeout</code> parameter</li>
                <li>• Optimize job <code>handle()</code> method performance</li>
                <li>• Break large jobs into smaller chunks</li>
                <li>• Check for slow external API calls</li>
              </ul>
            </div>
            <div>
              <strong>Delayed jobs not executing on time:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Verify system clock is accurate</li>
                <li>• Check worker <code>delay</code> isn't too long</li>
                <li>• Ensure workers are running continuously</li>
                <li>• Look for timezone issues in delay calculations</li>
              </ul>
            </div>
            <div>
              <strong>Jobs failing with "not registered" error:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• For persistent drivers: Register jobs with <code>QueueJobRegistry</code></li>
                <li>• Call <code>registerQueueJobs()</code> before starting queue</li>
                <li>• Verify job type name matches registration</li>
                <li>• See: <a href="#job-serialization" class="underline">Job Serialization Guide</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-3">🔍 Performance Issues</h4>
          <div class="space-y-3 text-sm text-blue-700 dark:text-blue-300">
            <div>
              <strong>Slow job processing:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Reduce worker <code>delay</code> for faster processing</li>
                <li>• Run multiple workers in parallel</li>
                <li>• Profile job <code>handle()</code> methods for bottlenecks</li>
                <li>• Optimize database queries and API calls</li>
              </ul>
            </div>
            <div>
              <strong>Queue growing faster than processing:</strong>
              <ul class="ml-4 mt-1 space-y-1">
                <li>• Scale up: Run more workers</li>
                <li>• Optimize job execution time</li>
                <li>• Consider horizontal scaling (multiple servers)</li>
                <li>• Use Redis driver for distributed processing</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">🛠️ Debugging Tools</h4>
          <CodeBlock
            :code="debugCommandsCode"
            language="dart"
            title="Debugging Queue Issues"
          />
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Prevention Tips</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Set up comprehensive logging and monitoring from day one</li>
            <li>• Implement health checks that verify workers are running</li>
            <li>• Add alerts for high failure rates or queue growth</li>
            <li>• Test job error handling and retry logic thoroughly</li>
            <li>• Use persistent drivers (file/Redis) in production</li>
            <li>• Document job requirements and dependencies</li>
            <li>• Keep job payloads small and focused</li>
          </ul>
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
const basicUsageCode = `// Import queue system (all organized modules included)
import 'package:khadem/src/core/queue/index.dart';

// Or import specific modules
import 'package:khadem/src/core/queue/queue_manager.dart';
import 'package:khadem/src/core/queue/drivers/in_memory_driver.dart';
import 'package:khadem/src/contracts/queue/queue_job.dart';

// Initialize queue manager with config
final config = Config(); // Your config implementation
final queueManager = QueueManager(config);

// Load configuration and register drivers
queueManager.loadFromConfig();

// Or manually register a driver
final memoryDriver = InMemoryDriver(config: DriverConfig(name: 'memory'));
queueManager.registerDriver('memory', memoryDriver);

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
const jobCreationCode = `// Import required classes
import 'package:khadem/src/contracts/queue/queue_job.dart';
import 'package:khadem/src/core/queue/serialization/index.dart';

// Simple job class
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

// Job with custom serialization (for persistent queues)
class SendNotificationJob extends QueueJob with SerializableJob {
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
const memoryDriverCode = `// Import drivers
import 'package:khadem/src/core/queue/drivers/in_memory_driver.dart';

// Memory driver - fast but loses jobs on restart
// Using configuration file (config/queue.yaml or JSON)
final config = {
  'queue': {
    'default': 'memory',
    'drivers': {
      'memory': {
        'driver': 'memory',
        'track_metrics': true,
        'use_dlq': true,
        'max_retries': 3,
      },
    },
  },
};

// Or directly create and register driver
final driver = InMemoryDriver(
  config: DriverConfig(
    name: 'memory',
    trackMetrics: true,
    useDLQ: true,
  ),
);

final queueManager = QueueManager(config);
queueManager.registerDriver('memory', driver);

// Jobs are stored in memory only
await queueManager.dispatch(WelcomeEmailJob('user@example.com', 'John'));

// ⚠️  Jobs will be lost if application restarts
// ✅ Perfect for development and testing
// ✅ Fastest performance - O(1) operations`

const fileDriverCode = `// Import file driver
import 'package:khadem/src/core/queue/drivers/file_storage_driver.dart';
import 'package:khadem/src/core/queue/registry/index.dart'; // For job registry

// File driver - persists jobs to disk
final config = {
  'queue': {
    'default': 'file',
    'drivers': {
      'file': {
        'driver': 'file',
        'path': './storage/queue',
        'track_metrics': true,
        'use_dlq': true,
      },
    },
  },
};

// Or directly create driver
final driver = FileStorageDriver(
  config: DriverConfig(name: 'file'),
  storagePath: './storage/queue',
);

final queueManager = QueueManager(config);
queueManager.loadFromConfig();

// Jobs are saved to file and survive restarts
await queueManager.dispatch(ImportantJob());

// File structure:
// storage/queue/main.json
// {
//   "jobs": [
//     {
//       "id": "123456789",
//       "type": "ImportantJob",
//       "payload": {...},
//       "scheduledFor": "2024-01-15T10:30:00.000Z",
//       "attempts": 0,
//       "status": "pending"
//     }
//   ]
// }`

const syncDriverCode = `// Import sync driver
import 'package:khadem/src/core/queue/drivers/synchronous_driver.dart';

// Sync driver - processes jobs immediately
final config = {
  'queue': {
    'default': 'sync',
    'drivers': {
      'sync': {
        'driver': 'sync',
      },
    },
  },
};

// Or directly create driver
final driver = SynchronousDriver(
  config: DriverConfig(name: 'sync'),
);

final queueManager = QueueManager(config);
queueManager.registerDriver('sync', driver);

// Jobs execute immediately (no queuing)
await queueManager.dispatch(QuickJob());
// Output: Job executed immediately!

// ✅ No background processing needed
// ✅ Perfect for simple synchronous operations
// ✅ Respects job delays with Future.delayed
// ❌ No actual queuing - jobs run in main thread`

const redisDriverCode = `// Import Redis driver
import 'package:khadem/src/core/queue/drivers/redis_storage_driver.dart';
import 'package:khadem/src/core/queue/registry/index.dart'; // For job registry

// Redis driver - high-performance persistent queue
final config = {
  'queue': {
    'default': 'redis',
    'drivers': {
      'redis': {
        'driver': 'redis',
        'host': 'localhost',
        'port': 6379,
        'password': null, // Optional password
        'queue_name': 'default',
        'track_metrics': true,
        'use_dlq': true,
      },
    },
  },
};

// Or directly create driver
final driver = RedisStorageDriver(
  config: DriverConfig(name: 'redis'),
  host: 'localhost',
  port: 6379,
  password: null, // Optional
  queueName: 'default',
);

final queueManager = QueueManager(config);
queueManager.registerDriver('redis', driver);

// Jobs are stored in Redis with atomic operations
await queueManager.dispatch(ImportantJob());

// ✅ Persistent storage (survives restarts)
// ✅ Atomic operations (no race conditions)
// ✅ Multi-worker support (horizontal scaling)
// ✅ Very fast (in-memory with optional persistence)
// ⚠️  Requires Redis server running

// Quick Redis setup with Docker:
// docker run -d -p 6379:6379 --name khadem-redis redis:alpine`

// Configuration
const configUsageCode = `// Configuration file structure (config/queue.yaml or JSON)
final config = {
  'queue': {
    'default': 'memory', // Default driver to use
    'drivers': {
      'memory': {
        'driver': 'memory',
        'track_metrics': true,
        'use_dlq': true,
        'max_retries': 3,
      },
      'file': {
        'driver': 'file',
        'path': './storage/queue',
        'track_metrics': true,
        'use_dlq': true,
      },
      'sync': {
        'driver': 'sync',
      },
      'redis': {
        'driver': 'redis',
        'host': 'localhost',
        'port': 6379,
        'password': null,
        'queue_name': 'default',
        'track_metrics': true,
        'use_dlq': true,
      },
    },
  },
};

// Initialize with configuration
final queueManager = QueueManager(config);

// Load config and auto-register all drivers
queueManager.loadFromConfig();

// Or manually register drivers
final memoryDriver = InMemoryDriver(
  config: DriverConfig(
    name: 'memory',
    trackMetrics: true,
    useDLQ: true,
    maxRetries: 3,
    defaultJobTimeout: Duration(minutes: 5),
  ),
);
queueManager.registerDriver('memory', memoryDriver);

// Switch default driver
queueManager.setDefaultDriver('memory');

// Get a specific driver
final fileDriver = queueManager.getDriver('file');

// Check available drivers
print(queueManager.driverNames); // ['memory', 'file', 'sync', 'redis']
print(queueManager.hasDriver('redis')); // true`

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
const monitoringCode = `// Import metrics (if accessing directly)
import 'package:khadem/src/core/queue/metrics/index.dart';

// Get driver statistics
final stats = await queueManager.driver.getStats();
print('Queue Statistics:');
print('  Driver: \${stats['driver_name']}');
print('  Queue Depth: \${stats['queue_depth']}');
print('  Processing: \${stats['processing_count']}');
print('  Pending: \${stats['pending_count']}');
print('  Ready Jobs: \${stats['ready_jobs']}');
print('  Delayed Jobs: \${stats['delayed_jobs']}');

// Metrics tracking (if enabled)
if (stats.containsKey('metrics')) {
  final metrics = stats['metrics'] as Map<String, dynamic>;
  print('Metrics:');
  print('  Total Queued: \${metrics['jobs_queued']}');
  print('  Total Completed: \${metrics['jobs_completed']}');
  print('  Total Failed: \${metrics['jobs_failed']}');
  print('  Success Rate: \${(metrics['success_rate'] * 100).toStringAsFixed(1)}%');
  
  // Jobs by type
  final byType = metrics['jobs_by_type'] as Map<String, dynamic>;
  print('Jobs by Type:');
  byType.forEach((type, count) {
    print('  \$type: \$count');
  });
}

// Dead Letter Queue statistics (if enabled)
if (stats.containsKey('dlq')) {
  final dlq = stats['dlq'] as Map<String, dynamic>;
  print('Dead Letter Queue:');
  print('  Total: \${dlq['total_jobs']}');
  print('  By Job Type:');
  (dlq['jobs_by_type'] as Map<String, dynamic>).forEach((type, count) {
    print('    \$type: \$count');
  });
}

// Custom monitoring with periodic checks
class QueueMonitor {
  final QueueManager _queueManager;

  QueueMonitor(this._queueManager);

  void startMonitoring() {
    Timer.periodic(Duration(minutes: 5), (timer) async {
      final stats = await _queueManager.driver.getStats();
      final metrics = stats['metrics'] as Map<String, dynamic>?;

      if (metrics == null) {
        print('⚠️ Metrics not enabled');
        return;
      }

      // Check for issues
      final successRate = metrics['success_rate'] as double;
      if (successRate < 0.9) { // < 90% success rate
        print('⚠️ Low success rate: \${(successRate * 100).toStringAsFixed(1)}%');
        // Send alert
      }

      final queueDepth = stats['queue_depth'] as int;
      if (queueDepth > 100) {
        print('⚠️ Large queue backlog: \$queueDepth jobs');
        // Scale up workers
      }

      // Log metrics
      print('📊 Queue Health Check:');
      print('   Success Rate: \${(successRate * 100).toStringAsFixed(1)}%');
      print('   Processing: \${stats['processing_count']} jobs');
      print('   Queue Depth: \$queueDepth jobs');
    });
  }
}

// Reset metrics (for testing)
// Note: This requires direct access to driver's metrics object
import 'package:khadem/src/core/queue/drivers/base_driver.dart';

final driver = queueManager.driver as BaseQueueDriver;
if (driver.metrics != null) {
  driver.metrics!.reset();
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
const customDriverCode = `// Import required contracts and base classes
import 'package:khadem/src/contracts/queue/queue_driver.dart';
import 'package:khadem/src/contracts/queue/queue_job.dart';
import 'package:khadem/src/core/queue/drivers/base_driver.dart';

// Custom database queue driver
class DatabaseQueueDriver extends BaseQueueDriver {
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
const testingCode = `// Import test framework and queue classes
import 'package:test/test.dart';
import 'package:khadem/src/core/queue/index.dart';
import 'package:khadem/src/contracts/queue/queue_job.dart';

// Unit tests for queue jobs
void main() {
  group('QueueJob Tests', () {
    late QueueManager queueManager;
    late InMemoryDriver driver;

    setUp(() {
      // Use memory driver for testing
      driver = InMemoryDriver(
        config: DriverConfig(name: 'test'),
      );
      
      final config = Config(); // Mock config
      queueManager = QueueManager(config, driver: driver);
    });

    test('Simple job executes successfully', () async {
      var executed = false;
      
      final job = SimpleJob(() => executed = true);
      await queueManager.dispatch(job);

      // Process the job
      await queueManager.process();

      expect(executed, isTrue);
      expect(driver.isEmpty, isTrue);
    });

    test('Job with retry logic', () async {
      var executionCount = 0;
      
      final job = RetryableJob(() {
        executionCount++;
        if (executionCount < 3) throw Exception('Retry me');
      });
      
      await queueManager.dispatch(job);

      // Process multiple times - automatic retry happens
      await queueManager.process(); // Fail 1, auto-retry
      await Future.delayed(Duration(milliseconds: 100));
      await queueManager.process(); // Fail 2, auto-retry
      await Future.delayed(Duration(milliseconds: 100));
      await queueManager.process(); // Success

      expect(executionCount, equals(3));
    });

    test('Delayed job execution', () async {
      var executed = false;
      final job = SimpleJob(() => executed = true);
      final delay = Duration(milliseconds: 500);

      await queueManager.dispatch(job, delay: delay);

      // Job should not execute immediately
      await queueManager.process();
      expect(executed, isFalse);

      // Wait for delay and process again
      await Future.delayed(delay + Duration(milliseconds: 100));
      await queueManager.process();
      expect(executed, isTrue);
    });

    test('Batch job processing', () async {
      final executed = <int>[];
      final jobs = List.generate(
        3, 
        (i) => SimpleJob(() => executed.add(i)),
      );

      await queueManager.dispatchBatch(jobs);

      // Process all jobs
      for (var i = 0; i < jobs.length; i++) {
        await queueManager.process();
      }

      expect(executed.length, equals(3));
      expect(driver.isEmpty, isTrue);
    });

    test('Worker processes jobs correctly', () async {
      final executed = <int>[];
      final jobs = List.generate(
        5, 
        (i) => SimpleJob(() => executed.add(i)),
      );
      
      for (final job in jobs) {
        await queueManager.dispatch(job);
      }

      // Start worker with short delay
      await queueManager.startWorker(
        maxJobs: 5,
        delay: Duration(milliseconds: 10),
      );

      // Wait for all jobs to complete
      await Future.delayed(Duration(milliseconds: 200));

      expect(executed.length, equals(5));
      expect(driver.isEmpty, isTrue);
    });

    test('Queue statistics', () async {
      final job = SimpleJob(() {});
      await queueManager.dispatch(job);

      final stats = await driver.getStats();
      
      expect(stats['queue_depth'], equals(1));
      expect(stats['ready_jobs'], equals(1));
      expect(stats['delayed_jobs'], equals(0));
    });

    test('Metrics tracking', () async {
      // Enable metrics
      final metricsDriver = InMemoryDriver(
        config: DriverConfig(
          name: 'test',
          trackMetrics: true,
        ),
        metrics: QueueMetrics(),
      );
      
      final qm = QueueManager(Config(), driver: metricsDriver);

      await qm.dispatch(SimpleJob(() {}));
      await qm.process();

      final stats = await metricsDriver.getStats();
      final metrics = stats['metrics'] as Map<String, dynamic>;
      
      expect(metrics['jobs_queued'], equals(1));
      expect(metrics['jobs_completed'], equals(1));
      expect(metrics['success_rate'], equals(1.0));
    });
  });
}

// Test job implementations
class SimpleJob extends QueueJob {
  final void Function() action;

  SimpleJob(this.action);

  @override
  Future<void> handle() async {
    await Future.delayed(Duration(milliseconds: 10)); // Simulate work
    action();
  }

  @override
  String get displayName => 'Simple Test Job';

  @override
  int get maxRetries => 3;
}

class RetryableJob extends QueueJob {
  final void Function() action;

  RetryableJob(this.action);

  @override
  Future<void> handle() async {
    await Future.delayed(Duration(milliseconds: 10));
    action(); // May throw exception
  }

  @override
  String get displayName => 'Retryable Job';

  @override
  int get maxRetries => 5;
}`

// Debug Commands
const debugCommandsCode = `// Debug queue status
Future<void> debugQueueStatus(QueueManager queueManager) async {
  final stats = await queueManager.driver.getStats();

  print('🔍 Queue Debug Information:');
  print('Driver: \${queueManager.defaultDriverName}');
  print('Queue Depth: \${stats['queue_depth']}');
  print('Processing: \${stats['processing_count']}');
  print('Ready Jobs: \${stats['ready_jobs']}');
  print('Delayed Jobs: \${stats['delayed_jobs']}');

  // Metrics (if enabled)
  if (stats.containsKey('metrics')) {
    final metrics = stats['metrics'] as Map<String, dynamic>;
    print('\\nMetrics:');
    print('  Total Queued: \${metrics['jobs_queued']}');
    print('  Completed: \${metrics['jobs_completed']}');
    print('  Failed: \${metrics['jobs_failed']}');
    print('  Success Rate: \${(metrics['success_rate'] * 100).toStringAsFixed(1)}%');

    // Jobs by type
    final byType = metrics['jobs_by_type'] as Map<String, dynamic>;
    if (byType.isNotEmpty) {
      print('\\nJobs by Type:');
      byType.forEach((type, count) {
        print('  \$type: \$count');
      });
    }
  }
}

// Inspect in-memory queue
Future<void> inspectMemoryQueue(QueueManager queueManager) async {
  final driver = queueManager.driver;
  
  if (driver is! InMemoryDriver) {
    print('❌ Driver is not InMemoryDriver');
    return;
  }

  print('📊 Memory Queue Contents:');
  print('Pending Jobs: \${driver.pendingJobsCount}');
  print('Is Empty: \${driver.isEmpty}');

  final stats = await driver.getStats();
  print('Ready: \${stats['ready_jobs']}');
  print('Delayed: \${stats['delayed_jobs']}');
}

// Inspect file queue contents
Future<void> inspectFileQueue(QueueManager queueManager) async {
  final driver = queueManager.driver;
  
  if (driver is! FileStorageDriver) {
    print('❌ Driver is not FileStorageDriver');
    return;
  }

  final stats = await driver.getStats();
  final files = stats['storage_files'] as List<String>?;
  
  print('📁 File Queue Contents:');
  print('Queue Depth: \${stats['queue_depth']}');
  print('Storage Files:');
  files?.forEach((file) => print('  - \$file'));
}

// Clear queue (for testing/debugging)
Future<void> clearQueue(QueueManager queueManager) async {
  await queueManager.driver.clear();
  print('🧹 Queue cleared');
  
  final stats = await queueManager.driver.getStats();
  print('Queue Depth: \${stats['queue_depth']}');
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
