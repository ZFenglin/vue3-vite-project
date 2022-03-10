import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home-index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes: routes
})

export default router
