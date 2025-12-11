<script setup>
const handleShare = () => {
  // 简单的提示，实际项目中可能需要生成海报图片的插件如 html2canvas
  alert('截图即可分享给好友哦！')
}
</script>

<template>
  <div class="slide-container">
    <div class="summary-content">
      <h1 class="year">2024</h1>
      <p class="text">凡是过往，皆为序章</p>
      <p class="text">感谢你的每一次努力</p>

      <div class="divider"></div>

      <p class="bye">2025，ZUEL我们继续前行</p>

      <button class="share-btn" @click="handleShare">✨ 分享我的年度报告</button>
    </div>
  </div>
</template>

<style scoped>
.slide-container { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff; text-align: center; }

.year {
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 5px;
  margin-bottom: 20px;
  text-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.text { font-size: 1.2rem; margin: 10px 0; opacity: 0.9; }

.divider { width: 50px; height: 4px; background: #fff; margin: 30px auto; border-radius: 2px; }

.bye { font-size: 1.5rem; font-weight: bold; margin-bottom: 50px; }

.share-btn {
  background: white;
  color: #333;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
}

.share-btn:active { transform: scale(0.95); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2); }
</style>
