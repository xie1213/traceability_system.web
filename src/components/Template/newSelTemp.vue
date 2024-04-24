<template>
  <div style="width: 240px; display: flex;">

    <div v-if="tableName != '出荷履历'" style="flex-direction: column;">
      <el-checkbox v-model="isSelectChecked" @change="selectChange">项目</el-checkbox>
      <el-select v-model="firstValue" clearable placeholder="Select" style="width: 150px">
        <el-option v-for="(item, index) in firstList" :key="index" :label="item" :value="item"
          @click="handleItemClick(index)" />
      </el-select>
      <div v-if="tableName == '全部履历'" style="padding-left: 22px; width: 180px;">
        <span style="font-size: 14px;">选择</span>
        <el-cascader v-model="selectedOption" :options="options" @change="handleChange" style="width: 150px" clearable
          :show-all-levels="false" />
      </div>
      <div v-else style="padding-left: 22px; width: 180px;">
        <span style="font-size: 14px;">选择</span>
        <el-select v-model="twoValue" clearable placeholder="Select" style="width: 150px">
          <el-option v-for="(item, index) in twoList" :key="index" :label="item.col" :value="item.val" />
        </el-select>
      </div>
    </div>
    <div v-else style="padding-left: 23px;">
      <el-checkbox v-model="isSelectChecked" @change="selectChange">项目</el-checkbox>
      <el-select v-model="shipValue" clearable placeholder="Select" style="width: 150px">
        <el-option v-for="(item, index) in firstList" :key="index" :label="item.tableName" :value="item.colName" />
      </el-select>
    </div>
    <div v-if="!twoValue.includes('Date')" style=" flex-direction: row; padding-left: 22px; width: 240px;">
    <span style="font-size: 14px;">上限</span>      
      <el-input v-model="topLimit" style="width: 150px" :pattern="serialNumberPattern" @input="topLimitInput"
        placeholder="Please input" />

    <span style="font-size: 14px;">下限</span>
        
        <el-input v-model="lowerLimit" style="width: 150px" :pattern="serialNumberPattern" @input="lowerLimitInput"
          placeholder="Please input" />
    </div>
  </div>


  <!-- <div style="width: 240px; display: inline;">
    <div v-if="!twoValue.includes('Date')" style="display: inline;padding: 5px 0 0 15px;">
      <div>
        <span style="font-size: 14px;">上限</span>
        <el-input v-model="topLimit" style="width: 150px" :pattern="serialNumberPattern" @input="topLimitInput"
          placeholder="Please input" />
      </div>
      <div>
        <span style="font-size: 14px;">下限</span>
        <el-input v-model="lowerLimit" style="width: 150px" :pattern="serialNumberPattern" @input="lowerLimitInput"
          placeholder="Please input" />
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
  <el-date-picker style="width: 160px;" v-model="selEndDay" type="date" placeholder="Pick a day" format="YYYY/MM/DD"
    value-format="YYYY-MM-DD">
    <template #default="cell">
            <div class="cell" :class="{ current: cell.isCurrent }">
              <span class="text">{{ cell.text }}</span>
            </div>
          </template>
  </el-date-picker>
</div>
<el-time-picker v-model="selStartTime" style="width:160px;padding-left: 5px;" />
</div>

</div> -->


</template>

<script setup>

//#region  下拉框代码
import { ref, defineProps, watchEffect, shallowRef } from 'vue'
import { motorData, rotorData, rrData, gearData, taData, allTableData, shipmentData } from "@/service/Import/tableData";

const isSelectChecked = ref(false)

//第一列选择数据
const firstValue = ref("")

//第一列数组
const firstList = ref([])

//第二个选择框数据
const twoValue = ref("")
const twoList = ref([])

//如果是全部数据
const selectedOption = ref([])
const options = ref([])

//基础数据
const optionList = ref([])

//出荷选项
const shipValue = ref("");
const props = defineProps({
  tableName: String
})

const selectName = {
  "Motor履历": motorData.AllMotorTable,
  "Rotor履历": rotorData.AllRotorTable,
  "Gear履历": gearData.AllGearTable,
  "Rr履历": rrData.AllRRTable,
  "Ta履历": taData.AllTatable,
  "全部履历": allTableData.table,
  "出荷履历": shipmentData
}

//是否勾选
function selectChange(e) {
  console.log(e);
}

//获取
function getFirstColName() {

  optionList.value = selectName[props.tableName]
  firstList.value = props.tableName == "出荷履历" ? optionList.value : getTableColName();
  // console.log(optionList);
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
  twoValue.value = ""
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

//全部下拉选择
function handleChange() {
  console.log(selectedOption.value);
}

function clearItem() {
  twoValue.value = ""
  twoList.value = []
  options.value = [],
    selectedOption.value = ""
}
//旧表名与新表名
const oldTableName = shallowRef(props.tableName);

watchEffect(() => {
  if (oldTableName.value != props.tableName) {
    firstList.value = ""
    twoList.value = ""
  }
  if (firstValue.value == "") {
    console.log("清除");
    clearItem()
  }
  console.log(shipValue.value);
  getFirstColName()
})
// const oldSelectName = shallowRef(firstValue.value);
console.log(twoList.value);
//#endregion

</script>