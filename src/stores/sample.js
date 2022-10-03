// import { defineStore } from "pinia";

// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });

// componsition 寫法
export const useCounterStore = defineStore('counter', () => {
	const counter = ref(0);
	const doubleCount = computed(() => {
		return counter.value * 2;
	});
	const increment = () => {
		counter.value++
	};
	return {
		counter,
		doubleCount,
		increment
	}
})
