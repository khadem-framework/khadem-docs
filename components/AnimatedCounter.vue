<template>
  <span class="animated-counter">{{ displayValue }}{{ suffix }}</span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  target: {
    type: [Number, String],
    required: true
  },
  suffix: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const displayValue = ref(0)
const currentValue = ref(0)

const animate = () => {
  const startValue = 0
  const endValue = typeof props.target === 'string' ? parseFloat(props.target.replace(/[^\d.]/g, '')) : props.target
  const startTime = Date.now()
  const endTime = startTime + props.duration

  const updateValue = () => {
    const now = Date.now()
    const progress = Math.min((now - startTime) / props.duration, 1)

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    currentValue.value = startValue + (endValue - startValue) * easeOutQuart

    // Format the display value
    if (typeof props.target === 'string' && props.target.includes('%')) {
      displayValue.value = currentValue.value.toFixed(1)
    } else if (Number.isInteger(endValue)) {
      displayValue.value = Math.round(currentValue.value)
    } else {
      displayValue.value = currentValue.value.toFixed(1)
    }

    if (progress < 1) {
      requestAnimationFrame(updateValue)
    } else {
      displayValue.value = props.target
    }
  }

  requestAnimationFrame(updateValue)
}

onMounted(() => {
  // Small delay to ensure component is rendered
  setTimeout(animate, 100)
})

watch(() => props.target, () => {
  animate()
})
</script>

<style scoped>
.animated-counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;
  transition: color 0.3s ease;
}
</style>
