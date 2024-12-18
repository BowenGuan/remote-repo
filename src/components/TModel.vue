<script setup>

import {onUpdated, useAttrs} from "vue";

 const modelValueA = defineModel('modelValueA',{
   default: 'abc'
 })
 const [modelValueB, modifiers] = defineModel('modelValueB',{
   default: 'abc',
   set(value) {
     if (modifiers.capitalize) {
       return value.charAt(0).toUpperCase() + value.slice(1)
     }
     return value
   }
 })
defineOptions({
  inheritAttrs: false,
})

 const attrs = useAttrs()

 onUpdated(() => {
   console.log('onUpdated attrs', attrs)
 })
</script>

<template>
  <div>
    <input v-model.trim="modelValueA" v-bind="$attrs"/>
    <input v-model="modelValueB" v-bind="$attrs"/>
    <section>Parent bound v-model is: {{ modelValueA }} - {{modelValueB}}</section>
    $attrs - {{$attrs}} - {{attrs}}
  </div>
<!--  <button @click="update">Increment</button>-->
</template>

<style scoped>

</style>

