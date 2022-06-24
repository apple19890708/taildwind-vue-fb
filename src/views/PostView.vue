<template>
	<div>
		<ul v-show="isLoading">
			<li v-for="index in 3" :key="index" class="mb-4"></li>
			<PostLoadingCard />
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
	</div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { aepAxios } from "../api/aepBaseApi";
import { getAllPost } from '@/api'
import PostLoadingCard from '@/components/PostLoadingCard.vue';
import PostCard from '@/components/PostCard.vue';

const isLoading = ref(true);
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
	// aepAxios.defaults.headers.common.Authorization = localStorage.getItem('metaWall');
  getAllPosts();
});

</script>