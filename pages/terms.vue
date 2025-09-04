<template>
    <section class="container mx-auto py-12 px-6">

        <div class="prose dark:prose-invert max-w-4xl mx-auto py-10 px-4">
            <h1>{{ $t('legal.terms.title') }}</h1>
            <p>{{ $t('legal.terms.content') }}</p>
        </div>
    </section>
</template>

<script setup>
const localePath = useLocalePath()
</script>