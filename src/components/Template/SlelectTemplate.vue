<template>
  <div class="selCalss" v-if="selectName !== '出荷数据'">
    <el-cascader class="selName" v-model="selectedOption" :options="options" @change="handleChange" clearable
      :show-all-levels="false" />
    <!-- <div style="display: inline-block;" > -->
    <div v-if="selName == ''" style="display:none"></div>
    <div v-else style="display: inline-block;">
      <el-date-picker v-if="selName.includes('Date') || selName.includes('Time')"  v-model="value2" type="datetimerange" format="YYYY-MM-DD HH:mm:ss"
        date-format="YYYY/MM/DD" time-format="HH:mm:ss"
        :default-time="value2" :clearable="false" @change="handleChangeClick" />
      <div v-else>
        <span style="margin-left:20px;"> 上限:</span>
        <el-input v-model="input1" :disabled=isdis @change="handleChangeClick" clearable placeholder="Please Input"
          class="selinput" />
        <span>下限:</span>
        <el-input v-model="input2" :disabled=isdis @change="handleChangeClick" clearable placeholder="Please Input"
          class="selinput" />
      </div>
    </div>
  </div>
  <div class="selCalss" v-if="selectName === '出荷数据'">
    <el-cascader class="selName" v-model="selectedOption" :options="options" @change="handleChange" clearable
      :show-all-levels="false" />
    <el-input v-model="input1" :disabled=isdis @change="handleChangeClick" clearable placeholder="Please Input"
      class="selinput" />
  </div>
</template>

<script setup>
// import * as imports from '../../service/Import';
import { defineProps, ref, watchEffect, defineEmits, shallowRef } from 'vue'
import getColName from '../../service/public.js'

const selectedOption = ref([])
const input1 = ref([]);
const input2 = ref([])
const colSelName = ref([])
const selName = ref("");
const input3 = ref([])
const options = ref({})
const isdis = ref(true),
  selectedLabel = ref('')
// const timeDate = ref([])
const props = defineProps({
  selectName: String,
});

const value2 = ref([new Date(new Date() - 60 * 60 * 1000).toLocaleString(), new Date().toLocaleString()])


let selData = []
const emit = defineEmits(['selColName'])

const handleChange = () => {
  input1.value = "",
    input2.value = "",
    input3.value = "",
    selName.value = ""
  selData = []
  if (selectedOption.value !== null) {
    if (props.selectName == "全部数据") {
      selName.value = selectedOption.value[2]
    } else if (props.selectName == "出荷数据") {
      selName.value = selectedOption.value[0]
      selectedLabel.value = options.value.find(option => option.value === selName.value)?.label || ''
    }
    else {
      selName.value = selectedOption.value[1]
    }
    isdis.value = false
    // if (selName.value.includes('Date')) {
    //   console.log(111);
    //   selData.push(selName.value, value2.value);
    //   console.log(selData);

    //   emit('selColName', selData);
    // }
  }
}

const handleChangeClick = () => {
  selData = []
  if (selName.value.includes('Date')) {
      // console.log(111);
      selData.push(selName.value, value2.value[0].toLocaleString(),value2.value[1].toLocaleString());
      // console.log(selData);
      //emit('selColName', selData);
    }else{
      selData.push(selName.value, input1.value, input2.value)

    }
  emit('selColName', selData)

}


//判断原来数据是否改变
const oldSelName = shallowRef(props.tableName);

watchEffect(() => {
  // handleChange()
  if (oldSelName.value != props.selectName) {
    input1.value = "",
      input2.value = "",
      selName.value = "",
      selectedOption.value = ""
    getColName.GetTableColName(props.selectName)
    colSelName.value = getColName.firstName.value;
    if (props.selectName == '全部数据') {
      options.value = colSelName.value.map(data => {
        return {
          value: data.title,
          label: data.title,
          children: data.data.map(item => {
            return {
              value: item.title,
              label: item.title,
              children: item.val.map(x => {
                return {
                  value: x.val,
                  label: x.col
                }
              })
            }
          })
        }
      })
    } else if (props.selectName == "出荷数据") {
      options.value = colSelName.value.map(x => {
        return {
          value: x.colName,
          label: x.tableName
        }
      })

    }
    else {
      options.value = colSelName.value.map(data => {
        return {
          value: data.title,
          label: data.title,
          children: data.val.map(val => {
            return {
              value: val.val,
              label: val.col
            }
          })
        }
      })
    }

  }

}); // immediate: true 表示立即执行一次

</script>
<style>
.selCalss {
  display: inline-block;
}

.selName {
  width: 150px;
}

.selinput {
  width: 120px;
}

@media (min-width: 600px) and (max-width: 1024px) {
  .selName {
    max-width: 60px;
  }

  .selinput {
    max-width: 60px;
    /* display: inline-block; */
  }
}
</style>