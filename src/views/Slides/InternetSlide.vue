<script setup>
import BaseCard from '../../components/BaseCard.vue'
import { useReportData } from '../../composables/useReportData'

const { reportData } = useReportData()
</script>

<template>
  <div class="slide-container">
    <BaseCard title="🌐 联在中南大">
      <div class="info-group">
        <p>畅游数字海洋</p>
        <p>全年累计使用流量</p>
        <p class="highlight-lg">{{ reportData.internet.totalGB }} <span class="unit">GB</span></p>
      </div>
      <div class="info-group">
        <p>记得那个深夜吗？</p>
        <p class="highlight-time">{{ reportData.internet.latestTime }}</p>
        <p>是你最晚的下线记录</p>
        <p class="tips">熬夜伤身，要早点休息哦~</p>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.info-group { margin-bottom: 2rem; }
.unit { font-size: 1.5rem; }
.highlight-lg { color: #00d2ff; font-size: 3rem; font-weight: bold; margin: 10px 0; }
.highlight-time { color: #ff6b6b; font-size: 2.5rem; font-weight: bold; margin: 10px 0; }
.tips { font-size: 0.9rem; color: #ddd; margin-top: 10px; font-style: italic; }
</style>
