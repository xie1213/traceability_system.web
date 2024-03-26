<template>
  <div>
    <imports.TimeTemplate @childEvent="GetTime" :tableName="tableName" />
    <imports.SelectTemp :selectName="tableName" @selColName="getSel" />
    <!-- <el-button @click="exportExecl" type="primary">导出</el-button> -->
    <span>序列号:</span>
    <el-input v-model="input2" clearable="true" size="large" placeholder="Please Input" style="display: inline;" />
    <el-button @click="exportData" type="primary">导出</el-button>
    <!-- <el-button @click="test" type="primary">测试</el-button> -->
    <el-button @click="handleButtonClick" type="primary">条件查询</el-button>
  </div>

  <div height="650px">
    <div v-if="tableName !== '全部数据'">
      <vxe-table ref="tableRef" stripe show-overflow :column-config="{ resizable: true }" border height="650px"
        :scroll-x="{ enabled: true, gt: tableName == 'Tatable' ? 650 : 400 }" :scroll-y="{ enabled: true, gt: 650 }"
        :row-config="{ isCurrent: true, isHover: true, height: 20 }" :data="tableJson">
        <vxe-colgroup :title="tableName">
          <vxe-colgroup :title="item.title" v-for="(item, index) in firstName" :key="index">
            <vxe-column v-for="(val, index) in item.val" :key="index" :field="val.val"
              :formatter="val.val == 'collectionDate' ? formatTime : undefined" :title="val.col"
              :fixed="getFixedStatus(val.col).fixed"
              :title-help="{ message: val.col, icon: 'vxe-icon-question-circle-fill' }" min-width="120" sortable>
            </vxe-column>
          </vxe-colgroup>
        </vxe-colgroup>
      </vxe-table>
    </div>
    <div v-else>
      <vxe-table ref="tableRef" stripe :column-config="{ resizable: true }" show-overflow border height="750px"
        :scroll-x="{ enabled: true, gt: 1500 }" :scroll-y="{ enabled: true, gt: 350 }"
        :row-config="{ isCurrent: true, isHover: true, height: 20 }" :data="tableJson">
        <vxe-colgroup v-for="(allitem, i) in firstName" :key="i" :title="allitem.title">
          <vxe-colgroup :title="item.title" v-for="(item, index) in allitem.data" :key="index">
            <vxe-column v-for="(val, index) in item.val" :key="index" :field="val.val" :title="val.col"
              :title-help="{ message: val.val, icon: 'vxe-icon-question-circle-fill' }" min-width="120">
            </vxe-column>
          </vxe-colgroup>
        </vxe-colgroup>
      </vxe-table>
    </div>
  </div>
  

    <div class="demo-pagination-block">
    <el-pagination
      :current-page="page"
      :page-size="50"
      :small="small"
      :disabled="disabled"
      background
      layout="prev, pager, next, jumper"
      :total="totalCount"
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import * as imports from '../../service/Import';
import { defineProps, watchEffect, ref, shallowRef } from 'vue';
import getColName from '../../service/public.js';
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'
import XEUtils from 'xe-utils'
//第一行名字
const firstName = imports.ref([]);
const tableRef = ref()
//表格数据
const limitData = imports.ref([])
// const tableData = ref([])
const tableJson = ref([])
// const Request = ref({})
const timeDate = ref([])

const selColName = ref([])
//当前页
const currentPage = ref(1)
//分页条数
const totalCount =ref(0)
// const selColName = ref("")
const isdis = ref(true)
const input2 = ref('')
const formatTime = ({ cellValue }) => {
  return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
}
//当页数改变时
const handleCurrentChange = async (e) => {
  // console.log(e);
  // displayData(e);
  currentPage.value = e.currentPage
  
  if (e !== 1) {
    const response = await imports.apiClient.get(`api/DBTest/GetRedis?page=${e}&tableName=${props.tableName}`);
    //console.log(response.data.data);
    tableJson.value = response.data.data
    //getTableData()
    // GetlimitData()
  }

}

// const handleSizeChange = (e)=>{
// // console.log(e);
// }
//根据父组件判断表名
const props = defineProps({
  //tabColName:Array,
  tableName: String
})


const getFixedStatus = (columnName) => {

  const fixedColumns = {
    MotorTable: ['采集时间', 'Motor出荷序列'],
    RotorTable: ['采集时间', 'rotor转子'],
    GearTable: ['采集时间', 'gear差速器箱序列'],
    Tatable: ['采集时间', 'ta出荷'],
    Rrtable: ['采集时间', 'rr盖序列']
  };

  if (fixedColumns[props.tableName]?.includes(columnName)) {
    return { fixed: 'left' };
  }

  // 如果没有匹配条件，则返回 undefined
  return { fixed: undefined };
  // Customize this method based on yo
}
const getTableData = async () => {

  try {
    let response
    const Request = {
      TableName: props.tableName,
      timeDate: timeDate.value,
      selColName: selColName.value,
      SerialNo: input2.value
    }
    // console.log(Request);
    const loading = ElLoading.service({
      lock: true,
      text: '加载中...'
    })
    setTimeout(async () => {
      response = await imports.apiClient.post('api/DBTest/SelTablePost', Request);
      // console.log(response.data);
      loading.close()
      // createIndexDB(Request.value.TableName, response.data);
      if (response.data.data.list.length == 0) {
        ElMessage({
          type: 'info',
          message: `无数据`,
        }) // 点击确定后的回调
        tableJson.value = [],
        totalCount.value = 0
        return;
      }
      totalCount.value = response.data.data.count;
      // console.log(totalCount);
      tableJson.value = response.data.data.list
    }, 100)
  } catch (error) {
    ElMessageBox.alert(error, '错误', {
      type: 'info',
      confirmButtonText: '确定',
      callback: action => {
        ElMessage({
          type: 'info',
          message: `action: ${action}`,
        }) // 点击确定后的回调
      }
    });
  }
};


// // 加载选项,启用懒加载
// const loadOptions = {
//   lazy: true,
//   lazyLoad: (row, index) => {
//     console.log(row, index);
//   }
// }

// //懒加载 
// const handleScroll = (params) => {
//   // const visibleColumn = params.top + params.tableHeight / params.rowHeight
//   console.log(params);
//   const { scrollTop, scrollHeight, clientHeight } = params;
//   if (scrollTop + clientHeight >= scrollHeight) {
//     // 滚动到底部，触发加载更多数据的逻辑
//     const table = this.$refs.table;
//     if (table) {
//       const { scroll: { virtual: { startIndex, endIndex } } } = table;
//       loadOptions({ startIndex, endIndex: endIndex + 10 }); // 加载更多数据
//     }
//   }
// };
// const offset = (currentPage.value - 1) * pageSize.value;
// const GetlimitData = () => {
//   console.log(tableJson.value.length);
//   for (let i = offset; i < offset + pageSize.value && i < tableJson.value.length; i++) {
//     limitData.value.push(tableJson.value[i]);
//   }
// }


//判断原来数据是否改变
const oldTableName = shallowRef(props.tableName);
const exportData = async () => {

  if (tableJson.value.length == 0) {
    ElMessage({
      type: 'info',
      message: `无数据`,
    }) // 点击确定后的回调
    return;
  }
  try {
    ElMessageBox.confirm('确定导出吗')
      .then(async () => {

        const loadings = ElLoading.service({
          lock: true,
          text: '正在导出...'
        })
        const response = await imports.apiClient.get(`api/DBTest/GetExport?tableName=${props.tableName}`, {
          responseType: 'blob', // Set the responseType to 'blob' for binary data
        });
        // Create a Blob object and create a download link

        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);

        // Create an <a> tag, set the download link, simulate a click for download
        const link = document.createElement('a');
        link.href = url;
        link.download = `${props.tableName}.xlsx`;
        document.body.appendChild(link);
        link.click();
        // Release resources
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
        loadings.close()
      }).catch(() => {

      });
  } catch (error) {
    console.error('导出失败:', error);
    // Handle the error and provide feedback to the user
  }
}



// const exportDataEvent = () => {
//   if (tableJson.value.length == 0) {
//     ElMessage({
//       type: 'info',
//       message: `无数据`,
//     }) // 点击确定后的回调
//     return;
//   }
//   ElMessageBox.confirm('确定导出吗')
//     .then(() => {
//       const loadings = ElLoading.service({
//         lock: true,
//         text: '正在导出...'
//       })
//       const $table = tableRef.value
//       if ($table) {
//         const exportConfig = {
//           columns: $table.getColumns().map(col => ({
//             field: col.field,
//             title: col.getTitle(),
//             titleExport: col.getTitle(),
//           })),
//           // $table.openExport()
//         }
//         // 打开导出并应用自定义配置
//         $table.exportData({
//           filename: props.tableName,
//           sheetName: 'Sheet1',
//           type: 'csv', // 可以选择 'csv' 或 'xlsx'
//           download: true,
//           exportConfig,
//         });
//       }
//       loadings.close();
//     })
//     .catch(() => {
//       // catch error
//     })
// }
// const loadings = ElLoading.service({
//   lock: true,
//   text: '正在导出...'
// })
const $table = tableRef.value
if ($table) {
  const exportConfig = {
    columns: $table.getColumns().map(col => ({
      field: col.field,
      title: col.getTitle(),
      titleExport: col.getTitle(),
    })),
    // $table.openExport()
  }
  // 打开导出并应用自定义配置
  $table.exportData({
    filename: props.tableName,
    sheetName: 'Sheet1',
    type: 'csv', // 可以选择 'csv' 或 'xlsx'
    download: true,
    exportConfig,
  });
}


//获取时间子控件的值
const GetTime = (item) => {

  timeDate.value = item
  // console.log(timeDate.value);
  getTableData()
}

const getSel = (item) => {
  //selColName.value = item
  selColName.value = item
}
const handleButtonClick = () => {
  // console.log(input2.value);
  if (selColName.value == '' && input2.value == '') {
    ElMessage({
      type: 'info',
      message: `请至少输入一项`,
    }) // 点击确定后的回调
    return;
  }
  getTableData()
}
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
//表名变动监听
watchEffect(() => {
  if (input2.value != '' || input2.value != 'Please Input') {
    isdis.value = false;
  }
  getColName.GetTableColName(props.tableName)
  // getTableData()
  firstName.value = getColName.firstName.value
  if (oldTableName.value !== props.tableName) {
    //timeDate.value = [new Date(new Date - 60 * 60 * 1000), new Date()] 
    limitData.value = []
    // getTableData()
    oldTableName.value = props.tableName;
    //Request.value.TableName = props.tableName
    currentPage.value = 1

    getTableData()
  }
  //Request.value.TableName = oldTableName
  //console.log(Request);
});


</script>
<style>
.vxeth {
  /* height: 100px; */
  background-color: red;
  border: red 1px solid;
}
</style>