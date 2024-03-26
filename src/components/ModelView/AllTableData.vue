
<script setup async>
import { reactive, ref, defineProps, watchEffect,shallowRef } from 'vue'
import publicData from '@/service/public'
import { ElMessage,ElMessageBox,ElLoading } from 'element-plus'
import * as imports from '@/service/Import';
import IPcheck from '@/components/Template/IPcheck.vue'
import { VXETable } from 'vxe-table'
import XEUtils from 'xe-utils'
// import XEUtils from 'vxe-utils'
//表名
const props = defineProps({
    tableName: String,
});
// const page = ref(1),
// pageLimit= [10,50,100],
// limitCount = ref(0);
// 响应式数据
const gridOptions = reactive({
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
        tooltip:true
    },
    tooltipConfig:{
        showAll:true,
        enterDelay:100
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

// ref引用
const gridRef = ref(),
    disSel = ref(true),
    input2 = ref(),
    restBtn  = ref(false);

// 列表数据
// const tableName =  ref([])

const dataList = ref([]),//数据
    //第二行
    // subTitles = ref([]),
    //全部标题数据
    firstName = ref([]),
    tableTitles=ref([]);

//请求后端的参数
const requestData = ref({})


// const nowDate =  ref([new Date(new Date - 60 * 60 * 1000), new Date()])

// 获取标题
const mockColumns = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            if(props.tableName == "出荷数据"){
               tableTitles.value = outTable();
            }
            else if (props.tableName !== "全部数据") {
               tableTitles.value =  getTableName()
            }
            else{
               gridOptions.scrollX.gt = 1500
                tableTitles.value = getAllTableTitle()
            }

            resolve(tableTitles.value);
        }, 100);
    })
}

//获取不是全部数据得标题
const getTableName = ()=>{
   return new Promise(resolve => {
    setTimeout(() => {
        const firstRowTitles = [];
        for (let i = 0; i < firstName.value.length; i++) {
            const title = firstName.value[i].title;
            const subTitles = firstName.value[i].val.map(x => {

                return {
                    title: x.col,
                    field: x.val,
                    width: 120,
                    height: 10,
                    sortable: true,
                    fixed: getFixedStatus(x.col).fixed,
                    formatter: x.val === "CollectionDate" ? formatDate : undefined
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

//获取全部数据得标题
const getAllTableTitle =()=>{
    let firstRowTitles = []
     firstName.value.map(a=>{
        const firsttitle = a.title
        const firstchil = a.data.map(b=>{
            const twoTitle= b.title
            const twochil = b.val.map(c=>{
                const threeTile = c.col
                const threechil =c.val
                return{
                    title:threeTile,
                    field:threechil,
                    width: 120,
                    height: 10,
                    sortable: true,
                } 
            
            })
            return{
                title: twoTitle,
                field:twoTitle,
                children:twochil
            }
        })
        firstRowTitles.push({
            title:firsttitle,
            children:firstchil
        })
    })
    return firstRowTitles
}

//获取出荷表标题
const outTable = ()=>{
    return firstName.value.map(x=>{
        return{
            title:x.tableName,
            field:x.colName,
            width: 120,
            height: 10,
            sortable: true,
        }
    })
}

// 对应数据
const mockList = () => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            try {
                let response;
                response = await imports.apiClient.post('api/DBTest/SelTablePost', requestData.value)
                //console.log(response);
                if (response.data.count >0) {
                    //console.log(response.data.data);
                    dataList.value = response.data.data
                    response.duration 
                    gridOptions.pagerConfig.total = response.data.count; // Populate the dataList array with the retrieved data
                }
                else{
                    dataList.value = []
                    gridOptions.pagerConfig.total=0;
                }
                resolve(); // Indicates that the asynchronous operation is complete
            } catch (error) {
                 ElMessageBox.alert("服务未启动", '错误', {
                    type: 'info',
                    confirmButtonText: '确定',
                    callback: () => {
                        ElMessage({
                        type: 'error',
                        message: `请检查服务器是否启动`,
                        }) // 点击确定后的回调
                    }
                    });
                    //console.log(error);
               // reject(error); // Handle potential error scenarios
            }
        }, 100);
    });
};
// 加载列和数据
const loadColumnAndData = () => {
    gridOptions.loading = true
    Promise.all([
        mockColumns(),
        mockList()
    ]).then(rest => {
        const columns = rest[0]
        // const data = rest[1]
        // const startTime = Date.now()
        const $grid = gridRef.value
        // 使用函数式加载
        if ($grid) {
            Promise.all([
                $grid.reloadColumn(columns), // 传递第一行标题作为列配置
                // $grid.reloadColumn(columns.firstRow), // Reload columns
                $grid.reloadData(dataList.value) // Reload data
            ]).then(() => {
                //VXETable.modal.message({ content: `用时 ${Date.now() - startTime}毫秒`, status: 'info' })
                gridOptions.loading = false
            })
        } else {
            gridOptions.loading = false
        }
    })
}


//固定特定列
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

//获取时间控件
const getTimeDate = (e) => {
   requestData.value.TimeDate = e;
    if (!contrastTime(new Date(e[0]))) {
        loadColumnAndData();
    }
}

function contrastTime(firstDate) {
    let currentDate = new Date();
    // 将当前时间的秒数设置为00
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0)
    // 将当前时间减去1小时
    const oneHourAgo = new Date(currentDate - 60 * 60 * 1000);

    // 设置第一个日期对象的秒数为00
    firstDate.setSeconds(0);
    firstDate.setMilliseconds(0)
    // 判断第一个日期是否等于当前时间减去1小时
    const isFirstEqualToOneHourAgo = firstDate.getTime() === oneHourAgo.getTime();
    return isFirstEqualToOneHourAgo
}

//获取序列号
const getSerialNo = () => {
    requestData.value.SerialNo = input2.value;
    disSel.value = false
}

//获取下拉条件
const getSelName = (e) => {
    //console.log(e);
    if (e.length == 3) {
        requestData.value.selColName = e;
        disSel.value = false
    }
}

//条件查询
const handleButtonClick = () => {
  if (requestData.value.selColName == '' && input2.value == '') {
    ElMessage({
      type: 'info',
      message: `请至少输入一项`,
    }) // 点击确定后的回调
    return;
  }
  loadColumnAndData()
}

// //重置 
// const resetButtonClick =()=>{
//     input2.value=''
//     restBtn.value = true

//     console.log(restBtn);
// }
const exportData = async () => {

  if (dataList.value.length == 0) {
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

//分页改变
const changePage = (e) => {
    gridOptions.pagerConfig.pageSize = e.pageSize
    gridOptions.pagerConfig.currentPage = e.currentPage
    if (dataList.value.length == 0) {
        requestData.value.limit = e.pageSize
        loadColumnAndData()
        return;
    }
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const startTime = Date.now()
                gridOptions.loading = true
                let response;
                response = await imports.apiClient.get(`api/DBTest/GetRedis?page=${e.currentPage}&limit=${e.pageSize}&tableName=${props.tableName}`);
               
                dataList.value = response.data.data; // Populate the dataList array with the retrieved data
                gridRef.value.reloadData(dataList.value)
                gridOptions.loading = false
                VXETable.modal.message({ content: `获取分页数据 用时 ${Date.now() - startTime}毫秒`, status: 'info' })

                resolve(); // Indicates that the asynchronous operation is complete
            } catch (error) {
                console.error('Error fetching table data:', error);
                reject(error); // Handle potential error scenarios
            }
        }, 100);
    })
}

    requestData.value.TimeDate =[new Date(new Date - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()]  ;
const formatDate = ({ cellValue }) => {
        
        return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
}
const oldTableName = shallowRef(props.tableName);
watchEffect(() => {
if (oldTableName.value !== props.tableName) {
    //timeDate.value = [new Date(new Date - 60 * 60 * 1000), new Date()] 
    // getTableData()
    gridOptions.pagerConfig.currentPage = 1;
    requestData.value.TimeDate =[new Date(new Date - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()]  ;
    oldTableName.value = props.tableName;
    //Request.value.TableName = props.tableName
  }

    publicData.GetTableColName(props.tableName)
    // getTableData()
    
    firstName.value = publicData.firstName.value
    requestData.value.TableName = props.tableName
    gridOptions.pagerConfig.pageSize = props.tableName =="全部数据"?10:25
    
    loadColumnAndData(firstName.value)
})
</script>


<template>
<div class="container">
 <imports.TimeTemplate @childEvent="getTimeDate" :restBtn="restBtn" :tableName="tableName" />
    <imports.SelectTemp :selectName="tableName"  @selColName="getSelName" />
    <span  v-if="tableName !== '出荷数据'">序列号:</span>
    <el-input  v-if="tableName !== '出荷数据'" v-model="input2" clearable @change="getSerialNo" size="large" placeholder="Please Input"
        style="display: inline;" />
    <el-button @click="exportData" type="primary">导出</el-button>
    <el-button @click="handleButtonClick" :disabled="disSel" type="primary">条件查询</el-button>

    <!-- <el-button @click="resetButtonClick"  type="primary">重置</el-button> -->
    <IPcheck/>      
    <div style="height:600px">
        <vxe-grid ref="gridRef" header-cell-class-name ="titleclsss" v-bind="gridOptions" @page-change="changePage">
        </vxe-grid>
    </div>
</div>
   
</template>
  

<style>
.container {
  /* display: flex;  */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>