<script setup>
import {inject} from "vue";
import {token} from "./key.js";
const userName = inject('userName')
const {location,updateLocation} = inject('location')
const myToken = inject(token, '默认值')
setTimeout(() => {
  userName.value = 'kiki'
}, 2000)



</script>

<template>
  <h5>inject userName: {{userName}}</h5>
  <h5>inject token: {{myToken}}</h5>
  <h5>inject location: {{location}}</h5>
  <el-button @click="updateLocation">UPDATE</el-button>
</template>

<style scoped>

</style>