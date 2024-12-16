import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import axios from "axios";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

// import router from "@/router"
import "vant/lib/index.css";
import App from "./App.vue";
let host = window.location.host; // 主机
let reg = /^localhost+/;
if (reg.test(host)) {
    // 若本地项目调试使用
    console.log("本地");
    axios.defaults.baseURL = "http://172.31.13.200:5000";
    // axios.defaults.baseURL = "http://192.168.1.29:5000";
}
const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(VXETable);
// app.use(router).mount('#app')
app.mount("#app");
