<script setup lang="ts">
import Top from './components/Top.vue'
import Introduction from "./components/Introduction.vue";
</script>

<template>
  <Top/>
    <div class="app-all">
      <div class="my-intro-part">
        <Introduction/>
      </div>
      <div class="my-act-part">
        <p style="margin-left: 10pt; font-size: 3rem;">
          Coming soon.😉
        </p>
      </div>
    </div>
</template>

<style scoped>
.app-all {
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - calc(2rem + 5vw) - 16pt);
}

.my-intro-part {
    border-right: 2px solid var(--el-border-color);
    flex: 1;
}

.my-act-part {
    flex: 3;
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
}
</style>
