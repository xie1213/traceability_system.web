<template>
        <vxe-table :data="tableData" v-bind="TableConfig">
            <vxe-column field="SerialNo" title="序列号" sortable />
            <vxe-column field="ProductNo" title="品番" sortable />
            <vxe-column field="Printing" title="印字标识" sortable />
            <vxe-column field="LeadTimeDate" title="先行时间" sortable :formatter="formatDate" />
            <vxe-column field="ShippingTimeDate" title="出荷时间" sortable :formatter="formatDate" />
            <vxe-column field="Destination" title="出荷目的地" sortable />
            <vxe-column field="DestinationArea" title="目的地工区" sortable />
            <vxe-column field="ReceivingPoint" title="受入口" sortable />
            <vxe-column field="BackNo" title="背番号" sortable />
            <vxe-column field="OrderNo" title="订单号" sortable />
            <vxe-column field="PlineNo" title="Pline号" sortable />
            <vxe-column field="ReceivingNo" title="受领书编号" sortable />
        </vxe-table>
</template>
<script setup>
import { defineProps } from 'vue';
import { TableConfig } from '@/service/GetDataMethod/utils'
import XEUtils from 'xe-utils'

defineProps({
    tableData: Array,
})

const formatDate = ({ cellValue }) => {
    return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
}
</script>