<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Security Best Practices</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive security guidelines and best practices for building secure Khadem applications.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Authentication Security</h2>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Security Risks</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
            <li>Plain text password storage</li>
            <li>Weak password policies</li>
            <li>Session fixation attacks</li>
            <li>Brute force attacks</li>
            <li>Token leakage</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Security Measures</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
            <li>Strong password hashing (bcrypt/Argon2)</li>
            <li>Multi-factor authentication</li>
            <li>Secure session management</li>
            <li>Rate limiting</li>
            <li>JWT token security</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Input Validation & Sanitization</h2>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Validation Rules</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><code>required</code> - Field must be present</li>
          <li><code>email</code> - Valid email format</li>
          <li><code>min:X|max:X</code> - Length constraints</li>
          <li><code>numeric|alpha|alphanum</code> - Character restrictions</li>
          <li><code>unique:table,column</code> - Database uniqueness</li>
          <li><code>regex:pattern</code> - Custom regex validation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">SQL Injection Prevention</h2>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">ORM Security Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Automatic query parameter binding</li>
          <li>Prepared statements</li>
          <li>Input sanitization</li>
          <li>SQL escaping</li>
          <li>Query builder protection</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Cross-Site Scripting (XSS) Protection</h2>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">XSS Prevention Methods</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Auto-escaping in templates</li>
            <li>Content Security Policy (CSP)</li>
            <li>Input sanitization</li>
            <li>Output encoding</li>
            <li>Secure cookie flags</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">CSP Headers</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><code>default-src 'self'</code></li>
            <li><code>script-src 'self' 'unsafe-inline'</code></li>
            <li><code>style-src 'self' 'unsafe-inline'</code></li>
            <li><code>img-src 'self' data: https:</code></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">CSRF Protection</h2>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">CSRF Protection Methods</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li>CSRF tokens in forms</li>
          <li>SameSite cookie attributes</li>
          <li>Origin header validation</li>
          <li>Custom headers for AJAX requests</li>
          <li>Double submit cookie pattern</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">File Upload Security</h2>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Security Checks</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
          <li>File type validation</li>
          <li>File size limits</li>
          <li>MIME type verification</li>
          <li>Virus scanning</li>
          <li>Secure filename generation</li>
          <li>Storage outside web root</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">API Security</h2>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Authentication</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
            <li>API key authentication</li>
            <li>OAuth 2.0 / OpenID Connect</li>
            <li>JWT tokens</li>
            <li>Rate limiting</li>
            <li>Request signing</li>
          </ul>
        </div>

        <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
          <h3 class="text-lg font-medium text-teal-800 dark:text-teal-200">Security Headers</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-teal-700 dark:text-teal-300">
            <li>Content Security Policy</li>
            <li>X-Frame-Options</li>
            <li>X-Content-Type-Options</li>
            <li>Strict-Transport-Security</li>
            <li>X-API-Key validation</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Rate Limiting</h2>

      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
        <h3 class="text-lg font-medium text-cyan-800 dark:text-cyan-200">Rate Limiting Strategies</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-cyan-700 dark:text-cyan-300">
          <li>Fixed window algorithm</li>
          <li>Sliding window algorithm</li>
          <li>Token bucket algorithm</li>
          <li>Leaky bucket algorithm</li>
          <li>Distributed rate limiting with Redis</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Environment Security</h2>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h3 class="font-medium">Environment Variables</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Never commit secrets to version control</li>
          <li>Use environment-specific configuration</li>
          <li>Validate required environment variables</li>
          <li>Use secret management services</li>
          <li>Rotate secrets regularly</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Security Monitoring</h2>

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Monitoring Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li>Failed login attempt tracking</li>
          <li>Suspicious activity detection</li>
          <li>Security event logging</li>
          <li>Real-time alerts</li>
          <li>Security report generation</li>
          <li>Compliance auditing</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Security Best Practices',
  meta: [
    { name: 'description', content: 'Comprehensive security guidelines for Khadem applications' }
  ]
})
</script>

<style scoped>
.prose :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 2.5rem;
}
.prose :where(h3):not(:where([class~="not-prose"] *)) {
  margin-top: 1.5rem;
}
</style>