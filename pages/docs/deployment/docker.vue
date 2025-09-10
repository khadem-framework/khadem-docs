<template>
  <div>
    <h1>Docker</h1>
    <p>Khadem provides comprehensive Docker support for easy deployment, scaling, and development workflows.</p>

    <h2>Overview</h2>
    <p>Docker containers allow you to package your Khadem application with all its dependencies, making it easy to deploy consistently across different environments.</p>

    <h2>Dockerfile</h2>
    <CodeBlock language="dockerfile" title="Basic Dockerfile">
# Use official Dart image
FROM dart:3.0-sdk

# Set working directory
WORKDIR /app

# Copy pubspec files
COPY pubspec.* ./

# Get dependencies
RUN dart pub get

# Copy source code
COPY . .

# Build the application
RUN dart compile exe bin/server.dart -o bin/server

# Expose port
EXPOSE 3000

# Run the application
CMD ["./bin/server"]
    </CodeBlock>

    <h2>Multi-stage Dockerfile</h2>
    <CodeBlock language="dockerfile" title="Optimized Multi-stage Dockerfile">
# Build stage
FROM dart:3.0-sdk AS build

WORKDIR /app

# Copy pubspec files
COPY pubspec.* ./
RUN dart pub get

# Copy source code
COPY . .

# Build optimized executable
RUN dart compile exe bin/server.dart -o bin/server

# Runtime stage
FROM debian:bookworm-slim

# Install runtime dependencies
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd --create-home --shell /bin/bash khadem

# Set working directory
WORKDIR /home/khadem

# Copy built executable from build stage
COPY --from=build /app/bin/server /home/khadem/server

# Change ownership
RUN chown khadem:khadem server

# Switch to non-root user
USER khadem

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Run the application
CMD ["./server"]
    </CodeBlock>

    <h2>Docker Compose</h2>
    <CodeBlock language="yaml" title="docker-compose.yml">
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - APP_ENV=production
      - DB_HOST=db
      - REDIS_HOST=redis
    depends_on:
      - db
      - redis
    volumes:
      - ./storage:/app/storage
    restart: unless-stopped

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=khadem
      - POSTGRES_USER=khadem
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/ssl/certs:ro
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
    </CodeBlock>

    <h2>Development Setup</h2>
    <CodeBlock language="yaml" title="docker-compose.dev.yml">
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/.dart_tool
    environment:
      - APP_ENV=development
      - DART_VM_OPTIONS=--enable-vm-service=3001
    command: dart run --enable-vm-service bin/server.dart

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=khadem_dev
      - POSTGRES_USER=khadem
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_dev_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_dev_data:
    </CodeBlock>

    <h2>Dockerfile for Development</h2>
    <CodeBlock language="dockerfile" title="Dockerfile.dev">
FROM dart:3.0-sdk

# Install development tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy pubspec files
COPY pubspec.* ./

# Get dependencies
RUN dart pub get

# Copy source code
COPY . .

# Expose ports
EXPOSE 3000 3001

# Default command
CMD ["dart", "run", "bin/server.dart"]
    </CodeBlock>

    <h2>Environment Configuration</h2>
    <CodeBlock language="bash" title="Environment Variables">
# .env file
APP_ENV=production
APP_KEY=your-secret-key-here
APP_URL=https://yourdomain.com

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=khadem
DB_USERNAME=khadem
DB_PASSWORD=secret

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
    </CodeBlock>

    <h2>Nginx Configuration</h2>
    <CodeBlock language="nginx" title="nginx.conf">
events {
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
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
    </CodeBlock>

    <h2>Docker Commands</h2>
    <CodeBlock language="bash" title="Common Docker Commands">
# Build the application
docker build -t khadem-app .

# Run the application
docker run -p 3000:3000 khadem-app

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f app

# Execute commands in container
docker-compose exec app dart run khadem migrate

# Stop and remove containers
docker-compose down

# Rebuild and restart
docker-compose up -d --build
    </CodeBlock>

    <h2>Production Deployment</h2>
    <CodeBlock language="bash" title="Production Deployment Script">
#!/bin/bash

# Production deployment script
set -e

echo "🚀 Starting Khadem deployment..."

# Pull latest changes
git pull origin main

# Build and deploy with Docker
docker-compose -f docker-compose.yml up -d --build

# Wait for application to be ready
echo "⏳ Waiting for application to start..."
sleep 30

# Run database migrations
docker-compose exec -T app dart run khadem migrate

# Run database seeders (if needed)
# docker-compose exec -T app dart run khadem db:seed

# Health check
if curl -f http://localhost:3000/health; then
    echo "✅ Deployment successful!"
else
    echo "❌ Health check failed!"
    exit 1
fi

# Clean up old images
docker image prune -f

echo "🎉 Deployment completed successfully!"
    </CodeBlock>

    <h2>SSL/TLS Configuration</h2>
    <CodeBlock language="nginx" title="SSL Configuration">
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/ssl/certs/yourdomain.crt;
    ssl_certificate_key /etc/ssl/private/yourdomain.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

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
}
    </CodeBlock>

    <h2>Monitoring and Logging</h2>
    <CodeBlock language="yaml" title="Docker Compose with Monitoring">
version: '3.8'

services:
  app:
    # ... existing app config
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
    depends_on:
      - prometheus

volumes:
  grafana_data:
    </CodeBlock>

    <h2>Best Practices</h2>
    <ul>
      <li>Use multi-stage builds to reduce image size</li>
      <li>Run containers as non-root user for security</li>
      <li>Use environment variables for configuration</li>
      <li>Implement health checks for container monitoring</li>
      <li>Use Docker Compose for multi-container applications</li>
      <li>Implement proper logging and log rotation</li>
      <li>Use .dockerignore to exclude unnecessary files</li>
      <li>Tag images with version numbers for rollback capability</li>
    </ul>
  </div>
</template>

<script setup>
import CodeBlock from '~/components/common/CodeBlock.vue'
</script>
