<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TProps from "@/components/TProps.vue";
import {provide, reactive, ref, readonly, defineAsyncComponent, inject} from "vue";
import TModel from "@/components/TModel.vue";
import TSlot from "@/components/TSlot.vue";
import CSearchPane from "@/components/CSearchPane.vue";
import TInject from "@/components/TInject.vue";
import TLoading from "@/components/TLoading.vue";
import TComposables from "@/components/TComposables.vue";
import TCustomDirectives from "@/components/TCustomDirectives.vue";
import TPlugins from "@/components/TPlugins.vue";
import TTrans from "@/components/TTrans.vue";
import TTeleport from "../components/TTeleport.vue";
const arr = reactive([1,2,3])
const arrPush = function (payload){
  arr.push(...payload)
}
const msg = ref('hello')
setTimeout(() => {
  msg.value = 'kiki'
  // modelValueB.value = 'kfc'
}, 3000)
setTimeout(() => {
  msg.value = 'nini'
}, 4000)

const modelValueA = ref('');
const modelValueB = ref('');
const className = reactive(['t-input'])
setTimeout(() => {
  className.push('b-input')
}, 2000)

const AsyncComp = defineAsyncComponent({
  loader: () => new Promise(resolve => setTimeout(resolve(import('@/components/TAsync.vue')), 2000)),
  loadingComponent: TLoading,
  errorComponent: TInject,
  delay: 200,
  timeout: 3000
})

const userName = ref('kiki')
const location = ref('North Pole')
const updateLocation = () => {
  location.value = 'South Pole'
}
provide('userName', userName)
provide('location', {
  location: readonly(location),
  updateLocation
})
setTimeout(() => {
  userName.value = 'nini'
}, 1000)

const activeName = ref('じゅうに')

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <el-tabs v-model="activeName">
    <el-tab-pane label="table" name="いち">
      <CSearchPane></CSearchPane>
    </el-tab-pane>
    <el-tab-pane label="hello" name="に">
      <HelloWorld :msg="msg"/>
    </el-tab-pane>
    <el-tab-pane label="props" name="さん">
      <TProps v-bind="{ id: 'r', title: 'My Journey with Vue'}" :arr="arr" @push-arr="arrPush"></TProps>
    </el-tab-pane>
    <el-tab-pane label="model" name="よん">
      <section>Parent bound v-model is: {{ modelValueA }} - {{modelValueB}}</section>
      <TModel
          v-model:model-value-a.trim="modelValueA"
          v-model:model-value-b.capitalize="modelValueB"
          :class="className"
      />
    </el-tab-pane>
    <el-tab-pane label="slot" name="ご">
      <TSlot>
        <template #header="{count}">
          <span>Title {{count}}</span>
        </template>
        <template #default>
          <el-button>Button</el-button>
        </template>
      </TSlot>
    </el-tab-pane>
    <el-tab-pane label="Provide/Inject" name="ろく">
      <TInject></TInject>
    </el-tab-pane>
    <el-tab-pane label="Async" name="しち">
      <AsyncComp></AsyncComp>
    </el-tab-pane>
    <el-tab-pane label="Composable" name="なち">
      <TComposables></TComposables>
    </el-tab-pane>
    <el-tab-pane label="CustomDirectives" name="なな">
      <TCustomDirectives></TCustomDirectives>
    </el-tab-pane>
    <el-tab-pane label="plugins/i18n" name="じゅう">
      <TPlugins></TPlugins>
    </el-tab-pane>
    <el-tab-pane label="trans" name="じゅういち">
      <TTrans></TTrans>
    </el-tab-pane>
    <el-tab-pane label="teleport" name="じゅうに">
      <TTeleport></TTeleport>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
