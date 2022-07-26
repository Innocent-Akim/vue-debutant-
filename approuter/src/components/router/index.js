import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/Home.vue'
import dashboard from '../pages/Dashboard.vue'
import login from '../pages/Login.vue'
import settings from '../pages/Settings.vue'

const routes = [
  {
    path: '/',
    component: home,
    name: 'home',
  },
  {
    path: '/dashboard',
    component: dashboard,
    name: 'dashboard',
  },
  {
    path: '/login',
    component: login,
    name: 'login',
  },
  {
    path: '/settings',
    component: settings,
    name: 'settings',
  },
]

export default createRouter({ history: createWebHistory(), routes })
