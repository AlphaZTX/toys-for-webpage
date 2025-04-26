<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import getGlobalProperties from "@/utils/global.js";

const isDark = getGlobalProperties().$isDark;
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Top/>
    <div class="app-all">
      <div class="my-intro-part">
        <Introduction/>
      </div>
      <div class="my-act-part">
        <el-scrollbar class="app-scrollbar">
          <p style="margin-left: 10pt; font-size: 20px;">
            My <vue-latex :expression="'\\LaTeX'" fontsize="20"/> packages:
          </p>
          <ul style="margin-left: 10pt; font-size: 20px;">
            <li>
              <el-link style="font-size: 20px" target="_blank" type="primary"
                         href="https://github.com/AlphaZTX/fixdif">
              fixdif:</el-link>
              <el-text style="font-size: 20px"> The fixdif package provides an interface for
              defining the style of differential operators.</el-text>
            </li>
            <li>
              <el-link style="font-size: 20px" target="_blank" type="primary"
                       href="https://github.com/AlphaZTX/physics2">
                physics2:</el-link>
              <el-text style="font-size: 20px"> This package defines commands for typesetting math formulae faster and more simply.</el-text>
            </li>
            <li>
              <el-link style="font-size: 20px" target="_blank" type="primary"
                       href="https://github.com/AlphaZTX/unimath-plain-xetex">
                unimath-plain-xetex:</el-link>
              <el-text style="font-size: 20px"> This package provides OpenType math support in (plain) XeTeX. See unimath-plain-xetex-doc.pdf for more information.</el-text>
            </li>
          </ul>
          <el-button :dark="isDark" class="my-button" style="margin-left: 10pt;
          font-size: 20px;" round type="primary">
            Clock
          </el-button>
        </el-scrollbar>
      </div>
    </div>
  </ElConfigProvider>
</template>

<style scoped>
.app-all {
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - calc(2rem + 5vw) - 14pt);
}

.my-intro-part {
    border-right: 2px solid var(--el-border-color);
    flex: 1;
}

.my-act-part {
    flex: 3;
}

.app-scrollbar {
    max-height: calc(100vh - calc(2rem + 5vw) - 14pt);
}

@media screen and (max-width: 768px) {
    .app-all {
        display: block;
    }

    .my-intro-part {
        border-bottom: 2px solid var(--el-border-color);
        border-right: unset;
        display: block;
    }

    .app-scrollbar {
        max-height: unset;
    }
}
</style>
