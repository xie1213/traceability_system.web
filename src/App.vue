<template>
  <TopTabs />
<!-- <TestVue /> -->
  <!-- <el-date-picker v-model="value2" type="datetimerange" format="YYYY-MM-DD HH:mm:ss" date-format="YYYY/MM/DD"
    time-format="HH:mm:ss" @calendar-change="handleDateChange" @change="checkBtn" :default-time="value2" />
    <el-cascader v-model="selectedOption" :options="options" @change="handleChange" />
    <div style="display: inline-block;">
    <span style="margin-left:20px;">单品码:</span>
    <el-input v-model="input1" size="large" placeholder="Please Input" style="display: inline;" />
    <span>箱码:</span>
    <el-input v-model="input2" size="large" placeholder="Please Input" style="display: inline;" />
    <span>结果:</span>
    <el-input v-model="input3" size="large" placeholder="Please Input" style="display: inline;" />
  </div>
<el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="date" label="箱码" width="180" />
    <el-table-column prop="name" label="单品码" width="180" />
    <el-table-column prop="address" label="重量" />
    <el-table-column prop="restule" label="结果" />
    <el-table-column prop="startDate" label="采集时间" />
  </el-table> -->
</template>

<script setup>
import TopTabs from './components/TopTabs.vue'
// import getAllData from './components/GetAllData.vue';
// import TestVue from './components/TestVue1.vue'
// import * as imports from './service/Import'
//防止页面数据过多页面卡死
//import {ref} from 'vue'
//const value2 = ref([new Date(new Date - 60 * 60 * 1000), new Date()]) // 默认显示当前时间往前1小时
const debounce = (fn, delay) => {
let timer = null;

return function () {

  let context = this;

  let args = arguments;

  clearTimeout(timer);

  timer = setTimeout(function () {

    fn.apply(context, args);

  }, delay);

}

}

const _ResizeObserver = window.ResizeObserver;

window.ResizeObserver = class ResizeObserver extends _ResizeObserver {

  constructor(callback) {

    callback = debounce(callback, 16);

    super(callback);

  }

}

// const tableData = [
//   {
//     id: "1",
//     date: '20160503',
//     name: '03',
//     address: '11.5',
//     restule: "ok",
//     startDate:"2024/01/12 12:12:12",
//     endDate:"2024/01/12 12:13:12"
//   },
//   {
//     id: "1",
//     date: '20160503',
//     name: '03',
//     address: '11.5',
//     restule: "ok",
//     startDate:"2024/01/12 12:12:12",
//     endDate:"2024/01/12 12:13:12"
//   },
//   {
//     id: "1",
//     date: '20160503',
//     name: '03',
//     address: '11.5',
//     restule: "ok",
//     startDate:"2024/01/12 12:12:12",
//     endDate:"2024/01/12 12:13:12"
//   },
//   {
//     id: "1",
//     date: '20160503',
//     name: '03',
//     address: '11.5',
//     restule: "ok",
//     startDate:"2024/01/12 12:12:12",
//     endDate:"2024/01/12 12:13:12"
//   }]

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
