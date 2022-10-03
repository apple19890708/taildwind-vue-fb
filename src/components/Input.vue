<template>
	<div>
		<input
			v-model="modelValue"
			@input="changeText"
			class="w-full border-none focus:ring-2 focus:ring-primary"
			type="text"
		/>
	</div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: '',
  }
});
const emit = defineEmits(['update:modelValue']);

const changeText = (event) => {
	emit('update:modelValue', event.target.value);
}

</script>