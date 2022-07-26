import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Dashboard from '../pages/Dashboard.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component:Home
    },
    {
        path: '/about',
        name: 'about',
        component:About
    },
    {
        path: '/dashboard',
        name: 'dashboard'    ,
        component:Dashboard
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})