<script setup lang="ts">
defineProps(['description', 'image', 'name']);
</script>

<template>
  <div class="flex items-center gap-2 p-6">
    <img class="h-auto w-32" :src="image" />

    <div>
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
