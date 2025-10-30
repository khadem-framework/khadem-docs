<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Mail Drivers</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Detailed guides for configuring and using SMTP, Mailgun, Amazon SES, Postmark,
        Log, and Array mail drivers in Khadem.
      </p>
    </header>

    <!-- Driver Overview -->
    <DocSection title="Available Mail Drivers">
      <template #description>
        Khadem supports multiple mail drivers for different use cases.
      </template>
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Driver</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Best For</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Speed</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Cost</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">SMTP</td>
              <td class="px-6 py-4 text-sm">Protocol</td>
              <td class="px-6 py-4 text-sm">Self-hosted servers</td>
              <td class="px-6 py-4 text-sm text-yellow-600">Variable</td>
              <td class="px-6 py-4 text-sm">Server costs</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Mailgun</td>
              <td class="px-6 py-4 text-sm">API</td>
              <td class="px-6 py-4 text-sm">High volume</td>
              <td class="px-6 py-4 text-sm text-green-600">Fast</td>
              <td class="px-6 py-4 text-sm">Pay-per-email</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Amazon SES</td>
              <td class="px-6 py-4 text-sm">API</td>
              <td class="px-6 py-4 text-sm">AWS ecosystem</td>
              <td class="px-6 py-4 text-sm text-green-600">Fast</td>
              <td class="px-6 py-4 text-sm text-green-600">Very low</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Postmark</td>
              <td class="px-6 py-4 text-sm">API</td>
              <td class="px-6 py-4 text-sm">Transactional</td>
              <td class="px-6 py-4 text-sm text-green-600">Very fast</td>
              <td class="px-6 py-4 text-sm">Per-email</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Log</td>
              <td class="px-6 py-4 text-sm">Development</td>
              <td class="px-6 py-4 text-sm">Development</td>
              <td class="px-6 py-4 text-sm text-green-600">Instant</td>
              <td class="px-6 py-4 text-sm text-green-600">Free</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono font-semibold">Array</td>
              <td class="px-6 py-4 text-sm">Testing</td>
              <td class="px-6 py-4 text-sm">Unit testing</td>
              <td class="px-6 py-4 text-sm text-green-600">Instant</td>
              <td class="px-6 py-4 text-sm text-green-600">Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocSection>

    <!-- SMTP Driver -->
    <DocSection title="SMTP Driver">
      <template #description>
        SMTP is the standard protocol for sending emails. Use it with Gmail, Outlook,
        Mailtrap, or your own mail server.
      </template>
      <CodeBlock :code="smtpConfig" language="dart" title="SMTP Configuration" />
      <CodeBlock :code="smtpProviders" language="bash" title="Popular SMTP Providers" class="mt-4" />
      <div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Gmail SMTP Requirements:</h4>
        <ul class="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li>Enable 2-factor authentication on your Google account</li>
          <li>Generate an App Password (don't use your regular password!)</li>
          <li>Use smtp.gmail.com:587 with TLS encryption</li>
          <li>Gmail has sending limits (500 emails/day for free accounts)</li>
        </ul>
      </div>
    </DocSection>

    <!-- Mailgun Driver -->
    <DocSection title="Mailgun Driver">
      <template #description>
        Mailgun is a powerful email API service for sending, receiving, and tracking emails.
      </template>
      <CodeBlock :code="mailgunConfig" language="dart" title="Mailgun Configuration" />
      <CodeBlock :code="mailgunUsage" language="dart" title="Using Mailgun" class="mt-4" />
      <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Mailgun Features:</h4>
        <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Email validation API</li>
          <li>Detailed analytics and tracking</li>
          <li>Automatic bounce and complaint handling</li>
          <li>Webhook events for opens, clicks, bounces</li>
          <li>Free tier: 5,000 emails/month for 3 months</li>
        </ul>
      </div>
    </DocSection>

    <!-- Amazon SES Driver -->
    <DocSection title="Amazon SES Driver">
      <template #description>
        Amazon Simple Email Service is a cost-effective email service for AWS users.
      </template>
      <CodeBlock :code="sesConfig" language="dart" title="Amazon SES Configuration" />
      <CodeBlock :code="sesUsage" language="dart" title="Using Amazon SES" class="mt-4" />
      <div class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">💰 Amazon SES Pricing:</h4>
        <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
          <li>$0.10 per 1,000 emails</li>
          <li>62,000 free emails/month when sent from EC2</li>
          <li>No setup fees or minimum charges</li>
          <li>Pay only for what you use</li>
        </ul>
      </div>
    </DocSection>

    <!-- Postmark Driver -->
    <DocSection title="Postmark Driver">
      <template #description>
        Postmark specializes in fast, reliable transactional email delivery.
      </template>
      <CodeBlock :code="postmarkConfig" language="dart" title="Postmark Configuration" />
      <CodeBlock :code="postmarkUsage" language="dart" title="Using Postmark" class="mt-4" />
      <div class="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚀 Postmark Advantages:</h4>
        <ul class="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
          <li>Industry-leading delivery speed</li>
          <li>45-day searchable message history</li>
          <li>Real-time webhooks for all events</li>
          <li>Spam score analysis</li>
          <li>Free tier: 100 emails/month</li>
        </ul>
      </div>
    </DocSection>

    <!-- Log Driver -->
    <DocSection title="Log Driver (Development)">
      <template #description>
        The Log driver writes emails to log files instead of sending them. Perfect for development.
      </template>
      <CodeBlock :code="logDriver" language="dart" title="Log Driver Configuration" />
    </DocSection>

    <!-- Array Driver -->
    <DocSection title="Array Driver (Testing)">
      <template #description>
        The Array driver stores emails in memory for testing with assertions.
      </template>
      <CodeBlock :code="arrayDriver" language="dart" title="Array Driver in Tests" />
    </DocSection>

    <!-- Choosing a Driver -->
    <DocSection title="Choosing the Right Driver">
      <template #description>
        Select a mail driver based on your specific needs and constraints.
      </template>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div class="space-y-4">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Choose SMTP when:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>You have an existing mail server</li>
              <li>You need complete control</li>
              <li>You're using Gmail/Outlook for small volumes</li>
              <li>You want to test with Mailtrap</li>
            </ul>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Choose Mailgun when:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>You need high email volume</li>
              <li>You want detailed analytics</li>
              <li>You need email validation</li>
              <li>You want webhook events</li>
            </ul>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Choose Amazon SES when:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>You're already using AWS</li>
              <li>Cost is a primary concern</li>
              <li>You need massive scalability</li>
              <li>You want AWS integration</li>
            </ul>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Choose Postmark when:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Delivery speed is critical</li>
              <li>You send transactional emails</li>
              <li>You need excellent deliverability</li>
              <li>You want simple, predictable pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Mail Drivers',
  meta: [{ name: 'description', content: 'Configure mail drivers in Khadem' }]
});

const smtpConfig = `
// config/app.dart
'mail': {
  'default': 'smtp',
  
  'smtp': {
    'host': env('SMTP_HOST', 'smtp.gmail.com'),
    'port': env.getInt('SMTP_PORT', defaultValue: 587),
    'username': env('SMTP_USERNAME'),
    'password': env('SMTP_PASSWORD'),
    'encryption': env('SMTP_ENCRYPTION', 'tls'), // 'tls', 'ssl', or 'none'
    'timeout': env.getInt('SMTP_TIMEOUT', defaultValue: 30),
  },
  
  'from': {
    'address': env('MAIL_FROM_ADDRESS'),
    'name': env('MAIL_FROM_NAME'),
  },
}
`;

const smtpProviders = `
# Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_ENCRYPTION=tls

# Mailtrap (Testing)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USERNAME=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password
SMTP_ENCRYPTION=tls

# Outlook/Office 365
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USERNAME=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_ENCRYPTION=tls

# SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_ENCRYPTION=tls
`;

const mailgunConfig = `
// config/app.dart
'mail': {
  'default': 'mailgun',
  
  'mailgun': {
    'domain': env('MAILGUN_DOMAIN'),      // e.g., mg.yourdomain.com
    'api_key': env('MAILGUN_API_KEY'),    // Your Mailgun API key
    'endpoint': env('MAILGUN_ENDPOINT', 'https://api.mailgun.net'),
  },
  
  'from': {
    'address': env('MAIL_FROM_ADDRESS'),
    'name': env('MAIL_FROM_NAME'),
  },
}

// .env
MAILGUN_DOMAIN=mg.example.com
MAILGUN_API_KEY=key-1234567890abcdef1234567890abcdef
MAILGUN_ENDPOINT=https://api.mailgun.net  # or https://api.eu.mailgun.net for EU
`;

const mailgunUsage = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Send via Mailgun (using default driver)
await mailManager
    .to('user@example.com')
    .subject('Welcome')
    .html('<h1>Welcome!</h1>')
    .send();

// Or explicitly use Mailgun driver
await mailManager.mailer('mailgun')
    .to('user@example.com')
    .subject('Newsletter')
    .html('<h1>Latest Updates</h1>')
    .send();
`;

const sesConfig = `
// config/app.dart
'mail': {
  'default': 'ses',
  
  'ses': {
    'access_key_id': env('AWS_ACCESS_KEY_ID'),
    'secret_access_key': env('AWS_SECRET_ACCESS_KEY'),
    'region': env('AWS_DEFAULT_REGION', 'us-east-1'),
    'configuration_set': env('AWS_SES_CONFIGURATION_SET'), // Optional
  },
  
  'from': {
    'address': env('MAIL_FROM_ADDRESS'),
    'name': env('MAIL_FROM_NAME'),
  },
}

// .env
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_DEFAULT_REGION=us-east-1
AWS_SES_CONFIGURATION_SET=my-config-set  # Optional
`;

const sesUsage = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Send via Amazon SES
await mailManager
    .to('user@example.com')
    .subject('Order Confirmation')
    .html('<h1>Your order has been confirmed</h1>')
    .send();

// Important: Verify email addresses in SES first!
// Use SES console or AWS CLI to verify sender addresses
`;

const postmarkConfig = `
// config/app.dart
'mail': {
  'default': 'postmark',
  
  'postmark': {
    'server_token': env('POSTMARK_SERVER_TOKEN'),
    'message_stream': env('POSTMARK_MESSAGE_STREAM', 'outbound'),
  },
  
  'from': {
    'address': env('MAIL_FROM_ADDRESS'),
    'name': env('MAIL_FROM_NAME'),
  },
}

// .env
POSTMARK_SERVER_TOKEN=your-server-token-here
POSTMARK_MESSAGE_STREAM=outbound  # or 'broadcasts' for marketing emails
`;

const postmarkUsage = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Send via Postmark
await mailManager
    .to('user@example.com')
    .subject('Password Reset')
    .html('<h1>Reset Your Password</h1>')
    .send();

// Use different message streams
await mailManager.mailer('postmark')
    .to('subscriber@example.com')
    .subject('Newsletter')
    .html('<h1>Monthly Newsletter</h1>')
    .send();
`;

const logDriver = `
// config/development/app.dart
'mail': {
  'default': 'log',
  
  'log': {
    'channel': 'mail', // Optional: specific log channel
  },
  
  'from': {
    'address': 'dev@localhost',
    'name': 'Dev Environment',
  },
}

// Emails will be written to logs instead of being sent
// Check storage/logs/khadem.log to see email content

import 'package:khadem/khadem.dart';

await mailManager
    .to('test@example.com')
    .subject('Test Email')
    .html('<h1>This will be logged</h1>')
    .send();

// Log output:
// [2024-01-15 10:30:00] Mail sent to test@example.com
// Subject: Test Email
// Body: <h1>This will be logged</h1>
`;

const arrayDriver = `
// In your tests
import 'package:khadem/khadem.dart';
import 'package:test/test.dart';

void main() {
  test('welcome email is sent', () async {
    // Create ArrayTransport
    final transport = ArrayTransport();
    final mailer = Mailer(transport);
    
    // Send email
    await mailer
        .to('user@example.com')
        .subject('Welcome')
        .text('Welcome to our app')
        .send();
    
    // Assert email was sent
    expect(transport.hasSent, isTrue);
    expect(transport.wasSentTo('user@example.com'), isTrue);
    expect(transport.wasSentWithSubject('Welcome'), isTrue);
    
    // Check email details
    final sent = transport.lastSent!;
    expect(sent.subject, equals('Welcome'));
    expect(sent.textBody, contains('Welcome to our app'));
  });

  test('multiple emails', () async {
    final transport = ArrayTransport();
    final mailer = Mailer(transport);
    
    // Send multiple emails
    await mailer.to('user1@example.com').subject('Email 1').send();
    await mailer.to('user2@example.com').subject('Email 2').send();
    
    // Assert count
    expect(transport.sentCount, equals(2));
    
    // Find specific emails
    final user1Email = transport.findSent(
      (msg) => msg.to.any((addr) => addr.email == 'user1@example.com'),
    );
    expect(user1Email, isNotEmpty);
    
    // Clear for next test
    transport.clear();
    expect(transport.hasSent, isFalse);
  });
}
`;
</script>
