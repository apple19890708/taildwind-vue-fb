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
	</div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { getOnePost } from '@/api'
import PostLoadingCard from '@/components/PostLoadingCard.vue';
import PostCard from '@/components/PostCard.vue';

const route = useRoute();
const isLoading = ref(true);
const postsData = ref([]);
const id = ref(route.params.id);

const getUserOnePost = async (id) => {
	try {
		const res = await getOnePost(id);
		if (res.status) {
			postsData.value = res.data.data;
			isLoading.value = false;
		}
	} catch (error) {
		console.log('error', error)
	}
}

onMounted(() => {
	console.log('id', id.value)
  getUserOnePost(id.value);
});

</script>