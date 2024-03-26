<template>
    <vxe-grid ref="gridRef" header-cell-class-name="titleclsss" v-bind="gridOptions">
    </vxe-grid>
</template>
<script setup>
import { gridOptions,GetTableColName,loadColumnAndData,gridRef } from '@/service/GetDataMethod/utils'
import {defineProps} from 'vue'
const props = defineProps({
  tableName: String,
})
// console.log(props.tableName);

GetTableColName(props.tableName)
loadColumnAndData()


</script>