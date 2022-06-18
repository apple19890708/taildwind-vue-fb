<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores';
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

if (
  route.query.token &&
  route.query.id &&
  route.query.name &&
  route.query.avatar
) {
  localStorage.setItem('metaWall', `Bearer ${route.query.token}`);
  const userInfo = {
    id: route.query.id,
    name: route.query.name,
    avatar: route.query.avatar
  };
  userStore.updateUser(userInfo);
  router.push({ name: 'post' });
} else {
  router.push({ name: 'sign-in' });
}
</script>
<template>
  <div class="hidden"></div>
</template>
