import { createApp } from 'vue'
import router from './components/router'
import App from './App.vue'
import './index.css'

createApp(App).use(router).mount('#app')
