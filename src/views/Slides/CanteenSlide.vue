<script setup>
import BaseCard from '../../components/BaseCard.vue'
import { useReportData } from '../../composables/useReportData'

const { reportData } = useReportData()
</script>

<template>
  <div class="slide-container">
    <BaseCard title="🍱 食在中南大">
      <div class="info-group">
        <p>这一年</p>
        <p>你在食堂一共消费了 <span class="highlight">{{ reportData.canteen.total }}</span> 元</p>
      </div>
      <div class="info-group">
        <p>你的味蕾最钟情于</p>
        <p class="highlight-lg">{{ reportData.canteen.favorite }}</p>
      </div>
      <div class="info-group">
        <p><span>{{ reportData.canteen.maxDay }}</span> 这一天</p>
        <p>一顿吃掉了 <span>{{ reportData.canteen.maxAmount }}</span> 元</p>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
/* 这里的样式可以将之前写的公共样式提取到 assets/base.css 引入，或者简单复制 */
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.info-group { margin-bottom: 1.5rem; }
.highlight { color: #ffd700; font-weight: bold; font-size: 1.5rem; }
.highlight-lg { color: #ffd700; font-size: 2.5rem; font-weight: bold; margin: 10px 0; }
</style>
