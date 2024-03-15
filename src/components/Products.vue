<script setup lang="ts">
import { ref } from 'vue';
import Cookie from './Cookie.vue';
import Heading from './Heading.vue';

const cookies = ref([
  {
    description: 'Cookie Description',
    name: 'Strawberry'
  },
  {
    description: 'Cookie Description',
    name: 'Lemon Blueberry'
  },
  {
    description: 'Cookie Description',
    name: 'Apple Cinnamon'
  },
  {
    description: 'Cookie Description',
    name: 'Ube Coconut'
  },
  {
    description: 'Cookie Description',
    name: 'Chocolate Chip'
  },
  {
    description: 'Cookie Description',
    name: 'Earl Gray Tea'
  },
  {
    description: 'Cookie Description',
    name: 'Matcha'
  },
  {
    description: 'Cookie Description',
    name: 'Pandan'
  }
]);
</script>

<template>
  <section>
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
