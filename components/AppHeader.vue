<template>
  <header class="bg-blue-600 text-white p-4">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const title = computed(() => route.path === '/' ? '天氣小部件' : '待辦事項')
</script>