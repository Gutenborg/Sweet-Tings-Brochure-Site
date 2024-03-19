<script setup lang="ts">
import Cookie from './Cookie.vue';
import Heading from './Heading.vue';
import strawberry from '../assets/strawberry-cookies.jpg';
import lemonBlueberry from '../assets/lemon-blueberry-cookies.jpg';
import appleCinnamon from '../assets/apple-cinnamon-cookies.jpg';
import ubeCoconut from '../assets/ube-coconut-cookies.jpg';
import peachApricot from '../assets/peach-apricot-cookies.jpg';
import chocolateChip from '../assets/chocolate-chip-cookies.jpg';
import earlGreyTea from '../assets/earl-grey-tea-cookies.jpg';
import matcha from '../assets/matcha-cookies.jpg';
import sugar from '../assets/sugar-cookies.jpg';
import luckyCat from '../assets/lucky-cat-cookies.jpg';

const cookies = [
  {
    description: 'A bright cookie that tastes like strawberry cream cake.',
    image: strawberry,
    name: 'Strawberry'
  },
  {
    description: 'Like drinking a glass of fresh blueberry lemonade.',
    image: lemonBlueberry,
    name: 'Lemon Blueberry'
  },
  {
    description: 'A delicious, fall-inspired flavor paired with butterscotch.',
    image: appleCinnamon,
    name: 'Apple Cinnamon'
  },
  {
    description: 'Classic Filipino ube (purple yam) flavor paired with shredded coconut.',
    image: ubeCoconut,
    name: 'Ube Coconut'
  },
  {
    description: 'Sweet peachy flavor with soft apricot bits throughout.',
    image: peachApricot,
    name: 'Peach Apricot'
  },
  {
    description:
      'Made with brown butter a Ghirardelli chocolate to create a soft and chewy cookie.',
    image: chocolateChip,
    name: 'Chocolate Chip'
  },
  {
    description: 'Super fragrant earl-grey-tea flavored shortbread.',
    image: earlGreyTea,
    name: 'Earl Grey Tea'
  },
  {
    description: 'Matcha (Japanese green tea) flavored shortbread with white chocolate chips.',
    image: matcha,
    name: 'Matcha'
  },
  {
    description: 'Soft and buttery cookies that can come in lots of different shapes.',
    image: sugar,
    name: 'Sugar'
  },
  {
    description:
      'Buttery and crumbly shortbread with hints of vanilla in the shape of a lucky cat.',
    image: luckyCat,
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
