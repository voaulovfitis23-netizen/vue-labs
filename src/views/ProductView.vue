<template>
  <div class="page">
    <button class="back-btn" @click="$router.back()">← Назад</button>
    <div v-if="product">
      <span class="emoji">{{ product.emoji }}</span>
      <h2>{{ product.title }}</h2>
      <p class="price">💰 {{ product.price }} грн</p>
      <p class="desc">{{ product.description }}</p>
    </div>
    <div v-else>
      <p>Товар не знайдено</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductView',
  data() {
    return {
      products: [
        { id: 1, title: 'Ноутбук', price: 25000, emoji: '💻', description: 'Потужний ноутбук для роботи та навчання.' },
        { id: 2, title: 'Смартфон', price: 12000, emoji: '📱', description: 'Сучасний смартфон з великим екраном.' },
        { id: 3, title: 'Навушники', price: 3000, emoji: '🎧', description: 'Бездротові навушники з шумопоглинанням.' },
        { id: 4, title: 'Планшет', price: 15000, emoji: '📲', description: 'Легкий планшет для розваг і роботи.' },
        { id: 5, title: 'Клавіатура', price: 2000, emoji: '⌨️', description: 'Механічна клавіатура з підсвіткою.' },
        { id: 6, title: 'Миша', price: 800, emoji: '🖱️', description: 'Ергономічна бездротова миша.' }
      ]
    }
  },
  computed: {
    product() {
      return this.products.find(p => p.id === Number(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
.back-btn {
  background: none;
  border: none;
  color: #16C0B0;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  margin-bottom: 1rem;
}

.emoji { font-size: 4rem; }
h2 { color: #16C0B0; margin: 0.5rem 0; }
.price { font-size: 1.3rem; font-weight: bold; color: #2c3e50; }
.desc { color: #666; margin-top: 0.5rem; }
</style>