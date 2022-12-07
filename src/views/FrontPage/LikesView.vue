<template>
  <CardTitle title="我按讚的貼文" />
  <div v-show="!isLoading">
    <ul v-if="likePosts.length > 0">
      <li
        v-for="(item, index) in likePosts"
        :key="item._id"
        :class="{ 'mb-2': index < likePosts.length - 1 }"
      >
        <LikeCard :item="item" @get-likes="getLikeLists" />
      </li>
    </ul>
    <PostEmptyCard v-else>
      <p class="p-8 text-center text-subtitle">
        目前尚無按讚文章，按讚一則貼文吧！
      </p>
    </PostEmptyCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardTitle from '@/components/CardTitle.vue';
import LikeCard from '@/components/LikeCard.vue';
import LikeLoadingCard from '@/components/LikeLoadingCard.vue';
import PostEmptyCard from '@/components/PostEmptyCard.vue';
import { getLikeList } from '@/api';
import { useToast } from 'vue-toastification';
const toast = useToast();
const isLoading = ref(false);
const likePosts = ref([]);
const getLikeLists = async () => {
  isLoading.value = true;
  try {
    const res = await getLikeList();
    console.log('res.likeList', res)
    if (res.data.status === 'success') {
      likePosts.value = res.data.likeList;
    }
    isLoading.value = false;
  } catch (error) {
    toast.error('讀取按讚列表失敗');
    console.log(err);
    isLoading.value = false;
  }
}

onMounted(() => {
  getLikeLists();
});
</script>
