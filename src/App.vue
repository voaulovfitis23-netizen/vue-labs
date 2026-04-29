<template>
  <div id="app">
    <h1>📰 Каталог постів</h1>

    <p v-if="isLoading" class="loading">⏳ Завантаження...</p>
    <p v-else-if="error" class="error">❌ {{ error }}</p>
    <p v-else-if="items.length === 0" class="empty">📭 Немає даних</p>
    <p v-else class="ready">✅ Дані завантажено</p>
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
.ready { color: #27ae60; }
</style>