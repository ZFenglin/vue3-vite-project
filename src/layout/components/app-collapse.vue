<template>
  <div class="app-collapse">
    <el-icon @click="setIsCollapse">
      <expand v-show="isCollapse" />
      <fold v-show="!isCollapse" />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import {
  Expand,
  Fold
} from '@element-plus/icons-vue'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => store.state.isCollapse)

const setIsCollapse = () => {
  store.commit('setIsCollapse')
}
</script>

<style lang="scss" scoped>
.app-collapse{
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 20px;
}
</style>
