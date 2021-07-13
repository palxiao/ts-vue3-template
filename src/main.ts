import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import Vant from './utils/widgets/vantConfig';

createApp(App).use(store).use(router).use(utils).use(Vant).mount('#app')

import '@/assets/styles/index.scss';