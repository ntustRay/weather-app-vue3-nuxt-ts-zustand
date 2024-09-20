<template>
  <div>
    <form @submit.prevent="addTodo" class="mb-4">
      <input v-model="newTodo" placeholder="新增待辦事項" class="border p-2 mr-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">新增</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="flex items-center mb-2">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" class="mr-2" />
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="ml-auto bg-red-500 text-white px-2 py-1 rounded">刪除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '~/composables/useTodoStore'

// 使用 zustand-vue 的 store
const todoStore = useTodoStore()
const storeTodo = todoStore.addTodo
const removeTodo = todoStore.removeTodo
const toggleTodo = todoStore.toggleTodo

// 選取 todos 狀態
const todos = useTodoStore((state) => state.todos)

// 本地新增待辦事項的輸入框狀態
const newTodo = ref('')

// 新增待辦事項的函數
const addTodo = () => {
  if (newTodo.value.trim()) {
    storeTodo(newTodo.value.trim())  // 調用 zustand store 的 addTodo 方法
    newTodo.value = ''  // 清空輸入框
  }
}
</script>
