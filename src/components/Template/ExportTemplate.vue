<template>
  <span v-if="tableName !== '出荷数据'">序列号:</span>
  <el-input
    v-if="tableName !== '出荷数据'"
    v-model="input2"
    clearable
    @change="getSerialNo"
    size="large"
    placeholder="Please Input"
    style="display: inline"
  />
  <el-button @click="exportData" type="primary">导出</el-button>
  <el-button @click="handleButtonClick" :disabled="disSel" type="primary"
    >条件查询</el-button
  >
</template>

<script setup>
import {defineProps} from 'vue'
// import { exportData } from "@/service/GetDataMethod/utils";

defineProps({
  tableName: String,
});



// console.log(props);
</script>
