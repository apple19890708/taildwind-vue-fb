<template>
  <div class="border-b-2 border-black bg-white">
    <div class="container mx-auto w-11/12 px-3 sm:px-0 md:w-9/12 xl:w-7/12">
      <div class="flex h-16 items-center justify-between">
        <h1 class="font-paytone text-3xl text-black">
          <RouterLink to="/"> MetaWall </RouterLink>
        </h1>
        <div class="flex items-center">
          <Avatar size="30" :imgUrl="avatar" />
          <h2
            class="ml-2.5 border-b-2 border-black font-azeret font-bold text-black"
          >
            {{ name }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-menu {
  visibility: hidden;
  transition: all linear 0.3s;
}
.reference:hover > .user-menu,
.reference:focus > .user-menu,
.reference:focus-within > .user-menu {
  visibility: visible;
}
</style>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Avatar from '../Avatar.vue';
const router = useRouter();
defineProps({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    default: 'Unknown',
  },
  userPageUrl: {
    type: String,
    default: '#',
  },
});
</script>
