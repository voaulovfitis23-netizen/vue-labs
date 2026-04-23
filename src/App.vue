<template>
  <div id="app">
    <h1>Менеджер нотаток</h1>
    <ItemForm />
    <ItemList />
  </div>
</template>

<script>
import ItemForm from './components/ItemForm.vue'
import ItemList from './components/ItemList.vue'

export default {
  name: 'App',
  components: { ItemForm, ItemList }
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
  max-width: 650px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
h1 { color: #16C0B0; }
</style>