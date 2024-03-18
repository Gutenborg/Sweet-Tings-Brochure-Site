<script setup lang="ts">
import { ref } from 'vue';
import Cookie from './Cookie.vue';
import Heading from './Heading.vue';

const cookies = ref([
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Strawberry'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Lemon Blueberry'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Apple Cinnamon'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Ube Coconut'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Chocolate Chip'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Earl Gray Tea'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Matcha'
  },
  {
    description: 'Cookie Description',
    image: '../assets/ingredients.png',
    name: 'Pandan'
  }
]);
</script>

<template>
  <section class="mt-8">
    <Heading>Our Cookies</Heading>

    <div class="grid grid-cols-2 w-8/12 mx-auto">
      <Cookie
        v-for="cookie in cookies"
        :description="cookie.description"
        :name="cookie.name"
        :key="cookie.name"
      />
    </div>
  </section>
</template>
