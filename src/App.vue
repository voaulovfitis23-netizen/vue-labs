<template>
  <div id="app">
    <h1>📰 Каталог постів</h1>

    <p v-if="isLoading" class="loading">⏳ Завантаження...</p>
    <p v-else-if="error" class="error">❌ {{ error }}</p>
    <div v-else-if="items.length === 0" class="empty">📭 Немає даних</div>
    <div v-else>
      <div v-for="item in items" :key="item.id" class="card">
        <span class="card-id">#{{ item.id }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
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
      error: null
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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
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
.loading { color: #f39c12; }
.error { color: #e74c3c; }
.empty { color: #aaa; }
.card {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}
.card:hover { background: #f9f9f9; }
.card-id {
  font-size: 0.8rem;
  color: #aaa;
}
.card h3 {
  margin: 0.3rem 0;
  color: #16C0B0;
  text-transform: capitalize;
}
.card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>