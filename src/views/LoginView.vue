<template>
  <div
    class="box-border flex h-screen w-full items-center justify-center"
  >
    <div
      class="mx-2 flex items-center border-2 border-black bg-secondary px-4 py-6 shadow-login md:px-8 md:py-12"
    >
      <div class="mr-12 hidden md:block">
        <img src="../assets/images/login-image.svg" alt="login-image" />
      </div>
      <div class="flex flex-col items-center">
        <div class="mx-4 md:mx-10">
          <img src="../assets/images/logo.png" alt="logo" />
        </div>
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
</script>
