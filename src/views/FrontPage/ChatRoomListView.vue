<template>
  <section>
    <CardTitleVue title="聊天室" />
    <ul>
      <li class="flex items-center justify-center pt-8" v-show="isLoading">
        載入中
        <IconLoading class="ml-1 h-4 w-4 animate-spin" />
      </li>
      <h2 v-show="!isLoading">私人聊天室</h2>
      <div class="text-center" v-show="!isLoading && chatList.length === 0">
        無聊天記錄
      </div>
      <template v-for="room in chatList" :key="room?.roomId">
        <ChatRoomListItem :room="room" />
      </template>
      <h2 v-show="!isLoading">公開群組聊天室</h2>
      <template v-for="room in chatGroupList" :key="room?.roomId">
        <ChatRoomListItem :room="room" :isGroup="true" />
      </template>
    </ul>
  </section>
</template>

<style></style>

<script setup>
import { reactive, onMounted, onBeforeUnmount, ref } from 'vue';
import { useToast } from 'vue-toastification';
import IconLoading from '@/components/icons/IconLoading.vue';
import CardTitleVue from '../../components/CardTitle.vue';
import ChatRoomListItem from '../../components/ChatRoomListItem.vue';
import eventBus from '@/utils/eventBus';
import { apiChat } from '@/utils/apiChat';
const toast = useToast();
const chatList = reactive([]);
// 需要一個建立群聊的API
const chatGroupList = reactive([]); // 搜尋房間為公開狀態的群聊室，並回傳相關列表
const isLoading = ref(true);
const updateChatRecord = ({ roomId, msg }) => {
  console.log('msg', msg)
  const targetIndex = chatList.findIndex((item) => item.roomId === roomId);
  targetIndex > -1 && (chatList[targetIndex].message = [msg]);
};

eventBus.on('updateChatRecord', updateChatRecord); // 即時更新聊天室最後一條訊息
const queryRoomList = async () => {
  try {
    isLoading.value = true;
    const res = await apiChat.record(); // 尋找使用者去過的所有聊天室列表
    const {
      data: { status, chatRecord },
    } = res;
    if (status) {
      Object.assign(chatList, chatRecord);
      console.log('chatList', chatList);
    }
  } catch (error) {
    const msg = error.response.data?.message;
    msg && toast.error(msg);
  } finally {
    isLoading.value = false;
  }
};

const updateOpenChatRecord = ({ roomId, msg }) => {
  console.log('msg', msg)
  const targetIndex = chatGroupList.findIndex((item) => item.roomId === roomId);
  targetIndex > -1 && (chatGroupList[targetIndex].message = [msg]);
};

eventBus.on('updateOpenChatRecord', updateOpenChatRecord); // 即時更新聊天室最後一條訊息

const queryOpenRoomList = async () => {
  try {
    isLoading.value = true;
    const res = await apiChat.openRecord();
    const {
      data: { status, chatRecord },
    } = res;
    if (status) {
      Object.assign(chatGroupList, chatRecord);
      console.log('chatGroupList', chatGroupList);
    }
  } catch (error) {
    const msg = error.response.data?.message;
    msg && toast.error(msg);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  queryRoomList();
  queryOpenRoomList();
});

onBeforeUnmount(() => {
  eventBus.off('updateChatRecord', updateChatRecord);
  eventBus.off('updateOpenChatRecord', updateOpenChatRecord);
});
</script>
