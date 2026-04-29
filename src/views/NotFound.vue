<template>
  <div class="page not-found">
    <div class="code">404</div>
    <h2>Сторінку не знайдено</h2>
    <p>Такої сторінки не існує або вона була переміщена.</p>
    <div class="buttons">
      <router-link to="/" class="btn">🏠 На головну</router-link>
      <button class="btn btn-back" @click="$router.back()">← Назад</button>
    </div>
  </div>
</template>

<script>
export default { name: 'NotFound' }
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 3rem;
}

.code {
  font-size: 6rem;
  font-weight: bold;
  color: #16C0B0;
  line-height: 1;
}

h2 { color: #2c3e50; }
p { color: #888; }

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: #16C0B0;
  color: white;
}

.btn-back {
  background: #f0f0f0;
  color: #2c3e50;
}

.btn:hover { opacity: 0.9; }
</style>
