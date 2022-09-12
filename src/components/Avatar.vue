<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: 'avatars/user_default.png',
  },
  size: {
    type: String,
    default: '40',
  },
});

function getImageUrl(url) {
  if (url.startsWith('http')) return url;
  return new URL(url, import.meta.url).href;
}
</script>

<template>
  <div
    class="overflow-hidden rounded-full"
    :style="`width: ${size}px; height: ${size}px;`"
  >
    <img
      class="w-full object-cover"
      :src="imgUrl"
      alt="user's avatar"
    />
  </div>
</template>
