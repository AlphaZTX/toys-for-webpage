<script setup lang="ts">
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

defineExpose({
    name: 'Top'
})
</script>

<template>
  <div class="my-div">
    <div style="flex: 1"></div>
    <div class="my-head">
      <span class="my-beating-heart">🧡</span>AlphaZTX
      <span class="my-beating-heart">🧡</span>
    </div>
    <div style="flex: 1"></div>
    <div class="my-button-div">
      <button class="my-button" @click="toggleDark()">
        <span id="top-bu-span">
          {{ isDark ? '🌙深色' : '🔆浅色' }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
div.my-head {
    font-family: Georgia, serif;
    font-size: calc(1rem + 5vw);
    text-align: center;
    align-items: center;
    display: flex;
    height: calc(1rem + 5vw);
}

@keyframes beat-heart {
    from {
        font-size: calc(1rem + 5vw);
    }
    to {
        font-size: calc(0.5rem + 3vw);
    }
}

@-webkit-keyframes beat-heart {
    from {
        font-size: calc(1rem + 5vw);
    }
    to {
        font-size: calc(0.5rem + 3vw);
    }
}

span.my-beating-heart {
    font-size: calc(1rem + 4vw);
    animation: beat-heart 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    display: flex;
}

.my-button-div {
    height: auto;
    align-items: center;
    display: flex;
    margin-right: 0.5rem;
}

.my-button {
    border-radius: var(--el-border-radius-round);
}

.my-button:hover {
    cursor: pointer;
}

.my-div {
    display: flex;
    text-align: center;
    border-bottom: 2px solid var(--el-border-color);
    height: calc(2rem + 5vw);
}

#top-bu-span {
    font-size: 1rem;
}
</style>