<template>
  <el-date-picker class="timeStyle" v-model="value2" type="datetimerange" format="YYYY-MM-DD HH:mm:ss" date-format="YYYY/MM/DD"
    time-format="HH:mm:ss" @calendar-change="handleDateChange" @change="checkBtn" :default-time="value2" :clearable="false"/>
</template>

<script setup>
import { ref, reactive, defineEmits, defineProps, shallowRef,watchEffect } from 'vue'
import { ElMessageBox } from 'element-plus'

const props = defineProps({
  tableName: String
});

const value2 = ref([new Date(new Date() - 60 * 60 * 1000), new Date()])
const formattedDates = reactive({ value: [] })
const emit = defineEmits(['childEvent'])
const oldTableName = shallowRef(props.tableName);

const handleDateChange = (value) => {
  if (value[1] > new Date()) {
    value2.value = [value[0], new Date()];
  }
}

const checkBtn = () => {
  ElMessageBox.confirm('确定查询吗')
    .then(() => {
      // console.log("成功");
      formattedDates.value.investigation = "手动";
      emit('childEvent', formattedDates.value)
    }).catch(() => {
      value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
    })
}

watchEffect(() => {
  if (oldTableName.value !== props.tableName) {
    value2.value = [new Date(new Date() - 60 * 60 * 1000), new Date()]
    formattedDates.value.investigation = "恢复"
    oldTableName.value = props.tableName
  }
  formattedDates.value.value = value2.value.map(date => date.toLocaleString())
  formattedDates.value.investigation = "自动";
})

emit('childEvent', formattedDates.value)

</script>

<style>
.timeStyle {
  display: inline-block;
}
@media (min-width: 600px) and (max-width: 1024px) {
  .timeStyle {
    max-width: 60px;
  }
}
</style>
