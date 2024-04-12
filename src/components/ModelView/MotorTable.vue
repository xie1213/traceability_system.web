<template>
  <!-- <SelectTemp :selectName="tableName" @selColName="getSelName" /> -->
  <!-- <TimeTemplate @childEvent="getTimeDate" :tableName="tableName" /> -->
  <el-date-picker class="timeStyle" v-model="value2" type="datetimerange" format="YYYY-MM-DD HH:mm:ss"
    date-format="YYYY/MM/DD" time-format="HH:mm:ss" @calendar-change="handleDateChange" @change="checkBtn"
    :default-time="value2" :clearable="false" />

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
import { defineProps, shallowRef, computed, reactive, onMounted, onBeforeUnmount } from "vue";
import { ref, watchEffect, SelectTemp, apiClient } from "@/service/Import"
import { TableConfig, realList, exportData, pagerConfig } from "@/service/GetDataMethod/utils"
import { ElMessageBox } from 'element-plus'
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
//传参
const requestData = reactive({
  TimeDate: [],
  tableName: "",
  selColName: [],
  SerialNo: ""
});

//表格数据
const tableData = ref([]);
const disSel = ref(true),
  input2 = ref(),
  disbtn = ref(true),
  showText = ref(true),
  value2 = ref([new Date(new Date() - 60 * 60 * 1000), new Date()])

//获取时间
// const getTimeDate = (e) => {
//   requestData.TimeDate = e.value;
//   if (e.investigation !== "恢复") {
//     realList(requestData, tableData);
//   }
//   // startTimer()
// };

//时间选择
const handleDateChange = (value) => {
  if (value[1] > new Date()) {
    value2.value = [value[0], new Date()];
  }
}

//查询时间
const checkBtn = () => {
  ElMessageBox.confirm('确定查询吗')
    .then(() => {
      realList(requestData, tableData);
      // emit('childEvent', formattedDates.value)
    }).catch(() => {
      value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
    })
}


//获取下拉框
const getSelName = (e) => {

  let selColName = []
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== "") {
      selColName.push(e[i])
    }
  }
  requestData.selColName = selColName;
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
const handleButtonClick = async() => {
  // console.log( requestData.selColName.length == 0);
  if(requestData.SerialNo == "" && requestData.selColName.length == 0){
  try {
   await ElMessageBox.confirm('是否重置时间?(重置默认为当前时间减小时)');
    value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()];
  } catch (error) {
    // value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
    return;
    // console.log(requestData.TimeDate);
  }
  
}
console.log(requestData);
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
  // value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
  if (tableData.value.length !== 0) {
    disbtn.value = false
  } else {
    pagerConfig.total = 0
  }
  if (oldTableName.value != props.tableName) {
    tableData.value = [];
    oldTableName.value = props.tableName
    pagerConfig.currentPage = 1;
    input2.value = ''
    disbtn.value = true
    pagerConfig.total = 0
    requestData.SerialNo = "";
    requestData.selColName = []
    value2.value = [new Date(new Date() - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()]
    
  }
  requestData.TimeDate = value2.value.map(x => x.toLocaleString())

});

// const intervalTime = 3600000;
const intervalTime = 3600000;

let timer = null;
const refreshPage = () => {
  console.log('页面已刷新');
  requestData.TimeDate = [new Date(new Date() - 60 * 60 * 1000), new Date()]
  tableData.value = []
  console.log(requestData);
  // 在此处添加你需要的页面刷新逻辑，例如重新获取数据等操作
  realList(requestData, tableData);
  
};

const startTimer = () => {
  timer = setInterval(() => {
    refreshPage();
    value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
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