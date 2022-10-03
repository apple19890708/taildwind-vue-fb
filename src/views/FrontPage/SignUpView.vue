<template>
  <ul class="w-full">
    <li class="mb-8 w-full text-center text-2xl font-bold">註冊新帳號</li>
    <li class="mb-4 w-full">
      <input
        class="w-full border-2 border-black py-4 px-6 font-azeret"
        type="text"
        placeholder="暱稱"
        v-model="form.name"
        @blur="v$.name.$touch"
      />
      <div v-if="v$.name.$errors.length > 0" class="font-azeret text-alert">
        {{ v$.name.$errors[0].$message }}
      </div>
    </li>
    <li class="mb-4 w-full">
      <input
        class="w-full border-2 border-black py-4 px-6 font-azeret"
        type="email"
        placeholder="Email"
        v-model="form.email"
        @blur="v$.email.$touch"
      />
      <div v-if="v$.email.$errors.length > 0" class="font-azeret text-alert">
        {{ v$.email.$errors[0].$message }}
      </div>
    </li>
    <li class="mb-8 w-full">
      <input
        class="w-full border-2 border-black py-4 px-6 font-azeret"
        type="password"
        placeholder="Password"
        v-model="form.password"
        @blur="v$.password.$touch"
      />
      <div v-if="v$.password.$errors.length > 0" class="font-azeret text-alert">
        {{ v$.password.$errors[0].$message }}
      </div>
    </li>
    <li class="mb-8 w-full">
      <input
        class="w-full border-2 border-black py-4 px-6 font-azeret"
        type="password"
        placeholder="ConfirmPassword"
        v-model="form.confirmPassword"
        @blur="v$.confirmPassword.$touch"
      />
      <div v-if="v$.confirmPassword.$errors.length > 0" class="font-azeret text-alert">
        {{ v$.confirmPassword.$errors[0].$message }}
      </div>
    </li>
    <li class="mb-2 text-center text-alert">
      <p>{{ errorMessage }}</p>
    </li>
    <li class="mb-4 w-full">
      <button
        class="flex w-full items-center justify-center rounded-lg border-2 border-black bg-primary py-2 text-lg text-white hover:bg-warning hover:text-black disabled:bg-disabled"
        @click="signUpMember"
        :disabled="isSending"
      >
        <span>註冊</span>
        <IconLoading
          v-show="isSending"
          class="ml-1 h-4 w-4 animate-spin"
        ></IconLoading>
      </button>
    </li>
    <li class="text-center">
      <router-link to="sign-in">登入</router-link>
    </li>
  </ul>
</template>


<script setup>
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, helpers, sameAs } from '@vuelidate/validators';
import IconLoading from '@/components/icons/IconLoading.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { signUp } from '@/api'
const router = useRouter();
const errorMessage = ref('');
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});
const rules = computed(() => ({
  name: {
    required: helpers.withMessage('暱稱必填', required),
    minLength: helpers.withMessage('暱稱至少 2 個字元以上', minLength(2)),
  },
  email: {
    required: helpers.withMessage('email 必填', required),
    email: helpers.withMessage('email 格式錯誤', email),
  },
  password: {
    required: helpers.withMessage('密碼必填', required),
    alphaNum: helpers.withMessage(
      '密碼需至少 8 碼以上，並英數混合',
      helpers.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, /\d/)
    ),
  },
  confirmPassword: {
    required: helpers.withMessage('確認密碼必填', required),
    sameAsPassword: helpers.withMessage(
      '密碼不一致',
      sameAs(form.value.password)
    ),
  },
}));

const v$ = useVuelidate(rules, form.value);
const isSending = ref(false);
function resetData() {
  form.value.email = '';
  form.value.password = '';
  isSending.value = false;
}

const signUpMember = async () => {
  const valid = await v$.value.$validate();
  if (!valid) return;
  isSending.value = true;
  try {
    const res = await signUp(form.value);
    console.log('res', res)
    if(res.status) {
      resetData();
      alert(res.message);
      router.push({ name: 'sign-in' });
      isSending.value = false;
    }
  } catch (error) {
    isSending.value = false;
    errorMessage.value = error.message;
    resetData();
    setTimeout(() => {
      errorMessage.value = '';
    }, 2000);
  }
};

</script>