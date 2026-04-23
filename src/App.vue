<template>
  <div id="app">
    <h1>Task Manager</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: { TaskList },
};
</script>

<style>
* {
  box-sizing: border-box;
}
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #16c0b0;
}
</style>
