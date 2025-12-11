<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

const emit = defineEmits(['start-music'])
const swiperInstance = ref(null)

// 1. 模拟数据 (通常来自后端 API)
const reportData = ref({
  canteen: {
    total: 3580.50,
    favorite: '二食堂',
    maxDay: '11月11日',
    maxAmount: 128
  },
  class: {
    totalHours: 860,
    favRoom: '教三-201',
    favBuilding: '第三教学楼'
  },
  sports: {
    favSport: '羽毛球',
    appointments: 45,
    rank: 12
  },
  internet: {
    totalGB: 1024,
    latestTime: '03:45'
  }
})

// 2. 人物形象逻辑
// 形象列表
const personas = [
  { id: 1, title: '超级学霸', desc: '图书馆是你第二个家' },
  { id: 2, title: '干饭之王', desc: '二食堂的阿姨都认识你' },
  { id: 3, title: '运动健将', desc: '操场上永远有你的身影' },
  { id: 4, title: '夜猫子', desc: '月亮不睡你不睡' }
]

// 根据数据计算人物形象 (这里简单写个随机或固定逻辑，实际可根据消费/上网时间计算)
const myPersona = computed(() => {
  // 示例逻辑：如果上网最晚时间超过2点，就是夜猫子，否则随机
  const hour = parseInt(reportData.value.internet.latestTime.split(':')[0])
  if (hour >= 2 && hour <= 5) return personas[3]
  return personas[2] // 默认示例
})

// 3. 交互逻辑
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const handleStart = () => {
  // 触发音乐播放 (因为浏览器策略，音频必须由用户交互触发)
  emit('start-music')
  // 滑动到下一页
  swiperInstance.value.slideNext()
}

const handleShare = () => {
  alert('截图即可分享给好友哦！')
}

</script>

<template>
  <div class="swiper-box">
    <!-- Swiper 配置:
         direction="horizontal" 实现左右滑
         effect="creative" 实现比较现代的切换效果
    -->
    <swiper
      :modules="[EffectCreative]"
      :slides-per-view="1"
      :space-between="0"
      effect="creative"
      :creative-effect="{
        prev: { shadow: true, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }"
      @swiper="onSwiper"
      class="my-swiper"
    >

      <!-- 第一页：封面 -->
      <swiper-slide class="slide page-intro">
        <div class="content">
          <h1 class="title">2023<br>某某大学<br>年度账单</h1>
          <p class="subtitle">XSimple 为你生成专属回忆</p>
          <button class="start-btn" @click="handleStart">开启年度账单</button>
        </div>
      </swiper-slide>

      <!-- 第二页：食堂篇 -->
      <swiper-slide class="slide page-section">
        <div class="card">
          <h2>🍱 食堂篇</h2>
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
            <p>你好像胃口大开</p>
            <p>一顿吃掉了 <span>{{ reportData.canteen.maxAmount }}</span> 元</p>
          </div>
        </div>
      </swiper-slide>

      <!-- 第三页：上课篇 -->
      <swiper-slide class="slide page-section">
        <div class="card">
          <h2>📚 上课篇</h2>
          <div class="info-group">
            <p>知识由点滴积累</p>
            <p>这一年你一共上了 <span class="highlight">{{ reportData.class.totalHours }}</span> 课时</p>
          </div>
          <div class="info-group">
            <p>最常去的教室是</p>
            <p class="highlight-lg">{{ reportData.class.favRoom }}</p>
          </div>
          <div class="info-group">
            <p>在那栋熟悉的</p>
            <p class="highlight">{{ reportData.class.favBuilding }}</p>
            <p>留下了你匆忙的脚步</p>
          </div>
        </div>
      </swiper-slide>

      <!-- 第四页：运动篇 -->
      <swiper-slide class="slide page-section">
        <div class="card">
          <h2>🏃 运动篇</h2>
          <div class="info-group">
            <p>生命在于运动</p>
            <p>你最爱的运动是 <span class="highlight">{{ reportData.sports.favSport }}</span></p>
          </div>
          <div class="info-group">
            <p>你一共预约了</p>
            <p><span class="highlight">{{ reportData.sports.appointments }}</span> 次体育场馆</p>
          </div>
          <div class="info-group">
            <p>运动达人榜排名第</p>
            <p class="highlight-lg no-1">{{ reportData.sports.rank }}</p>
          </div>
        </div>
      </swiper-slide>

      <!-- 第五页：上网篇 -->
      <swiper-slide class="slide page-section">
        <div class="card">
          <h2>🌐 上网篇</h2>
          <div class="info-group">
            <p>畅游数字海洋</p>
            <p>全年累计使用流量 <span class="highlight">{{ reportData.internet.totalGB }}</span> GB</p>
          </div>
          <div class="info-group">
            <p>记得那个深夜吗？</p>
            <p class="highlight-lg">{{ reportData.internet.latestTime }}</p>
            <p>是你最晚的下线记录</p>
            <p class="tips">早点睡哦，不要熬夜~</p>
          </div>
        </div>
      </swiper-slide>

      <!-- 第六页：人物形象 -->
      <swiper-slide class="slide page-persona">
        <div class="content">
          <h3>根据大数据分析</h3>
          <p>你的年度关键词是</p>
          <div class="avatar-box">
            <!-- 这里可以用 img 标签引入真实的图片 -->
            <!-- <img src="/assets/avatar_1.png" /> -->
            <div class="avatar-placeholder">{{ myPersona.title[0] }}</div>
          </div>
          <h1 class="persona-title">{{ myPersona.title }}</h1>
          <p class="persona-desc">“{{ myPersona.desc }}”</p>
        </div>
      </swiper-slide>

      <!-- 第七页：总结分享 -->
      <swiper-slide class="slide page-summary">
        <div class="content">
          <h2>2023</h2>
          <p>感谢你的每一次努力</p>
          <p>2024，我们继续前行</p>
          <div class="divider"></div>
          <button class="share-btn" @click="handleShare">分享我的年度报告</button>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped lang="scss">
/* 基础布局 */
.swiper-box, .my-swiper {
  width: 100vw;
  height: 100vh;
}

.slide {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 默认背景，可以通过 :nth-child 给每页设置不同渐变 */
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

/* 针对不同页面的背景色微调 */
.page-intro { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.page-persona { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); }
.page-summary { background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%); }

.content {
  text-align: center;
  padding: 2rem;
  animation: fadeIn 1s ease-out;
}

/* 首页样式 */
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.start-btn {
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border: none;
  background: #fff;
  color: #333;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.2s;
  &:active { transform: scale(0.95); }
}

/* 内容卡片样式 */
.card {
  width: 80%;
  height: 70%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 0.5rem;
    width: 100%;
  }
}

.info-group {
  margin-bottom: 2rem;
  width: 100%;
  p {
    font-size: 1.1rem;
    margin: 5px 0;
    line-height: 1.5;
  }
}

/* 高亮文字 */
.highlight {
  color: #ffd700;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 5px;
}
.highlight-lg {
  color: #ffd700;
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  margin: 10px 0;
}
.tips {
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 10px;
}

/* 人物形象页 */
.avatar-box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img { width: 100%; height: 100%; object-fit: cover; }
}

.avatar-placeholder {
  font-size: 4rem;
  font-weight: bold;
}

.persona-title {
  font-size: 2.5rem;
  margin: 1rem 0;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.persona-desc {
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.9;
}

/* 总结页 */
.share-btn {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 30px;
  border-radius: 30px;
  margin-top: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover { background: rgba(255,255,255,0.1); }
}

/* 简单的入场动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
