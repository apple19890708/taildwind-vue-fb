<template>
  <div v-if="!isBot" class="m-4 lg:mx-2">
    <div :class="['flex items-center', { 'flex-row-reverse': isSelf }]">
      <Avatar :class="['mr-2', { 'ml-2': isSelf }]" size="40" :imgUrl="sender.photo" />
      <div
        :class="[
          'm-h-[20px] inline-flex max-w-[300px] rounded-2xl border-2 border-slate-800 p-2',
          isSelf ? 'bg-blue-400' : 'bg-slate-200',
          isSelf ? 'text-white' : 'text-black',
        ]"
      >
        {{ content }}
      </div>
      <span class="px-2 text-xs">{{ formateTime(createdAt) }}</span>
    </div>
  </div>
  <div v-else class="m-4 lg:mx-2">
    <div class="flex items-center">
      <Avatar class="mr-2" style="min-width:40px" size="40" :imgUrl="sender.photo" />
      <div
        :class="[
          'm-h-[20px] inline-flex max-w-[300px] rounded-2xl border-2 border-slate-800 p-2 bg-amber-100'
        ]"
      >
        {{ content }}
      </div>
      <span class="px-2 text-xs">{{ formateTime(createdAt) }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, computed, onMounted } from 'vue';
import dayjs from 'dayjs';
import { useUserStore } from '@/stores';
import { storeToRefs } from 'pinia';
const useStore = useUserStore();
const { user: userInfo } = storeToRefs(useStore);
import { getOtherUsersProfile } from '@/api';
import Avatar from './Avatar.vue';
const props = defineProps({
  message: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
const { message: content, sender, createdAt } = toRefs(props.message);
// 取得傳送者資訊

const isSelf = computed(() => {
  return userInfo?.value.id === sender.value?._id;
});

const isBot = computed(() => {
  return '63048cc67c20701d55af0f2b' == sender.value?._id;
});

const formateTime = (time) => {
  return dayjs(time).format('HH:mm');
};
</script>
