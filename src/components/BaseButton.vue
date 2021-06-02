<template>
  <button class="base-button" :class="theme" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
      validate: (value) => ['primary'].includes(value),
    },
  },
}
</script>

<style lang="scss">
.base-button {
  background-color: aquamarine;

  &.primary {
    background-color: #fabada;
  }
}
</style>
