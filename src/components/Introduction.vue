<script setup lang="ts">
import {ref, watch} from 'vue';
import global from "@/utils/global.vue";

defineExpose({
    name: 'Introduction'
})

const isDark = global.isDark
console.log(isDark == true)
const photoSrc = ref(isDark ? '/photo-yellow.png' : '/photo.jpg')
watch(global.isDark, async (newValue, oldValue) => {
    photoSrc.value = newValue ? '/photo-yellow.png' : '/photo.jpg'
})

function open(url: string): void {
    window.open(url)
}
function touchDogHead(): void {
    const srcList: string[] = ['/porn0.png', '/porn1.png', '/porn2.png']
    for (let i = 0; i < srcList.length; i++) {
        if (photoSrc.value === srcList[i]) {
            photoSrc.value = srcList[(i + 1) % srcList.length]
            return
        }
    }
    photoSrc.value = srcList[0]
}
</script>

<template>
  <div>
    <el-image @click="touchDogHead" class="dog-head" :src="photoSrc" :fit="'cover'">
      <template #error>
        <p>绿🐕加载失败</p>
      </template>
    </el-image>
    <div class="introduction-icon-div">
      <div style="flex: 2"/>
      <el-space>
        <Zhihu @click="open('https://www.zhihu.com/people/alphaztx')"/>
        <Github @click="open('https://github.com/AlphaZTX')"/>
        <Bilibili @click="open('https://space.bilibili.com/1643519436')"/>
        <CTAN @click="open('https://www.ctan.org/author/zhang-tx')"/>
      </el-space>

      <div style="flex: 2"/>
    </div>
  </div>
</template>

<style scoped>
.dog-head {
    border-radius: 100%;
    cursor: grab;
    margin: 10pt 20pt;
    min-width: 150px;
}

.dog-head:hover {
    margin: 10pt 10pt;
}

.introduction-icon-div {
    display: flex;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .dog-head {
        margin: 5pt 10pt;
    }
}
</style>