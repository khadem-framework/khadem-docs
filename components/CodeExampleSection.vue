<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('codeExample.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ $t('codeExample.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <span class="text-gray-700 dark:text-gray-300 font-medium">Create a new project</span>
          </div>
          <CodeBlock
            :code="createProjectCode"
            language="bash"
          />

          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <div class="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <span class="text-gray-700 dark:text-gray-300 font-medium">Build and run</span>
          </div>
          <CodeBlock
            :code="buildCode"
            language="bash"
          />
        </div>

        <div class="space-y-6">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <div class="w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <span class="text-gray-700 dark:text-gray-300 font-medium">Create your first handler</span>
          </div>
          <CodeBlock
            :code="handlerCode"
            language="dart"
          />

          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <div class="w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <span class="text-gray-700 dark:text-gray-300 font-medium">Configure routes</span>
          </div>
          <CodeBlock
            :code="routeCode"
            language="dart"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const createProjectCode = `# Create a new Khadem project
khadem new my_api

# Navigate to project directory
cd my_api`

const buildCode = `# Build JIT snapshot
khadem build

# Run the application
./bin/server.jit`

const handlerCode = `// lib/handlers/user_handler.dart
import 'package:khadem/khadem.dart';

class UserHandler extends Handler {
  @override
  Future<Response> handle(Request request) async {
    final users = await UserService.getAllUsers();
    return Response.json(users);
  }
}`

const routeCode = `// lib/routes/api.dart
import 'package:khadem/khadem.dart';
import '../handlers/user_handler.dart';

void registerApiRoutes(Router router) {
  router.get('/users', UserHandler());
  router.post('/users', CreateUserHandler());
}`
</script>