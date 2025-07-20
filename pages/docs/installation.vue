<template>
  <div>
    <h1>Installation</h1>

    <p class="mb-4">
      This guide will help you install <strong>Khadem</strong> and set up your development environment quickly and reliably.
    </p>

    <h2 id="prerequisites">Prerequisites</h2>
    <p>Before installing Khadem, ensure the following are available on your system:</p>
    <ul class="list-disc pl-6 my-4">
      <li><strong>Dart SDK:</strong> Version 3.0.0 or higher</li>
      <li><strong>Git:</strong> Required for fetching packages and version control</li>
      <li><strong>Docker:</strong> (Optional) For containerized deployments</li>
    </ul>

    <h2 id="dart-installation">Installing Dart</h2>
    <p>
      If Dart isn't installed yet, follow the official guide:  
      <a href="https://dart.dev/get-dart" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">
        Get Dart SDK
      </a>
    </p>

    <h3>Verify Dart Installation</h3>
    <CodeBlock :code="verifyDartCode" language="bash" />

    <h2 id="khadem-installation">Installing Khadem</h2>
    <p>Install Khadem globally using Dart's package manager:</p>
    <CodeBlock :code="installKhademCode" language="bash" />

    <h3>Verify Khadem Installation</h3>
    <p>Make sure Khadem is correctly installed:</p>
    <CodeBlock :code="verifyKhademCode" language="bash" />

    <h2 id="updating">Updating Khadem</h2>
    <p>To update to the latest version of Khadem:</p>
    <CodeBlock :code="updateKhademCode" language="bash" />

    <h2 id="troubleshooting">Troubleshooting</h2>
    <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-6">
      <h3 class="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Common Issues</h3>
      <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
        <li><strong>khadem: command not found:</strong> Ensure Dart’s bin directory is added to your <code>PATH</code></li>
        <li><strong>Permission denied:</strong> Use <code>sudo</code> if necessary on macOS/Linux</li>
        <li><strong>Version conflict:</strong> Try uninstalling and reinstalling Khadem</li>
      </ul>
    </div>

    <h3>🔧 Add Dart to PATH</h3>
    <p>If you encounter a command not found error, make sure Dart’s global bin path is in your shell config:</p>
    <CodeBlock :code="pathSetupCode" language="bash" />

    <h2 id="ide-setup">IDE Setup</h2>
    <p>We recommend using <strong>Visual Studio Code</strong> for the best development experience:</p>
    <ol class="list-decimal pl-6 my-4">
      <li>
        Download <a href="https://code.visualstudio.com/" target="_blank" class="text-primary-600 hover:underline">Visual Studio Code</a>
      </li>
      <li>
        Install the <a href="https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code" target="_blank" class="text-primary-600 hover:underline">Dart Extension</a>
      </li>
      <li>Restart VS Code to activate Dart tools</li>
    </ol>

    <h2 id="next-steps">Next Steps</h2>
    <p>Khadem is installed. You're now ready to create your first project:</p>

    <NuxtLink to="/docs/creating-project" class="btn btn-primary mt-4 hidden sm:inline-flex">
      Create Your First Project →
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Installation'
})

const verifyDartCode = `dart --version`

const installKhademCode = `dart pub global activate khadem`

const verifyKhademCode = `khadem --version`

const updateKhademCode = `dart pub global activate khadem`

const pathSetupCode = `# Add to your shell profile (.bashrc, .zshrc, etc.)
export PATH="$PATH:$HOME/.pub-cache/bin"

# Reload your shell
source ~/.bashrc  # or ~/.zshrc`
</script>