<script setup>
import {inject, reactive} from "vue";

const i18n = reactive(inject('i18n'))

</script>

<template>
  <h1>{{$translate('greetings.hello.en')}}</h1>
  <h1>{{i18n.greetings.hello.cn}}</h1>
</template>

<style scoped>

</style>