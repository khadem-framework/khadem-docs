<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Mail Configuration</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Configure mail drivers, default settings, and environment variables for sending emails
        in your Khadem application.
      </p>
    </header>

    <!-- Basic Configuration -->
    <DocSection title="Basic Configuration">
      <template #description>
        Add mail configuration to your `config/app.dart` file.
      </template>
      <CodeBlock :code="basicConfig" language="dart" title="config/app.dart" />
    </DocSection>

    <!-- Environment Variables -->
    <DocSection title="Environment Variables">
      <template #description>
        Store sensitive mail credentials in your `.env` file.
      </template>
      <CodeBlock :code="envVariables" language="bash" title=".env" />
    </DocSection>

    <!-- SMTP Configuration -->
    <DocSection title="SMTP Configuration">
      <template #description>
        Configure SMTP for self-hosted or third-party mail servers (Gmail, Mailtrap, etc.).
      </template>
      <CodeBlock :code="smtpConfig" language="dart" title="SMTP Settings" />
      <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Popular SMTP Providers:</h4>
        <ul class="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
          <li><strong>Gmail:</strong> smtp.gmail.com:587 (TLS) or smtp.gmail.com:465 (SSL)</li>
          <li><strong>Mailtrap:</strong> smtp.mailtrap.io:2525 (Development/Testing)</li>
          <li><strong>SendGrid:</strong> smtp.sendgrid.net:587</li>
          <li><strong>Mailgun:</strong> smtp.mailgun.org:587</li>
        </ul>
      </div>
    </DocSection>

    <!-- Mailgun Configuration -->
    <DocSection title="Mailgun Configuration">
      <template #description>
        Configure Mailgun for high-volume email delivery with API-based sending.
      </template>
      <CodeBlock :code="mailgunConfig" language="dart" title="Mailgun Settings" />
    </DocSection>

    <!-- Amazon SES Configuration -->
    <DocSection title="Amazon SES Configuration">
      <template #description>
        Configure Amazon Simple Email Service for cost-effective email delivery in AWS.
      </template>
      <CodeBlock :code="sesConfig" language="dart" title="Amazon SES Settings" />
    </DocSection>

    <!-- Postmark Configuration -->
    <DocSection title="Postmark Configuration">
      <template #description>
        Configure Postmark for fast transactional email delivery.
      </template>
      <CodeBlock :code="postmarkConfig" language="dart" title="Postmark Settings" />
    </DocSection>

    <!-- Development & Testing -->
    <DocSection title="Development & Testing Configuration">
      <template #description>
        Use Log and Array transports for development and testing environments.
      </template>
      <CodeBlock :code="devConfig" language="dart" title="Development Configuration" />
    </DocSection>

    <!-- Multiple Mailers -->
    <DocSection title="Using Multiple Mailers">
      <template #description>
        Configure and use different mail drivers for different purposes.
      </template>
      <CodeBlock :code="multipleMailers" language="dart" title="Multiple Mailers Configuration" />
      <CodeBlock :code="usingMultipleMailers" language="dart" title="Using Specific Mailers" class="mt-4" />
    </DocSection>

    <!-- Service Provider Registration -->
    <DocSection title="Registering Mail Service Provider">
      <template #description>
        Register the MailServiceProvider in your application bootstrap.
      </template>
      <CodeBlock :code="serviceProvider" language="dart" title="lib/main.dart" />
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Mail Configuration',
  meta: [{ name: 'description', content: 'Configure mail drivers and settings in Khadem' }]
});

const basicConfig = `
// config/app.dart
const config = {
  // ... other configuration
  
  'mail': {
    // Default mail driver (smtp, mailgun, ses, postmark, log, array)
    'default': env('MAIL_DRIVER', 'log'),
    
    // Default 'from' address for all emails
    'from': {
      'address': env('MAIL_FROM_ADDRESS', 'noreply@example.com'),
      'name': env('MAIL_FROM_NAME', 'Khadem Framework'),
    },
    
    // SMTP configuration
    'smtp': {
      'host': env('SMTP_HOST', 'smtp.mailtrap.io'),
      'port': env.getInt('SMTP_PORT', defaultValue: 2525),
      'username': env('SMTP_USERNAME'),
      'password': env('SMTP_PASSWORD'),
      'encryption': env('SMTP_ENCRYPTION', 'tls'), // tls, ssl, or none
      'timeout': env.getInt('SMTP_TIMEOUT', defaultValue: 30),
    },
    
    // Log transport (for development)
    'log': {
      'channel': 'mail', // Optional: specific log channel
    },
    
    // Array transport (for testing)
    'array': {
      // No configuration needed
    },
  },
};
`;

const envVariables = `
# Mail Configuration
MAIL_DRIVER=smtp
MAIL_FROM_ADDRESS=noreply@example.com
MAIL_FROM_NAME="My Application"

# SMTP Configuration
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USERNAME=your_username
SMTP_PASSWORD=your_password
SMTP_ENCRYPTION=tls
SMTP_TIMEOUT=30

# Mailgun Configuration (optional)
MAILGUN_DOMAIN=mg.example.com
MAILGUN_API_KEY=key-xxxxxxxxxxxxx
MAILGUN_ENDPOINT=https://api.mailgun.net

# Amazon SES Configuration (optional)
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_DEFAULT_REGION=us-east-1
AWS_SES_CONFIGURATION_SET=my-config-set

# Postmark Configuration (optional)
POSTMARK_SERVER_TOKEN=your-server-token-here
POSTMARK_MESSAGE_STREAM=outbound
`;

const smtpConfig = `
'smtp': {
  'host': env('SMTP_HOST', 'smtp.gmail.com'),
  'port': env.getInt('SMTP_PORT', defaultValue: 587),
  'username': env('SMTP_USERNAME'),
  'password': env('SMTP_PASSWORD'),
  'encryption': env('SMTP_ENCRYPTION', 'tls'), // 'tls', 'ssl', or 'none'
  'timeout': env.getInt('SMTP_TIMEOUT', defaultValue: 30),
}

// Gmail Example (.env)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # Use App Password, not regular password!
SMTP_ENCRYPTION=tls

// Mailtrap Example (.env) - for testing
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USERNAME=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password
SMTP_ENCRYPTION=tls
`;

const mailgunConfig = `
'mailgun': {
  'domain': env('MAILGUN_DOMAIN'),      // e.g., mg.yourdomain.com
  'api_key': env('MAILGUN_API_KEY'),    // Your Mailgun API key
  'endpoint': env('MAILGUN_ENDPOINT', 'https://api.mailgun.net'),
}

// .env
MAILGUN_DOMAIN=mg.example.com
MAILGUN_API_KEY=key-1234567890abcdef
MAILGUN_ENDPOINT=https://api.mailgun.net  # or https://api.eu.mailgun.net for EU
`;

const sesConfig = `
'ses': {
  'access_key_id': env('AWS_ACCESS_KEY_ID'),
  'secret_access_key': env('AWS_SECRET_ACCESS_KEY'),
  'region': env('AWS_DEFAULT_REGION', 'us-east-1'),
  'configuration_set': env('AWS_SES_CONFIGURATION_SET'), // Optional
}

// .env
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_DEFAULT_REGION=us-east-1
AWS_SES_CONFIGURATION_SET=my-config-set  # Optional
`;

const postmarkConfig = `
'postmark': {
  'server_token': env('POSTMARK_SERVER_TOKEN'),
  'message_stream': env('POSTMARK_MESSAGE_STREAM', 'outbound'),
}

// .env
POSTMARK_SERVER_TOKEN=your-server-token-here
POSTMARK_MESSAGE_STREAM=outbound  # or 'broadcasts' for marketing emails
`;

const devConfig = `
// Development environment - use 'log' driver
// config/development/app.dart
const config = {
  'mail': {
    'default': 'log',  // Emails will be logged, not sent
    'from': {
      'address': 'dev@localhost',
      'name': 'Dev Environment',
    },
  },
};

// Testing environment - use 'array' driver
// In your tests
import 'package:khadem/khadem.dart';

void main() {
  test('email is sent', () async {
    // ArrayTransport stores emails in memory
    final transport = ArrayTransport();
    final mailer = Mailer(transport);
    
    await mailer
        .to('test@example.com')
        .subject('Test')
        .text('Test content')
        .send();
    
    // Assert email was sent
    expect(transport.wasSentTo('test@example.com'), isTrue);
  });
}
`;

const multipleMailers = `
// config/app.dart
const config = {
  'mail': {
    'default': 'smtp',
    
    'mailers': {
      // Primary mailer for transactional emails
      'smtp': {
        'driver': 'smtp',
        'host': env('SMTP_HOST'),
        'port': env.getInt('SMTP_PORT'),
        'username': env('SMTP_USERNAME'),
        'password': env('SMTP_PASSWORD'),
        'encryption': 'tls',
      },
      
      // Secondary mailer for marketing emails
      'marketing': {
        'driver': 'mailgun',
        'domain': env('MAILGUN_DOMAIN'),
        'api_key': env('MAILGUN_API_KEY'),
      },
      
      // Mailer for system notifications
      'notifications': {
        'driver': 'ses',
        'access_key_id': env('AWS_ACCESS_KEY_ID'),
        'secret_access_key': env('AWS_SECRET_ACCESS_KEY'),
        'region': 'us-east-1',
      },
      
      // Development mailer
      'log': {
        'driver': 'log',
      },
    },
    
    'from': {
      'address': env('MAIL_FROM_ADDRESS'),
      'name': env('MAIL_FROM_NAME'),
    },
  },
};
`;

const usingMultipleMailers = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Use default mailer (smtp)
await mailManager
    .to('user@example.com')
    .subject('Welcome')
    .send();

// Use specific mailer for marketing
await mailManager.mailer('marketing')
    .to('user@example.com')
    .subject('Newsletter')
    .send();

// Use specific mailer for notifications
await mailManager.mailer('notifications')
    .to('admin@example.com')
    .subject('System Alert')
    .send();

// Use log mailer in development
if (env('APP_ENV') == 'development') {
  await mailManager.mailer('log')
      .to('dev@localhost')
      .subject('Debug Email')
      .send();
}
`;

const serviceProvider = `
// lib/main.dart
import 'package:khadem/khadem.dart';

void main() async {
  final app = await Khadem.init(
    environment: 'development',
    providers: [
      // Core providers
      RouteServiceProvider(),
      
      // Mail provider
      MailServiceProvider(),  // Add this
      
      // Your app providers
      AppServiceProvider(),
    ],
  );

  await app.start();
}
`;
</script>
