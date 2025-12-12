<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

// 引入所有业务组件
import CanteenSlide from './slides/canteenslide.vue'
import StudySlide from './Slides/studyslide.vue'
import SportsSlide from './slides/sportsslide.vue'
import InternetSlide from './slides/internetslide.vue'
import PersonaSlide from './slides/personaslide.vue'
import SummarySlide from './slides/summaryslide.vue'
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
