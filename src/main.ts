import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // 全局样式

const app = createApp(App)
app.use(router) // 注册路由
app.mount('#app')
