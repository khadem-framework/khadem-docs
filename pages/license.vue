<template>
        <section class="container mx-auto py-12 px-6">

    <div class="prose dark:prose-invert max-w-4xl mx-auto py-10 px-4">
        <h1>{{ $t('legal.license.title') }}</h1>
        <p>{{ $t('legal.license.line1') }}</p>
        <p>{{ $t('legal.license.line2') }}</p>
        <p>{{ $t('legal.license.line3') }}</p>
    </div>
        </section>
</template>


<script setup>
const localePath = useLocalePath()
</script>