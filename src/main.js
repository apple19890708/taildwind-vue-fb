import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import './index.css'
import router from './router'
import store from './stores'

createApp(App)
	.use(VueAxios, axios)
  .use(router)
	.use(store)
	.mount('#app')
