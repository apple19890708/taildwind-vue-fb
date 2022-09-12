
<template>
  <li
    @click="goChatRoom"
    class="shadow-normal mb-4 flex h-[77px] cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-white px-4"
  >
    <div class="flex items-center">
      <Avatar size="40" :imgUrl="avatar" />
      <div class="flex-1 pl-3">
        <p class="font-bold">{{ name }}</p>
        <p
          class="w-[200px] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-slate-500 md:w-80"
        >
          {{ msg?.[0]?.message }}
        </p>
      </div>
    </div>
    <span class="text-gray text-xs">{{
      formateTime(msg?.[0]?.createdAt)
    }}</span>
  </li>
</template>

<script setup>
import { toRefs } from 'vue';
import Avatar from './Avatar.vue';
import useChat from '@/use/useChat';
const { handleRoom } = useChat();
const props = defineProps({
  room: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  isGroup: {
    type: Boolean,
    default: false,
  }
});
const { name, message: msg, avatar } = toRefs(props.room);
const formateTime = (time) => {
  return time ? new Date(time).toLocaleString() : '尚未開始對話';
};
const goChatRoom = () => {
  if(props.isGroup) {
    console.log('isGroup') // 以一個API判斷使用者是否加入聊天群內
    handleRoom(props.room);
  } else {
    console.log('single')
    handleRoom(props.room);
  }
};
</script>