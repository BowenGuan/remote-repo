<script setup>

import CForm from "./CForm.vue";
import CTable from "./CTable.vue";
import {ref} from "vue";
const handleEdit = (index, row) => {
  console.log(index, row);
}
const params =ref({})
const onFormSubmit = (payload) => {
  params.value = payload;
}

const url = ref('http://rap2api.taobao.org/app/mock/321841/queryList1')
setTimeout(() => {
  url.value = 'http://rap2api.taobao.org/app/mock/321841/queryList'
},3000)
</script>

<template>
  {{url}}
0  <CForm @on-submit="onFormSubmit"></CForm>
  <CTable
      :api-url="url"
      :per-page="10"
      :payload="params"
  >
    <el-table-column prop="cname" label="cname" width="180" />
    <el-table-column prop="province" label="province" width="180" />
    <el-table-column prop="city" label="city" />
    <el-table-column prop="birth" label="birth" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </CTable>
</template>

<style scoped>

</style>