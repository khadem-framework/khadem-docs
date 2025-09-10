<template>
  <div class="px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Page Header -->
      <header class="space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Migrations</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Migrations in Khadem are the foundation of managing your database schema in a structured, safe, and consistent way.
          They enable schema versioning, rollback, and reproducibility across different environments.
        </p>
      </header>

      <!-- What Are Migrations -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">What Are Migrations?</h2>
        <p>
          Migrations are Dart classes that describe the transformation of your database schema using a programmatic builder.
          Each migration file contains an <code>up()</code> method (to apply changes) and a <code>down()</code> method (to revert them).
        </p>
        <p>
          They act as version-controlled scripts and are executed sequentially by the <strong>Migrator</strong> engine.
        </p>
      </section>

      <!-- Creating Your First Migration -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">Creating Your First Migration</h2>
        <p>
          To create a migration, extend the <code>MigrationFile</code> contract and define the schema inside <code>builder.create</code>.
        </p>
        <CodeBlock
          title="Example: CreateUsersTable"
          language="dart"
          :code="createUsersExample"
        />
        <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>table.id()</strong>: Adds an auto-incrementing primary key.</li>
            <li><strong>table.timestamps()</strong>: Adds <code>created_at</code> and <code>updated_at</code>.</li>
            <li><strong>table.string()</strong>: Creates a VARCHAR field (default: 255 chars).</li>
            <li><strong>unique()</strong>: Adds a UNIQUE constraint to the column.</li>
          </ul>
        </div>
      </section>

      <!-- Rollback Support -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">Reversing Migrations</h2>
        <p>
          The <code>down()</code> method is used to revert the changes applied by the <code>up()</code> method.
          You typically call <code>dropIfExists</code> to delete the table.
        </p>
        <CodeBlock title="Rollback" language="dart" :code="downExample" />
        <p class="text-sm text-gray-500 dark:text-gray-400">You can also drop columns or foreign keys inside <code>down()</code> when performing more complex operations.</p>
      </section>

      <!-- The Schema Builder -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">Schema Builder Methods</h2>
        <p>
          Inside the builder callback, you get access to the <code>Blueprint</code> object which provides
          dozens of chainable methods to define your table structure.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-200">
          <ul class="list-disc pl-5 space-y-2">
            <li><code>id()</code>: Primary Key</li>
            <li><code>string(name, length)</code>: VARCHAR</li>
            <li><code>text(name)</code>: TEXT</li>
            <li><code>boolean(name)</code>: BOOLEAN</li>
            <li><code>integer(name)</code>: INT</li>
            <li><code>float(name)</code>: FLOAT</li>
            <li><code>timestamp(name)</code>: TIMESTAMP</li>
            <li><code>json(name)</code>: JSON column</li>
          </ul>
          <ul class="list-disc pl-5 space-y-2">
            <li><code>foreignId(name)</code>: unsigned BIGINT for foreign key</li>
            <li><code>enumColumn(name, values)</code>: ENUM column</li>
            <li><code>softDeletes()</code>: adds <code>deleted_at</code></li>
            <li><code>morphs(name)</code>: polymorphic relation (type + id)</li>
            <li><code>defaultVal(value)</code>: default values</li>
            <li><code>nullable()</code>: allows NULL values</li>
            <li><code>unique()</code>: UNIQUE constraint</li>
            <li><code>index()</code>: adds index</li>
          </ul>
        </div>
      </section>

      <!-- Migrator API -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">Running Migrations</h2>
        <p>
          The <code>Migrator</code> engine provides several methods to control migrations programmatically.
          It uses a dedicated <code>migrations</code> table to track executed scripts.
        </p>
        <CodeBlock title="Using the Migrator" language="dart" :code="migratorCode" />
        <div class="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p><strong>upAll()</strong> runs all pending migrations.</p>
          <p><strong>downAll()</strong> rolls back everything in reverse order.</p>
          <p><strong>refresh()</strong> = downAll + upAll.</p>
          <p><strong>status()</strong> prints all migration states.</p>
        </div>
      </section>

      <!-- Safety, Transactions, Best Practices -->
      <section class="space-y-6">
        <h2 class="text-2xl font-bold border-b pb-2">Best Practices & Warnings</h2>
        <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>NEVER edit a migration that has already been run in production.</strong> Create a new migration instead.</li>
          <li><code>timestamps()</code> should be used consistently across your tables for auditability.</li>
          <li>Use <code>softDeletes()</code> if you want to support undeleting records.</li>
          <li>Always test your migrations on staging before production deployment.</li>
          <li>Use <code>nullable()</code> for optional fields, otherwise SQL will throw errors.</li>
        </ul>
      </section>

      <!-- Next Section -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Next Up</h2>
        <p>Explore how to create <NuxtLink to="/docs/models" class="text-blue-600 dark:text-blue-400 hover:underline">Models</NuxtLink> and interact with your tables using Dart classes.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'docs' });

useHead({
  title: 'Migrations - Khadem Framework',
  meta: [
    {
      name: 'description',
      content: 'Master database migrations in Khadem using Dart classes. Learn schema definition, rollbacks, and schema builder methods.'
    }
  ]
});

const createUsersExample = `
import 'package:khadem/khadem_dart.dart';

class CreateUsersTable extends MigrationFile {
  @override
  Future<void> up(builder) async {
    builder.create('users', (table) {
      table.id();
      table.string('name');
      table.string('email').unique();
      table.string('password');
      table.timestamps();
    });
  }

  @override
  Future<void> down(builder) async {
    builder.dropIfExists('users');
  }
}
`;

const downExample = `
@override
Future<void> down(builder) async {
  builder.dropIfExists('users');
}
`;

const migratorCode = `
final migrator = Migrator(databaseManager);

migrator.registerAll([
  CreateUsersTable(),
  CreatePostsTable(),
]);

await migrator.upAll();     // Run all
await migrator.downAll();   // Rollback all
await migrator.refresh();   // Reset (down + up)
await migrator.status();    // Show which migrations ran
`;
</script>
