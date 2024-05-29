<template>
    <div class="container">
        <div class="date_class" :class="{date_temp:isTimeChecked}">
            <el-checkbox class="checked_class" v-model="isTimeChecked">
            <span class="span_word">日期</span></el-checkbox>
            <div class="demo-date-picker"  style="display: inline; padding: 5px 5px 5px 0px;">
                <el-date-picker style="width: 160px;" v-model="startDay" type="date"
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <el-time-picker v-model="endTime" style="width:160px" />
            <div class="demo-date-picker" style="display: inline;padding: 5px 5px 5px 54px;">
                <el-date-picker style="width: 160px;" v-model="endDay" type="date"
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <el-time-picker v-model="startTime" style="width:160px" />
        </div>
        <div class="serial_calss">
            <el-checkbox v-model="isSerialChecked" @change="serialChange">
            <span class="span_word">产品序列</span></el-checkbox>
            <div style="padding-top: 3px;" :class="{date_temp:isSerialChecked}">
                <el-input v-model="serialNumber" style="width: 160px" :pattern="serialNumberPattern"
                    @input="serialInput" placeholder="Please input" />
            </div>
        </div>
        <div style="display: flex;">
            <NewSelTemp :tableName="tableName" @selColName="getSelName"/>
        </div>
        <div class="btn_class">
            <el-button class="search_class" @click="searchCliced"
                type="primary">搜索</el-button>
            <el-button class="export_class"
                @click="exportDataBtn(tableName)" :disabled="disbtn" type="primary">导出</el-button>

            <el-button style="display: none; margin-top: 7px;margin-left:15px;height: 60px; width: 120px;"
                @click="importTableData(tableName)" type="primary">导入配置</el-button>
        </div>
    </div>
    <div class="media">
        <component :is="selectedComponent" :tableData="tableData" />
        <div class="pagination-wrapper">
            <!-- 这里放置你的分页组件 -->
            <vxe-pager v-bind="pagerConfig" @page-change="handlePageChange"></vxe-pager>
        </div>
    </div>

</template>
<script setup>
import { ref, watchEffect, reactive, defineProps, shallowRef, computed } from 'vue';
import { getSeleName } from "@/service/GetDataMethod/getTaleColName"
import { realList, exportData, importTableData, pagerConfig, getPageData, alertMess } from "@/service/GetDataMethod/utils"
import { motorTemp, rotorTemp, gearTemp, rrTemp, taTemp, shipOut, entireTemp } from "@/service/Import/tableTemp"
import NewSelTemp from '../Template/newSelTemp.vue';

const props = defineProps({
    tableName: String,
})

const request = reactive({
    startDateTime: "",
    endDateTime: "",
    serialDateNumber: "",
    selectFactor: []
})
//#region  时间代码

//当前时间
const startDay = ref(new Date().toISOString().slice(0, 10)),
    endDay = ref(new Date().toISOString().slice(0, 10)),
    startTime = ref(new Date()),
    endTime = ref(new Date(new Date() - 60 * 60 * 1000))

//时间是否选择
const isTimeChecked = ref(false);

//时间格式转换
const getTimeString = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

//格式化时间
const formattedStartTime = ref("")
const formattedEndTime = ref("")

//获取时间参数


//#endregion

//#region 序列号代码

//序列号是否选择
const isSerialChecked = ref(false);

//序列号值及序列号验证
const serialNumber = ref("");
const serialNumberPattern = ref(/^[A-Za-z0-9#\s]+$/);

// 检查输入是否合法的函数
const validateInput = (value, targetRef) => {
    if (!serialNumberPattern.value.test(value)) {
        // 输入不合法，清除输入内容
        //console.log("不合法");
        targetRef.value = '';
    }
};

const serialChange = (e) => {
    if (e == false) {
        serialNumber.value = ""
    }
}

const serialInput = (value) => {
    validateInput(value, serialNumber);

};

const oldTableName = shallowRef(props.tableName);

// // const oldSelectName = shallowRef(firstValue.value);

// //#endregion

//#region  表格渲染
const tableComponents = {
    "Motor履历": motorTemp,
    "Rotor履历": rotorTemp,
    "全部履历": entireTemp,
    "Gear履历": gearTemp,
    "Rr履历": rrTemp,
    "Ta履历": taTemp,
    '出荷履历': shipOut
};

const tableData = ref([])

//根据表名渲染页面
const selectedComponent = computed(() => {
    //   console.log(tableName);
    return tableComponents[props.tableName] || null;
});


//#endregion




//#region 搜索
//按钮是否隐藏
const disbtn = ref(true)
const exportName = ref("")
const searchCliced = () => {
    let sendToBack = {}
    let len = 0
    //判断是否为空值
    Object.entries(request).forEach(([key, value]) => {
        if (key == "selectFactor") {
            len = Object.keys(value).length
            //console.log(len);
            console.log(request[key]);
        }
        let isValue = key == "selectFactor" ? len != 0 : value !== ""
        // console.log(isvalue);
        if (isValue) {

            sendToBack[key] = value;
        }
        if (isSerialChecked.value && key == "serialDateNumber" && value === "") {
            alertMess("序列号勾选但没有输入", "error")
            return;
        }
    });
    if (Object.keys(sendToBack).length === 0) {
        alertMess("请至少选择一个条件", "error")
        return;
    }
    sendToBack.tableName = props.tableName
    exportName.value = getExportName(sendToBack)
    getTableData(sendToBack)
}

//获取table数据
const getTableData = (sendToBack) => {
    realList(sendToBack)
        .then((date) => {
            if (date != "空值") {
                tableData.value = date.data
                disbtn.value = false
                pagerConfig.total = date.count
            } else {
                tableData.value = []
                pagerConfig.total = 0
                disbtn.value = true
            }

        })
        .catch((error) => {
            disbtn.value = true
            tableData.value = []
            console.log(error);
        })
}

//获取导出得名字
function getExportName(sendToBack) {
    const { startDateTime, endDateTime, serialDateNumber, selectFactor } = sendToBack
    let exportTableName = `${props.tableName}`

    //获取时间
    if (startDateTime != undefined && endDateTime != undefined) {
        let startExportTime = formatDateToCustomString(startDateTime)
        let endExportTime = formatDateToCustomString(endDateTime)
        exportTableName += `_${startExportTime}-${endExportTime}`
        //console.log("时间"+exportTableName);
    }

    //获取序列号
    if (serialDateNumber != undefined) {
        exportTableName += `_${request.serialDateNumber}`
        //console.log("序列号");
    }
    if (selectFactor != undefined) {
        const { selectNameZh, topLimit, lowerLimit, startDateTime, endDateTime, selectName } = selectFactor;
        exportTableName += `_${selectNameZh}`
        if (selectName.includes("Date")) {
            let selStartTime = formatDateToCustomString(startDateTime)
            let selendTime = formatDateToCustomString(endDateTime)
            exportTableName += `_${selStartTime}-${selendTime}`
        } else {
            if (topLimit == undefined) {
                exportTableName += `-${lowerLimit}`
            } else if (lowerLimit == undefined) {
                exportTableName += `-${topLimit}`
            } else {
                exportTableName += `-${topLimit}-${lowerLimit}`
            }
        }
    }
    return exportTableName;
}

//#endregion
const exportDataBtn = () => {
    exportData(exportName.value)
}

function formatDateToCustomString(inputDate) {
    var date = new Date(inputDate);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // 加1是因为月份是从0开始计数的
    var day = ('0' + date.getDate()).slice(-2);
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);

    var formattedDate = year + month + day + hours + minutes + seconds;
    return formattedDate;
}

//是否给参数赋值
const isChecked = () => {
    //序列号
    request.serialDateNumber = isSerialChecked.value ? serialNumber.value : ""

    //开始时间
    request.startDateTime = isTimeChecked.value ? `${startDay.value} ${formattedEndTime.value}` : "";

    //结束时间
    request.endDateTime = isTimeChecked.value ? `${endDay.value} ${formattedStartTime.value}` : "";

}

const handlePageChange = (e) => {
    pagerConfig.currentPage = e.currentPage
    getPageData(e, props.tableName).then((data) => {
        tableData.value = data
    })
}

//下拉框条件查询
function getSelName(e) {
    console.log(e);
    let len = Object.keys(e).length
    if (len === 0) {
        // console.log("空值");
        request.selectFactor = {}
        return;
    } else {
        request.selectFactor = e
    }
}
//动态监控"
watchEffect(() => {
    //判断表名是否更新
    if (oldTableName.value != props.tableName) {
        // isSelectChecked.value = false
        isSerialChecked.value = false

        serialChange(false)
        getSeleName(props.tableName)

        tableData.value = []
        pagerConfig.currentPage = 1;
        pagerConfig.total = 0
        disbtn.value = true

        oldTableName.value = props.tableName
    }
    formattedStartTime.value = getTimeString(startTime.value)
    formattedEndTime.value = getTimeString(endTime.value)
    isChecked()
    // getSelName();
    // getIndex();
})

</script>
<style scoped>
.cell {
    height: 30px;
    padding: 3px 0;
    box-sizing: border-box;
}

.cell .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
}

.cell.current .text {
    background: #626aef;
    color: #fff;
}

.cell .holiday {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--el-color-danger);
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}

/* .将分页组件固定在页面底部 */
.pagination-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    /* 确保分页组件占据整个页面宽度 */
    background-color: #fff;
    /* 可选：设置背景颜色 */
    z-index: 999;
    /* 可
  选：设置分页组件的层级，确保它位于其他内容的上方 */
}

.container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* 可以根据需要调整对齐方式 */
    justify-content: flex-start;
    /* 可以根据需要调整对齐方式 */
    margin-bottom: 5px;
}

.date_class {
    width: 395px;
}

.serial_calss{
    width: 180px;
    
}
.search_class{
   margin-top: 6px;
   height: 60px; 
   width: 120px;
}
hr{
    position: absolute;
    margin-top: 24px;
    color: red;
    width: 100%;
}
.export_class{
    margin-top: 7px;
    margin-left:20px;
    height: 40px; 
    width: 120px;
}
.span_word{
    font-size: 14px;
    letter-spacing: 2px;
}

.brown{
    border: #0c0d1f 1px solid;
}
:deep(.date_temp .el-input__wrapper){
    /* color:rgb(8, 101, 172) ; */
    background: white;

}
:deep(.el-input__wrapper){
    /* background-color: #f9f8f2; 浅棕色 */
    /* background-color: #f2f2f2; 灰色背景 */
    background-color: #e1e1e5; /* 稍微更深的灰色背景 */

}


@media screen and (max-width: 787px) {

    /* 在此添加要应用的样式 */
    .media {
        height: 500px;
    }
}

/* 如果屏幕宽度大于或等于 600px，应用以下样式 */
@media screen and (min-width: 788px) {

    /* 在此添加要应用的样式 */
    .media {

        height: 600px;
    }
}
</style>