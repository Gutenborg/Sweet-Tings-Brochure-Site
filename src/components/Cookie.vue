<script setup lang="ts">
interface CookieProps {
  description?: string;
  image: string;
  name: string;
}

defineProps<CookieProps>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-2 p-2 md:p-6">
    <div class="w-full min-w-full md:w-32 md:min-w-32 overflow-hidden rounded-2xl">
      <img :src="image" />
    </div>

    <div>
      <h3 class="text-3xl text-center md:text-left md:text-xl font-bold lemon-days">{{ name }}</h3>
      <p class="text-lg md:text-md">{{ description }}</p>
    </div>
  </div>
</template>
