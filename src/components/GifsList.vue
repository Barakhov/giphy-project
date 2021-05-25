<template>
  <div>
    <h3>Trending Gifs</h3>
    <section class="gifs-wrapper">
      <div v-for="gif in gifs" :key="gif.id" class="gif-block">
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
  },
  methods: {
    getImage(gif) {
      return gif.images.original.url
    },
  },
}
</script>

<style lang="scss" scoped>
.gifs-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.gif-block {
  position: relative;
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 4px #9e9e9e;
  background-color: #e1e1e1;

  &__p {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    margin: 0;
    text-align: center;
    background-color: #e1e1e1;
  }

  &__img {
    display: block;
    width: 100%;
  }
}
</style>
