<template>
  <div id="app">
    <h1>Менеджер нотаток</h1>
    <p class="stats">Всього: {{ items.length }} | Виконано: {{ doneCount }}</p>
    <ItemForm @add-item="addItem" />
    <ItemList
      :items="items"
      @delete-item="deleteItem"
      @toggle-item="toggleItem"
    />
  </div>
</template>

<script>
import ItemForm from './components/ItemForm.vue'
import ItemList from './components/ItemList.vue'

export default {
  name: 'App',
  components: { ItemForm, ItemList },
  data() {
    return {
      items: [
        { id: 1, title: 'Вивчити props у Vue', done: false },
        { id: 2, title: 'Зробити лабораторну роботу', done: true },
        { id: 3, title: 'Здати звіт викладачу', done: false }
      ]
    }
  },
  computed: {
    doneCount() {
      return this.items.filter(i => i.done).length
    }
  },
  methods: {
    addItem(title) {
      this.items.push({
        id: Date.now(),
        title,
        done: false
      })
    },
    deleteItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    toggleItem(id) {
      const item = this.items.find(i => i.id === id)
      if (item) item.done = !item.done
    }
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
.stats {
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
</style>