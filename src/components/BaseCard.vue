<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="card">
    <h2 v-if="title">{{ title }}</h2>
    <div class="card-content">
      <slot></slot> <!-- 插槽，放置具体内容 -->
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 80%;
  max-height: 70%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  color: #fff;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 0.5rem;
}
</style>
