<template>
  <div class="relative group">
    <div class="flex items-center justify-between bg-gray-800 dark:bg-gray-900 rounded-t-lg px-4 py-2 text-sm">
      <span class="text-gray-400">{{ language }}</span>
      <button
        @click="copyCode"
        class="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <CheckIcon v-if="copied" class="w-4 h-4" />
        <ClipboardIcon v-else class="w-4 h-4" />
      </button>
    </div>
    <div class="bg-gray-900 dark:bg-gray-800 rounded-b-lg overflow-x-auto">
      <pre class="p-4 text-sm text-gray-100"><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, ClipboardDocumentIcon as ClipboardIcon } from '@heroicons/vue/24/outline'
import Prism from 'prismjs'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'dart'
  }
})

const copied = ref(false)

const highlightedCode = computed(() => {
  const grammar = Prism.languages[props.language] || Prism.languages.plaintext
  return Prism.highlight(props.code, grammar, props.language)
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>