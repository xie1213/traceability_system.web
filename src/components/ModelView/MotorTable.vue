<template>
  <!-- <SelectTemp :selectName="tableName" @selColName="getSelName" /> -->
  <TimeTemplate @childEvent="getTimeDate" :tableName="tableName" />
  <SelectTemp :selectName="tableName" @selColName="getSelName" />

  <span v-if="showText">序列号:</span>
  <el-input v-if="showText" v-model="input2" clearable @change="getSerialNo" placeholder="Please Input"
    style="display: inline" />
  <el-button @click="exportBtn" :disabled="disbtn" type="primary">导出</el-button>
  <el-button @click="handleButtonClick" type="primary">条件查询</el-button>
  <btnIPCheck />

  <component :is="selectedComponent" :tableData="tableData" />
  <vxe-pager v-bind="pagerConfig" @page-change="handlePageChange"></vxe-pager>
</template>

<script setup>
import { defineProps, shallowRef, computed, reactive,onMounted,onBeforeUnmount } from "vue";
import { TimeTemplate, ref, watchEffect, SelectTemp, apiClient } from "@/service/Import"
import { TableConfig, realList, exportData, pagerConfig } from "@/service/GetDataMethod/utils"
import { ElMessage } from 'element-plus'
// import newSelTemp from "../Template/newSelTemp.vue";
import btnIPCheck from '@/components/Template/IPcheck.vue';
import MortorTemp from "./MortorTemp.vue";
import RotorTemp from "./RotorTemp.vue";
import EntireTemp from "./EntireTemp.vue";
import GearTemp from "./GearTemp.vue";
import RRTemp from "./RRTemp.vue";
import TaTemp from "./TaTemp.vue";
import shipOut from "./shipOut.vue";
const props = defineProps({
  tableName: String,
})
const requestData = reactive({
  TimeDate: [],
  tableName: "",
  selColName: [],
  SerialNo: ""
});

const tableData = ref([]);
const disSel = ref(true),
  input2 = ref(),
  disbtn = ref(true),
  showText = ref(true)

//获取时间
const getTimeDate = (e) => {
  requestData.TimeDate = e.value;
  if (e.investigation !== "恢复") {
    realList(requestData, tableData);
  }
  // startTimer()
};

//获取下拉框
const getSelName = (e) => {

  let selColName = [] 
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== "") {
      selColName.push(e[i])
    }
  }
  requestData.selColName = selColName;
  console.log(requestData.selColName);

  disSel.value = false

}
//检查序列号
const getSerialNo = () => {
  requestData.SerialNo = input2.value;
  disSel.value = false
}

//数据导出
const exportBtn = () => {
  exportData(props.tableName)
}

// 条件查询
const handleButtonClick = () => {
  console.log(requestData);
  if (requestData.selColName == '' && input2.value == '') {
    ElMessage({
      type: 'info',
      message: `请至少输入一项`,
    }) // 点击确定后的回调
    return;
  }
  realList(requestData, tableData);
}


const selectedComponent = computed(() => {
  switch (props.tableName) {
    case 'MotorTable':
      return MortorTemp;
    case 'RotorTable':
      return RotorTemp;
    case '全部数据':
      return EntireTemp;
    case 'GearTable':
      return GearTemp;
    case 'Rrtable':
      return RRTemp;
    case 'Tatable':
      return TaTemp;
    case '出荷数据':
      return shipOut;
    default:
      return null;
  }
});

const handlePageChange = (e) => {
  pagerConfig.currentPage = e.currentPage
  //pagerConfig.pageSize = e.pageSize
  //pagerConfig.currentPage = e.currentPage
  if (tableData.value.length == 0) {
    //requestData.limit = e.pageSize
    realList(requestData, tableData);
    return;
  }
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        //const startTime = Date.now()
        TableConfig.loading = true
        let response;
        response = await apiClient.get(`api/DBTest/GetRedis?page=${e.currentPage}&limit=${e.pageSize}&tableName=${props.tableName}`);

        tableData.value = response.data.data; // Populate the dataList array with the retrieved data
        //gridRef.value.reloadData(dataList.value)
        TableConfig.loading = false
        resolve()
      } catch (error) {
        console.error('Error fetching table data:', error);
        reject(error); // Handle potential error scenarios
      }
    }, 100);
  })
}
const oldTableName = shallowRef(props.tableName);
//监听表名刷新
watchEffect(() => {
  requestData.tableName = props.tableName;
  if (tableData.value.length !== 0) {
    disbtn.value = false
  } else {
    pagerConfig.total = 0
  }
  if (oldTableName.value != props.tableName) {
    tableData.value = [];
    oldTableName.value = props.tableName
    // pagerConfig.currentPage = 1;
    input2.value = ''
    pagerConfig.total = 0
    requestData.SerialNo = "";
    requestData.selColName = []
    requestData.TimeDate = [new Date(new Date() - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()]
  }
});

  const intervalTime = 3600000;
  let timer = null;
  const refreshPage = () => {
    console.log('页面已刷新');
    requestData.TimeDate = [new Date(new Date() - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()]
    tableData.value = []
    console.log(requestData);
    // 在此处添加你需要的页面刷新逻辑，例如重新获取数据等操作
    realList(requestData, tableData);

  };
  
  const startTimer = () => {
    timer = setInterval(() => {
      refreshPage();
    }, intervalTime);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

   onMounted(() => {
    startTimer();
  });

  onBeforeUnmount(() => {
    stopTimer();
  });

</script>

<style></style>