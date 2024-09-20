<template>
  <div class="bg-white shadow-md rounded p-4">
    <h2 class="text-xl font-bold mb-4">{{ city }} 天氣</h2>
    <div v-if="weather">
      <p class="text-3xl mb-2">{{ weather.temperature }}°C</p>
      <p>{{ weather.description }}</p>
    </div>
    <p v-else>加載中...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const city = ref('台北')
const weather = ref(null)

const fetchWeather = async () => {
  // 這裡應該使用實際的天氣 API
  // 以下為模擬數據
  await new Promise(resolve => setTimeout(resolve, 1000))
  weather.value = {
    temperature: 25,
    description: '晴天'
  }
}

onMounted(fetchWeather)
</script>