<template>
  <div class="item-row" :class="{ done: item.done }">
    <span>{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemRow',
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
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 8px;
}

.item-row.done span {
  text-decoration: line-through;
  color: #aaa;
}
</style>