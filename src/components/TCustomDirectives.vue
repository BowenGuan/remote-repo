<script setup>

const vHighlight = {
  mounted: (el) => {el.classList.add('is-highlight')}
}
</script>

<template>
  <input v-focus />
  <p v-highlight>This sentence is important!</p>
</template>

<style scoped>
.is-highlight {
  color: black;
  background-color: #FFFF00;
}
</style>