<template>
  <div class="space-y-10">
    <header>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Sending Emails</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Learn how to send emails using MailManager, create Mailable classes, add attachments,
        and queue emails for async delivery.
      </p>
    </header>

    <!-- Basic Email Sending -->
    <DocSection title="Basic Email Sending">
      <template #description>
        Send simple emails using the MailManager fluent API.
      </template>
      <CodeBlock :code="basicSending" language="dart" title="Simple Email" />
    </DocSection>

    <!-- HTML Emails -->
    <DocSection title="HTML Emails">
      <template #description>
        Send HTML emails with plain text fallback for email clients that don't support HTML.
      </template>
      <CodeBlock :code="htmlEmail" language="dart" title="HTML Email" />
    </DocSection>

    <!-- Multiple Recipients -->
    <DocSection title="Multiple Recipients">
      <template #description>
        Send emails to multiple recipients using To, CC, and BCC.
      </template>
      <CodeBlock :code="multipleRecipients" language="dart" title="Multiple Recipients" />
    </DocSection>

    <!-- File Attachments -->
    <DocSection title="File Attachments">
      <template #description>
        Attach files from filesystem or raw data to your emails.
      </template>
      <CodeBlock :code="fileAttachments" language="dart" title="Attaching Files" />
    </DocSection>

    <!-- Inline Images -->
    <DocSection title="Inline Embedded Images">
      <template #description>
        Embed images inline using Content-ID (CID) references in HTML.
      </template>
      <CodeBlock :code="inlineImages" language="dart" title="Embedded Images" />
    </DocSection>

    <!-- Mailable Classes -->
    <DocSection title="Mailable Classes">
      <template #description>
        Create reusable, object-oriented email templates using Mailable classes.
      </template>
      <CodeBlock :code="mailableClass" language="dart" title="Creating a Mailable" />
      <CodeBlock :code="sendingMailable" language="dart" title="Sending Mailable" class="mt-4" />
    </DocSection>

    <!-- Lifecycle Hooks -->
    <DocSection title="Mailable Lifecycle Hooks">
      <template #description>
        Use hooks to execute code before/after sending or on error.
      </template>
      <CodeBlock :code="lifecycleHooks" language="dart" title="Mailable Hooks" />
    </DocSection>

    <!-- Queued Emails -->
    <DocSection title="Queued Emails">
      <template #description>
        Queue emails for asynchronous sending to improve application performance.
      </template>
      <CodeBlock :code="queuedEmails" language="dart" title="Queuing Emails" />
    </DocSection>

    <!-- Custom Headers -->
    <DocSection title="Custom Headers & Priority">
      <template #description>
        Add custom headers and set email priority.
      </template>
      <CodeBlock :code="customHeaders" language="dart" title="Headers and Priority" />
    </DocSection>

    <!-- In Controllers -->
    <DocSection title="Sending Emails in Controllers">
      <template #description>
        Common patterns for sending emails in HTTP controllers.
      </template>
      <CodeBlock :code="controllerExample" language="dart" title="Controller Example" />
    </DocSection>

    <!-- Best Practices -->
    <DocSection title="Best Practices">
      <template #description>
        Follow these guidelines for reliable and professional email delivery.
      </template>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
          <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
            <li>Always provide both HTML and plain text versions</li>
            <li>Queue emails for async sending</li>
            <li>Use Mailable classes for reusable templates</li>
            <li>Test emails with ArrayTransport before production</li>
            <li>Validate recipient email addresses</li>
            <li>Set meaningful subject lines</li>
            <li>Include unsubscribe links for marketing emails</li>
            <li>Use proper FROM addresses (no-reply@yourdomain.com)</li>
          </ul>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
          <ul class="list-disc pl-5 space-y-1 text-red-700 dark:text-red-300">
            <li>Send emails synchronously in HTTP requests</li>
            <li>Hardcode email content in controllers</li>
            <li>Send large attachments (>10MB)</li>
            <li>Use generic FROM addresses (noreply@gmail.com)</li>
            <li>Ignore email sending failures</li>
            <li>Send marketing emails without opt-in</li>
            <li>Forget to handle bounces and complaints</li>
            <li>Use HTML-only emails without text fallback</li>
          </ul>
        </div>
      </div>
    </DocSection>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });
useHead({
  title: 'Sending Emails',
  meta: [{ name: 'description', content: 'Send emails with Khadem Mail module' }]
});

const basicSending = `
import 'package:khadem/khadem.dart';

final mailManager = container.resolve<MailManager>();

// Simple text email
await mailManager
    .to('user@example.com')
    .from('sender@example.com', 'My Application')
    .subject('Hello World')
    .text('This is a plain text email.')
    .send();

print('Email sent successfully!');
`;

const htmlEmail = `
// HTML email with plain text fallback
await mailManager
    .to('user@example.com')
    .subject('Welcome to Our Platform')
    .html('''
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .header { background: #3b82f6; color: white; padding: 20px; }
            .content { padding: 20px; }
            .button {
              background: #10b981;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Welcome!</h1>
          </div>
          <div class="content">
            <p>Thank you for joining our platform.</p>
            <a href="https://example.com/getting-started" class="button">
              Get Started
            </a>
          </div>
        </body>
      </html>
    ''')
    .text('''
Welcome!

Thank you for joining our platform.
Get started: https://example.com/getting-started
    ''')
    .send();
`;

const multipleRecipients = `
// Multiple To recipients
await mailManager
    .to('user1@example.com')
    .to('user2@example.com')
    .to(['user3@example.com', 'user4@example.com'])
    .subject('Team Update')
    .send();

// Using CC and BCC
await mailManager
    .to('primary@example.com')
    .cc('manager@example.com')
    .cc(['team1@example.com', 'team2@example.com'])
    .bcc('admin@example.com')  // Hidden copy
    .subject('Project Status')
    .text('Project update...')
    .send();

// Reply-To address
await mailManager
    .to('customer@example.com')
    .from('noreply@example.com', 'Support Team')
    .replyTo('support@example.com', 'Customer Support')
    .subject('Ticket #12345')
    .text('Your ticket has been updated.')
    .send();
`;

const fileAttachments = `
// Attach file from path
await mailManager
    .to('user@example.com')
    .subject('Invoice #12345')
    .text('Please find your invoice attached.')
    .attach('/path/to/invoice.pdf', name: 'invoice.pdf')
    .send();

// Attach multiple files
await mailManager
    .to('user@example.com')
    .subject('Documents')
    .attach('/path/to/document1.pdf', name: 'document1.pdf')
    .attach('/path/to/document2.pdf', name: 'document2.pdf')
    .send();

// Attach raw data
final reportData = utf8.encode('Report content here...');
await mailManager
    .to('user@example.com')
    .subject('Monthly Report')
    .attachData(
      reportData,
      'report.txt',
      mimeType: 'text/plain',
    )
    .send();

// Attach CSV data
final csvData = utf8.encode('Name,Email\\nJohn,john@example.com');
await mailManager
    .to('user@example.com')
    .subject('User Export')
    .attachData(
      csvData,
      'users.csv',
      mimeType: 'text/csv',
    )
    .send();
`;

const inlineImages = `
// Embed inline image
await mailManager
    .to('user@example.com')
    .subject('Welcome')
    .html('''
      <html>
        <body>
          <h1>Welcome!</h1>
          <img src="cid:logo" alt="Logo" width="200">
          <p>Thank you for joining us.</p>
          <img src="cid:banner" alt="Banner">
        </body>
      </html>
    ''')
    .embed('/path/to/logo.png', 'logo')
    .embed('/path/to/banner.jpg', 'banner')
    .send();

// With MIME type
await mailManager
    .to('user@example.com')
    .html('<img src="cid:chart">')
    .embed('/path/to/chart.svg', 'chart', mimeType: 'image/svg+xml')
    .send();
`;

const mailableClass = `
import 'package:khadem/khadem.dart';

class WelcomeMail extends Mailable {
  final User user;
  final String verificationUrl;

  WelcomeMail({
    required this.user,
    required this.verificationUrl,
  });

  @override
  Future<void> build(MailerInterface mailer) async {
    mailer
        .to(user.email, user.name)
        .subject('Welcome to \${Config.get('app.name')}')
        .html(_buildHtml())
        .text(_buildText());
  }

  String _buildHtml() {
    return '''
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .button {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome, \${user.name}!</h1>
            <p>Thank you for creating an account.</p>
            <p>Please verify your email address to get started:</p>
            <a href="\$verificationUrl" class="button">Verify Email</a>
            <p>If you didn't create this account, please ignore this email.</p>
          </div>
        </body>
      </html>
    ''';
  }

  String _buildText() {
    return '''
Welcome, \${user.name}!

Thank you for creating an account.

Please verify your email address by visiting:
\$verificationUrl

If you didn't create this account, please ignore this email.
    ''';
  }
}

// With attachment
class InvoiceMail extends Mailable {
  final Invoice invoice;

  InvoiceMail(this.invoice);

  @override
  Future<void> build(MailerInterface mailer) async {
    mailer
        .to(invoice.customerEmail, invoice.customerName)
        .subject('Invoice #\${invoice.id}')
        .html('<h1>Your Invoice</h1><p>Please find attached.</p>')
        .attach(invoice.pdfPath, name: 'invoice_\${invoice.id}.pdf');
  }
}
`;

const sendingMailable = `
// Send mailable immediately
final welcome = WelcomeMail(
  user: user,
  verificationUrl: 'https://example.com/verify?token=...',
);

await mailManager.sendMailable(welcome);

// Queue mailable for async sending
await mailManager.queueMailable(welcome);

// Queue with delay
await mailManager.queueMailable(
  welcome,
  delay: Duration(minutes: 5),
);
`;

const lifecycleHooks = `
class OrderConfirmationMail extends Mailable {
  final Order order;

  OrderConfirmationMail(this.order);

  @override
  Future<void> build(MailerInterface mailer) async {
    mailer
        .to(order.customerEmail)
        .subject('Order Confirmation #\${order.id}')
        .html(_buildOrderHtml());
  }

  @override
  Future<void> beforeSend() async {
    // Log before sending
    Log.info('Sending order confirmation to \${order.customerEmail}');
    
    // Update database
    await order.update({'email_sent_at': DateTime.now()});
  }

  @override
  Future<void> afterSend() async {
    // Log successful send
    Log.info('Order confirmation sent successfully');
    
    // Trigger event
    await Event.dispatch(OrderEmailSentEvent(order));
  }

  @override
  Future<void> onError(dynamic error, StackTrace stack) async {
    // Log error
    Log.error('Failed to send order confirmation', error, stack);
    
    // Notify admin
    await Notification.sendToAdmin('Failed to send order email: \${order.id}');
  }

  String _buildOrderHtml() {
    return '<h1>Order #\${order.id}</h1>';
  }
}
`;

const queuedEmails = `
// Auto-queue mailable
class NewsletterMail extends Mailable {
  @override
  bool get shouldQueue => true;

  @override
  Duration? get queueDelay => Duration(minutes: 10);

  @override
  String? get queueConnection => 'redis';

  @override
  Future<void> build(MailerInterface mailer) async {
    mailer
        .to('subscriber@example.com')
        .subject('Weekly Newsletter')
        .html('<h1>This Week\'s Updates</h1>');
  }
}

// This will automatically queue
await mailManager.sendMailable(NewsletterMail());

// Or manually queue any mailable
await mailManager.queueMailable(
  WelcomeMail(user: user),
  delay: Duration(seconds: 30),
);

// Queue regular email
await mailManager
    .to('user@example.com')
    .subject('Welcome')
    .text('Welcome message')
    .queue();

// Queue with delay
await mailManager
    .to('user@example.com')
    .subject('Reminder')
    .text('Don\'t forget...')
    .queue(delay: Duration(hours: 24));
`;

const customHeaders = `
// Add custom headers
await mailManager
    .to('user@example.com')
    .subject('Newsletter')
    .text('Content...')
    .header('X-Campaign-ID', 'newsletter-2024-01')
    .header('X-Sender-ID', 'marketing-team')
    .send();

// Set email priority
await mailManager
    .to('admin@example.com')
    .subject('URGENT: Server Down')
    .text('Server is experiencing issues')
    .priority(1)  // 1 = highest, 5 = lowest
    .send();

// Normal priority
await mailManager
    .to('user@example.com')
    .subject('Update')
    .priority(3)  // 3 = normal
    .send();
`;

const controllerExample = `
import 'package:khadem/khadem.dart';

class UserController {
  static Future<void> register(Request req, Response res) async {
    // Validate request
    final data = await req.validate({
      'name': 'required',
      'email': 'required|email',
      'password': 'required|min:8',
    });

    // Create user
    final user = await User().query.insert(data);

    // Send welcome email (queued)
    final mailManager = container.resolve<MailManager>();
    
    await mailManager.queueMailable(
      WelcomeMail(
        user: user,
        verificationUrl: _generateVerificationUrl(user),
      ),
    );

    res.sendJson({
      'message': 'Registration successful. Check your email.',
      'user': user.toJson(),
    });
  }

  static Future<void> resetPassword(Request req, Response res) async {
    final email = req.input('email');
    final user = await User().query.where('email', '=', email).first();

    if (user == null) {
      return res.status(404).sendJson({'error': 'User not found'});
    }

    // Generate reset token
    final token = _generateResetToken();

    // Send reset email immediately (important!)
    final mailManager = container.resolve<MailManager>();
    
    await mailManager.sendMailable(
      PasswordResetMail(user: user, token: token),
    );

    res.sendJson({
      'message': 'Password reset email sent',
    });
  }

  static String _generateVerificationUrl(User user) {
    // Implementation
    return 'https://example.com/verify?token=...';
  }

  static String _generateResetToken() {
    // Implementation
    return 'reset_token';
  }
}
`;
</script>
