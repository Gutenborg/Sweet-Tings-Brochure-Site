<script setup lang="ts">
import { computed } from 'vue';

interface HeadingProps {
  size?: 'md' | 'lg';
}

const props = withDefaults(defineProps<HeadingProps>(), { size: 'md' });

const fontSize = computed(() => (props.size === 'md' ? 'text-6xl' : 'text-9xl'));
</script>

<template>
  <section>
    <h2 class="mt-4 px-6 py-4 text-brand text-center lemon-days" :class="fontSize"><slot /></h2>
  </section>
</template>
