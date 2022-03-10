<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from './components/app-menu.vue'
</script>

<style lang="scss" scoped>
 .el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}

 .el-aside {
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
