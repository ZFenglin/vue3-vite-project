<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">
      主页
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/permission/role' }">
      角色
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-breadcrumb{
    height: 100%;
    display: flex;
    align-items: center;
}
</style>
