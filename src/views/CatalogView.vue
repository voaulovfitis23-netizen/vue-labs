<template>
  <div class="page">
    <h2>📦 Каталог</h2>
    <div class="product-list">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/catalog/${product.id}`"
        class="product-card"
      >
        <span class="product-emoji">{{ product.emoji }}</span>
        <div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.price }} грн</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogView',
  data() {
    return {
      products: [
        { id: 1, title: 'Ноутбук', price: 25000, emoji: '💻' },
        { id: 2, title: 'Смартфон', price: 12000, emoji: '📱' },
        { id: 3, title: 'Навушники', price: 3000, emoji: '🎧' },
        { id: 4, title: 'Планшет', price: 15000, emoji: '📲' },
        { id: 5, title: 'Клавіатура', price: 2000, emoji: '⌨️' },
        { id: 6, title: 'Миша', price: 800, emoji: '🖱️' }
      ]
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.product-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}

.product-card:hover { background: #f9f9f9; }

.product-emoji { font-size: 2rem; }

h3 { margin: 0; color: #16C0B0; }
p { margin: 0.3rem 0 0; color: #888; }
</style>