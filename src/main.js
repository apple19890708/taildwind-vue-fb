import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import './index.css'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// vue-easy-lightbox
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
createApp(App)
	.use(VueAxios, axios)
	.use(VueEasyLightbox)
	.use(pinia)
  .use(router)
	.mount('#app')
