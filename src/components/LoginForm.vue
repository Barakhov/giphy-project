<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <BaseInput
      v-model="form.email"
      type="email"
      name="loginEmail"
      placeholder="Email here"
    />
    <BaseInput
      v-model="form.password"
      type="password"
      name="loginPassword"
      placeholder="Password here"
    />
    <BaseButton type="submit" theme="primary">Iniciar sesión</BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'LoginForm',
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      form: {},
    }
  },
  methods: {
    onSubmit() {
      const isValid = this.validateForm()
      if (isValid) {
        this.$emit('submit-form')
      }
    },
    validateForm() {
      return this.form.email && this.form.password
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/scss/variables.scss';

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $clr-hl-yellow;
  padding: 20px;
}
</style>
