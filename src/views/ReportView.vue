<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

const router = useRouter()
const isNavigating = ref(false)
const startX = ref(0)
const swipeDistance = ref(0) // 当前滑动距离

// 控制提示遮罩显示/透明度
const showSwipeHint = computed(() => swipeDistance.value > 10)
const hintOpacity = computed(() => Math.min(swipeDistance.value / 100, 0.9))

// 触摸开始
const handleTouchStart = (swiper, event) => {
  if (!event.touches || event.touches.length === 0) return
  startX.value = event.touches[0].clientX
  swipeDistance.value = 0
}

// 触摸移动，用于滑动提示
const handleTouchMove = (swiper, event) => {
  if (!event.touches || event.touches.length === 0) return
  const currentX = event.touches[0].clientX
  const diff = currentX - startX.value

  // 仅第一页向右滑时显示提示
  if (swiper.activeIndex === 0 && diff > 0) {
    swipeDistance.value = diff
  } else {
    swipeDistance.value = 0
  }
}

// 触摸结束
const handleTouchEnd = (swiper, event) => {
  if (!event.changedTouches || event.changedTouches.length === 0) return
  const endX = event.changedTouches[0].clientX
  const diff = endX - startX.value

  // 重置滑动提示
  swipeDistance.value = 0

  if (isNavigating.value) return

  // 满足返回条件
  if (swiper.activeIndex === 0 && diff > 80) {
    isNavigating.value = true
    router.replace('/').finally(() => {
      isNavigating.value = false
    })
  }
  startX.value = 0
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
    <!-- 滑动提示遮罩 -->
    <div
      class="swipe-hint"
      v-if="showSwipeHint"
      :style="{ opacity: hintOpacity }"
    >
      <div class="arrow">←</div>
      <div class="text">向右滑动返回首页</div>
    </div>

    <swiper
      :modules="[EffectCreative]"
      :slides-per-view="1"
      direction="horizontal"
      effect="creative"
      :creative-effect="{
        prev: { shadow: true, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }"
      :resistanceRatio="0.85"
      @touchStart="handleTouchStart"
      @touchMove="handleTouchMove"
      @touchEnd="handleTouchEnd"
      class="report-swiper"
    >
      <swiper-slide class="bg-canteen">
        <CanteenSlide />
      </swiper-slide>

      <swiper-slide class="bg-study">
        <StudySlide />
      </swiper-slide>

      <swiper-slide class="bg-sports">
        <SportsSlide />
      </swiper-slide>

      <swiper-slide class="bg-internet">
        <InternetSlide />
      </swiper-slide>

      <swiper-slide class="bg-persona">
        <PersonaSlide />
      </swiper-slide>

      <swiper-slide class="bg-summary">
        <SummarySlide />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.report-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.report-swiper {
  width: 100%;
  height: 100%;
}

/* 滑动提示遮罩 */
.swipe-hint {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* 半透明遮罩 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  transition: opacity 0.2s;
  pointer-events: none;
  z-index: 10;
  font-size: 18px;
  color: white;
  font-weight: bold;
}

.swipe-hint .arrow {
  font-size: 36px;
  margin-right: 10px;
}

/* 背景色 */
.bg-canteen { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
.bg-study { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
.bg-sports { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.bg-internet { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
.bg-persona { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); }
.bg-summary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
</style>