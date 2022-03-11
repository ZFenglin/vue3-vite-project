import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
  {
    path: 'permission',
    name: 'permission',
    component: RouterView,
    meta: {
      title: '权限'
    },
    children: [
      {
        path: 'role',
        name: 'permission-role',
        component: () => import('@/views/permission/role/role-index.vue'),
        meta: {
          title: '角色权限'
        }
      },
      {
        path: 'admin',
        name: 'permission-admin',
        component: () => import('@/views/permission/admin/admin-index.vue'),
        meta: {
          title: '管理员权限'
        }
      }
    ]
  }

export default routes
