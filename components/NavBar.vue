<template>
  <nav class="h-full bg-gray-800 text-white p-4">
    <h1 class="text-xl font-bold mb-4">Applications</h1>
    <ul>
      <li class="mb-2">
        <NuxtLink to="/" class="hover:text-blue-300">Weather App</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todo" class="hover:text-blue-300">ToDo List</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>