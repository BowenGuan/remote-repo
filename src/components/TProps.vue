<script setup>
import {computed, ref} from "vue";

const {title, id, arr} = defineProps({
  title: String,
  id: String,
  arr: Array,
})
const emits = defineEmits({
  pushArr: (payload => {
    if(payload && payload.length > 0){
      return true
    }else {
      return false
    }
  })
})
const desc = computed(() => {
  return title.toUpperCase() + '-' +id
})
const myTitle = ref(title)
const doAdd = () => {
  emits('pushArr', [])
}
setTimeout(() => {
  myTitle.value = 'kk zone'
}, 2000)
</script>

<template>
  <h1>{{desc}}</h1>
  <h1>{{myTitle}}</h1>
  <h1>{{arr}}</h1>
  <button @click="$emit('pushArr', [1,2,3])">Add</button>
  <button @click="doAdd">Add</button>
</template>

<style scoped>

</style>