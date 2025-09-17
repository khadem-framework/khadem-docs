<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Production Deployment</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive guide for deploying Khadem applications to production environments with automated deployment, security hardening, and performance optimization.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Automated Production Setup</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem provides automated production deployment through the CLI, generating optimized configurations and deployment scripts for various hosting platforms.
      </p>

      <CodeBlock
        :code="automatedProductionCode"
        language="bash"
        title="Generate Production Setup Automatically"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Automated Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Systemd service configuration</li>
          <li>Nginx reverse proxy setup</li>
          <li>SSL/TLS certificate automation</li>
          <li>Database and Redis configuration</li>
          <li>Firewall and security hardening</li>
          <li>Log rotation and monitoring</li>
          <li>Backup automation scripts</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Environment Configuration</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Production environments require secure configuration with proper environment variables and security settings.
      </p>

      <CodeBlock
        :code="envConfigCode"
        language="bash"
        title="Production Environment Configuration"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Production Checklist</h3>
        <div class="grid md:grid-cols-2 gap-4 mt-2">
          <div>
            <h4 class="font-medium mb-2">Security & Configuration</h4>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>✅ APP_DEBUG=false</li>
              <li>✅ Strong APP_KEY (32+ characters)</li>
              <li>✅ Secure database credentials</li>
              <li>✅ Redis authentication enabled</li>
              <li>✅ Environment variables for secrets</li>
              <li>✅ CORS properly configured</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium mb-2">Infrastructure & Monitoring</h4>
            <ul class="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
              <li>✅ SSL/TLS certificates</li>
              <li>✅ Firewall configuration</li>
              <li>✅ Log aggregation setup</li>
              <li>✅ Monitoring and alerts</li>
              <li>✅ Automated backups</li>
              <li>✅ CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Server Requirements</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Minimum and recommended server specifications for running Khadem applications in production.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-3">Minimum Requirements</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>OS:</strong> Ubuntu 20.04 LTS or CentOS 8+</li>
            <li><strong>RAM:</strong> 2GB (4GB recommended)</li>
            <li><strong>CPU:</strong> 2 cores (4 recommended)</li>
            <li><strong>Storage:</strong> 20GB SSD</li>
            <li><strong>Dart:</strong> SDK 3.0+</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-3">Recommended Stack</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Web Server:</strong> Nginx or Apache</li>
            <li><strong>Database:</strong> PostgreSQL 15+ or MySQL 8+</li>
            <li><strong>Cache:</strong> Redis 7+</li>
            <li><strong>SSL:</strong> Let's Encrypt certificates</li>
            <li><strong>Firewall:</strong> ufw or firewalld</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Server Setup & Configuration</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Automated server setup with Khadem CLI or manual configuration for production environments.
      </p>

      <CodeBlock
        :code="serverSetupCode"
        language="bash"
        title="Automated Server Setup with Khadem CLI"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Setup Components</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><strong>Dart SDK:</strong> Latest stable version installation</li>
          <li><strong>Database:</strong> PostgreSQL/MySQL with optimized configuration</li>
          <li><strong>Redis:</strong> In-memory cache and session storage</li>
          <li><strong>Nginx:</strong> Reverse proxy with SSL termination</li>
          <li><strong>Firewall:</strong> UFW configuration for security</li>
          <li><strong>SSL:</strong> Let's Encrypt certificate automation</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Application Deployment</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Streamlined deployment process with automated build, migration, and service management.
      </p>

      <CodeBlock
        :code="deploymentCode"
        language="bash"
        title="Automated Production Deployment"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">Deployment Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li><strong>Zero-downtime:</strong> Rolling updates with health checks</li>
          <li><strong>Auto-scaling:</strong> Horizontal scaling support</li>
          <li><strong>Rollback:</strong> Quick reversion to previous versions</li>
          <li><strong>Health Monitoring:</strong> Automated service health checks</li>
          <li><strong>Log Aggregation:</strong> Centralized logging setup</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Process Management</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Systemd service management for reliable production operation with automatic restarts and logging.
      </p>

      <CodeBlock
        :code="systemdCode"
        language="ini"
        title="Khadem Systemd Service Configuration"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Service Management</h3>
        <CodeBlock
          :code="serviceManagementCode"
          language="bash"
          title="Systemd Service Commands"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">SSL/TLS Configuration</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Automated SSL certificate management with Let's Encrypt for secure HTTPS connections.
      </p>

      <CodeBlock
        :code="sslCode"
        language="bash"
        title="SSL Setup with Let's Encrypt"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">SSL Best Practices</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li><strong>Auto-renewal:</strong> Certificates renew automatically</li>
          <li><strong>HSTS Headers:</strong> Force HTTPS connections</li>
          <li><strong>Modern Ciphers:</strong> TLS 1.2+ with secure cipher suites</li>
          <li><strong>Certificate Pinning:</strong> Optional HPKP implementation</li>
          <li><strong>Monitoring:</strong> Certificate expiry alerts</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Database Backup & Recovery</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Automated database backup strategies with cloud storage integration and disaster recovery procedures.
      </p>

      <CodeBlock
        :code="backupCode"
        language="bash"
        title="Automated Database Backup Script"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Backup Strategies</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Daily Backups:</strong> Full database snapshots</li>
            <li><strong>Incremental:</strong> Hourly change tracking</li>
            <li><strong>Cloud Storage:</strong> AWS S3, Google Cloud, Azure</li>
            <li><strong>Retention:</strong> Configurable retention policies</li>
            <li><strong>Encryption:</strong> At-rest and in-transit encryption</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Recovery Procedures</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Point-in-time:</strong> Restore to specific timestamp</li>
            <li><strong>Failover:</strong> Automatic switch to backup</li>
            <li><strong>Testing:</strong> Regular recovery testing</li>
            <li><strong>Documentation:</strong> Detailed recovery guides</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Monitoring & Observability</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive monitoring stack with Prometheus, Grafana, and alerting for production applications.
      </p>

      <CodeBlock
        :code="monitoringCode"
        language="yaml"
        title="Monitoring Stack Configuration"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Monitoring Components</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li><strong>Application Metrics:</strong> Response times, error rates, throughput</li>
          <li><strong>System Metrics:</strong> CPU, memory, disk, network usage</li>
          <li><strong>Database Metrics:</strong> Connection pools, query performance</li>
          <li><strong>Custom Dashboards:</strong> Business-specific KPIs</li>
          <li><strong>Alerting:</strong> Email, Slack, PagerDuty integration</li>
          <li><strong>Log Aggregation:</strong> ELK stack or similar</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Performance Optimization</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Production performance tuning with caching, connection pooling, and optimization strategies.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Application Optimization</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
            <li><strong>AOT Compilation:</strong> Faster startup and lower memory</li>
            <li><strong>Connection Pooling:</strong> Database connection optimization</li>
            <li><strong>Caching Strategy:</strong> Multi-layer caching (Redis + CDN)</li>
            <li><strong>Query Optimization:</strong> Database query performance</li>
            <li><strong>Asset Optimization:</strong> Minification and compression</li>
            <li><strong>Rate Limiting:</strong> API protection and abuse prevention</li>
          </ul>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Infrastructure Optimization</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
            <li><strong>Load Balancing:</strong> Distribute traffic across instances</li>
            <li><strong>Auto-scaling:</strong> Automatic resource scaling</li>
            <li><strong>CDN Integration:</strong> Global content delivery</li>
            <li><strong>Database Sharding:</strong> Horizontal data partitioning</li>
            <li><strong>Read Replicas:</strong> Separate read and write workloads</li>
            <li><strong>Horizontal Scaling:</strong> Multiple application instances</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Security Best Practices</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive security measures for production Khadem deployments.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Infrastructure Security</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
            <li><strong>Firewall:</strong> Restrict unnecessary ports and services</li>
            <li><strong>SSH Hardening:</strong> Key-based authentication, disable root</li>
            <li><strong>Updates:</strong> Regular security updates and patches</li>
            <li><strong>Network Security:</strong> VPC isolation and security groups</li>
            <li><strong>Access Control:</strong> Principle of least privilege</li>
            <li><strong>Monitoring:</strong> Intrusion detection and log analysis</li>
          </ul>
        </div>

        <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Application Security</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
            <li><strong>Input Validation:</strong> Sanitize all user inputs</li>
            <li><strong>Authentication:</strong> Secure authentication mechanisms</li>
            <li><strong>Authorization:</strong> Role-based access control</li>
            <li><strong>Data Encryption:</strong> Encrypt sensitive data at rest</li>
            <li><strong>API Security:</strong> Rate limiting and API keys</li>
            <li><strong>Security Headers:</strong> HTTP security headers</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Troubleshooting & Maintenance</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Common production issues and maintenance procedures for Khadem applications.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Common Issues</h3>
          <CodeBlock
            :code="troubleshootingCode"
            language="bash"
            title="Diagnostic Commands"
          />
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Maintenance Tasks</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Log Rotation:</strong> Regular log cleanup and archiving</li>
            <li><strong>Database Maintenance:</strong> Index optimization and vacuuming</li>
            <li><strong>Cache Clearing:</strong> Redis cache maintenance</li>
            <li><strong>SSL Renewal:</strong> Certificate renewal monitoring</li>
            <li><strong>Performance Tuning:</strong> Regular performance audits</li>
            <li><strong>Security Updates:</strong> Dependency and system updates</li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Emergency Procedures</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><strong>Service Restart:</strong> <code>sudo systemctl restart khadem</code></li>
          <li><strong>Database Recovery:</strong> Use latest backup for restoration</li>
          <li><strong>Rollback Deployment:</strong> Quick reversion to stable version</li>
          <li><strong>Traffic Management:</strong> Use load balancer for maintenance</li>
          <li><strong>Incident Response:</strong> Documented escalation procedures</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Production Deployment - Khadem Dart',
  meta: [
    { name: 'description', content: 'Comprehensive production deployment documentation for Khadem Dart' }
  ]
})
import CodeBlock from '~/components/CodeBlock.vue'

const automatedProductionCode = `# Generate complete production setup
dart run khadem build --production

# Or specify components
dart run khadem build --production --services=nginx,ssl,systemd

# Generate for specific environment
dart run khadem build --production --env=production`

const envConfigCode = `# Application Configuration
APP_NAME="Khadem App"
APP_ENV=production
APP_KEY=base64:your-32-character-secret-key-here
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database Configuration
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=khadem_prod
DB_USERNAME=khadem_user
DB_PASSWORD=secure_password_here

# Redis Configuration
REDIS_HOST=localhost
REDIS_PASSWORD=null
REDIS_PORT=6379
REDIS_DB=0

# Cache Configuration
CACHE_DRIVER=redis
CACHE_PREFIX=khadem_cache

# Session Configuration
SESSION_DRIVER=redis
SESSION_LIFETIME=120
SESSION_ENCRYPT=false

# Queue Configuration
QUEUE_CONNECTION=redis
QUEUE_FAILED_DRIVER=database-uuids

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="\${APP_NAME}"

# File Storage
FILESYSTEM_DISK=local
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=your-bucket-name

# Logging
LOG_CHANNEL=daily
LOG_LEVEL=error

# Security
SANCTUM_STATEFUL_DOMAINS=yourdomain.com
CORS_ALLOWED_ORIGINS=https://yourdomain.com`

const systemdCode = `[Unit]
Description=Khadem Application
After=network.target postgresql.service redis-server.service

[Service]
Type=simple
User=khadem
WorkingDirectory=/var/www/khadem
ExecStart=/var/www/khadem/bin/server
Restart=always
RestartSec=5
Environment=APP_ENV=production

[Install]
WantedBy=multi-user.target`

const serverSetupCode = `# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y curl wget gnupg2 software-properties-common

# Install Dart SDK
sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt update
sudo apt install dart -y

# Verify Dart installation
dart --version

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
CREATE DATABASE khadem_prod;
CREATE USER khadem_user WITH PASSWORD 'secure_password_here';
GRANT ALL PRIVILEGES ON DATABASE khadem_prod TO khadem_user;
\\q

# Install Redis
sudo apt install redis-server -y
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Install Nginx
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx`

const deploymentCode = `#!/bin/bash

# Production deployment script for Khadem
set -e

echo "🚀 Starting Khadem production deployment..."

# Variables
APP_DIR="/var/www/khadem"
DOMAIN="yourdomain.com"
USER="khadem"

# Create application user
sudo useradd -m -s /bin/bash $USER || true

# Create application directory
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR

# Clone or update application
if [ ! -d "$APP_DIR/.git" ]; then
    sudo -u $USER git clone https://github.com/yourusername/khadem-app.git $APP_DIR
else
    cd $APP_DIR
    sudo -u $USER git pull origin main
fi

# Install dependencies
cd $APP_DIR
sudo -u $USER dart pub get

# Copy environment file
sudo -u $USER cp .env.example .env.production
# Edit .env.production with production values

# Run database migrations
sudo -u $USER dart run khadem migrate

# Build optimized executable
sudo -u $USER dart compile exe bin/server.dart -o bin/server

# Set proper permissions
sudo chown -R $USER:$USER $APP_DIR
sudo chmod -R 755 $APP_DIR
sudo chmod 600 $APP_DIR/.env.production

# Create systemd service
sudo tee /etc/systemd/system/khadem.service > /dev/null <<EOF
[Unit]
Description&#61;Khadem Application
After&#61;network.target postgresql.service redis-server.service

&#91;Service&#93;
Type&#61;simple
User&#61;$USER
WorkingDirectory&#61;$APP_DIR
ExecStart&#61;$APP_DIR/bin/server
Restart&#61;always
RestartSec&#61;5
Environment&#61;APP_ENV&#61;production

&#91;Install&#93;
WantedBy&#61;multi-user.target
EOF

# Reload systemd and start service
sudo systemctl daemon-reload
sudo systemctl enable khadem
sudo systemctl start khadem

# Configure Nginx
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Root directory
    root $APP_DIR/public;
    index index.html;

    # API routes
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Timeout settings
        proxy_connect_timeout 30s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }

    # Static files with caching
    location ~* \\\\.(.js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Fallback to index.html for SPA
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Configure firewall
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Set up SSL certificate with Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN

# Set up log rotation
sudo tee /etc/logrotate.d/khadem > /dev/null <<EOF
$APP_DIR/storage/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 $USER $USER
    postrotate
        systemctl reload khadem
    endscript
}
EOF

echo "✅ Deployment completed successfully!"
echo "🌐 Your application is now running at https://$DOMAIN"`

const sslCode = `# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test certificate renewal
sudo certbot renew --dry-run

# Set up automatic renewal (runs twice daily)
sudo crontab -e
# Add this line:
# 0 */12 * * * /usr/bin/certbot renew --quiet`

const serviceManagementCode = `# Start the application
sudo systemctl start khadem

# Stop the application
sudo systemctl stop khadem

# Restart the application
sudo systemctl restart khadem

# Check status
sudo systemctl status khadem

# View logs
sudo journalctl -u khadem -f

# Enable auto-start on boot
sudo systemctl enable khadem

# Disable auto-start
sudo systemctl disable khadem`

const backupCode = `#!/bin/bash

# Database backup script
BACKUP_DIR="/var/backups/khadem"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="khadem_prod"
DB_USER="khadem_user"

# Create backup directory
mkdir -p $BACKUP_DIR

# Create database backup
pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/$&#123;DB_NAME&#125;_$&#123;DATE&#125;.sql

# Compress backup
gzip $BACKUP_DIR/$&#123;DB_NAME&#125;_$&#123;DATE&#125;.sql

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

# Optional: Upload to cloud storage
# aws s3 cp $BACKUP_DIR/$&#123;DB_NAME&#125;_$&#123;DATE&#125;.sql.gz s3://your-backup-bucket/

echo "✅ Database backup completed: $&#123;DB_NAME&#125;_$&#123;DATE&#125;.sql.gz"`

const monitoringCode = `# Install Prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.40.0/prometheus-2.40.0.linux-amd64.tar.gz
tar xvf prometheus-2.40.0.linux-amd64.tar.gz
sudo mv prometheus-2.40.0.linux-amd64 /opt/prometheus

# Create Prometheus service
sudo tee /etc/systemd/system/prometheus.service > /dev/null <<EOF
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

&#91;Service&#93;
User&#61;prometheus
Group&#61;prometheus
Type&#61;simple
ExecStart&#61;/opt/prometheus/prometheus --config.file&#61;/opt/prometheus/prometheus.yml --storage.tsdb.path&#61;/opt/prometheus/data

&#91;Install&#93;
WantedBy=multi-user.target
EOF

# Install Grafana
sudo apt install -y apt-transport-https
sudo apt install -y software-properties-common wget
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sudo apt update
sudo apt install grafana -y

# Start services
sudo systemctl start prometheus
sudo systemctl start grafana
sudo systemctl enable prometheus
sudo systemctl enable grafana`

const troubleshootingCode = `# Check application logs
sudo journalctl -u khadem -f

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test database connection
psql -U khadem_user -d khadem_prod -h localhost

# Check Redis connection
redis-cli ping

# Restart services
sudo systemctl restart khadem
sudo systemctl restart nginx
sudo systemctl restart postgresql
sudo systemctl restart redis-server

# Check disk space
df -h

# Check memory usage
free -h`
</script>
