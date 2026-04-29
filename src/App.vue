<template>
  <div id="app">
    <h1>📝 Реєстрація користувача</h1>
    <form @submit.prevent="handleSubmit">

      <div class="field">
        <label>Ім'я</label>
        <input v-model.trim="form.name" type="text" placeholder="Введіть ім'я" />
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model.trim="form.email" type="email" placeholder="example@email.com" />
      </div>

      <div class="field">
        <label>Пароль</label>
        <input v-model="form.password" type="password" placeholder="Мінімум 6 символів" />
      </div>

      <div class="field">
        <label>Підтвердження пароля</label>
        <input v-model="form.confirmPassword" type="password" placeholder="Повторіть пароль" />
      </div>

      <div class="field">
        <label>Вік</label>
        <input v-model.number="form.age" type="number" placeholder="Від 16 до 99" />
      </div>

      <div class="field checkbox">
        <input v-model="form.agree" type="checkbox" id="agree" />
        <label for="agree">Погоджуюсь з умовами використання</label>
      </div>

      <button type="submit">Зареєструватись</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        agree: false
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.form)
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
  max-width: 500px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
h1 { color: #16C0B0; margin-bottom: 1.5rem; }
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.field label {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
}
.field input[type="text"],
.field input[type="email"],
.field input[type="password"],
.field input[type="number"] {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}
.field input:focus { border-color: #16C0B0; }
.field.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.field.checkbox label { margin: 0; }
button {
  width: 100%;
  padding: 0.75rem;
  background: #16C0B0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
}
button:hover { background: #13a89a; }
button:disabled {
  background: #ddd;
  cursor: not-allowed;
}
</style>