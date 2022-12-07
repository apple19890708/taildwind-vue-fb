<template>
  <CardTitle title="追蹤名單"></CardTitle>
  <Suspense>
    <template v-if="isLoading">
      <ul class="animate-pulse">
        <li
          v-for="index of 3"
          :key="index"
          class="mb-4 flex items-end justify-between rounded-lg border-2 border-black bg-white p-4 shadow-post"
        >
          <UserInfo></UserInfo>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul v-if="followList.length > 0">
        <li
          v-for="(user, index) of followList"
          :key="index"
          class="mb-4 flex items-end justify-between rounded-lg border-2 border-black bg-white p-4 shadow-post"
        >
          <UserInfo
            :name="user.name"
            :img-url="user.photo"
            :sub-title="dateTime(user.followCreatedAt)"
            :user-page-url="`/profile/${user.id}`"
          ></UserInfo>
        </li>
      </ul>
      <PostEmptyCard v-else>
        <p class="p-8 text-center text-subtitle">
          目前尚無追蹤名單，追蹤其他人吧！
        </p>
      </PostEmptyCard>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardTitle from '@/components/CardTitle.vue';
import PostEmptyCard from '@/components/PostEmptyCard.vue';
import UserInfo from '@/components/UserInfo.vue';
import { getFollowing } from '@/api'
import { dateTime } from '@/utils/filter';
import { useToast } from 'vue-toastification';
const toast = useToast();

const isLoading = ref(true);
const followList = ref([]);

onMounted( async () => {
  try {
    const res = await getFollowing();
    if (res.data.status) {
      isLoading.value = false;
      followList.value = res.data.followList;
    }
  } catch (error) {
    toast.error('讀取追蹤列表失敗');
    isLoading.value = false;
  } 
});
</script>
