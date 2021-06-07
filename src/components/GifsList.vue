<template>
  <div>
    <h3>
      <slot>
        {{ sectionTitle }}
      </slot>
    </h3>
    <section class="gifs-wrapper">
      <div
        v-for="gif in gifs"
        :key="gif.id"
        class="gif-block"
        @click="selectItem(gif.id)"
      >
        <img class="gif-block__img" :src="getImage(gif)" :alt="gif.title" />
        <p class="gif-block__p">{{ gif.title }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GifList',
  props: {
    gifs: {
      type: Array,
      default: () => [],
    },
    sectionTitle: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImage(gif) {
      return gif.images.original.url
    },
    selectItem(gifId) {
      this.$emit('select-gif', gifId)
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  color: $clr-1;
  margin: 20px 0 10px;
}

.gifs-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.gif-block {
  border: 1px solid $clr-1;

  position: relative;
  display: inline-block;
  overflow: hidden;
  box-shadow: 4px 4px $clr-2;
  background-color: $clr-4;

  &__p {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    margin: 0;
    text-align: center;
    font-size: $fs-h5;
    font-weight: $bold;
    color: $clr-1;
    background-color: $clr-4;
  }

  &__img {
    display: block;
    width: 100%;
  }
}
</style>
