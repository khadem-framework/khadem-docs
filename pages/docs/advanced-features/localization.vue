<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Localization</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Internationalization and localization with parameter replacement, pluralization, and namespace support.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">Parameters</span>
        <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">Pluralization</span>
        <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">Namespaces</span>
        <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">File-based</span>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Quick Start</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200 mb-4">Basic Translation</h3>

        <CodeBlock
          :code="basicUsageCode"
          language="dart"
          title="Basic Translation Usage"
        />

        <div class="mt-4 space-y-2 text-sm text-blue-700 dark:text-blue-300">
          <p><strong>💡 Note:</strong> Translations are automatically loaded from <code>lang/</code> directory</p>
          <p><strong>⚡ Tip:</strong> Use descriptive keys like <code>'messages.welcome'</code> or <code>'validation.required'</code></p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Directory Structure</h2>

      <CodeBlock
        :code="directoryStructureCode"
        language="bash"
        title="Translation Files Organization"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">File Format</h4>
        <CodeBlock
          :code="translationFileCode"
          language="json"
          title="lang/en/messages.json"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Parameter Replacement</h2>

      <CodeBlock
        :code="parameterUsageCode"
        language="dart"
        title="Parameter Replacement in Translations"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Parameter Syntax</h4>
        <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
          <li>• <code>:name</code> - Simple parameter replacement</li>
          <li>• <code>:count</code> - Numeric parameter for pluralization</li>
          <li>• <code>:field</code> - Field name in validation messages</li>
          <li>• <code>:app</code> - Application name or dynamic values</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Pluralization</h2>

      <CodeBlock
        :code="pluralizationUsageCode"
        language="dart"
        title="Pluralization with Count-Based Choices"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h4 class="font-medium text-indigo-800 dark:text-indigo-200 mb-2">Pluralization Rules</h4>
        <ul class="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
          <li>• <code>item|items</code> - Singular|Plural form</li>
          <li>• <code>:count item|:count items</code> - With count parameter</li>
          <li>• <code>apple|apples</code> - Simple pluralization</li>
          <li>• Works with any count: 0, 1, 2, 3, etc.</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Locale Management</h2>

      <CodeBlock
        :code="localeManagementCode"
        language="dart"
        title="Setting Global and Request Locales"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">Locale Types</h4>
        <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
          <li>• <strong>Global Locale</strong> - Application-wide default locale</li>
          <li>• <strong>Request Locale</strong> - Per-request locale override</li>
          <li>• <strong>Fallback Locale</strong> - Used when translation is missing</li>
          <li>• <strong>Override Locale</strong> - One-time locale for specific calls</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Namespace Support</h2>

      <CodeBlock
        :code="namespaceUsageCode"
        language="dart"
        title="Namespace Support for Modular Translations"
      />

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h4 class="font-medium text-orange-800 dark:text-orange-200 mb-2">Namespace Use Cases</h4>
        <ul class="text-sm text-orange-700 dark:text-orange-300 space-y-1">
          <li>• Package-specific translations</li>
          <li>• Feature-specific translations</li>
          <li>• Third-party library translations</li>
          <li>• Modular application translations</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Field Translations</h2>

      <CodeBlock
        :code="fieldTranslationCode"
        language="dart"
        title="Translating Form Field Labels"
      />

      <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h4 class="font-medium text-teal-800 dark:text-teal-200 mb-2">Field Translation Structure</h4>
        <CodeBlock
          :code="fieldTranslationFileCode"
          language="json"
          title="lang/en/fields.json"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Custom Parameter Replacers</h2>

      <CodeBlock
        :code="customReplacerCode"
        language="dart"
        title="Custom Parameter Replacement Logic"
      />

      <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800">
        <h4 class="font-medium text-pink-800 dark:text-pink-200 mb-2">Replacer Use Cases</h4>
        <ul class="text-sm text-pink-700 dark:text-pink-300 space-y-1">
          <li>• Date/time formatting</li>
          <li>• Currency formatting</li>
          <li>• Number formatting</li>
          <li>• Custom object serialization</li>
          <li>• Complex conditional formatting</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Fallback and Missing Translations</h2>

      <CodeBlock
        :code="fallbackUsageCode"
        language="dart"
        title="Fallback Locale Handling"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Fallback Strategy</h4>
        <ol class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <li>1. Try requested locale with namespace</li>
          <li>2. Try requested locale without namespace</li>
          <li>3. Try fallback locale with namespace</li>
          <li>4. Try fallback locale without namespace</li>
          <li>5. Return the key itself as last resort</li>
        </ol>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Translation Management</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            :code="managementUsageCode"
            language="dart"
            title="Translation Management"
          />
        </div>

        <div>
          <CodeBlock
            :code="inspectionUsageCode"
            language="dart"
            title="Translation Inspection"
          />
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 class="font-medium mb-2">Management Operations</h4>
        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• <code>has(key)</code> - Check if translation exists</li>
          <li>• <code>get(key)</code> - Get raw translation value</li>
          <li>• <code>clearCache()</code> - Clear translation cache</li>
          <li>• <code>getAvailableLocales()</code> - List available locales</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Advanced Usage Patterns</h2>

      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Middleware for Request Localization</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Set locale based on request headers or user preferences</p>
          <CodeBlock
            :code="middlewarePatternCode"
            language="dart"
            title="Localization Middleware"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Validation Messages</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Localized validation error messages</p>
          <CodeBlock
            :code="validationPatternCode"
            language="dart"
            title="Validation with Localization"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-medium mb-2">Email Templates</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Localized email content and subjects</p>
          <CodeBlock
            :code="emailPatternCode"
            language="dart"
            title="Email Localization"
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices</h2>

      <div class="space-y-4">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">✅ Do's</h4>
          <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>• Use descriptive, hierarchical keys (e.g., <code>'auth.login.title'</code>)</li>
            <li>• Set appropriate fallback locales for missing translations</li>
            <li>• Use parameters for dynamic content instead of string concatenation</li>
            <li>• Organize translations by feature or domain</li>
            <li>• Use pluralization for count-dependent messages</li>
            <li>• Test translations with different locales</li>
            <li>• Document translation keys and their parameters</li>
            <li>• Use namespaces for package-specific translations</li>
            <li>• Cache translations for better performance</li>
            <li>• Handle missing translations gracefully</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-medium text-red-800 dark:text-red-200 mb-2">❌ Don'ts</h4>
          <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Don't hardcode text strings in your application code</li>
            <li>• Don't use translation keys as fallback text</li>
            <li>• Don't concatenate translated strings with dynamic content</li>
            <li>• Don't use generic keys like <code>'message1'</code>, <code>'text2'</code></li>
            <li>• Don't forget to handle pluralization for countable items</li>
            <li>• Don't ignore missing translation warnings</li>
            <li>• Don't use complex logic in translation files</li>
            <li>• Don't forget to clear cache after translation file changes</li>
            <li>• Don't use different parameter names inconsistently</li>
            <li>• Don't mix different locales in the same response</li>
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
            <li>• Translations are cached after first load</li>
            <li>• Use <code>clearCache()</code> to refresh after file changes</li>
            <li>• Large translation files are loaded entirely into memory</li>
            <li>• Consider splitting large translation files by feature</li>
            <li>• Use namespaces to organize and load translations on-demand</li>
            <li>• Minimize parameter replacement in performance-critical paths</li>
          </ul>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 class="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Memory Usage</h4>
          <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• All loaded translations are kept in memory</li>
            <li>• Use namespaces to load only required translations</li>
            <li>• Clear cache periodically in long-running applications</li>
            <li>• Monitor memory usage with large translation sets</li>
          </ul>
        </div>
      </div>
    </section>

  
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Localization',
  meta: [
    { name: 'description', content: 'Comprehensive localization documentation for Khadem' }
  ]
})

// Quick Start Examples
const basicUsageCode = `// Set global locale
Lang.setGlobalLocale('en');
Lang.setFallbackLocale('en');

// Basic translation
String greeting = Lang.t('messages.greeting');
String welcome = Lang.t('messages.welcome', parameters: {'name': 'Alice'});

// Pluralization
String items = Lang.choice('items.count', 5);

// Field translation
String label = Lang.getField('email');

// Check if translation exists
if (Lang.has('messages.greeting')) {
  print('Translation exists');
}`

// Directory Structure
const directoryStructureCode = `project_root/
└── lang/
    ├── en/
    │   ├── messages.json
    │   ├── validation.json
    │   ├── fields.json
    │   └── auth.json
    ├── fr/
    │   ├── messages.json
    │   ├── validation.json
    │   └── fields.json
    └── es/
        ├── messages.json
        └── validation.json`

const translationFileCode = `{
  "greeting": "Hello :name!",
  "welcome": "Welcome to :app",
  "items": "item|items",
  "apples": "You have :count apple|You have :count apples",
  "error_required": "The :field field is required",
  "login": {
    "title": "Sign In",
    "email": "Email Address",
    "password": "Password",
    "button": "Sign In"
  }
}`

// Parameter Replacement
const parameterUsageCode = `// Simple parameter replacement
String greeting = Lang.t('messages.greeting', parameters: {'name': 'Alice'});
// Result: "Hello Alice!"

// Multiple parameters
String welcome = Lang.t('messages.welcome', parameters: {
  'name': 'Alice',
  'app': 'MyApp'
});
// Result: "Welcome to MyApp"

// Field names in validation
String error = Lang.t('validation.required', parameters: {'field': 'email'});
// Result: "The email field is required"

// Dynamic values
String notification = Lang.t('notifications.order_placed', parameters: {
  'order_id': order.id,
  'total': order.total.toString(),
});
// Result: "Order #123 placed for $99.99"`

// Pluralization
const pluralizationUsageCode = `// Basic pluralization
String item1 = Lang.choice('items.count', 1); // "1 item"
String item5 = Lang.choice('items.count', 5); // "5 items"

// With parameters
String apples1 = Lang.choice('apples', 1); // "You have 1 apple"
String apples3 = Lang.choice('apples', 3); // "You have 3 apples"

// Complex pluralization
String files = Lang.choice('files.uploaded', fileCount, parameters: {
  'count': fileCount,
  'user': userName,
});
// Result: "John uploaded 1 file" or "John uploaded 5 files"

// In templates
String message = Lang.t('cart.summary', parameters: {
  'item_count': itemCount,
  'total': totalPrice,
});
// Translation: "Your cart has :item_count item|Your cart has :item_count items"`

// Locale Management
const localeManagementCode = `// Set global locale for entire application
Lang.setGlobalLocale('en');
Lang.setFallbackLocale('en');

// Set locale for current request (per-request)
Lang.setRequestLocale('fr');

// Override locale for specific calls
String germanText = Lang.t('messages.hello', locale: 'de');

// Get current locale information
String currentLocale = Lang.getGlobalLocale();
String fallbackLocale = Lang.getFallbackLocale();

// List available locales
List<String> locales = Lang.getAvailableLocales();

// Middleware example for automatic locale detection
class LocaleMiddleware extends Middleware {
  @override
  Future<void> handle(Request request, Response response, Next next) async {
    // Detect locale from Accept-Language header
    String locale = _detectLocaleFromHeader(request.header('accept-language'));
    Lang.setRequestLocale(locale);

    await next();

    // Clean up request-specific locale
    // (This happens automatically when request ends)
  }
}`

// Namespace Support
const namespaceUsageCode = `// Load package-specific translations
Lang.loadNamespace('auth', 'en', {
  'login': 'Sign In',
  'register': 'Create Account',
  'forgot_password': 'Forgot Password',
});

Lang.loadNamespace('auth', 'fr', {
  'login': 'Se Connecter',
  'register': 'Créer un Compte',
  'forgot_password': 'Mot de Passe Oublié',
});

// Use namespaced translations
String loginButton = Lang.t('login', namespace: 'auth');

// Mix global and namespaced translations
String pageTitle = Lang.t('auth.page_title', namespace: 'auth');
String welcomeMessage = Lang.t('messages.welcome'); // Global namespace

// Package structure example
class AuthPackage {
  static void initialize() {
    // Load translations for this package
    Lang.loadNamespace('auth', 'en', _englishTranslations);
    Lang.loadNamespace('auth', 'fr', _frenchTranslations);
  }

  static String loginTitle() => Lang.t('login.title', namespace: 'auth');
  static String loginButton() => Lang.t('login.button', namespace: 'auth');
}`

// Field Translations
const fieldTranslationCode = `// Translate field labels
String emailLabel = Lang.getField('email'); // Uses "fields.email" key
String passwordLabel = Lang.getField('password');
String firstNameLabel = Lang.getField('first_name');

// With namespace
String customField = Lang.getField('custom_field', namespace: 'my_package');

// In forms
class UserForm {
  Map<String, String> getFieldLabels() {
    return {
      'email': Lang.getField('email'),
      'password': Lang.getField('password'),
      'first_name': Lang.getField('first_name'),
      'last_name': Lang.getField('last_name'),
    };
  }
}

// Validation integration
class Validator {
  static String getErrorMessage(String field, String rule, [Map<String, dynamic>? params]) {
    String key = 'validation.\${field}_\$rule';
    if (!Lang.has(key)) {
      key = 'validation.\$rule'; // Fallback to generic rule message
    }
    return Lang.t(key, parameters: {'field': Lang.getField(field), ...?params});
  }
}`

const fieldTranslationFileCode = `{
  "email": "Email Address",
  "password": "Password",
  "first_name": "First Name",
  "last_name": "Last Name",
  "phone": "Phone Number",
  "address": "Address",
  "city": "City",
  "country": "Country",
  "postal_code": "Postal Code"
}`

// Custom Parameter Replacers
const customReplacerCode = `// Add custom replacer for date formatting
Lang.addParameterReplacer((key, value, params) {
  if (key == 'date' && value is DateTime) {
    return _formatDate(value, params['locale'] ?? 'en');
  }
  return ':$key'; // Default replacement
});

// Add currency formatter
Lang.addParameterReplacer((key, value, params) {
  if (key == 'currency' && value is num) {
    return _formatCurrency(value, params['currency'] ?? 'USD');
  }
  return ':$key';
});

// Add number formatter
Lang.addParameterReplacer((key, value, params) {
  if (key == 'number' && value is num) {
    return _formatNumber(value, params['locale'] ?? 'en');
  }
  return ':$key';
});

// Usage with custom replacers
String invoice = Lang.t('invoice.due_date', parameters: {
  'date': DateTime.now().add(Duration(days: 30)),
  'amount': 99.99,
  'currency': 'EUR',
});
// Translation: "Invoice due on March 15, 2024 for €99.99"

// Complex object formatting
Lang.addParameterReplacer((key, value, params) {
  if (key == 'user' && value is User) {
    return value.fullName;
  }
  if (key == 'product' && value is Product) {
    return '\${value.name} (\${value.sku})';
  }
  return ':$key';
});

String orderMessage = Lang.t('order.shipped', parameters: {
  'user': currentUser,
  'product': orderedProduct,
  'tracking': trackingNumber,
});`

// Fallback and Missing Translations
const fallbackUsageCode = `// Set fallback locale
Lang.setFallbackLocale('en');

// Translation lookup order:
// 1. Try 'fr' locale with 'auth' namespace
// 2. Try 'fr' locale with global namespace
// 3. Try 'en' fallback locale with 'auth' namespace
// 4. Try 'en' fallback locale with global namespace
// 5. Return key itself if not found

String message = Lang.t('auth.login', locale: 'fr', namespace: 'auth');

// Handle missing translations gracefully
String safeTranslate(String key, {Map<String, dynamic>? parameters}) {
  if (Lang.has(key)) {
    return Lang.t(key, parameters: parameters);
  }

  // Log missing translation
  Khadem.logger.warning('Missing translation for key: \$key');

  // Return a user-friendly fallback
  return _humanizeKey(key);
}

String _humanizeKey(String key) {
  return key.split('.').last.replaceAll('_', ' ').toUpperCase();
}

// Check translation existence
if (Lang.has('messages.greeting')) {
  return Lang.t('messages.greeting');
} else {
  return 'Hello!'; // Fallback
}

// Get raw translation value
String? rawTranslation = Lang.get('messages.greeting');
if (rawTranslation != null) {
  // Process raw translation
}`

// Translation Management
const managementUsageCode = `// Check if translation exists
bool exists = Lang.has('messages.greeting');
bool existsInNamespace = Lang.has('login', namespace: 'auth');

// Get raw translation value
String? rawValue = Lang.get('messages.greeting');
String? namespacedValue = Lang.get('login', namespace: 'auth');

// Clear translation cache (useful during development)
Lang.clearCache();

// Get available locales
List<String> locales = Lang.getAvailableLocales();

// Switch translation provider
Lang.use(CustomLangProvider());

// Load translations programmatically
Lang.loadNamespace('notifications', 'en', {
  'welcome': 'Welcome to our platform!',
  'order_placed': 'Your order has been placed',
  'payment_received': 'Payment received successfully',
});`

// Translation Inspection
const inspectionUsageCode = `// Debug translation loading
void debugTranslations() {
  print('Available locales: \${Lang.getAvailableLocales()}');
  print('Current global locale: \${Lang.getGlobalLocale()}');
  print('Fallback locale: \${Lang.getFallbackLocale()}');

  // Test specific translations
  final testKeys = [
    'messages.greeting',
    'validation.required',
    'auth.login',
  ];

  for (final key in testKeys) {
    final exists = Lang.has(key);
    final value = Lang.get(key);
    print('\$key: \${exists ? 'EXISTS' : 'MISSING'} - \$value');
  }
}

// Validate translation completeness
void validateTranslations(String locale) {
  final requiredKeys = [
    'messages.greeting',
    'messages.welcome',
    'validation.required',
    'validation.email',
    'auth.login',
    'auth.register',
  ];

  final missingKeys = <String>[];
  for (final key in requiredKeys) {
    if (!Lang.has(key)) {
      missingKeys.add(key);
    }
  }

  if (missingKeys.isNotEmpty) {
    Khadem.logger.warning('Missing translations for \$locale: \$missingKeys');
  }
}

// Monitor translation usage
class TranslationMonitor {
  static final Map<String, int> _usage = {};

  static String translate(String key, {Map<String, dynamic>? parameters}) {
    _usage[key] = (_usage[key] ?? 0) + 1;
    return Lang.t(key, parameters: parameters);
  }

  static void reportUsage() {
    print('Translation usage statistics:');
    _usage.entries.toList()
      ..sort((a, b) => b.value.compareTo(a.value))
      ..forEach((entry) => print('\${entry.key}: \${entry.value} times'));
  }
}`

// Advanced Usage Patterns
const middlewarePatternCode = `// Locale detection middleware
class LocaleDetectionMiddleware extends Middleware {
  @override
  Future<void> handle(Request request, Response response, Next next) async {
    String locale = _determineLocale(request);

    // Set request-specific locale
    Lang.setRequestLocale(locale);

    // Add locale to response for client-side use
    response.header('X-App-Locale', locale);

    await next();
  }

  String _determineLocale(Request request) {
    // 1. Check URL parameter (?lang=en)
    String? urlLocale = request.query('lang');
    if (urlLocale != null && _isValidLocale(urlLocale)) {
      return urlLocale;
    }

    // 2. Check Accept-Language header
    String? acceptLanguage = request.header('accept-language');
    if (acceptLanguage != null) {
      String detected = _parseAcceptLanguage(acceptLanguage);
      if (_isValidLocale(detected)) {
        return detected;
      }
    }

    // 3. Check user preference (from session/database)
    String? userLocale = await _getUserPreferredLocale(request);
    if (userLocale != null && _isValidLocale(userLocale)) {
      return userLocale;
    }

    // 4. Fallback to global default
    return Lang.getGlobalLocale();
  }

  bool _isValidLocale(String locale) {
    return Lang.getAvailableLocales().contains(locale);
  }

  String _parseAcceptLanguage(String acceptLanguage) {
    // Parse Accept-Language header (e.g., "en-US,en;q=0.9,fr;q=0.8")
    // Return the highest priority valid locale
    return 'en'; // Simplified implementation
  }

  Future<String?> _getUserPreferredLocale(Request request) async {
    // Check user session or database for preferred locale
    return null; // Implementation depends on auth system
  }
}`

const validationPatternCode = `// Localized validation
class LocalizedValidator {
  static Map<String, String> validateUser(Map<String, dynamic> data) {
    final errors = <String, String>{};

    // Email validation
    if (data['email'] == null || data['email'].toString().isEmpty) {
      errors['email'] = Lang.t('validation.required', parameters: {
        'field': Lang.getField('email')
      });
    } else if (!isValidEmail(data['email'])) {
      errors['email'] = Lang.t('validation.email', parameters: {
        'field': Lang.getField('email')
      });
    }

    // Password validation
    if (data['password'] == null || data['password'].toString().length < 8) {
      errors['password'] = Lang.t('validation.min_length', parameters: {
        'field': Lang.getField('password'),
        'min': '8'
      });
    }

    // Age validation
    final age = data['age'];
    if (age != null && (age < 13 || age > 120)) {
      errors['age'] = Lang.t('validation.between', parameters: {
        'field': Lang.getField('age'),
        'min': '13',
        'max': '120'
      });
    }

    return errors;
  }
}

// Custom validation rules with localization
class LocalizedValidationRule {
  static String required(String field) {
    return Lang.t('validation.required', parameters: {
      'field': Lang.getField(field)
    });
  }

  static String minLength(String field, int length) {
    return Lang.t('validation.min_length', parameters: {
      'field': Lang.getField(field),
      'length': length.toString()
    });
  }

  static String maxLength(String field, int length) {
    return Lang.t('validation.max_length', parameters: {
      'field': Lang.getField(field),
      'length': length.toString()
    });
  }

  static String between(String field, num min, num max) {
    return Lang.t('validation.between', parameters: {
      'field': Lang.getField(field),
      'min': min.toString(),
      'max': max.toString()
    });
  }
}`

const emailPatternCode = `// Localized email templates
class EmailTemplates {
  static Map<String, String> welcomeEmail(User user) {
    return {
      'subject': Lang.t('emails.welcome.subject', parameters: {
        'app': Lang.t('app.name')
      }),
      'greeting': Lang.t('emails.welcome.greeting', parameters: {
        'name': user.firstName
      }),
      'body': Lang.t('emails.welcome.body', parameters: {
        'name': user.firstName,
        'app': Lang.t('app.name'),
        'login_url': _generateLoginUrl(),
      }),
      'signature': Lang.t('emails.signature', parameters: {
        'app': Lang.t('app.name')
      }),
    };
  }

  static Map<String, String> orderConfirmation(Order order) {
    final itemCount = order.items.length;
    return {
      'subject': Lang.t('emails.order.subject', parameters: {
        'order_id': order.id
      }),
      'greeting': Lang.t('emails.order.greeting', parameters: {
        'name': order.customerName
      }),
      'body': Lang.t('emails.order.body', parameters: {
        'order_id': order.id,
        'item_count': itemCount.toString(),
        'items': Lang.choice('emails.order.items', itemCount),
        'total': _formatCurrency(order.total),
      }),
      'signature': Lang.t('emails.signature', parameters: {
        'app': Lang.t('app.name')
      }),
    };
  }

  static Map<String, String> passwordReset(User user, String resetToken) {
    return {
      'subject': Lang.t('emails.password_reset.subject'),
      'greeting': Lang.t('emails.password_reset.greeting', parameters: {
        'name': user.firstName
      }),
      'body': Lang.t('emails.password_reset.body', parameters: {
        'reset_url': _generateResetUrl(resetToken),
        'expiry': '24' // hours
      }),
      'signature': Lang.t('emails.signature', parameters: {
        'app': Lang.t('app.name')
      }),
    };
  }
}

// Email service with localization
class LocalizedEmailService {
  Future<void> sendWelcomeEmail(User user) async {
    final template = EmailTemplates.welcomeEmail(user);

    await Mail.to(user.email).send(Email(
      subject: template['subject']!,
      html: _renderTemplate('welcome', template),
    ));
  }

  Future<void> sendOrderConfirmation(Order order) async {
    final template = EmailTemplates.orderConfirmation(order);

    await Mail.to(order.customerEmail).send(Email(
      subject: template['subject']!,
      html: _renderTemplate('order_confirmation', template),
    ));
  }

  String _renderTemplate(String templateName, Map<String, String> data) {
    // Render email template with localized content
    // Implementation depends on your template engine
    return '';
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
