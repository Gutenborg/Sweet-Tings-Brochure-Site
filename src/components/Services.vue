<script setup lang="ts">
import { ref } from 'vue';
import Service from './Service.vue';
import Heading from './Heading.vue';

const services = ref([
  {
    description: 'Service Description',
    name: 'Baked Fresh'
  },
  {
    description: 'Service Description',
    name: 'Great Value'
  },
  {
    description: 'Service Description',
    name: 'Institutions'
  },
  {
    description: 'Service Description',
    name: 'Delivery to Your Door'
  },
  {
    description: 'Service Description',
    name: 'No Order Too Large'
  },
  {
    description: 'Service Description',
    name: 'Delicious Baking'
  }
]);
</script>

<template>
  <section>
    <Heading>Enticing Treats</Heading>

    <div class="grid gap-2 grid-cols-2 grid-rows-4 w-8/12 mx-auto">
      <Service
        v-for="service in services"
        :description="service.description"
        :name="service.name"
        :key="service.name"
      />
    </div>
  </section>
</template>
