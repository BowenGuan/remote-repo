<script setup>
import {inject, ref} from "vue";

const userName = inject("userName")
const show = ref(true)
</script>

<template>
  <el-button @click="show = !show">Toggle</el-button>
  <Transition name="opacity">
    <p v-if="show">Hello {{userName}}</p>
  </Transition>
  <Transition name="slide-fade">
    <p v-if="show">Hello {{userName}}</p>
  </Transition>
  <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>

</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 2s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
  color: rebeccapurple;
}




.slide-fade-enter-active{
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all 2s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>