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
      {{ isPanelVisible ? "Сховати панель" : "Показати панель" }}
    </button>

    <div class="panels">
      <div class="panel">
        <h3>v-if</h3>
        <div v-if="isPanelVisible" class="panel-content">
          <p>Ця панель керується через <strong>v-if</strong></p>
          <p>Елемент повністю зникає з DOM коли прихований</p>
        </div>
      </div>

      <div class="panel">
        <h3>v-show</h3>
        <div v-show="isPanelVisible" class="panel-content">
          <p>Ця панель керується через <strong>v-show</strong></p>
          <p>Елемент залишається в DOM, але має display: none</p>
        </div>
      </div>
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
      isPanelVisible: true,
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
  max-width: 700px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #16c0b0;
}
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

.buttons button,
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #16c0b0;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
}

.buttons button:hover,
button:hover {
  background: #13a89a;
}

.state-block {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  min-height: 80px;
  margin-bottom: 1rem;
}

.loading {
  color: #f39c12;
}
.error {
  color: #e74c3c;
}
.empty {
  color: #aaa;
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

.panel h3 {
  color: #16c0b0;
  margin-top: 0;
}

.panel-content {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
}

.panel-content p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
}
</style>
