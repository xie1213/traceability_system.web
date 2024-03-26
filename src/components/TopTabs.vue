<template>
  <div style="height: 100%; width: 100%">
    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(tabName, index) in TableName" :key="index" :label="tabName" :name="tabName" />
        <!-- <TableTemp :tableName="activeName"/>   -->
        <!-- <TimeTemplate @childEvent="getTimeDate" :tableName="tableName" /> -->
        <MotorView :tableName="activeName" />
        <!-- <component :is="selectedComponent" :tableName="activeName" :requestData="requestData" /> -->
        <!-- <newTestTemp /> -->
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
// MotorView
import { ref ,MotorView} from "@/service/Import";
// import newTestTemp from "./Template/newTestTemp.vue";
const TableName = [
  "MotorTable",
  "RotorTable",
  "GearTable",
  "Rrtable",
  "Tatable",
  "全部数据",
  "出荷数据",
];
const activeName = ref("MotorTable"); // 这个变量用来存储当前激活的标签名

const handleClick = (tab) => {
  activeName.value = tab.props.name;
};


</script>