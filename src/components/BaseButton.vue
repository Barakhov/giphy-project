<template>
  <button
    class="base-button"
    :class="theme"
    :type="type"
    @click="$emit('click')"
  >
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
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss">
.base-button {
  font-family: $base-ff;
  display: inline-block;
  border: 0;
  padding: 4px 8px;
  cursor: pointer;
  background-color: $clr-4;
  color: $clr-1;
  border: 1px solid $clr-1;
  font-weight: $bold;
  font-size: $fs-h5;
  box-shadow: 2px 2px $clr-2;

  &:hover {
    background-color: $clr-g;
    color: $clr-b;
  }

  &.primary {
    background-color: $clr-1;
    color: $clr-4;

    &:hover {
      background-color: $clr-4;
      color: $clr-1;
    }
  }

  img {
    margin-right: 10px;
  }
}
</style>
