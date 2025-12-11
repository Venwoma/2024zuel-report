<script setup>
import { useReportData } from '../../composables/useReportData'

// 直接获取计算好的人物形象
const { myPersona } = useReportData()
</script>

<template>
  <div class="slide-container persona-layout">
    <div class="content-box">
      <h3>大数据分析报告</h3>
      <p class="sub-text">你的年度关键词是</p>

      <!-- 头像区域：这里暂时用文字代替图片，你可以换成 img 标签 -->
      <div class="avatar-circle">
        <span class="avatar-text">{{ myPersona.title[0] }}</span>
      </div>

      <h1 class="persona-title">{{ myPersona.title }}</h1>

      <div class="quote-box">
        <p>“ {{ myPersona.desc }} ”</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff; }

.content-box {
  text-align: center;
  animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.avatar-circle {
  width: 160px; height: 160px;
  background: rgba(255,255,255,0.2);
  border: 4px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  margin: 30px auto;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 30px rgba(255,255,255,0.2);
}

.avatar-text { font-size: 4rem; font-weight: bold; }

.persona-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #fff, #ffd700);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 900;
}

.quote-box {
  background: rgba(0,0,0,0.3);
  padding: 15px 30px;
  border-radius: 30px;
  display: inline-block;
  font-style: italic;
  font-size: 1.1rem;
}

@keyframes popIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
