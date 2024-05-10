<template>
  <div style="display:inline-block;">
    <el-button :class="pingStatusClass == 'danger' ? 'pingDanger' : 'pingSuccess'" disabled>{{ pingStatus }}</el-button>
    <el-button :class="backStatusClass == 'danger' ? 'pingDanger' : 'pingSuccess'">{{ backStatus }}</el-button>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount,onMounted } from 'vue';
import request from '@/service/request'
const pingStatus = ref('出荷链接中');
const backStatus = ref('后端链接中')

const backStatusClass = ref('danger')
const pingStatusClass = ref('danger');

async function getPingStatus() {
    await request.get('api/Ping/status')
      .then((res) => {
        if (res.data !== '链接成功') {
          pingStatus.value = '出荷未链接';
          pingStatusClass.value = 'danger';
        } else {
          pingStatus.value = "出荷已链接";
          pingStatusClass.value = 'success';
        }
        backStatusClass.value = 'success'
        backStatus.value = "后端链接成功"
      })
      .catch((err) => {
        console.error('Error:', err);
        pingStatus.value = '出荷未链接';
        backStatus.value = "后端未链接"
        pingStatusClass.value = 'danger';
        backStatusClass.value = 'danger'
      })
    // 根据Ping状态设置样式
  }

const intervalId = setInterval(getPingStatus, 1000); // 
onBeforeUnmount(() => {
  clearInterval(intervalId);
});

onMounted(() => {
  getPingStatus()

});
// 在组件挂载后执行初始化操作
</script>

<style>
.pingDanger {
  background-color: #f56c6c !important;
  color: white !important;
}

.pingSuccess {
  background-color: #7dcc57 !important;
  color: white !important;
}
</style>
