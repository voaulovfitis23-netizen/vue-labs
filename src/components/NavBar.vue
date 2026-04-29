<template>
  <nav class="navbar">
    <div class="logo">🛍️ MyShop</div>
    <div class="links">
      <router-link to="/">Головна</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/profile">Профіль</router-link>
      <router-link to="/about">Про нас</router-link>
    </div>
  </nav>
</template>

<script>
export default { name: 'NavBar' }
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  padding: 0.75rem 2rem;
}

.logo {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}

.links {
  display: flex;
  gap: 1.5rem;
}

.links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.links a:hover { opacity: 1; }

.links a.router-link-active {
  opacity: 1;
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>