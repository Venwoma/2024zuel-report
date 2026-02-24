<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const audioRef = ref(null)
const isPlaying = ref(false)

const baseUrl = import.meta.env.VITE_BASE_URL || '/';
const bgmUrl = baseUrl + 'bgm.mp3';

const toggleMusic = () => {
  if (audioRef.value) {
    isPlaying.value ? audioRef.value.pause() : audioRef.value.play()
    isPlaying.value = !isPlaying.value
  }
}

const startMusic = () => {
  if (audioRef.value && !isPlaying.value) {
    audioRef.value.play()
    isPlaying.value = true
  }
}
</script>

<template>
  <div class="app-layout">
    <!-- 全局音乐按钮 -->
    <div class="music-control" @click="toggleMusic">
      <div class="music-icon" :class="{ rotating: isPlaying }">🎵</div>
    </div>
    <audio ref="audioRef" loop :src="bgmUrl"></audio>

    <!-- 路由展示区：切换 首页 和 账单页 -->
    <!-- 监听子组件发出的 start-music 事件 -->
    <router-view @start-music="startMusic" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-layout { width: 100vw; height: 100vh; overflow: hidden; font-family: sans-serif; }

.music-control {
  position: fixed; top: 20px; right: 20px; z-index: 1000;
  width: 40px; height: 40px; background: rgba(0,0,0,0.5);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  cursor: pointer; border: 1px solid rgba(255,255,255,0.3);
}
.rotating { animation: rotate 3s linear infinite; }
@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* 页面切换动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
