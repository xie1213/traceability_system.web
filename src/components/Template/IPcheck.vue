<template>
  <div style="display:inline-block;">
    <el-button  :type="pingStatusClass" disabled>{{ pingStatus }}</el-button>
    <el-button  :type="backStatusClass" disabled>{{ backStatus }}</el-button>
  </div>
</template>

<script setup>
import { ref,onBeforeUnmount } from 'vue';
import request from '@/service/request'
const pingStatus = ref('出荷链接中');
const backStatus = ref('后端链接中')

const backStatusClass = ref('danger')
const pingStatusClass = ref('danger');

async function getPingStatus() {
  try {
    const response = await request.get('api/Ping/status');
    const data = await response.data;
    //console.log(response.data);
    if (data !== '链接成功') {
      pingStatus.value = '出荷未链接';
      pingStatusClass.value = 'danger';
    }else{
      pingStatus.value = "出荷已链接";
      pingStatusClass.value = 'success';
    }
    backStatusClass.value ='success'
    backStatus.value = "后端链接成功"

    // 根据Ping状态设置样式
  } catch (error) {
    console.error('Error:', error);
    pingStatus.value = '出荷未链接';
    pingStatusClass.value = 'danger';

    backStatusClass.value ='danger'
    backStatus.value = "后端未链接"
  }
}
const intervalId = setInterval(getPingStatus, 30000); // 每50秒发送一次请求

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
// 在组件挂载后执行初始化操作
</script>
