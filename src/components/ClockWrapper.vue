<script setup lang="ts">
defineExpose({
  name: 'ClockWrapper'
})
</script>

<template>
  <iframe src="/clock.html" style="width: 100%; height: calc(100vh - 5px);
  border:none;"/>
</template>

<style>
body {
  margin: 0;
}
</style>