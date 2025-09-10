<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Validation
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn how to validate user input and handle validation errors
          </p>
        </div>

        <div class="space-y-8">
          <!-- Basic Validation -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic Validation
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem provides a powerful validation system with Laravel-inspired syntax.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Simple Validation
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/http/controller.dart';
import 'package:khadem/src/core/http/request.dart';
import 'package:khadem/src/core/http/response.dart';

class UserController extends Controller {
  Future&lt;Response&gt; store(Request request) async {
    final data = request.validate({
      'name': 'required|string|max:255',
      'email': 'required|email|unique:users',
      'password': 'required|string|min:8|confirmed',
      'age': 'nullable|integer|min:18|max:120',
    });

    // Data is validated and safe to use
    final user = User(
      name: data['name'],
      email: data['email'],
      password: Hash.make(data['password']),
      age: data['age'],
    );

    await user.save();

    return redirect('/users');
  }
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Manual Validation
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>import 'package:khadem/src/core/validation/validator.dart';

class UserController extends Controller {
  Future&lt;Response&gt; update(Request request, int id) async {
    final validator = Validator.make(request.all(), {
      'name': 'required|string|max:255',
      'email': 'required|email|unique:users,email,$id',
    });

    if (validator.fails()) {
      return back().withErrors(validator.errors()).withInput();
    }

    // Validation passed
    final user = User.find(id);
    user.name = request.input('name');
    user.email = request.input('email');
    await user.save();

    return redirect('/users');
  }
}</code></pre>
            </div>
          </div>

          <!-- Available Rules -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Available Validation Rules
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Khadem supports a wide range of validation rules.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Basic Rules
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">required</code> - Field must be present</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">nullable</code> - Field can be null</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">string</code> - Must be a string</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">integer</code> - Must be an integer</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">numeric</code> - Must be numeric</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">boolean</code> - Must be boolean</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">email</code> - Must be valid email</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">url</code> - Must be valid URL</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Size Rules
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">min:value</code> - Minimum value/length</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">max:value</code> - Maximum value/length</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">size:value</code> - Exact size</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">between:min,max</code> - Between values</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Database Rules
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">unique:table,column,except</code> - Unique in database</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">exists:table,column</code> - Must exist in database</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Other Rules
                </h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">confirmed</code> - Must match field_confirmation</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">in:value1,value2</code> - Must be in list</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">not_in:value1,value2</code> - Must not be in list</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">regex:pattern</code> - Must match regex</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">date</code> - Must be valid date</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">after:date</code> - Must be after date</li>
                  <li><code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">before:date</code> - Must be before date</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Custom Validation Rules -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Custom Validation Rules
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create your own validation rules for complex business logic.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Custom Rules
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/validation/strong_password_rule.dart
import 'package:khadem/src/core/validation/rule.dart';

class StrongPasswordRule extends Rule {
  @override
  String get name =&gt; 'strong_password';

  @override
  String? validate(String? value, Map&lt;String, dynamic&gt; data) {
    if (value == null || value.isEmpty) {
      return null; // Let required rule handle this
    }

    if (value.length &lt; 8) {
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
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Registering Custom Rules
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/providers/app_service_provider.dart
import 'package:khadem/src/core/validation/validator.dart';
import '../validation/strong_password_rule.dart';

class AppServiceProvider extends ServiceProvider {
  @override
  void boot() {
    // Register custom validation rule
    Validator.extend('strong_password', StrongPasswordRule());
  }
}

// Using the custom rule
final data = request.validate({
  'password': 'required|strong_password',
});</code></pre>
            </div>
          </div>

          <!-- Form Request Validation -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Form Request Validation
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Create dedicated request classes for complex validation logic.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Creating Form Requests
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/requests/create_user_request.dart
import 'package:khadem/src/core/http/form_request.dart';

class CreateUserRequest extends FormRequest {
  @override
  Map&lt;String, String&gt; rules() {
    return {
      'name': 'required|string|max:255',
      'email': 'required|email|unique:users',
      'password': 'required|string|min:8|confirmed',
      'role': 'required|in:admin,user,moderator',
    };
  }

  @override
  Map&lt;String, String&gt; messages() {
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
}</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Using Form Requests
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>// app/http/controllers/user_controller.dart
class UserController extends Controller {
  Future&lt;Response&gt; store(CreateUserRequest request) async {
    // Validation is automatically handled
    final user = User(
      name: request.input('name'),
      email: request.input('email'),
      password: request.input('password'), // Already hashed
      role: request.input('role'),
    );

    await user.save();

    return redirect('/users');
  }
}

// routes/web.dart
Route.post('/users', UserController.store, request: CreateUserRequest);</code></pre>
            </div>
          </div>

          <!-- Error Handling -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Error Handling
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Handle validation errors gracefully in your application.
            </p>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Displaying Errors in Templates
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>&lt;!-- resources/views/users/create.khdm.html --&gt;
&lt;form method="POST" action="/users"&gt;
  @csrf

  &lt;div&gt;
    &lt;label for="name"&gt;Name&lt;/label&gt;
    &lt;input type="text" name="name" value="{{ old('name') }}"&gt;
    @error('name')
      &lt;span class="error"&gt;{{ $message }}&lt;/span&gt;
    @enderror
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for="email"&gt;Email&lt;/label&gt;
    &lt;input type="email" name="email" value="{{ old('email') }}"&gt;
    @error('email')
      &lt;span class="error"&gt;{{ $message }}&lt;/span&gt;
    @enderror
  &lt;/div&gt;

  &lt;button type="submit"&gt;Create User&lt;/button&gt;
&lt;/form&gt;</code></pre>
            </div>

            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Handling Errors in Controllers
              </h3>
              <pre class="text-sm text-gray-800 dark:text-gray-200"><code>class UserController extends Controller {
  Future&lt;Response&gt; store(Request request) async {
    try {
      final data = request.validate({
        'name': 'required',
        'email': 'required|email',
      });

      // Process data
      return redirect('/users');
    } catch (ValidationException e) {
      // Handle validation errors
      return back()
        .withErrors(e.errors)
        .withInput()
        .with('message', 'Please fix the errors below');
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
