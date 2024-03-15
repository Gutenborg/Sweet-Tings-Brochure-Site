<script setup lang="ts">
  defineProps(["description", "name"])
</script>

<template>
  <div>
    <span>image</span>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </div>
</template>