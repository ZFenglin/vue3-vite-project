<template>
  <h1>home</h1>
  <p>{{ store.state.name }}</p>
</template>
<script setup lang="ts">
import { useStore } from '../../store/index'
const store = useStore()
console.log(store.state.count)
</script>
