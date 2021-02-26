import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/user/Login.vue'
import Signup from '@/views/user/Signup.vue'
import ColumnDetail from '@/components/column/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/column/:id',
    name: 'column',
    component: ColumnDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
