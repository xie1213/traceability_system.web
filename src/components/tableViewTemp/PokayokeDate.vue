<template>
    <vxe-colgroup :title=" colName">
        <vxe-column :field="value" :title="colName" width="175px" sortable></vxe-column>
    </vxe-colgroup>
</template>
<script setup>
import { defineProps } from 'vue'
// const colName = ""
const props =  defineProps({
    colName:String,
    value:String
})
console.log("页面测试");
console.log(props);
</script>