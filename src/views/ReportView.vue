<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

// 1. 路由实例
const router = useRouter()
// 2. Swiper 实例
const swiperRef = ref(null)
// 3. 跳转标记
let isNavigating = false // 改用 let，避免 ref 响应式导致的作用域问题
// 4. 滑动起始位置（改用普通变量，彻底解决未定义问题）
let startX = 0 

// 5. 滑动开始：记录起始位置（确保变量赋值正确）
const handleTouchStart = (e) => {
  // 兼容移动端/PC端
  startX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX
  console.log('滑动开始，startX：', startX) // 验证赋值
}

// 6. 滑动结束：核心逻辑（修复 startX 未定义）
const handleTouchEnd = (e) => {
  console.log('===== 滑动结束 =====')
  console.log('是否在跳转中：', isNavigating)
  console.log('当前swiper页码：', swiperRef.value?.activeIndex)
  
  if (isNavigating) return
  
  // 计算滑动结束位置和距离
  const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  const diffX = endX - startX // 现在 startX 已定义，不会报错
  console.log('滑动起始X：', startX)
  console.log('滑动结束X：', endX)
  console.log('滑动距离diffX：', diffX)
  
  // 关键判断：第一页 + 右滑距离>30px（降低阈值，提高触发概率）
  const canJump = swiperRef.value?.activeIndex === 0 && diffX > 30
  console.log('是否满足跳转条件：', canJump)
  
  if (canJump) {
    isNavigating = true
    // 跳转首页（用 name 跳转，最稳妥）
    router.push({ name: 'home' })
      .then(() => {
        console.log('跳转首页成功！')
      })
      .catch((err) => {
        console.error('跳转失败：', err)
        // 兜底：原生跳转，确保能回去
        window.location.href = '/'
      })
      .finally(() => {
        isNavigating = false
        startX = 0 // 重置起始位置
      })
  }
}

// 7. Swiper 初始化：确保实例正确获取
const initSwiper = (swiper) => {
  swiperRef.value = swiper
  console.log('Swiper初始化，当前页码：', swiper.activeIndex)
}

// 引入业务组件
import CanteenSlide from './Slides/CanteenSlide.vue'
import StudySlide from './Slides/StudySlide.vue'
import SportsSlide from './Slides/SportsSlide.vue'
import InternetSlide from './Slides/InternetSlide.vue'
import PersonaSlide from './Slides/PersonaSlide.vue'
import SummarySlide from './Slides/SummarySlide.vue'
</script>

<template>
  <div class="report-container">
    <swiper
      :modules="[EffectCreative]"
      :slides-per-view="1"
      direction="horizontal"
      effect="creative"
      :creative-effect="{
        prev: { shadow: true, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }"
      :allow-touch-move="true"
      :allow-slide-prev="false" <!-- 禁止第一页左滑，避免Swiper拦截右滑 -->
      @swiper="initSwiper" <!-- 初始化Swiper实例 -->
      <!-- 监听原生滑动事件（绕过Swiper的事件拦截） -->
      @touchstart="handleTouchStart"
      @mousedown="handleTouchStart"
      @touchend="handleTouchEnd"
      @mouseup="handleTouchEnd"
      class="report-swiper"
    >
      <swiper-slide class="bg-canteen">
        <CanteenSlide />
      </swiper-slide>
      <swiper-slide class="bg-study"><StudySlide /></swiper-slide>
      <swiper-slide class="bg-sports"><SportsSlide /></swiper-slide>
      <swiper-slide class="bg-internet"><InternetSlide /></swiper-slide>
      <swiper-slide class="bg-persona"><PersonaSlide /></swiper-slide>
      <swiper-slide class="bg-summary"><SummarySlide /></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.report-container { 
  width: 100vw; 
  height: 100vh; 
  overflow: hidden; 
  touch-action: pan-x; /* 允许水平滑动，避免浏览器拦截 */
}
.report-swiper { width: 100%; height: 100%; }

/* 背景样式 */
.bg-canteen { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
.bg-study { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
.bg-sports { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.bg-internet { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
.bg-persona { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); }
.bg-summary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
</style>
