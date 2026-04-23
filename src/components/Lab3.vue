<template>
  <div class="container">
    <h1>Лабораторна робота №3</h1>

    <!-- Задача 1 -->
    <h2>Задача 1 — Стани сторінки</h2>
    <div class="buttons">
      <button @click="isLoading = !isLoading">Toggle Loading</button>
      <button @click="hasError = !hasError">Toggle Error</button>
      <button @click="items = []">Clear Items</button>
      <button @click="addSampleItems">Add Sample Items</button>
    </div>
    <div class="state-block">
      <p v-if="isLoading" class="loading">⏳ Завантаження...</p>
      <p v-else-if="hasError" class="error">❌ Помилка завантаження</p>
      <p v-else-if="items.length === 0" class="empty">📭 Немає даних</p>
      <ul v-else>
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>

    <!-- Задача 2 -->
    <h2>Задача 2 — v-if vs v-show</h2>
    <button @click="isPanelVisible = !isPanelVisible">
      {{ isPanelVisible ? 'Сховати панель' : 'Показати панель' }}
    </button>
    <div class="panels">
      <div class="panel">
        <h3>v-if</h3>
        <div v-if="isPanelVisible" class="panel-content">
          <p>Керується через <strong>v-if</strong> — зникає з DOM</p>
        </div>
      </div>
      <div class="panel">
        <h3>v-show</h3>
        <div v-show="isPanelVisible" class="panel-content">
          <p>Керується через <strong>v-show</strong> — display: none</p>
        </div>
      </div>
    </div>

    <!-- Задача 3 -->
    <h2>Задача 3 — Список продуктів</h2>
    <div class="input-row">
      <input v-model="newProduct.title" placeholder="Назва продукту..." />
      <select v-model="newProduct.category">
        <option value="A">Категорія A</option>
        <option value="B">Категорія B</option>
        <option value="C">Категорія C</option>
      </select>
      <button @click="addProduct">Додати</button>
    </div>
    <div class="product-list">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        :class="{
          'category-a': product.category === 'A',
          'category-b': product.category === 'B',
          'category-c': product.category === 'C'
        }"
      >
        <span class="product-title">{{ product.title }}</span>
        <span class="product-badge">{{ product.category }}</span>
        <button class="delete" @click="removeProduct(product.id)">✕</button>
      </div>
    </div>

    <!-- Задача 4 -->
    <h2>Задача 4 — Фільтрація</h2>
    <div class="filter-row">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">Всі</button>
      <button :class="{ active: filter === 'A' }" @click="filter = 'A'">Категорія A</button>
      <button :class="{ active: filter === 'B' }" @click="filter = 'B'">Категорія B</button>
      <button :class="{ active: filter === 'C' }" @click="filter = 'C'">Категорія C</button>
    </div>

    <p class="counter">Показано {{ filteredProducts.length }} із {{ products.length }}</p>

    <p v-if="filteredProducts.length === 0" class="empty">🔍 Нічого не знайдено</p>
    <div v-else class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
        :class="{
          'category-a': product.category === 'A',
          'category-b': product.category === 'B',
          'category-c': product.category === 'C'
        }"
      >
        <span class="product-title">{{ product.title }}</span>
        <span class="product-badge">{{ product.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabThree',
  data() {
    return {
      isLoading: false,
      hasError: false,
      items: [
        { id: 1, title: 'Елемент 1' },
        { id: 2, title: 'Елемент 2' },
        { id: 3, title: 'Елемент 3' }
      ],
      isPanelVisible: true,
      newProduct: { title: '', category: 'A' },
      products: [
        { id: 1, title: 'Ноутбук', category: 'A' },
        { id: 2, title: 'Смартфон', category: 'B' },
        { id: 3, title: 'Навушники', category: 'A' },
        { id: 4, title: 'Планшет', category: 'C' },
        { id: 5, title: 'Клавіатура', category: 'B' }
      ],
      filter: 'all'
    }
  },
  computed: {
    filteredProducts() {
      if (this.filter === 'all') return this.products
      return this.products.filter(p => p.category === this.filter)
    }
  },
  methods: {
    addSampleItems() {
      this.items = [
        { id: 1, title: 'Елемент 1' },
        { id: 2, title: 'Елемент 2' },
        { id: 3, title: 'Елемент 3' }
      ]
    },
    addProduct() {
      if (!this.newProduct.title.trim()) return
      this.products.push({
        id: Date.now(),
        title: this.newProduct.title.trim(),
        category: this.newProduct.category
      })
      this.newProduct.title = ''
    },
    removeProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

h1 { color: #16C0B0; }
h2 {
  color: #2c3e50;
  margin-top: 2rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #16C0B0;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
}

button:hover { background: #13a89a; }

.state-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  min-height: 80px;
  margin-bottom: 1rem;
}

.loading { color: #f39c12; }
.error { color: #e74c3c; }
.empty { color: #aaa; text-align: center; padding: 1rem 0; }

ul { list-style: none; padding: 0; margin: 0; }
li { padding: 0.6rem 1rem; border-bottom: 1px solid #f0f0f0; }

.panels {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.panel {
  flex: 1;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
}

.panel h3 { color: #16C0B0; margin-top: 0; }

.panel-content {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
}

.panel-content p { margin: 0.3rem 0; font-size: 0.9rem; }

.input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.input-row input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  min-width: 150px;
}

.input-row input:focus { border-color: #16C0B0; }

.input-row select {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.product-card {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #eee;
  gap: 1rem;
}

.product-title { flex: 1; font-size: 1rem; }

.product-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
}

.category-a { border-left: 4px solid #16C0B0; }
.category-a .product-badge { background: #16C0B0; }

.category-b { border-left: 4px solid #9b59b6; }
.category-b .product-badge { background: #9b59b6; }

.category-c { border-left: 4px solid #e67e22; }
.category-c .product-badge { background: #e67e22; }

.delete {
  background: none;
  color: #ccc;
  font-size: 1rem;
  padding: 0.2rem 0.4rem;
}

.delete:hover {
  color: #e74c3c;
  background: #ffeaea;
}

.filter-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.filter-row button.active {
  background: #0e8a7e;
  outline: 2px solid #16C0B0;
}

.counter {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}
</style>
