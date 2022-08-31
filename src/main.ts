import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import { createApp } from 'vue'
import { createHead } from "@vueuse/head"
import './assets/css/index.css'

const head = createHead()
const pinia = createPinia()


createApp(App)
    .use(router)
    .use(head)
    .use(pinia)
    .mount('#app')
