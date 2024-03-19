<script setup lang="ts">
interface ServiceProps {
  description?: string;
  image: string;
  name: string;
}

defineProps<ServiceProps>();
</script>

<template>
  <div class="flex items-center gap-2 p-2 md:p-6">
    <img class="h-auto w-32" :src="image" />

    <div>
      <h3 class="text-xl font-bold lemon-days">{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
