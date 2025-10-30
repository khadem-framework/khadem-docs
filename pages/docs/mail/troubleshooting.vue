<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Mail Troubleshooting</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Common mail issues and how to fix them. Diagnose SMTP connection problems,
        authentication failures, and configuration errors.
      </p>
    </header>

    <!-- Quick Diagnostic -->
    <DocSection title="Quick Diagnostic Steps">
      <template #description>
        Start here when experiencing mail issues.
      </template>
      <CodeBlock :code="diagnosticTool" language="bash" title="Run Diagnostic Tool" />
      <div class="mt-4 grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. Test Connection</h4>
          <p class="text-sm text-blue-700 dark:text-blue-300">Verify SMTP server is reachable</p>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">2. Check Credentials</h4>
          <p class="text-sm text-green-700 dark:text-green-300">Ensure username/password are correct</p>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Test Firewall</h4>
          <p class="text-sm text-purple-700 dark:text-purple-300">Check if ports are blocked</p>
        </div>
      </div>
    </DocSection>

    <!-- Common Errors -->
    <DocSection title="Common Errors & Solutions">
      <template #description>
        Quick fixes for the most common mail issues.
      </template>
      <div class="space-y-4">
        <div class="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
          <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">Connection Timeout</h4>
          <p class="text-sm text-red-700 dark:text-red-300 mb-2">SMTP server not responding within timeout period.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>Increase timeout: <code>SMTP_TIMEOUT=60</code></li>
            <li>Check firewall settings</li>
            <li>Verify correct host and port</li>
            <li>Test with telnet or nc</li>
          </ul>
        </div>

        <div class="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
          <h4 class="font-semibold text-orange-900 dark:text-orange-100 mb-2">Authentication Failed</h4>
          <p class="text-sm text-orange-700 dark:text-orange-300 mb-2">Wrong credentials or auth method.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-orange-700 dark:text-orange-300">
            <li>Use App Password for Gmail (not regular password)</li>
            <li>Check username format (full email vs username)</li>
            <li>Enable "Less secure app access" (Gmail)</li>
            <li>Verify credentials in provider dashboard</li>
          </ul>
        </div>

        <div class="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
          <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Connection Refused</h4>
          <p class="text-sm text-yellow-700 dark:text-yellow-300 mb-2">Server not accepting connections.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
            <li>Wrong port number (try 587, 465, or 25)</li>
            <li>Server is down or unreachable</li>
            <li>Firewall blocking outbound connections</li>
            <li>ISP blocking SMTP ports</li>
          </ul>
        </div>

        <div class="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
          <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">SSL/TLS Error</h4>
          <p class="text-sm text-purple-700 dark:text-purple-300 mb-2">Encryption configuration issue.</p>
          <ul class="list-disc pl-5 space-y-1 text-sm text-purple-700 dark:text-purple-300">
            <li>Use 'tls' for port 587, 'ssl' for port 465</li>
            <li>Update SSL certificates</li>
            <li>Try 'none' encryption temporarily to test</li>
            <li>Check if antivirus is interfering</li>
          </ul>
        </div>
      </div>
    </DocSection>

    <!-- Provider-Specific Settings -->
    <DocSection title="Provider-Specific Settings">
      <template #description>
        Correct SMTP settings for popular email providers.
      </template>
      <CodeBlock :code="providerSettings" language="bash" title="Verified SMTP Settings" />
    </DocSection>

    <!-- Port Testing -->
    <DocSection title="Testing Port Connectivity">
      <template #description>
        Verify that SMTP ports are accessible from your network.
      </template>
      <CodeBlock :code="portTesting" language="bash" title="Test SMTP Port" />
    </DocSection>

    <!-- Firewall Configuration -->
    <DocSection title="Firewall Configuration">
      <template #description>
        Allow SMTP ports through your firewall.
      </template>
      <CodeBlock :code="firewallConfig" language="bash" title="Firewall Setup" />
    </DocSection>

    <!-- Gmail Specific -->
    <DocSection title="Gmail Configuration">
      <template #description>
        Gmail has specific requirements for SMTP access.
      </template>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 mb-4">
        <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Important: Use App Password!</h4>
        <p class="text-sm text-red-700 dark:text-red-300 mb-2">
          Gmail requires an App Password when 2-factor authentication is enabled.
          Do NOT use your regular Google account password.
        </p>
      </div>
      <CodeBlock :code="gmailSetup" language="text" title="Gmail Setup Steps" />
      <CodeBlock :code="gmailConfig" language="bash" title="Gmail Configuration" class="mt-4" />
    </DocSection>

    <!-- Alternative Transports -->
    <DocSection title="Alternative Mail Drivers">
      <template #description>
        If SMTP continues to fail, switch to API-based drivers that use HTTPS.
      </template>
      <CodeBlock :code="alternativeDrivers" language="bash" title="API-Based Drivers" />
    </DocSection>

    <!-- Programmatic Diagnostics -->
    <DocSection title="Programmatic Diagnostics">
      <template #description>
        Run connection tests programmatically in your application.
      </template>
      <CodeBlock :code="programmaticTest" language="dart" title="SMTP Diagnostic Code" />
    </DocSection>

    <!-- Testing with Mailtrap -->
    <DocSection title="Testing with Mailtrap">
      <template #description>
        Use Mailtrap to test email sending without sending real emails.
      </template>
      <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 mb-4">
        <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Recommended for Development</h4>
        <p class="text-sm text-green-700 dark:text-green-300">
          Mailtrap is a free email testing service that catches all emails sent from your application.
          Perfect for development and testing.
        </p>
      </div>
      <CodeBlock :code="mailtrapSetup" language="text" title="Mailtrap Setup" />
      <CodeBlock :code="mailtrapConfig" language="bash" title="Mailtrap Configuration" class="mt-4" />
    </DocSection>

    <!-- Debug Mode -->
    <DocSection title="Enable Debug Mode">
      <template #description>
        Get detailed logging for mail operations.
      </template>
      <CodeBlock :code="debugMode" language="dart" title="Debug Logging" />
    </DocSection>

    <!-- Best Practices -->
    <DocSection title="Prevention Best Practices">
      <template #description>
        Follow these practices to avoid mail issues.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Test mail configuration in development first</li>
            <li>Use Mailtrap for development testing</li>
            <li>Verify email addresses before sending</li>
            <li>Handle mail exceptions gracefully</li>
            <li>Queue emails instead of sending synchronously</li>
            <li>Monitor mail delivery rates</li>
            <li>Keep credentials in .env file</li>
            <li>Use API-based drivers in production</li>
          </ul>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Commit credentials to version control</li>
            <li>Use personal Gmail in production</li>
            <li>Ignore email sending failures</li>
            <li>Send emails synchronously in HTTP requests</li>
            <li>Use weak passwords</li>
            <li>Skip testing before production</li>
            <li>Forget to handle rate limits</li>
            <li>Use default error messages for users</li>
          </ul>
        </div>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Mail Troubleshooting',
  meta: [{ name: 'description', content: 'Troubleshoot mail issues in Khadem' }]
});

const diagnosticTool = `
# Test your SMTP configuration
dart run example/lib/smtp_diagnostic_example.dart

# Or test programmatically in your code
dart run lib/test_mail.dart
`;

const providerSettings = `
# Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_ENCRYPTION=tls
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # App Password, NOT regular password!

# Outlook/Office 365
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_ENCRYPTION=tls
SMTP_USERNAME=your-email@outlook.com
SMTP_PASSWORD=your-password

# Mailtrap (Testing)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_ENCRYPTION=tls
SMTP_USERNAME=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password

# SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_ENCRYPTION=tls
SMTP_USERNAME=apikey
SMTP_PASSWORD=your-sendgrid-api-key

# Mailgun SMTP
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_ENCRYPTION=tls
SMTP_USERNAME=postmaster@yourdomain.com
SMTP_PASSWORD=your-mailgun-smtp-password
`;

const portTesting = `
# Using telnet (Windows/Mac/Linux)
telnet smtp.gmail.com 587

# Expected output:
# 220 smtp.gmail.com ESMTP
# Press Ctrl+C to exit

# Using PowerShell (Windows)
Test-NetConnection -ComputerName smtp.gmail.com -Port 587

# Expected output:
# TcpTestSucceeded : True

# Using nc (Mac/Linux)
nc -zv smtp.gmail.com 587

# Expected output:
# Connection to smtp.gmail.com port 587 [tcp/*] succeeded!

# Test multiple ports
for port in 25 587 465 2525; do
  nc -zv smtp.gmail.com $port
done
`;

const firewallConfig = `
# Windows Firewall (PowerShell as Administrator)
New-NetFirewallRule -DisplayName "SMTP Outbound" -Direction Outbound -Protocol TCP -LocalPort 587 -Action Allow

# Linux (iptables)
sudo iptables -A OUTPUT -p tcp --dport 587 -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 465 -j ACCEPT
sudo iptables-save

# Linux (ufw)
sudo ufw allow out 587/tcp
sudo ufw allow out 465/tcp

# MacOS
# Usually no action needed - outbound connections are allowed by default
# If using Little Snitch, add a rule for your Dart application
`;

const gmailSetup = `
Step 1: Enable 2-Factor Authentication
   1. Go to https://myaccount.google.com/security
   2. Click "2-Step Verification"
   3. Follow setup instructions

Step 2: Generate App Password
   1. Go to https://myaccount.google.com/apppasswords
   2. Select app: "Mail"
   3. Select device: "Other (Custom name)"
   4. Enter name: "Khadem App"
   5. Click "Generate"
   6. Copy the 16-character password (spaces will be removed)

Step 3: Use App Password in .env
   Use the generated password, NOT your Google account password!
`;

const gmailConfig = `
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_ENCRYPTION=tls
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop  # App Password from Step 2

# Gmail Limits:
# - Free accounts: 500 emails/day
# - Google Workspace: 2,000 emails/day
# - Consider using Mailgun/SES for higher volumes
`;

const alternativeDrivers = `
# Mailgun (API-based, no SMTP)
MAIL_DRIVER=mailgun
MAILGUN_DOMAIN=mg.yourdomain.com
MAILGUN_API_KEY=key-xxxxxxxxxxxxxxxxxxxxxxxx

# Amazon SES (API-based, no SMTP)
MAIL_DRIVER=ses
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_DEFAULT_REGION=us-east-1

# Postmark (API-based, no SMTP)
MAIL_DRIVER=postmark
POSTMARK_SERVER_TOKEN=your-server-token

# These use HTTPS (port 443) which is rarely blocked
`;

const programmaticTest = `
import 'package:khadem/khadem.dart';

void main() async {
  try {
    final mailManager = container.resolve<MailManager>();
    
    // Test connection
    print('Testing SMTP connection...');
    
    await mailManager
        .to('test@example.com')
        .subject('Test Email')
        .text('If you receive this, SMTP is working!')
        .send();
    
    print('✓ Email sent successfully!');
  } on MailException catch (e) {
    print('✗ Mail error: \${e.message}');
    print('Stack trace: \${e.stackTrace}');
    
    // Check specific error types
    if (e.message.contains('timeout')) {
      print('Suggestion: Increase SMTP_TIMEOUT');
    } else if (e.message.contains('authentication')) {
      print('Suggestion: Check username/password');
    } else if (e.message.contains('connection refused')) {
      print('Suggestion: Check firewall and port settings');
    }
  } catch (e) {
    print('✗ Unexpected error: \$e');
  }
}

// Run advanced diagnostics
Future<void> runDiagnostics() async {
  final config = SmtpConfig(
    host: env('SMTP_HOST'),
    port: env.getInt('SMTP_PORT'),
    encryption: env('SMTP_ENCRYPTION'),
    timeout: env.getInt('SMTP_TIMEOUT', defaultValue: 30),
  );

  final report = await SmtpDiagnostics.testConnection(config);
  
  print('=== SMTP Diagnostic Report ===');
  print('Server: \${config.host}:\${config.port}');
  print('Status: \${report.isHealthy ? "HEALTHY" : "UNHEALTHY"}');
  print('Message: \${report.summary}');
  
  if (!report.isHealthy) {
    print('\\nRecommendations:');
    print(SmtpDiagnostics.generateDiagnosticMessage(report));
  }
}
`;

const mailtrapSetup = `
Step 1: Sign Up for Mailtrap
   1. Go to https://mailtrap.io
   2. Create a free account
   3. Verify your email

Step 2: Create an Inbox
   1. Click "Create Inbox"
   2. Name it "Khadem Development"
   3. Click "Save"

Step 3: Get SMTP Credentials
   1. Click on your inbox
   2. Go to "SMTP Settings"
   3. Copy the credentials shown

Step 4: Configure Khadem
   Use the credentials in your .env file

All emails sent will appear in your Mailtrap inbox!
No emails will be sent to real recipients.
`;

const mailtrapConfig = `
# Mailtrap Configuration
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_ENCRYPTION=tls
SMTP_USERNAME=1a2b3c4d5e6f7g  # From Mailtrap inbox settings
SMTP_PASSWORD=1a2b3c4d5e6f7g  # From Mailtrap inbox settings

# Benefits:
# - Free tier: 500 emails/month
# - No real emails sent
# - Test spam score
# - HTML/text preview
# - View all headers
# - API access
`;

const debugMode = `
// Enable verbose mail logging
import 'package:khadem/khadem.dart';

// In your service provider or bootstrap
void configureMailLogging() {
  Log.channel('mail').level = LogLevel.debug;
}

// Or in config/logging.dart
const loggingConfig = {
  'channels': {
    'mail': {
      'level': 'debug',  // debug, info, warning, error
      'handler': 'file',
      'path': 'storage/logs/mail.log',
    },
  },
};

// This will log:
// - SMTP connection attempts
// - Authentication steps
// - Email content
// - Send confirmations
// - Errors with stack traces

// Check logs
// tail -f storage/logs/mail.log
`;
</script>
