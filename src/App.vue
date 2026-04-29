<template>
  <div id="app">
    <h1>📰 Каталог постів</h1>

    <input
      v-model="store.query"
      class="search"
      placeholder="🔍 Пошук..."
    />

    <p v-if="store.isLoading" class="loading">⏳ Завантаження...</p>
    <p v-else-if="store.error" class="error">❌ {{ store.error }}</p>
    <div v-else-if="store.filteredItems.length === 0" class="empty">📭 Немає даних</div>
    <div v-else>
      <div v-for="item in store.filteredItems" :key="item.id" class="card">
        <span class="card-id">#{{ item.id }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="store.page === 1">← Попередня</button>
      <span>Сторінка {{ store.page }}</span>
      <button @click="nextPage" :disabled="store.items.length < store.limit">Наступна →</button>
    </div>
  </div>
</template>

<script>
import { usePostsStore } from './stores/postsStore'

export default {
  name: 'App',
  setup() {
    const store = usePostsStore()
    return { store }
  },
  async mounted() {
    await this.store.fetchItems()
  },
  methods: {
    async nextPage() {
      this.store.page++
      await this.store.fetchItems()
    },
    async prevPage() {
      if (this.store.page > 1) {
        this.store.page--
        await this.store.fetchItems()
      }
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
  max-width: 700px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
h1 { color: #16C0B0; }
.search {
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  margin-bottom: 1rem;
}
.search:focus { border-color: #16C0B0; }
.loading { color: #f39c12; }
.error { color: #e74c3c; }
.empty { color: #aaa; text-align: center; padding: 2rem 0; }
.card {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}
.card:hover { background: #f9f9f9; }
.card-id { font-size: 0.8rem; color: #aaa; }
.card h3 { margin: 0.3rem 0; color: #16C0B0; text-transform: capitalize; }
.card p { margin: 0; color: #666; font-size: 0.9rem; }
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
.pagination button {
  padding: 0.5rem 1rem;
  background: #16C0B0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.pagination button:disabled { background: #ddd; cursor: not-allowed; }
.pagination button:hover:not(:disabled) { background: #13a89a; }
.pagination span { color: #666; }
</style>