<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/login">
      <span>登录</span>
    </el-menu-item>
    <el-sub-menu>
      <template #title>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        角色
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        管理
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
