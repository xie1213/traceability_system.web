<template>
    <div class="selCalss">
    <el-cascader class="selName" v-model="selectedOption" :options="options" @change="handleChange" clearable :show-all-levels="false" />
      <!-- <div style="display: inline-block;" > -->
    <div v-if="selName==''" style="display:none"></div>
      <div  v-else style="display: inline-block;" >
        <TimeTemplate @childEvent="GetTime" v-if="selName.includes('Date') || selName.includes('Time')"/>
        <div v-else >
          <span style="margin-left:20px;">{{selectName == '出荷数据'?selectedLabel:'上限'}}:</span>
          <el-input v-model="input1" :disabled=isdis @change="handleChangeClick" clearable size="large"
            placeholder="Please Input"  class="selinput" />
          <span  v-if="selectName !== '出荷数据'">下限:</span>
          <el-input  v-if="selectName !== '出荷数据'" v-model="input2" :disabled=isdis @change="handleChangeClick" clearable size="large"
            placeholder="Please Input" class="selinput"  />
        </div>
      </div>
    </div>
      
    </template>
    
    <script setup>
    // import * as imports from '../../service/Import';
    import { defineProps, ref, watchEffect, defineEmits, shallowRef } from 'vue'
    // import getColName from '../../service/public.js'
    import TimeTemplate from './TimeTemplate.vue'
    import {GetTableColName} from "@/service/GetDataMethod/utils"

    const selectedOption = ref([])
    const input1 = ref([]);
    const input2 = ref([])
    const colSelName = ref([])
    const selName = ref("");
    const input3 = ref([])
    const options = ref({})
    const isdis = ref(true),
    selectedLabel =ref('')
    // const timeDate = ref([])
    const props = defineProps({
      selectName: String,
    });
    
    let selData = []
    const emit = defineEmits(['selColName'])
    
    const handleChange = () => {
      input1.value = "",
        input2.value = "",
        input3.value = "",
        selName.value =""
      if (selectedOption.value !== null) {
        if (props.selectName =="全部数据") {
          selName.value = selectedOption.value[2]
        }else if (props.selectName == "出荷数据"){
           selName.value = selectedOption.value[0]
           
          selectedLabel.value = options.value.find(option => option.value === selName.value)?.label || ''
          // console.log(selectedLabel);
        }
        else{
           selName.value = selectedOption.value[1]
        }
        isdis.value = false
        if (selName.value.includes('Date')) {
          selData.push(selName.value, TimeDate.value[0], TimeDate.value[1]);
          emit('selColName', selData)
          
        }
      }
    }
    // const selData = ref([]);
    
    const TimeDate = ref("")
    const GetTime = (item) => {
      TimeDate.value = item
      //IsBtn = true
    }
    const handleChangeClick = () => {
    
      if (input1.value != "" && input2.value != "") {
        selData.push(selName.value, input1.value, input2.value)
    
        emit('selColName', selData)
      }
    }
    
    const getBasicTable = (colSelName)=>{
        // console.log(colSelName);
        options.value = colSelName.map(data => {
            // console.log(data.title);
            // console.log(data.val);
            data.val.map(val=>{
                console.log(val.col,val.val);
            })
            // return {
            //   value: data.title,
            //   label: data.title,
            //   children: data.val.map(val => {
            //     return {
            //       value: val.val,
            //       label: val.col
            //     }
            //   })
            // }
          })
    }   
    
    //判断原来数据是否改变
    const oldSelName = shallowRef(props.tableName);
    
    watchEffect(() => {
      if (oldSelName.value != props.selectName) {
        input1.value = "",
        input2.value = "",
        selName.value = "",
        selectedOption.value = ""
        //getColName.GetTableColName(props.selectName)
        colSelName.value = GetTableColName(props.selectName);
        // console.log(colSelName.value);

        if (colSelName.value!=null) {
            
            getBasicTable(colSelName.value)
        }
        // options = colSelName.

    //     if (props.selectName == '全部数据') {
    //       options.value = colSelName.value.map(data => {
    //         return {
    //           value: data.title,
    //           label: data.title,
    //           children: data.data.map(item => {
    //             return {
    //               value: item.title,
    //               label: item.title,
    //               children: item.val.map(x => {
    //                 return {
    //                   value: x.val,
    //                   label: x.col
    //                 }
    //               })
    //             }
    //           })
    //         }
    //       })
    //     }else if (props.selectName == "出荷数据") {
    //       options.value = colSelName.value.map(x=>{
    //         return{
    //           value:x.colName,
    //           label:x.tableName
    //         }
    //       })
    
    //     }
    //     else {
    //       options.value = colSelName.value.map(data => {
    //         return {
    //           value: data.title,
    //           label: data.title,
    //           children: data.val.map(val => {
    //             return {
    //               value: val.val,
    //               label: val.col
    //             }
    //           })
    //         }
    //       })
    // console.log(options);
    //     }
    
      }
       
    }); // immediate: true 表示立即执行一次
    
    </script>
      <style>
      .selCalss{
        display: inline-block;
      }.selName{
        width:150px
      }.selinput{
        width: 120px;
      }
    @media (min-width: 600px) and (max-width: 1024px) {
      .selName  {
        max-width: 60px;
      }
      .selinput  {
        max-width: 60px;
        /* display: inline-block; */
      }
      }
    
      </style>