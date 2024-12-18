<script setup>
import {useMouse} from "../hook/mouse.js";
const {x,y} = useMouse();

</script>

<template>
  <h4>pageX: {{x}}</h4>
  <h4>pageY: {{y}}</h4>
</template>

<style scoped>

</style>