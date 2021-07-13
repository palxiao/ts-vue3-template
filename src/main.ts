import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'

createApp(App).use(store).use(router).use(utils).mount('#app')

import '@/assets/styles/index.scss';