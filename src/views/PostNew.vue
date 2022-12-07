<template>
  <CardTitle title="張貼動態"></CardTitle>

  <div class="rounded-lg border-2 border-black bg-white p-8 shadow-post">
    <p>貼文內容</p>
    <textarea
      name="postContent"
      rows="6"
      placeholder="輸入您的貼文內容"
      class="mt-1 w-full rounded-none border-2 px-4 py-3 focus:border-black focus:shadow-transparent"
      @focus="isWarnHint = false"
      v-model="postContent"
    ></textarea>
    <div
      class="relative my-4 w-32 gap-y-8 rounded bg-black py-1 px-8 text-white"
    >
      <input
        ref="uploadImages"
        type="file"
        :accept="postValidates.fileType.join(', ')"
        class="absolute left-0 z-10 w-full cursor-pointer opacity-0"
        @change="previewImage"
        multiple
      />
      <span>上傳圖片</span>
    </div>
    <div
      :class="{
        'items-center justify-center py-4': postData.previews.length === 0,
        'grid-cols-2': postData.previews.length > 1,
      }"
      class="mb-4 grid w-full overflow-hidden rounded-lg border-2 border-black"
    >
      <template v-if="postData.previews.length > 0">
        <div
          v-for="(image, index) of postData.previews"
          class="relative aspect-video hover:brightness-110"
          :key="index"
        >
          <img :src="image" />
        </div>
      </template>
    </div>
    <div class="text-center">
      <div v-show="isWarnHint" class="text-red_x -mt-2 mb-2 mb-1 text-sm">
        圖片檔案過大，僅限 1mb 以下檔案<br />圖片格式錯誤，僅限 JPG、PNG 圖片
      </div>
      <button
        class="rounded-lg border-2 border-black bg-subtitle py-3 px-32 font-semibold hover:bg-warning hover:text-black hover:shadow-btn"
        @click.prevent="submitPost()"
      >
        送出貼文
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import CardTitle from '../components/CardTitle.vue';
import { useUserStore } from '@/stores';
import { postNewPost } from '@/api'
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const uploadImages = ref();
const postContent = ref("");
const router = useRouter();

const postValidates = {
  contentLength: 1,
  fileNum: 10,
  fileSize: 1024 * 1024,
  fileType: ['image/jpg', 'image/jpeg', 'image/png'],
};

const postData = reactive({
  isWarnHint: false,
  previews: [],
  images: [],
});

// const refData = toRefs(data);
const previewImage = (e) => {
  if (!uploadImages.value.files) {
    return;
  }
  for (const file of uploadImages.value.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      postData.previews.push(e.target.result);
    };
    reader.readAsDataURL(file);
    postData.images.push(file);
  }
};

const submitPost = async () => {
  postData.isWarnHint = true;
  try {
    const form = new FormData();
    form.append('content', postContent.value);
    postData.images.forEach((image) => {
    form.append('photos', image);
  });
    const res = await postNewPost(form);
    router.push({ name : 'posts'});
  } catch (error) {
    console.log('error', error)
  }
};

</script>

<style lang="scss">
.shadow-block{
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 2px solid #000040;
    bottom: 2px;
    left: 2px;
    z-index: -1;
    box-sizing: content-box;
  }
}
</style>
