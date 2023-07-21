<script setup lang="ts">
import Zhihu from "./icons/Zhihu.vue";
import Github from "./icons/Github.vue";
import Bilibili from "@/components/icons/Bilibili.vue";
import CTAN from "@/components/icons/CTAN.vue";
import { ref } from 'vue';

defineExpose({
    name: 'Introduction'
})

function open(url: string): void {
  window.open(url)
}

const photo = ref()

function touchDogHead(): void {

}
</script>

<template>
  <div>
    <el-image ref="photo" @click="touchDogHead" class="dog-head" src="/photo.jpg" :fit="'cover'">
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