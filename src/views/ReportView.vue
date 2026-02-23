<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

// 1. 初始化路由（用于跳转到首页）
const router = useRouter()
// 2. 存储 Swiper 实例，用于判断当前页码
const swiperRef = ref(null)
// 3. 标记是否正在跳转（防止重复触发）
const isNavigating = ref(false)

  const handleTouchEnd = (e) => {
  console.log('===== 滑动结束 =====')
  console.log('是否在跳转中：', isNavigating.value)
  console.log('当前swiper页码：', swiperRef.value?.activeIndex)
  console.log('滑动起始X：', startX.value)
  console.log('滑动结束X：', e.changedTouches ? e.changedTouches[0].clientX : e.clientX)
  console.log('滑动距离diffX：', (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - startX.value)
  
  if (isNavigating.value) return
  
  const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
  const diffX = endX - startX.value
  
  console.log('是否满足跳转条件：', swiperRef.value?.activeIndex === 0 && diffX > 50)
  
  if (swiperRef.value?.activeIndex === 0 && diffX > 50) {
    isNavigating.value = true
    console.log('开始跳转首页...')
    router.push({ name: 'home' }).then(() => {
      console.log('跳转成功！')
    }).catch((err) => {
      console.error('跳转失败：', err) // 关键：看路由跳转是否报错
    }).finally(() => {
      isNavigating.value = false
    })
  }
}
  
// 引入所有业务组件
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
      @swiper="(swiper) => swiperRef = swiper" 
      @touchEnd="handleTouchEnd" 
      class="report-swiper"
    >
      <!-- 2. 食堂篇 -->
      <swiper-slide class="bg-canteen">
        <CanteenSlide />
      </swiper-slide>

      <!-- 3. 上课篇 -->
      <swiper-slide class="bg-study">
        <StudySlide />
      </swiper-slide>

      <!-- 4. 运动篇 -->
      <swiper-slide class="bg-sports">
        <SportsSlide />
      </swiper-slide>

      <!-- 5. 上网篇 -->
      <swiper-slide class="bg-internet">
        <InternetSlide />
      </swiper-slide>

      <!-- 6. 人物形象 -->
      <swiper-slide class="bg-persona">
        <PersonaSlide />
      </swiper-slide>

      <!-- 7. 总结 -->
      <swiper-slide class="bg-summary">
        <SummarySlide />
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped>
.report-container { width: 100vw; height: 100vh; overflow: hidden; }
.report-swiper { width: 100%; height: 100%; }

/* 定义每一页的专属背景色 */
.bg-canteen { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
.bg-study { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
.bg-sports { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.bg-internet { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
.bg-persona { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); }
.bg-summary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
</style>
