<template>
  <div class="space-y-8">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Docker Deployment</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Comprehensive Docker support for Khadem applications with automated deployment, multi-service orchestration, and production-ready configurations.
      </p>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Automated Docker Setup</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem provides automated Docker setup through the build command, generating production-ready Dockerfiles and docker-compose configurations.
      </p>

      <CodeBlock
        :code="automatedDockerCode"
        language="bash"
        title="Generate Docker Setup Automatically"
      />

      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Automated Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
          <li>Multi-stage Dockerfile generation</li>
          <li>Docker Compose with multiple database options</li>
          <li>Environment configuration templates</li>
          <li>Nginx reverse proxy configuration</li>
          <li>SSL/TLS setup templates</li>
          <li>Health checks and monitoring</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Generated Dockerfile</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem automatically generates optimized Dockerfiles with multi-stage builds, security hardening, and production optimizations.
      </p>

      <CodeBlock
        :code="generatedDockerfileCode"
        language="dockerfile"
        title="Auto-generated Production Dockerfile"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">Production Optimizations</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li>AOT compilation for faster startup and lower memory usage</li>
          <li>Non-root user execution for security</li>
          <li>Minimal runtime image (Debian slim)</li>
          <li>Health checks for container monitoring</li>
          <li>Proper signal handling and graceful shutdown</li>
          <li>Multi-stage build for smaller final images</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Multi-Service Docker Compose</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem generates comprehensive docker-compose configurations with support for multiple databases, caching, and reverse proxy services.
      </p>

      <CodeBlock
        :code="dockerComposeCode"
        language="yaml"
        title="Generated docker-compose.yml with Services"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Supported Services</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>MySQL:</strong> MySQL 8.0 with custom configuration</li>
            <li><strong>PostgreSQL:</strong> PostgreSQL 15 with optimized settings</li>
            <li><strong>MongoDB:</strong> MongoDB 7 with authentication</li>
            <li><strong>Redis:</strong> Redis 7 with persistence</li>
            <li><strong>Nginx:</strong> Reverse proxy with SSL support</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Service Configuration</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Automatic environment variable mapping</li>
            <li>Proper service dependencies</li>
            <li>Persistent data volumes</li>
            <li>Health checks and restart policies</li>
            <li>Network isolation and security</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Development Environment</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Streamlined development setup with hot reload, debugging, and service orchestration for Khadem applications.
      </p>

      <CodeBlock
        :code="devDockerComposeCode"
        language="yaml"
        title="Development docker-compose.yml"
      />

      <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-200">Development Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
          <li><strong>Hot Reload:</strong> Automatic code reloading during development</li>
          <li><strong>VM Service:</strong> Integrated debugging with Dart DevTools</li>
          <li><strong>Volume Mounting:</strong> Live code synchronization</li>
          <li><strong>Service Isolation:</strong> Separate databases for development</li>
          <li><strong>Port Mapping:</strong> Easy access to all services</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Environment Configuration</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem automatically generates comprehensive environment configuration files for different deployment scenarios.
      </p>

      <CodeBlock
        :code="envConfigCode"
        language="bash"
        title="Generated .env Configuration"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Database Configuration</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>MySQL:</strong> Full MySQL 8.0 support</li>
            <li><strong>PostgreSQL:</strong> PostgreSQL with advanced features</li>
            <li><strong>MongoDB:</strong> NoSQL database integration</li>
            <li><strong>SQLite:</strong> File-based database for development</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Service Integration</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Redis:</strong> Caching and session storage</li>
            <li><strong>Queue:</strong> Background job processing</li>
            <li><strong>Mail:</strong> Email service configuration</li>
            <li><strong>Storage:</strong> File storage drivers</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Nginx Reverse Proxy</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Khadem automatically generates optimized Nginx configurations for production deployments with SSL, caching, and security headers.
      </p>

      <CodeBlock
        :code="nginxConfigCode"
        language="nginx"
        title="Auto-generated nginx.conf"
      />

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-lg font-medium text-yellow-800 dark:text-yellow-200">Nginx Features</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
          <li><strong>Load Balancing:</strong> Distribute traffic across multiple app instances</li>
          <li><strong>SSL Termination:</strong> Handle HTTPS encryption at the proxy level</li>
          <li><strong>Static File Serving:</strong> Serve assets directly from Nginx for better performance</li>
          <li><strong>Rate Limiting:</strong> Protect against abuse and DDoS attacks</li>
          <li><strong>Security Headers:</strong> Automatic security header injection</li>
          <li><strong>Gzip Compression:</strong> Compress responses for faster delivery</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Khadem Docker Commands</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Use Khadem's CLI to manage Docker deployments with automated configuration and deployment workflows.
      </p>

      <CodeBlock
        :code="khademDockerCommandsCode"
        language="bash"
        title="Khadem Docker Workflow"
      />

      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-200">CLI Docker Integration</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-indigo-700 dark:text-indigo-300">
          <li><strong>Automated Setup:</strong> <code>khadem build --docker</code> generates everything</li>
          <li><strong>Service Selection:</strong> Choose specific services to include</li>
          <li><strong>Environment Generation:</strong> Auto-configured environment files</li>
          <li><strong>Production Ready:</strong> Optimized for performance and security</li>
          <li><strong>Multi-Platform:</strong> Cross-platform deployment support</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Production Deployment</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Streamlined production deployment with automated Docker generation, health checks, and zero-downtime updates.
      </p>

      <CodeBlock
        :code="productionDeploymentCode"
        language="bash"
        title="Automated Production Deployment"
      />

      <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 class="text-lg font-medium text-red-800 dark:text-red-200">Production Best Practices</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-red-700 dark:text-red-300">
          <li><strong>Blue-Green Deployment:</strong> Zero-downtime updates with service switching</li>
          <li><strong>Health Checks:</strong> Automated monitoring and recovery</li>
          <li><strong>Resource Limits:</strong> Memory and CPU constraints</li>
          <li><strong>Security Scanning:</strong> Container vulnerability assessment</li>
          <li><strong>Backup Strategy:</strong> Automated database and file backups</li>
          <li><strong>Monitoring Integration:</strong> Logs, metrics, and alerting</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">SSL/TLS Configuration</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Secure your Khadem application with automated SSL/TLS configuration and Let's Encrypt integration.
      </p>

      <CodeBlock
        :code="sslConfigCode"
        language="nginx"
        title="SSL-enabled nginx.conf"
      />

      <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 class="text-lg font-medium text-green-800 dark:text-green-200">SSL Best Practices</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-green-700 dark:text-green-300">
          <li><strong>Let's Encrypt:</strong> Automated SSL certificate generation</li>
          <li><strong>HSTS Headers:</strong> Force HTTPS connections</li>
          <li><strong>Modern Ciphers:</strong> TLS 1.2+ with secure cipher suites</li>
          <li><strong>Certificate Renewal:</strong> Automatic renewal before expiration</li>
          <li><strong>HTTP Redirect:</strong> Automatic HTTP to HTTPS redirection</li>
        </ul>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Monitoring and Logging</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive monitoring and logging setup with Prometheus, Grafana, and structured logging for Khadem applications.
      </p>

      <CodeBlock
        :code="monitoringConfigCode"
        language="yaml"
        title="docker-compose.yml with Monitoring Stack"
      />

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Monitoring Stack</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Prometheus:</strong> Metrics collection and alerting</li>
            <li><strong>Grafana:</strong> Dashboard visualization</li>
            <li><strong>cAdvisor:</strong> Container resource monitoring</li>
            <li><strong>Node Exporter:</strong> System metrics</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="font-medium">Logging Features</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Structured Logging:</strong> JSON format with context</li>
            <li><strong>Log Rotation:</strong> Automatic log file management</li>
            <li><strong>Centralized Logging:</strong> ELK stack integration</li>
            <li><strong>Error Tracking:</strong> Sentry integration</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold border-b pb-2">Best Practices and Troubleshooting</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Essential best practices and common troubleshooting scenarios for Docker deployments with Khadem.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 class="text-lg font-medium text-blue-800 dark:text-blue-200">Docker Best Practices</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
            <li><strong>Multi-stage Builds:</strong> Reduce image size and attack surface</li>
            <li><strong>Non-root User:</strong> Run containers as non-privileged user</li>
            <li><strong>Environment Variables:</strong> Use env vars for configuration</li>
            <li><strong>Health Checks:</strong> Implement proper health monitoring</li>
            <li><strong>Resource Limits:</strong> Set memory and CPU constraints</li>
            <li><strong>Security Scanning:</strong> Scan images for vulnerabilities</li>
            <li><strong>Version Pinning:</strong> Pin base image versions</li>
            <li><strong>Minimal Images:</strong> Use slim/alpine base images</li>
          </ul>
        </div>

        <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 class="text-lg font-medium text-orange-800 dark:text-orange-200">Troubleshooting</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
            <li><strong>Container Won't Start:</strong> Check logs with <code>docker-compose logs</code></li>
            <li><strong>Port Conflicts:</strong> Verify ports aren't already in use</li>
            <li><strong>Database Connection:</strong> Check service dependencies and health</li>
            <li><strong>Memory Issues:</strong> Monitor container resource usage</li>
            <li><strong>Permission Errors:</strong> Ensure proper file permissions</li>
            <li><strong>Network Issues:</strong> Verify Docker network configuration</li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <h3 class="font-medium mb-2">Common Commands</h3>
        <CodeBlock
          :code="troubleshootingCommandsCode"
          language="bash"
          title="Docker Troubleshooting Commands"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({
  title: 'Docker Deployment',
  meta: [
    { name: 'description', content: 'Comprehensive Docker deployment documentation for Khadem Dart' }
  ]
})

const automatedDockerCode = `# Generate complete Docker setup
dart run khadem build --docker

# Or specify services
dart run khadem build --docker --services=mysql,redis,nginx

# Generate for production
dart run khadem build --docker --env=production`

const generatedDockerfileCode = `# Auto-generated multi-stage Dockerfile
FROM dart:3.0-sdk AS build

WORKDIR /app
COPY pubspec.* ./
RUN dart pub get

COPY . .
RUN dart pub get --offline
RUN dart compile exe bin/server.dart -o bin/server

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=build /app/bin/server /app/bin/server
COPY --from=build /app/config /app/config
COPY --from=build /app/public /app/public

RUN useradd --user-group --create-home --shell /bin/bash app
RUN chown -R app:app /app
USER app

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["/app/bin/server"]`

const dockerComposeCode = `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - APP_ENV=production
      - DB_CONNECTION=mysql
      - DB_HOST=mysql
      - DB_PORT=3306
      - DB_DATABASE=khadem
      - DB_USERNAME=khadem
      - DB_PASSWORD=secret
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./storage:/app/storage
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: khadem
      MYSQL_USER: khadem
      MYSQL_PASSWORD: secret
    volumes:
      - mysql_data:/var/lib/mysql
      - ./docker/mysql/my.cnf:/etc/mysql/conf.d/my.cnf
    ports:
      - "3306:3306"
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./docker/nginx/ssl:/etc/nginx/ssl
      - ./storage/app/public:/var/www/html
    depends_on:
      - app
    restart: unless-stopped

volumes:
  mysql_data:
  redis_data:`

const devDockerComposeCode = `version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
      - "8181:8181"  # Dart VM service for debugging
    volumes:
      - .:/app
      - /app/.dart_tool
    environment:
      - APP_ENV=development
      - DART_VM_OPTIONS=--enable-vm-service=8181/0.0.0.0:8181
    command: dart run --enable-vm-service bin/server.dart
    depends_on:
      - mysql
      - redis

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: khadem_dev
      MYSQL_USER: khadem
      MYSQL_PASSWORD: secret
    volumes:
      - mysql_dev_data:/var/lib/mysql
    ports:
      - "3306:3306"

  redis:
    image: redis:7-alpine
    volumes:
      - redis_dev_data:/data
    ports:
      - "6379:6379"

volumes:
  mysql_dev_data:
  redis_dev_data:`

const envConfigCode = `# Production Environment Configuration
APP_NAME=KhademApp
APP_ENV=production
APP_KEY=base64:your_app_key_here
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=khadem
DB_USERNAME=khadem
DB_PASSWORD=your_secure_password

# Redis Configuration
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

# Cache Configuration
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@yourdomain.com"
MAIL_FROM_NAME="\${APP_NAME}"

# Storage Configuration
FILESYSTEM_DISK=local
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

# Logging
LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error`

const khademDockerCommandsCode = `# Generate Docker setup
dart run khadem build --docker

# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f app

# Run migrations in container
docker-compose exec app dart run khadem migrate

# Run seeders
docker-compose exec app dart run khadem db:seed

# Stop all services
docker-compose down

# Rebuild specific service
docker-compose up -d --build app

# Scale services
docker-compose up -d --scale app=3`

const nginxConfigCode = `events {
    worker_connections 1024;
}

http {
    upstream khadem_app {
        server app:3000;
    }

    server {
        listen 80;
        server_name yourdomain.com;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # Gzip compression
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        location / {
            proxy_pass http://khadem_app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # Timeout settings
            proxy_connect_timeout 30s;
            proxy_send_timeout 30s;
            proxy_read_timeout 30s;
        }

        # Static files caching
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # API rate limiting
        location /api/ {
            limit_req zone=api burst=10 nodelay;
            proxy_pass http://khadem_app;
        }
    }
}

# Rate limiting zones
limit_req_zone $binary_remote_addr zone=api:10m rate=5r/s;
limit_req_status 429;`

const sslConfigCode = `server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    # SSL configuration
    ssl_certificate /etc/ssl/certs/yourdomain.crt;
    ssl_certificate_key /etc/ssl/private/yourdomain.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    location / {
        proxy_pass http://khadem_app;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}`

const monitoringConfigCode = `version: '3.8'

services:
  app:
    # ... existing app config
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M

  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
    restart: unless-stopped

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    volumes:
      - grafana_data:/var/lib/grafana
      - ./monitoring/grafana/provisioning:/etc/grafana/provisioning
    depends_on:
      - prometheus
    restart: unless-stopped

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    ports:
      - "8080:8080"
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
      - /dev/disk/:/dev/disk:ro
    devices:
      - /dev/kmsg
    restart: unless-stopped

  node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'
    restart: unless-stopped

volumes:
  prometheus_data:
  grafana_data:`

const productionDeploymentCode = `#!/bin/bash
# Automated Production Deployment Script

set -e

echo "🚀 Starting Khadem production deployment..."

# Pull latest changes
git pull origin main

# Generate Docker setup if needed
if [ ! -f "docker-compose.yml" ]; then
    echo "📦 Generating Docker configuration..."
    dart run khadem build --docker --env=production
fi

# Build and deploy
echo "🏗️  Building and deploying services..."
docker-compose up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 30

# Run database migrations
echo "🗄️  Running database migrations..."
docker-compose exec -T app dart run khadem migrate

# Run health checks
echo "🏥 Running health checks..."
if curl -f http://localhost:3000/health; then
    echo "✅ Application health check passed!"
else
    echo "❌ Application health check failed!"
    exit 1
fi

# Verify database connection
docker-compose exec -T app dart run khadem db:check || {
    echo "❌ Database connection failed!"
    exit 1
}

# Clean up old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

echo "🎉 Production deployment completed successfully!"
echo "🌐 Application is running at: http://your-server-ip:3000"`

const troubleshootingCommandsCode = `# View all running containers
docker-compose ps

# View logs for specific service
docker-compose logs app
docker-compose logs -f mysql

# Check container resource usage
docker stats

# Inspect container configuration
docker inspect khadem_app_1

# Execute commands in running container
docker-compose exec app bash
docker-compose exec mysql mysql -u khadem -p khadem

# Check service health
docker-compose exec app curl -f http://localhost:3000/health

# Restart specific service
docker-compose restart app

# Rebuild and restart service
docker-compose up -d --build app

# Clean up unused resources
docker system prune -a
docker volume prune

# View Docker networks
docker network ls
docker network inspect khadem_default`
</script>`
