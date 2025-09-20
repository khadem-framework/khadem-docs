<!-- components/AppLogo.vue -->
<template>
    
    <component :is="withWrapper ? 'div' : 'fragment'" :class="withWrapper? 'flex justify-center mb-8':''">
        <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-2xl  "
            :class="[
        animated ? 'animate-bounce-subtle' : '',
        containerSize
    ]" :style="containerStyle">
            <img src='~/assets/images/logo.png' :alt="alt" class="w-full h-full object-contain"  style="pointer-events: none;"/>
        </div>
    </component>

</template>

<script setup>
defineProps({
    src: {
        type: String,
        default: '~/assets/images/khadem_logo.png',
    },
    alt: {
        type: String,
        default: 'Khadem Logo',
    },
    animated: {
        type: Boolean,
        default: false,
    },
    containerSize: {
        type: String,
        default: 'w-20 h-20', // Tailwind size classes
    },
    containerStyle: {
        type: Object,
        default: () => ({}),
    },
    withWrapper: {
    type: Boolean,
    default: true, // Set to false if you don't want the outer flex wrapper
  },
});
</script>

<style scoped>
/* Optional subtle bounce animation */
@keyframes bounce-subtle {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}

.animate-bounce-subtle {
    animation: bounce-subtle 2s infinite ease-in-out;
}
</style>