<script setup lang="ts">
import Cookie from './Cookie.vue';
import Heading from './Heading.vue';

const cookies = [
  {
    description: 'A bright cookie that tastes like strawberry cream cake.',
    image: '/src/assets/strawberry-cookies.jpg',
    name: 'Strawberry'
  },
  {
    description: 'Like drinking a glass of fresh blueberry lemonade.',
    image: '/src/assets/lemon-blueberry-cookies.jpg',
    name: 'Lemon Blueberry'
  },
  {
    description: 'A delicious, fall-inspired flavor paired with butterscotch.',
    image: '/src/assets/apple-cinnamon-cookies.jpg',
    name: 'Apple Cinnamon'
  },
  {
    description: 'Classic Filipino ube (purple yam) flavor paired with shredded coconut.',
    image: '/src/assets/ube-coconut-cookies.jpg',
    name: 'Ube Coconut'
  },
  {
    description: 'Sweet peachy flavor with soft apricot bits throughout.',
    image: '/src/assets/peach-apricot-cookies.jpg',
    name: 'Peach Apricot'
  },
  {
    description:
      'Made with brown butter a Ghirardelli chocolate to create a soft and chewy cookie.',
    image: '/src/assets/chocolate-chip-cookies.jpg',
    name: 'Chocolate Chip'
  },
  {
    description: 'Super fragrant earl-grey-tea flavored shortbread.',
    image: '/src/assets/earl-grey-tea-cookies.jpg',
    name: 'Earl Grey Tea'
  },
  {
    description: 'Matcha (Japanese green tea) flavored shortbread with white chocolate chips.',
    image: '/src/assets/matcha-cookies.jpg',
    name: 'Matcha'
  },
  {
    description: 'Soft and buttery cookies that can come in lots of different shapes.',
    image: '/src/assets/sugar-cookies.jpg',
    name: 'Sugar'
  },
  {
    description:
      'Buttery and crumbly shortbread with hints of vanilla in the shape of a lucky cat.',
    image: '/src/assets/lucky-cat-cookies.jpg',
    name: 'Lucky Cat Shortbread'
  }
];
</script>

<template>
  <section class="mt-8">
    <Heading>Our Cookies</Heading>

    <div class="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-9/12 mx-auto">
      <Cookie
        v-for="cookie in cookies"
        :description="cookie.description"
        :image="cookie.image"
        :name="cookie.name"
        :key="cookie.name"
      />
    </div>
  </section>
</template>
