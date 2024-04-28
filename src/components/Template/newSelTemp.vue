<template>
  <div style="display: flex;">
    <!-- 不等于出荷表 -->
    <div v-if="tableName != '出荷履历'" style="flex-direction: column;">

      <el-checkbox v-model="isSelectChecked" >项目</el-checkbox>

      <el-select v-model="firstValue" clearable placeholder="Select" style="width: 150px">
        <el-option v-for="(item, index) in firstList" :key="index" :label="item" :value="item"
          @click="handleItemClick(index)" />
      </el-select>
      <!-- 全部选择 -->
      <!-- {{ firstValue }} -->
      <div v-if="tableName == '全部履历'" style="padding-left: 22px; width: 180px;">
        <span style="font-size: 14px;">选择</span>
        <el-cascader v-model="selectedOption" :options="options" @change="handleChange" style="width: 150px" clearable
          :show-all-levels="false" />
      </div>
      <!-- 其他表的选择 -->
      <div v-else style="padding-left: 22px; width: 180px;">
        <span style="font-size: 14px;">选择</span>
        <el-select v-model="selRequestData.selectName" clearable placeholder="Select" style="width: 150px">
          <el-option v-for="(item, index) in twoList" :key="index" :label="item.col" :value="item.val" />
        </el-select>
      </div>
    </div>
    <!-- 出荷表得选择 -->
    <div v-else style="padding-left: 23px;">
      <el-checkbox v-model="isSelectChecked" >项目</el-checkbox>
      <div>
        <el-select v-model="shipValue" clearable placeholder="Select" style="width: 150px">
          <el-option v-for="(item, index) in firstList" :key="index" :label="item.tableName" :value="item.colName" />
        </el-select>
      </div>

    </div>

    <!-- 上下限制 -->
    <div v-if="!selRequestData.selectName.includes('Date')" style="padding-left: 22px; width: 180px;">
      <span style="font-size: 14px;">上限</span>
      <el-input v-model="selRequestData.topLimit" style="width: 150px" @input="topLimitInput"
        placeholder="Please input" />
      <span style="font-size: 14px;">下限</span>
      <el-input v-model="selRequestData.lowerLimit" style="width: 150px" @input="lowerLimitInput"
        placeholder="Please input" />
    </div>
    <!-- 时间控件 -->
    <div v-else style="width: 395px;padding: 5px 0 0 15px;">
      <div class="demo-date-picker" style="display: inline; padding: 5px;">
        <span style="font-size: 14px;">开始时间: </span>
        <el-date-picker style="width: 155px;" v-model="selStartDay" type="date" placeholder="Pick a day"
          format="YYYY/MM/DD" value-format="YYYY-MM-DD">
          <template #default="cell">
            <div class="cell" :class="{ current: cell.isCurrent }">
              <span class="text">{{ cell.text }}</span>
            </div>
          </template>
        </el-date-picker>
      </div>
      <el-time-picker v-model="selEndTime" style="width:155px" />
      <div class="demo-date-picker" style="display: inline;padding-left: 6px;">
        <span style="font-size: 14px;">结束时间: </span>
        <el-date-picker style="width: 155px;" v-model="selEndDay" type="date" placeholder="Pick a day"
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

// const emit = defineEmits(['selColName'])  //向父组件传值

const serialNumberPattern = ref(/^[A-Za-z0-9\b ]+[A-Za-z0-9\b ]*$/); //正则验证


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


//清除数据
function clearItem() {
  Object.keys(selRequestData).forEach(key => {
    selRequestData[key] = "";
  });
}

//上限输入验证
function topLimitInput(e) {
  selRequestData.topLimit = verifyInput(e)
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
    console.log(lastValidInput);
    // if (lastValidInput.length ==1) {
    //   lastValidInput =""
    // }
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

const formattedStartTime = getTimeString(selStartTime.value)
const formattedEndTime = getTimeString(selEndTime.value)

//获取时间
// function getRequsetTime() {
//   if (selRequestData.selectName.includes('Date')) {
//     console.log("时间");
//     console.log(selStartDay.value);
//     selRequestData.selStartTime = `${selStartDay.value} ${formattedEndTime}`;
//     selRequestData.selEndTime = `${selEndDay.value} ${formattedStartTime}`;
//   }
// }

//时间限制
function verifyTime() {
  let dateTime = new Date().toISOString().slice(0, 10)
  console.log(dateTime);
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
    allterMessage(TimeMessage,"warning")
  }
}
//#endregion

//全部下拉
function handleChange(e) {
  selRequestData.selectName = e[1]
}

function getCheacked() {
  let sendToBack = {}
  // let isEmit = false
  let { selectName, topLimit, lowerLimit } = selRequestData;
  //判断是否为空值
  if (!selectName.includes("Date")) {

    if (topLimit === "") {
      allterMessage("上限值为空", "error")
    }

    if (lowerLimit === "") {
      allterMessage("下限值为空", "error")
    }
  }
  if (selectName === "") {
    allterMessage("条件未选择", "error")
  }


  Object.entries(selRequestData).forEach(([key, value]) => {
    if (value !== "") {
      sendToBack[key] = value;
    }
  });
  console.log(sendToBack);

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

//旧表名与新表名
const oldTableName = shallowRef(props.tableName);
getFirstColName()

watchEffect(() => {
  if (oldTableName.value != props.tableName) {
    getFirstColName()
    // selectChange(false)
    oldTableName.value = props.tableName
  }
  if (firstValue.value == "") {
    clearItem()
  }
  if (props.tableName == "出荷履历") {
    selRequestData.selectName = shipValue.value
  }

  if (selRequestData.selectName.includes("Date")) {
    // console.log("时间");
    verifyTime()
    
    selRequestData.startDateTime =`${selStartDay.value} ${formattedEndTime}`;
    selRequestData.endDateTime =`${selEndDay.value} ${formattedStartTime}`;
  }
  // selRequestData.checked = isSelectChecked.value
  if (isSelectChecked.value == true) {
    getCheacked()
  }
 

    //结束时间
    
  // selectChange()
  // getCheacked();
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