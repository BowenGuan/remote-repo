<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <el-space>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/tableview">Go to TableView</RouterLink>
  </el-space>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
</script>