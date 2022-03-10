import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
    count: number,
    name: String
  }

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      count: 1,
      name: 'zfl'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
