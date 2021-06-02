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
  display: inline-block;
  border: 0;
  padding: 4px 8px;
  cursor: pointer;
  background-color: $clr-hl-blue;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: $clr-blue;
    color: $clr-white;
  }

  &.primary {
    background-color: $clr-hl-red;

    &:hover {
      background-color: $clr-red;
    }
  }
}
</style>
