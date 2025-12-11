import { ref, computed } from 'vue'

// 模拟数据
const reportData = ref({
  canteen: { total: 3580.50, favorite: '二食堂', maxDay: '11月11日', maxAmount: 128 },
  class: { totalHours: 860, favRoom: '教三-201', favBuilding: '第三教学楼' },
  sports: { favSport: '羽毛球', appointments: 45, rank: 12 },
  internet: { totalGB: 1024, latestTime: '03:45' }
})

const personas = [
  { id: 1, title: '超级学霸', desc: '图书馆是你第二个家' },
  { id: 2, title: '干饭之王', desc: '二食堂的阿姨都认识你' },
  { id: 3, title: '运动健将', desc: '操场上永远有你的身影' },
  { id: 4, title: '夜猫子', desc: '月亮不睡你不睡' }
]

export function useReportData() {
  // 计算人物形象逻辑
  const myPersona = computed(() => {
    const hour = parseInt(reportData.value.internet.latestTime.split(':')[0])
    if (hour >= 2 && hour <= 5) return personas[3]
    return personas[2]
  })

  return {
    reportData,
    myPersona
  }
}
