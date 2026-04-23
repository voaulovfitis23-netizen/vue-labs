<template>
  <div class="container">
    <h1>Лабораторна робота №3</h1>

    <!-- Кнопки керування станами -->
    <div class="buttons">
      <button @click="isLoading = !isLoading">Toggle Loading</button>
      <button @click="hasError = !hasError">Toggle Error</button>
      <button @click="items = []">Clear Items</button>
      <button @click="addSampleItems">Add Sample Items</button>
    </div>

    <!-- Стани -->
    <div class="state-block">
      <p v-if="isLoading" class="loading">⏳ Завантаження...</p>
      <p v-else-if="hasError" class="error">❌ Помилка завантаження</p>
      <p v-else-if="items.length === 0" class="empty">📭 Немає даних</p>
      <ul v-else>
        <li v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabThree",
  data() {
    return {
      isLoading: false,
      hasError: false,
      items: [
        { id: 1, title: "Елемент 1" },
        { id: 2, title: "Елемент 2" },
        { id: 3, title: "Елемент 3" },
      ],
    };
  },
  methods: {
    addSampleItems() {
      this.items = [
        { id: 1, title: "Елемент 1" },
        { id: 2, title: "Елемент 2" },
        { id: 3, title: "Елемент 3" },
      ];
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 650px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #16c0b0;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.buttons button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #16c0b0;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
}

.buttons button:hover {
  background: #13a89a;
}

.state-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  min-height: 80px;
}

.loading {
  color: #f39c12;
  font-size: 1.1rem;
}
.error {
  color: #e74c3c;
  font-size: 1.1rem;
}
.empty {
  color: #aaa;
  font-size: 1.1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #f0f0f0;
}
</style>
