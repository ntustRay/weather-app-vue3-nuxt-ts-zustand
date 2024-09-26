import {v4 as uuidv4} from 'uuid'
import {create} from 'zustand-vue'

interface Todo { // typescript interface for todo object
  id: string
  text: string
  completed: boolean
}

interface TodoStore { // typescript interface for todo store
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, {id: uuidv4(), text, completed: false}]
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
