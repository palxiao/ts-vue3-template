import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import Vant from './utils/widgets/vantConfig';

import 'normalize.css/normalize.css'
import '@/assets/styles/index.scss';

createApp(App).use(store).use(router).use(utils).use(Vant).mount('#app')

