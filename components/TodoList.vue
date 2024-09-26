<template>
  <div>
    <form @submit.prevent="addTodo" class="mb-4">
      <input v-model="newTodo" placeholder="Add todo" class="border p-2 mr-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="flex items-center mb-2">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" class="mr-2" />
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="ml-auto bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useTodoStore} from '../composables/useTodoStore'

// use store of zustand-vue 
const todoStore = useTodoStore()
const storeTodo = todoStore.addTodo
const removeTodo = todoStore.removeTodo
const toggleTodo = todoStore.toggleTodo

// get todo list from zustand store
const todos = useTodoStore((state) => state.todos)

const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    storeTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>
