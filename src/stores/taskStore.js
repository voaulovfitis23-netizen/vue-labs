import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Вивчити Pinia', done: false },
      { id: 2, title: 'Зробити лабораторну', done: true },
      { id: 3, title: 'Здати звіт', done: false }
    ]
  }),
  actions: {
    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        done: false
      })
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})