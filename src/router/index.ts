import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import AppLayout from '@/layout/app-layout.vue'

import permissionRoutes from './modules/permission'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // '' 则为默认子路由
        name: 'home',
        component: () => import('../views/home/home-index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login-index.vue')
      },
      permissionRoutes
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: routes
})

export default router
