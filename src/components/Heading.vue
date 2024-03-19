<script setup lang="ts">
const fontSize = 'text-5xl md:text-6xl';
</script>

<template>
  <section>
    <h2 class="mt-4 px-6 py-4 text-brand text-center lemon-days" :class="fontSize"><slot /></h2>
  </section>
</template>
