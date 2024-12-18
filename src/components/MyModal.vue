<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <el-button @click="open = true">Open Modal</el-button>
  <Teleport to="body" >
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <el-button @click="open = false">Close</el-button>
    </div>
  </Teleport>

</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border: 1px solid white;
  padding: 20px;
}
</style>