<template>
  <div class="item-row" :class="{ done: item.done }">
    <input type="checkbox" :checked="item.done" @change="$emit('toggle-item', item.id)" />
    <span>{{ item.title }}</span>
    <button class="delete" @click="$emit('delete-item', item.id)">✕</button>
  </div>
</template>

<script>
export default {
  name: 'ItemRow',
  emits: ['delete-item', 'toggle-item'],
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.item-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 8px;
}

.item-row:hover { background: #f9f9f9; }

.item-row.done span {
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
</style>