<template>
  <div>
    <h1>Installation</h1>
    
    <p>This guide will walk you through installing Khadem and setting up your development environment.</p>

    <h2 id="prerequisites">Prerequisites</h2>
    
    <p>Before installing Khadem, ensure you have the following prerequisites:</p>
    
    <ul>
      <li><strong>Dart SDK:</strong> Version 3.0.0 or higher</li>
      <li><strong>Git:</strong> For project management and version control</li>
      <li><strong>Docker:</strong> (Optional) For containerized deployment</li>
    </ul>

    <h2 id="dart-installation">Installing Dart</h2>
    
    <p>If you don't have Dart installed, visit the <a href="https://dart.dev/get-dart" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">official Dart installation guide</a>.</p>

    <h3>Verify Dart Installation</h3>
    
    <CodeBlock
      :code="verifyDartCode"
      language="bash"
    />

    <h2 id="khadem-installation">Installing Khadem</h2>
    
    <p>Install Khadem globally using Dart's package manager:</p>

    <CodeBlock
      :code="installKhademCode"
      language="bash"
    />

    <h3>Verify Installation</h3>
    
    <p>Confirm that Khadem is installed correctly:</p>

    <CodeBlock
      :code="verifyKhademCode"
      language="bash"
    />

    <h2 id="updating">Updating Khadem</h2>
    
    <p>To update Khadem to the latest version:</p>

    <CodeBlock
      :code="updateKhademCode"
      language="bash"
    />

    <h2 id="troubleshooting">Troubleshooting</h2>
    
    <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 my-6">
      <h3 class="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Common Issues</h3>
      <ul class="text-yellow-700 dark:text-yellow-300 space-y-1">
        <li><strong>Command not found:</strong> Make sure Dart's bin directory is in your PATH</li>
        <li><strong>Permission denied:</strong> Use sudo on macOS/Linux if needed</li>
        <li><strong>Version conflicts:</strong> Uninstall and reinstall Khadem</li>
      </ul>
    </div>

    <h3>Adding Dart to PATH</h3>
    
    <p>If the <code>khadem</code> command is not found, add Dart's bin directory to your PATH:</p>

    <CodeBlock
      :code="pathSetupCode"
      language="bash"
    />

    <h2 id="ide-setup">IDE Setup</h2>
    
    <p>For the best development experience, we recommend using VS Code with the Dart extension:</p>
    
    <ol>
      <li>Install <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">Visual Studio Code</a></li>
      <li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">Dart extension</a></li>
      <li>Restart VS Code</li>
    </ol>

    <h2 id="next-steps">Next Steps</h2>
    
    <p>Now that you have Khadem installed, you're ready to create your first project:</p>
    
    <NuxtLink to="/docs/creating-project" class="btn btn-primary  hidden sm:inline-flex ">
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