<template>
  <div id="app">
    <h1>Task Manager</h1>
    <TaskStats />
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskStats from './components/TaskStats.vue'
import { useTaskStore } from './stores/taskStore'

export default {
  name: 'App',
  components: { TaskForm, TaskList, TaskStats },
  setup() {
    const store = useTaskStore()
    store.loadFromStorage()
  }
}
</script>

<style>
* { box-sizing: border-box; }
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
}
#app {
  max-width: 650px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
h1 { color: #16C0B0; }
</style>