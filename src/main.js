import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import axios from 'axios'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// import router from "@/router"
import 'vant/lib/index.css'; 
import App from './App.vue';

axios.defaults.baseURL="/api"
const app = createApp(App);
app.use(ElementPlus,{locale:zhCn})
app.use(VXETable)
// app.use(router).mount('#app')
app.mount('#app')

