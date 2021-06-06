<template>
  <div id="app">
    <BaseHeader />
    <main>
      <!-- <input type="text" @input="searchGifs" /> -->

      <LoginForm />

      <BaseInput
        v-model="textFilter"
        name="searchGif"
        placeholder="Tyepea aquí.."
        @key-enter="searchGifs(textFilter)"
      />
      <BaseButton theme="primary" @click="searchGifs(textFilter)">
        <div class="d--f jc--c ai--c">
          <img src="@/assets/icons/eye.svg" alt="" />
          <span>Have a look</span>
        </div>
      </BaseButton>
      <BaseButton @click="resetTextFilter">
        <div class="d--f jc--c ai--c">
          <img src="@/assets/icons/reset.svg" alt="" />
          <span>Reset</span>
        </div>
      </BaseButton>

      <GifsList
        v-if="searchedGifs.length"
        :gifs="searchedGifs"
        section-title="Searched Gifs"
      />
      <GifsList :gifs="gifs" section-title="Trending Gifs" />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import GifsList from '@/components/GifsList.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    GifsList,
    BaseInput,
    BaseButton,
    LoginForm,
  },
  data() {
    return {
      gifs: [],
      searchedGifs: [],
      textFilter: '',
    }
  },
  created() {
    this.loadData()
    // this.searchGifs()
  },
  methods: {
    changeTextFilter(value) {
      this.textFilter = value
    },
    resetTextFilter() {
      this.textFilter = ''
      this.searchedGifs = []
    },
    async loadData() {
      const response = await fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=Jpq36rYnmRXjPUc0qfqxEAple8aeiOzG&limit=10'
      )
      const { data } = await response.json()

      this.gifs = data
    },
    async searchGifs(value) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Jpq36rYnmRXjPUc0qfqxEAple8aeiOzG&limit=10&q=${value}`
      )
      const { data } = await response.json()

      this.searchedGifs = data
    },
  },
}
</script>
