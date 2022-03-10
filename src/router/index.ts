import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import AppLayout from '@/layout/app-layout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // '' 则为默认子路由
        name: 'home',
        component: () => import('../views/home/home-index.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login-index.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: routes
})

export default router
