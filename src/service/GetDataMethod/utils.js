import apiClient from "../request";
import { ElMessageBox, ElMessage, ElNotification } from "element-plus";
import { reactive, ref } from "vue";
import { motorData, rotorData, rrData, gearData, taData, allTableData, shipmentData } from "@/service/Import/tableData";


//获取数据
export const gridRef = ref(),
  tableData = ref()

//获取数据
export const realList = (requestData) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      try {

        TableConfig.loading = true;
        let response;
        response = await apiClient.post(
          // "api/DBTest/SelTablePost",
          "api/DBTest/getTableData",
          requestData
        );
        if (response.data != "空值") {
          // pagerConfig.total = response.data.count;
          TableConfig.loading = false;
          // Indicates that the asynchronous operation is complete
        } else {
          TableConfig.loading = false;
          ElMessage({
            type: "info",
            message: `无数据`,
          }); // 点击确定后的回调
        }
        resolve(response.data);
      } catch (error) {
        ElMessageBox.alert(error, "错误", {
          type: "info",
          confirmButtonText: "确定",
          callback: () => {
            ElMessage({
              type: "error",
              message: error,
            }); // 点击确定后的回调

            TableConfig.loading = false;
          },
        });
      }
    }, 100);
  });
};

//表配置
export const TableConfig = reactive({
  stripe: true,
  border: true,
  autoRresize: true,
  showOverflow: true,
  // showHeaderOverflow: true, //超长省略
  height: "90%",
  headerAlign: "center",
  loading: false,
  rowConfig: {
    useKey: true,
    isHover: true, //移动到当前行高亮
    isCurrent: true, //点击当前行高亮
    height: 20,
  },
  columnConfig: {
    resizable: true, //启用列宽调整
    minWidth: 60,
    height: 20,
    tooltip: true,
  },
  tooltipConfig: {
    // showAll: true, //所有单元格开启过长省略
    enterDelay: 100,
  },
  checkboxConfig: {
    labelField: "nickname",
  }

});

//分页配置
export const pagerConfig = reactive({
  autoHidden: true,
  currentPage: 1,
  pageSize: 30,
  total: 0,
  align: "center",
  background: true,
  pageSizes: [10, 30, 60, 90],
  layouts: ['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']
})



export const mockColumns = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const firstRowTitles = [];
      for (let i = 0; i < tableData.value.length; i++) {
        const title = tableData.value[i].title;
        const subTitles = tableData.value[i].val.map(x => {
          return {
            title: x.col,
            field: x.val,
            width: 120,
            height: 10,
            sortable: true,
            // fixed: getFixedStatus(x.col).fixed,
            // formatter: x.val === "CollectionDate" ? formatDate : undefined
          };
        });
        firstRowTitles.push({
          field: title,
          title: title,
          children: subTitles,
          width: 120, // This line seems to be mistyped. I'm assuming you meant 'width' instead of 'while'.
          height: 10,
          fixed: title === '特定列' ? 'left' : undefined
        });
      }
      resolve(firstRowTitles); // Resolve the promise with the data
    }, 100);
  });
}

let tableNameList = {
  "Motor履历": motorData.AllMotorTable,
  "Rotor履历": rotorData.AllRotorTable,
  "Gear履历": gearData.AllGearTable,
  "Rr履历": rrData.AllRRTable,
  "Ta履历": taData.AllTatable,
  "全部履历": allTableData.table,
  "出荷履历": shipmentData
}

//导入表配置
export const importTableData = (tableName) => {

  let tableImportData = tableNameList[tableName] || null;

  apiClient.post("api/Home/requestData", tableImportData)
    .then(() => {

      console.log("更新成功");
    }).catch((error) => {
      console.log(error);
    })
}

//获取数据分页
export const getPageData = (e, tableName) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        //const startTime = Date.now()
        TableConfig.loading = true
        let response;
        response = await apiClient.get(`api/DBTest/GetRedis?page=${e.currentPage}&limit=${e.pageSize}&tableName=${tableName}`);
        // console.log(e);
        pagerConfig.pageSize = e.pageSize
        //tableData.value = response.data.data; // Populate the dataList array with the retrieved data
        //gridRef.value.reloadData(dataList.value)
        TableConfig.loading = false
        resolve(response.data.data)
      } catch (error) {
        console.error('Error fetching table data:', error);
        reject(error); // Handle potential error scenarios
      }
    }, 100);
  })
}

//#region  导出代码
// const messParams = reactive({
//   message:"",
//   tyep:"info",

// })



//启动数据导出
export const startExport = (tableName, count) => {

  let taskId = ""
  let text = count >= 10000 ? "数据超过1w条需要稍微等待" : ""
  text += "确认导出吗"

  ElMessageBox.confirm(
    text,
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'Info',
    }
  )
    .then(() => {
      ElMessage.info("正在发送请求,请稍等...")
      TableConfig.loading = true;
      startExportAndPoll(tableName, count, taskId)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消导出',
      })
    })
}

let timeoutId = null;
async function startExportAndPoll(tableName, count, taskId) {
  try {

    // 启动导出任务
    const response = await apiClient.post('api/Export/StartExport', { tableName, count, taskId });
    const TaskId  = response.data;

    Notification("创建导出请求,请稍等...")
    pollAndCheckExportStatus(TaskId, tableName);

  } catch (error) {
    TableConfig.loading = false
    console.error('Error starting export:', error);
    // 如果出错，可能需要根据实际情况决定是否重试
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  }
}
let isPolling = false;
async function pollAndCheckExportStatus(taskId, tableName) {
  if (isPolling) return; // 防止重复启动

  isPolling = true;

  const interval = 5000; // 5秒轮询一次
  let pollInterval;

  const checkStatus = async () => {
    try {
      const response = await apiClient.get(`/api/Export/CheckExportStatus?taskId=${taskId}`)

      const { Status } = response.data
      console.log(Status);

      if(Status == "Failed"){
        TableConfig.loading = false
        isPolling = false; 
        clearInterval(pollInterval);
        errorNotification("数据导出失败"+response.data.error)
      }

      if (Status == "Completed") {
        Notification("后端数据获取成功,前端下载...")

        clearInterval(pollInterval);
        isPolling = false; // 轮询完成后重置标志位
        downloadExportedData(taskId, tableName)
      }
      else if (Status == "NotStarted") {
        Notification("数据获取成功,正准备下载...")
      }

    } catch (error) {
      TableConfig.loading = false
      console.error('Error checking status:', error);
      isPolling = false; // 轮询完成后重置标志位
      // 停止轮询
      clearInterval(pollInterval);
    }
  };

  // 启动轮询
  pollInterval = setInterval(checkStatus, interval);

  // 处理页面刷新
  window.onbeforeunload = () => {
    TableConfig.loading = false
    Notification("页面刷新导出任务暂停")
    clearInterval(pollInterval);
    isPolling = false;
  };
}



// 下载文件的函数
async function downloadExportedData(taskId, tableName) {
  try {
    const response = await apiClient.get(`/api/Export/DownloadExportedData?taskId=${taskId}&tableName=${tableName}`, {
      responseType: 'blob' // 处理 Blob 数据用于文件下载
    });
    console.log(response);

    const contentType = response.headers['content-type'];
    if (contentType && contentType.startsWith('application/')) {
      // 创建 Blob 对象并下载文件
      const blob = new Blob([response.data], { type: contentType });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = tableName + '.xlsx'; // 指定文件名称
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      Notification("下载成功")
      TableConfig.loading = false;
    } else {
      console.error('Unexpected content type for file download:', contentType);
    }
    ElMessage.success(tableName + ".xlsx 下载成功")
    TableConfig.loading = false
  } catch (error) {
    TableConfig.loading = false
    console.error('Error downloading file:', error);
  }
}


const errorNotification = (message)=>{
  ElNotification.error({
    title: '警告',
    message: message,
    showClose: false,
  });
}

const Notification = (message) => {
  ElNotification.success({
    title: '提示',
    message: message,
    showClose: false,
  });
}

// //导出下载数据
// function createDownloadLink(blob, fileName) {
//   // 创建下载链接
//   console.log(blob,fileName);

//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = fileName || 'exported_data'; // 设置下载文件名
//   a.innerText = 'Click here to download your file'; // 设置链接文本
//   a.style.display = 'block'; // 使链接显示为块元素

//   // 将链接添加到页面上
//   document.body.appendChild(a);

//   // 清理 URL 对象以释放内存
//   return () => window.URL.revokeObjectURL(url);
// }



//#endregion

//消息提示
export function alertMess(message, type) {
  ElMessage({
    message: message,
    type: type
  });
}