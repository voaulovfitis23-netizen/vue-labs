<template>
  <div class="task-list">
    <p v-if="store.tasks.length === 0" class="empty">📭 Список порожній</p>
    <div
      v-for="task in store.tasks"
      :key="task.id"
      class="task-row"
      :class="{ done: task.done }"
    >
      <input type="checkbox" :checked="task.done" @change="store.toggleTask(task.id)" />
      <span>{{ task.title }}</span>
      <button class="delete" @click="store.removeTask(task.id)">✕</button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore'

export default {
  name: 'TaskList',
  setup() {
    const store = useTaskStore()
    return { store }
  }
}
</script>

<style scoped>
.task-list { margin-top: 1rem; }

.task-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 8px;
}

.task-row:hover { background: #f9f9f9; }

.task-row.done span {
  text-decoration: line-through;
  color: #aaa;
}

span { flex: 1; }

input[type="checkbox"] {
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

.empty {
  text-align: center;
  color: #aaa;
  padding: 2rem 0;
}
</style>