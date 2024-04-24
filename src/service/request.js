// request.js
import axios from 'axios'
const apiClient = axios.create({
  // baseURL: 'http://localhost:5000/',// 测试环境
  baseURL: 'http://192.168.30.1:5000'
  // baseURL: 'http://172.31.13.200:5000/'

  //  baseURL:"abc"
})

// 添加请求拦截器
apiClient.interceptors.request.use(config => {
  // 在请求发送前做一些事情
  config.metadata = {startItme:new Date()}
  
  return config;  
}, error => {
  return Promise.reject(error);
})

// 添加响应拦截器  
apiClient.interceptors.response.use(response => {
  // 对响应数据做些事情
  response.config.metadata.endTime = new Date()
  response.duration = response.config.metadata.endTime - response.config.metadata.startItme
  return response 
}, error => {
  return Promise.reject(error);
})

export default apiClient;
