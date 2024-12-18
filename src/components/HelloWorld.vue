<script setup>
import {ref, onUpdated, onBeforeUpdate, reactive, watch, watchEffect} from 'vue'
import TRow from "./TRow.vue";
import TOption from "./TOption.vue";

const { msg }= defineProps({
  msg: String,
})

watchEffect(() => {
  console.log('watchEffect------>' + msg);
})

watch(() => msg, (newVal) => {
  console.log('watch------>' + newVal);
})

const obj = reactive({
  count: 0,
})
const q = ref('');
const a = ref('');
const selectedValue = ref('')
watchEffect(async () => {
  const res = await fetch(`https://yesno.wtf/api?q=${q.value}`);
  const data = await res.json();
  a.value = data?.answer ?? 'nothing';
})

watch(() => obj.count, (newValue) => {
  console.log('newValue' + newValue)
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate --> ' + obj.count)
})

onUpdated(() => {
  console.log('onUpdated.... ' + obj.count)
})
</script>

<template>
  <table style="border: 2px solid black">
      <t-row></t-row>
  </table>
  <select v-model="selectedValue">
    <t-option></t-option>
  </select>
  <section>{{selectedValue}}</section>
  <h1>{{a}}</h1>
  <input v-model="q" />

  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="obj.count++">count is {{ obj.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
