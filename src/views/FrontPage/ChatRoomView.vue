<script setup>
import ChatRoom from '@/components/ChatRoom.vue';
import { storeToRefs } from 'pinia';
import { useRoomStore } from '@/stores';
const roomStore = useRoomStore();
const { room } = storeToRefs(roomStore);
</script>

<template>
  <ChatRoom :roomInfo="room?.[0]" />
</template>
