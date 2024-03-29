<template>
  <CardTitle title="修改個人資料"></CardTitle>
  <ul class="flex flex-wrap pl-6 text-center text-sm font-medium">
    <li>
      <a
        href="#"
        class="inline-block rounded-t-md border-x-2 border-t-2 border-black bg-white py-2 px-6 hover:bg-black hover:text-white"
        :class="tabName === 'editNickName' ? 'bg-black text-white' : ''"
        @click.prevent="changeTab('editNickName')"
      >
        暱稱修改
      </a>
    </li>
    <li>
      <a
        href="#"
        class="inline-block rounded-t-md border-t-2 border-r-2 border-black bg-white py-2 px-6 hover:bg-black hover:text-white"
        :class="tabName === 'resetPassword' ? 'bg-black text-white' : ''"
        @click.prevent="changeTab('resetPassword')"
      >
        重設密碼
      </a>
    </li>
  </ul>
  <div
    class="flex flex-col items-center rounded-xl border-2 border-black bg-white p-8 shadow-post"
  >
    <template v-if="tabName === 'editNickName'">
      <Avatar
        v-if="avatarPreviewInfo.base64"
        size="107"
        :imgUrl="avatarPreviewInfo.base64"
        class="mb-4 rounded-full border-2 border-black"
      />
      <Avatar
        v-else
        size="107"
        :imgUrl="changeUserProfile?.avatar"
        class="mb-4 rounded-full border-2 border-black"
      />
      <form ref="avatarForm" action="" class="text-center">
        <input
          ref="imageFile"
          type="file"
          name="photos"
          accept="image/png, image/jpeg, image/jpg"
          class="btn btn-dark mb-4 hidden px-8 py-1"
          @change="changeAvatar($event)"
        />
        <input
          v-show="avatarPreviewInfo.base64"
          type="reset"
          value="取消"
          class="mb-4 mr-4 cursor-pointer rounded border border-black bg-white px-10 py-1 text-black"
          @click="resetAvatar"
        />
        <input
          type="button"
          :value="avatarPreviewInfo.base64 === '' ? '上傳大頭照' : '再選一張'"
          class="mb-4 cursor-pointer rounded border border-black bg-black px-6 py-1 text-white"
          @click="imageFile.click()"
        />
        <p v-if="avatarPreviewInfo.hasError" class="mb-4 text-alert">
          Tip: {{ avatarPreviewInfo.errorMessage.size }}
        </p>
      </form>
      <form @submit.prevent="updateUserProfile" action="" class="w-10/12 lg:w-8/12">
        <div class="mb-1">
          <label for="nickName" class="mb-1 block">暱稱</label>
          <input
            v-model="changeUserProfile.name"
            type="text"
            name=""
            id="nickName"
            placeholder="請輸入暱稱"
            class="w-full border-2 border-black"
            maxlength="10"
            @blur="vProfile$.name.$touch"
          />
        </div>
        <div
          v-if="vProfile$.name.$errors.length > 0"
          class="font-azeret text-alert"
        >
          {{ vProfile$.name.$errors[0].$message }}
        </div>
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded border-2 border-black bg-warning py-4 text-black disabled:opacity-50"
        >
          <span v-show="!isSending">{{ updateMessage.profile }}</span>
          <IconLoading
            v-show="isSending"
            class="my-1 ml-1 h-4 w-4 animate-spin"
          ></IconLoading>
        </button>
      </form>
    </template>
    <template v-else>
      <form
        @submit.prevent="updateUserPwd"
        action=""
        class="flex-col items-center w-10/12 lg:w-8/12"
      >
        <div class="mb-1">
          <label for="newPassword" class="mb-1 block">輸入新密碼</label>
          <input
            v-model="changePassword.password"
            type="password"
            id="newPassword"
            placeholder="請輸入新密碼"
            class="w-full border-2 border-black"
            maxlength="20"
            required
            @blur="vPassword$.password.$touch"
          />
        </div>
        <div
          v-if="vPassword$.password.$errors.length > 0"
          class="font-azeret text-alert"
        >
          {{ vPassword$.password.$errors[0].$message }}
        </div>
        <div class="mb-1">
          <label for="checkPassword" class="mb-1 block">再次輸入</label>
          <input
            v-model="changePassword.confirmPassword"
            type="password"
            id="checkPassword"
            placeholder="再次輸入新密碼"
            class="w-full border-2 border-black"
            maxlength="20"
            @blur="vPassword$.confirmPassword.$touch"
            required
          />
        </div>
        <div
          v-if="vPassword$.confirmPassword.$errors.length > 0"
          class="font-azeret text-alert"
        >
          {{ vPassword$.confirmPassword.$errors[0].$message }}
        </div>
        <button
          type="submit"
          class="mt-8 flex w-full items-center justify-center rounded border-2 border-black bg-warning py-4 text-black disabled:opacity-50"
          :disabled="
            vPassword$.password.$errors.length > 0 ||
            vPassword$.confirmPassword.$errors.length > 0 ||
            changePassword.password === undefined
          "
        >
          <span v-show="!isSending">{{ updateMessage.password }}</span>
          <IconLoading
            v-show="isSending"
            class="my-1 ml-1 h-4 w-4 animate-spin"
          ></IconLoading>
        </button>
        <button
          ref="resetvPassword"
          type="button"
          class="hidden"
          @click="vPassword$.$reset()"
        >
          reset
        </button>
      </form>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import CardTitle from '@/components/CardTitle.vue';
import Avatar from '@/components/Avatar.vue';
import IconLoading from '@/components/icons/IconLoading.vue';
import useVuelidate from '@vuelidate/core';
import {
  required,
  minLength,
  maxLength,
  helpers,
  sameAs,
} from '@vuelidate/validators';
import { useUserStore } from '@/stores';
import { updateProfile, updatePassword } from '@/api'
import { useToast } from 'vue-toastification';
const toast = useToast();
const userStore = useUserStore();
const isSending = ref(false);
const updateMessage = reactive({
  profile: '送出更新',
  password: '重設密碼',
});
const changePassword = reactive({});
const resetvPassword = ref(null);
const updateUserPwd = async ($event) => {
  isSending.value = true;
  try {
    const res = await updatePassword(changePassword);
    if(res.status) {
      isSending.value = false;
      updateMessage.password = '更新完成';
      changePassword.password = '';
      changePassword.confirmPassword = '';
      resetStatusMessage();
    }
  } catch (error) {
    isSending.value = false;
    updateMessage.password = '更新失敗';
    resetStatusMessage();
  }
  $event.target.reset();
  resetvPassword.value.click();
};
const resetStatusMessage = () => {
  setTimeout(() => {
    updateMessage.profile = '送出更新';
    updateMessage.password = '重設密碼';
  }, 3000);
};
const nameRules = computed(() => ({
  name: {
    required: helpers.withMessage('暱稱必填', required),
    minLength: helpers.withMessage('暱稱至少 2 個字元以上', minLength(2)),
    maxLength: helpers.withMessage('暱稱不能高於 10 個字元', maxLength(10)),
  },
}));

const passwordRules = computed(() => ({
  password: {
    required: helpers.withMessage('密碼必填', required),
    alphaNum: helpers.withMessage(
      '密碼需至少 8 碼以上，並英數混合',
      helpers.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, /\d/)
    ),
  },
  confirmPassword: {
    required: helpers.withMessage('密碼必填', required),
    sameAsPassword: helpers.withMessage(
      '密碼不一致',
      sameAs(changePassword.password)
    ),
  },
}));


// Change tab
const tabName = ref('editNickName');
const changeTab = (name) => {
  tabName.value = name;
};

// Profile
const changeUserProfile = ref({ ...userStore.user });
watch(userStore, (newValue) => {
  changeUserProfile.value = { ...newValue.user };
});
const vProfile$ = useVuelidate(nameRules, changeUserProfile);
const vPassword$ = useVuelidate(passwordRules, changePassword);
const imageFile = ref(null);
const avatarForm = ref(null);
const avatarPreviewInfo = reactive({
  base64: '',
  errorMessage: {
    size: '檔案需在 2 MB 以內',
  },
  hasError: false,
});

const changeAvatar = (e) => {
  const currentImg = e.target.files[0];
  if (currentImg.size >= 2 * 1024 * 1024) {
    return (avatarPreviewInfo.hasError = true);
  }
  const reader = new FileReader();
  reader.readAsDataURL(currentImg);
  reader.onload = (e) => {
    avatarPreviewInfo.hasError = false;
    avatarPreviewInfo.base64 = e.target.result;
  };
}

const resetAvatar = () => {
  avatarForm.value.reset();
  avatarPreviewInfo.base64 = '';
  avatarPreviewInfo.hasError = false;
};

const updateUserProfile = async() => {
  try {
    const avatar = imageFile.value.files[0];
    const form = new FormData();
    isSending.value = true;
    form.append('photo', avatar);
    form.append('name', changeUserProfile.value.name.trim());
    const res = await updateProfile(form);
    console.log('res', res)
    if (res.status === 'success') {
      toast.success('更新個人資料成功');
      const userInfo = {
        name: res.resInfo.name,
        avatar: res.resInfo.photo,
        role: res.resInfo.role,
        id: res.resInfo._id,
      }
      userStore.updateUser(userInfo);
      isSending.value = false;
    }
  } catch (error) {
    console.log('error', error)
    toast.success('更新個人資料成功失敗');
    isSending.value = false;
  }
}


// Password


</script>