<template>
  <div class="rounded-lg border-2 border-black bg-white p-6 shadow-post">
    <div class="flex items-center gap-x-2">
      <Avatar size="40" :imgUrl="innerPost.user?.photo" />
      <div>
        <RouterLink
          :to="`/profile/${innerPost.user?._id}`"
          class="font-bold hover:text-primary hover:underline"
        >
          {{ innerPost.user?.name }}
        </RouterLink>
        <p class="text-sm text-subtitle">
          {{ dateTime(innerPost.createdAt) }}
        </p>
      </div>
    </div>
    <p class="mb-4 whitespace-pre-wrap">{{ innerPost.content }}</p>
    <PostImagesCardVue
      v-if="innerPost.image?.length > 0"
      :images="innerPost.image"
    />
  </div>
</template>

<script setup>
import { ref, toRaw, watch, computed } from 'vue';
import { useUserStore } from '@/stores';
import Avatar from '@/components/Avatar.vue';
import { dateTime } from '../utils/filter';
import PostImagesCardVue from './PostImagesCard.vue';
const userStore = useUserStore();
const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});
const innerPost = ref(toRaw(props.post));
watch(props, (curr) => {
  innerPost.value = toRaw(curr.post);
});


</script>
