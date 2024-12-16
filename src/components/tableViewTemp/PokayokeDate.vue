<template>
    <vxe-colgroup :title=" colName">
        <vxe-column :field="value" :title="colName" width="175px" sortable></vxe-column>
    </vxe-colgroup>
</template>
<script setup>
import { defineProps } from 'vue'
// const colName = ""
 defineProps({
    colName:String,
    value:String
})
</script>