<template>
  <div style="height: 100%; width: 100%; ">
    <div style="padding-left: 20px; padding-right: 20px; ">
      <el-text style="padding-right: 50px; ">内存硬盘剩余容量
        <el-button style="background-color: #459cfb; color: white;" disabled>{{ AvailableSpaceGB }}</el-button>
      </el-text>
      <el-text style="padding-right: 50px;">已使用容量 <el-button style="background-color: #459cfb; color: white;"
          disabled>{{ FolderSize }}</el-button> </el-text>
      <el-text style="padding-right: 50px;">当前时间 <el-button style="background-color: #459cfb; color: white;" disabled>{{
          formattedTime }}</el-button> </el-text>
      <el-text style="padding-right: 50px;">通讯状态
        <btnIPCheck />
      </el-text>
      <div class="outer-container" >
        <div class="inner-container">
          <div class="logo">
            <!-- <img src="Image//logo.png" alt="Logo"> -->
            <img src="../components/Image/logo.png" alt="lao">
          </div>
          <h2 class="title">5HEV#2组付 Traceability System</h2>
        </div>
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
import apiClient from "@/service/request";
import { ref, computed, onMounted } from "vue";
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

const AvailableSpaceGB = ref("");

const FolderSize = ref("")
//获取剩余空间
const getDriveSpace = () => {
  apiClient.get("api/DiskSpace/GetDDriveSpace")
    .then((res) => {
      AvailableSpaceGB.value = res.data.AvailableSpaceGB
    }).catch((err) => {
      console.log(err);

      setTimeout(getDriveSpace, 3000); // 5000毫秒 = 5秒
    })
}

//获取已用文件内存
const getFolderSize = () => {
  apiClient.get("api/DiskSpace/FolderSize")
    .then((res) => {
      FolderSize.value = res.data.FolderSizeGB

    }).catch((err) => {
      console.log(err);

      setTimeout(getFolderSize, 3000); // 5000毫秒 = 5秒
    })
}

onMounted(() => {
  getDriveSpace();
  getFolderSize()
});


</script>

<style>
.outer-container {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
}

.inner-container {
  display: flex;
  align-items: center;
  justify-content: center; /* 在水平方向上居中对齐 */
}

.logo {
  position: absolute;
  left: 25px;
  margin-right: 10px; /* 调整 logo 和标题之间的间距 */
}

.title {
  display: inline-block; /* 或者 display: block; */
  margin: 0 auto; 
}

</style>