<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Validation</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Learn how to validate user input and handle validation errors in Khadem
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Input Validation</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Error Handling</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Form Requests</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Custom Rules</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Validation</h3>

        <CodeBlock
          :code="basicValidationCode"
          language="dart"
          title="Basic Request Validation"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Validation rules follow Laravel-inspired syntax</p>
          <p><strong>⚡ Tip:</strong> Use <code>req.validate()</code> for automatic validation with error responses</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Available Validation Rules</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Basic Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">required</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Field must be present</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">nullable</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Field can be null</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">string</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be a string</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">int</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be an integer</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">numeric</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be numeric</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">bool</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be boolean</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">url</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid URL</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">active_url</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">URL must be accessible</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">ip</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid IP</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">ipv4</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid IPv4</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">ipv6</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid IPv6</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Size & Comparison Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">min:value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Minimum value/length</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">max:value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Maximum value/length</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">between:min,max</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Between values</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">alpha</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Alphabetic characters only</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">alpha_num</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Alphanumeric characters only</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">alpha_dash</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Alphanumeric, dashes, underscores</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">starts_with:val</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must start with specified value</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">ends_with:val</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must end with specified value</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">regex:pattern</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must match regex pattern</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">uuid</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid UUID</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">json</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid JSON</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">phone</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid phone number</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Database Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between opacity-60">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm line-through">unique:table,column</code>
              <span class="text-sm text-gray-500 dark:text-gray-500">Unique in database (not implemented)</span>
            </div>
            <div class="flex items-center justify-between opacity-60">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm line-through">exists:table,column</code>
              <span class="text-sm text-gray-500 dark:text-gray-500">Must exist in database (not implemented)</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
            <p class="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Note:</strong> Database validation rules are not yet implemented in Khadem.
              For now, perform database uniqueness and existence checks manually in your controllers.
            </p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Date & Time Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">date</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid date</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">date_format:format</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Date must match format</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">before:date</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be before specified date</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">after:date</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be after specified date</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Array & Collection Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">array</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be an array</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">min_items:N</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Minimum number of items</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">max_items:N</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Maximum number of items</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">distinct</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Items must be unique</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">in_array:field</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must exist in specified array</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">not_in_array:field</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must not exist in specified array</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">File & Upload Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">file</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be a valid file</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">image</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be an image file</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">mimes:ext1,ext2</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must have specified extensions</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">max_file_size:N</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Maximum file size in KB</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Conditional Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">sometimes</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Validate only if present</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">nullable</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Can be null, skips validation</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">required_if:field,value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Required if another field has value</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">prohibited</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Field must not be present</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">prohibited_if:field,value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Prohibited if another field has value</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Manual Validation</h2>

      <CodeBlock
        :code="manualValidationCode"
        language="dart"
        title="Manual Validation with Validator"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">When to Use Manual Validation</h4>
        <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
          <li>• Complex validation logic that can't be expressed with rules</li>
          <li>• Conditional validation based on other field values</li>
          <li>• Need more control over validation flow</li>
          <li>• Custom error handling requirements</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Validation Rules</h2>

      <CodeBlock
        :code="customRuleCode"
        language="dart"
        title="Creating Custom Validation Rules"
      />

      <CodeBlock
        :code="registerCustomRuleCode"
        language="dart"
        title="Registering Custom Rules"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Custom Rule Benefits</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• Reusable validation logic across your application</li>
          <li>• Complex business rules validation</li>
          <li>• Consistent error messages</li>
          <li>• Easy to test and maintain</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Form Request Classes</h2>

      <CodeBlock
        :code="formRequestCode"
        language="dart"
        title="Creating Form Request Classes"
      />

      <CodeBlock
        :code="formRequestUsageCode"
        language="dart"
        title="Using Form Requests in Controllers"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Form Request Features</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• Centralized validation logic</li>
          <li>• Custom error messages</li>
          <li>• Input preparation and sanitization</li>
          <li>• Authorization checks</li>
          <li>• Automatic validation on controller injection</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Handling Validation Errors"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Error Response Format</h4>
        <pre class="text-sm bg-red-900/10 p-3 rounded border border-red-300 dark:border-red-700"><code>{
  "error": true,
  "message": "Validation failed",
  "errors": {
    "email": ["The email field is required"],
    "password": ["The password must be at least 8 characters"]
  },
  "status_code": 422
}</code></pre>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Examples</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Conditional Validation</h4>
          <CodeBlock
            :code="conditionalValidationCode"
            language="dart"
            title="Conditional Validation Based on Other Fields"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Array Validation</h4>
          <CodeBlock
            :code="arrayValidationCode"
            language="dart"
            title="Validating Arrays and Nested Data"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">File Upload Validation</h4>
          <CodeBlock
            :code="fileValidationCode"
            language="dart"
            title="Validating File Uploads"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Testing Validation</h2>

      <CodeBlock
        :code="testingCode"
        language="dart"
        title="Testing Validation Rules"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Testing Strategies</h4>
        <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Test validation rules with valid and invalid data</li>
          <li>• Test custom validation rules in isolation</li>
          <li>• Test form request validation and error messages</li>
          <li>• Test validation error responses</li>
          <li>• Test conditional validation logic</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Validation',
  meta: [
    { name: 'description', content: 'Learn how to validate user input and handle validation errors in Khadem' }
  ]
})

// Basic Validation Examples
const basicValidationCode = `import 'package:khadem/khadem_dart.dart';

class UserController {
  static Future store(Request req, Response res) async {
    try {
      // Validate request data (excluding database rules for now)
      final validatedData = await req.validate({
        'name': 'required|string|max:255',
        'email': 'required|email', // Note: unique validation done manually below
        'password': 'required|string|min:8|confirmed',
        'age': 'nullable|int|min:18|max:120',
      });

      // Manual database uniqueness check
      final existingUser = await User.where('email', validatedData['email']).first();
      if (existingUser != null) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': {'email': ['This email is already registered']},
          'message': 'Validation failed'
        });
        return;
      }

      // Create user with validated data
      final user = User(
        name: validatedData['name'],
        email: validatedData['email'],
        password: Hash.make(validatedData['password']),
        age: validatedData['age'],
      );

      await user.save();

      res.statusCode(201).sendJson({
        'success': true,
        'message': 'User created successfully',
        'user': user.toJson(),
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors,
          'message': 'Validation failed'
        });
      } else {
        res.statusCode(500).sendJson({
          'success': false,
          'message': 'Internal server error'
        });
      }
    }
  }
}`

// Manual Validation
const manualValidationCode = `import 'package:khadem/khadem_dart.dart';

class UserController {
  static Future update(Request req, Response res, int id) async {
    try {
      // Get request body data
      final bodyData = await req.body;

      // Validate data manually (excluding database rules for now)
      final validatedData = req.validateData(bodyData, {
        'name': 'required|string|max:255',
        'email': 'required|email', // Note: unique validation done manually below
      });

      // Manual database uniqueness check (excluding current user)
      final existingUser = await User.where('email', validatedData['email'])
          .where('id', '!=', id)
          .first();
      if (existingUser != null) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': {'email': ['This email is already registered']},
          'message': 'Validation failed'
        });
        return;
      }

      // Update user
      final user = await User.find(id);
      user.name = validatedData['name'];
      user.email = validatedData['email'];
      await user.save();

      res.sendJson({
        'success': true,
        'message': 'User updated successfully',
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors,
          'message': 'Validation failed'
        });
      } else {
        res.statusCode(500).sendJson({
          'success': false,
          'message': 'Internal server error'
        });
      }
    }
  }
}`

// Custom Validation Rules
const customRuleCode = `// lib/src/validation/strong_password_rule.dart
import 'package:khadem/src/contracts/validation/rule.dart';

class StrongPasswordRule implements Rule {
  @override
  String? validate(String field, dynamic value, String? arg, {required Map<String, dynamic> data}) {
    if (value == null || value.isEmpty) {
      return null; // Let required rule handle this
    }

    if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }

    if (!RegExp(r'[A-Z]').hasMatch(value)) {
      return 'Password must contain at least one uppercase letter';
    }

    if (!RegExp(r'[a-z]').hasMatch(value)) {
      return 'Password must contain at least one lowercase letter';
    }

    if (!RegExp(r'[0-9]').hasMatch(value)) {
      return 'Password must contain at least one number';
    }

    return null; // Valid
  }
}`

const registerCustomRuleCode = `// lib/src/core/validation/validation_service_provider.dart
import 'package:khadem/src/core/validation/validation_rule_repository.dart';
import '../../validation/strong_password_rule.dart';

class ValidationServiceProvider {
  static void registerCustomRules() {
    // Register custom validation rule
    ValidationRuleRepository.register('strong_password', () => StrongPasswordRule());
  }
}

// Using the custom rule
class UserController {
  static Future create(Request req, Response res) async {
    try {
      final validatedData = await req.validate({
        'password': 'required|strong_password',
        'email': 'required|email',
      });

      res.sendJson({
        'success': true,
        'message': 'User validated successfully'
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors
        });
      }
    }
  }
}`

// Form Request Classes
const formRequestCode = `// lib/src/http/requests/create_user_request.dart
import 'package:khadem/src/core/http/form_request.dart';

class CreateUserRequest extends FormRequest {
  @override
  Map<String, String> rules() {
    return {
      'name': 'required|string|max:255',
      'email': 'required|email', // Note: unique validation done manually
      'password': 'required|string|min:8|confirmed',
      'role': 'required|in:admin,user,moderator',
    };
  }

  @override
  Map<String, String> messages() {
    return {
      'name.required': 'Please provide your name',
      'email.unique': 'This email is already registered',
      'password.min': 'Password must be at least 8 characters',
      'role.in': 'Invalid role selected',
    };
  }

  @override
  void prepareForValidation() {
    // Modify input before validation
    if (input('name') != null) {
      merge({'name': input('name').trim()});
    }
  }

  @override
  void passedValidation() {
    // Called after successful validation
    // You can modify the validated data here
    merge({'password': Hash.make(input('password'))});
  }
}`

const formRequestUsageCode = `// lib/src/http/controllers/user_controller.dart
class UserController {
  static Future store(CreateUserRequest req, Response res) async {
    // Manual database uniqueness check
    final existingUser = await User.where('email', req.input('email')).first();
    if (existingUser != null) {
      res.statusCode(422).sendJson({
        'success': false,
        'errors': {'email': ['This email is already registered']},
        'message': 'Validation failed'
      });
      return;
    }

    // Validation is automatically handled by FormRequest
    final user = User(
      name: req.input('name'),
      email: req.input('email'),
      password: req.input('password'), // Already hashed
      role: req.input('role'),
    );

    await user.save();

    res.statusCode(201).sendJson({
      'success': true,
      'message': 'User created successfully',
      'user': user.toJson(),
    });
  }
}

// routes/web.dart
Route.post('/users', UserController.store, request: CreateUserRequest);`

// Error Handling
const errorHandlingCode = `class UserController {
  static Future store(Request req, Response res) async {
    try {
      final validatedData = await req.validate({
        'name': 'required',
        'email': 'required|email',
      });

      // Process validated data
      final user = User(
        name: validatedData['name'],
        email: validatedData['email'],
      );

      await user.save();

      res.statusCode(201).sendJson({
        'success': true,
        'message': 'User created successfully',
      });
    } catch (e) {
      if (e is ValidationException) {
        // Handle validation errors
        res.statusCode(422).sendJson({
          'success': false,
          'message': 'Validation failed',
          'errors': e.errors,
        });
      } else {
        res.statusCode(500).sendJson({
          'success': false,
          'message': 'Internal server error'
        });
      }
    }
  }
}`

// Advanced Examples
const conditionalValidationCode = `class UserController {
  static Future updateProfile(Request req, Response res) async {
    try {
      final bodyData = await req.body;
      final rules = {
        'name': 'required|string|max:255',
        'email': 'required|email', // Note: unique validation done manually below
      };

      // Manual database uniqueness check (excluding current user)
      final existingUser = await User.where('email', req.input('email'))
          .where('id', '!=', req.user?.id ?? 0)
          .first();
      if (existingUser != null) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': {'email': ['This email is already registered']},
          'message': 'Validation failed'
        });
        return;
      }

      // Add password validation only if provided
      if (req.has('password') && req.input('password')?.isNotEmpty == true) {
        rules['password'] = 'required|string|min:8|confirmed';
        rules['password_confirmation'] = 'required';
      }

      // Add company validation for business users
      if (req.input('account_type') == 'business') {
        rules['company_name'] = 'required|string|max:255';
        rules['tax_id'] = 'required|string|size:9';
      }

      final validatedData = req.validateData(bodyData, rules);

      // Process validated data...
      res.sendJson({
        'success': true,
        'message': 'Profile updated successfully',
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors,
          'message': 'Validation failed'
        });
      }
    }
  }
}`

const arrayValidationCode = `class ProductController {
  static Future store(Request req, Response res) async {
    try {
      final validatedData = await req.validate({
        'name': 'required|string|max:255',
        'price': 'required|numeric|min:0',
        'categories': 'required|array|min_items:1',
        'categories.*': 'int', // Note: exists validation done manually below
        'images': 'nullable|array|max_items:5',
        'images.*': 'file|mimes:jpeg,png,jpg|max_file_size:2048',
        'specifications': 'nullable|array',
        'specifications.*.name': 'required|string|max:100',
        'specifications.*.value': 'required|string|max:255',
      });

      // Manual database existence check for categories
      final categoryIds = validatedData['categories'] as List;
      for (final categoryId in categoryIds) {
        final category = await Category.find(categoryId);
        if (category == null) {
          res.statusCode(422).sendJson({
            'success': false,
            'errors': {'categories': ['One or more selected categories do not exist']},
            'message': 'Validation failed'
          });
          return;
        }
      }

      // Data structure:
      // {
      //   'name': 'Product Name',
      //   'price': 99.99,
      //   'categories': [1, 2, 3],
      //   'images': [/* uploaded files */],
      //   'specifications': [
      //     {'name': 'Color', 'value': 'Red'},
      //     {'name': 'Size', 'value': 'Large'}
      //   ]
      // }

      // Process validated data...
      res.statusCode(201).sendJson({
        'success': true,
        'message': 'Product created successfully',
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors,
          'message': 'Validation failed'
        });
      }
    }
  }
}`

const fileValidationCode = `class FileUploadController {
  static Future upload(Request req, Response res) async {
    try {
      final validatedData = await req.validate({
        'document': 'required|file|mimes:pdf,doc,docx|max_file_size:5120', // 5MB
        'images': 'nullable|array|max_items:3',
        'images.*': 'file|mimes:jpeg,png,jpg,gif|max_file_size:2048', // 2MB each
        'avatar': 'nullable|file|mimes:jpeg,png,jpg|dimensions:min_width=100,min_height=100|max_file_size:1024',
      });

      // Access uploaded files
      final document = req.file('document');
      final images = req.filesByName('images'); // Array of files
      final avatar = req.file('avatar');

      // Process files...
      if (document != null) {
        await document.saveTo('/uploads/documents/\${document.filename}');
      }

      if (avatar != null) {
        await avatar.saveTo('/uploads/avatars/user_\${req.user?.id ?? 0}.jpg');
      }

      res.sendJson({
        'success': true,
        'message': 'Files uploaded successfully',
      });
    } catch (e) {
      if (e is ValidationException) {
        res.statusCode(422).sendJson({
          'success': false,
          'errors': e.errors,
          'message': 'Validation failed'
        });
      }
    }
  }
}`

// Testing
const testingCode = `// Test validation rules
void main() {
  group('Validation Rules', () {
    test('required rule works correctly', () {
      final data = {'name': ''};
      final rules = {'name': 'required'};

      final validator = Validator(data, rules);

      expect(validator.fails(), true);
      expect(validator.errors, contains('name'));
    });

    test('email rule validates email format', () {
      final data = {'email': 'invalid-email'};
      final rules = {'email': 'required|email'};

      final validator = Validator(data, rules);

      expect(validator.fails(), true);
      expect(validator.errors, contains('email'));
    });

    test('custom rule integration', () {
      // Register custom rule for testing
      ValidationRuleRepository.register('test_rule', () => TestRule());

      final data = {'field': 'test'};
      final rules = {'field': 'test_rule'};

      final validator = Validator(data, rules);

      expect(validator.passes(), true);
    });
  });

  group('Request Validation', () {
    test('request validation works', () async {
      // Mock request with test data
      final mockReq = MockRequest();
      when(mockReq.validate({
        'name': 'required',
        'email': 'required|email',
      })).thenAnswer((_) async => {
        'name': 'John Doe',
        'email': 'john@example.com',
      });

      final result = await mockReq.validate({
        'name': 'required',
        'email': 'required|email',
      });

      expect(result, isNotNull);
      expect(result['name'], equals('John Doe'));
    });

    test('request validation throws on invalid data', () async {
      final mockReq = MockRequest();
      when(mockReq.validate({
        'email': 'required|email',
      })).thenThrow(ValidationException({
        'email': ['The email field is required']
      }));

      expect(
        () async => await mockReq.validate({'email': 'required|email'}),
        throwsA(isA<ValidationException>())
      );
    });
  });
}`
</script>
