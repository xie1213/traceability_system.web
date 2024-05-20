<template>
  <TopTabs/>
</template>

<script setup>
import TopTabs from './components/TopTabs.vue'

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

/* 隐藏垂直滚动条 */
/* .container {
  overflow-y: hidden;
} */
</style>
