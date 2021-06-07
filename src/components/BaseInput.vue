<template>
  <input
    v-bind="$props"
    @input="changeValue($event)"
    @keyup.enter="$emit('key-enter')"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validate: (value) =>
        ['text', 'number', 'email', 'password'].includes(value),
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Type here man...',
    },
  },
  methods: {
    changeValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
input {
  padding: 4px 8px;
  background-color: $clr-4;
  color: $clr-1;
  border: 1px solid $clr-1;
  font-weight: 700;
  font-size: 1.333rem;
  box-shadow: 2px 2px;
  min-height: 42px;
}
</style>
