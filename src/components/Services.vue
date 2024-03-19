<script setup lang="ts">
import Service from './Service.vue';
import Heading from './Heading.vue';
import ingredients from '../assets/ingredients.png';
import mixing from '../assets/mixing.png';
import shipping from '../assets/shipping.png';
import cookies from '../assets/cookies.png';

const services = [
  {
    description:
      'We use Ghirardelli chocolate and real fruit in our cookies to get that great flavor.',
    image: ingredients,
    name: 'Quality Ingredients'
  },
  {
    description: 'Our cookies are baked to order so you always get fresh, delicious cookies.',
    image: mixing,
    name: 'Baked Fresh'
  },
  {
    description: 'We can deliver within 10 miles of Dover, New Hampshire.',
    image: shipping,
    name: 'Delivery to Your Door'
  },
  {
    description:
      'Just be sure to give us a heads up and we can make up to 12 dozen cookies for you. A dozen dozens!',
    image: cookies,
    name: 'Large Orders Welcome!'
  }
];
</script>

<template>
  <section>
    <Heading>Enticing Treats</Heading>

    <div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12 mx-auto">
      <Service
        v-for="service in services"
        :description="service.description"
        :image="service.image"
        :name="service.name"
        :key="service.name"
      />
    </div>
  </section>
</template>
