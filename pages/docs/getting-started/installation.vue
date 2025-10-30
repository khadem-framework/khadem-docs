<template>
  <div>
    <!-- Hero Section -->
    <div class="mb-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Installation Guide
      </h1>
      <p class="text-xl text-gray-400 leading-relaxed">
        Get started with <strong class="text-primary-500">Khadem</strong> in minutes. This comprehensive guide walks you through installing Khadem and setting up your development environment on any platform.
      </p>
    </div>

    <!-- Quick Navigation -->
    <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-6 mb-10">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <i class="fas fa-bolt text-blue-500 text-3xl"></i>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white mb-2">Quick Start</h3>
          <p class="text-gray-300 text-sm mb-3">
            Already have Dart installed? Jump directly to the installation steps:
          </p>
          <a href="#khadem-installation" class="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
            <i class="fas fa-arrow-right mr-2"></i>
            Skip to Khadem Installation
          </a>
        </div>
      </div>
    </div>

    <!-- System Requirements -->
    <section class="mb-12">
      <h2 id="system-requirements" class="text-3xl font-bold mb-4">
        <i class="fas fa-server text-primary-500 mr-2"></i>
        System Requirements
      </h2>
      <p class="text-gray-300 mb-6">
        Khadem requires the following minimum system specifications to run smoothly:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h3 class="font-semibold text-white mb-4 flex items-center text-lg">
            <i class="fas fa-check-circle text-green-500 mr-2"></i>
            Required
          </h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">Dart SDK:</strong> 3.0.0 or higher
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">Operating System:</strong> Windows, macOS, or Linux
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">Git:</strong> For version control
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h3 class="font-semibold text-white mb-4 flex items-center text-lg">
            <i class="fas fa-plus-circle text-blue-500 mr-2"></i>
            Optional
          </h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">Docker:</strong> For containerized deployments
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">MySQL:</strong> For database features
              </div>
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-chevron-right text-primary-500 text-xs mt-1"></i>
              <div>
                <strong class="text-white">Redis:</strong> For caching and queue management
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </section>

    <!-- Prerequisites -->
    <section class="mb-12">
      <h2 id="prerequisites" class="text-3xl font-bold mb-4">
        <i class="fas fa-list-check text-primary-500 mr-2"></i>
        Prerequisites
      </h2>
      <p class="text-gray-300 mb-6">
        Before installing Khadem, you need to have Dart SDK installed on your system.
      </p>

      <h3 class="text-2xl font-semibold text-white mb-4">
        <i class="fas fa-download text-blue-500 mr-2"></i>
        Installing Dart SDK
      </h3>
      <p class="text-gray-300 mb-6">
        Khadem requires <strong class="text-white">Dart SDK 3.0.0 or higher</strong>. Choose your platform below to download and install Dart:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a href="https://dart.dev/get-dart#windows" 
           target="_blank" 
           rel="noopener noreferrer"
           class="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 rounded-lg transition-all">
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🪟</div>
          <div class="font-semibold text-white text-lg mb-1">Windows</div>
          <div class="text-xs text-gray-400">Download for Windows</div>
        </a>
        
        <a href="https://dart.dev/get-dart#macos" 
           target="_blank" 
           rel="noopener noreferrer"
           class="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10 border border-purple-500/20 hover:border-purple-500/40 rounded-lg transition-all">
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🍎</div>
          <div class="font-semibold text-white text-lg mb-1">macOS</div>
          <div class="text-xs text-gray-400">Download for macOS</div>
        </a>
        
        <a href="https://dart.dev/get-dart#linux" 
           target="_blank" 
           rel="noopener noreferrer"
           class="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500/20 hover:to-green-600/10 border border-green-500/20 hover:border-green-500/40 rounded-lg transition-all">
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">🐧</div>
          <div class="font-semibold text-white text-lg mb-1">Linux</div>
          <div class="text-xs text-gray-400">Download for Linux</div>
        </a>
      </div>

      <h3 class="text-xl font-semibold text-white mb-4">
        <i class="fas fa-check-double text-green-500 mr-2"></i>
        Verify Dart Installation
      </h3>
      <p class="text-gray-300 mb-4">
        After installing Dart, verify it's working correctly by checking the version:
      </p>
      <CodeBlock :code="verifyDartCode" language="bash" />

      <div class="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <div class="flex items-start gap-3">
          <i class="fas fa-lightbulb text-green-500 text-xl mt-0.5"></i>
          <div>
            <p class="text-sm text-gray-300">
              <strong class="text-white">Expected output:</strong> You should see something like 
              <code class="px-2 py-0.5 bg-gray-800 rounded text-xs text-green-400">Dart SDK version: 3.1.0 (stable)</code>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Khadem Installation -->
    <section class="mb-12">
      <h2 id="khadem-installation" class="text-3xl font-bold mb-4">
        <i class="fas fa-download text-primary-500 mr-2"></i>
        Installing Khadem
      </h2>
      <p class="text-gray-300 mb-6">
        Now that Dart is installed, let's install the Khadem CLI globally using Dart's package manager:
      </p>

      <CodeBlock :code="installKhademCode" language="bash" />

      <div class="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <div class="flex items-start gap-3">
          <i class="fas fa-info-circle text-blue-400 text-xl mt-0.5"></i>
          <div>
            <p class="text-sm text-gray-300">
              This command downloads and installs the Khadem CLI tool globally, making it accessible from anywhere in your terminal.
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-semibold text-white mb-4 mt-8">
        <i class="fas fa-check-circle text-green-500 mr-2"></i>
        Verify Installation
      </h3>
      <p class="text-gray-300 mb-4">
        Confirm that Khadem is installed correctly and accessible from your command line:
      </p>
      <CodeBlock :code="verifyKhademCode" language="bash" />

      <div class="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <div class="flex items-start gap-3">
          <i class="fas fa-circle-check text-green-500 text-xl mt-0.5"></i>
          <div>
            <p class="text-sm text-gray-300">
              <strong class="text-white">Success!</strong> If you see the Khadem version information, the installation was successful.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Updating Khadem -->
    <section class="mb-12">
      <h2 id="updating" class="text-3xl font-bold mb-4">
        <i class="fas fa-sync-alt text-primary-500 mr-2"></i>
        Updating Khadem
      </h2>
      <p class="text-gray-300 mb-6">
        Keep Khadem up-to-date to get the latest features, improvements, and bug fixes:
      </p>

      <CodeBlock :code="updateKhademCode" language="bash" />

      <div class="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
        <div class="flex items-start gap-3">
          <i class="fas fa-star text-purple-400 text-xl mt-0.5"></i>
          <div>
            <p class="text-sm text-gray-300">
              <strong class="text-white">Pro Tip:</strong> Run this command regularly to stay updated with the latest Khadem features and security patches.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="mb-12">
      <h2 id="troubleshooting" class="text-3xl font-bold mb-4">
        <i class="fas fa-wrench text-primary-500 mr-2"></i>
        Troubleshooting
      </h2>
      <p class="text-gray-300 mb-6">
        Having issues with installation? Here are solutions to common problems:
      </p>

      <div class="space-y-4">
        <div class="bg-gray-800/50 border border-orange-500/20 rounded-lg p-5">
          <h3 class="font-semibold text-white mb-3 flex items-center text-lg">
            <i class="fas fa-exclamation-triangle text-orange-500 mr-2"></i>
            Version Conflicts
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            If you encounter version conflicts or Khadem isn't updating properly, try reinstalling:
          </p>
          <CodeBlock :code="versionFixCode" language="bash" />
        </div>

        <div class="bg-gray-800/50 border border-red-500/20 rounded-lg p-5">
          <h3 class="font-semibold text-white mb-3 flex items-center text-lg">
            <i class="fas fa-ban text-red-500 mr-2"></i>
            Command Not Found
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            If you see "khadem: command not found", you need to add Dart's pub cache to your PATH:
          </p>
          <div class="mb-4">
            <p class="text-sm text-gray-400 mb-2"><strong class="text-white">Windows:</strong></p>
            <CodeBlock :code="pathSetupWindowsCode" language="bash" />
          </div>
          <div>
            <p class="text-sm text-gray-400 mb-2"><strong class="text-white">macOS/Linux:</strong></p>
            <CodeBlock :code="pathSetupUnixCode" language="bash" />
          </div>
        </div>

        <div class="bg-gray-800/50 border border-yellow-500/20 rounded-lg p-5">
          <h3 class="font-semibold text-white mb-3 flex items-center text-lg">
            <i class="fas fa-lock text-yellow-500 mr-2"></i>
            Permission Issues (macOS/Linux)
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            If you encounter permission errors during installation:
          </p>
          <CodeBlock :code="permissionFixCode" language="bash" />
        </div>
      </div>
    </section>

    <!-- Post-Installation Checklist -->
    <section class="mb-12">
      <h2 id="post-installation" class="text-3xl font-bold mb-4">
        <i class="fas fa-clipboard-check text-primary-500 mr-2"></i>
        Post-Installation Checklist
      </h2>
      <p class="text-gray-300 mb-6">
        Make sure everything is set up correctly before moving forward:
      </p>
      
      <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-square-check text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Dart SDK 3.0.0+ installed</p>
              <p class="text-sm text-gray-400">Verify with <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">dart --version</code></p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-square-check text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Khadem CLI installed globally</p>
              <p class="text-sm text-gray-400">Check with <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">khadem --version</code></p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-square-check text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">Khadem accessible from command line</p>
              <p class="text-sm text-gray-400">Run <code class="text-xs bg-gray-900 px-1.5 py-0.5 rounded">khadem --help</code> to see available commands</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <i class="fas fa-square-check text-green-500 text-xl mt-0.5"></i>
            <div>
              <p class="text-white font-medium">IDE configured with Dart support</p>
              <p class="text-sm text-gray-400">Install Dart extension for VS Code, IntelliJ, or your preferred IDE</p>
            </div>
          </div>
        </div>
      </div>
    </section>

 

    <!-- Help Section -->
    <div class="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-lg p-6">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0">
          <i class="fas fa-life-ring text-primary-500 text-3xl"></i>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white mb-2">Need Help?</h3>
          <p class="text-gray-300 mb-4">
            Having trouble with installation? Our community is here to help!
          </p>
          <div class="flex flex-wrap gap-3">
            <a 
              href="https://github.com/khedrmahmoud/khadem/issues" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
            >
              <i class="fab fa-github mr-2"></i>
              Report an Issue
            </a>
            <a 
              href="https://github.com/khedrmahmoud/khadem/discussions" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors text-sm font-medium"
            >
              <i class="fas fa-comments mr-2"></i>
              Community Discussions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Installation Guide - Khadem Docs',
  meta: [
    {
      name: 'description',
      content: 'Complete installation guide for Khadem - Learn how to install the Dart SDK, set up Khadem CLI, and configure your development environment on Windows, macOS, or Linux.'
    }
  ]
})

const verifyDartCode = `# Verify Dart installation
dart --version
`

const installKhademCode = `# Install Khadem globally
dart pub global activate khadem

# This will download and install Khadem CLI globally`

const verifyKhademCode = `# Verify Khadem installation
khadem --version
`

const pathSetupWindowsCode = `# Add to PowerShell profile (run as Administrator)
$env:Path += ";$env:USERPROFILE\\.pub-cache\\bin"

# Or add permanently to environment variables:
# Control Panel > System > Advanced System Settings > Environment Variables
# Add to PATH: %USERPROFILE%\\.pub-cache\\bin`

const pathSetupUnixCode = `# Add to your shell profile (.bashrc, .zshrc, etc.)
echo 'export PATH="$PATH:$HOME/.pub-cache/bin"' >> ~/.bashrc

# Reload your shell configuration
source ~/.bashrc

# For Zsh users
echo 'export PATH="$PATH:$HOME/.pub-cache/bin"' >> ~/.zshrc
source ~/.zshrc`

const verifyPathCode = `# Test Khadem from any directory
khadem --help

# Should show Khadem CLI help information`

const updateKhademCode = `# Update to the latest version
dart pub global activate khadem

# Force update if needed
dart pub global activate khadem --overwrite`

const permissionFixCode = `# Fix permission issues on macOS/Linux
sudo chown -R $(whoami) ~/.pub-cache
chmod +x ~/.pub-cache/bin/khadem`

const versionFixCode = `# Uninstall and reinstall Khadem
dart pub global deactivate khadem
dart pub global activate khadem`
</script>