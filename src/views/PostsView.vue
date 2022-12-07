<template>
  <ul v-show="isLoading">
    <li v-for="index in 3" :key="index" class="mb-4">
      <PostLoadingCard />
    </li>
  </ul>

  <div v-show="!isLoading">
    <ul v-if="postsData.length > 0">
      <li
        v-for="(item, index) in postsData"
        :key="item.id"
        :class="{ 'mb-4': index < postsData.length - 1 }"
      >
        <PostCard :post="item" />
      </li>
    </ul>

    <PostEmptyCard v-else>
      <p class="p-8 text-center text-subtitle">
        目前尚無動態，新增一則貼文吧！
      </p>
    </PostEmptyCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PostCard from '@/components/PostCard.vue';
import PostEmptyCard from '@/components/PostEmptyCard.vue';
import { getAllPost } from '@/api'
import PostLoadingCard from '@/components/PostLoadingCard.vue';
const isLoading = ref(true);
const posts = ref([]);
const postsData = ref([]);
const getAllPosts = async () => {
	try {
		const res = await getAllPost();
		if (res.status) {
			postsData.value = res.data.data;
			isLoading.value = false;
		}
	} catch (error) {
		console.log('error', error)
	}
}
onMounted(() => {
  getAllPosts();
});
</script>
