<script setup>

</script>

<template>

  <el-card style="max-width: 480px">
    <template #header v-if="$slots.header">
      <div class="card-header">
        <slot name="header" :count="1"></slot>
      </div>
    </template>
    <slot></slot>
    <template #footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </el-card>
</template>

<style scoped>

</style>