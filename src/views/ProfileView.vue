<template>
  <div class="page">
    <h2>👤 Профіль</h2>
    <div class="profile-nav">
      <router-link to="/profile/info">Інформація</router-link>
      <router-link to="/profile/settings">Налаштування</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default { name: 'ProfileView' }
</script>

<style scoped>
.profile-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.75rem;
}

.profile-nav a {
  text-decoration: none;
  color: #888;
  font-size: 1rem;
  padding-bottom: 0.5rem;
}

.profile-nav a.router-link-active {
  color: #16C0B0;
  font-weight: bold;
  border-bottom: 2px solid #16C0B0;
}
</style>