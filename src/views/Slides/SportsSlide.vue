<script setup>
import BaseCard from '../../components/BaseCard.vue'
import { useReportData } from '../../composables/useReportData'

const { reportData } = useReportData()
</script>

<template>
  <div class="slide-container">
    <BaseCard title="🏃 燃在中南大">
      <div class="info-group">
        <p>生命在于运动</p>
        <p>你最爱的运动是 <span class="highlight">{{ reportData.sports.favSport }}</span></p>
      </div>
      <div class="info-group">
        <p>这一年</p>
        <p>你一共预约了 <span class="highlight">{{ reportData.sports.appointments }}</span> 次体育场馆</p>
      </div>
      <div class="info-group">
        <p>全校运动达人榜</p>
        <p>你排名第</p>
        <p class="highlight-lg no-1">{{ reportData.sports.rank }}</p>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.info-group { margin-bottom: 2rem; }
.highlight { color: #ffd700; font-weight: bold; font-size: 1.5rem; margin: 0 5px; }
.highlight-lg { color: #ffd700; font-size: 3.5rem; font-weight: bold; margin: 10px 0; text-shadow: 0 4px 10px rgba(0,0,0,0.3); }
</style>
