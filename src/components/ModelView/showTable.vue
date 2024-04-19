<template>
    <div style="display: flex;">
        <div style="width: 400px;border: 1px,red;">
            <el-checkbox v-model="isTimeChecked" @change="getRequestTime()">日期</el-checkbox>
            <div class="demo-date-picker" style="display: inline; padding: 5px;">
                <el-date-picker style="width: 160px;" v-model="startDay" type="date" placeholder="Pick a day"
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <el-time-picker v-model="endTime" style="width:160px" />
            <div class="demo-date-picker" style="display: inline;padding: 5px 5px 5px 55px;">
                <el-date-picker style="width: 160px;" v-model="endDay" type="date" placeholder="Pick a day"
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
        <div style="display: inline;width: 200px;">
            <el-checkbox v-model="isSerialChecked" @change="serialChange">产品键</el-checkbox>
            <div style="padding-top: 3px;">
                <el-input v-model="serialNumber" style="width: 160px" :pattern="serialNumberPattern"
                    @input="serialInput" placeholder="Please input" />
            </div>
        </div>
        <div>
            <div>
                <el-checkbox v-model="isSelectChecked" @change="selectChange">项目</el-checkbox>
                <el-select v-model="firstValue" clearable placeholder="Select" style="width: 150px">
                    <el-option v-for="(item, index) in firstList" :key="index" :label="item" :value="item"
                        @click="handleItemClick(index)" />
                </el-select>
            </div>
            <div style="padding-left: 22px;">
                <span style="font-size: 14px;">选择</span>
                <el-select v-model="twoValue" clearable placeholder="Select" style="width: 150px">
                    <el-option v-for="(item, index) in twoList" :key="index" :label="item.col" :value="item.val" />
                </el-select>
            </div>
        </div>

        <div v-if="!twoValue.includes('Date')" style="display: inline;padding: 5px 0 0 15px;">
            <div>
                <span style="font-size: 14px;">上限</span>
                <el-input v-model="topLimit" style="width: 150px" :pattern="serialNumberPattern" @input="topLimitInput"
                    placeholder="Please input" />
            </div>
            <div>
                <span style="font-size: 14px;">下限</span>
                <el-input v-model="lowerLimit" style="width: 150px" :pattern="serialNumberPattern"
                    @input="lowerLimitInput" placeholder="Please input" />
            </div>
        </div>
        <div v-else style="width: 400px;padding: 5px 0 0 15px;">
            <div class="demo-date-picker" style="display: inline; padding: 5px;">
                <el-date-picker style="width: 160px;" v-model="selStartDay" type="date" placeholder="Pick a day"
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <el-time-picker v-model="selEndTime" style="width:155px" />
            <div class="demo-date-picker" style="display: inline;padding-left: 5px;">
                <el-date-picker style="width: 160px;" v-model="selEndDay" type="date" placeholder="Pick a day"
                    format="YYYY/MM/DD" value-format="YYYY-MM-DD">
                    <template #default="cell">
                        <div class="cell" :class="{ current: cell.isCurrent }">
                            <span class="text">{{ cell.text }}</span>
                        </div>
                    </template>
                </el-date-picker>
            </div>
            <el-time-picker v-model="selStartTime" style="width:160px;padding-left: 5px;" />
        </div>
        <el-button style="margin-top: 7px;margin-left:15px;height: 60px; width: 120px;" @click="searchCliced"
            type="primary">搜索</el-button>
    </div>

    <component :is="selectedComponent" :tableData="tableData" />

</template>
<script setup>
import { ref, watchEffect, reactive, defineProps, shallowRef, computed } from 'vue';
import { optionList, getSeleName, firstList } from "@/service/GetDataMethod/getTaleColName"
import { ElMessage } from 'element-plus'
import { realList } from "@/service/GetDataMethod/utils"
import { motorTemp, rotorTemp, gearTemp, rrTemp, taTemp, shipOut, entireTemp } from "@/service/Import/tableTemp"

const props = defineProps({
    tableName: String,
})

const request = reactive({
    startDateTime: "",
    endDateTime: "",
    serialDateNumber: "",
    selectName: "",
    selectTop: "",
    selectLower: "",
    selStartTime:"",
    selEndTime:""
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
const formattedStartTime = getTimeString(startTime.value)
const formattedEndTime = getTimeString(endTime.value)
//获取时间参数
const getRequestTime = () => {
    if (isTimeChecked.value) {
        request.startDateTime = `${startDay.value} ${formattedEndTime}`;
        request.endDateTime = `${endDay.value} ${formattedStartTime}`
    } else {

        request.startDateTime = ""
        request.endDateTime = ""
    }
}
//#endregion

//#region 序列号代码

//序列号是否选择
const isSerialChecked = ref(false);

//序列号值及序列号验证
const serialNumber = ref("");
const topLimit = ref();
const lowerLimit = ref();
const serialNumberPattern = ref(/^[A-Za-z0-9]+[A-Za-z0-9]*$/);

// 检查输入是否合法的函数
const validateInput = (value, targetRef) => {
    if (!serialNumberPattern.value.test(value)) {
        // 输入不合法，清除输入内容
        console.log("不合法");
        targetRef.value = '';
    }
};

const serialChange = (e) => {
    if (!e) {
        serialNumber.value = ""
    }
}

const serialInput = (value) => {
    validateInput(value, serialNumber);

};


//#endregion

//#region  下拉框代码

const isSelectChecked = ref(false)
const firstValue = ref("")
const twoValue = ref("")
const twoList = ref([])

const selStartDay = ref(new Date().toISOString().slice(0, 10)),
    selEndDay = ref(new Date().toISOString().slice(0, 10)),
    selStartTime = ref(new Date()),
    selEndTime = ref(new Date(new Date() - 60 * 60 * 1000));
const formatSeltartTime = getTimeString(startTime.value)
const formatSelEndTime = getTimeString(endTime.value)
//获取时间参数
const getSelectTime = () => {
    if (isSelectChecked.value) {
        request.selStartTime = `${selStartDay.value} ${formatSelEndTime}`;
        request.selEndTime = `${selEndDay.value} ${formatSeltartTime}`
    } else {

        request.selStartTime = ""
        request.selEndTime = ""
    }
}


// 上限
const topLimitInput = (value) => {
    validateInput(value, topLimit);
    if (twoValue.value === '') {
        ElMessage({
            message: '请选择条件',
            type: 'warning',
        });
        topLimit.value = ""
    }
};

//下限
const lowerLimitInput = (value) => {
    validateInput(value, lowerLimit);

    if (twoValue.value === '') {
        ElMessage({
            message: '请选择条件',
            type: 'warning',
        });
        lowerLimit.value = ""
    }
};

//根据索引获取第二个下拉框
getSeleName(props.tableName)
const handleItemClick = (index) => {
    twoValue.value = ""
    twoList.value = index >= 0 ? optionList.value[index + 1].val : []
}

//下拉框选中的方法
const selectChange = (e) => {
    console.log(request);
    if (e == false) {
        firstValue.value = ""
        twoValue.value = ""
        twoList.value = []
        topLimit.value = ""
        lowerLimit.value = ""
    }
}

const oldTableName = shallowRef(props.tableName);

// const oldSelectName = shallowRef(firstValue.value);

//#endregion

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

const selectedComponent = computed(() => {
    //   console.log(tableName);
    console.log(props.tableName);
    return tableComponents[props.tableName] || null;
});
//#endregion

//#region 搜索
const searchCliced = () => {
    let sendToBack = {}
    //判断是否为空值
    Object.entries(request).forEach(([key, value]) => {
        if (value !== "") {
            sendToBack[key] = value;
        }
    });
    if (Object.keys(sendToBack).length === 0) {
        ElMessage({
            message: '请至少选择一个条件',
            type: 'error',
        });
        return;
    }
    sendToBack.tableName = props.tableName
    console.log(sendToBack);
    realList(sendToBack)
}


//#endregion


//动态监控"
watchEffect(() => {

    //下限
    request.lowerLimit = isSelectChecked.value ? lowerLimit.value : ""
    //上限
    request.topLimit = isSelectChecked.value ? topLimit.value : ""
    //列名
    request.selectName = isSelectChecked.value ? twoValue.value : ""

    request.serialDateNumber = isSerialChecked.value ? serialNumber.value : ""
    //判断表名是否更新
    if (oldTableName.value != props.tableName) {
        oldTableName.value = props.tableName
        getSeleName(props.tableName)
    }
    //监听第一个下拉框是否选中
    if (firstValue.value === "") {
        twoValue.value = ""
        twoList.value = []
        topLimit.value = ""
        lowerLimit.value = ""
    }
    if (twoValue.value.includes("Date")) {
    console.log("时间");
    getSelectTime()
        
    }
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
</style>