import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/config'
import pinia from '@/stores/config'
import '@/assets/main.scss'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
