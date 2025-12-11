<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const emit = defineEmits(['start-music']) // 仍然需要触发 App.vue 的音乐

const startReport = () => {
  emit('start-music') // 通知父级播放音乐
  router.push('/report') // 路由跳转到 Swiper 页
}
</script>

<template>
  <div class="home-page">
    <h1 class="title">2024<br>ZUEL年度账单</h1>
    <p>i中南为你生成专属回忆</p>
    <button class="start-btn" @click="startReport">开启年度账单</button>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}
.title { font-size: 3rem; margin-bottom: 2rem; }
.start-btn {
  margin-top: 3rem; padding: 1rem 3rem; font-size: 1.2rem;
  border-radius: 50px; border: none; cursor: pointer;
  background: white; color: #333;
}
</style>
