<template>
  <div class="prose dark:prose-invert max-w-4xl mx-auto py-16">
    <h1>Configuration System</h1>
    <p>
      Khadem provides a robust configuration system based on JSON files, environment-specific overrides,
      dot-notation access, TTL caching, and runtime modification.
    </p>

    <h2>1. Configuration Structure</h2>
    <p>Config files live in the <code>config/</code> folder:</p>
    <CodeBlock :code="configStructure" language="bash" />

    <h2>2. Example Config</h2>
    <p><strong>config/app.json</strong></p>
    <CodeBlock :code="appJson" language="json" />

    <p><strong>config/development/app.json</strong> (override)</p>
    <CodeBlock :code="devJson" language="json" />

    <h2>3. Accessing Config</h2>
    <p>Use dot notation to access values:</p>
    <CodeBlock :code="accessExample" language="dart" />

    <h2>4. Runtime Overrides</h2>
    <p>You can override config at runtime:</p>
    <CodeBlock :code="setExample" language="dart" />

    <h2>5. Reloading Configs</h2>
    <p>Manually reload all configuration files:</p>
    <CodeBlock :code="reloadExample" language="dart" />

    <h2>6. Registry-Based Config</h2>
    <p>Load configuration maps directly from code:</p>
    <CodeBlock :code="registryExample" language="dart" />

    <h2>7. Access Sections</h2>
    <p>Fetch entire config sections as maps:</p>
    <CodeBlock :code="sectionExample" language="dart" />

    <h2>8. Summary</h2>
    <ul>
      <li><code>get('key')</code>: Retrieve a value</li>
      <li><code>set('key', value)</code>: Set a value</li>
      <li><code>has('key')</code>: Check existence</li>
      <li><code>reload()</code>: Reload all configs</li>
      <li><code>section('name')</code>: Get section</li>
      <li><code>all()</code>: Get all config data</li>
    </ul>

    <p>Note: YAML parsing is not supported (yet).</p>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' })
useHead({ title: 'Configuration' })

const configStructure = `config/
├── app.json
├── database.json
└── development/
    ├── app.json
    └── database.json`

const appJson = `{
  "name": "Khadem",
  "env": "production",
  "port": 8080
}`

const devJson = `{
  "env": "development",
  "port": 3000
}`

const accessExample = `final config = Khadem.config;

print(config.get<String>('app.name'));   // "Khadem"
print(config.get<int>('app.port'));      // 3000
print(config.get<String>('non.key', 'default'));`

const setExample = `config.set('app.name', 'CustomApp');
print(config.get<String>('app.name')); // "CustomApp"`

const reloadExample = `config.reload(); // Reload all configs`

const registryExample = `Khadem.loadConfigs({
  'database': {
    'host': 'localhost',
    'port': 5432
  }
});`

const sectionExample = `final db = config.section('database');
print(db?['host']);`
</script>
