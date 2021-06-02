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
@import '@/assets/styles/scss/variables.scss';

.base-button {
  background-color: $clr-hl-blue;

  &.primary {
    background-color: $clr-hl-red;
  }
}
</style>
