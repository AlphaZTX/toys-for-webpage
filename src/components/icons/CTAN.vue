<script setup lang="ts">
defineExpose({
    name: 'CTAN'
})
</script>

<template>
  <div class="CTAN-div"><span style="line-height: calc(1rem + 3vh)">CTAN</span></div>
</template>

<style scoped>
.CTAN-div {
    color: #8DA2C6;
    font-weight: bolder;
    text-align: center;
    border-radius: 100%;
    border: #8DA2C6 2pt solid;
    height: calc(1rem + 3vh);
}

.CTAN-div:hover {
    cursor: pointer;
}
</style>