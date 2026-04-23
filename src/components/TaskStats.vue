<template>
  <div class="stats">
    <span>Всього: {{ store.totalCount }}</span>
    <span>Виконано: {{ store.doneCount }}</span>
    <span>Активних: {{ store.activeCount }}</span>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore'

export default {
  name: 'TaskStats',
  setup() {
    const store = useTaskStore()
    return { store }
  }
}
</script>

<style scoped>
.stats {
  display: flex;
  gap: 1rem;
  background: #f4f4f4;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}
</style>