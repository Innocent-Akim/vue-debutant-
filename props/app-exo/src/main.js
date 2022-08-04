import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './components/routes/routes.vue'

createApp(App).use(router).mount('#app')
