
<template>
  <h1>{{ props.msg }}</h1>
  <abc />
  <Foo />
</template>

<script  lang="tsx" setup>
import Foo from './foo'
const abc = <h1>ABC组件</h1>
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
