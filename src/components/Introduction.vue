<script setup lang="ts">
import {ref, watch} from 'vue';
import getGlobalProperties from "@/utils/global.js";

defineExpose({
    name: 'Introduction'
})

const isDark = getGlobalProperties().$isDark

const photoSrc = ref(isDark.value ? '/photo-yellow.png' : '/photo.jpg')
watch(isDark, async (newValue) => {
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
        <div class="image-slot">绿🐕加载失败</div>
      </template>
      <template #placeholder>
        <div class="image-slot">Loading ...</div>
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
    min-height: 150px;
}

.dog-head:hover {
    margin: 10pt 10pt;
}

.introduction-icon-div {
    display: flex;
    text-align: center;
}

.image-slot {
    margin-top: 30%;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-family: Arial, serif;
    font-weight: bolder;
}

@media screen and (max-width: 768px) {
    .dog-head {
        margin: 5pt 10pt;
    }
}
</style>