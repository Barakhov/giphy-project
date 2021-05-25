<template>
  <div id="app">
    <BaseHeader />
    <main>
      <input type="text" @input="searchGifs" />

      <GifsList v-if="searchedGifs.length" :gifs="searchedGifs" />
      <GifsList :gifs="gifs" />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import GifsList from '@/components/GifsList.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    GifsList,
  },
  data() {
    return {
      gifs: [],
      searchedGifs: [],
    }
  },
  created() {
    this.loadData()
    // this.searchGifs()
  },
  methods: {
    async loadData() {
      const response = await fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=Jpq36rYnmRXjPUc0qfqxEAple8aeiOzG&limit=10'
      )
      const { data } = await response.json()

      this.gifs = data
    },
    async searchGifs(event) {
      const text = event.target.value
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Jpq36rYnmRXjPUc0qfqxEAple8aeiOzG&limit=10&q=${text}`
      )
      const { data } = await response.json()

      this.searchedGifs = data
    },
  },
}
</script>
