<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['onSubmit'])
const onSubmit = () => {
  emit('onSubmit', Object.assign({},formObj.data))
}
const onReset = () => {
  formObj.data = initData()
}

const initData = () => {
  return {
    user: '',
    region: '',
  }
}

const formType = {
  input: Symbol(),
  select: Symbol(),
}

const formObj = reactive({
  formConfig: {
    inline: true,
    class: ['demo-form-inline']
  },
  data: initData(),
  formList: [
    {
      type: formType.input,
      name: 'user',
      label: '姓名',
      placeholder: '输入姓名'
    },
    {
      type: formType.select,
      name: 'region',
      label: '地区',
      placeholder: '输入地区'
    },
  ]
})


</script>

<template>
  <el-form v-bind="formObj.formConfig" :model="formObj.data">
    <template v-for="(formItem, index) in formObj.formList" :key="index">
      <el-form-item :label="formItem.label">
        <template v-if="formItem.type === formType.input">
            <el-input v-model="formObj.data[formItem.name]" :placeholder="formItem.placeholder" clearable/>
        </template>
        <template v-else-if="formItem.type === formType.select">
          <el-select
              v-model="formObj.data[formItem.name]"
              :placeholder="formItem.placeholder"
              clearable
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </template>
        <template v-else>
        </template>
      </el-form-item>
    </template>
  </el-form>
  <el-button type="primary" @click="onSubmit">🔍Query</el-button>
  <el-button type="danger" @click="onReset">↩️Reset</el-button>

</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>