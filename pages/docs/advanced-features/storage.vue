<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            File Storage
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to manage files and storage in your Khadem application
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic File Operations -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic File Operations
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Store, retrieve, and manage files using the Storage facade.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Storing Files
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/file_controller.dart
import 'package:khadem/src/core/storage/storage.dart';

class FileController extends Controller {
  Future&lt;Response&gt; upload(Request request) async {
    final file = request.file('avatar');

    if (file == null) {
      return response.json({'error': 'No file uploaded'}, 400);
    }

    // Store file in default disk
    final path = await Storage.put('avatars', file);

    // Store with custom filename
    final customPath = await Storage.putAs(
      'avatars',
      file,
      'user_\${request.user().id}_avatar'
    );

    // Store in specific disk
    final s3Path = await Storage.disk('s3').put('uploads', file);

    return response.json({
      'path': path,
      'url': Storage.url(path),
    });
  }

  Future&lt;Response&gt; uploadMultiple(Request request) async {
    final files = request.files('photos');

    final paths = &lt;String&gt;[];
    for (final file in files) {
      final path = await Storage.put('photos', file);
      paths.add(path);
    }

    return response.json({'paths': paths});
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Retrieving Files
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Get file contents
final contents = await Storage.get('avatars/user_123.jpg');

// Check if file exists
if (await Storage.exists('avatars/user_123.jpg')) {
  // File exists
}

// Get file URL
final url = Storage.url('avatars/user_123.jpg');

// Get file size
final size = await Storage.size('avatars/user_123.jpg');

// Get file last modified time
final lastModified = await Storage.lastModified('avatars/user_123.jpg');

// Download file as response
return Storage.download('reports/monthly.pdf', 'Monthly Report.pdf');</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Management
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Copy file
await Storage.copy('avatars/old.jpg', 'avatars/new.jpg');

// Move/rename file
await Storage.move('avatars/temp.jpg', 'avatars/permanent.jpg');

// Delete file
await Storage.delete('avatars/old.jpg');

// Delete multiple files
await Storage.delete(['file1.jpg', 'file2.jpg', 'file3.jpg']);

// Create directory
await Storage.makeDirectory('new_folder');

// Delete directory
await Storage.deleteDirectory('old_folder');

// List files in directory
final files = await Storage.files('avatars');

// List all files recursively
final allFiles = await Storage.allFiles('avatars');

// List directories
final directories = await Storage.directories('avatars');</code></pre>
            </div>
          </div>

          <!-- Storage Configuration -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Storage Configuration
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Configure different storage disks and drivers.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Storage Config
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// config/filesystems.dart
import 'package:khadem/src/core/storage/storage_config.dart';

class FilesystemsConfig extends Config {
  @override
  Map&lt;String, dynamic&gt; get config =&gt; {
    'default': env('FILESYSTEM_DISK', 'local'),

    'disks': {
      'local': {
        'driver': 'local',
        'root': storage_path('app'),
        'throw': false,
      },

      'public': {
        'driver': 'local',
        'root': storage_path('app/public'),
        'url': env('APP_URL') + '/storage',
        'visibility': 'public',
        'throw': false,
      },

      's3': {
        'driver': 's3',
        'key': env('AWS_ACCESS_KEY_ID'),
        'secret': env('AWS_SECRET_ACCESS_KEY'),
        'region': env('AWS_DEFAULT_REGION'),
        'bucket': env('AWS_BUCKET'),
        'url': env('AWS_URL'),
        'endpoint': env('AWS_ENDPOINT'),
        'use_path_style_endpoint': env('AWS_USE_PATH_STYLE_ENDPOINT', false),
        'throw': false,
      },

      'ftp': {
        'driver': 'ftp',
        'host': env('FTP_HOST'),
        'username': env('FTP_USERNAME'),
        'password': env('FTP_PASSWORD'),
        'port': env('FTP_PORT', 21),
        'root': env('FTP_ROOT'),
        'passive': true,
        'ssl': true,
        'timeout': 30,
      },

      'rackspace': {
        'driver': 'rackspace',
        'username': env('RACKSPACE_USERNAME'),
        'key': env('RACKSPACE_KEY'),
        'container': env('RACKSPACE_CONTAINER'),
        'endpoint': env('RACKSPACE_ENDPOINT'),
        'region': env('RACKSPACE_REGION'),
        'url_type': 'publicURL',
      },
    },

    'links': {
      storage_path('app/public') : public_path('storage'),
    },
  };
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Storage Service Provider
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/storage_service_provider.dart
import 'package:khadem/src/core/storage/storage_manager.dart';

class StorageServiceProvider extends ServiceProvider {
  @override
  void register() {
    app.singleton(StorageManager, () {
      return StorageManager(config('filesystems'));
    });
  }

  @override
  void boot() {
    // Create symbolic link for public storage
    if (!File(public_path('storage')).existsSync()) {
      Link(public_path('storage')).createSync(storage_path('app/public'));
    }
  }
}</code></pre>
            </div>
          </div>

          <!-- File Uploads -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              File Uploads
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Handle file uploads with validation and processing.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Upload Validation
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/upload_controller.dart
class UploadController extends Controller {
  Future&lt;Response&gt; uploadAvatar(Request request) async {
    // Validate the upload
    final validator = Validator.make(request.all(), {
      'avatar': 'required|file|image|max:2048|mimes:jpeg,png,jpg,gif',
    });

    if (validator.fails()) {
      return response.json({
        'errors': validator.errors()
      }, 422);
    }

    final file = request.file('avatar');

    // Generate unique filename
    final filename = 'avatar_\${request.user().id}_\${DateTime.now().millisecondsSinceEpoch}.\${file.extension}';

    // Store the file
    final path = await Storage.putAs('avatars', file, filename);

    // Update user avatar
    await request.user().update({'avatar': path});

    return response.json({
      'message': 'Avatar uploaded successfully',
      'path': path,
      'url': Storage.url(path),
    });
  }

  Future&lt;Response&gt; uploadDocument(Request request) async {
    final validator = Validator.make(request.all(), {
      'document': 'required|file|mimes:pdf,doc,docx|max:10240', // 10MB
    });

    if (validator.fails()) {
      return response.json({'errors': validator.errors()}, 422);
    }

    final file = request.file('document');

    // Store in documents directory
    final path = await Storage.put('documents', file);

    // Create document record
    final document = await Document.create({
      'name': file.originalName,
      'path': path,
      'size': file.size,
      'mime_type': file.mimeType,
      'user_id': request.user().id,
    });

    return response.json({
      'document': document,
      'url': Storage.url(path),
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Image Processing
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/jobs/process_image.dart
import 'package:khadem/src/core/storage/storage.dart';
import 'package:image/image.dart' as img;

class ProcessImage extends Job {
  final String path;
  final int width;
  final int height;

  ProcessImage(this.path, {this.width = 800, this.height = 600});

  @override
  Future&lt;void&gt; handle() async {
    // Get the image
    final imageData = await Storage.get(path);
    final image = img.decodeImage(imageData);

    if (image == null) return;

    // Resize the image
    final resized = img.copyResize(image, width: width, height: height);

    // Create thumbnail
    final thumbnail = img.copyResize(image, width: 200, height: 200);

    // Save resized image
    final resizedPath = path.replaceFirst('.', '_resized.');
    await Storage.put(resizedPath, img.encodeJpg(resized));

    // Save thumbnail
    final thumbPath = path.replaceFirst('.', '_thumb.');
    await Storage.put(thumbPath, img.encodeJpg(thumbnail));

    // Update database with processed images
    await ImageModel.where('path', path).update({
      'resized_path': resizedPath,
      'thumbnail_path': thumbPath,
      'processed_at': DateTime.now(),
    });
  }
}

// Usage in controller
Future&lt;Response&gt; uploadImage(Request request) async {
  final file = request.file('image');
  final path = await Storage.put('images', file);

  // Queue image processing
  Queue.dispatch(ProcessImage(path));

  return response.json({
    'path': path,
    'message': 'Image uploaded, processing in background'
  });
}</code></pre>
            </div>
          </div>

          <!-- Cloud Storage -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Cloud Storage
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Work with cloud storage services like AWS S3.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                AWS S3 Integration
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/services/s3_service.dart
import 'package:khadem/src/core/storage/storage.dart';

class S3Service {
  final Storage disk;

  S3Service() : disk = Storage.disk('s3');

  Future&lt;String&gt; uploadFile(File file, String path) async {
    return await disk.put(path, file);
  }

  Future&lt;String&gt; uploadPublicFile(File file, String path) async {
    return await disk.put(path, file, visibility: 'public');
  }

  Future&lt;String&gt; getSignedUrl(String path, Duration expiry) async {
    return await disk.temporaryUrl(path, expiry);
  }

  Future&lt;void&gt; setVisibility(String path, String visibility) async {
    await disk.setVisibility(path, visibility);
  }

  Future&lt;String&gt; getVisibility(String path) async {
    return await disk.getVisibility(path);
  }
}

// Usage
final s3 = S3Service();

// Upload private file
final path = await s3.uploadFile(file, 'documents/secret.pdf');

// Get signed URL for temporary access
final signedUrl = await s3.getSignedUrl(path, Duration(hours: 1));

// Make file public
await s3.setVisibility(path, 'public');</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                CDN Integration
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// config/filesystems.dart - CDN configuration
's3': {
  'driver': 's3',
  'key': env('AWS_ACCESS_KEY_ID'),
  'secret': env('AWS_SECRET_ACCESS_KEY'),
  'region': env('AWS_DEFAULT_REGION'),
  'bucket': env('AWS_BUCKET'),
  'url': env('CDN_URL'), // Your CDN URL
  'endpoint': env('AWS_ENDPOINT'),
  'use_path_style_endpoint': env('AWS_USE_PATH_STYLE_ENDPOINT', false),
  'throw': false,
},

// app/services/cdn_service.dart
class CdnService {
  Future&lt;String&gt; getOptimizedUrl(String path, {String? format, int? quality}) async {
    final baseUrl = Storage.disk('s3').url(path);

    final params = &lt;String&gt;[];
    if (format != null) params.add('format=$format');
    if (quality != null) params.add('quality=$quality');

    if (params.isNotEmpty) {
      return '\$baseUrl?\${params.join('&amp;')}';
    }

    return baseUrl;
  }

  Future&lt;String&gt; getResponsiveImage(String path, int width) async {
    final baseUrl = Storage.disk('s3').url(path);
    return '$baseUrl?width=$width&amp;auto=format';
  }
}

// Usage
final cdn = CdnService();

// Get WebP version
final webpUrl = await cdn.getOptimizedUrl('image.jpg', format: 'webp', quality: 80);

// Get responsive image
final responsiveUrl = await cdn.getResponsiveImage('image.jpg', 800);</code></pre>
            </div>
          </div>

          <!-- File Security -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              File Security
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Secure file access and prevent unauthorized downloads.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Access Control
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/file_controller.dart
class FileController extends Controller {
  Future&lt;Response&gt; download(Request request, String filename) async {
    // Check if user owns the file
    final file = await FileModel.where('filename', filename)
                               .where('user_id', request.user().id)
                               .first();

    if (file == null) {
      return response.json({'error': 'File not found'}, 404);
    }

    // Check permissions
    if (!await this.canDownload(request.user(), file)) {
      return response.json({'error': 'Access denied'}, 403);
    }

    // Log the download
    await DownloadLog.create({
      'user_id': request.user().id,
      'file_id': file.id,
      'downloaded_at': DateTime.now(),
      'ip_address': request.ip(),
    });

    return Storage.download(file.path, file.original_name);
  }

  Future&lt;bool&gt; canDownload(User user, FileModel file) async {
    // Check if file is public
    if (file.visibility == 'public') {
      return true;
    }

    // Check if user owns the file
    if (file.user_id == user.id) {
      return true;
    }

    // Check if user has permission through roles/groups
    return await user.hasPermission('download_files') ||
           await user.inGroup(file.group_id);
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Signed URLs
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/file_controller.dart
class FileController extends Controller {
  Future&lt;Response&gt; getSignedUrl(Request request) async {
    final filename = request.input('filename');
    final expiry = Duration(hours: 1); // 1 hour expiry

    // Generate signed URL
    final signedUrl = await Storage.temporaryUrl(filename, expiry);

    return response.json({
      'url': signedUrl,
      'expires_at': DateTime.now().add(expiry),
    });
  }

  Future&lt;Response&gt; getMultipleSignedUrls(Request request) async {
    final filenames = request.input('filenames') as List&lt;String&gt;;
    final expiry = Duration(hours: 24);

    final urls = &lt;Map&lt;String, dynamic&gt;&gt;[];
    for (final filename in filenames) {
      final signedUrl = await Storage.temporaryUrl(filename, expiry);
      urls.add({
        'filename': filename,
        'url': signedUrl,
        'expires_at': DateTime.now().add(expiry),
      });
    }

    return response.json({'urls': urls});
  }
}

// Middleware for signed URL validation
// app/http/middleware/validate_signed_url.dart
class ValidateSignedUrl extends Middleware {
  @override
  Future&lt;Response&gt; handle(Request request, next) async {
    final signature = request.query('signature');
    final expires = request.query('expires');

    if (signature == null || expires == null) {
      return response.json({'error': 'Invalid signed URL'}, 403);
    }

    final expiryTime = DateTime.fromMillisecondsSinceEpoch(int.parse(expires));

    if (DateTime.now().isAfter(expiryTime)) {
      return response.json({'error': 'Signed URL has expired'}, 403);
    }

    // Validate signature (implementation depends on your signing method)
    if (!this.isValidSignature(request.url, signature)) {
      return response.json({'error': 'Invalid signature'}, 403);
    }

    return await next(request);
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Encryption
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/services/encrypted_storage.dart
import 'dart:convert';
import 'package:encrypt/encrypt.dart';
import 'package:khadem/src/core/storage/storage.dart';

class EncryptedStorage {
  final Storage storage;
  final Encrypter encrypter;

  EncryptedStorage(this.storage, String key)
      : encrypter = Encrypter(AES(Key.fromUtf8(key)));

  Future&lt;String&gt; putEncrypted(String path, File file) async {
    final bytes = await file.readAsBytes();
    final encrypted = encrypter.encryptBytes(bytes);

    // Store encrypted data
    final encryptedFile = File.fromRawPath(encrypted.bytes);
    return await storage.put(path, encryptedFile);
  }

  Future&lt;List&lt;int&gt;&gt; getDecrypted(String path) async {
    final encryptedData = await storage.get(path);
    final encrypted = Encrypted(encryptedData);
    return encrypter.decryptBytes(encrypted);
  }

  Future&lt;Response&gt; downloadDecrypted(String path, String filename) async {
    final decryptedBytes = await getDecrypted(path);
    return response.download(
      Stream.fromIterable([decryptedBytes]),
      filename,
      headers: {'Content-Type': 'application/octet-stream'}
    );
  }
}

// Usage
final encryptedStorage = EncryptedStorage(
  Storage.disk('local'),
  env('ENCRYPTION_KEY')
);

// Store encrypted file
await encryptedStorage.putEncrypted('sensitive.docx', file);

// Download decrypted file
return await encryptedStorage.downloadDecrypted('sensitive.docx', 'document.docx');</code></pre>
            </div>
          </div>

          <!-- Testing Storage -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Testing File Storage
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Test your file storage operations and uploads.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// tests/unit/services/storage_service_test.dart
import 'package:test/test.dart';
import 'package:khadem/src/core/storage/storage.dart';
import 'package:khadem/src/testing/fakes/storage_fake.dart';
import '../../app/services/storage_service.dart';

void main() {
  group('StorageService', () {
    late StorageService storageService;

    setUp(() {
      Storage.fake();
      storageService = StorageService();
    });

    tearDown(() {
      Storage.restore();
    });

    test('uploads file successfully', () async {
      final file = File('test.txt')..writeAsStringSync('Hello World');

      final path = await storageService.uploadFile(file, 'test.txt');

      expect(path, startsWith('uploads/'));
      Storage.assertExists(path);
    });

    test('deletes file successfully', () async {
      final file = File('test.txt')..writeAsStringSync('Hello World');
      final path = await storageService.uploadFile(file, 'test.txt');

      await storageService.deleteFile(path);

      Storage.assertMissing(path);
    });

    test('gets file URL', () async {
      final file = File('test.txt')..writeAsStringSync('Hello World');
      final path = await storageService.uploadFile(file, 'test.txt');

      final url = storageService.getUrl(path);

      expect(url, contains(path));
    });

    test('handles file not found', () async {
      expect(
        () async =&gt; await storageService.getFile('nonexistent.txt'),
        throwsA(isA&lt;FileNotFoundException&gt;())
      );
    });
  });
}

// tests/feature/file_upload_test.dart
import 'package:test/test.dart';
import '../../app/http/controllers/upload_controller.dart';

void main() {
  group('File Upload', () {
    test('validates file upload', () async {
      final request = Request.fake()
        .withFile('avatar', File('test.jpg'));

      final controller = UploadController();
      final response = await controller.uploadAvatar(request);

      expect(response.statusCode, 200);
    });

    test('rejects invalid file type', () async {
      final request = Request.fake()
        .withFile('avatar', File('test.exe'));

      final controller = UploadController();
      final response = await controller.uploadAvatar(request);

      expect(response.statusCode, 422);
      expect(response.json()['errors'], contains('avatar'));
    });

    test('rejects file too large', () async {
      final largeFile = File('large.jpg')..writeAsBytesSync(List.filled(3000000, 0)); // 3MB

      final request = Request.fake()
        .withFile('avatar', largeFile);

      final controller = UploadController();
      final response = await controller.uploadAvatar(request);

      expect(response.statusCode, 422);
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
