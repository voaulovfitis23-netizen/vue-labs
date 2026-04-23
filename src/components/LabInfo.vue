<template>
  <div class="lab-info">
    <h2>Дисципліна: {{ discipline }}</h2>
    <p>Тема: {{ topic }}</p>
  </div>
</template>

<script>
export default {
  name: 'LabInfo',
  props: {
    discipline: String,
    topic: String
  }
}
</script>

<style>
.lab-info {
  margin-top: 1rem;
  padding: 1rem;
  border-left: 4px solid #16C0B0;
  background-color: #f4f4f4;
}

h2 {
  color: #42b983;
}
</style>