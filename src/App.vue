<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
* { box-sizing: border-box; }
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
}
#app {
  max-width: 800px;
  margin: 0 auto;
}
.page {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  margin: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
h2 { color: #16C0B0; }
</style>