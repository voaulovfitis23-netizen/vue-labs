<template>
  <div id="app">
    <h1>📰 Каталог постів</h1>

    <!-- Деталі -->
    <div v-if="selectedItem" class="details">
      <button class="back-btn" @click="selectedItem = null">← Назад до списку</button>
      <span class="card-id">#{{ selectedItem.id }}</span>
      <h2>{{ selectedItem.title }}</h2>
      <p>{{ selectedItem.body }}</p>
    </div>

    <!-- Список -->
    <div v-else>
      <input
        v-model="query"
        class="search"
        placeholder="🔍 Пошук за заголовком..."
      />

      <p v-if="isLoading" class="loading">⏳ Завантаження...</p>
      <p v-else-if="error" class="error">❌ {{ error }}</p>
      <div v-else-if="filteredItems.length === 0" class="empty">🔍 Нічого не знайдено</div>
      <div v-else>
        <div v-for="item in filteredItems" :key="item.id" class="card">
          <span class="card-id">#{{ item.id }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
          <button class="details-btn" @click="selectedItem = item">Деталі →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [],
      isLoading: false,
      error: null,
      selectedItem: null,
      query: ''
    }
  },
  computed: {
    filteredItems() {
      if (!this.query.trim()) return this.items
      return this.items.filter(item =>
        item.title.toLowerCase().includes(this.query.toLowerCase())
      )
    }
  },
  async mounted() {
    await this.loadItems()
  },
  methods: {
    async loadItems() {
      this.isLoading = true
      this.error = null
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
        if (!response.ok) throw new Error(`HTTP помилка: ${response.status}`)
        this.items = await response.json()
      } catch (e) {
        this.error = e.message
        this.items = []
      } finally {
        this.isLoading = false
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
.card h3 {
  margin: 0.3rem 0;
  color: #16C0B0;
  text-transform: capitalize;
}
.card p { margin: 0; color: #666; font-size: 0.9rem; }
.details-btn {
  margin-top: 0.5rem;
  padding: 0.3rem 0.8rem;
  background: #16C0B0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
.details-btn:hover { background: #13a89a; }
.details {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
.details h2 {
  color: #16C0B0;
  text-transform: capitalize;
}
.back-btn {
  background: none;
  border: none;
  color: #16C0B0;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  margin-bottom: 1rem;
  display: block;
}
</style>