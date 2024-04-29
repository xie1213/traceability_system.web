//real
import { apiClient, MotorTable, RotorTable, GearTable } from "../Import";
import { ElMessageBox, ElMessage, ElLoading } from "element-plus";
import { reactive, ref } from "vue";
import { motorData, rotorData, rrData, gearData, taData } from "@/service/Import/tableData";


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

//导出数据
export const exportData = async (tableName) => {
  try {
    ElMessageBox.confirm("确定导出吗")
      .then(async () => {
        const loadings = ElLoading.service({
          lock: true,
          text: "正在导出...",
        });
        const response = await apiClient.get(
          `api/Excel/ExportData?tableName=${tableName}`,
          {
            responseType: "blob", // Set the responseType to 'blob' for binary data
          }
        );
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const url = window.URL.createObjectURL(blob);

        // Create an <a> tag, set the download link, simulate a click for download
        const link = document.createElement("a");
        link.href = url;
        link.download = `${tableName}.xlsx`;
        document.body.appendChild(link);
        link.click();
        // Release resources
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
        loadings.close();
      })
      .catch(() => { });
  } catch (error) {
    console.error("导出失败:", error);
    // Handle the error and provide feedback to the user
  }
};

//获取下拉列表
export const GetTableColName = (tableName) => {
  //let firstName;
  if (tableName !== null) {
    switch (tableName) {
      case "MotorTable":
        tableData.value = MotorTable.AllMotorTable;
        // console.log(tableData);
        break;
      case "RotorTable":
        tableData.value = RotorTable.AllRotorTable;
        break;
      case "GearTable":
        tableData.value = GearTable.AllGearTable;
        break;
      default:
        break;
    }
  }
};
//表配置
export const TableConfig = reactive({
  stripe: true,
  border: true,
  autoRresize: true,
  showOverflow: true,
  // showHeaderOverflow: true, //超长省略
  height: "600",
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
  },
  // scrollY: {
  //     enabled: true,
  //     gt: 350
  // },
  // scrollX: {
  //     enabled: true,
  //     gt: 350
  // },

});

//分页配置
export const pagerConfig = reactive({
  autoHidden: true,
  currentPage: 1,
  pageSize: 25,
  total: 0,
  align: "center",
  background: true,
  pageSizes: [15, 20, 25, 30],
  layouts: ['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']
})

//表格配置
export const gridOptions = reactive({
  stripe: true,
  border: true,
  autoRresize: true,
  showOverflow: true,
  showHeaderOverflow: true,
  height: 'auto',
  loading: false,
  rowConfig: {
    useKey: true,
    isHover: true,
    isCurrent: true,
    height: 20
  },
  columnConfig: {
    resizable: true,
    minWidth: 120,
    height: 20,
    tooltip: true
  },
  tooltipConfig: {
    showAll: true,
    enterDelay: 100
  },
  checkboxConfig: {
    labelField: 'nickname'
  },
  scrollY: {
    enabled: true,
    gt: 350
  },
  scrollX: {
    enabled: true,
    gt: 350
  },
  pagerConfig: {
    currentPage: 1,
    pageSize: 25,
    total: 0,
    align: 'center',
    background: true,
    pageSizes: [15, 20, 25, 30]
  }
})

// 加载列和数据
export const loadColumnAndData = () => {
  gridOptions.loading = true
  Promise.all([
    mockColumns(),
    // realList()
  ]).then(rest => {
    // console.log(rest[0]);
    const columns = rest[0]
    // const data = rest[1]
    // const startTime = Date.now()
    const $grid = gridRef.value
    // 使用函数式加载
    if ($grid) {
      Promise.all([
        $grid.reloadColumn(columns), // 传递第一行标题作为列配置
        // $grid.reloadColumn(columns.firstRow), // Reload columns
        // $grid.reloadData(dataList.value) // Reload data
        // console.log(columns)
      ]).then(() => {
        //VXETable.modal.message({ content: `用时 ${Date.now() - startTime}毫秒`, status: 'info' })
        gridOptions.loading = false
      })
    } else {
      gridOptions.loading = false
    }
  })
}


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
}

//导入表配置
export const importTableData = (tableName) => {

  let tableImportData = tableNameList[tableName] || null;
  // console.log(tableName);
  // tableImportData.tableName = tableName
  console.log(tableImportData);
  apiClient.post("api/Home/requestData", tableImportData)
    .then(() => {
      console.log("更新成功");
    }).catch((error) => {
      console.log(error);
    })
}

export const getPageData = (e, tableName) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        //const startTime = Date.now()
        TableConfig.loading = true
        let response;
        response = await apiClient.get(`api/DBTest/GetRedis?page=${e.currentPage}&limit=${e.pageSize}&tableName=${tableName}`);

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

//消息提示
export function alertMess(message, type) {
  ElMessage({
    message: message,
    type: type
  });
}