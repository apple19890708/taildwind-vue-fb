import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { storeToRefs } from 'pinia';
import { deviceType } from '@/utils/common';
import { useRoomStore } from '@/stores';
const useChat = () => {
  const roomStore = useRoomStore();
  const router = useRouter();
  const { room } = storeToRefs(roomStore);
  const toast = useToast();
  const isRoomExist = (roomId) => { //判斷聊天窗是否開啟
    const roomArr = room.value.map((item) => item.roomId);
    return roomArr.includes(roomId);
  };
  const handleRoom = (data) => {
    const { roomId, name } = data;
    const roomObj = { roomId, name, isOpen: true };
    const device = deviceType();
    console.log('device', device);
    console.log('isRoomExist', isRoomExist(roomId))
    if (device === 'desktop') {
      if (isRoomExist(roomId)) {
        return;
      }

      if (room.value.length === 3) {
        toast.error('您最多只能跟三個人聊天呦！');
        return;
      }
      roomStore.updateRoom([...room.value, roomObj]);
      return;
    }
    roomStore.updateRoom([roomObj]);
    console.log('roomStore', roomStore);
    router.push('/chat-room');
  };
  return {
    handleRoom,
  };
};

export default useChat;
