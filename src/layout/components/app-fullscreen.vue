<template>
  <div class="app-fullscreen">
    <el-icon @click="toggleFullScreen">
      <full-screen />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import {
  FullScreen
} from '@element-plus/icons-vue'
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

</script>

<style lang="scss" scoped>
.app-fullscreen{
    height: 100%;
    display: flex;
    align-items: center;
}
</style>
