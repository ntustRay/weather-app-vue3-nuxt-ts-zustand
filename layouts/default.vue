<template>
  <div class="flex h-screen">
    <NavBar class="w-64 bg-gray-100" />
    <div class="flex flex-col flex-grow">
      <AppHeader class="bg-blue-500 text-white p-4" />
      <main class="flex-grow p-4">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>