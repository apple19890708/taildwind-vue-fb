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
    <div>
      <button
        type="button"
        class="flex items-center justify-center py-5"
        @click="likePost(innerPost._id)"
        :disabled="isSendingLike"
        :class="{ 'cursor-not-allowed': isSendingLike }"
      >
        <IconThumbsUp
          v-if="!innerPost.likes?.includes(userStore.user.id)"
          class="mr-2 h-5 w-5 text-primary"
        />
        <IconThumbsUpFill v-else class="mr-2 h-5 w-5 text-primary" />
        <span> {{ innerPost.likes?.length }}</span>
      </button>
    </div>
    <!--留言-->
    <div
      class="mb-5 flex items-center"
      @keyup.enter.exact="sendComment(innerPost._id)"
    >
      <Avatar class="mx-2" size="40" :imgUrl="userStore.user.avatar" />
      <div class="flex w-full max-w-[89%] border-2 border-black">
        <input
          v-model="newComment"
          class="w-full border-none focus:ring-2 focus:ring-primary"
          type="text"
        />
        <button
          class="flex w-full max-w-[128px] items-center justify-center border-l-2 border-black bg-primary text-base text-white"
          @click="sendComment(innerPost._id)"
          :disabled="isSendingComment"
          :class="{ 'cursor-not-allowed bg-slate-500': isSendingComment }"
        >
          <span>留言</span>
          <IconLoading
            class="ml-1 h-4 w-4 animate-spin"
            :class="{ hidden: !isSendingComment }"
          ></IconLoading>
        </button>
      </div>
    </div>
    <!-- 預設隱藏留言 -->
    <div v-if="sortedComments.length > 1 && isHideComment">
      <div class="cursor-pointer" @click="isHideComment = false">顯示{{ sortedComments.length - 1 }}則較早留言</div>
      <div class="mb-4 rounded-lg bg-secondary p-4">
        <UserInfo
          class="mb-4"
          :imgUrl="sortedComments[sortedComments.length - 1]?.user?.photo"
          :name="sortedComments[sortedComments.length - 1]?.user?.name"
          :userPageUrl="`/profile/${sortedComments[sortedComments.length - 1]?.user?._id}`"
          :subTitle="dateTime(sortedComments[sortedComments.length - 1]?.createdAt)"
        />
        <p class="whitespace-pre">{{ sortedComments[sortedComments.length - 1]?.comment }}</p>
      </div>
    </div>
    <!-- 顯示全部留言 -->
    <div
      class="mb-4 rounded-lg bg-secondary p-4"
      v-for="comment in sortedComments"
      :key="comment._id"
      v-if="!isHideComment || sortedComments.length === 1"
    >
      <UserInfo
        class="mb-4"
        :imgUrl="comment.user.photo"
        :name="comment.user.name"
        :userPageUrl="`/profile/${comment.user._id}`"
        :subTitle="dateTime(comment.createdAt)"
      />
      <p class="whitespace-pre">{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, toRaw, watch, computed } from 'vue';
import { useUserStore } from '@/stores';
import Avatar from '@/components/Avatar.vue';
import IconThumbsUp from '@/components/icons/IconThumbsUp.vue';
import IconThumbsUpFill from '@/components/icons/IconThumbsUpFill.vue';
import { dateTime } from '../utils/filter';
import PostImagesCardVue from './PostImagesCard.vue';
import UserInfo from './UserInfo.vue';
import { addLike, cancelLike, postComments } from '@/api'
import IconLoading from './icons/IconLoading.vue';
import { useToast } from 'vue-toastification';
const toast = useToast();
const userStore = useUserStore();
const isSendingLike = ref(false);
const isHideComment = ref(true);
const newComment = ref('');
const isSendingComment = ref(false);
const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
const innerPost = ref(toRaw(props.post));
watch(props, (curr) => {
  innerPost.value = toRaw(curr.post);
});
const innerComments = ref(innerPost.value.comments);

const likePost = async (id) => {
  isSendingLike.value = true;
  const isLike = innerPost.value.likes.includes(id);
  if (!isLike) {
    try {
      const res = await addLike(id);
      updateInnerPostLikes(userStore.user.id);
      isSendingLike.value = false;
    } catch (error) {
      console.log('error', error)
      isSendingLike.value = false;
    }
  } else {
    try {
      const res = await cancelLike(id);
      updateInnerPostLikes(userStore.user.id);
      isSendingLike.value = false;
    } catch (error) {
      console.log('error', error)
      isSendingLike.value = false;
    }
  }
  
}

// 更新內部資料 innerPost.likes
const updateInnerPostLikes = (id) => {
  const isLike = innerPost.value.likes.includes(id); // 是否按讚
  if (isLike) {
    const index = innerPost.value.likes.findIndex((i) => i === id);
    innerPost.value.likes.splice(index, 1); // 移除 id
  } else {
    innerPost.value.likes.push(id); // 加入 id
  }
};

const sendComment = async (postID) => {
  if (newComment.value.trim() === '') {
    toast.error('您尚未輸入任何訊息');
    return;
  }
  isSendingComment.value = true;
  
  try {
    const comment = {
      comment: newComment.value
    }
    const res = await postComments(postID, comment)
    if (res.status === 'success') {
      updateInnerPostComments(res.data.comments);
      toast.success('新增留言成功');
      newComment.value = '';
      isSendingComment.value = false;
    }
  } catch (error) {
    console.log('error', error)
    toast.error('留言失敗，請稍後再試');
    isSendingComment.value = false;
  }
};

const updateInnerPostComments = (data) => {
  const comment = {
    comment: data.comment,
    createdAt: data.createdAt,
    user: {
      _id: data.user._id,
      name: data.user.name,
      photo: data.user.photo,
      createdAt: data.createdAt,
    },
  };
  innerComments.value.push(comment);
};
const sortedComments = computed(() => {
  const comments = innerComments.value;
  return comments.sort((a, b) => {
    const dateTime1 = new Date(a.createdAt);
    const dateTime2 = new Date(b.createdAt);
    return dateTime1 - dateTime2;
  });
});

</script>
