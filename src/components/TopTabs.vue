<template>
  <div style="height: 100%; width: 100%">
    <div>
      <el-text style="padding-right: 50px;">内存硬盘剩余容量 <el-button type="primary" disabled>178 G</el-button> </el-text>
      <el-text style="padding-right: 50px;">已使用容量 <el-button type="primary" disabled>10 M</el-button> </el-text>
      <el-text style="padding-right: 50px;">当前时间 <el-button type="primary" disabled>{{ formattedTime }}</el-button> </el-text>
      <el-text style="padding-right: 50px;">通讯状态 <btnIPCheck/></el-text>
      <div style="border: 1px solid black;height: 60px;width:99% ;text-align: center;">
        <h2>トレ-サビリティシステム</h2>
      </div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(tabName, index) in TableName" :key="index" :label="tabName" :name="tabName" />
        <showTable :tableName="activeName" />
        <!-- <NewSelTemp :tableName="activeName"/> -->
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
// MotorView
import showTable from "@/components/ModelView/showTable.vue";
import btnIPCheck from '@/components/Template/IPcheck.vue';

import { ref ,computed} from "vue";
// import NewSelTemp from "./Template/newSelTemp.vue";

const TableName = [
  "Motor履历",
  "Rotor履历",
  "Gear履历",
  "Rr履历",
  "Ta履历",
  "全部履历",
  "出荷履历"
]
const activeName = ref("Motor履历"); // 这个变量用来存储当前激活的标签名

const handleClick = (tab) => {
  activeName.value = tab.props.name;
};

const nowTime = ref(new Date());

setInterval(() => {
  nowTime.value = new Date();
}, 1000);

const formattedTime = computed(() => {
  return nowTime.value.toLocaleString();
});

</script>