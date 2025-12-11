<script setup>
import BaseCard from '../../components/BaseCard.vue'
import { useReportData } from '../../composables/useReportData'

const { reportData } = useReportData()
</script>

<template>
  <div class="slide-container">
    <BaseCard title="📚 学在中南大">
      <div class="info-group">
        <p>这一年你一共上了 <span class="highlight">{{ reportData.class.totalHours }}</span> 课时</p>
      </div>
      <div class="info-group">
        <p>最常去的教室是</p>
        <p class="highlight-lg">{{ reportData.class.favRoom }}</p>
      </div>
      <div class="info-group">
        <p>去得最多的教学楼是</p>
        <p class="highlight-l">{{ reportData.class.favBuilding }}</p>
      </div>
    </BaseCard>
  </div>
</template>
<!-- 样式同上，实际开发建议用 CSS 变量或全局样式 -->
<style scoped>
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.highlight { color: #ffd700; font-weight: bold; font-size: 1.5rem; }
.highlight-lg { color: #ffd700; font-size: 2rem; font-weight: bold; margin: 10px 0; }
.highlight-l { color: #ffd700; font-size: 2.5rem; font-weight: bold; margin: 10px 0; }
</style>
