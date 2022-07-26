
import { createRouter, createWebHashHistory } from 'vue-router'
import about from '../pages/about.vue'
import dashboard from '../pages/dashboard.vue'
import login from '../pages/login.vue'
import news from '../pages/news.vue'

const routes = [
    { path: '/', component: dashboard, name: 'dashboard' },
    { path: '/news', component: news, name: 'news' },
    { path: '/login', component: login, name: 'login' },
    { path: '/about', component: about,name: 'about'}
];

export default createRouter({
    history: createWebHashHistory(),
    routes
})