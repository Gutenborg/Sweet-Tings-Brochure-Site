<script setup lang="ts">
const sectionClasses = 'bg-brand rounded-3xl text-white text-center text-2xl font-bold p-4';
</script>

<template>
  <section class="h-screen w-full sweet-tings-background flex flex-col justify-center items-center">
    <img class="border-white border-solid mx-auto w-9/12 md:w-4/12" src="/src/assets/logo.svg" />

    <div class="bg-white w-11/12 md:w-8/12 rounded-3xl px-6 md:px-16 py-6">
      <h3 class="text-brand text-center text-5xl md:text-7xl lemon-days">
        Delightfully Delicious!
      </h3>

      <div class="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-3 mt-4">
        <p :class="sectionClasses">
          Find Us On<br /><a href="https://facebook.com/sweettingscookies"
            ><img class="w-10 inline-block mr-1" src="/src/assets/facebook-logo.svg" />Facebook!</a
          >
        </p>

        <p :class="sectionClasses">Local to<br />Dover, NH</p>

        <p :class="sectionClasses">Call Us <br />(205) 223-4861</p>
      </div>
    </div>
  </section>
</template>
