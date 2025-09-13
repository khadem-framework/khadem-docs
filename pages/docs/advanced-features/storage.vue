<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            File Storage
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to manage files and storage in your Khadem application using the StorageManager and StorageDisk contract
          </p>
        </div>

        <div class="space-y-8">
          <!-- System Overview -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              System Overview
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem's storage system is built around the <code>StorageManager</code> class and the <code>StorageDisk</code> contract.
              The StorageManager handles multiple storage disks and drivers, while StorageDisk defines the interface for file operations.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Core Components
              </h3>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>StorageManager</strong>: Manages storage disks and drivers</li>
                <li><strong>StorageDisk</strong>: Contract defining file operations interface</li>
                <li><strong>LocalDisk</strong>: Built-in implementation for local file system storage</li>
                <li><strong>Custom Drivers</strong>: Extend with your own storage implementations</li>
              </ul>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                StorageDisk Contract
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>abstract class StorageDisk {
  /// Saves bytes to a path
  Future&lt;void&gt; put(String path, List&lt;int&gt; bytes);

  /// Writes string content to a file
  Future&lt;void&gt; writeString(String path, String content);

  /// Reads string content from a file
  Future&lt;String&gt; readString(String path);

  /// Retrieves bytes from a path
  Future&lt;List&lt;int&gt;&gt; get(String path);

  /// Deletes a file
  Future&lt;void&gt; delete(String path);

  /// Checks if file exists
  Future&lt;bool&gt; exists(String path);

  /// Copies a file
  Future&lt;void&gt; copy(String from, String to);

  /// Moves a file
  Future&lt;void&gt; move(String from, String to);

  /// Returns file size
  Future&lt;int&gt; size(String path);

  /// Returns last modified time
  Future&lt;DateTime&gt; lastModified(String path);

  /// Lists files in directory
  Future&lt;List&lt;String&gt;&gt; listFiles(String directoryPath);

  /// Returns file URL/path
  String url(String path);
}</code></pre>
            </div>
          </div>

          <!-- Basic Usage -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Usage
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Get started with the StorageManager and LocalDisk for basic file operations.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Setting Up StorageManager
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/storage/storage_manager.dart';
import 'package:khadem/src/core/storage/local_disk.dart';

// Create storage manager with default local disk
final storageManager = StorageManager();

// Or configure with custom settings
final storageManager = StorageManager(
  defaultDisk: 'local',
  initialDisks: {
    'local': LocalDisk(basePath: './storage/app'),
  },
);

// Load configuration from map
final config = {
  'default': 'local',
  'disks': {
    'local': {
      'driver': 'local',
      'root': './storage/app',
    },
    'temp': {
      'driver': 'local',
      'root': './storage/temp',
    },
  },
};

storageManager.fromConfig(config);</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic File Operations
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Get the default disk
final disk = storageManager.disk();

// Or get a specific disk
final tempDisk = storageManager.disk('temp');

// Write string content to file
await disk.writeString('example.txt', 'Hello, World!');

// Read string content from file
final content = await disk.readString('example.txt');
print(content); // Hello, World!

// Write binary data
final bytes = [72, 101, 108, 108, 111]; // "Hello" in bytes
await disk.put('data.bin', bytes);

// Read binary data
final data = await disk.get('data.bin');

// Check if file exists
final exists = await disk.exists('example.txt');
if (exists) {
  print('File exists');
}

// Get file size
final size = await disk.size('example.txt');

// Get last modified time
final modified = await disk.lastModified('example.txt');

// Get file URL (for local disk, returns file:// path)
final url = disk.url('example.txt');</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Management Operations
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Copy a file
await disk.copy('source.txt', 'destination.txt');

// Move/rename a file
await disk.move('old_name.txt', 'new_name.txt');

// Delete a file
await disk.delete('unwanted.txt');

// List files in directory
final files = await disk.listFiles('documents');
for (final file in files) {
  print('Found file: \$file');
}

// Check multiple files
final fileExists = await disk.exists('important.doc');
final imageExists = await disk.exists('photo.jpg');</code></pre>
            </div>
          </div>

          <!-- Storage Configuration -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Storage Configuration
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Configure multiple storage disks and drivers using the StorageManager's fromConfig method.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Configuration Format
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Configuration map structure
final config = {
  'default': 'local',  // Default disk name
  'disks': {
    'local': {
      'driver': 'local',
      'root': './storage/app',  // Base path for local storage
    },
    'temp': {
      'driver': 'local',
      'root': './storage/temp',
    },
    'cache': {
      'driver': 'local',
      'root': './storage/cache',
    },
  },
};

// Apply configuration to StorageManager
storageManager.fromConfig(config);

// Now you can use the configured disks
final localDisk = storageManager.disk('local');    // Default disk
final tempDisk = storageManager.disk('temp');      // Temp disk
final cacheDisk = storageManager.disk('cache');    // Cache disk</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Runtime Disk Management
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Register disks at runtime
storageManager.registerDisk('uploads', LocalDisk(basePath: './uploads'));

// Check available disks
print('Available disks: \${storageManager.diskNames}');
print('Total disks: \${storageManager.diskCount}');
print('Default disk: \${storageManager.defaultDisk}');

// Change default disk
storageManager.setDefaultDisk('temp');
print('New default: \${storageManager.defaultDisk}');

// Check if disk exists
if (storageManager.hasDisk('uploads')) {
  print('Uploads disk is available');
}

// Remove a disk
storageManager.removeDisk('temp');

// Clear all disks
storageManager.flush();</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Custom Driver Registration
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Register a custom storage driver
storageManager.registerDriver('memory', (options) {
  // Return your custom StorageDisk implementation
  return MemoryDisk(); // Your custom implementation
});

// Now you can use it in configuration
final configWithCustom = {
  'default': 'memory',
  'disks': {
    'memory': {
      'driver': 'memory',
      // Custom options for your driver
    },
  },
};

storageManager.fromConfig(configWithCustom);</code></pre>
            </div>
          </div>

          <!-- Custom Storage Drivers -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Custom Storage Drivers
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Extend Khadem's storage system by implementing custom storage drivers for cloud services, databases, or other storage backends.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Implementing a Custom Driver
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// lib/src/core/storage/s3_disk.dart
import 'package:aws_s3_api/s3-2006-03-01.dart';
import '../contracts/storage/storage_disk.dart';

class S3Disk implements StorageDisk {
  final String bucket;
  final S3 client;

  S3Disk({
    required this.bucket,
    required String accessKey,
    required String secretKey,
    required String region,
  }) : client = S3(
          region: region,
          credentials: AwsClientCredentials(
            accessKey: accessKey,
            secretKey: secretKey,
          ),
        );

  @override
  Future&lt;void&gt; put(String path, List&lt;int&gt; bytes) async {
    await client.putObject(
      bucket: bucket,
      key: path,
      body: Stream.fromIterable([bytes]),
    );
  }

  @override
  Future&lt;List&lt;int&gt;&gt; get(String path) async {
    final response = await client.getObject(bucket: bucket, key: path);
    return await response.body!.readAsBytes();
  }

  @override
  Future&lt;void&gt; delete(String path) async {
    await client.deleteObject(bucket: bucket, key: path);
  }

  @override
  Future&lt;bool&gt; exists(String path) async {
    try {
      await client.headObject(bucket: bucket, key: path);
      return true;
    } catch (e) {
      return false;
    }
  }

  @override
  String url(String path) {
    return 'https://\$bucket.s3.amazonaws.com/\$path';
  }

  // Implement other required methods...
  @override
  Future&lt;void&gt; writeString(String path, String content) async {
    await put(path, utf8.encode(content));
  }

  @override
  Future&lt;String&gt; readString(String path) async {
    final bytes = await get(path);
    return utf8.decode(bytes);
  }

  // ... other implementations
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Registering Custom Drivers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Register your custom S3 driver
storageManager.registerDriver('s3', (options) {
  return S3Disk(
    bucket: options['bucket'] as String,
    accessKey: options['key'] as String,
    secretKey: options['secret'] as String,
    region: options['region'] as String,
  );
});

// Use in configuration
final config = {
  'default': 's3',
  'disks': {
    's3': {
      'driver': 's3',
      'bucket': 'my-app-bucket',
      'key': 'aws-access-key',
      'secret': 'aws-secret-key',
      'region': 'us-east-1',
    },
  },
};

storageManager.fromConfig(config);

// Now use S3 disk
final s3Disk = storageManager.disk('s3');
await s3Disk.writeString('hello.txt', 'Hello from S3!');</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Database Storage Driver Example
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// lib/src/core/storage/database_disk.dart
class DatabaseDisk implements StorageDisk {
  final DatabaseConnection db;

  DatabaseDisk(this.db);

  @override
  Future&lt;void&gt; put(String path, List&lt;int&gt; bytes) async {
    await db.table('files').insert({
      'path': path,
      'content': base64Encode(bytes),
      'created_at': DateTime.now(),
    });
  }

  @override
  Future&lt;List&lt;int&gt;&gt; get(String path) async {
    final record = await db.table('files')
        .where('path', path)
        .first();

    return base64Decode(record['content']);
  }

  @override
  Future&lt;bool&gt; exists(String path) async {
    final count = await db.table('files')
        .where('path', path)
        .count();

    return count > 0;
  }

  @override
  String url(String path) {
    return '/files/\$path'; // Web-accessible URL
  }

  // ... implement other methods
}

// Register and use
storageManager.registerDriver('database', (options) {
  return DatabaseDisk(databaseConnection);
});</code></pre>
            </div>
          </div>

          <!-- Error Handling -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Error Handling
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Handle storage-related errors gracefully in your Khadem applications.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Exception Types
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// lib/src/support/exceptions/storage_exception.dart
class StorageException implements Exception {
  final String message;
  StorageException(this.message);

  @override
  String toString() =&gt; 'StorageException: \$message';
}

// lib/src/support/exceptions/not_found_exception.dart
class NotFoundException implements Exception {
  final String message;
  NotFoundException(this.message);

  @override
  String toString() =&gt; 'NotFoundException: \$message';
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Error Handling Examples
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Handle file operations with error checking
Future&lt;String&gt; safeReadFile(String path) async {
  try {
    final disk = storageManager.disk();
    return await disk.readString(path);
  } on NotFoundException {
    return 'File not found: \$path';
  } on StorageException catch (e) {
    return 'Storage error: \${e.message}';
  } catch (e) {
    return 'Unexpected error: \$e';
  }
}

// Check disk availability
Future&lt;bool&gt; isDiskAvailable(String diskName) async {
  try {
    final disk = storageManager.disk(diskName);
    // Try a simple operation to test connectivity
    await disk.exists('test');
    return true;
  } catch (e) {
    print('Disk \$diskName is not available: \$e');
    return false;
  }
}

// Retry failed operations
Future&lt;T&gt; retryOperation&lt;T&gt;(Future&lt;T&gt; Function() operation, {int maxRetries = 3}) async {
  for (int i = 0; i &lt; maxRetries; i++) {
    try {
      return await operation();
    } catch (e) {
      if (i == maxRetries - 1) rethrow;
      await Future.delayed(Duration(seconds: 1)); // Wait before retry
    }
  }
  throw 'Should not reach here';
}

// Usage
final content = await retryOperation(() async {
  return await storageManager.disk().readString('important.txt');
});</code></pre>
            </div>
          </div>

          <!-- Testing -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing Storage
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your storage operations using the existing test structure and mock implementations.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// test/core/storage/storage_manager_test.dart
import 'package:test/test.dart';
import 'package:khadem/src/core/storage/storage_manager.dart';
import 'package:khadem/src/core/storage/local_disk.dart';
import 'package:khadem/src/support/exceptions/storage_exception.dart';
import 'package:khadem/src/support/exceptions/not_found_exception.dart';

void main() {
  group('StorageManager', () {
    late StorageManager storageManager;
    late LocalDisk localDisk;

    setUp(() {
      storageManager = StorageManager();
      localDisk = LocalDisk(basePath: Directory.systemTemp.path + '/test_storage');
    });

    test('initializes with default local driver', () {
      expect(storageManager.defaultDisk, equals('local'));
      expect(storageManager.diskCount, equals(0)); // No disks registered yet
      expect(storageManager.driverCount, equals(1)); // local driver registered
    });

    test('registers disk successfully', () {
      storageManager.registerDisk('test', localDisk);

      expect(storageManager.hasDisk('test'), isTrue);
      expect(storageManager.diskCount, equals(1));
    });

    test('throws when registering disk with empty name', () {
      expect(
        () =&gt; storageManager.registerDisk('', localDisk),
        throwsA(isA&lt;StorageException&gt;()),
      );
    });

    test('retrieves registered disk', () {
      storageManager.registerDisk('test', localDisk);

      final disk = storageManager.disk('test');
      expect(disk, equals(localDisk));
    });

    test('throws when accessing non-existent disk', () {
      expect(
        () =&gt; storageManager.disk('nonexistent'),
        throwsA(isA&lt;NotFoundException&gt;()),
      );
    });

    test('loads configuration from map', () {
      final config = {
        'default': 'temp',
        'disks': {
          'temp': {
            'driver': 'local',
            'root': './temp',
          },
        },
      };

      storageManager.fromConfig(config);

      expect(storageManager.defaultDisk, equals('temp'));
      expect(storageManager.hasDisk('temp'), isTrue);
    });

    test('removes disk successfully', () {
      storageManager.registerDisk('test', localDisk);
      expect(storageManager.hasDisk('test'), isTrue);

      storageManager.removeDisk('test');
      expect(storageManager.hasDisk('test'), isFalse);
    });

    test('throws when removing non-existent disk', () {
      expect(
        () =&gt; storageManager.removeDisk('nonexistent'),
        throwsA(isA&lt;NotFoundException&gt;()),
      );
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
