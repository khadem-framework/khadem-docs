<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Input Validation
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to validate user input and file uploads in your Khadem application using the powerful validation system
          </p>
        </div>

        <div class="space-y-8">
          <!-- System Overview -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              System Overview
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem's validation system provides comprehensive input validation with support for nested data structures,
              file uploads, and custom validation rules. It consists of several key components:
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Core Components
              </h3>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li><strong>Validator</strong>: Basic validation class for simple use cases</li>
                <li><strong>AdvancedInputValidator</strong>: Enhanced validator supporting nested validation and complex rules</li>
                <li><strong>ValidationRuleRepository</strong>: Registry of all available validation rules</li>
                <li><strong>Rule Interface</strong>: Contract for implementing custom validation rules</li>
                <li><strong>ValidationException</strong>: Exception thrown when validation fails</li>
              </ul>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Key Features
              </h3>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Laravel-style validation syntax with pipe-separated rules</li>
                <li>Nested validation using dot notation (e.g., <code>user.profile.email</code>)</li>
                <li>Array validation with wildcards (e.g., <code>attachments.*</code>)</li>
                <li>File upload validation with size and MIME type checking</li>
                <li>Custom validation rules and error messages</li>
                <li>Nullable field support</li>
                <li>Internationalization support for error messages</li>
              </ul>
            </div>
          </div>

          <!-- Basic Validation -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Validation
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use the <code>Validator</code> class for simple validation scenarios.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Basic Usage
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/validation/validator.dart';

void main() {
  // Input data to validate
  final data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'age': 25,
  };

  // Validation rules
  final rules = {
    'name': 'required|string|min:2',
    'email': 'required|email',
    'age': 'required|int|min:18',
  };

  // Create validator
  final validator = Validator(data, rules);

  // Check if validation passes
  if (validator.passes()) {
    print('✅ Validation passed!');
  } else {
    print('❌ Validation failed:');
    validator.errors.forEach((field, error) {
      print('   - \$field: \$error');
    });
  }

  // Or use validate() which throws ValidationException on failure
  try {
    validator.validate();
    print('✅ All validations passed!');
  } on ValidationException catch (e) {
    print('❌ Validation errors:');
    e.errors.forEach((field, error) {
      print('   - \$field: \$error');
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Available Rules
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Basic Rules</h4>
                  <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code>required</code> - Field must be present and not empty</li>
                    <li><code>nullable</code> - Field can be null, skips other validation</li>
                    <li><code>sometimes</code> - Field is validated only if present</li>
                    <li><code>string</code> - Value must be a string</li>
                    <li><code>int</code> - Value must be an integer</li>
                    <li><code>numeric</code> - Value must be numeric</li>
                    <li><code>bool</code> - Value must be boolean</li>
                    <li><code>email</code> - Value must be a valid email</li>
                    <li><code>url</code> - Value must be a valid URL</li>
                    <li><code>active_url</code> - URL must be accessible</li>
                    <li><code>min:N</code> - Minimum value/length</li>
                    <li><code>max:N</code> - Maximum value/length</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Advanced Rules</h4>
                  <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><code>alpha</code> - Alphabetic characters only</li>
                    <li><code>alpha_num</code> - Alphanumeric characters only</li>
                    <li><code>alpha_dash</code> - Alphanumeric, dashes, and underscores</li>
                    <li><code>starts_with:val</code> - String must start with specified value</li>
                    <li><code>ends_with:val</code> - String must end with specified value</li>
                    <li><code>regex:pattern</code> - Match regular expression</li>
                    <li><code>in:val1,val2</code> - Value must be in the list</li>
                    <li><code>confirmed</code> - Field must match field_confirmation</li>
                    <li><code>uuid</code> - Value must be a valid UUID</li>
                    <li><code>json</code> - Value must be valid JSON</li>
                    <li><code>phone</code> - Value must be a valid phone number</li>
                    <li><code>ip</code> - Value must be a valid IP address</li>
                    <li><code>ipv4</code> - Value must be a valid IPv4 address</li>
                    <li><code>ipv6</code> - Value must be a valid IPv6 address</li>
                  </ul>
                </div>
              </div>

              <div class="mt-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Date & Time Rules</h4>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>date</code> - Value must be a valid date</li>
                  <li><code>date_format:format</code> - Date must match specified format</li>
                  <li><code>before:date</code> - Date must be before specified date</li>
                  <li><code>after:date</code> - Date must be after specified date</li>
                </ul>
              </div>

              <div class="mt-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">File & Array Rules</h4>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>file</code> - Value must be a valid file upload</li>
                  <li><code>image</code> - File must be an image</li>
                  <li><code>mimes:ext1,ext2</code> - File must have specified extensions</li>
                  <li><code>max_file_size:N</code> - Maximum file size in KB</li>
                  <li><code>array</code> - Value must be an array</li>
                  <li><code>min_items:N</code> - Minimum number of array items</li>
                  <li><code>max_items:N</code> - Maximum number of array items</li>
                  <li><code>distinct</code> - Array items must be unique</li>
                  <li><code>in_array:field</code> - Value must exist in specified array field</li>
                  <li><code>not_in_array:field</code> - Value must not exist in specified array field</li>
                </ul>
              </div>

              <div class="mt-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Conditional Rules</h4>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code>required_if:field,value</code> - Required if another field has specified value</li>
                  <li><code>prohibited</code> - Field must not be present</li>
                  <li><code>prohibited_if:field,value</code> - Prohibited if another field has specified value</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Advanced Validation -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Advanced Validation
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use <code>AdvancedInputValidator</code> for complex validation scenarios including nested data and file uploads.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Nested Validation
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/validation/enhanced_validator.dart';

void main() {
  final data = {
    'user': {
      'name': 'John Doe',
      'email': 'john@example.com',
      'profile': {
        'age': 25,
        'website': 'https://example.com',
      },
    },
    'tags': ['dart', 'flutter', 'validation'],
  };

  final rules = {
    'user.name': 'required|string|min:2',
    'user.email': 'required|email',
    'user.profile.age': 'required|int|min:18',
    'user.profile.website': 'nullable|url',
    'tags': 'required|array|min_items:1|max_items:5',
    'tags.*': 'string|min:2|max:20',
  };

  final validator = AdvancedInputValidator(data, rules);

  if (validator.passes()) {
    print('✅ Nested validation passed!');
  } else {
    print('❌ Validation failed:');
    validator.errors.forEach((field, error) {
      print('   - \$field: \$error');
    });
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Array Validation with Wildcards
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Array validation using wildcards
final data = {
  'attachments': [
    {'name': 'doc1.pdf', 'size': 1024},
    {'name': 'doc2.docx', 'size': 2048},
    {'name': 'invalid', 'size': 999999}, // Invalid size
  ],
};

final rules = {
  'attachments': 'required|array|min_items:1|max_items:10',
  'attachments.*.name': 'required|string|min:3',
  'attachments.*.size': 'required|int|max_file_size:5120', // Max 5MB
};

final validator = AdvancedInputValidator(data, rules);

if (!validator.passes()) {
  print('Validation errors:');
  validator.errors.forEach((field, error) {
    print('   - \$field: \$error');
  });
  // Output:
  //    - attachments.2.size: The size must not be greater than 5120
}</code></pre>
            </div>
          </div>

          <!-- File Upload Validation -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              File Upload Validation
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Validate file uploads with size limits, MIME type checking, and other file-specific rules.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Validation Rules
              </h3>
              <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>file</code> - Value must be a valid file upload</li>
                <li><code>image</code> - File must be an image (jpg, png, gif, etc.)</li>
                <li><code>mimes:ext1,ext2,ext3</code> - File must have one of the specified extensions</li>
                <li><code>max_file_size:N</code> - Maximum file size in KB</li>
                <li><code>min:N</code> - Minimum file size in KB</li>
              </ul>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Single File Upload
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/http/request/request_body_parser.dart';

final data = {
  'avatar': UploadedFile(
    filename: 'profile.jpg',
    size: 1024 * 1024, // 1MB
    mimeType: 'image/jpeg',
    path: '/tmp/avatar.jpg',
  ),
};

final rules = {
  'avatar': 'required|file|image|max_file_size:2048|mimes:jpg,jpeg,png', // Max 2MB
};

final validator = AdvancedInputValidator(data, rules);

if (validator.passes()) {
  print('✅ File validation passed!');
} else {
  validator.errors.forEach((field, error) {
    print('❌ \$field: \$error');
  });
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Multiple File Upload
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>final data = {
  'documents': [
    UploadedFile(filename: 'contract.pdf', size: 2 * 1024 * 1024, mimeType: 'application/pdf'),
    UploadedFile(filename: 'invoice.pdf', size: 1024 * 1024, mimeType: 'application/pdf'),
    UploadedFile(filename: 'large_file.zip', size: 50 * 1024 * 1024, mimeType: 'application/zip'), // Too large
  ],
};

final rules = {
  'documents': 'required|array|max_items:5',
  'documents.*': 'file|max_file_size:10240|mimes:pdf,doc,docx', // Max 10MB per file
};

final validator = AdvancedInputValidator(data, rules);

if (!validator.passes()) {
  validator.errors.forEach((field, error) {
    print('❌ \$field: \$error');
  });
  // Output: documents.2: The file size must not exceed 10240 KB
}</code></pre>
            </div>
          </div>

          <!-- Helper Methods -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Helper Methods
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Use built-in helper methods for common validation patterns.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Upload Helper
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Generate file upload rules easily
final fileRules = ValidatorHelpers.fileUploadRules(
  multiple: true,
  allowedMimes: ['jpg', 'jpeg', 'png', 'pdf'],
  maxSizeKB: 5120, // 5MB
  nullable: true,
);

// Result:
print(fileRules);
// {
//   'attachments': 'nullable|array',
//   'attachments.*': 'file|max_file_size:5120|mimes:jpg,jpeg,png,pdf'
// }</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Array Validation Helper
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// Generate array validation rules
final arrayRules = ValidatorHelpers.arrayRules(
  'tags',
  'required|string|min:2|max:20',
  minItems: 1,
  maxItems: 10,
  nullable: false,
);

// Result:
print(arrayRules);
// {
//   'tags': 'required|array|min_items:1|max_items:10',
//   'tags.*': 'required|string|min:2|max:20'
// }</code></pre>
            </div>
          </div>

          <!-- Custom Rules -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Custom Validation Rules
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create and register custom validation rules for your specific business logic.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Implementing a Custom Rule
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/contracts/validation/rule.dart';
import 'package:khadem/src/core/validation/rule_registry.dart';

class PhoneRule implements Rule {
  @override
  String? validate(String field, dynamic value, String? arg, {Map&lt;String, dynamic&gt;? data}) {
    if (value == null) return null;

    // Simple phone number validation (customize as needed)
    final phoneRegex = RegExp(r'^\+?[\d\s\-\(\)]{10,}$');

    if (value is! String || !phoneRegex.hasMatch(value)) {
      return 'phone_validation'; // Translation key
    }

    return null; // Validation passed
  }
}

// Register the custom rule
ValidationRuleRepository.register('phone', () => PhoneRule());

// Now use it in validation
final rules = {
  'phone': 'required|phone',
};</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Complex Custom Rule
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>class UniqueEmailRule implements Rule {
  @override
  String? validate(String field, dynamic value, String? arg, {Map&lt;String, dynamic&gt;? data}) {
    if (value == null) return null;

    // Simulate database check (replace with actual DB query)
    final existingEmails = ['admin@example.com', 'user@example.com'];

    if (existingEmails.contains(value)) {
      return 'email_unique_validation';
    }

    return null;
  }
}

// Register and use
ValidationRuleRepository.register('unique_email', () => UniqueEmailRule());

final rules = {
  'email': 'required|email|unique_email',
};</code></pre>
            </div>
          </div>

          <!-- Error Handling -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Error Handling
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Handle validation errors gracefully with proper exception handling and user-friendly messages.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                ValidationException
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/support/exceptions/validation_exception.dart';

try {
  final validator = AdvancedInputValidator(data, rules);
  validator.validate(); // Throws ValidationException if validation fails

  // Process validated data
  print('✅ Data is valid, processing...');

} on ValidationException catch (e) {
  // Handle validation errors
  print('❌ Validation failed:');

  e.errors.forEach((field, error) {
    print('   - \$field: \$error');
  });

  // Return error response (in HTTP context)
  return Response.json({
    'success': false,
    'errors': e.errors,
  }, 422);
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Manual Error Checking
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>final validator = AdvancedInputValidator(data, rules);

if (validator.passes()) {
  // Validation successful
  processData(data);
} else {
  // Handle errors manually
  final errors = validator.errors;

  // Log errors
  errors.forEach((field, error) {
    print('Validation error for \$field: \$error');
  });

  // Group errors by field type
  final fieldErrors = &lt;String, List&lt;String&gt;&gt;{};
  errors.forEach((field, error) {
    final fieldType = field.contains('.') ? field.split('.').first : field;
    fieldErrors.putIfAbsent(fieldType, () => []).add(error);
  });

  // Return structured error response
  return {
    'success': false,
    'field_errors': fieldErrors,
    'all_errors': errors.values.toList(),
  };
}</code></pre>
            </div>
          </div>

          <!-- Real-World Examples -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Real-World Examples
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Complete examples showing validation in practical scenarios.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                User Registration
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>class UserController {
  Future&lt;Response&gt; register(Map&lt;String, dynamic&gt; requestData) async {
    final rules = {
      'name': 'required|string|min:2|max:50',
      'email': 'required|email|unique_email',
      'password': 'required|string|min:8|confirmed',
      'password_confirmation': 'required',
      'avatar': 'nullable|file|image|max_file_size:2048|mimes:jpg,jpeg,png',
      'terms_accepted': 'required|bool',
    };

    try {
      final validator = AdvancedInputValidator(requestData, rules);
      validator.validate();

      // Create user account
      final user = await createUser(requestData);

      return Response.json({
        'success': true,
        'user': user,
        'message': 'User registered successfully',
      });

    } on ValidationException catch (e) {
      return Response.json({
        'success': false,
        'errors': e.errors,
      }, 422);
    }
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                File Upload with Metadata
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>class DocumentController {
  Future&lt;Response&gt; uploadDocuments(Map&lt;String, dynamic&gt; requestData) async {
    final rules = {
      'title': 'required|string|min:3|max:100',
      'category': 'required|string|in:legal,financial,personal',
      'documents': 'required|array|min_items:1|max_items:5',
      'documents.*.name': 'required|string|min:1|max:100',
      'documents.*.file': 'required|file|max_file_size:10240|mimes:pdf,doc,docx',
      'documents.*.is_public': 'nullable|bool',
      'tags': 'nullable|array|max_items:10',
      'tags.*': 'string|min:2|max:20',
    };

    try {
      final validator = AdvancedInputValidator(requestData, rules);
      validator.validate();

      // Process documents
      final documents = await processDocuments(requestData['documents']);

      return Response.json({
        'success': true,
        'documents': documents,
        'message': 'Documents uploaded successfully',
      });

    } on ValidationException catch (e) {
      return Response.json({
        'success': false,
        'errors': e.errors,
      }, 422);
    }
  }
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