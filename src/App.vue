<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
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
          <p style="margin-left: 10pt; font-size: 3rem;">
            Wait for my
            <el-link style="font-size: 3rem; padding-bottom: 0.4rem;" type="success" target="_blank"
                     href="https://github.com/AlphaZTX/LaTeX-tutorials">
              book
            </el-link>
            📕.
          </p>
          <p style="margin-left: 10pt; font-size: 3rem;">
            Coming soon.😉
          </p>
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
