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
      validate: (value) => ['text', 'number'].includes(value),
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
