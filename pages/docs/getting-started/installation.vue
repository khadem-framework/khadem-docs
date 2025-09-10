<template>
  <div>
    <h1>Installation Guide</h1>

    <p class="mb-6 text-lg">
      Get started with <strong>Khadem</strong> — the Laravel-inspired, Dart-powered backend framework. This comprehensive guide will walk you through installing Khadem and setting up your development environment.
    </p>

    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
      <div class="flex items-center">
        <div class="text-2xl mr-3">⚡</div>
        <div>
          <h3 class="font-semibold text-blue-800 dark:text-blue-200">Quick Start</h3>
          <p class="text-blue-700 dark:text-blue-300 text-sm">
            Already have Dart installed? Skip to <a href="#khadem-installation" class="underline">Khadem Installation</a>
          </p>
        </div>
      </div>
    </div>

    <h2 id="system-requirements">System Requirements</h2>
    <p class="mb-4">Khadem requires the following minimum system specifications:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center">
          <span class="text-green-600 mr-2">✅</span> Required
        </h3>
        <ul class="space-y-2 text-sm">
          <li><strong>Dart SDK:</strong> 3.0.0 or higher</li>
          <li><strong>Operating System:</strong> Windows, macOS, Linux</li>
          <li><strong>RAM:</strong> 512MB minimum, 1GB recommended</li>
          <li><strong>Storage:</strong> 100MB free space</li>
        </ul>
      </div>

      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <h3 class="font-semibold mb-3 flex items-center">
          <span class="text-blue-600 mr-2">🔧</span> Optional
        </h3>
        <ul class="space-y-2 text-sm">
          <li><strong>Docker:</strong> For containerized deployments</li>
          <li><strong>MySQL/PostgreSQL:</strong> For database features</li>
          <li><strong>Redis:</strong> For caching and queues</li>
          <li><strong>Git:</strong> For version control</li>
        </ul>
      </div>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <p class="mb-4">Before installing Khadem, ensure you have the following installed:</p>

    <h3>Dart SDK Installation</h3>
    <p class="mb-4">
      Khadem requires Dart SDK 3.0.0 or higher. Download and install Dart from the official website:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <a href="https://dart.dev/get-dart#windows" target="_blank" rel="noopener noreferrer"
         class="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div class="text-center">
          <div class="text-2xl mb-2">🪟</div>
          <div class="font-semibold">Windows</div>
        </div>
      </a>
      <a href="https://dart.dev/get-dart#macos" target="_blank" rel="noopener noreferrer"
         class="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div class="text-center">
          <div class="text-2xl mb-2">🍎</div>
          <div class="font-semibold">macOS</div>
        </div>
      </a>
      <a href="https://dart.dev/get-dart#linux" target="_blank" rel="noopener noreferrer"
         class="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div class="text-center">
          <div class="text-2xl mb-2">🐧</div>
          <div class="font-semibold">Linux</div>
        </div>
      </a>
    </div>

    <h3>Verify Dart Installation</h3>
    <p class="mb-4">After installation, verify Dart is working correctly:</p>
    <CodeBlock :code="verifyDartCode" language="bash" />

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
      <p class="text-green-800 dark:text-green-200 text-sm">
        <strong>Expected output:</strong> <code>dart --version</code> should show something like "Dart SDK version: 3.1.0 (stable)"
      </p>
    </div>

    <h2 id="khadem-installation">Installing Khadem</h2>
    <p class="mb-4">Install Khadem globally using Dart's package manager:</p>

    <CodeBlock :code="installKhademCode" language="bash" />

    <h3>Verify Khadem Installation</h3>
    <p class="mb-4">Confirm Khadem is installed and accessible:</p>
    <CodeBlock :code="verifyKhademCode" language="bash" />

    <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
      <p class="text-green-800 dark:text-green-200 text-sm">
        <strong>Expected output:</strong> Should display Khadem version information
      </p>
    </div>

    <h2 id="environment-setup">Environment Setup</h2>

    <h3>Add Khadem to PATH</h3>
    <p class="mb-4">Ensure Khadem's executable is in your system PATH:</p>

    <div class="space-y-4 mb-6">
      <div>
        <h4 class="font-semibold mb-2">Windows (PowerShell)</h4>
        <CodeBlock :code="pathSetupWindowsCode" language="powershell" />
      </div>

      <div>
        <h4 class="font-semibold mb-2">macOS/Linux (Bash/Zsh)</h4>
        <CodeBlock :code="pathSetupUnixCode" language="bash" />
      </div>
    </div>

    <h3>Verify PATH Setup</h3>
    <p class="mb-4">Test that Khadem is accessible from any directory:</p>
    <CodeBlock :code="verifyPathCode" language="bash" />

    <h2 id="ide-setup">Development Environment</h2>
    <p class="mb-4">Set up your IDE for the best Khadem development experience:</p>

    <h3>Visual Studio Code (Recommended)</h3>
    <ol class="list-decimal pl-6 mb-6 space-y-2">
      <li>
        Download and install <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">Visual Studio Code</a>
      </li>
      <li>
        Install the <a href="https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">Dart Extension</a>
      </li>
      <li>
        Install the <a href="https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">Flutter Extension</a> (optional, for UI development)
      </li>
      <li>Restart VS Code to activate all Dart tools</li>
    </ol>

    <h3>Other IDEs</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>IntelliJ IDEA:</strong> Built-in Dart support available</li>
      <li><strong>Android Studio:</strong> Full Dart and Flutter support</li>
      <li><strong>Vim/Neovim:</strong> Use Dart LSP with appropriate plugins</li>
    </ul>

    <h2 id="updating">Updating Khadem</h2>
    <p class="mb-4">Keep Khadem up-to-date with the latest features and bug fixes:</p>

    <CodeBlock :code="updateKhademCode" language="bash" />

    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
      <p class="text-blue-800 dark:text-blue-200 text-sm">
        <strong>Tip:</strong> Run this command regularly to stay updated with the latest Khadem version
      </p>
    </div>

    <h2 id="troubleshooting">Troubleshooting</h2>

    <div class="space-y-4 mb-8">
      <div class="border border-red-200 dark:border-red-800 rounded-lg p-4">
        <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Command Not Found</h3>
        <p class="text-red-700 dark:text-red-300 text-sm mb-2">
          If you get "khadem: command not found":
        </p>
        <ul class="text-red-700 dark:text-red-300 text-sm space-y-1 ml-4">
          <li>• Ensure Dart's bin directory is in your PATH</li>
          <li>• Try restarting your terminal/command prompt</li>
          <li>• On Windows, you may need to restart your computer</li>
        </ul>
      </div>

      <div class="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h3 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Permission Issues</h3>
        <p class="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
          On macOS/Linux, if you get permission errors:
        </p>
        <CodeBlock :code="permissionFixCode" language="bash" />
      </div>

      <div class="border border-orange-200 dark:border-orange-800 rounded-lg p-4">
        <h3 class="font-semibold text-orange-800 dark:text-orange-200 mb-2">🔄 Version Conflicts</h3>
        <p class="text-orange-700 dark:text-orange-300 text-sm mb-2">
          If you encounter version conflicts:
        </p>
        <CodeBlock :code="versionFixCode" language="bash" />
      </div>
    </div>

    <h2 id="post-installation">Post-Installation Checklist</h2>
    <div class="space-y-3 mb-8">
      <div class="flex items-center">
        <input type="checkbox" class="mr-3" disabled>
        <span>Dart SDK 3.0.0+ installed</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="mr-3" disabled>
        <span>Khadem CLI installed globally</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="mr-3" disabled>
        <span>Khadem accessible via command line</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="mr-3" disabled>
        <span>IDE configured with Dart support</span>
      </div>
    </div>

    <h2 id="next-steps">Next Steps</h2>
    <p class="mb-4">Khadem is now installed and ready! Continue with these guides:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <NuxtLink to="/docs/creating-project" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">🚀</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Create Your First Project</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Learn how to scaffold your first Khadem application</p>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/docs/configuration" class="block p-4 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        <div class="flex items-center">
          <div class="text-2xl mr-3">⚙️</div>
          <div>
            <h3 class="font-semibold text-primary-800 dark:text-primary-200">Configuration</h3>
            <p class="text-sm text-primary-600 dark:text-primary-300">Set up environment variables and app configuration</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h3 class="font-semibold mb-2">Need Help?</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Having trouble with installation? Check out our community resources:
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="https://github.com/khedrmahmoud/khadem/issues" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">
          Report an Issue →
        </a>
        <a href="https://github.com/khedrmahmoud/khadem/discussions" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">
          Community Discussions →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Installation Guide - Khadem Docs'
})

const verifyDartCode = `# Verify Dart installation
dart --version

# Expected output: Dart SDK version: 3.1.0 (stable)`

const installKhademCode = `# Install Khadem globally
dart pub global activate khadem

# This will download and install Khadem CLI globally`

const verifyKhademCode = `# Verify Khadem installation
khadem --version

# Should display: Khadem CLI version x.x.x`

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