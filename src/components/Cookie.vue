<script setup lang="ts">
interface CookieProps {
  description?: string;
  image: string;
  name: string;
}

defineProps<CookieProps>();
</script>

<template>
  <div class="flex items-center gap-2 p-6">
    <div class="w-32 min-w-32 overflow-hidden rounded-2xl">
      <img :src="image" />
    </div>

    <div>
      <h3 class="text-xl font-bold lemon-days">{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
