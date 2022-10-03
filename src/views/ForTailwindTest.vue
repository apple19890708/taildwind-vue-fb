<template>
	<div class="p-4 h-screen lg:p-8">
		<div class="flex justify-between items-start lg:max-w-[1280px] lg:mx-auto">
			<div>
				<h1 class="text-4xl text-gray-800 tracking-wide">Start Now</h1>
				<p class="text-4xl text-gray-800 tracking-wide">
					your
					<span class="font-bold text-black">free plan.</span>
				</p>
			</div>
			<button class="text-primary-test bg-primary py-2 px-4 rounded-sm tracking-wide ring-primary ring-offset-2 active:ring-4 duration-100">Login</button>
		</div>
		<div class="mt-8 lg:grid lg:grid-cols-4 lg:justify-evenly lg:gap-8 lg:max-w-[1280px] lg:mx-auto">
			<!-- card  -->
			<div 
				@click="clickIdx = idx"
				:class="['w-full p-8 mt-8 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 duration-300', { 'bg-black text-white': clickIdx === idx }]"
				v-for="(card, idx) in cardList" :key="idx"
			>
				<p class="text-3xl font-bold">
					Free $0
					<span class="text-base text-gray-500 font-medium">per month</span>
				</p>
				<div class="w-[30px] h-[3px] bg-primary mt-4"></div>
				<p class="font-bold mt-8 text-lg">Plan includes</p>
				<ul class="text-lg mb-20">
					<li v-for="(card, idx) in cardConetntList" :key="idx" class="flex items-center mt-6">
						<IconArrowRightVue class="h-5 w-5 mr-4 text-purple-500" />
						{{ card.text }}
					</li>
				</ul>
				<a href="#" :class="['w-full text-center block mb-8 font-bold', { 'text-white': clickIdx === idx }]" class="">view all the fetaures</a>
				<button class="w-full text-primary-test bg-orange-400 py-2 px-4 rounded-sm tracking-wide ring-primary ring-offset-2 active:ring-4 duration-100">Subscribe</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import IconArrowRightVue from '@/components/icons/IconArrowRight.vue';
const clickIdx = ref(null);
const cardList = reactive([
	{text: '111'},
	{text: '222'},
	{text: '333'},
	{text: '444'},
	{text: '444'},
]);
const cardConetntList = reactive([
	{text: '111'},
	{text: '222'},
	{text: '333'},
	{text: '444'},
]);

</script>