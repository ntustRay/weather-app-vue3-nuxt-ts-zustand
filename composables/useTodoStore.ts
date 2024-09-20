import {v4 as uuidv4} from 'uuid'
import {create} from 'zustand-vue'

interface Todo {
  id: string  // 將 id 改為 string 類型
  text: string
  completed: boolean
}

interface TodoStore {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, {id: uuidv4(), text, completed: false}]  // 使用 uuid 生成唯一 ID
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}))
