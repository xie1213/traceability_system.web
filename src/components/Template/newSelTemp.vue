<template>
  <!-- 不等于出荷表 -->
  <div class="table_calss" v-if="tableName != '出荷履历'">
    <el-checkbox v-model="isSelectChecked">
      <span>项目</span>
    </el-checkbox>
    <el-select v-model="firstValue" @clear="clearFirstItem" :class="{ IsChecked: isSelectChecked }" clearable
      placeholder="Select" style="width: 150px">
      <el-option v-for="(item, index) in firstList" :key="index" :label="item" :value="item"
        @click="handleItemClick(index)" />
    </el-select>
    <!-- 全部选择 -->
    <!-- {{ firstValue }} -->
    <div v-if="tableName == '全部履历'" class="whole_calss" :class="{ IsChecked: isSelectChecked }">
      <span>选择</span>
      <el-cascader v-model="selectedOption" :options="options" @change="handleChange" style="width: 150px" clearable
        :show-all-levels="false" />
    </div>
    <!-- 其他表的选择 -->
    <div v-else style="padding-left: 22px; width: 190px;" :class="{ IsChecked: isSelectChecked }">
      <span>选择</span>
      <el-select v-model="selRequestData.selectName" clearable placeholder="Select" style="width: 150px">
        <el-option v-for="(item, index) in twoList" :key="index" :label="item.col" @click="getTwoSelName(item)"
          :value="item.val" />
      </el-select>
    </div>
  </div>
  <!-- 出荷表得选择 -->
  <div class="ship_calss" v-else>
    <el-checkbox v-model="isSelectChecked">
      <span>项目</span>
    </el-checkbox>
    <div>
      <el-select class="ship_select" :class="{ IsChecked: isSelectChecked }" v-model="shipValue" clearable
        placeholder="Select">
        <el-option v-for="(item, index) in firstList" :key="index" :label="item.tableName" :value="item.colName"
          @click="getTwoSelName(item)" />
      </el-select>
    </div>
  </div>
  <!-- 上下限制 -->
  <div class="limit_class" v-if="showDate != true">
    <span class="top_span_text">上限</span>
    <el-input v-model="selRequestData.topLimit" :class="{ IsChecked: isSelectChecked }" style="width: 150px"
      @input="topLimitInput" placeholder="Please input" />
    <span class="lower_sapn">下限</span>
    <el-input v-model="selRequestData.lowerLimit" :class="{ IsChecked: isSelectChecked }" style="width: 150px"
      @input="lowerLimitInput" placeholder="Please input" />
  </div>
  <!-- 时间控件 -->
  <div class="select_date_class" v-else>
    <div class="demo-date-picker" style="display: inline;">
      <span>开始时间</span>
      <el-date-picker style="width: 160px;" :class="{ IsChecked: isSelectChecked }" v-model="selStartDay" type="date"
        placeholder="Pick a day" format="YYYY/MM/DD" value-format="YYYY-MM-DD">
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
          </div>
        </template>
      </el-date-picker>
    </div>
    <el-time-picker v-model="selEndTime" :class="{ IsChecked: isSelectChecked }"
      style="width:160px; padding-left: 5px;" />
    <div class="demo-date-picker" style="display: inline;" :class="{ IsChecked: isSelectChecked }">
      <span class="span_text" style="font-size: 14px;">结束时间</span>
      <el-date-picker style="width: 160px;" v-model="selEndDay" type="date" placeholder="Pick a day" format="YYYY/MM/DD"
        value-format="YYYY-MM-DD">
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
          </div>
        </template>
      </el-date-picker>
    </div>
    <el-time-picker v-model="selStartTime" :class="{ IsChecked: isSelectChecked }"
      style="width:160px;padding-left: 5px;" />
  </div>
</template>

<script setup>

//#region  下拉框代码
import { ref, defineProps, watchEffect, shallowRef, reactive, defineEmits } from 'vue'
import { motorData, rotorData, rrData, gearData, taData, allTableData, shipmentData } from "@/service/Import/tableData";
import { ElMessage } from 'element-plus'

const isSelectChecked = ref(false)

//第一列选择数据
const firstValue = ref("")

//第一列数组
const firstList = ref([])

//第二个选择框数据
const twoList = ref([])
// const shipValue = ref("")
//如果是全部数据
const selectedOption = ref([])
const options = ref([])

const optionList = ref([]) //基础数据 

const shipValue = ref("");  //出荷数据

const serialNumberPattern = ref(/^[A-Za-z0-9#.\s]+$/); //正则验证

const showDate = ref(false)

//时间格式化
const selStartDay = ref(new Date().toISOString().slice(0, 10)),
  selEndDay = ref(new Date().toISOString().slice(0, 10)),
  selStartTime = ref(new Date()),
  selEndTime = ref(new Date(new Date() - 60 * 60 * 1000));

//传给父组件得实体
const selRequestData = reactive({
  selectName: "",
  topLimit: "",
  lowerLimit: "",
  selStartTime: "",
  selEndTime: ""
})

//接受表名
const props = defineProps({
  tableName: String
})

const emit = defineEmits(['selColName'])
const selectName = {
  "Motor履历": motorData.AllMotorTable,
  "Rotor履历": rotorData.AllRotorTable,
  "Gear履历": gearData.AllGearTable,
  "Rr履历": rrData.AllRRTable,
  "Ta履历": taData.AllTatable,
  "全部履历": allTableData.table,
  "出荷履历": shipmentData
}

//获取原始下拉数据
function getFirstColName() {

  optionList.value = selectName[props.tableName]

  firstList.value = props.tableName == "出荷履历" ? optionList.value : getTableColName();
  // console.log(optionList.value);

}

//获取第一列
function getTableColName() {
  // let  firstList = []
  return optionList.value.map(data => {
    if (data.title != "特定列") {
      return data.title;
    }
  }).filter(title => title !== undefined); // 过滤掉 undefined 的项
}

//点击选择事件
const handleItemClick = (index) => {
  selRequestData.selectName = ""
  if (props.tableName == "全部履历") {
    //根据选择列加载对应选项
    twoList.value = optionList.value[index].data;
    options.value = twoList.value.map(firstSel => ({
      value: firstSel.title,
      label: firstSel.title,
      children: firstSel.val.map(twoSel => ({
        value: twoSel.val,
        label: twoSel.col,
      }))
    }));
  }
  else {
    twoList.value = index >= 0 ? optionList.value[index + 1].val : []
  }
}

//上限输入验证
function topLimitInput(e) {
  let topLimit = verifyInput(e)
  //console.log(parseInt(topLimit) < parseInt(selRequestData.lowerLimit));
  selRequestData.topLimit = topLimit
}

//下限输入验证
function lowerLimitInput(e) {
  selRequestData.lowerLimit = verifyInput(e)
}
//判断输入是否符合格式

// let  lastValidInput = ""
function verifyInput(value) {
  let lastValidInput = '';

  if (textChecked()) {
    return ""
  }
  if (value === "") {
    return "";
  }
  if (!serialNumberPattern.value.test(value)) {
    ElMessage({
      message: '输入内容不合法',
      type: 'error',
    });
    return lastValidInput
  } else {
    lastValidInput = value
    return value
  }
}

//检查条件是否选择
function textChecked() {
  // let checkedText = firstValue.value === "" || selRequestData.selectName === ""
  let checkedText;
  if (props.tableName == "出荷履历") {
    checkedText = selRequestData.selectName === "";
  } else if (props.tableName == "全部履历") {
    checkedText = firstValue.value === "" || selectedOption.value == null;
  }
  else {
    checkedText = firstValue.value === "" || selRequestData.selectName === "";
  }
  if (checkedText) {
    ElMessage({
      message: '请选择条件',
      type: 'warning',
    });
  }
  return checkedText;

}

//#region 时间转换
//时间转换
const getTimeString = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const formattedStartTime = ref("")
const formattedEndTime = ref("")

//时间限制
function verifyTime() {
  let dateTime = new Date().toISOString().slice(0, 10)
  let message = "";
  if (selStartDay.value > dateTime) {
    selStartDay.value = dateTime
    message = "开始"
  }
  if (selEndDay.value > dateTime) {
    selEndDay.value = dateTime
    message = "结束"
  }
  if (message !== "") {
    let TimeMessage = `${message}时间超过今天,已重置`
    allterMessage(TimeMessage, "warning")
  }
}
//#endregion

//全部下拉
function handleChange(e) {
  if (e == null) {
    selRequestData.lowerLimit = ""
    selRequestData.topLimit = ""
    twoList.value = null

  } else {
    selRequestData.selectName = e[1]
    selRequestData.selectNameZh = e[0]
  }
}

function getCheacked() {
  let sendToBack = {}
  // let isEmit = false
  let { selectName, } = selRequestData;

  if (selectName === "") {
    allterMessage("条件未选择", "error")
  }
  Object.entries(selRequestData).forEach(([key, value]) => {
    if (value !== "") {
      sendToBack[key] = value;
    }
  });
  emit('selColName', sendToBack)
}

//提示消息
function allterMessage(message, type) {
  if (message === "") {
    return;
  }
  ElMessage({
    message: message,
    type: type,
  });
}

//获取中文名
function getTwoSelName(e) {
  let isName = props.tableName == "出荷履历"
  if (isName) {
    selRequestData.selectName = e["colName"]
    selRequestData.selectNameZh = e["tableName"]
  } else {
    selRequestData.selectNameZh = e["col"];
  }
  console.log(selRequestData);
}

//清除第一列
function clearFirstItem() {
  //
  selRequestData.selectName = ""
  selRequestData.lowerLimit = ""
  selRequestData.topLimit = ""
  twoList.value = null
  if (props.tableName == "全部履历") {
    options.value = null
    selectedOption.value = ""
  }
}

//旧表名与新表名
const oldTableName = shallowRef(props.tableName);
getFirstColName()

watchEffect(() => {
  let { selectName, topLimit, lowerLimit} = selRequestData;
  if (oldTableName.value != props.tableName) {
    getFirstColName()
    isSelectChecked.value = false

    //清空下拉
    clearFirstItem()
    firstValue.value = ""

    oldTableName.value = props.tableName
  }

  // if (props.tableName == "出荷履历") {
  //   selectName = shipValue.value
  // }
  formattedStartTime.value = getTimeString(selStartTime.value)
  formattedEndTime.value = getTimeString(selEndTime.value)
  if (selectName.includes("Date")) {
    // console.log("时间");
    verifyTime()
    showDate.value = true;
    selRequestData.startDateTime = `${selStartDay.value} ${formattedEndTime.value}`;
    selRequestData.endDateTime = `${selEndDay.value} ${formattedStartTime.value}`;
  } else {
    showDate.value = false;
  }
  if (isSelectChecked.value) {
    if (topLimit == "" && lowerLimit == "" ) {
      return;
    }


    getCheacked()
  } else {
    emit('selColName', {})
  }
  if (parseFloat(topLimit) < parseFloat(lowerLimit)) {
    allterMessage("下限大于上限", "error")
  }
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

.select_calss {
  display: flex;
}

.table_calss {
  width: 220px;
  /* border: 1px red solid; */
}

.ship_calss {
  height: 67px;
  width: 180px;
}

.ship_select {
  margin-top: 4px;
  width: 160px;
}

/* 上下限外部div */
.limit_class {
  /* display: inline; */
  position: relative;
  width: 170px;
  padding-top: 3px;
  padding-left: 34px;
}

/* 时间 */
.select_date_class {
  width: 385px;
  padding-top: 5px;
  padding-right: 10px;
}

/* span标签 */
span {
  letter-spacing: 2px;
  font-size: 14px;

}

/* 下限 */
.lower_sapn {
  position: absolute;
  left: 3px;
  bottom: 8px;
}

/* 上限 */
.top_span_text {
  position: absolute;
  left: 3px;
  top: 7px;
}

/* 全部履历的选择 */
.whole_calss {
  padding-left: 22px;
  width: 220px;
}

:deep(.IsChecked .el-select__wrapper) {
  background: white;

}

:deep(.IsChecked .el-input__wrapper) {
  background: white;
}



:deep(.el-select__wrapper) {
  /* background-color: #f2f4e7ce; 浅棕色 */
  /* background-color: #f6f5f5; 稍深的灰色背景 */
  background-color: #e1e1e5;
  /* 稍微更深的灰色背景 */
}
</style>