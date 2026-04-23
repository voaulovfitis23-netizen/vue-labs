<template>
  <div class="item-list">
    <p v-if="items.length === 0" class="empty">📭 Список порожній</p>
    <ItemRow
      v-for="item in items"
      :key="item.id"
      :item="item"
      @delete-item="$emit('delete-item', $event)"
      @toggle-item="$emit('toggle-item', $event)"
    />
  </div>
</template>

<script>
import ItemRow from './ItemRow.vue'

export default {
  name: 'ItemList',
  components: { ItemRow },
  emits: ['delete-item', 'toggle-item'],
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.empty {
  text-align: center;
  color: #aaa;
  padding: 2rem 0;
}
</style>