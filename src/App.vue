<script >
import appHeader from './components/appHeader.vue'
import { store } from `./store`
import appMain from './components/appMain.vue'



export default {
  components: {
    appHeader, appMain
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getCharacters() {

      axios
        .get(apiUrl += `${store.apiKey}${store.apiUrlMovies}${store.apiSearchText}`)
        .then(res => {
          store.movies = ;
        })
        .catch(err => {
          console.log("Errori, err")
        })
    }
  },
  mounted() {
    this.getCharacters()
  }
}
}
</script>


<template>
  <header>
    <appHeader />
  </header>

  <main>
    <appMain />
  </main>


</template>

<style lang="scss">
@use "./components/style/general.scss";
</style>
