<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Mail Module</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Complete email sending solution for Khadem with support for multiple mail drivers,
        professional templates, and comprehensive testing tools.
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-blue-900 dark:text-blue-100">Multiple Drivers</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300">SMTP, Mailgun, SES, Postmark, Log, Array</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-green-900 dark:text-green-100">Rich Features</h3>
          <p class="text-sm text-green-700 dark:text-green-300">HTML, attachments, inline images, queuing</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h3 class="font-semibold text-purple-900 dark:text-purple-100">Testing Support</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300">ArrayTransport with comprehensive assertions</p>
        </div>
      </div>
    </header>

    <!-- Quick Start -->
    <DocSection title="Quick Start">
      <template #description>
        Get started with sending emails in Khadem in just a few steps.
      </template>
      <CodeBlock :code="quickStart" language="dart" title="Send Your First Email" />
    </DocSection>

    <!-- Features Overview -->
    <DocSection title="Key Features">
      <template #description>
        Khadem's mail module provides everything you need for professional email communication.
      </template>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="space-y-4">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">📧 Multiple Mail Drivers</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong>SMTP</strong> - Production email with TLS/SSL</li>
              <li><strong>Mailgun</strong> - Cloud email API</li>
              <li><strong>Amazon SES</strong> - AWS Simple Email Service</li>
              <li><strong>Postmark</strong> - Transactional email</li>
              <li><strong>Log</strong> - Development logging</li>
              <li><strong>Array</strong> - Testing with assertions</li>
            </ul>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">✨ Rich Email Features</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>HTML and plain text emails</li>
              <li>File attachments (path or raw data)</li>
              <li>Inline embedded images</li>
              <li>CC, BCC, Reply-To</li>
              <li>Custom headers and priority</li>
              <li>Queue integration for async sending</li>
            </ul>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">🎯 Mailable Classes</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Object-oriented email composition</li>
              <li>Lifecycle hooks (beforeSend, afterSend, onError)</li>
              <li>Queue support with delays</li>
              <li>Reusable email templates</li>
            </ul>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">🧪 Testing Support</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>ArrayTransport for in-memory storage</li>
              <li>wasSentTo(), wasSentWithSubject() assertions</li>
              <li>Full access to sent messages</li>
              <li>Test-friendly architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </DocSection>

    <!-- Installation -->
    <DocSection title="Installation & Setup">
      <template #description>
        The mail module is included in Khadem. Just register the service provider.
      </template>
      <CodeBlock :code="installation" language="dart" title="Register Mail Service Provider" />
    </DocSection>

    <!-- Basic Usage -->
    <DocSection title="Basic Usage Examples">
      <template #description>
        Simple examples to get you started with sending emails.
      </template>
      <CodeBlock :code="basicEmail" language="dart" title="Simple Email" />
      <CodeBlock :code="htmlEmail" language="dart" title="HTML Email with Fallback" class="mt-4" />
      <CodeBlock :code="attachments" language="dart" title="Email with Attachments" class="mt-4" />
    </DocSection>

    <!-- Mailable Classes -->
    <DocSection title="Using Mailable Classes">
      <template #description>
        Create reusable, object-oriented email templates with Mailable classes.
      </template>
      <CodeBlock :code="mailableClass" language="dart" title="Creating a Mailable" />
      <CodeBlock :code="sendMailable" language="dart" title="Sending a Mailable" class="mt-4" />
    </DocSection>

    <!-- Transport Comparison -->
    <DocSection title="Mail Driver Comparison">
      <template #description>
        Choose the right mail driver for your needs.
      </template>
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Driver</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Best For</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Setup</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Cost</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Analytics</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">SMTP</td>
              <td class="px-6 py-4 text-sm">Self-hosted mail servers</td>
              <td class="px-6 py-4 text-sm text-yellow-600">Complex</td>
              <td class="px-6 py-4 text-sm">Server costs</td>
              <td class="px-6 py-4 text-sm">❌</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Mailgun</td>
              <td class="px-6 py-4 text-sm">High volume emails</td>
              <td class="px-6 py-4 text-sm text-green-600">Simple API</td>
              <td class="px-6 py-4 text-sm">Pay-per-email</td>
              <td class="px-6 py-4 text-sm">✅</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Amazon SES</td>
              <td class="px-6 py-4 text-sm">AWS ecosystem</td>
              <td class="px-6 py-4 text-sm text-yellow-600">AWS setup</td>
              <td class="px-6 py-4 text-sm text-green-600">Very low</td>
              <td class="px-6 py-4 text-sm">✅</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Postmark</td>
              <td class="px-6 py-4 text-sm">Transactional emails</td>
              <td class="px-6 py-4 text-sm text-green-600">Simple API</td>
              <td class="px-6 py-4 text-sm">Per-email</td>
              <td class="px-6 py-4 text-sm">✅</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Log</td>
              <td class="px-6 py-4 text-sm">Development</td>
              <td class="px-6 py-4 text-sm text-green-600">None</td>
              <td class="px-6 py-4 text-sm text-green-600">Free</td>
              <td class="px-6 py-4 text-sm">❌</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Array</td>
              <td class="px-6 py-4 text-sm">Testing</td>
              <td class="px-6 py-4 text-sm text-green-600">None</td>
              <td class="px-6 py-4 text-sm text-green-600">Free</td>
              <td class="px-6 py-4 text-sm">❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocSection>

    <!-- Next Steps -->
    <DocSection title="Next Steps">
      <template #description>
        Learn more about Khadem's mail module capabilities.
      </template>
      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <NuxtLink to="/docs/mail/configuration" 
          class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚙️ Configuration</h4>
          <p class="text-sm text-blue-700 dark:text-blue-300">Set up mail drivers, default settings, and environment variables</p>
        </NuxtLink>

        <NuxtLink to="/docs/mail/sending" 
          class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">📧 Sending Emails</h4>
          <p class="text-sm text-green-700 dark:text-green-300">Learn about Mailable classes, attachments, and advanced features</p>
        </NuxtLink>

        <NuxtLink to="/docs/mail/drivers" 
          class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors">
          <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚀 Mail Drivers</h4>
          <p class="text-sm text-purple-700 dark:text-purple-300">Detailed guides for SMTP, Mailgun, SES, Postmark, and more</p>
        </NuxtLink>

        <NuxtLink to="/docs/mail/troubleshooting" 
          class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-colors">
          <h4 class="font-semibold text-orange-900 dark:text-orange-100 mb-2">🔧 Troubleshooting</h4>
          <p class="text-sm text-orange-700 dark:text-orange-300">Debug common issues with SMTP and other mail drivers</p>
        </NuxtLink>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Mail Module',
  meta: [{ name: 'description', content: 'Complete email sending solution for Khadem framework' }]
});

const quickStart = `
import 'package:khadem/khadem.dart';

// Get MailManager from container
final mailManager = container.resolve<MailManager>();

// Send your first email
await mailManager
    .to('user@example.com')
    .subject('Welcome!')
    .text('Thank you for joining us.')
    .html('<h1>Welcome!</h1><p>Thank you for joining us.</p>')
    .send();

print('Email sent successfully!');
`;

const installation = `
import 'package:khadem/khadem.dart';

void main() async {
  final app = await Khadem.init(
    environment: 'development',
    providers: [
      // ... other providers
      MailServiceProvider(), // Add mail service provider
    ],
  );

  await app.start();
}
`;

const basicEmail = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Simple text email
await mailManager
    .to('user@example.com')
    .from('sender@example.com', 'My App')
    .subject('Hello World')
    .text('This is a plain text email.')
    .send();
`;

const htmlEmail = `
// HTML email with plain text fallback
await mailManager
    .to('user@example.com')
    .subject('Newsletter')
    .html('''
      <h1>Newsletter</h1>
      <p>Latest updates...</p>
      <a href="https://example.com">Read More</a>
    ''')
    .text('Newsletter - Latest updates... Read more at https://example.com')
    .send();
`;

const attachments = `
// Attach file from path
await mailManager
    .to('user@example.com')
    .subject('Invoice')
    .text('Please find your invoice attached.')
    .attach('/path/to/invoice.pdf', name: 'invoice.pdf')
    .send();

// Attach raw data
final data = utf8.encode('Report data');
await mailManager
    .to('user@example.com')
    .subject('Report')
    .attachData(data, 'report.txt', mimeType: 'text/plain')
    .send();

// Embed inline image
await mailManager
    .to('user@example.com')
    .subject('Welcome')
    .html('<h1>Welcome!</h1><img src="cid:logo">')
    .embed('/path/to/logo.png', 'logo')
    .send();
`;

const mailableClass = `
import 'package:khadem/khadem.dart';

class WelcomeMail extends Mailable {
  final String userEmail;
  final String userName;

  WelcomeMail({required this.userEmail, required this.userName});

  @override
  Future<void> build(MailerInterface mailer) async {
    mailer
        .to(userEmail)
        .subject('Welcome to Our App!')
        .html(_buildHtmlContent())
        .text(_buildTextContent());
  }

  String _buildHtmlContent() {
    return '''
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .header { background: #3b82f6; color: white; padding: 20px; }
            .content { padding: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome \$userName!</h1>
          </div>
          <div class="content">
            <p>We're excited to have you on board.</p>
            <p>Get started by exploring our features.</p>
          </div>
        </body>
      </html>
    ''';
  }

  String _buildTextContent() {
    return '''
Welcome \$userName!

We're excited to have you on board.
Get started by exploring our features.
    ''';
  }

  @override
  Future<void> beforeSend() async {
    print('Sending welcome email to \$userEmail');
  }

  @override
  Future<void> afterSend() async {
    print('Welcome email sent successfully');
  }
}
`;

const sendMailable = `
// Send a mailable
final welcome = WelcomeMail(
  userEmail: 'user@example.com',
  userName: 'John Doe',
);

await mailManager.sendMailable(welcome);

// Or queue it for async sending
await mailManager.queueMailable(welcome, delay: Duration(minutes: 5));
`;
</script>
