<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Validation</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        A comprehensive guide to input validation in Khadem. Learn how to validate user input, create custom validation rules, use Form Request classes, and handle validation errors effectively.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">Input Validation</span>
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Error Handling</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Form Requests</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Custom Rules</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Introduction</h2>
      
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Validation is a critical component of any web application. Khadem provides a robust and intuitive validation system 
          inspired by Laravel, allowing you to validate incoming HTTP requests with ease. The validation system is designed to be:
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="flex items-center gap-3 mb-3">
              <i class="fas fa-check-circle text-2xl text-blue-600 dark:text-blue-400"></i>
              <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100">Easy to Use</h3>
            </div>
            <p class="text-sm text-blue-800 dark:text-blue-200">
              Simple, expressive syntax that makes validation rules easy to read and write. Chain multiple rules with the pipe character.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <div class="flex items-center gap-3 mb-3">
              <i class="fas fa-bolt text-2xl text-green-600 dark:text-green-400"></i>
              <h3 class="text-lg font-semibold text-green-900 dark:text-green-100">Powerful</h3>
            </div>
            <p class="text-sm text-green-800 dark:text-green-200">
              50+ built-in validation rules covering common use cases, from basic type checking to complex file validation.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="flex items-center gap-3 mb-3">
              <i class="fas fa-puzzle-piece text-2xl text-purple-600 dark:text-purple-400"></i>
              <h3 class="text-lg font-semibold text-purple-900 dark:text-purple-100">Extensible</h3>
            </div>
            <p class="text-sm text-purple-800 dark:text-purple-200">
              Create custom validation rules tailored to your application's specific business logic and requirements.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <div class="flex items-center gap-3 mb-3">
              <i class="fas fa-shield-alt text-2xl text-red-600 dark:text-red-400"></i>
              <h3 class="text-lg font-semibold text-red-900 dark:text-red-100">Type-Safe</h3>
            </div>
            <p class="text-sm text-red-800 dark:text-red-200">
              Leverage Dart's type system with automatic type conversion and validation for a safer codebase.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          The most common way to validate incoming requests in Khadem is by calling the <code>validate()</code> method 
          on the request object. This method accepts a map of validation rules and automatically throws a 
          <code>ValidationException</code> if validation fails, which you can catch and handle appropriately.
        </p>
        
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Here's a complete example of validating user registration data:
        </p>
      </div>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Request Validation</h3>

        <CodeBlock
          :code="basicValidationCode"
          language="dart"
          title="User Registration with Validation"
        />

        <div class="mt-6 space-y-3">
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
              <i class="fas fa-info-circle"></i>
              How It Works
            </h4>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-2 ml-6 list-disc">
              <li><strong>Validation Rules:</strong> Define rules using pipe-separated strings (e.g., <code>'required|email|max:255'</code>)</li>
              <li><strong>Automatic Validation:</strong> The <code>validate()</code> method automatically validates input and throws <code>ValidationException</code> on failure</li>
              <li><strong>Type Safety:</strong> Validated data is returned as a <code>Map&lt;String, dynamic&gt;</code> containing only the validated fields</li>
              <li><strong>Error Handling:</strong> Catch <code>ValidationException</code> to handle validation errors gracefully</li>
            </ul>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
              <i class="fas fa-exclamation-triangle"></i>
              Important Notes
            </h4>
            <ul class="text-sm text-amber-700 dark:text-amber-300 space-y-1 ml-6 list-disc">
              <li>Validation rules follow <strong>Laravel-inspired syntax</strong> for familiarity</li>
              <li>Database validation rules like <code>unique</code> and <code>exists</code> must be implemented manually</li>
              <li>Custom messages can be provided to override default error messages</li>
              <li>Only validated fields are returned in the result</li>
            </ul>
          </div>
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
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">required_if:field,value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Required if other field has value</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">prohibited</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Field must not be present</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">prohibited_if:field,value</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Prohibited if other field has value</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">Email & Confirmation Rules</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">email</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be valid email address</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">confirmed</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must match field_confirmation</span>
            </div>
            <div class="flex items-center justify-between">
              <code class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm">in:val1,val2,val3</code>
              <span class="text-sm text-gray-600 dark:text-gray-400">Must be one of specified values</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-6">
        <h3 class="text-lg font-medium text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
          <i class="fas fa-lightbulb text-blue-600 dark:text-blue-400"></i>
          Validation Tips & Best Practices
        </h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Combining Rules</h4>
            <p class="text-gray-700 dark:text-gray-300">
              Use the pipe <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">|</code> character to chain multiple rules:
            </p>
            <code class="block mt-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              'email': 'required|email|max:255'
            </code>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Nullable vs Optional</h4>
            <p class="text-gray-700 dark:text-gray-300">
              <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">nullable</code> allows null values, while omitting 
              <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">required</code> makes a field optional.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Array Validation</h4>
            <p class="text-gray-700 dark:text-gray-300">
              Use <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">.*</code> notation to validate array items:
            </p>
            <code class="block mt-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              'tags.*': 'required|string|max:50'
            </code>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Rule Order Matters</h4>
            <p class="text-gray-700 dark:text-gray-300">
              Place <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">nullable</code> first, and type-checking rules (like 
              <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">int</code>, <code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">string</code>) before size rules.
            </p>
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
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Validation Messages</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          While Khadem provides sensible default error messages for all validation rules, you often want to provide 
          more user-friendly, context-specific messages that match your application's tone and help users understand 
          exactly what they need to fix. Custom messages make your validation errors more helpful and professional.
        </p>
      </div>

      <CodeBlock
        :code="customMessagesCode"
        language="dart"
        title="Custom Validation Messages"
      />

      <div class="space-y-4">
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
            <i class="fas fa-key"></i>
            Custom Message Pattern
          </h4>
          <p class="text-sm text-blue-800 dark:text-blue-200 mb-4">
            Custom messages use a simple naming convention: <code class="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">field.ruleName</code>
          </p>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg space-y-3">
            <div class="flex items-start gap-3">
              <code class="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded font-mono text-xs flex-shrink-0">email.required</code>
              <span class="text-sm text-gray-700 dark:text-gray-300">Custom message for when <code>email</code> field fails <code>required</code> rule</span>
            </div>
            <div class="flex items-start gap-3">
              <code class="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded font-mono text-xs flex-shrink-0">password.min</code>
              <span class="text-sm text-gray-700 dark:text-gray-300">Custom message for when <code>password</code> field fails <code>min</code> rule</span>
            </div>
            <div class="flex items-start gap-3">
              <code class="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded font-mono text-xs flex-shrink-0">age.int</code>
              <span class="text-sm text-gray-700 dark:text-gray-300">Custom message for when <code>age</code> field fails <code>int</code> rule</span>
            </div>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i>
            Best Practices for Custom Messages
          </h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-2">
            <li>• <strong>Be specific:</strong> Tell users exactly what's wrong and how to fix it</li>
            <li>• <strong>Be friendly:</strong> Use a conversational tone that matches your brand</li>
            <li>• <strong>Provide examples:</strong> Show users what a valid value looks like</li>
            <li>• <strong>Be consistent:</strong> Use the same tone and style across all messages</li>
            <li>• <strong>Avoid technical jargon:</strong> Make messages understandable to all users</li>
          </ul>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-3">💡 Use Case Example</h4>
          <p class="text-sm text-purple-700 dark:text-purple-300 mb-3">
            Instead of the generic message <em>"The email field is required"</em>, you might say:
          </p>
          <div class="bg-white dark:bg-gray-900 p-3 rounded">
            <p class="text-sm text-purple-900 dark:text-purple-100 font-medium">
              "We need your email address to send you order updates and account notifications"
            </p>
          </div>
          <p class="text-sm text-purple-700 dark:text-purple-300 mt-3">
            This explains <strong>why</strong> the field is required, making users more likely to provide the information.
          </p>
        </div>
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

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          For complex validation scenarios or when you want to reuse validation logic across multiple controllers, 
          Khadem provides <strong>Form Request classes</strong>. These classes encapsulate validation rules, authorization logic, 
          custom messages, and data preparation in a single, reusable component.
        </p>
        
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Form Requests follow a powerful lifecycle that gives you fine-grained control over the validation process:
        </p>

        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800 my-6">
          <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center gap-2">
            <i class="fas fa-sync-alt"></i>
            Form Request Lifecycle
          </h3>
          <div class="space-y-3">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 class="font-semibold text-indigo-900 dark:text-indigo-100">Authorization Check</h4>
                <p class="text-sm text-indigo-700 dark:text-indigo-300">The <code>authorize()</code> method is called first to check if the user has permission to make this request</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 class="font-semibold text-indigo-900 dark:text-indigo-100">Input Preparation</h4>
                <p class="text-sm text-indigo-700 dark:text-indigo-300">The <code>prepareForValidation()</code> method allows you to clean, normalize, or modify input before validation</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 class="font-semibold text-indigo-900 dark:text-indigo-100">Validation</h4>
                <p class="text-sm text-indigo-700 dark:text-indigo-300">Rules defined in <code>rules()</code> are applied using custom messages from <code>messages()</code></p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 class="font-semibold text-indigo-900 dark:text-indigo-100">Post-Validation Processing</h4>
                <p class="text-sm text-indigo-700 dark:text-indigo-300">The <code>passedValidation()</code> method is called after successful validation to transform validated data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Creating a Form Request Class</h3>
      
      <CodeBlock
        :code="formRequestCode"
        language="dart"
        title="Example: Create User Form Request"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-6">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fas fa-tasks"></i>
            Method Overview
          </h4>
          <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li><code>rules()</code> - Define validation rules (required)</li>
            <li><code>messages()</code> - Custom error messages (optional)</li>
            <li><code>authorize()</code> - Authorization logic (optional, defaults to true)</li>
            <li><code>prepareForValidation()</code> - Pre-processing (optional)</li>
            <li><code>passedValidation()</code> - Post-processing (optional)</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
            <i class="fas fa-check-circle"></i>
            Benefits
          </h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Keeps controllers clean and focused</li>
            <li>• Reusable validation logic</li>
            <li>• Easy to test independently</li>
            <li>• Type-safe validated data</li>
            <li>• Centralized authorization</li>
          </ul>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Using Form Requests in Controllers</h3>

      <CodeBlock
        :code="formRequestUsageCode"
        language="dart"
        title="Controller Integration"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800 mt-6">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
          <i class="fas fa-star"></i>
          Key Features of Form Requests
        </h4>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white dark:bg-gray-900 p-3 rounded">
            <h5 class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">Centralized Validation</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">All validation logic for a specific action in one place</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-3 rounded">
            <h5 class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">Custom Messages</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">Override default error messages with user-friendly alternatives</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-3 rounded">
            <h5 class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">Authorization Built-in</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">Check permissions before validation even runs</p>
          </div>
          <div class="bg-white dark:bg-gray-900 p-3 rounded">
            <h5 class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">Data Transformation</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">Modify data before and after validation automatically</p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Error Handling</h2>

      <CodeBlock
        :code="errorHandlingCode"
        language="dart"
        title="Handling Validation Errors"
      />

      <div class="space-y-4">
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            When validation fails, Khadem returns a standardized JSON error response with HTTP status code <code>422 Unprocessable Entity</code>. 
            This response includes detailed information about what went wrong, making it easy for frontend applications to display appropriate error messages to users.
          </p>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
            <i class="fas fa-code"></i>
            Validation Error Response Format
          </h4>
          <pre class="text-sm bg-red-900/10 p-4 rounded border border-red-300 dark:border-red-700 overflow-x-auto"><code>{
  "error": true,
  "message": "Validation failed.",
  "status_code": 422,
  "timestamp": "2025-10-21T16:22:50.456153",
  "details": {
    "email": "The email field is required.",
    "password": "The password must be at least 8 characters.",
    "age": "The age must be at least 18."
  },
  "exception_type": "ValidationException"
}</code></pre>

          <div class="mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h5 class="font-semibold text-red-800 dark:text-red-200 mb-3">Response Fields Explained</h5>
            <div class="space-y-2 text-sm">
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">error</code>
                <span class="text-gray-700 dark:text-gray-300">Always <code>true</code> for error responses</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">message</code>
                <span class="text-gray-700 dark:text-gray-300">A general error message describing the type of error</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">status_code</code>
                <span class="text-gray-700 dark:text-gray-300">HTTP status code (<code>422</code> for validation errors)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">timestamp</code>
                <span class="text-gray-700 dark:text-gray-300">ISO 8601 timestamp when the error occurred</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">details</code>
                <span class="text-gray-700 dark:text-gray-300">Object containing field-specific error messages (key = field name, value = error message)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-red-200 dark:bg-red-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">exception_type</code>
                <span class="text-gray-700 dark:text-gray-300">The type of exception that was thrown</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h5 class="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <i class="fas fa-lightbulb"></i>
            Frontend Integration Tip
          </h5>
          <p class="text-sm text-blue-700 dark:text-blue-300">
            The <code>details</code> object makes it easy to display field-specific errors in your frontend. 
            Simply map each key to the corresponding form field and display the error message to the user.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Examples</h2>

      <div class="prose dark:prose-invert max-w-none mb-6">
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond basic field validation, Khadem supports advanced validation scenarios including conditional rules, 
          array/nested data validation, and comprehensive file upload validation with size, type, and dimension checks.
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
            <i class="fas fa-random"></i>
            Conditional Validation
          </h4>
          <p class="text-sm text-purple-800 dark:text-purple-200 mb-4">
            Apply different validation rules based on the values of other fields. Perfect for forms where 
            certain fields are only required when specific options are selected.
          </p>
          <CodeBlock
            :code="conditionalValidationCode"
            language="dart"
            title="Conditional Validation Based on Other Fields"
          />
          <div class="mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h5 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">Common Use Cases:</h5>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Password fields only required when actually changing password</li>
              <li>• Business information only required for business account types</li>
              <li>• Shipping address only required when different from billing address</li>
              <li>• Different validation rules for different user roles</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <i class="fas fa-list"></i>
            Array Validation
          </h4>
          <p class="text-sm text-green-800 dark:text-green-200 mb-4">
            Validate arrays and nested object structures with ease. Khadem supports validating entire arrays 
            as well as individual items within arrays using dot notation.
          </p>
          <CodeBlock
            :code="arrayValidationCode"
            language="dart"
            title="Validating Arrays and Nested Data"
          />
          <div class="mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h5 class="font-semibold text-green-900 dark:text-green-100 mb-2">Array Validation Patterns:</h5>
            <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div class="flex gap-3">
                <code class="bg-green-100 dark:bg-green-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">tags</code>
                <span>Validates the entire array (e.g., required, min items, max items)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-green-100 dark:bg-green-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">tags.*</code>
                <span>Validates each item in the array (e.g., each tag must be a string)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-green-100 dark:bg-green-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">items.*.name</code>
                <span>Validates nested properties within array objects</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
          <h4 class="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <i class="fas fa-file-upload"></i>
            File Upload Validation
          </h4>
          <p class="text-sm text-orange-800 dark:text-orange-200 mb-4">
            Comprehensive file upload validation including file type (mimes), size limits, image dimensions, 
            and more. Ensure uploaded files meet your application's requirements before processing.
          </p>
          <CodeBlock
            :code="fileValidationCode"
            language="dart"
            title="Validating File Uploads"
          />
          <div class="mt-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h5 class="font-semibold text-orange-900 dark:text-orange-100 mb-3">File Validation Rules:</h5>
            <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div class="flex gap-3">
                <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">file</code>
                <span>Ensures the field contains an uploaded file</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">image</code>
                <span>File must be an image (jpg, jpeg, png, gif, bmp, svg, webp)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">mimes:jpg,png</code>
                <span>Restricts allowed file types by extension</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">max:2048</code>
                <span>Maximum file size in kilobytes (2048 = 2MB)</span>
              </div>
              <div class="flex gap-3">
                <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded font-mono text-xs flex-shrink-0">dimensions</code>
                <span>Validate image dimensions (min_width, max_width, min_height, max_height, ratio)</span>
              </div>
            </div>
          </div>
        </div>
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
        res.status(422).sendJson({
          'error': true,
          'message': 'Validation failed.',
          'status_code': 422,
          'timestamp': DateTime.now().toIso8601String(),
          'details': {
            'email': 'This email address is already registered.',
          },
          'exception_type': 'ValidationException'
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

      res.status(201).sendJson({
        'success': true,
        'message': 'User created successfully',
        'data': {
          'user': user.toJson(),
        }
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } catch (e) {
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
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
        res.status(422).sendJson({
          'error': true,
          'message': 'Validation failed.',
          'status_code': 422,
          'timestamp': DateTime.now().toIso8601String(),
          'details': {
            'email': 'This email address is already registered.',
          },
          'exception_type': 'ValidationException'
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
        'data': {
          'user': user.toJson(),
        }
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } catch (e) {
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
    }
  }
}`

// Custom Validation Messages
const customMessagesCode = `import 'package:khadem/khadem_dart.dart';

class UserController {
  static Future store(Request req, Response res) async {
    try {
      // Validate with custom error messages
      final validatedData = await req.validate(
        {
          'email': 'required|email',
          'password': 'required|min:8|confirmed',
          'age': 'required|int|min:18',
          'profile_picture': 'nullable|image|max:2048',
          'terms': 'required|accepted',
        },
        messages: {
          // Pattern: 'field.ruleName' => 'Custom message'
          'email.required': 'We need your email address to create your account',
          'email.email': 'Please enter a valid email address (e.g., user@example.com)',
          'password.required': 'A password is required to secure your account',
          'password.min': 'Your password must be at least 8 characters long for security',
          'password.confirmed': 'The password confirmation does not match. Please try again',
          'age.required': 'Please provide your age to continue',
          'age.int': 'Age must be a valid number',
          'age.min': 'You must be at least 18 years old to register',
          'profile_picture.image': 'Profile picture must be an image file (jpg, png, gif, etc.)',
          'profile_picture.max': 'Profile picture size cannot exceed 2MB (2048KB)',
          'terms.required': 'You must accept the terms and conditions to proceed',
          'terms.accepted': 'Please check the box to accept our terms and conditions',
        },
      );

      // Process validated data
      final user = await User.create(validatedData);

      res.status(201).sendJson({
        'success': true,
        'message': 'User created successfully',
        'data': {'user': user.toJson()}
      });
    } on ValidationException catch (e) {
      // Error response with custom messages
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors, // Will contain your custom messages
        'exception_type': 'ValidationException'
      });
    }
  }
}

// Example Error Response with Custom Messages:
// {
//   "error": true,
//   "message": "Validation failed.",
//   "status_code": 422,
//   "timestamp": "2025-10-21T16:30:15.123456",
//   "details": {
//     "email": "We need your email address to create your account",
//     "password": "Your password must be at least 8 characters long for security",
//     "age": "You must be at least 18 years old to register",
//     "terms": "You must accept the terms and conditions to proceed"
//   },
//   "exception_type": "ValidationException"
// }`

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
import 'package:khadem/khadem.dart';

class CreateUserRequest extends FormRequest {
  @override
  Map<String, String> rules() {
    return {
      'name': 'required|string|max:255',
      'email': 'required|email',
      'password': 'required|string|min:8|confirmed',
      'role': 'required|in:admin,user,moderator',
    };
  }

  @override
  Map<String, String> messages() {
    return {
      'name.required': 'Please provide your name',
      'email.email': 'Please provide a valid email address',
      'password.min': 'Password must be at least 8 characters',
      'role.in': 'Invalid role selected',
    };
  }

  @override
  void prepareForValidation(Request request) {
    // Called before validation - access request data here
    // Use this to normalize or clean data before validation runs
  }

  @override
  void passedValidation(Map<String, dynamic> validated) {
    // Called after successful validation
    // Modify the validated data directly
    validated['password'] = Hash.make(validated['password']);
    validated['created_at'] = DateTime.now().toIso8601String();
  }

  @override
  bool authorize(Request request) {
    // Check if user is authorized to make this request
    return request.user()?.can('create-users') ?? false;
  }
}`

const formRequestUsageCode = `// lib/src/http/controllers/user_controller.dart
class UserController {
  static Future store(Request req, Response res) async {
    try {
      // Create FormRequest instance and validate
      final formRequest = CreateUserRequest();
      final validatedData = await formRequest.validate(req);

      // Authorization and validation automatically handled by FormRequest
      // validatedData contains validated fields with passedValidation() modifications
      
      // Manual database uniqueness check (if needed)
      final existingUser = await User.where('email', validatedData['email']).first();
      if (existingUser != null) {
        res.status(422).sendJson({
          'error': true,
          'message': 'Validation failed.',
          'status_code': 422,
          'timestamp': DateTime.now().toIso8601String(),
          'details': {
            'email': 'This email address is already registered.',
          },
          'exception_type': 'ValidationException'
        });
        return;
      }

      final user = User(
        name: validatedData['name'],
        email: validatedData['email'],
        password: validatedData['password'], // Already hashed in passedValidation()
        role: validatedData['role'],
        created_at: validatedData['created_at'], // Added in passedValidation()
      );

      await user.save();

      res.status(201).sendJson({
        'success': true,
        'message': 'User created successfully',
        'data': {
          'user': user.toJson(),
        }
      });
    } on UnauthorizedException catch (e) {
      res.status(403).sendJson({
        'error': true,
        'message': e.message,
        'status_code': 403,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': 'UnauthorizedException'
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    }
  }
}`

// Error Handling
const errorHandlingCode = `class UserController {
  static Future store(Request req, Response res) async {
    try {
      final validatedData = await req.validate({
        'name': 'required|string|max:255',
        'email': 'required|email',
        'password': 'required|string|min:8',
      });

      // Manual database uniqueness check
      final existingUser = await User.where('email', validatedData['email']).first();
      if (existingUser != null) {
        // Return custom validation error for duplicate email
        res.status(422).sendJson({
          'error': true,
          'message': 'Validation failed.',
          'status_code': 422,
          'timestamp': DateTime.now().toIso8601String(),
          'details': {
            'email': 'This email address is already registered.',
          },
          'exception_type': 'ValidationException'
        });
        return;
      }

      // Process validated data
      final user = User(
        name: validatedData['name'],
        email: validatedData['email'],
        password: Hash.make(validatedData['password']),
      );

      await user.save();

      // Success response
      res.status(201).sendJson({
        'success': true,
        'message': 'User created successfully',
        'data': {
          'user': user.toJson(),
        }
      });
    } on ValidationException catch (e) {
      // Khadem automatically formats ValidationException as:
      // {
      //   "error": true,
      //   "message": "Validation failed.",
      //   "status_code": 422,
      //   "timestamp": "2025-10-21T16:22:50.456153",
      //   "details": { "field": "error message" },
      //   "exception_type": "ValidationException"
      // }
      res.status(422).sendJson({
        'error': true,
        'message': e.message,
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } on UnauthorizedException catch (e) {
      res.status(403).sendJson({
        'error': true,
        'message': e.message,
        'status_code': 403,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': 'UnauthorizedException'
      });
    } catch (e) {
      // Handle unexpected errors
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
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

      // Manual database uniqueness check (excluding current user)
      final existingUser = await User.where('email', validatedData['email'])
          .where('id', '!=', req.user?.id ?? 0)
          .first();
      if (existingUser != null) {
        res.status(422).sendJson({
          'error': true,
          'message': 'Validation failed.',
          'status_code': 422,
          'timestamp': DateTime.now().toIso8601String(),
          'details': {
            'email': 'This email address is already registered.',
          },
          'exception_type': 'ValidationException'
        });
        return;
      }

      // Process validated data...
      res.sendJson({
        'success': true,
        'message': 'Profile updated successfully',
        'data': {
          'user': req.user?.toJson(),
        }
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } catch (e) {
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
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
          res.status(422).sendJson({
            'error': true,
            'message': 'Validation failed.',
            'status_code': 422,
            'timestamp': DateTime.now().toIso8601String(),
            'details': {
              'categories': 'One or more selected categories do not exist.',
            },
            'exception_type': 'ValidationException'
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
      final product = await Product.create(validatedData);

      res.status(201).sendJson({
        'success': true,
        'message': 'Product created successfully',
        'data': {
          'product': product.toJson(),
        }
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } catch (e) {
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
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
        'avatar': 'nullable|file|image|mimes:jpeg,png,jpg|max_file_size:1024',
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
        'data': {
          'document': document?.filename,
          'avatar': avatar?.filename,
          'images_count': images?.length ?? 0,
        }
      });
    } on ValidationException catch (e) {
      res.status(422).sendJson({
        'error': true,
        'message': 'Validation failed.',
        'status_code': 422,
        'timestamp': DateTime.now().toIso8601String(),
        'details': e.errors,
        'exception_type': 'ValidationException'
      });
    } catch (e) {
      res.status(500).sendJson({
        'error': true,
        'message': 'An unexpected error occurred',
        'status_code': 500,
        'timestamp': DateTime.now().toIso8601String(),
        'exception_type': e.runtimeType.toString()
      });
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
