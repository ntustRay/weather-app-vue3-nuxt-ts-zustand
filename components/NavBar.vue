<template>
  <nav class="h-full bg-gray-800 text-white p-4">
    <h1 class="text-xl font-bold mb-4">我的應用</h1>
    <ul>
      <li class="mb-2">
        <NuxtLink to="/" class="hover:text-blue-300">天氣小部件</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todo" class="hover:text-blue-300">待辦事項</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// 不需要額外的邏輯
</script>