<template>
  <section v-if="gif">
    <router-link to="/">Go home</router-link>
    <h3 class="d--f ai--c jc--c clr-1">GifDetail View: {{ gif.title }}</h3>
    <img :src="gif.images.original.url" :alt="gif.title" />
    <p @click="goToNextGif">Go to Next Gif</p>
  </section>
</template>

<script>
export default {
  name: 'GifDetail',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      gif: null,
    }
  },
  // watch: {
  //   $route(to) {
  //     console.log(to)
  //     const id = to.params.id
  //     this.loadData(id)
  //   },
  // },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id
    this.loadData(id)
    next()
  },
  created() {
    this.loadData(this.id)
  },
  // mounted() {
  //   console.log(this.$route.params.id)
  // },
  methods: {
    async loadData(id) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/${id}?api_key=Jpq36rYnmRXjPUc0qfqxEAple8aeiOzG`
      )
      const { data } = await response.json()

      console.log(data)
      this.gif = data
    },
    goToNextGif() {
      this.$router.push(`/gif/ftd3VzKlThXE7P8vZk`)
    },
  },
}
</script>
