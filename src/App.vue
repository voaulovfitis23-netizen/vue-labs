<template>
  <div id="app">
    <h1>Панель керування задачами</h1>

    <!-- Статистика -->
    <div class="stats">
      <span>Всього: {{ total }}</span>
      <span>Виконано: {{ doneCount }}</span>
      <span>Активних: {{ activeCount }}</span>
      <span class="timer">⏱ {{ seconds }} сек.</span>
    </div>

    <!-- Введення нової задачі -->
    <div class="input-row">
      <input v-model="newTitle" placeholder="Нова задача..." @keyup.enter="addTask" />
      <button @click="addTask">Додати</button>
    </div>

    <!-- Фільтри -->
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">Всі</button>
      <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Активні</button>
      <button :class="{ active: filter === 'done' }" @click="filter = 'done'">Виконані</button>
    </div>

    <!-- Список задач -->
    <p v-if="filteredTasks.length === 0" class="empty">Список порожній</p>
    <ul v-else>
      <li v-for="task in filteredTasks" :key="task.id" :class="{ done: task.done }">
        <input type="checkbox" v-model="task.done" @change="saveTasks" />
        <span>{{ task.title }}</span>
        <button class="delete" @click="removeTask(task.id)">✕</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      newTitle: '',
      filter: 'all',
      seconds: 0,
      timer: null
    }
  },
  computed: {
    total() {
      return this.tasks.length
    },
    doneCount() {
      return this.tasks.filter(t => t.done).length
    },
    activeCount() {
      return this.tasks.filter(t => !t.done).length
    },
    filteredTasks() {
      if (this.filter === 'done') return this.tasks.filter(t => t.done)
      if (this.filter === 'active') return this.tasks.filter(t => !t.done)
      return this.tasks
    }
  },
  methods: {
    addTask() {
      if (!this.newTitle.trim()) return
      this.tasks.push({
        id: Date.now(),
        title: this.newTitle.trim(),
        done: false
      })
      this.newTitle = ''
      this.saveTasks()
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  },
  mounted() {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      this.tasks = JSON.parse(saved)
    } else {
      this.tasks = [
        { id: 1, title: 'Вивчити директиви Vue', done: true },
        { id: 2, title: 'Зробити лабораторну роботу', done: false },
        { id: 3, title: 'Здати звіт викладачу', done: false }
      ]
    }
    this.timer = setInterval(() => {
      this.seconds++
    }, 1000)
  },
  unmounted() {
    clearInterval(this.timer)
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        this.saveTasks()
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 600px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

h1 {
  color: #16C0B0;
  margin-bottom: 1rem;
}

.stats {
  display: flex;
  gap: 1rem;
  background: #f4f4f4;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  flex-wrap: wrap;
}

.timer {
  margin-left: auto;
  color: #888;
}

.input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.input-row input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.input-row input:focus {
  border-color: #16C0B0;
}

.input-row button {
  padding: 0.6rem 1.2rem;
  background: #16C0B0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.input-row button:hover {
  background: #13a89a;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filters button {
  padding: 0.4rem 1rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.filters button.active {
  background: #16C0B0;
  color: white;
  border-color: #16C0B0;
}

.empty {
  text-align: center;
  color: #aaa;
  padding: 2rem 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: background 0.2s;
}

li:hover {
  background: #f9f9f9;
}

li.done span {
  text-decoration: line-through;
  color: #aaa;
}

li span {
  flex: 1;
}

li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #16C0B0;
}

.delete {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.delete:hover {
  color: #e74c3c;
  background: #ffeaea;
}
</style>