<template>
  <h1>login</h1>
  <p>{{ info }}</p>
</template>
<script setup lang="ts">
import { getUserInfo } from '@/api/user'
import { onMounted, ref } from 'vue'
// type 可以用于指定传入的是类型
import type { IUserInfo } from '@/api/types/user'

const info = ref<IUserInfo|null>(null)

onMounted(() => {
  getUserInfo().then(res => {
    info.value = res
  })
})
</script>
