<template>
  <header>
    <div class="header-title">
      <img
        class="header-title__img"
        src="@/assets/icons/gif.svg"
        alt="Find gifs logo"
      />
      <h2 class="header-title__h2">Find Gifs</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>

<style lang="scss" scoped>
.header-title {
  display: flex;
  align-items: center;

  &__img {
    max-width: 50px;
  }
}
</style>
