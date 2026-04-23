<template>
  <div class="item-form">
    <input
      v-model="newTitle"
      placeholder="Введіть нотатку..."
      @keyup.enter="submit"
    />
    <button @click="submit">Додати</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemForm",
  emits: ["add-item"],
  data() {
    return {
      newTitle: "",
      error: "",
    };
  },
  methods: {
    submit() {
      if (!this.newTitle.trim()) {
        this.error = "Поле не може бути порожнім!";
        return;
      }
      if (this.newTitle.trim().length < 3) {
        this.error = "Мінімум 3 символи!";
        return;
      }
      this.$emit("add-item", this.newTitle.trim());
      this.newTitle = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
.item-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  min-width: 150px;
}

input:focus {
  border-color: #16c0b0;
}

button {
  padding: 0.6rem 1.2rem;
  background: #16c0b0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #13a89a;
}

.error {
  width: 100%;
  color: #e74c3c;
  font-size: 0.9rem;
  margin: 0;
}
</style>
