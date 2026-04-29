<template>
  <div id="app">
    <h1>📝 Реєстрація користувача</h1>

    <Transition name="success">
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
    </Transition>

    <form @submit.prevent="handleSubmit">

      <div class="field">
        <label>Ім'я</label>
        <input v-model.trim="form.name" type="text" placeholder="Введіть ім'я" />
        <Transition name="error">
          <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
        </Transition>
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model.trim="form.email" type="email" placeholder="example@email.com" />
        <Transition name="error">
          <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </Transition>
      </div>

      <div class="field">
        <label>Пароль</label>
        <input v-model="form.password" type="password" placeholder="Мінімум 6 символів" />
        <Transition name="error">
          <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
        </Transition>
      </div>

      <div class="field">
        <label>Підтвердження пароля</label>
        <input v-model="form.confirmPassword" type="password" placeholder="Повторіть пароль" />
        <Transition name="error">
          <span v-if="errors.confirmPassword" class="error-msg">{{ errors.confirmPassword }}</span>
        </Transition>
      </div>

      <div class="field">
        <label>Вік</label>
        <input v-model.number="form.age" type="number" placeholder="Від 16 до 99" />
        <Transition name="error">
          <span v-if="errors.age" class="error-msg">{{ errors.age }}</span>
        </Transition>
      </div>

      <div class="field checkbox">
        <input v-model="form.agree" type="checkbox" id="agree" />
        <label for="agree">Погоджуюсь з умовами використання</label>
      </div>
      <Transition name="error">
        <span v-if="errors.agree" class="error-msg">{{ errors.agree }}</span>
      </Transition>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Відправляємо...' : 'Зареєструватись' }}
      </button>
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
      },
      errors: {},
      isSubmitting: false,
      successMessage: ''
    }
  },
  watch: {
    'form.name'() { if (this.errors.name) delete this.errors.name },
    'form.email'() { if (this.errors.email) delete this.errors.email },
    'form.password'() { if (this.errors.password) delete this.errors.password },
    'form.confirmPassword'() { if (this.errors.confirmPassword) delete this.errors.confirmPassword },
    'form.age'() { if (this.errors.age) delete this.errors.age },
    'form.agree'() { if (this.errors.agree) delete this.errors.agree }
  },
  methods: {
    validate() {
      const e = {}
      if (!this.form.name) e.name = "Ім'я обов'язкове"
      else if (this.form.name.length < 2) e.name = "Мінімум 2 символи"

      if (!this.form.email) e.email = "Email обов'язковий"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) e.email = "Невірний формат email"

      if (!this.form.password) e.password = "Пароль обов'язковий"
      else if (this.form.password.length < 6) e.password = "Мінімум 6 символів"

      if (!this.form.confirmPassword) e.confirmPassword = "Підтвердіть пароль"
      else if (this.form.password !== this.form.confirmPassword) e.confirmPassword = "Паролі не збігаються"

      if (!this.form.age) e.age = "Вік обов'язковий"
      else if (this.form.age < 16 || this.form.age > 99) e.age = "Вік від 16 до 99"

      if (!this.form.agree) e.agree = "Необхідно погодитись з умовами"

      this.errors = e
      return Object.keys(e).length === 0
    },
    async handleSubmit() {
      if (!this.validate()) return
      this.isSubmitting = true
      this.successMessage = ''

      await new Promise(resolve => setTimeout(resolve, 1500))

      this.isSubmitting = false
      this.successMessage = '🎉 Реєстрація успішна! Ласкаво просимо!'
      this.form = { name: '', email: '', password: '', confirmPassword: '', age: '', agree: false }
      this.errors = {}
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
.error-msg {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  display: block;
}
.success {
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
}
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
button:hover:not(:disabled) { background: #13a89a; }
button:disabled {
  background: #ddd;
  cursor: not-allowed;
}

/* Анімація помилок */
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}
.error-enter-from {
  opacity: 0;
  transform: translateY(-5px);
}
.error-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Анімація успіху */
.success-enter-active,
.success-leave-active {
  transition: all 0.5s ease;
}
.success-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.success-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>