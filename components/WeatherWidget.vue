<template>
  <div class="bg-white shadow-md rounded p-4">
    <h2 class="text-xl font-bold mb-4">{{ city }} Weather</h2>
    <div v-if="weather">
      <p class="text-3xl mb-2">{{ weather.temperature }}°C</p>
      <p>{{ weather.description }}</p>
    </div>
    <p v-else>loading...</p>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

interface Weather {
  temperature: number;
  description: string;
}

const city = ref('Taipei')
const weather = ref<Weather | null>(null)

const fetchWeather = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  weather.value = {
    temperature: 25,
    description: 'Rainy'
  }
}

onMounted(fetchWeather)
</script>