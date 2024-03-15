<script setup lang="ts">
interface CookieProps {
  description?: String;
  name: String;
}

defineProps<CookieProps>();
</script>

<template>
  <div>
    <span>image</span>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
