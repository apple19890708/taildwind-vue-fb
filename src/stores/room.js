import { defineStore } from 'pinia';
export default defineStore('room', {
  state: () => ({
    room: [],
  }),
  persist: true,
  actions: {
    updateRoom(roomArr) {
      this.room = roomArr;
    },
  },
});
