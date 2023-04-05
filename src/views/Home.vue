<template>
  <div class="min-h-screen w-screen">
    <Navbar
     class="mb-12" 
      :name="userStore.user.name"
      :avatar="userStore.user.avatar"
      :userPageUrl="'/profile/' + userStore.user.id"
    />
    <!-- tailwind 各樣是引入與 JIT範例測試 -->
    
    <!-- <button class="text-[30px] ml-2 ring-gray-500 active:ring-2">123</button> -->
    <!-- <div class="text-[length:var(--bruce-title)] text-[color:var(--bruce-primary)]">123</div> -->

    <!-- tailwind 各樣是引入與 JIT範例測試 -->
    <div class="container mx-auto w-11/12 px-3 sm:px-0 md:w-9/12 xl:w-7/12">
      <div class="grid gap-6 md:grid-cols-3">
        <div class="md:col-span-2">
          <RouterView></RouterView>
        </div>
        <!-- desktop SideMenu-->
        <div class="hidden md:block">
          <SideMenu
            :name="userStore.user.name"
            :avatar="userStore.user.avatar"
            :userPageUrl="'/profile/' + userStore.user.id"
          />
        </div>
      </div>
    </div>
    <ChatContainer />
    <!-- mobile option-->
    <PostOption class="fixed left-1/2 bottom-12 -translate-x-1/2 md:hidden" />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
	import { RouterView } from 'vue-router';
  import ChatContainer from '../components/ChatContainer.vue';
	import Navbar from '../components/home/Navbar.vue';
	import PostOption from '../components/home/PostOption.vue';
	import SideMenu from '../components/home/SideMenu.vue';
  import { aepAxios } from "../api/aepBaseApi";
  import { getProfile, getUserCheck } from '../api'
  import { useUserStore } from '@/stores';
  import { useRouter } from 'vue-router';
  const userStore = useUserStore();
  const isLoading = ref(true);
  const router = useRouter();

aepAxios.defaults.headers.common.Authorization = localStorage.getItem('metaWall');
  getUserCheck()
    .then((res) => {
      if (res.data.status) {
        console.log('res', res.data)
      } else {
        router.push({ name: 'sign-in' });
      }
    })
  getProfile()
    .then((res) => {
      const userInfo = {
        name: res.data.user.name,
        avatar: res.data.user.photo,
        role: res.data.user.role,
        id: res.data.user._id,
      }
      userStore.updateUser(userInfo);
      isLoading.value = false;
    })
    .catch(() => {
      router.push({ name: 'sign-in' });
    });
onMounted(() => {
  if (userStore.name) {
    isLoading.value = false;
    return;
  }

  
});


</script>
