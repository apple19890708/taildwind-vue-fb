import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import './index.css'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App)
	.use(VueAxios, axios)
	.use(pinia)
  .use(router)
	.mount('#app')
