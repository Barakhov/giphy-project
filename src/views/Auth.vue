<template>
  <section>
    <div class="auth-links d--f jc--sa">
      <router-link to="/auth/login">Iniciar sesión</router-link>
      <router-link to="/auth/register">Regístrate</router-link>
    </div>

    <!-- router-view inside a router-view -->
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/scss/variables.scss';

.auth-links {
  margin-bottom: 20px;

  a {
    font-weight: $bold;
    font-size: $fs-h4;
    color: $clr-1;
  }
}
</style>
