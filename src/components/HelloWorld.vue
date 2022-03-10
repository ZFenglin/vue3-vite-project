
<template>
  <h1>{{ msg }}</h1>
  <h1>props.msg推荐{{ props.msg }}</h1>
  <button
    type="button"
    @click="increment"
  >
    count is: {{ count }}
  </button>
</template>

<script  lang="ts" setup>
// 标签增加setup，则内部代码默认执行在setup中
import { ref, PropType } from 'vue'
interface User{
  name:string,
  age:number
}

const props = defineProps({
  // 但是不要和本地重名，重名则本地为主
  msg: {
    type: String,
    required: true
  },
  obj: {
    type: Object as PropType<User>,
    required: true // 必须要设置为必填项或者给一个默认值
  }
})

const emit = defineEmits(['increment'])

const count = ref(100)
const increment = () => {
  console.log(props.msg)
  count.value++
  emit('increment')
}
</script>

<!-- <script  lang="ts">
import { ref, defineComponent, PropType } from 'vue'

interface User{
  name:string,
  age:number
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    obj: {
      type: Object as PropType<User>,
      required: true // 必须要设置为必填项或者给一个默认值
    }
  },

  setup (props) {
    const count = ref(0)
    // const filtered = props.msg.filter(p => p.value) // 会校验string上不存在filter

    // 泛型定义数据格式
    const foo = ref<{a:Number, b: string}|null>(null)
    foo.value = {
      a: 1,
      b: '1'
    }
    // DOM模板引用
    const title = ref<HTMLHeadElement|null>(null)

    // onMounted(() => {
    //   console.log(title.value)
    // })

    return {
      count,
      foo,
      title
    }
  }
})
</script> -->
