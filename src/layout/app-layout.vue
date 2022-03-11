<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppCollapse />
        <AppBreadcrumb />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppBreadcrumb from './components/app-breadcrumb.vue'
import AppCollapse from './components/app-collapse.vue'
import AppMenu from './components/app-menu.vue'
</script>

<style lang="scss" scoped>
 .el-header {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  display: flex;
}

 .el-aside {
   width: auto;
  background-color: #304156;
  color: var(--el-text-color-primary);

}

 .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.el-container{
  height: 100vh;
}

</style>
