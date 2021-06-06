<template>
  <section class="d--f jc--c ai--c">
    <LoginForm @submit-form="navigateToHome" />
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    },
  },
}
</script>
<style scoped></style>
