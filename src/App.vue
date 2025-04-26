<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView/>
  </ElConfigProvider>
</template>

<style scoped>

</style>
