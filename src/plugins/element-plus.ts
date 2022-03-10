// 安装
// npm install element-plus --save
// 按需引入
// npm install -D unplugin-vue-components unplugin-auto-import

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import en from 'element-plus/es/locale/lang/en'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ElementPlus, {
      locale: en
    })
  }
}
