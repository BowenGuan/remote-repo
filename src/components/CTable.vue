<script setup>
import {reactive, ref, watchEffect} from "vue";
import {useFetch} from "../hook/fetch.js";
const {apiUrl, perPage, payload} = defineProps({
  apiUrl: String, // 'http://rap2api.taobao.org/app/mock/321841/queryList'
  perPage: Number, // 10
  payload: Object, // {}
})

const options = reactive({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...payload, perPage })
});
const url = ref(apiUrl);

watchEffect(() => {
  options.body = JSON.stringify({ ...payload, perPage });
  url.value = apiUrl;
});

const {data, error, loading} = useFetch(url, options)

</script>

<template>
  <el-alert v-if="error" :title="error" type="error" />
  <el-table :data="data" style="width: 100%" v-loading="loading">
    <slot></slot>
  </el-table>
</template>

<style scoped>

</style>